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
jar cvfe AddUserscriptLines.jar br.com.chrishansen.aimgames.builder.AddUserscriptLines br/com/chrishansen/aimgames/builder/AddUserscriptLines.class
@REM pack IncrementBuildNumber
jar cvfe IncrementBuildNumber.jar br.com.chrishansen.aimgames.builder.IncrementBuildNumber br/com/chrishansen/aimgames/builder/IncrementBuildNumber.class

move AddUserscriptLines.jar ..\AddUserscriptLines.jar
move IncrementBuildNumber.jar ..\IncrementBuildNumber.jar
@cd ..

@REM build scripts

@REM Argument 1 is the file that will be output, argument 2 is the file that will be input, argument 3 is the number of lines to be kept from the start of the file.
@REM ..\ means "go back one folder"
call compile ..\bin\swearify.compiled.user.js "..\swearify\swearify.user.js" 15
call increment

@REM return to home
@cd ..