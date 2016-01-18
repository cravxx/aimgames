clear

###############################
## AIMGAMES SCRIPTS COMPILER ##
##  MADE BY RAFA1231518 AKA  ##
##       CHRISHANSEN69       ##
###############################

#"C:/Program Files/Java/jdk1.8.0_65/bin/java" -version
#dir

#build java files

cd build
cd src/

#compile everything
javac br/com/chrishansen/aimgames/builder/*.java || exit 1
#pack AddUserscriptLines
jar cvfe AddUserscriptLines.jar br.com.chrishansen.aimgames.builder.AddUserscriptLines br/com/chrishansen/aimgames/builder/AddUserscriptLines.class || exit 1
#pack IncrementBuildNumber
jar cvfe IncrementBuildNumber.jar br.com.chrishansen.aimgames.builder.IncrementBuildNumber br/com/chrishansen/aimgames/builder/IncrementBuildNumber.class || exit 1

mv AddUserscriptLines.jar ../AddUserscriptLines.jar
mv IncrementBuildNumber.jar ../IncrementBuildNumber.jar
cd ..

#build scripts

#Argument 1 is the file that will be output, argument 2 is the file that will be input, argument 3 is the number of lines to be kept from the start of the file.
#../ means "go back one folder"
sh compile.sh ../bin/swearify.compiled.user.js "../swearify/swearify.user.js" 15 || exit 1
sh increment.sh || exit 1

#return to home
cd ..