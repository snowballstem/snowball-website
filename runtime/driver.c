
#include <stdio.h>
#include <stdlib.h> /* for malloc, free */
#include <string.h> /* for memmove */
#include <ctype.h>  /* for isupper, tolower */

#include "api.h"
#include "stem.h"

/* This derives from the source file driver.template */

/* - and provides a simple driver for a single ANSI C generated
   Snowball stemmer.

   A typical compilation is

   gcc -o TEST api.c utilities.c stem.c driver.c

   where api.c, utilities.c are in directory q/, stem.c is the
   generated stemmer, with associated header stem.h, and driver.c is
   this driver. The header for stem.c is in stem.h, header.h is
   the general header for the Snowball system, and api.h a separated header
   for API calls into Snowball.

   TEST has command line syntax

       file [-o[utput] file] [-r[epetitions] number] [-p[retty]] -h[elp]]

   The first argument gives the input file, which consists of a list of words
   to be stemmed, one per line. Words should be in lower case, but (for English)
   A-Z letters are mapped to their a-z equivalents anyway. If omitted, stdin
   is used.

   The output is sent to stdout by default, otherwise to the -output file.
   For benchmark testing, the stemmin of a word can be repeated with the
   -repetitions option, e.g.

        ./TEST in-file -o out-file -r 1000000

   -pretty output displays each word of the input file followed by its stemmed
   equivalent. Otherwise the output file consists of the stemmed words, one per
   line again.

*/

static int repetitions = 1;
static int stem_count;
static int pretty = 1;

static void stem_file(struct SN_env * z, FILE * f_in, FILE * f_out) {
#define INC 10
    int lim = INC;
    symbol * b = (symbol *) malloc(lim * sizeof(symbol));

    while(1) {
        int ch = getc(f_in);
        if (ch == EOF) {
            free(b); return;
        }
        {
            int i = 0;
            while(1) {
                if (ch == '\n' || ch == EOF) break;
                if (i == lim) {
                    symbol * q = (symbol *) malloc((lim + INC) * sizeof(symbol));
                    memmove(q, b, lim * sizeof(symbol));
                    free(b); b = q;
                    lim = lim + INC;
                }
                /* force lower case: */
                if isupper(ch) ch = tolower(ch);

                b[i] = ch; i++;
                ch = getc(f_in);
            }

            if (pretty) {
                int j;
                for (j = 0; j < i; j++) fprintf(f_out, "%c", b[j]);
                fprintf(f_out, "%s", " -> ");
            }
            {
                int j; for (j = 1; j <= repetitions; j++) {
                    SN_set_current(z, i, b);
                    stem(z); stem_count++;
                }
            }
            {
                int j;
                for (j = 0; j < z->l; j++) fprintf(f_out, "%c", z->p[j]);
                fprintf(f_out, "\n");
            }
        }
    }
}

static int intof(char * s) {
    int n = 0;
    int i; for (i = 0; i < strlen(s); i++) {
        int d = s[i] - '0';
        if (d < 0 || d > 9) {
            fprintf(stderr, "%s not a number\n", s); exit(1);
        }
        n = 10*n + d;
    }
    return n;
}

static int eq(char * s1, char * s2) {
    int s1_len = strlen(s1);
    int s2_len = strlen(s2);
    return s1_len == s2_len && memcmp(s1, s2, s1_len) == 0;
}

static void show_options(int n) {
    printf("options are: file [-o[utput] file] [-r[epetitions] number] [-p[retty]] [-h[elp]]\n");
    exit(n);
}

int main(int argc, char * argv[])
{   char * in = 0;
    char * out = 0;
    {   char * s;
        int i = 1;
        pretty = 0;
        while(1) {
            if (i >= argc) break;
            s = argv[i++];
            if (s[0] == '-') {
                if (eq(s, "-output") || eq(s, "-o")) {
                    if (i >= argc) {
                        fprintf(stderr, "%s requires an argument\n", s);
                        exit(1);
                    }
                    out = argv[i++];
                } else if (eq(s, "-repetitions") || eq(s, "-r")) {
                    if (i >= argc) {
                        fprintf(stderr, "%s requires an argument\n", s);
                        exit(1);
                    }
                    repetitions = intof(argv[i++]);
                } else if (eq(s, "-pretty") || eq(s, "-p")) {
                    pretty = 1;
                } else if (eq(s, "-help") || eq(s, "-h")) {
                    show_options(0);
                } else {
                    fprintf(stderr, "%s unknown\n", s);
                    show_options(1);
                }
            }
            else in = s;
        }
    }

    /* initialise the stemming process: */

    {
        struct SN_env * z = create_env();
        FILE * f_in;
        FILE * f_out;
        f_in = in == 0 ? stdin : fopen(in, "r");
        if (f_in == 0) {
            fprintf(stderr, "file %s not found\n", in); exit(1);
        }
        f_out = out == 0 ? stdout : fopen(out, "w");
        if (f_out == 0) {
            fprintf(stderr, "file %s cannot be opened\n", out); exit(1);
        }
        stem_file(z, f_in, f_out);
        close_env(z);
    }

    if (!pretty) {
        printf("%d calls to stem\n", stem_count);
    }

    return 0;
}

