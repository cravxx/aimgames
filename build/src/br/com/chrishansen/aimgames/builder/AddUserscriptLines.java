package br.com.chrishansen.aimgames.builder;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class AddUserscriptLines {
    public static void main(final String[] args) throws IOException, InterruptedException {

        if (args.length < 3)
            throw new RuntimeException("not enough arguments to program");

        final int linesToKeep = Integer.valueOf(args[2]);

        final String lineFrom = args[1]; //get only argument 2
        System.out.println(lineFrom);
        final File f = new File("./" + lineFrom);
        System.out.println("it exists? " + f.exists());
        // read lines to keep
        final BufferedReader reader = new BufferedReader(new FileReader(f));
        String keepLine = "";
        for (int i = 0; i < linesToKeep; i++)
            keepLine = keepLine + reader.readLine() + "\r\n";
        reader.close();
        System.out.println(keepLine);

        // add kept lines
        final String lineTo = args[0]; //get only argument 1
        System.out.println("lineto " + lineTo);
        final File fTo = new File("./" + lineTo);
        if (!fTo.exists())
            fTo.createNewFile();
        final FileInputStream fis = new FileInputStream(fTo);
        final BufferedReader br = new BufferedReader(new InputStreamReader(fis));
        String result = "";
        String resultLine = "";
        while ((resultLine = br.readLine()) != null)
            result = result + resultLine;
        br.close();

        result = keepLine + result;

        fTo.delete();
        final FileOutputStream fos = new FileOutputStream(fTo);
        fos.write(result.getBytes());
        fos.flush();
        fos.close();
    }
}
