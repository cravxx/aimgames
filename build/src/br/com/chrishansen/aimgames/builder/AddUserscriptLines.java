package br.com.chrishansen.aimgames.builder;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class AddUserscriptLines {
    public static void main(final String[] args) throws IOException {

        if (args.length < 3)
            throw new RuntimeException("not enough arguments to program");

        //final int linesToKeep = Integer.valueOf(args[2]);

        final String lineFrom = args[1]; //get only argument 2
        System.out.println(lineFrom);
        
        final File f = new File("./" + lineFrom);
        System.out.println("it exists? " + f.exists());
        
        // read lines to keep

        List<String> result = new ArrayList<>();
        
        try (BufferedReader br = getReader(f)) {
            for (;;) {
                String line = br.readLine();
                if (line == null)
                    break;
                result.add(line);
                if (line.trim().equals("// ==/UserScript=="))
                    break;
            }
        }
        
        
        // add kept lines
        final String lineTo = args[0]; //get only argument 1
        System.out.println("lineto " + lineTo);
        
        final File fTo = new File("./" + lineTo);

        if (!fTo.exists())
            fTo.createNewFile();
        
        try (BufferedReader br = getReader(fTo)) {
            for (;;) {
                String line = br.readLine();
                if (line == null)
                    break;
                result.add(line);
            }
        }

        fTo.delete();
        
        final FileOutputStream fos = new FileOutputStream(fTo);
        fos.write(String.join("\r\n", result).getBytes("UTF-8"));
        fos.flush();
        fos.close();
    }

    private static BufferedReader getReader(final File f) throws FileNotFoundException {
        return new BufferedReader(new FileReader(f));
    }
}
