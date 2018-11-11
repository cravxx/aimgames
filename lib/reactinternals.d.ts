declare const reactInternalsDefaultOptions:  {
  injectToWindow?: boolean = true,
  injectTitle?: string = 'DiscordInternals'
};

/** Options object. You should provide at least one of `before`, `after` or `instead` parameters. Other parameters are optional. */
interface MonkeyPatchOptions {
  /** Callback that will be called before original target method call. You can modify arguments here, so it will be passed to original method. Can be combined with `after`. */
  before?: (data: PatchData) => void;
  /** Callback that will be called after original target method call. You can modify return value here, so it will be passed to external code which calls target method. Can be combined with `before`. */
  after?: (data: PatchData) => void;
  /** Callback that will be called instead of original target method call. You can get access to original method using `originalMethod` parameter if you want to call it, but you do not have to. Can't be combined with `before` and `after`. */
  instead?: (data: PatchData) => any;
  /** Set to `true` if you want to automatically unpatch method after first call. */
  once?: boolean = false;
  /** Set to `true` if you want to suppress log messages about patching and unpatching. Useful to avoid clogging the console in case of frequent conditional patching/unpatching, for example from another monkeyPatch callback. */
  silent?: boolean = false;
  /** You can provide meaningful name for class/object provided in `what` param for logging purposes. By default, this function will try to determine name automatically. */
  displayName?: string;
}

/** Options object. */
interface FindOptions {
  cacheOnly?: boolean = false; // TODO this is wrong it's true in the code but false in the docs
}

/** Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped. */
type CancelPatch = () => void;

/**
 * Predicate for searching module
 * @callback modulePredicate
 * @param {*} module Module to test
 * @return {boolean} Returns `true` if `module` matches predicate.
 */
type ModulePredicate = (module: any) => boolean;

interface ReactInternals {
  /**
   * This function monkey-patches a method on an object. The patching callback may be run before, after or instead of target method.
   * Be careful when monkey-patching. Think not only about original functionality of target method and your changes, but also about developers of other plugins, who may also patch this method before or after you. Try to change target method behaviour as little as possible, and avoid changing method signatures.
   * By default, this function logs to the console whenever a method is patched or unpatched in order to aid debugging by you and other developers, but these messages may be suppressed with the `silent` option.
   * Display name of patched method is changed, so you can see if a function has been patched (and how many times) while debugging or in the stack trace. Also, patched methods have property `__monkeyPatched` set to `true`, in case you want to check something programmatically.
   *
   * @param {object} what Object to be patched. You can can also pass class prototypes to patch all class instances. If you are patching prototype of react component you may also need {@link Renderer.rebindMethods}.
   * @param {string} methodName The name of the target message to be patched.
   * @param {object} options Options object. You should provide at least one of `before`, `after` or `instead` parameters. Other parameters are optional.
   * @param {doPatchCallback} options.before Callback that will be called before original target method call. You can modify arguments here, so it will be passed to original method. Can be combined with `after`.
   * @param {doPatchCallback} options.after Callback that will be called after original target method call. You can modify return value here, so it will be passed to external code which calls target method. Can be combined with `before`.
   * @param {doPatchCallback} options.instead Callback that will be called instead of original target method call. You can get access to original method using `originalMethod` parameter if you want to call it, but you do not have to. Can't be combined with `before` and `after`.
   * @param {boolean} [options.once=false] Set to `true` if you want to automatically unpatch method after first call.
   * @param {boolean} [options.silent=false] Set to `true` if you want to suppress log messages about patching and unpatching. Useful to avoid clogging the console in case of frequent conditional patching/unpatching, for example from another monkeyPatch callback.
   * @param {string} [options.displayName] You can provide meaningful name for class/object provided in `what` param for logging purposes. By default, this function will try to determine name automatically.
   * @return {cancelPatch} Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.
   */
  monkeyPatch: (what: object, methodName: string, options: MonkeyPatchOptions) => CancelPatch;
  WebpackModules: {
    /**
     * Look through all modules of internal Discord's Webpack and return first one that matches filter predicate.
     * At first this function will look through already loaded modules cache. If no loaded modules match, then this function tries to load all modules and match for them. Loading any module may have unexpected side effects, like changing current locale of moment.js, so in that case there will be a warning the console. If no module matches, this function returns `null`. You should always try to provide a predicate that will match something, but your code should be ready to receive `null` in case of changes in Discord's codebase.
     * If module is ES6 module and has default property, consider default first; otherwise, consider the full module object.
     * @param {modulePredicate} filter Predicate to match module
     * @param {object} [options] Options object.
     * @param {boolean} [options.cacheOnly=false] Set to `true` if you want to search only the cache for modules.
     * @return {*} First module that matches `filter` or `null` if none match.
     */
    find: (filter: ModulePredicate, options?: FindOptions) => any | null;

    /**
     * Look through all modules of internal Discord's Webpack and return first object that has all of following properties. You should be ready that in any moment, after Discord update, this function may start returning `null` (if no such object exists anymore) or even some different object with the same properties. So you should provide all property names that you use, and often even some extra properties to make sure you'll get exactly what you want.
     * @see Read {@link find} documentation for more details how search works
     * @param {string[]} propNames Array of property names to look for
     * @param {object} [options] Options object to pass to {@link find}.
     * @return {object} First module that matches `propNames` or `null` if none match.
     */
    findByUniqueProperties: (propNames: string[], options?: FindOptions) => any | null;

    /**
     * Look through all modules of internal Discord's Webpack and return first object that has `displayName` property with following value. This is useful for searching for React components by name. Take into account that not all components are exported as modules. Also, there might be several components with the same name.
     * @see Use {@link ReactComponents} as another way to get react components
     * @see Read {@link find} documentation for more details how search works
     * @param {string} displayName Display name property value to look for
     * @param {object} [options] Options object to pass to {@link find}.
     * @return {object} First module that matches `displayName` or `null` if none match.
     */
    findByDisplayName: (displayName: string, options?: FindOptions) => any | null;
  };
  ReactComponents: any;
  Renderer: any;
  Filters: any;
  getInternalInstance: any;
  getOwnerInstance: any;
  versionCompare: any;
  React: any;
}

declare const makeReactInternals: (rootId: string, providedOptions = reactInternalsDefaultOptions) => ReactInternals;
