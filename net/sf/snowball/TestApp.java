
package net.sf.snowball;

import net.sf.snowball.ext.EnglishStemmer;
import java.io.InputStream;
import java.io.FileReader;
import java.io.FileInputStream;
import java.io.BufferedInputStream;
import java.io.OutputStream;
import java.io.FileOutputStream;
import java.io.BufferedOutputStream;

public class TestApp {
    public static void main(String [] args) throws Throwable {
        EnglishStemmer stemmer = new EnglishStemmer();

	//InputStream reader = new FileInputStream(args[0]);
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


	int count;
	char [] b = new char[8192];
	while ((count = reader.read(b, 0, b.length)) != -1) {
	    for (int j = 0; j < count; j++) {
		char ch = (char) b[j];
		if (Character.isWhitespace((char) ch)) {
		    if (input.length() > 0) {
			stemmer.setCurrent(input.toString());
			for (int i = repeat; i != 0; i--) {
			    stemmer.stem();
			}
			output.write(stemmer.current.toString().getBytes());
			output.write('\n');
			input.delete(0, input.length());
		    }
		} else {
		    input.append(Character.toLowerCase((char) ch));
		}
	    }
	}
    }
}
