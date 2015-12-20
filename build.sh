java -version
ls -l
cd build
cd src/
javac br/com/chrishansen/aimgames/builder/*.java || { exit 1; } # crashes if error
jar cvfe build.jar br.com.chrishansen.aimgames.builder.Build br/com/chrishansen/aimgames/builder/*.class || { exit 1; } # crashes if error
mv build.jar ../build.jar
cd ..
java -jar build.jar || { exit 1; } # crashes if error