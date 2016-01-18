package br.com.chrishansen.aimgames.builder;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class IncrementBuildNumber {

    public static void main(String[] args) throws IOException {
        if (args.length < 1)
            throw new RuntimeException("not enough arguments to program");

        File buildFile = new File("./" + args[0]);

        if (buildFile != null)
            if (buildFile.exists()) {
                // get contents
                final FileInputStream fis = new FileInputStream(buildFile);
                final BufferedReader br = new BufferedReader(new InputStreamReader(fis));
                final String line = br.readLine().substring(15); //Build number: #
                final int buildnum = Integer.parseInt(line);
                br.close();

                // write
                final DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
                //get current date time with Date()
                final Date date = new Date();
                final FileOutputStream fos = new FileOutputStream(buildFile);
                fos.write(
                        ("Build number: #" + (buildnum + 1) + "\r\nBuild date: " + dateFormat.format(date)).getBytes());
                fos.close();
            } else {
                buildFile.createNewFile();
                // just write
                final DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
                //get current date time with Date()
                final Date date = new Date();
                final FileOutputStream fos = new FileOutputStream(buildFile);
                fos.write(("Build number: #1" + "\r\nBuild date: " + dateFormat.format(date)).getBytes());
                fos.close();
            }
    }
}
