
#include <stdio.h>    /* for printf */
#include <stdlib.h>   /* malloc, free */
#include <memory.h>   /* memmove */

#include "header.h"

#define HEAD 2*sizeof(int)
#define EXTENDER 40
#define DEBUG 0


/*  This modules provides a simple mechanism for arbitrary length writable
    strings, called 'blocks'. They are 'byte *' items rather than 'char *'
    items however.

    The calls are:

        byte * b = create_b(n);
            - create an empty block b with room for n bytes
        b = increase_capacity(b, n);
            - increase the capacity of block b by n bytes (b may change)
        b2 = copy_b(b)
            - copy block b into b2
        lose_b(b);
            - lose block b
        b = move_to_b(b, n, p);
            - set the data in b to be the n bytes at address p
        b = addto_to_b(b, n, p);
            - add the n bytes at address p to the end of the data in b
        SIZE(b)
            - is the number of bytes in b
        For example:

        byte * b = create_b(0);
        {   int i;
            char p[10];
            for (i = 0; i < 100; i++) {
                sprintf(p, " %d", i);
                add_to_b(b, strlen(p), (byte *)p);
            }
            b[SIZE(b)] = 0;       <---zero terminate (see next comment)
        }

    and b contains the string " 0 1 2 ... 99"
*/

/*  For a block b, SIZE(b) is the number of bytes so far written into it,
    CAPACITY(b) the total number it can contain, so SIZE(b) <= CAPACITY(b).
    In fact blocks have 1 extra character over the promised capacity so
    they can be zero terminated by 'b[SIZE(b)] = 0;' without fear of
    overwriting.
*/

extern byte * create_b(int n)
{   byte * p = HEAD + (byte *) MALLOC(HEAD + n + 1);
    CAPACITY(p) = n;
    SIZE(p) = 0;
    if (DEBUG) printf("<-- %d\n", p);
    return p;
}

extern void report_b(FILE * out, byte * p)
{   int i;
    for (i = 0; i < SIZE(p); i++) fprintf(out, "%c", p[i]);
}

extern void lose_b(byte * p)
{   if (p == 0) return;
    if (DEBUG) printf("--> %d\n", p);
    FREE(p - HEAD);
}

extern byte * increase_capacity(byte * p, int n)
{   byte * q = create_b(CAPACITY(p) + n + EXTENDER);
    if (DEBUG) printf("%d --> %d\n", p, q);
    memmove(q, p, CAPACITY(p));
    SIZE(q) = SIZE(p);
    lose_b(p); return q;
}

extern byte * move_to_b(byte * p, int n, byte * q)
{   int x = n - CAPACITY(p);
    if (x > 0) p = increase_capacity(p, x);
    memmove(p, q, n); SIZE(p) = n; return p;
}

extern byte * add_to_b(byte * p, int n, byte * q)
{   int x = SIZE(p) + n - CAPACITY(p);
    if (x > 0) p = increase_capacity(p, x);
    memmove(p + SIZE(p), q, n); SIZE(p) += n; return p;
}

extern byte * copy_b(byte * p)
{   int n = SIZE(p);
    byte * q = create_b(n);
    move_to_b(q, n, p);
    return q;
}

int space_count = 0;

extern void * check_malloc(int n)
{   space_count++;
    return malloc(n);
}

extern void check_free(void * p)
{   space_count--;
    free(p);
}

