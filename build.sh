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
sh compile.sh ../bin/alive.user.js "../alive/alive.user.js" 10 || exit 1
sh compile.sh ../bin/chatboxplusplus-v2.user.js "../alive/chatboxplusplus-v2.user.js" 10 || exit 1
sh compile.sh ../bin/chatboxplusplus.user.js "../alive/chatboxplusplus.user.js" 10 || exit 1
sh compile.sh ../bin/elementremover.user.js "../alive/elementremover.user.js" 10 || exit 1
sh compile.sh ../bin/accountassist.compiled.user.js "../bin/accountassist.compiled.user.js" 10 || exit 1
sh compile.sh ../bin/alive.compiled.user.js "../bin/alive.compiled.user.js" 10 || exit 1
sh compile.sh ../bin/chameleon.compiled.user.js "../bin/chameleon.compiled.user.js" 10 || exit 1
sh compile.sh ../bin/chameleon_random.compiled.user.js "../bin/chameleon_random.compiled.user.js" 10 || exit 1
sh compile.sh ../bin/chameleon_vampire.compiled.user.js "../bin/chameleon_vampire.compiled.user.js" 10 || exit 1
sh compile.sh ../bin/chatboxplusplus-v2.compiled.user.js "../bin/chatboxplusplus-v2.compiled.user.js" 10 || exit 1
sh compile.sh ../bin/chatboxplusplus.compiled.user.js "../bin/chatboxplusplus.compiled.user.js" 10 || exit 1
sh compile.sh ../bin/imagereuploader.compiled.user.js "../bin/imagereuploader.compiled.user.js" 10 || exit 1
sh compile.sh ../bin/ratebot.compiled.user.js "../bin/ratebot.compiled.user.js" 10 || exit 1
sh compile.sh ../bin/swearify.compiled.user.js "../bin/swearify.compiled.user.js" 10 || exit 1
sh compile.sh ../bin/swearify_image_utility.compiled.user.js "../bin/swearify_image_utility.compiled.user.js" 10 || exit 1
sh compile.sh ../bin/swearify_v2.compiled.user.js "../bin/swearify_v2.compiled.user.js" 10 || exit 1
sh compile.sh ../bin/chameleon.user.js "../chameleon/chameleon.user.js" 10 || exit 1
sh compile.sh ../bin/chameleon_random.user.js "../chameleon/chameleon_random.user.js" 10 || exit 1
sh compile.sh ../bin/chameleon_vampire.user.js "../chameleon/chameleon_vampire.user.js" 10 || exit 1
sh compile.sh ../bin/AIMEnhanced.user.js "../enhance/AIMEnhanced.user.js" 10 || exit 1
sh compile.sh ../bin/accountassist.user.js "../other/accountassist.user.js" 10 || exit 1
sh compile.sh ../bin/animmex-fix.user.js "../other/animmex-fix.user.js" 10 || exit 1
sh compile.sh ../bin/dc4in-bypass.user.js "../other/dc4in-bypass.user.js" 10 || exit 1
sh compile.sh ../bin/discordjs-docs-improve.user.js "../other/discordjs-docs-improve.user.js" 10 || exit 1
sh compile.sh ../bin/dragon-city-show-sessionid.user.js "../other/dragon-city-show-sessionid.user.js" 10 || exit 1
sh compile.sh ../bin/encurtar-link-bypass.user.js "../other/encurtar-link-bypass.user.js" 10 || exit 1
sh compile.sh ../bin/github-image-utility.user.js "../other/github-image-utility.user.js" 10 || exit 1
sh compile.sh ../bin/googledocs-fast-download.user.js "../other/googledocs-fast-download.user.js" 10 || exit 1
sh compile.sh ../bin/HRK-bypass.user.js "../other/HRK-bypass.user.js" 10 || exit 1
sh compile.sh ../bin/igg-games-bypass.user.js "../other/igg-games-bypass.user.js" 10 || exit 1
sh compile.sh ../bin/kisshider.user.js "../other/kisshider.user.js" 10 || exit 1
sh compile.sh ../bin/linkshrink-bypass.user.js "../other/linkshrink-bypass.user.js" 10 || exit 1
sh compile.sh ../bin/openload-block-popunder.user.js "../other/openload-block-popunder.user.js" 10 || exit 1
sh compile.sh ../bin/prntsc-redirect.user.js "../other/prntsc-redirect.user.js" 10 || exit 1
sh compile.sh ../bin/ratebot.user.js "../other/ratebot.user.js" 10 || exit 1
sh compile.sh ../bin/sketchucation-aabk.user.js "../other/sketchucation-aabk.user.js" 10 || exit 1
sh compile.sh ../bin/tmturbo-track-downloader.user.js "../other/tmturbo-track-downloader.user.js" 10 || exit 1
sh compile.sh ../bin/uploadshub-anti-ad.user.js "../other/uploadshub-anti-ad.user.js" 10 || exit 1
sh compile.sh ../bin/wikia-bypass.user.js "../other/wikia-bypass.user.js" 10 || exit 1
sh compile.sh ../bin/youtube-improvements.user.js "../other/youtube-improvements.user.js" 10 || exit 1
sh compile.sh ../bin/imagereuploader.user.js "../swearify/imagereuploader.user.js" 10 || exit 1
sh compile.sh ../bin/swearify.user.js "../swearify/swearify.user.js" 10 || exit 1
sh compile.sh ../bin/swearify_image_utility.user.js "../swearify/swearify_image_utility.user.js" 10 || exit 1
sh compile.sh ../bin/swearify_prototype.user.js "../swearify/swearify_prototype.user.js" 10 || exit 1
sh compile.sh ../bin/swearify_v2.user.js "../swearify/swearify_v2.user.js" 10 || exit 1
sh compile.sh ../bin/trigger_remover.user.js "../swearify/trigger_remover.user.js" 10 || exit 1
sh compile.sh ../bin/awayinator.user.js "../trash/awayinator.user.js" 10 || exit 1
sh compile.sh ../bin/instantcena.user.js "../trash/instantcena.user.js" 10 || exit 1
sh compile.sh ../bin/instantisis.user.js "../trash/instantisis.user.js" 10 || exit 1
sh compile.sh ../bin/logger.user.js "../trash/logger.user.js" 10 || exit 1
sh compile.sh ../bin/loginlogout.user.js "../trash/loginlogout.user.js" 10 || exit 1
sh compile.sh ../bin/myoot.user.js "../trash/myoot.user.js" 10 || exit 1
sh compile.sh ../bin/scream.user.js "../trash/scream.user.js" 10 || exit 1
sh compile.sh ../bin/usernamehistory.user.js "../trash/usernamehistory.user.js" 10 || exit 1
sh compile.sh ../bin/classicaim.user.js "../visual/classicaim.user.js" 10 || exit 1
sh compile.sh ../bin/mango.user.js "../visual/mango.user.js" 10 || exit 1
sh increment.sh || exit 1

#return to home
cd ..
