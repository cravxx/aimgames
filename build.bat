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
call compile ..\bin\alive.min.user.js "..\alive\alive.user.js" 10
call compile ..\bin\chatboxplusplus-v2.min.user.js "..\alive\chatboxplusplus-v2.user.js" 10
call compile ..\bin\chatboxplusplus.min.user.js "..\alive\chatboxplusplus.user.js" 10
call compile ..\bin\elementremover.min.user.js "..\alive\elementremover.user.js" 10
call compile ..\bin\accountassist.compiled.min.user.js "..\bin\accountassist.compiled.min.user.js" 10
call compile ..\bin\alive.compiled.min.user.js "..\bin\alive.compiled.min.user.js" 10
call compile ..\bin\chameleon.compiled.min.user.js "..\bin\chameleon.compiled.min.user.js" 10
call compile ..\bin\chameleon_random.compiled.min.user.js "..\bin\chameleon_random.compiled.min.user.js" 10
call compile ..\bin\chameleon_vampire.compiled.min.user.js "..\bin\chameleon_vampire.compiled.min.user.js" 10
call compile ..\bin\chatboxplusplus-v2.compiled.min.user.js "..\bin\chatboxplusplus-v2.compiled.min.user.js" 10
call compile ..\bin\chatboxplusplus.compiled.min.user.js "..\bin\chatboxplusplus.compiled.min.user.js" 10
call compile ..\bin\imagereuploader.compiled.min.user.js "..\bin\imagereuploader.compiled.min.user.js" 10
call compile ..\bin\ratebot.compiled.min.user.js "..\bin\ratebot.compiled.min.user.js" 10
call compile ..\bin\swearify.compiled.min.user.js "..\bin\swearify.compiled.min.user.js" 10
call compile ..\bin\swearify_image_utility.compiled.min.user.js "..\bin\swearify_image_utility.compiled.min.user.js" 10
call compile ..\bin\swearify_v2.compiled.min.user.js "..\bin\swearify_v2.compiled.min.user.js" 10
call compile ..\bin\chameleon.min.user.js "..\chameleon\chameleon.user.js" 10
call compile ..\bin\chameleon_random.min.user.js "..\chameleon\chameleon_random.user.js" 10
call compile ..\bin\chameleon_vampire.min.user.js "..\chameleon\chameleon_vampire.user.js" 10
call compile ..\bin\AIMEnhanced.min.user.js "..\enhance\AIMEnhanced.user.js" 10
call compile ..\bin\accountassist.min.user.js "..\other\accountassist.user.js" 10
call compile ..\bin\animmex-fix.min.user.js "..\other\animmex-fix.user.js" 10
call compile ..\bin\dc4in-bypass.min.user.js "..\other\dc4in-bypass.user.js" 10
call compile ..\bin\discordjs-docs-improve.min.user.js "..\other\discordjs-docs-improve.user.js" 10
call compile ..\bin\dragon-city-show-sessionid.min.user.js "..\other\dragon-city-show-sessionid.user.js" 10
call compile ..\bin\encurtar-link-bypass.min.user.js "..\other\encurtar-link-bypass.user.js" 10
call compile ..\bin\github-image-utility.min.user.js "..\other\github-image-utility.user.js" 10
call compile ..\bin\googledocs-fast-download.min.user.js "..\other\googledocs-fast-download.user.js" 10
call compile ..\bin\HRK-bypass.min.user.js "..\other\HRK-bypass.user.js" 10
call compile ..\bin\igg-games-bypass.min.user.js "..\other\igg-games-bypass.user.js" 10
call compile ..\bin\kisshider.min.user.js "..\other\kisshider.user.js" 10
call compile ..\bin\linkshrink-bypass.min.user.js "..\other\linkshrink-bypass.user.js" 10
call compile ..\bin\openload-block-popunder.min.user.js "..\other\openload-block-popunder.user.js" 10
call compile ..\bin\prntsc-redirect.min.user.js "..\other\prntsc-redirect.user.js" 10
call compile ..\bin\ratebot.min.user.js "..\other\ratebot.user.js" 10
call compile ..\bin\sketchucation-aabk.min.user.js "..\other\sketchucation-aabk.user.js" 10
call compile ..\bin\tmturbo-track-downloader.min.user.js "..\other\tmturbo-track-downloader.user.js" 10
call compile ..\bin\uploadshub-anti-ad.min.user.js "..\other\uploadshub-anti-ad.user.js" 10
call compile ..\bin\wikia-bypass.min.user.js "..\other\wikia-bypass.user.js" 10
call compile ..\bin\youtube-improvements.min.user.js "..\other\youtube-improvements.user.js" 10
call compile ..\bin\imagereuploader.min.user.js "..\swearify\imagereuploader.user.js" 10
call compile ..\bin\swearify.min.user.js "..\swearify\swearify.user.js" 10
call compile ..\bin\swearify_image_utility.min.user.js "..\swearify\swearify_image_utility.user.js" 10
call compile ..\bin\swearify_prototype.min.user.js "..\swearify\swearify_prototype.user.js" 10
call compile ..\bin\swearify_v2.min.user.js "..\swearify\swearify_v2.user.js" 10
call compile ..\bin\trigger_remover.min.user.js "..\swearify\trigger_remover.user.js" 10
call compile ..\bin\awayinator.min.user.js "..\trash\awayinator.user.js" 10
call compile ..\bin\instantcena.min.user.js "..\trash\instantcena.user.js" 10
call compile ..\bin\instantisis.min.user.js "..\trash\instantisis.user.js" 10
call compile ..\bin\logger.min.user.js "..\trash\logger.user.js" 10
call compile ..\bin\loginlogout.min.user.js "..\trash\loginlogout.user.js" 10
call compile ..\bin\myoot.min.user.js "..\trash\myoot.user.js" 10
call compile ..\bin\scream.min.user.js "..\trash\scream.user.js" 10
call compile ..\bin\usernamehistory.min.user.js "..\trash\usernamehistory.user.js" 10
call compile ..\bin\classicaim.min.user.js "..\visual\classicaim.user.js" 10
call compile ..\bin\mango.min.user.js "..\visual\mango.user.js" 10
call increment

@REM return to home
@cd ..
