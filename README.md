# Scripts for AIM Games [![Travis Build Status](https://travis-ci.org/HulaSamsquanch/aimgames.svg?branch=master)](https://travis-ci.org/HulaSamsquanch/aimgames)
[![Firefox 38+ Support](https://img.shields.io/badge/firefox-38%2B-orange.svg)](https://www.mozilla.org/firefox/new/)
[![Oracle Java JDK 8+ Support](https://img.shields.io/badge/java-JDK_8-ff69b4.svg)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
[![Licensed under the MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)
[![Github Issues](http://githubbadges.herokuapp.com/HulaSamsquanch/aimgames/issues.svg)](https://github.com/HulaSamsquanch/aimgames/issues)
[![Pending Pull Requests](http://githubbadges.herokuapp.com/HulaSamsquanch/aimgames/pulls.svg)](https://github.com/HulaSamsquanch/aimgames/pulls)

View [the wiki](https://github.com/HulaSamsquanch/aimgames/wiki/) for more information.

## Compiling
Successfully tested and working under Unix and Windows.

1. Install the lastest version of the [Java JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
2. Add Java to PATH ([windows tutorial](http://www.kingluddite.com/tools/how-do-i-add-java-to-my-windows-path), [other OSes](https://www.java.com/en/download/help/path.xml)).
3. Navigate to the `build/` folder.
4. Modify the `instructions.txt` file as you wish.
5. Run `java -jar build.jar` or double-click the build.jar file.
6. Your compiled file should be available in the `bin/` folder.

### `instructions.txt` Syntax
`linesToKeep [number]`  
`[compiled file location] [source file location]`  
linesToKeep is not required but it is recommended.

### Planned features
- Automatic compiling through Travis CI (partially finished)
