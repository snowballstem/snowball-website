
#include "str.h"

typedef unsigned char byte;

#define true 1
#define false 0
#define repeat while(true)
#define unless(C) if(!(C))
#define until(C) while(!(C))

#define MALLOC check_malloc
#define FREE check_free

#define NEW(type, p) struct type * p = (struct type *) MALLOC(sizeof(struct type))
#define NEWVEC(type, p, n) struct type * p = (struct type *) MALLOC(sizeof(struct type) * n)

#define STARTSIZE   10
#define SIZE(p)     ((int *)(p))[-1]
#define CAPACITY(p) ((int *)(p))[-2]

extern byte * create_b(int n);
extern void report_b(FILE * out, byte * p);
extern void lose_b(byte * p);
extern byte * increase_capacity(byte * p, int n);
extern byte * move_to_b(byte * p, int n, byte * q);
extern byte * add_to_b(byte * p, int n, byte * q);
extern byte * copy_b(byte * p);

extern void sort(void * p, void * p_end, int unit, int (*f)());

struct m_pair {

    struct m_pair * next;
    byte * name;
    byte * value;

};

struct input {

    struct input * next;
    byte * p;
    int c;

};

struct tokeniser {

    struct input * next;
    byte * p;
    int c;
    int line_number;
    byte * b;
    byte * b2;
    int number;
    int m_start;
    int m_end;
    struct m_pair * m_pairs;
    int get_depth;
    int error_count;
    int token;
    int previous_token;
    byte token_held;

    int omission;

};

extern byte * get_input(byte * p);
extern struct tokeniser * create_tokeniser(byte * b);
extern int read_token(struct tokeniser * t);
extern byte * name_of_token(int code);
extern void close_tokeniser(struct tokeniser * t);

enum token_codes {

#include "syswords2"

    c_mathassign,
    c_name,
    c_number,
    c_literalstring,
    c_neg,
    c_call,
    c_grouping,
    c_booltest
};

extern int space_count;
extern void * check_malloc(int n);
extern void check_free(void * p);

struct node;

struct name {

    struct name * next;
    byte * b;
    int type;                   /* t_string etc */
    int mode;                   /*    )_  for routines, externals */
    struct node * definition;   /*    )                           */
    int count;                  /* 0, 1, 2 for each type */
    struct grouping * grouping; /* for grouping names */
    byte referenced;
    byte used;

};

struct literalstring {

    struct literalstring * next;
    byte * b;

};

struct amongvec {

    byte * b;        /* the string giving the case */
    int size;        /* - and its size */
    struct node * p; /* the corresponding command */
    int i;           /* the amongvec index of the longest substring of b */
    int result;      /* the numeric result for the case */
    struct name * function;

};

struct among {

    struct among * next;
    struct amongvec * b;      /* pointer to the amongvec */
    int number;               /* amongs are numbered 0, 1, 2 ... */
    int literalstring_count;  /* in this among */
    int command_count;        /* in this among */
    struct node * starter;    /* i.e. among( (starter) 'string' ... ) */
    struct node * substring;  /* i.e. substring ... among ( ... ) */
};

struct grouping {

    struct grouping * next;
    int number;               /* groupings are numbered 0, 1, 2 ... */
    byte * b;                 /* the characters of this group */
    int largest_ch;           /* character with max code */
    int smallest_ch;          /* character with min code */
    byte no_gaps;             /* no gaps between min and max codes */
    struct name * name;       /* so g->name->grouping == g */
};

struct node {

    struct node * next;
    struct node * left;
    struct node * aux;     /* used in setlimit */
    struct among * among;  /* used in among */
    struct node * right;
    int type;
    int mode;
    struct node * AE;
    struct name * name;
    byte * literalstring;
    int number;
    int line_number;
    int amongvar_needed;   /* used in routine definitions */
};

enum name_types {

    t_size = 6,

    t_string = 0, t_boolean = 1, t_integer = 2, t_routine = 3, t_external = 4,
    t_grouping = 5

/*  If this list is extended, adjust wvn in generator.c  */
};

/*  In name_count[i] below, remember that
    type   is
    ----+----
      0 |  string
      1 |  boolean
      2 |  integer
      3 |  routine
      4 |  external
      5 |  grouping
*/

struct analyser {

    struct tokeniser * tokeniser;
    struct node * nodes;
    struct name * names;
    struct literalstring * literalstrings;
    int mode;
    byte modifyable;          /* false inside reverse(...) */
    struct node * program;
    struct node * program_end;
    int name_count[t_size];   /* name_count[i] counts the number of names of type i */
    struct among * amongs;
    struct among * amongs_end;
    int among_count;
    int amongvar_needed;      /* used in reading routine definitions */
    struct grouping * groupings;
    struct grouping * groupings_end;
    struct node * substring;  /* pending 'substring' in current routine definition */

};

enum analyser_modes {

    m_forward = 0, m_backward /*, m_integer */

};

extern void print_program(struct analyser * a);
extern struct analyser * create_analyser(struct tokeniser * t);
extern void close_analyser(struct analyser * a);

extern void read_program(struct analyser * a);

struct generator {

    struct analyser * analyser;
    struct options * options;
    int unreachable;           /* 0 if code can be reached, 1 if current code
				* is unreachable. */
    int var_number;            /* Number of next variable to use. */
    struct str * outbuf;       /* temporary str to store output */
    struct str * declarations; /* str storing variable declarations */
    int next_label;
    FILE * output;
    int margin;

    char * failure_string;     /* String to output in case of a failure. */
    struct str * failure_str; /* This is used by the java generator instead of failure_string */

    int failure_label;
    int debug_count;

    char * S[10];        /* strings */
    int I[10];           /* integers */
    struct name * V[5];  /* variables */
    byte * L[5];         /* literals, used in formatted write */

};

struct options {

    /* for the command line: */

    char * output_file;
    char * name;
    FILE * output_c;
    FILE * output_h;
    FILE * output_java;
    byte syntax_tree;
    byte make_java;
    byte make_c;
    char * externals_prefix;
    char * variables_prefix;

};


/* Generator for C code. */
extern struct generator * create_generator_c(struct analyser * a, struct options * o);
extern void close_generator_c(struct generator * g);

extern void generate_program_c(struct generator * g);

/* Generator for Java code. */
extern struct generator * create_generator_java(struct analyser * a, struct options * o);
extern void close_generator_java(struct generator * g);

extern void generate_program_java(struct generator * g);

