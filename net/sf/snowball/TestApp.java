
package net.sf.snowball;

import net.sf.snowball.ext.EnglishStemmer;
import java.io.FileReader;
import java.io.OutputStream;
import java.io.FileOutputStream;
import java.io.BufferedOutputStream;

public class TestApp {
    public static void main(String [] args) throws Throwable {
        EnglishStemmer stemmer = new EnglishStemmer();

	FileReader reader = new FileReader(args[0]);
	StringBuffer input = new StringBuffer();

        OutputStream output;

	if (args.length > 2 && args[1].equals("-o")) {
	    output = new FileOutputStream(args[2]);
	    output = new BufferedOutputStream(output);
	} else if (args.length == 2) {
	     System.err.println("Usage: TestApp <input file> [-o <output file>]");
	     return;
	} else {
	    output = System.out;
	}
	int repeat = 1;
	if (args.length > 3) {
	    repeat = Integer.parseInt(args[3]);
	}

	while (reader.ready()) {
	    char ch = (char) reader.read();
	    if (Character.isWhitespace(ch)) {
		if (input.length() > 0) {
		    //System.out.println("Stemming '" + input + "'");
		    stemmer.setCurrent(input.toString());
		    for (int i = repeat; i != 0; i--) {
			stemmer.stem();
		    }
		    output.write(stemmer.current.toString().getBytes());
		    input.delete(0, input.length());
		}
	    } else {
		input.append(Character.toLowerCase(ch));
	    }
	}
    }
}
