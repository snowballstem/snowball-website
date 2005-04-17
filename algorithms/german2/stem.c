
/* This file was generated automatically by the Snowball to ANSI C compiler */

#include "header.h"

extern int german2_stem(struct SN_env * z);
static int r_standard_suffix(struct SN_env * z);
static int r_R2(struct SN_env * z);
static int r_R1(struct SN_env * z);
static int r_mark_regions(struct SN_env * z);
static int r_postlude(struct SN_env * z);
static int r_prelude(struct SN_env * z);

extern struct SN_env * german2_create_env(void);
extern void german2_close_env(struct SN_env * z);

static symbol s_0_1[2] = { 'a', 'e' };
static symbol s_0_2[2] = { 'o', 'e' };
static symbol s_0_3[2] = { 'q', 'u' };
static symbol s_0_4[2] = { 'u', 'e' };
static symbol s_0_5[1] = { 223 };

static struct among a_0[6] =
{
/*  0 */ { 0, 0, -1, 6, 0},
/*  1 */ { 2, s_0_1, 0, 2, 0},
/*  2 */ { 2, s_0_2, 0, 3, 0},
/*  3 */ { 2, s_0_3, 0, 5, 0},
/*  4 */ { 2, s_0_4, 0, 4, 0},
/*  5 */ { 1, s_0_5, 0, 1, 0}
};

static symbol s_1_1[1] = { 'U' };
static symbol s_1_2[1] = { 'Y' };
static symbol s_1_3[1] = { 228 };
static symbol s_1_4[1] = { 246 };
static symbol s_1_5[1] = { 252 };

static struct among a_1[6] =
{
/*  0 */ { 0, 0, -1, 6, 0},
/*  1 */ { 1, s_1_1, 0, 2, 0},
/*  2 */ { 1, s_1_2, 0, 1, 0},
/*  3 */ { 1, s_1_3, 0, 3, 0},
/*  4 */ { 1, s_1_4, 0, 4, 0},
/*  5 */ { 1, s_1_5, 0, 5, 0}
};

static symbol s_2_0[1] = { 'e' };
static symbol s_2_1[2] = { 'e', 'm' };
static symbol s_2_2[2] = { 'e', 'n' };
static symbol s_2_3[3] = { 'e', 'r', 'n' };
static symbol s_2_4[2] = { 'e', 'r' };
static symbol s_2_5[1] = { 's' };
static symbol s_2_6[2] = { 'e', 's' };

static struct among a_2[7] =
{
/*  0 */ { 1, s_2_0, -1, 1, 0},
/*  1 */ { 2, s_2_1, -1, 1, 0},
/*  2 */ { 2, s_2_2, -1, 1, 0},
/*  3 */ { 3, s_2_3, -1, 1, 0},
/*  4 */ { 2, s_2_4, -1, 1, 0},
/*  5 */ { 1, s_2_5, -1, 2, 0},
/*  6 */ { 2, s_2_6, 5, 1, 0}
};

static symbol s_3_0[2] = { 'e', 'n' };
static symbol s_3_1[2] = { 'e', 'r' };
static symbol s_3_2[2] = { 's', 't' };
static symbol s_3_3[3] = { 'e', 's', 't' };

static struct among a_3[4] =
{
/*  0 */ { 2, s_3_0, -1, 1, 0},
/*  1 */ { 2, s_3_1, -1, 1, 0},
/*  2 */ { 2, s_3_2, -1, 2, 0},
/*  3 */ { 3, s_3_3, 2, 1, 0}
};

static symbol s_4_0[2] = { 'i', 'g' };
static symbol s_4_1[4] = { 'l', 'i', 'c', 'h' };

static struct among a_4[2] =
{
/*  0 */ { 2, s_4_0, -1, 1, 0},
/*  1 */ { 4, s_4_1, -1, 1, 0}
};

static symbol s_5_0[3] = { 'e', 'n', 'd' };
static symbol s_5_1[2] = { 'i', 'g' };
static symbol s_5_2[3] = { 'u', 'n', 'g' };
static symbol s_5_3[4] = { 'l', 'i', 'c', 'h' };
static symbol s_5_4[4] = { 'i', 's', 'c', 'h' };
static symbol s_5_5[2] = { 'i', 'k' };
static symbol s_5_6[4] = { 'h', 'e', 'i', 't' };
static symbol s_5_7[4] = { 'k', 'e', 'i', 't' };

static struct among a_5[8] =
{
/*  0 */ { 3, s_5_0, -1, 1, 0},
/*  1 */ { 2, s_5_1, -1, 2, 0},
/*  2 */ { 3, s_5_2, -1, 1, 0},
/*  3 */ { 4, s_5_3, -1, 3, 0},
/*  4 */ { 4, s_5_4, -1, 2, 0},
/*  5 */ { 2, s_5_5, -1, 2, 0},
/*  6 */ { 4, s_5_6, -1, 3, 0},
/*  7 */ { 4, s_5_7, -1, 4, 0}
};

static unsigned char g_v[] = { 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 8 };

static unsigned char g_s_ending[] = { 117, 30, 5 };

static unsigned char g_st_ending[] = { 117, 30, 4 };

static symbol s_0[] = { 'u' };
static symbol s_1[] = { 'U' };
static symbol s_2[] = { 'y' };
static symbol s_3[] = { 'Y' };
static symbol s_4[] = { 's', 's' };
static symbol s_5[] = { 228 };
static symbol s_6[] = { 246 };
static symbol s_7[] = { 252 };
static symbol s_8[] = { 'y' };
static symbol s_9[] = { 'u' };
static symbol s_10[] = { 'a' };
static symbol s_11[] = { 'o' };
static symbol s_12[] = { 'u' };
static symbol s_13[] = { 'i', 'g' };
static symbol s_14[] = { 'e' };
static symbol s_15[] = { 'e' };
static symbol s_16[] = { 'e', 'r' };
static symbol s_17[] = { 'e', 'n' };

static int r_prelude(struct SN_env * z) {
    int among_var;
    {   int c_test = z->c; /* test, line 30 */
        while(1) { /* repeat, line 30 */
            int c = z->c;
            while(1) { /* goto, line 30 */
                int c = z->c;
                if (!(in_grouping(z, g_v, 97, 252))) goto lab1;
                z->bra = z->c; /* [, line 31 */
                {   int c = z->c; /* or, line 31 */
                    if (!(eq_s(z, 1, s_0))) goto lab3;
                    z->ket = z->c; /* ], line 31 */
                    if (!(in_grouping(z, g_v, 97, 252))) goto lab3;
                    slice_from_s(z, 1, s_1); /* <-, line 31 */
                    goto lab2;
                lab3:
                    z->c = c;
                    if (!(eq_s(z, 1, s_2))) goto lab1;
                    z->ket = z->c; /* ], line 32 */
                    if (!(in_grouping(z, g_v, 97, 252))) goto lab1;
                    slice_from_s(z, 1, s_3); /* <-, line 32 */
                }
            lab2:
                z->c = c;
                break;
            lab1:
                z->c = c;
                if (z->c >= z->l) goto lab0;
                z->c++;
            }
            continue;
        lab0:
            z->c = c;
            break;
        }
        z->c = c_test;
    }
    while(1) { /* repeat, line 35 */
        int c = z->c;
        z->bra = z->c; /* [, line 36 */
        among_var = find_among(z, a_0, 6); /* substring, line 36 */
        if (!(among_var)) goto lab4;
        z->ket = z->c; /* ], line 36 */
        switch(among_var) {
            case 0: goto lab4;
            case 1:
                slice_from_s(z, 2, s_4); /* <-, line 37 */
                break;
            case 2:
                slice_from_s(z, 1, s_5); /* <-, line 38 */
                break;
            case 3:
                slice_from_s(z, 1, s_6); /* <-, line 39 */
                break;
            case 4:
                slice_from_s(z, 1, s_7); /* <-, line 40 */
                break;
            case 5:
                {   int c = z->c + 2;
                    if (0 > c || c > z->l) goto lab4;
                    z->c = c; /* hop, line 41 */
                }
                break;
            case 6:
                if (z->c >= z->l) goto lab4;
                z->c++; /* next, line 42 */
                break;
        }
        continue;
    lab4:
        z->c = c;
        break;
    }
    return 1;
}

static int r_mark_regions(struct SN_env * z) {
    z->I[0] = z->l;
    z->I[1] = z->l;
    while(1) { /* gopast, line 53 */
        if (!(in_grouping(z, g_v, 97, 252))) goto lab0;
        break;
    lab0:
        if (z->c >= z->l) return 0;
        z->c++;
    }
    while(1) { /* gopast, line 53 */
        if (!(out_grouping(z, g_v, 97, 252))) goto lab1;
        break;
    lab1:
        if (z->c >= z->l) return 0;
        z->c++;
    }
    z->I[0] = z->c; /* setmark p1, line 53 */
     /* try, line 54 */
    if (!(z->I[0] < 3)) goto lab2;
    z->I[0] = 3;
lab2:
    while(1) { /* gopast, line 55 */
        if (!(in_grouping(z, g_v, 97, 252))) goto lab3;
        break;
    lab3:
        if (z->c >= z->l) return 0;
        z->c++;
    }
    while(1) { /* gopast, line 55 */
        if (!(out_grouping(z, g_v, 97, 252))) goto lab4;
        break;
    lab4:
        if (z->c >= z->l) return 0;
        z->c++;
    }
    z->I[1] = z->c; /* setmark p2, line 55 */
    return 1;
}

static int r_postlude(struct SN_env * z) {
    int among_var;
    while(1) { /* repeat, line 59 */
        int c = z->c;
        z->bra = z->c; /* [, line 61 */
        among_var = find_among(z, a_1, 6); /* substring, line 61 */
        if (!(among_var)) goto lab0;
        z->ket = z->c; /* ], line 61 */
        switch(among_var) {
            case 0: goto lab0;
            case 1:
                slice_from_s(z, 1, s_8); /* <-, line 62 */
                break;
            case 2:
                slice_from_s(z, 1, s_9); /* <-, line 63 */
                break;
            case 3:
                slice_from_s(z, 1, s_10); /* <-, line 64 */
                break;
            case 4:
                slice_from_s(z, 1, s_11); /* <-, line 65 */
                break;
            case 5:
                slice_from_s(z, 1, s_12); /* <-, line 66 */
                break;
            case 6:
                if (z->c >= z->l) goto lab0;
                z->c++; /* next, line 67 */
                break;
        }
        continue;
    lab0:
        z->c = c;
        break;
    }
    return 1;
}

static int r_R1(struct SN_env * z) {
    if (!(z->I[0] <= z->c)) return 0;
    return 1;
}

static int r_R2(struct SN_env * z) {
    if (!(z->I[1] <= z->c)) return 0;
    return 1;
}

static int r_standard_suffix(struct SN_env * z) {
    int among_var;
    {   int m = z->l - z->c; /* do, line 78 */
        z->ket = z->c; /* [, line 79 */
        among_var = find_among_b(z, a_2, 7); /* substring, line 79 */
        if (!(among_var)) goto lab0;
        z->bra = z->c; /* ], line 79 */
        if (!r_R1(z)) goto lab0; /* call R1, line 79 */
        switch(among_var) {
            case 0: goto lab0;
            case 1:
                slice_del(z); /* delete, line 81 */
                break;
            case 2:
                if (!(in_grouping_b(z, g_s_ending, 98, 116))) goto lab0;
                slice_del(z); /* delete, line 84 */
                break;
        }
    lab0:
        z->c = z->l - m;
    }
    {   int m = z->l - z->c; /* do, line 88 */
        z->ket = z->c; /* [, line 89 */
        among_var = find_among_b(z, a_3, 4); /* substring, line 89 */
        if (!(among_var)) goto lab1;
        z->bra = z->c; /* ], line 89 */
        if (!r_R1(z)) goto lab1; /* call R1, line 89 */
        switch(among_var) {
            case 0: goto lab1;
            case 1:
                slice_del(z); /* delete, line 91 */
                break;
            case 2:
                if (!(in_grouping_b(z, g_st_ending, 98, 116))) goto lab1;
                {   int c = z->c - 3;
                    if (z->lb > c || c > z->l) goto lab1;
                    z->c = c; /* hop, line 94 */
                }
                slice_del(z); /* delete, line 94 */
                break;
        }
    lab1:
        z->c = z->l - m;
    }
    {   int m = z->l - z->c; /* do, line 98 */
        z->ket = z->c; /* [, line 99 */
        among_var = find_among_b(z, a_5, 8); /* substring, line 99 */
        if (!(among_var)) goto lab2;
        z->bra = z->c; /* ], line 99 */
        if (!r_R2(z)) goto lab2; /* call R2, line 99 */
        switch(among_var) {
            case 0: goto lab2;
            case 1:
                slice_del(z); /* delete, line 101 */
                {   int m = z->l - z->c; /* try, line 102 */
                    z->ket = z->c; /* [, line 102 */
                    if (!(eq_s_b(z, 2, s_13))) { z->c = z->l - m; goto lab3; }
                    z->bra = z->c; /* ], line 102 */
                    {   int m = z->l - z->c; /* not, line 102 */
                        if (!(eq_s_b(z, 1, s_14))) goto lab4;
                        { z->c = z->l - m; goto lab3; }
                    lab4:
                        z->c = z->l - m;
                    }
                    if (!r_R2(z)) { z->c = z->l - m; goto lab3; } /* call R2, line 102 */
                    slice_del(z); /* delete, line 102 */
                lab3:
                    ;
                }
                break;
            case 2:
                {   int m = z->l - z->c; /* not, line 105 */
                    if (!(eq_s_b(z, 1, s_15))) goto lab5;
                    goto lab2;
                lab5:
                    z->c = z->l - m;
                }
                slice_del(z); /* delete, line 105 */
                break;
            case 3:
                slice_del(z); /* delete, line 108 */
                {   int m = z->l - z->c; /* try, line 109 */
                    z->ket = z->c; /* [, line 110 */
                    {   int m = z->l - z->c; /* or, line 110 */
                        if (!(eq_s_b(z, 2, s_16))) goto lab8;
                        goto lab7;
                    lab8:
                        z->c = z->l - m;
                        if (!(eq_s_b(z, 2, s_17))) { z->c = z->l - m; goto lab6; }
                    }
                lab7:
                    z->bra = z->c; /* ], line 110 */
                    if (!r_R1(z)) { z->c = z->l - m; goto lab6; } /* call R1, line 110 */
                    slice_del(z); /* delete, line 110 */
                lab6:
                    ;
                }
                break;
            case 4:
                slice_del(z); /* delete, line 114 */
                {   int m = z->l - z->c; /* try, line 115 */
                    z->ket = z->c; /* [, line 116 */
                    among_var = find_among_b(z, a_4, 2); /* substring, line 116 */
                    if (!(among_var)) { z->c = z->l - m; goto lab9; }
                    z->bra = z->c; /* ], line 116 */
                    if (!r_R2(z)) { z->c = z->l - m; goto lab9; } /* call R2, line 116 */
                    switch(among_var) {
                        case 0: { z->c = z->l - m; goto lab9; }
                        case 1:
                            slice_del(z); /* delete, line 118 */
                            break;
                    }
                lab9:
                    ;
                }
                break;
        }
    lab2:
        z->c = z->l - m;
    }
    return 1;
}

extern int german2_stem(struct SN_env * z) {
    {   int c = z->c; /* do, line 129 */
        if (!r_prelude(z)) goto lab0; /* call prelude, line 129 */
    lab0:
        z->c = c;
    }
    {   int c = z->c; /* do, line 130 */
        if (!r_mark_regions(z)) goto lab1; /* call mark_regions, line 130 */
    lab1:
        z->c = c;
    }
    z->lb = z->c; z->c = z->l; /* backwards, line 131 */

    {   int m = z->l - z->c; /* do, line 132 */
        if (!r_standard_suffix(z)) goto lab2; /* call standard_suffix, line 132 */
    lab2:
        z->c = z->l - m;
    }
    z->c = z->lb;
    {   int c = z->c; /* do, line 133 */
        if (!r_postlude(z)) goto lab3; /* call postlude, line 133 */
    lab3:
        z->c = c;
    }
    return 1;
}

extern struct SN_env * german2_create_env(void) { return SN_create_env(0, 2, 0); }

extern void german2_close_env(struct SN_env * z) { SN_close_env(z); }

