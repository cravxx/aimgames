cls

@REM ###############################
@REM ## AIMGAMES SCRIPTS COMPILER ##
@REM ##  MADE BY RAFA1231518 AKA  ##
@REM ##       CHRISHANSEN69       ##
@REM ###############################

@REM "C:\Program Files\Java\jdk1.8.0_65\bin\java" -version
@REM dir

@REM build java files

@cd build
@cd src\

@REM compile everything
javac br\com\chrishansen\aimgames\builder\*.java
@REM pack AddUserscriptLines
jar cvfe AddUserscriptLines.jar br.com.chrishansen.aimgames.builder.AddUserscriptLines br\com\chrishansen\aimgames\builder\AddUserscriptLines.class
@REM pack IncrementBuildNumber
jar cvfe IncrementBuildNumber.jar br.com.chrishansen.aimgames.builder.IncrementBuildNumber br\com\chrishansen\aimgames\builder\IncrementBuildNumber.class
@REM pack beautify stuff
jar cvfe BeautifyScript.jar br.com.chrishansen.aimgames.builder.BeautifyScript br\com\chrishansen\aimgames\builder\BeautifyScript.class

move AddUserscriptLines.jar ..\AddUserscriptLines.jar
move IncrementBuildNumber.jar ..\IncrementBuildNumber.jar
move BeautifyScript.jar ..\BeautifyScript.jar
mkdir ..\libraries\
move libraries\beautifier.js ..\libraries\beautifier.js

@cd ..

@REM build scripts

@REM Argument 1 is the file that will be output, argument 2 is the file that will be input, argument 3 is the number of lines to be kept from the start of the file.
@REM ..\ means "go back one folder"
call compile ..\bin\swearify.compiled.user.js "..\swearify\swearify.user.js" 15
call compile ..\bin\swearify_v2.compiled.user.js "..\swearify\swearify_v2.user.js" 17
call compile ..\bin\alive.compiled.user.js "..\alive\alive.user.js" 8
call compile ..\bin\chatboxplusplus.compiled.user.js "..\alive\chatboxplusplus.user.js" 9
call compile ..\bin\chameleon.compiled.user.js "..\chameleon\chameleon.user.js" 11
call compile ..\bin\chameleon_random.compiled.user.js "..\chameleon\chameleon_random.user.js" 8
call compile ..\bin\chameleon_vampire.compiled.user.js "..\chameleon\chameleon_vampire.user.js" 7
call compile ..\bin\accountassist.compiled.user.js "..\other\accountassist.user.js" 11
call compile ..\bin\ratebot.compiled.user.js "..\other\ratebot.user.js" 9
call compile ..\bin\imagereuploader.compiled.user.js "..\swearify\imagereuploader.user.js" 9
call compile ..\bin\swearify_image_utility.compiled.user.js "..\swearify\swearify_image_utility.user.js" 8
call increment

@REM return to home
@cd ..