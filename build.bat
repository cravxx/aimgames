java -version
dir
cd build
cd src/
javac br/com/chrishansen/aimgames/builder/*.java
jar cvfe build.jar br.com.chrishansen.aimgames.builder.Build br/com/chrishansen/aimgames/builder/*.class
move build.jar ../build.jar
cd ..
java -jar build.jar