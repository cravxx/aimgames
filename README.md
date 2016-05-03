# Scripts for AIM Games [![Travis (Unix) Build Status](https://travis-ci.org/HulaSamsquanch/aimgames.svg?branch=master)](https://travis-ci.org/HulaSamsquanch/aimgames) [![Appveyor (Windows) Build Status](https://ci.appveyor.com/api/projects/status/l56ynyon7vnig3og?svg=true)](https://ci.appveyor.com/project/rafa1231518/aimgames)
[![Github Issues](http://githubbadges.herokuapp.com/HulaSamsquanch/aimgames/issues.svg)](https://github.com/HulaSamsquanch/aimgames/issues) [![Pending Pull Requests](http://githubbadges.herokuapp.com/HulaSamsquanch/aimgames/pulls.svg)](https://github.com/HulaSamsquanch/aimgames/pulls)
[![Licensed under the MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)
[![Code Climate](https://img.shields.io/codeclimate/github/HulaSamsquanch/aimgames.svg)](https://codeclimate.com/github/HulaSamsquanch/aimgames)
[![Issue Count](https://codeclimate.com/github/HulaSamsquanch/aimgames/badges/issue_count.svg)](https://codeclimate.com/github/HulaSamsquanch/aimgames)

_For the end user..._  
[![Firefox 38+ Support](https://img.shields.io/badge/firefox-38%2B-orange.svg)](https://www.mozilla.org/firefox/new/) [![Greasemonkey 3.0+ Support](https://img.shields.io/badge/greasemonkey-3.0%2B-yellow.svg)](http://www.greasespot.net/)  
[![Chrome  42+ Support](https://img.shields.io/badge/chrome-42%2B-blue.svg)](http://www.google.com/chrome/)  [![Tampermonkey 3.10+ Support](https://img.shields.io/badge/tampermonkey-3.10%2B-green.svg)](https://tampermonkey.net/)  

_For compilation..._  
[![Oracle Java JDK 8+ Required and Supported](https://img.shields.io/badge/java-JDK_8-ff69b4.svg)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

View [the wiki](https://github.com/HulaSamsquanch/aimgames/wiki/) for more information.

## Compiling

Successfully tested and working under Unix and Windows.

1. Install the lastest version of the [Java JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
1. Add Java to PATH ([windows tutorial](http://www.kingluddite.com/tools/how-do-i-add-java-to-my-windows-path), [other OSes](https://www.java.com/en/download/help/path.xml)).
1. Run `build.sh` (Unix) or `build.bat` (Windows)
1. Your compiled file(s) should be available in the `bin/` folder.

### `instructions.txt` Syntax

`linesToKeep [number]`  
`[compiled file location] [source file location]`  
linesToKeep is not required but it is recommended.

### Planned features

- Automatic compiling through Travis CI (partially finished)
