
#include <stdio.h>   /* stderr etc */
#include <stdlib.h>  /* malloc free */
#include <string.h>  /* strlen */
#include <ctype.h>   /* isalpha etc */
#include "header.h"

struct system_word
{   int s_size;   /* size of system word */
    byte * s;     /* pointer to the system word */
    int code;     /* it's internal code */
};


/* ASCII collating assumed in syswords.c */

#include "syswords"

static int smaller(int a, int b) { return a < b ? a : b; }

static void zero_terminate(byte * p)
{   add_to_b(p, 1, (byte *)"");  /* a zero character */
    SIZE(p)--;
}

extern byte * get_input(byte * p)
{
    zero_terminate(p);
    {   FILE * input = fopen((char *)p, "r");
        if (input == 0) return 0;
        {   byte * b = create_b(STARTSIZE);
            int size = 0;
            repeat
            {   int ch = getc(input);
                if (ch == EOF) break;
                if (size >= CAPACITY(b)) b = increase_capacity(b, size/2);
                b[size++] = ch;
            }
            fclose(input);
            SIZE(b) = size; return b;
        }
    }
}

static void error(struct tokeniser * t, char * s1, int n, byte * p, char * s2)
{
    if (t->error_count == 20) { fprintf(stderr, "... etc\n"); exit(1); }
    fprintf(stderr, "Line %d: ", t->line_number);
    unless (s1 == 0) fprintf(stderr, "%s", s1);
    unless (p == 0)
    {   int i;
        for (i = 0; i < n; i++) fprintf(stderr, "%c", p[i]);
    }
    unless (s2 == 0) fprintf(stderr, "%s", s2);
    fprintf(stderr, "\n");
    t->error_count++;
}

static void error1(struct tokeniser * t, char * s)
   { error(t, s, 0,0, 0); }

static void error2(struct tokeniser * t, char * s)
   { error(t, "unexpected end of text after ", 0,0, s); }

static int compare_words(int m, byte * p, int n, byte * q)
{   unless (m == n) return m - n;
    {   int i; for (i = 0; i < n; i++)
        {   int diff = p[i] - q[i];
            unless (diff == 0) return diff;
        }
    }
    return 0;
}

static int find_word(int n, byte * p)
{   int i = 0; int j = vocab->code;
    repeat
    {   int k = i + (j - i)/2;
        struct system_word * w = vocab + k;
        int diff = compare_words(n, p, w->s_size, w->s);
        if (diff == 0) return w->code;
        if (diff < 0) j = k; else i = k;
        if (j - i == 1) break;
    }
    return -1;
}

static int get_number(int n, byte * p)
{   int x = 0;
    int i; for (i = 0; i < n; i++) x = 10*x + p[i] - '0';
    return x;
}

static int eq_s(struct tokeniser * t, char * s)
{   int l = strlen(s);
    if (SIZE(t->p) - t->c < l ||
        memcmp(t->p + t->c, s, l) != 0) return false;
    t->c += l; return true;
}

static int white_space(struct tokeniser * t, int ch)
{   switch (ch)
    {   case '\n': t->line_number++;
        case '\r':
        case '\t':
        case ' ': return true;
    }
    return false;
}

static byte * find_in_m(struct tokeniser * t, int n, byte * p)
{   struct m_pair * q = t->m_pairs;
    repeat
    {   if (q == 0) return 0;
        {   byte * name = q->name;
            if (n == SIZE(name) && memcmp(name, p, n) == 0) return q->value;
        }
        q = q->next;
    }
}

static int read_literal_string(struct tokeniser * t, int c)
{   byte * p = t->p;
    int ch;
    SIZE(t->b) = 0;
    repeat
    {   if (c >= SIZE(p)) { error2(t, "'"); return c; }
        ch = p[c];
        if (ch == '\n') { error1(t, "string not terminated"); return c; }
        c++;
        if (ch == t->m_start)
        {   int c0 = c;
            int newlines = false; /* no newlines as yet */
            int black_found = false; /* no printing chars as yet */
            repeat
            {   if (c >= SIZE(p)) { error2(t, "'"); return c; }
                ch = p[c]; c++;
                if (ch == t->m_end) break;
                unless (white_space(t, ch)) black_found = true;
                if (ch == '\n') newlines = true;
                {   if (newlines && black_found)
                    {   error1(t, "string not terminated");
                        return c;
                    }
                }
            }
            unless (newlines)
            {
                int n = c - c0 - 1;    /* macro size */
                int firstch = p[c0];
                byte * q = find_in_m(t, n, p + c0);
                if (q == 0)
                {   if (n == 1 && (firstch == '\'' || firstch == t->m_start))
                        t->b = add_to_b(t->b, 1, p + c0);
                    else
                        error(t, "string macro '", n, p + c0, "' undeclared");
                }
                else
                    t->b = add_to_b(t->b, SIZE(q), q);
            }
        }  else
        {   if (ch == '\'') return c;
            t->b = add_to_b(t->b, 1, p + c - 1);
        }
    }
}

static int next_token(struct tokeniser * t)
{   byte * p = t->p;
    int c = t->c;
    int ch;
    int code = -1;
    repeat
    {   if (c >= SIZE(p)) { t->c = c; return -1; }
        ch = p[c];
        if (white_space(t, ch)) { c++; continue; }
        if (isalpha(ch))
        {   int c0 = c;
            while (c < SIZE(p) && (isalnum(p[c]) || p[c] == '_')) c++;
            code = find_word(c - c0, p + c0);
            if (code < 0)
            {   t->b = move_to_b(t->b, c - c0, p + c0);
                /*zero_terminate(t->b);*/
                code = c_name;
            }
        } else
        if (isdigit(ch))
        {   int c0 = c;
            while (c < SIZE(p) && isdigit(p[c])) c++;
            t->number = get_number(c - c0, p + c0);
            code = c_number;
        } else
        if (ch == '\'')
        {   c = read_literal_string(t, c + 1);
            code = c_literalstring;
        } else
        {   int lim = smaller(2, SIZE(p) - c);
            int i; for (i = lim; i > 0; i--)
            {   code = find_word(i, p + c);
                if (code >= 0) { c += i; break; }
            }
        }
        if (code >= 0)
        {   t->c = c;
            return code;
        }
        error(t, "'", 1, p + c, "' unknown");
        c++;
        continue;
    }
}

static int next_char(struct tokeniser * t)
{   if (t->c >= SIZE(t->p)) return -1;
    return t->p[t->c++];
}

static int next_real_char(struct tokeniser * t)
{   repeat
    {   int ch = next_char(t);
        if (white_space(t, ch)) continue;
        return ch;
    }
}

static void read_chars(struct tokeniser * t)
{   int ch = next_real_char(t);
    if (ch < 0)
        { error2(t, "stringdef"); return; }
    {   int c0 = t->c-1;
        repeat
        {   ch = next_char(t);
            if (white_space(t, ch) || ch < 0) break;
        }
        t->b2 = move_to_b(t->b2, t->c - c0 - 1, t->p + c0);
    }
}

static int hex_to_num(ch)
{   if ('0' <= ch && ch <= '9') return ch - '0';
    if ('a' <= ch && ch <= 'f') return ch - 'a' + 10;
    return -1;
}

static void convert_hex(struct tokeniser * t, byte * p)
{
    int c = 0; int d = 0;
    int even = true;
    until (c >= SIZE(p))
    {   int ch = p[c++];
        if (ch == ' ') continue;
        ch = hex_to_num(tolower(ch));
        if (ch < 0) { error1(t, "hex string contains non-hex characters"); return; }
        if (even) p[d] = ch << 4; else p[d++] |= ch;
        even = ! even;
    }
    unless (even) error1(t, "hex string contains an odd number of characters");
    SIZE(p) = d;
}

extern int read_token(struct tokeniser * t)
{   byte * p = t->p;
    int held = t->token_held;
    t->token_held = false;
    if (held) return t->token;
    repeat
    {   int code = next_token(t);
        switch (code)
        {   case c_comment1: /*  slash-slash comment */
               while (t->c < SIZE(p) && p[t->c] != '\n') t->c++;
               continue;
            case c_comment2: /* slash-star comment */
               repeat
               {   if (t->c >= SIZE(p))
                   {   error1(t, "/* comment not terminated");
                       t->token = -1;
                       return -1;
                   }
                   if (p[t->c] == '\n') t->line_number++;
                   if (eq_s(t, "*/")) break;
                   t->c++;
               }
               continue;
            case c_stringescapes:
               {   int ch1 = next_real_char(t);
                   int ch2 = next_real_char(t);
                   if (ch2 < 0)
                       { error2(t, "stringescapes"); continue; }
                   if (ch1 == '\'')
                       { error1(t, "first stringescape cannot be '"); continue; }
                   t->m_start = ch1;
                   t->m_end = ch2;
               }
               continue;
            case c_stringdef:
               {   int hex = false;
                   read_chars(t);
                   code = read_token(t);
                   if (code == c_hex) { hex = true; code = read_token(t); }
                   unless (code == c_literalstring)
                       { error1(t, "string omitted after stringdef"); continue; }
                   if (hex) convert_hex(t, t->b);
                   {   NEW(m_pair, q);
                       q->next = t->m_pairs;
                       q->name = copy_b(t->b2);
                       q->value = copy_b(t->b);
                       t->m_pairs = q;
                   }
               }
               continue;
            case c_get:
               {   code = read_token(t);
                   unless (code == c_literalstring)
                       { error1(t, "string omitted after get"); continue; }
                   t->get_depth++;
                   if (t->get_depth > 10)
                   {   fprintf(stderr, "get directives go 10 deep. Looping?\n");
                       exit(1);
                   }
                   {   byte * p = get_input(t->b);
                       NEW(input, q);
                       if (p == 0)
                       {   error(t, "Can't get '", SIZE(t->b), t->b, "'");
                           exit(1);
                       }
                       memmove(q, t, sizeof(struct input));
                       t->next = q;
                       t->p = p;
                       t->c = 0;
                       t->line_number = 1;
                   }
                   continue;
               }
            case -1:
               unless (t->next == 0)
               {   lose_b(t->p);
                   {   struct input * q = t->next;
                       memmove(t, q, sizeof(struct input));
                       FREE(q);
                   }
                   t->get_depth--;
                   continue;
               }
               /* drop through */
            default:
                t->previous_token = t->token;
                t->token = code; return code;
        }
    }
}

extern byte * name_of_token(int code)
{   int i;
    for (i = 1; i < vocab->code; i++)
        if ((vocab + i)->code == code) return (vocab + i)->s;
    switch (code)
    {
        case c_mathassign:   return (byte *) "=";
        case c_name:         return (byte *) "name";
        case c_number:       return (byte *) "number";
        case c_literalstring:return (byte *) "literal";
        case c_neg:          return (byte *) "neg";
        case c_grouping:     return (byte *) "grouping";
        case c_call:         return (byte *) "call";
        case c_booltest:     return (byte *) "Boolean test";
        case -2:             return (byte *) "start of text";
        case -1:             return (byte *) "end of text";
        default:             return (byte *) "?";
    }
}

extern struct tokeniser * create_tokeniser(byte * p)
{   NEW(tokeniser, t);
    t->next = 0;
    t->p = p;
    t->c = 0;
    t->line_number = 1;
    t->b = create_b(0);
    t->b2 = create_b(0);
    t->m_start = -1;
    t->m_pairs = 0;
    t->get_depth = 0;
    t->error_count = 0;
    t->token_held = false;
    t->token = -2;
    t->previous_token = -2;
    return t;
}

extern void close_tokeniser(struct tokeniser * t)
{   lose_b(t->b);
    lose_b(t->b2);
    {   struct m_pair * q = t->m_pairs;
        until (q == 0)
        {   struct m_pair * q_next = q->next;
            lose_b(q->name);
            lose_b(q->value);
            FREE(q);
            q = q_next;
        }
    }
    {   struct input * q = t->next;
        until (q == 0)
        {   struct input * q_next = q->next;
            FREE(q);
            q = q_next;
        }
    }
    FREE(t);
}

