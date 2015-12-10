# Scripts for AIM Games [![Travis Build](https://travis-ci.org/HulaSamsquanch/aimgames.svg?branch=master)](https://travis-ci.org/HulaSamsquanch/aimgames)

View [the wiki](https://github.com/HulaSamsquanch/aimgames/wiki/) for more information.

## Compiling
_This may only be possible using Windows_

1. Install the lastest version of the Java JDK 8.
2. [Add Java to Path](http://www.kingluddite.com/tools/how-do-i-add-java-to-my-windows-path).
3. Navigate to the `build/` folder.
4. Modify the `instructions.txt` file as you wish.
5. Run `java -jar build.jar` or double-click the build.jar file.
6. Your compiled file should be available in the `bin/` folder.

### `instructions.txt` Syntax
`linesToKeep [number]`  
`[compiled file location] [source file location]`  
linesToKeep is not required but it is recommended.

### Todo
Automatic compiling through Travis CI?
