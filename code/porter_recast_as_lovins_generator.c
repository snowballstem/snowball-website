#include <stdio.h>
#include <stdlib.h>

static char * p;
static k = 0;
static int depth;

static int add(char * s, int i)
{   int j = 0;
    int ch;
    while (ch = s[j]) {
        p[i] = ch;
        j++; i++;
    }
    p[i] = 0; k = i;
}

static void w(int code) { printf("'%s' %c\n", p, 'A' - 1 + code); }

static void wn(int code)
{   w(code);
    {   int ch = p[k - 1];
        if (ch == 'y') p[k - 1] = 'i';
        printf("'%s", p);
        if (ch == 'y' || ch == 's') printf("e");
        printf("s' %c\n", 'A' - 1 + code);
        p[k - 1] = ch;
    }
}

static void wv(int code)
{   wn(code);
    {   int ch = p[k - 1];
        if (ch == 'e') p[k - 1] = 0;
        printf("'%sed' %c\n", p, 'A' - 1 + code);
        printf("'%sing' %c\n", p, 'A' - 1 + code);
        p[k - 1] = ch;
    }
}

static void f(void (*gen)(), int i, int code)
{   if (depth > 2) return;
    depth++; gen(i, code); depth--;
}

static void gen_ize(int i, int code);
static void gen_ism(int i, int code);
static void gen_ity(int i, int code);
static void gen_ly(int i, int code);
static void gen_ness(int i, int code);
static void gen_ic(int i, int code);
static void gen_ate(int i, int code);
static void gen_ive(int i, int code);
static void gen_tion(int i, int code);

static void gen_al(int i, int code)
{   i = add("al", i); wn(code);
    f(gen_ize, i, code); f(gen_ism, i, code); f(gen_ity, i, code); f(gen_ly, i, code);
    f(gen_ness, i, code);
}

static void gen_ance(int i, int code)
{   i = add("ance", i); wn(code);
    add("y", i - 1); wn(code);
}

static void gen_ence(int i, int code)
{   i = add("ence", i); wn(code);
    add("y", i - 1); wn(code);
}

static void gen_er(int i, int code)  {  add("er", i); wv(code); }

static void gen_ic(int i, int code)
{   i = add("ic", i); wn(code);
    f(gen_ate, i, code); f(gen_ity, i, code); f(gen_al, i, code);
}

static void gen_able(int i, int code)
{   add("able", i); wn(code);
    add("abil", i); f(gen_ity, i + 4, code);
    add("ab", i); f(gen_ly, i + 2, code);
}

static void gen_ible(int i, int code)
{   add("ible", i); wn(code);
    add("ibil", i); f(gen_ity, i + 4, code);
    add("ib", i); f(gen_ly, i + 2, code);
}

static void gen_ant(int i, int code)
{   add("ant", i); wn(code);
/*  f(gen_ly, i, code);  */
}

static void gen_ement(int i, int code)
{   i = add("ement", i); wn(code);
    f(gen_ly, i, code);
}

static void gen_ment(int i, int code)
{   i = add("ment", i); wn(code);
    f(gen_ly, i, code);
}

static void gen_ent(int i, int code)
{   i = add("ent", i); wn(code);
    f(gen_ly, i, code);
}

static void gen_ism(int i, int code)  {  add("ism", i); wn(code); }

static void gen_ate(int i, int code)
{   add("ate", i); wv(code);
    f(gen_ly, i + 3, code); f(gen_ive, i + 2, code); f(gen_tion, i + 1, code);
}

static void gen_ator(int i, int code)  {  add("ator", i); wn(code); }

static void gen_ful(int i, int code)
{   i = add("ful", i); w(code);
    f(gen_ness, i, code);
/*  f(gen_ly, i, code);  */
}

static void gen_ly(int i, int code)  {  add("ly", i); w(code); }
static void gen_ness(int i, int code)  {  add("ness", i); wn(code); }
static void gen_ity(int i, int code)  {  add("ity", i); wn(code); }

static void gen_ous(int i, int code)
{   i = add("ous", i); w(code);
    f(gen_ly, i, code); f(gen_ness, i, code);
}

static void gen_ive(int i, int code)
{   i = add("ive", i); wn(code);
    f(gen_ness, i, code);
    f(gen_ly, i, code);
    f(gen_ity, i - 1, code);
}

static void gen_ize(int i, int code)
{   i = add("ize", i); wv(code);
    f(gen_er, i - 1, code);
    add("a", i - 1);
    depth ++; f(gen_tion, i, code); depth--;
}

static void gen_tion(int i, int code)
{   i = add(i == 0 ? "ion" : "tion", i); wv(code);
    f(gen_al, i, code);
}


main()
{
    p = malloc(100);
    depth = 0;

    gen_al(0, 2);
    gen_ance(0, 2);
    gen_ence(0, 2);
    gen_er(0, 2);
    gen_ic(0, 2);
    gen_able(0, 2);
    gen_ible(0, 2);
    gen_ant(0, 2);
    gen_ement(0, 2);
    gen_ment(0, 2);
    gen_ent(0, 4);
    gen_ism(0, 2);
    gen_ate(0, 2); gen_ator(0, 2);
    gen_ful(0, 1);
    gen_ly(0, 5);
    gen_ness(0, 1);
    gen_ity(0, 2);
    gen_ous(0, 2);
    gen_ive(0, 2);
    gen_ize(0, 2);
    gen_tion(0, 3);
    free(p);
    return 0;
}
