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
#pack beautify stuff
jar cvfe BeautifyScript.jar br.com.chrishansen.aimgames.builder.BeautifyScript br/com/chrishansen/aimgames/builder/BeautifyScript.class || exit 1

mv AddUserscriptLines.jar ../AddUserscriptLines.jar
mv IncrementBuildNumber.jar ../IncrementBuildNumber.jar
mv BeautifyScript.jar ../BeautifyScript.jar
mkdir ../libraries
mv libraries/beautifier.js ../libraries/beautifier.js

cd ..

#build scripts

#Argument 1 is the file that will be output, argument 2 is the file that will be input, argument 3 is the number of lines to be kept from the start of the file.
#../ means "go back one folder"
sh compile.sh ../bin/swearify.compiled.user.js "../swearify/swearify.user.js" 15 || exit 1
sh compile.sh ../bin/swearify_v2.compiled.user.js "../swearify/swearify_v2.user.js" 17 || exit 1
sh compile.sh ../bin/alive.compiled.user.js "../alive/alive.user.js" 8 || exit 1
sh compile.sh ../bin/chatboxplusplus.compiled.user.js "../alive/chatboxplusplus.user.js" 9 || exit 1
sh compile.sh ../bin/chameleon.compiled.user.js "../chameleon/chameleon.user.js" 11 || exit 1
sh compile.sh ../bin/chameleon_random.compiled.user.js "../chameleon/chameleon_random.user.js" 8 || exit 1
sh compile.sh ../bin/chameleon_vampire.compiled.user.js "../chameleon/chameleon_vampire.user.js" 7 || exit 1
sh compile.sh ../bin/accountassist.compiled.user.js "../other/accountassist.user.js" 11 || exit 1
sh compile.sh ../bin/ratebot.compiled.user.js "../other/ratebot.user.js" 9 || exit 1
sh compile.sh ../bin/imagereuploader.compiled.user.js "../swearify/imagereuploader.user.js" 9 || exit 1
sh compile.sh ../bin/swearify_image_utility.compiled.user.js "../swearify/swearify_image_utility.user.js" 8 || exit 1
sh increment.sh || exit 1

#return to home
cd ..
