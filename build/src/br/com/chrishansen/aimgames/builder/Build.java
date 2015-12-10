package br.com.chrishansen.aimgames.builder;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Build {
	public static void main(String[] args) throws IOException, InterruptedException {
		int linesToKeep = 0;
		File buildFile = null;
		for (String line : Files.readAllLines(Paths.get("./instructions.txt"))) { //instructions should be in this file
			if (line.startsWith("linesToKeep ")) {
				linesToKeep = Integer.parseInt(line.substring(12));
			} else if (line.startsWith("buildFolder ")) {
				buildFile = new File("./" + line.substring(12) + "LASTBUILD.txt");
			} else if (!line.startsWith("#") && (!line.trim().equals(""))) { //if line isn't comment or empty
				String lineFrom = line.substring(line.indexOf(" ") + 1).replace("\"", ""); //get only argument 2
				System.out.println(lineFrom);
				File f = new File("./" + lineFrom);
				System.out.println("it exists? " + f.exists());
				// read lines to keep
				BufferedReader reader = new BufferedReader(new FileReader(f));
				String keepLine = "";
				for (int i = 0; i < linesToKeep; i++) {
					keepLine = keepLine + reader.readLine() + "\r\n";
				}
				reader.close();
				System.out.println(keepLine);

				// compiler
				compile(line);

				// add kept lines
				String lineTo = line.substring(0, line.indexOf(" ")).replace("\"", ""); //get only argument 1
				System.out.println("lineto " + lineTo);
				File fTo = new File("./" + lineTo);
				FileInputStream fis = new FileInputStream(fTo);
				BufferedReader br = new BufferedReader(new InputStreamReader(fis));
				String result = "";
				String resultLine = "";
				while( (resultLine = br.readLine()) != null){
				 result = result + resultLine;
				}
				br.close();

				result = keepLine + result;

				fTo.delete();
				FileOutputStream fos = new FileOutputStream(fTo);
				fos.write(result.getBytes());
				fos.flush();
				fos.close();

				linesToKeep = 0; //reset var (important!)
		    } else {
		    	System.out.println("line ignored");
		    }
		}
		// write the current date to a file
		if (buildFile != null)
			if (buildFile.exists()) {
				// get contents
				FileInputStream fis = new FileInputStream(buildFile);
				BufferedReader br = new BufferedReader(new InputStreamReader(fis));
				String line = br.readLine().substring(15); //Build number: #
				int buildnum = Integer.parseInt(line);
				br.close();
	
				// write
			    DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
			    //get current date time with Date()
			    Date date = new Date();
				FileOutputStream fos = new FileOutputStream(buildFile);
				fos.write(("Build number: #" + (buildnum + 1) + "\r\nBuild date: " + dateFormat.format(date)).getBytes());
				fos.close();
			} else {
				// just write
			    DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
			    //get current date time with Date()
			    Date date = new Date();
				FileOutputStream fos = new FileOutputStream(buildFile);
				fos.write(("Build number: #1" + "\r\nBuild date: " + dateFormat.format(date)).getBytes());
				fos.close();
			}
	}

	public static void compile(String instruction) throws IOException, InterruptedException {
		// Run a java app in a separate system process
		Process proc = Runtime.getRuntime().exec("java -jar compiler.jar --js_output_file=" + instruction);
		proc.waitFor();
		// Then retreive the process output
		InputStream in = proc.getInputStream();
		InputStream err = proc.getErrorStream();
    }
}
