
#include <stdio.h>    /* for printf */
#include <stdlib.h>   /* malloc, free */
#include <memory.h>   /* memmove */

#include "header.h"

#define HEAD 2*sizeof(int)
#define EXTENDER 40
#define DEBUG 0

extern byte * create_b(int n)
{   byte * p = HEAD + (byte *) MALLOC(HEAD + n);
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
    memmove(q, p, CAPACITY(p)); lose_b(p); return q;
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

