
package net.sf.snowball;

import net.sf.snowball.ext.EnglishStemmer;
import java.io.FileReader;

public class TestApp {
    public static void main(String [] args) throws Throwable {
        EnglishStemmer stemmer = new EnglishStemmer();

	FileReader reader = new FileReader(args[0]);
	StringBuffer input = new StringBuffer();

	while (reader.ready()) {
	    char ch = (char) reader.read();
	    if (Character.isWhitespace(ch)) {
		if (input.length() > 0) {
		    //System.out.println("Stemming '" + input + "'");
		    stemmer.setCurrent(input.toString());
		    stemmer.stem();
		    System.out.println(stemmer.current);
		    input.delete(0, input.length());
		}
	    } else {
		input.append(Character.toLowerCase(ch));
	    }
	}
    }
}
