java -jar GoogleClosureCompiler.jar --language_in=ECMASCRIPT6_STRICT --language_in=ES5_STRICT --js_output_file=%1 %2
java -jar AddUserscriptLines.jar %1 %2 %3
java -jar BeautifyScript.jar %2