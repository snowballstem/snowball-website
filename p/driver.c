
#include <stdio.h>   /* main etc */
#include "header.h"

/*-static int intof(char * s)
-{   int n = 0;
-    int i; for (i = 0; i < strlen(s); i++)
-    {   int d = s[i] - '0';
-        if (d < 0 || d > 9) { fprintf(stderr, "%s not a number\n", s); exit(1); }
-        n = 10*n + d;
-    }
-    return n;
-} */

static int eq(char * s1, char * s2)
{   int s1_len = strlen(s1);
    int s2_len = strlen(s2);
    return s1_len == s2_len && memcmp(s1, s2, s1_len) == 0;
}

static void print_arglist(void)
{   fprintf(stderr, "options are: file [-o[utput] file] \n"
                    "                  [-s[yntax]]\n"
                    "                  [-ep[refix] string]\n"
                    "                  [-vp[refix] string]\n"
           );
    exit(1);
}

static void check_lim(int i, int argc)
{   if (i >= argc)
    {   fprintf(stderr, "argument list is one short\n");
        print_arglist();
    }
}

static FILE * get_output(byte * b)
{   FILE * output = fopen(b, "w");
    if (output == 0)
    {   fprintf(stderr, "Can't open %s\n", (char *)b);
        exit(1);
    }
    return output;
}

static void read_options(struct options * o, int argc, char * argv[])
{   char * s;
    int i = 2;

    /* set defauts: */

    o->output_file = 0;
    o->syntax_tree = false;
    o->externals_prefix = "";
    o->variables_prefix = 0;

    /* read options: */

    repeat
    {   if (i >= argc) break;
        s = argv[i++];
        {   if (eq(s, "-o") || eq(s, "-output"))
            {   check_lim(i, argc);
                o->output_file = argv[i++];
                continue;
            }
            if (eq(s, "-s") || eq(s, "-syntax"))
            {   o->syntax_tree = true;
                continue;
            }
            if (eq(s, "-ep") || eq(s, "-eprefix"))
            {   check_lim(i, argc);
                o->externals_prefix = argv[i++];
                continue;
            }
            if (eq(s, "-vp") || eq(s, "-vprefix"))
            {   check_lim(i, argc);
                o->variables_prefix = argv[i++];
                continue;
            }
            fprintf(stderr, "'%s' misplaced\n", s);
            print_arglist();
        }
    }
}

extern int main(int argc, char * argv[])
{
    NEW(options, o);
    if (argc == 1) print_arglist();
    read_options(o, argc, argv);
    {
        byte * filename = move_to_b(create_b(0), strlen(argv[1]), (byte *)argv[1]);
        byte * input = get_input(filename);
        if (input == 0)
        {   fprintf(stderr, "Can't open %s\n", argv[1]);
            exit(1);
        }
        {   struct tokeniser * t = create_tokeniser(input);
            struct analyser * a = create_analyser(t);
            read_program(a);
            if (t->error_count > 0) exit(1);
            if (o->syntax_tree) print_program(a);
            close_tokeniser(t);
            unless (o->syntax_tree)
            {   struct generator * g;

                char * s = o->output_file;
                unless (s)
                {   fprintf(stderr, "Please include the -o option\n");
                    exit(1);
                }
                {   byte * b = move_to_b(create_b(0), strlen(s), (byte *)s);
                    b = add_to_b(b, 3, (byte *)".c");
                    o->output_c = get_output(b);
                    b[SIZE(b) - 2] = 'h';
                    o->output_h = get_output(b);
                    lose_b(b);
                }
                g = create_generator(a, o);
                generate_program(g);
                close_generator(g);
                close(o->output_c);
                close(o->output_h);
            }
            close_analyser(a);
        }
        lose_b(input);
        lose_b(filename);
    }
    FREE(o);
    unless (space_count == 0) fprintf(stderr, "%d blocks unfreed\n", space_count);
    return 0;
}

