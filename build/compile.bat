java -jar GoogleClosureCompiler.jar --language_in=ECMASCRIPT6_STRICT --language_out=ES5_STRICT --compilation_level=ADVANCED_OPTIMIZATIONS --js_output_file=%1 %2
java -jar AddUserscriptLines.jar %1 %2 %3
@REM java -jar BeautifyScript.jar %2
