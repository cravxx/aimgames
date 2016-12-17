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
call compile ..\bin\alive.user.js "..\alive\alive.user.js" 10
call compile ..\bin\chatboxplusplus-v2.user.js "..\alive\chatboxplusplus-v2.user.js" 10
call compile ..\bin\chatboxplusplus.user.js "..\alive\chatboxplusplus.user.js" 10
call compile ..\bin\elementremover.user.js "..\alive\elementremover.user.js" 10
call compile ..\bin\accountassist.compiled.user.js "..\bin\accountassist.compiled.user.js" 10
call compile ..\bin\alive.compiled.user.js "..\bin\alive.compiled.user.js" 10
call compile ..\bin\chameleon.compiled.user.js "..\bin\chameleon.compiled.user.js" 10
call compile ..\bin\chameleon_random.compiled.user.js "..\bin\chameleon_random.compiled.user.js" 10
call compile ..\bin\chameleon_vampire.compiled.user.js "..\bin\chameleon_vampire.compiled.user.js" 10
call compile ..\bin\chatboxplusplus-v2.compiled.user.js "..\bin\chatboxplusplus-v2.compiled.user.js" 10
call compile ..\bin\chatboxplusplus.compiled.user.js "..\bin\chatboxplusplus.compiled.user.js" 10
call compile ..\bin\imagereuploader.compiled.user.js "..\bin\imagereuploader.compiled.user.js" 10
call compile ..\bin\ratebot.compiled.user.js "..\bin\ratebot.compiled.user.js" 10
call compile ..\bin\swearify.compiled.user.js "..\bin\swearify.compiled.user.js" 10
call compile ..\bin\swearify_image_utility.compiled.user.js "..\bin\swearify_image_utility.compiled.user.js" 10
call compile ..\bin\swearify_v2.compiled.user.js "..\bin\swearify_v2.compiled.user.js" 10
call compile ..\bin\chameleon.user.js "..\chameleon\chameleon.user.js" 10
call compile ..\bin\chameleon_random.user.js "..\chameleon\chameleon_random.user.js" 10
call compile ..\bin\chameleon_vampire.user.js "..\chameleon\chameleon_vampire.user.js" 10
call compile ..\bin\AIMEnhanced.user.js "..\enhance\AIMEnhanced.user.js" 10
call compile ..\bin\accountassist.user.js "..\other\accountassist.user.js" 10
call compile ..\bin\animmex-fix.user.js "..\other\animmex-fix.user.js" 10
call compile ..\bin\dc4in-bypass.user.js "..\other\dc4in-bypass.user.js" 10
call compile ..\bin\discordjs-docs-improve.user.js "..\other\discordjs-docs-improve.user.js" 10
call compile ..\bin\dragon-city-show-sessionid.user.js "..\other\dragon-city-show-sessionid.user.js" 10
call compile ..\bin\encurtar-link-bypass.user.js "..\other\encurtar-link-bypass.user.js" 10
call compile ..\bin\github-image-utility.user.js "..\other\github-image-utility.user.js" 10
call compile ..\bin\googledocs-fast-download.user.js "..\other\googledocs-fast-download.user.js" 10
call compile ..\bin\HRK-bypass.user.js "..\other\HRK-bypass.user.js" 10
call compile ..\bin\igg-games-bypass.user.js "..\other\igg-games-bypass.user.js" 10
call compile ..\bin\kisshider.user.js "..\other\kisshider.user.js" 10
call compile ..\bin\linkshrink-bypass.user.js "..\other\linkshrink-bypass.user.js" 10
call compile ..\bin\openload-block-popunder.user.js "..\other\openload-block-popunder.user.js" 10
call compile ..\bin\prntsc-redirect.user.js "..\other\prntsc-redirect.user.js" 10
call compile ..\bin\ratebot.user.js "..\other\ratebot.user.js" 10
call compile ..\bin\sketchucation-aabk.user.js "..\other\sketchucation-aabk.user.js" 10
call compile ..\bin\tmturbo-track-downloader.user.js "..\other\tmturbo-track-downloader.user.js" 10
call compile ..\bin\uploadshub-anti-ad.user.js "..\other\uploadshub-anti-ad.user.js" 10
call compile ..\bin\wikia-bypass.user.js "..\other\wikia-bypass.user.js" 10
call compile ..\bin\youtube-improvements.user.js "..\other\youtube-improvements.user.js" 10
call compile ..\bin\imagereuploader.user.js "..\swearify\imagereuploader.user.js" 10
call compile ..\bin\swearify.user.js "..\swearify\swearify.user.js" 10
call compile ..\bin\swearify_image_utility.user.js "..\swearify\swearify_image_utility.user.js" 10
call compile ..\bin\swearify_prototype.user.js "..\swearify\swearify_prototype.user.js" 10
call compile ..\bin\swearify_v2.user.js "..\swearify\swearify_v2.user.js" 10
call compile ..\bin\trigger_remover.user.js "..\swearify\trigger_remover.user.js" 10
call compile ..\bin\awayinator.user.js "..\trash\awayinator.user.js" 10
call compile ..\bin\instantcena.user.js "..\trash\instantcena.user.js" 10
call compile ..\bin\instantisis.user.js "..\trash\instantisis.user.js" 10
call compile ..\bin\logger.user.js "..\trash\logger.user.js" 10
call compile ..\bin\loginlogout.user.js "..\trash\loginlogout.user.js" 10
call compile ..\bin\myoot.user.js "..\trash\myoot.user.js" 10
call compile ..\bin\scream.user.js "..\trash\scream.user.js" 10
call compile ..\bin\usernamehistory.user.js "..\trash\usernamehistory.user.js" 10
call compile ..\bin\classicaim.user.js "..\visual\classicaim.user.js" 10
call compile ..\bin\mango.user.js "..\visual\mango.user.js" 10
call increment

@REM return to home
@cd ..
