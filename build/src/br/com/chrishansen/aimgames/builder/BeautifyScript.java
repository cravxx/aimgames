package br.com.chrishansen.aimgames.builder;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class BeautifyScript {
    
    public static void main(final String[] args) {
        
        if (args.length < 1) throw new RuntimeException("not enough arguments"); //we need a file
        
        ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
        try {
            engine.eval(new FileReader("libraries/beautifier.js")); //load the js
            
            File toClear = new File(args[0]);
            BufferedReader r = new BufferedReader(new FileReader(toClear)); //read the file
            String toBeautify = "";
            for (String s = ""; s != null; s = r.readLine()) {
                toBeautify = toBeautify + s + "\r\n";
            }
            r.close();
            
            Invocable invocable = (Invocable) engine;

            String result = (String) invocable.invokeFunction("js_beautify", toBeautify); //beautify

            //write to our file
            toClear.delete();
            PrintWriter fout = new PrintWriter(new FileOutputStream(toClear));
            fout.print(result);
            fout.close();
            
        } catch (ScriptException | NoSuchMethodException | IOException e) {
            e.printStackTrace();
        }
        
    }

}
