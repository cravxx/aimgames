# Scripts for AIM Games [![Travis Build Status](https://travis-ci.org/HulaSamsquanch/aimgames.svg?branch=master)](https://travis-ci.org/HulaSamsquanch/aimgames) [![Latest Release Version](https://img.shields.io/github/release/HulaSamsquanch/aimgames.svg)](https://github.com/HulaSamsquanch/aimgames/releases/latest)
[![Github Issues](http://githubbadges.herokuapp.com/HulaSamsquanch/aimgames/issues.svg)](https://github.com/HulaSamsquanch/aimgames/issues) [![Pending Pull Requests](http://githubbadges.herokuapp.com/HulaSamsquanch/aimgames/pulls.svg)](https://github.com/HulaSamsquanch/aimgames/pulls)
[![Licensed under the MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

_For the end user..._[<sup><sup>[regarding chrome support]</sup></sup>](https://github.com/HulaSamsquanch/aimgames/wiki/Chromium-support)  
[![Firefox 38+ Supported](https://img.shields.io/badge/firefox-38%2B-orange.svg)](https://www.mozilla.org/firefox/new/) [![Greasemonkey 3.0+ Support](https://img.shields.io/badge/greasemonkey-3.0%2B-yellow.svg)](http://www.greasespot.net/)

_For compilation..._  
[![Oracle Java JDK 8+ Required and Supported](https://img.shields.io/badge/java-JDK_8-ff69b4.svg)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

View [the wiki](https://github.com/HulaSamsquanch/aimgames/wiki/) for more information.

## Compiling
Successfully tested and working under Unix and Windows.

1. Install the lastest version of the [Java JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
1. Add Java to PATH ([windows tutorial](http://www.kingluddite.com/tools/how-do-i-add-java-to-my-windows-path), [other OSes](https://www.java.com/en/download/help/path.xml)).
1. Modify the `instructions.txt` file as you wish.
1. Run `build.sh` (Unix) or `build.bat` (Windows)
1. Your compiled file(s) should be available in the `bin/` folder.

### `instructions.txt` Syntax
`linesToKeep [number]`  
`[compiled file location] [source file location]`  
linesToKeep is not required but it is recommended.

### Planned features
- Automatic compiling through Travis CI (partially finished)
