
/* This file was generated automatically by the Snowball to ANSI C compiler */

#include "header.h"

extern int kp_stem(struct SN_env * z);
static int r_measure(struct SN_env * z);
static int r_Lose_infix(struct SN_env * z);
static int r_Lose_prefix(struct SN_env * z);
static int r_Step_1c(struct SN_env * z);
static int r_Step_6(struct SN_env * z);
static int r_Step_7(struct SN_env * z);
static int r_Step_4(struct SN_env * z);
static int r_Step_3(struct SN_env * z);
static int r_Step_2(struct SN_env * z);
static int r_Step_1(struct SN_env * z);
static int r_lengthen_V(struct SN_env * z);
static int r_VX(struct SN_env * z);
static int r_V(struct SN_env * z);
static int r_C(struct SN_env * z);
static int r_R2(struct SN_env * z);
static int r_R1(struct SN_env * z);

static symbol s_0_0[3] = { 'n', 'd', 'e' };
static symbol s_0_1[2] = { 'e', 'n' };
static symbol s_0_2[1] = { 's' };
static symbol s_0_3[2] = { '\'', 's' };
static symbol s_0_4[2] = { 'e', 's' };
static symbol s_0_5[3] = { 'i', 'e', 's' };
static symbol s_0_6[3] = { 'a', 'u', 's' };

static struct among a_0[7] =
{
/*  0 */ { 3, s_0_0, -1, 7, 0},
/*  1 */ { 2, s_0_1, -1, 6, 0},
/*  2 */ { 1, s_0_2, -1, 2, 0},
/*  3 */ { 2, s_0_3, 2, 1, 0},
/*  4 */ { 2, s_0_4, 2, 4, 0},
/*  5 */ { 3, s_0_5, 4, 3, 0},
/*  6 */ { 3, s_0_6, 2, 5, 0}
};

static symbol s_1_0[2] = { 'd', 'e' };
static symbol s_1_1[2] = { 'g', 'e' };
static symbol s_1_2[5] = { 'i', 's', 'c', 'h', 'e' };
static symbol s_1_3[2] = { 'j', 'e' };
static symbol s_1_4[5] = { 'l', 'i', 'j', 'k', 'e' };
static symbol s_1_5[2] = { 'l', 'e' };
static symbol s_1_6[3] = { 'e', 'n', 'e' };
static symbol s_1_7[2] = { 'r', 'e' };
static symbol s_1_8[2] = { 's', 'e' };
static symbol s_1_9[2] = { 't', 'e' };
static symbol s_1_10[4] = { 'i', 'e', 'v', 'e' };

static struct among a_1[11] =
{
/*  0 */ { 2, s_1_0, -1, 5, 0},
/*  1 */ { 2, s_1_1, -1, 2, 0},
/*  2 */ { 5, s_1_2, -1, 4, 0},
/*  3 */ { 2, s_1_3, -1, 1, 0},
/*  4 */ { 5, s_1_4, -1, 3, 0},
/*  5 */ { 2, s_1_5, -1, 9, 0},
/*  6 */ { 3, s_1_6, -1, 10, 0},
/*  7 */ { 2, s_1_7, -1, 8, 0},
/*  8 */ { 2, s_1_8, -1, 7, 0},
/*  9 */ { 2, s_1_9, -1, 6, 0},
/* 10 */ { 4, s_1_10, -1, 11, 0}
};

static symbol s_2_0[4] = { 'h', 'e', 'i', 'd' };
static symbol s_2_1[3] = { 'f', 'i', 'e' };
static symbol s_2_2[3] = { 'g', 'i', 'e' };
static symbol s_2_3[4] = { 'a', 't', 'i', 'e' };
static symbol s_2_4[4] = { 'i', 's', 'm', 'e' };
static symbol s_2_5[3] = { 'i', 'n', 'g' };
static symbol s_2_6[4] = { 'a', 'r', 'i', 'j' };
static symbol s_2_7[4] = { 'e', 'r', 'i', 'j' };
static symbol s_2_8[3] = { 's', 'e', 'l' };
static symbol s_2_9[4] = { 'r', 'd', 'e', 'r' };
static symbol s_2_10[4] = { 's', 't', 'e', 'r' };
static symbol s_2_11[5] = { 'i', 't', 'e', 'i', 't' };
static symbol s_2_12[3] = { 'd', 's', 't' };
static symbol s_2_13[3] = { 't', 's', 't' };

static struct among a_2[14] =
{
/*  0 */ { 4, s_2_0, -1, 3, 0},
/*  1 */ { 3, s_2_1, -1, 7, 0},
/*  2 */ { 3, s_2_2, -1, 8, 0},
/*  3 */ { 4, s_2_3, -1, 1, 0},
/*  4 */ { 4, s_2_4, -1, 5, 0},
/*  5 */ { 3, s_2_5, -1, 5, 0},
/*  6 */ { 4, s_2_6, -1, 6, 0},
/*  7 */ { 4, s_2_7, -1, 5, 0},
/*  8 */ { 3, s_2_8, -1, 3, 0},
/*  9 */ { 4, s_2_9, -1, 4, 0},
/* 10 */ { 4, s_2_10, -1, 3, 0},
/* 11 */ { 5, s_2_11, -1, 2, 0},
/* 12 */ { 3, s_2_12, -1, 10, 0},
/* 13 */ { 3, s_2_13, -1, 9, 0}
};

static symbol s_3_0[3] = { 'e', 'n', 'd' };
static symbol s_3_1[5] = { 'a', 't', 'i', 'e', 'f' };
static symbol s_3_2[4] = { 'e', 'r', 'i', 'g' };
static symbol s_3_3[6] = { 'a', 'c', 'h', 't', 'i', 'g' };
static symbol s_3_4[6] = { 'i', 'o', 'n', 'e', 'e', 'l' };
static symbol s_3_5[4] = { 'b', 'a', 'a', 'r' };
static symbol s_3_6[4] = { 'l', 'a', 'a', 'r' };
static symbol s_3_7[4] = { 'n', 'a', 'a', 'r' };
static symbol s_3_8[4] = { 'r', 'a', 'a', 'r' };
static symbol s_3_9[6] = { 'e', 'r', 'i', 'g', 'e', 'r' };
static symbol s_3_10[8] = { 'a', 'c', 'h', 't', 'i', 'g', 'e', 'r' };
static symbol s_3_11[6] = { 'l', 'i', 'j', 'k', 'e', 'r' };
static symbol s_3_12[4] = { 't', 'a', 'n', 't' };
static symbol s_3_13[6] = { 'e', 'r', 'i', 'g', 's', 't' };
static symbol s_3_14[8] = { 'a', 'c', 'h', 't', 'i', 'g', 's', 't' };
static symbol s_3_15[6] = { 'l', 'i', 'j', 'k', 's', 't' };

static struct among a_3[16] =
{
/*  0 */ { 3, s_3_0, -1, 10, 0},
/*  1 */ { 5, s_3_1, -1, 2, 0},
/*  2 */ { 4, s_3_2, -1, 10, 0},
/*  3 */ { 6, s_3_3, -1, 9, 0},
/*  4 */ { 6, s_3_4, -1, 1, 0},
/*  5 */ { 4, s_3_5, -1, 3, 0},
/*  6 */ { 4, s_3_6, -1, 5, 0},
/*  7 */ { 4, s_3_7, -1, 4, 0},
/*  8 */ { 4, s_3_8, -1, 6, 0},
/*  9 */ { 6, s_3_9, -1, 10, 0},
/* 10 */ { 8, s_3_10, -1, 9, 0},
/* 11 */ { 6, s_3_11, -1, 8, 0},
/* 12 */ { 4, s_3_12, -1, 7, 0},
/* 13 */ { 6, s_3_13, -1, 10, 0},
/* 14 */ { 8, s_3_14, -1, 9, 0},
/* 15 */ { 6, s_3_15, -1, 8, 0}
};

static symbol s_4_0[2] = { 'i', 'g' };
static symbol s_4_1[4] = { 'i', 'g', 'e', 'r' };
static symbol s_4_2[4] = { 'i', 'g', 's', 't' };

static struct among a_4[3] =
{
/*  0 */ { 2, s_4_0, -1, 1, 0},
/*  1 */ { 4, s_4_1, -1, 1, 0},
/*  2 */ { 4, s_4_2, -1, 1, 0}
};

static symbol s_5_0[2] = { 'f', 't' };
static symbol s_5_1[2] = { 'k', 't' };
static symbol s_5_2[2] = { 'p', 't' };

static struct among a_5[3] =
{
/*  0 */ { 2, s_5_0, -1, 2, 0},
/*  1 */ { 2, s_5_1, -1, 1, 0},
/*  2 */ { 2, s_5_2, -1, 3, 0}
};

static symbol s_6_0[2] = { 'b', 'b' };
static symbol s_6_1[2] = { 'c', 'c' };
static symbol s_6_2[2] = { 'd', 'd' };
static symbol s_6_3[2] = { 'f', 'f' };
static symbol s_6_4[2] = { 'g', 'g' };
static symbol s_6_5[2] = { 'h', 'h' };
static symbol s_6_6[2] = { 'j', 'j' };
static symbol s_6_7[2] = { 'k', 'k' };
static symbol s_6_8[2] = { 'l', 'l' };
static symbol s_6_9[2] = { 'm', 'm' };
static symbol s_6_10[2] = { 'n', 'n' };
static symbol s_6_11[2] = { 'p', 'p' };
static symbol s_6_12[2] = { 'q', 'q' };
static symbol s_6_13[2] = { 'r', 'r' };
static symbol s_6_14[2] = { 's', 's' };
static symbol s_6_15[2] = { 't', 't' };
static symbol s_6_16[1] = { 'v' };
static symbol s_6_17[2] = { 'v', 'v' };
static symbol s_6_18[2] = { 'w', 'w' };
static symbol s_6_19[2] = { 'x', 'x' };
static symbol s_6_20[1] = { 'z' };
static symbol s_6_21[2] = { 'z', 'z' };

static struct among a_6[22] =
{
/*  0 */ { 2, s_6_0, -1, 1, 0},
/*  1 */ { 2, s_6_1, -1, 2, 0},
/*  2 */ { 2, s_6_2, -1, 3, 0},
/*  3 */ { 2, s_6_3, -1, 4, 0},
/*  4 */ { 2, s_6_4, -1, 5, 0},
/*  5 */ { 2, s_6_5, -1, 6, 0},
/*  6 */ { 2, s_6_6, -1, 7, 0},
/*  7 */ { 2, s_6_7, -1, 8, 0},
/*  8 */ { 2, s_6_8, -1, 9, 0},
/*  9 */ { 2, s_6_9, -1, 10, 0},
/* 10 */ { 2, s_6_10, -1, 11, 0},
/* 11 */ { 2, s_6_11, -1, 12, 0},
/* 12 */ { 2, s_6_12, -1, 13, 0},
/* 13 */ { 2, s_6_13, -1, 14, 0},
/* 14 */ { 2, s_6_14, -1, 15, 0},
/* 15 */ { 2, s_6_15, -1, 16, 0},
/* 16 */ { 1, s_6_16, -1, 21, 0},
/* 17 */ { 2, s_6_17, 16, 17, 0},
/* 18 */ { 2, s_6_18, -1, 18, 0},
/* 19 */ { 2, s_6_19, -1, 19, 0},
/* 20 */ { 1, s_6_20, -1, 22, 0},
/* 21 */ { 2, s_6_21, 20, 20, 0}
};

static symbol s_7_0[1] = { 'd' };
static symbol s_7_1[1] = { 't' };

static struct among a_7[2] =
{
/*  0 */ { 1, s_7_0, -1, 1, 0},
/*  1 */ { 1, s_7_1, -1, 2, 0}
};

static unsigned char g_v[] = { 17, 65, 16, 1 };

static unsigned char g_v_WX[] = { 17, 65, 208, 1 };

static unsigned char g_AOU[] = { 1, 64, 16 };

static unsigned char g_AIOU[] = { 1, 65, 16 };

static symbol s_0[] = { 'i', 'j' };
static symbol s_1[] = { 'i', 'j' };
static symbol s_2[] = { 'i', 'j' };
static symbol s_3[] = { 'e' };
static symbol s_4[] = { 't' };
static symbol s_5[] = { 'i', 'e' };
static symbol s_6[] = { 'a', 'r' };
static symbol s_7[] = { 'e', 'r' };
static symbol s_8[] = { 'e' };
static symbol s_9[] = { 'a', 'u' };
static symbol s_10[] = { 'h', 'e', 'd' };
static symbol s_11[] = { 'h', 'e', 'i', 'd' };
static symbol s_12[] = { 'n', 'd' };
static symbol s_13[] = { 'd' };
static symbol s_14[] = { 'i' };
static symbol s_15[] = { 'j' };
static symbol s_16[] = { 'n', 'd' };
static symbol s_17[] = { '\'', 't' };
static symbol s_18[] = { 'e', 't' };
static symbol s_19[] = { 'r', 'n', 't' };
static symbol s_20[] = { 'r', 'n' };
static symbol s_21[] = { 't' };
static symbol s_22[] = { 'i', 'n', 'k' };
static symbol s_23[] = { 'i', 'n', 'g' };
static symbol s_24[] = { 'm', 'p' };
static symbol s_25[] = { 'm' };
static symbol s_26[] = { '\'' };
static symbol s_27[] = { 'g' };
static symbol s_28[] = { 'l', 'i', 'j', 'k' };
static symbol s_29[] = { 'i', 's', 'c', 'h' };
static symbol s_30[] = { 't' };
static symbol s_31[] = { 's' };
static symbol s_32[] = { 'r' };
static symbol s_33[] = { 'l' };
static symbol s_34[] = { 'e', 'n' };
static symbol s_35[] = { 'i', 'e', 'f' };
static symbol s_36[] = { 'e', 'e', 'r' };
static symbol s_37[] = { 'r' };
static symbol s_38[] = { 'a', 'a', 'r' };
static symbol s_39[] = { 'f' };
static symbol s_40[] = { 'g' };
static symbol s_41[] = { 't' };
static symbol s_42[] = { 'd' };
static symbol s_43[] = { 'i', 'e' };
static symbol s_44[] = { 'e', 'e', 'r' };
static symbol s_45[] = { 'n' };
static symbol s_46[] = { 'l' };
static symbol s_47[] = { 'r' };
static symbol s_48[] = { 't', 'e', 'e', 'r' };
static symbol s_49[] = { 'l', 'i', 'j', 'k' };
static symbol s_50[] = { 'k' };
static symbol s_51[] = { 'f' };
static symbol s_52[] = { 'p' };
static symbol s_53[] = { 'b' };
static symbol s_54[] = { 'c' };
static symbol s_55[] = { 'd' };
static symbol s_56[] = { 'f' };
static symbol s_57[] = { 'g' };
static symbol s_58[] = { 'h' };
static symbol s_59[] = { 'j' };
static symbol s_60[] = { 'k' };
static symbol s_61[] = { 'l' };
static symbol s_62[] = { 'm' };
static symbol s_63[] = { 'n' };
static symbol s_64[] = { 'p' };
static symbol s_65[] = { 'q' };
static symbol s_66[] = { 'r' };
static symbol s_67[] = { 's' };
static symbol s_68[] = { 't' };
static symbol s_69[] = { 'v' };
static symbol s_70[] = { 'w' };
static symbol s_71[] = { 'x' };
static symbol s_72[] = { 'z' };
static symbol s_73[] = { 'f' };
static symbol s_74[] = { 's' };
static symbol s_75[] = { 'n' };
static symbol s_76[] = { 'h' };
static symbol s_77[] = { 'g', 'e' };
static symbol s_78[] = { 'g', 'e' };
static symbol s_79[] = { 'i', 'j' };
static symbol s_80[] = { 'i', 'j' };
static symbol s_81[] = { 'y' };
static symbol s_82[] = { 'Y' };
static symbol s_83[] = { 'y' };
static symbol s_84[] = { 'Y' };
static symbol s_85[] = { 'Y' };
static symbol s_86[] = { 'y' };

static int r_R1(struct SN_env * z) {
    z->I[0] = z->c; /* setmark x, line 32 */
    if (!(z->I[0] >= z->I[1])) return 0;
    return 1;
}

static int r_R2(struct SN_env * z) {
    z->I[0] = z->c; /* setmark x, line 33 */
    if (!(z->I[0] >= z->I[2])) return 0;
    return 1;
}

static int r_V(struct SN_env * z) {
    {   int m_test = z->l - z->c; /* test, line 35 */
        {   int m = z->l - z->c; /* or, line 35 */
            if (!(in_grouping_b(z, g_v, 97, 121))) goto lab1;
            goto lab0;
        lab1:
            z->c = z->l - m;
            if (!(eq_s_b(z, 2, s_0))) return 0;
        }
    lab0:
        z->c = z->l - m_test;
    }
    return 1;
}

static int r_VX(struct SN_env * z) {
    {   int m_test = z->l - z->c; /* test, line 36 */
        if (z->c <= z->lb) return 0;
        z->c--; /* next, line 36 */
        {   int m = z->l - z->c; /* or, line 36 */
            if (!(in_grouping_b(z, g_v, 97, 121))) goto lab1;
            goto lab0;
        lab1:
            z->c = z->l - m;
            if (!(eq_s_b(z, 2, s_1))) return 0;
        }
    lab0:
        z->c = z->l - m_test;
    }
    return 1;
}

static int r_C(struct SN_env * z) {
    {   int m_test = z->l - z->c; /* test, line 37 */
        {   int m = z->l - z->c; /* not, line 37 */
            if (!(eq_s_b(z, 2, s_2))) goto lab0;
            return 0;
        lab0:
            z->c = z->l - m;
        }
        if (!(out_grouping_b(z, g_v, 97, 121))) return 0;
        z->c = z->l - m_test;
    }
    return 1;
}

static int r_lengthen_V(struct SN_env * z) {
    {   int m = z->l - z->c; /* do, line 39 */
        if (!(out_grouping_b(z, g_v_WX, 97, 121))) goto lab0;
        z->ket = z->c; /* [, line 40 */
        {   int m = z->l - z->c; /* or, line 40 */
            if (!(in_grouping_b(z, g_AOU, 97, 117))) goto lab2;
            z->bra = z->c; /* ], line 40 */
            {   int m_test = z->l - z->c; /* test, line 40 */
                {   int m = z->l - z->c; /* or, line 40 */
                    if (!(out_grouping_b(z, g_v, 97, 121))) goto lab4;
                    goto lab3;
                lab4:
                    z->c = z->l - m;
                    if (z->c > z->lb) goto lab2; /* atlimit, line 40 */
                }
            lab3:
                z->c = z->l - m_test;
            }
            goto lab1;
        lab2:
            z->c = z->l - m;
            if (!(eq_s_b(z, 1, s_3))) goto lab0;
            z->bra = z->c; /* ], line 41 */
            {   int m_test = z->l - z->c; /* test, line 41 */
                {   int m = z->l - z->c; /* or, line 41 */
                    if (!(out_grouping_b(z, g_v, 97, 121))) goto lab6;
                    goto lab5;
                lab6:
                    z->c = z->l - m;
                    if (z->c > z->lb) goto lab0; /* atlimit, line 41 */
                }
            lab5:
                {   int m = z->l - z->c; /* not, line 42 */
                    if (!(in_grouping_b(z, g_AIOU, 97, 117))) goto lab7;
                    goto lab0;
                lab7:
                    z->c = z->l - m;
                }
                {   int m = z->l - z->c; /* not, line 43 */
                    if (z->c <= z->lb) goto lab8;
                    z->c--; /* next, line 43 */
                    if (!(in_grouping_b(z, g_AIOU, 97, 117))) goto lab8;
                    if (!(out_grouping_b(z, g_v, 97, 121))) goto lab8;
                    goto lab0;
                lab8:
                    z->c = z->l - m;
                }
                z->c = z->l - m_test;
            }
        }
    lab1:
        z->S[0] = slice_to(z, z->S[0]); /* -> ch, line 44 */
        {   int c = z->c;
            insert_v(z, z->c, z->c, z->S[0]); /* <+ ch, line 44 */
            z->c = c;
        }
    lab0:
        z->c = z->l - m;
    }
    return 1;
}

static int r_Step_1(struct SN_env * z) {
    int among_var;
    z->ket = z->c; /* [, line 49 */
    among_var = find_among_b(z, a_0, 7); /* among, line 49 */
    if (!(among_var)) return 0;
    z->bra = z->c; /* ], line 49 */
    switch(among_var) {
        case 0: return 0;
        case 1:
            slice_del(z); /* delete, line 51 */
            break;
        case 2:
            if (!r_R1(z)) return 0; /* call R1, line 52 */
            {   int m = z->l - z->c; /* not, line 52 */
                if (!(eq_s_b(z, 1, s_4))) goto lab0;
                if (!r_R1(z)) goto lab0; /* call R1, line 52 */
                return 0;
            lab0:
                z->c = z->l - m;
            }
            if (!r_C(z)) return 0; /* call C, line 52 */
            slice_del(z); /* delete, line 52 */
            break;
        case 3:
            if (!r_R1(z)) return 0; /* call R1, line 53 */
            slice_from_s(z, 2, s_5); /* <-, line 53 */
            break;
        case 4:
            {   int m = z->l - z->c; /* or, line 55 */
                if (!(eq_s_b(z, 2, s_6))) goto lab2;
                if (!r_R1(z)) goto lab2; /* call R1, line 55 */
                if (!r_C(z)) goto lab2; /* call C, line 55 */
                z->bra = z->c; /* ], line 55 */
                slice_del(z); /* delete, line 55 */
                if (!r_lengthen_V(z)) goto lab2; /* call lengthen_V, line 55 */
                goto lab1;
            lab2:
                z->c = z->l - m;
                if (!(eq_s_b(z, 2, s_7))) goto lab3;
                if (!r_R1(z)) goto lab3; /* call R1, line 56 */
                if (!r_C(z)) goto lab3; /* call C, line 56 */
                z->bra = z->c; /* ], line 56 */
                slice_del(z); /* delete, line 56 */
                goto lab1;
            lab3:
                z->c = z->l - m;
                if (!r_R1(z)) return 0; /* call R1, line 57 */
                if (!r_C(z)) return 0; /* call C, line 57 */
                slice_from_s(z, 1, s_8); /* <-, line 57 */
            }
        lab1:
            break;
        case 5:
            if (!r_R1(z)) return 0; /* call R1, line 59 */
            if (!r_V(z)) return 0; /* call V, line 59 */
            slice_from_s(z, 2, s_9); /* <-, line 59 */
            break;
        case 6:
            {   int m = z->l - z->c; /* or, line 60 */
                if (!(eq_s_b(z, 3, s_10))) goto lab5;
                if (!r_R1(z)) goto lab5; /* call R1, line 60 */
                z->bra = z->c; /* ], line 60 */
                slice_from_s(z, 4, s_11); /* <-, line 60 */
                goto lab4;
            lab5:
                z->c = z->l - m;
                if (!(eq_s_b(z, 2, s_12))) goto lab6;
                slice_del(z); /* delete, line 61 */
                goto lab4;
            lab6:
                z->c = z->l - m;
                if (!(eq_s_b(z, 1, s_13))) goto lab7;
                if (!r_R1(z)) goto lab7; /* call R1, line 62 */
                if (!r_C(z)) goto lab7; /* call C, line 62 */
                z->bra = z->c; /* ], line 62 */
                slice_del(z); /* delete, line 62 */
                goto lab4;
            lab7:
                z->c = z->l - m;
                {   int m = z->l - z->c; /* or, line 63 */
                    if (!(eq_s_b(z, 1, s_14))) goto lab10;
                    goto lab9;
                lab10:
                    z->c = z->l - m;
                    if (!(eq_s_b(z, 1, s_15))) goto lab8;
                }
            lab9:
                if (!r_V(z)) goto lab8; /* call V, line 63 */
                slice_del(z); /* delete, line 63 */
                goto lab4;
            lab8:
                z->c = z->l - m;
                if (!r_R1(z)) return 0; /* call R1, line 64 */
                if (!r_C(z)) return 0; /* call C, line 64 */
                slice_del(z); /* delete, line 64 */
                if (!r_lengthen_V(z)) return 0; /* call lengthen_V, line 64 */
            }
        lab4:
            break;
        case 7:
            slice_from_s(z, 2, s_16); /* <-, line 65 */
            break;
    }
    return 1;
}

static int r_Step_2(struct SN_env * z) {
    int among_var;
    z->ket = z->c; /* [, line 71 */
    among_var = find_among_b(z, a_1, 11); /* among, line 71 */
    if (!(among_var)) return 0;
    z->bra = z->c; /* ], line 71 */
    switch(among_var) {
        case 0: return 0;
        case 1:
            {   int m = z->l - z->c; /* or, line 72 */
                if (!(eq_s_b(z, 2, s_17))) goto lab1;
                z->bra = z->c; /* ], line 72 */
                slice_del(z); /* delete, line 72 */
                goto lab0;
            lab1:
                z->c = z->l - m;
                if (!(eq_s_b(z, 2, s_18))) goto lab2;
                z->bra = z->c; /* ], line 73 */
                if (!r_R1(z)) goto lab2; /* call R1, line 73 */
                if (!r_C(z)) goto lab2; /* call C, line 73 */
                slice_del(z); /* delete, line 73 */
                goto lab0;
            lab2:
                z->c = z->l - m;
                if (!(eq_s_b(z, 3, s_19))) goto lab3;
                z->bra = z->c; /* ], line 74 */
                slice_from_s(z, 2, s_20); /* <-, line 74 */
                goto lab0;
            lab3:
                z->c = z->l - m;
                if (!(eq_s_b(z, 1, s_21))) goto lab4;
                z->bra = z->c; /* ], line 75 */
                if (!r_R1(z)) goto lab4; /* call R1, line 75 */
                if (!r_VX(z)) goto lab4; /* call VX, line 75 */
                slice_del(z); /* delete, line 75 */
                goto lab0;
            lab4:
                z->c = z->l - m;
                if (!(eq_s_b(z, 3, s_22))) goto lab5;
                z->bra = z->c; /* ], line 76 */
                slice_from_s(z, 3, s_23); /* <-, line 76 */
                goto lab0;
            lab5:
                z->c = z->l - m;
                if (!(eq_s_b(z, 2, s_24))) goto lab6;
                z->bra = z->c; /* ], line 77 */
                slice_from_s(z, 1, s_25); /* <-, line 77 */
                goto lab0;
            lab6:
                z->c = z->l - m;
                if (!(eq_s_b(z, 1, s_26))) goto lab7;
                z->bra = z->c; /* ], line 78 */
                if (!r_R1(z)) goto lab7; /* call R1, line 78 */
                slice_del(z); /* delete, line 78 */
                goto lab0;
            lab7:
                z->c = z->l - m;
                z->bra = z->c; /* ], line 79 */
                if (!r_R1(z)) return 0; /* call R1, line 79 */
                if (!r_C(z)) return 0; /* call C, line 79 */
                slice_del(z); /* delete, line 79 */
            }
        lab0:
            break;
        case 2:
            if (!r_R1(z)) return 0; /* call R1, line 80 */
            slice_from_s(z, 1, s_27); /* <-, line 80 */
            break;
        case 3:
            if (!r_R1(z)) return 0; /* call R1, line 81 */
            slice_from_s(z, 4, s_28); /* <-, line 81 */
            break;
        case 4:
            if (!r_R1(z)) return 0; /* call R1, line 82 */
            slice_from_s(z, 4, s_29); /* <-, line 82 */
            break;
        case 5:
            if (!r_R1(z)) return 0; /* call R1, line 83 */
            if (!r_C(z)) return 0; /* call C, line 83 */
            slice_del(z); /* delete, line 83 */
            break;
        case 6:
            if (!r_R1(z)) return 0; /* call R1, line 84 */
            slice_from_s(z, 1, s_30); /* <-, line 84 */
            break;
        case 7:
            if (!r_R1(z)) return 0; /* call R1, line 85 */
            slice_from_s(z, 1, s_31); /* <-, line 85 */
            break;
        case 8:
            if (!r_R1(z)) return 0; /* call R1, line 86 */
            slice_from_s(z, 1, s_32); /* <-, line 86 */
            break;
        case 9:
            if (!r_R1(z)) return 0; /* call R1, line 87 */
            slice_del(z); /* delete, line 87 */
            insert_s(z, z->c, z->c, 1, s_33); /* attach, line 87 */
            if (!r_lengthen_V(z)) return 0; /* call lengthen_V, line 87 */
            break;
        case 10:
            if (!r_R1(z)) return 0; /* call R1, line 88 */
            if (!r_C(z)) return 0; /* call C, line 88 */
            slice_del(z); /* delete, line 88 */
            insert_s(z, z->c, z->c, 2, s_34); /* attach, line 88 */
            if (!r_lengthen_V(z)) return 0; /* call lengthen_V, line 88 */
            break;
        case 11:
            if (!r_R1(z)) return 0; /* call R1, line 89 */
            if (!r_C(z)) return 0; /* call C, line 89 */
            slice_from_s(z, 3, s_35); /* <-, line 89 */
            break;
    }
    return 1;
}

static int r_Step_3(struct SN_env * z) {
    int among_var;
    z->ket = z->c; /* [, line 95 */
    among_var = find_among_b(z, a_2, 14); /* among, line 95 */
    if (!(among_var)) return 0;
    z->bra = z->c; /* ], line 95 */
    switch(among_var) {
        case 0: return 0;
        case 1:
            if (!r_R1(z)) return 0; /* call R1, line 96 */
            slice_from_s(z, 3, s_36); /* <-, line 96 */
            break;
        case 2:
            if (!r_R1(z)) return 0; /* call R1, line 97 */
            slice_del(z); /* delete, line 97 */
            if (!r_lengthen_V(z)) return 0; /* call lengthen_V, line 97 */
            break;
        case 3:
            if (!r_R1(z)) return 0; /* call R1, line 100 */
            slice_del(z); /* delete, line 100 */
            break;
        case 4:
            slice_from_s(z, 1, s_37); /* <-, line 101 */
            break;
        case 5:
            if (!r_R1(z)) return 0; /* call R1, line 104 */
            slice_del(z); /* delete, line 104 */
            if (!r_lengthen_V(z)) return 0; /* call lengthen_V, line 104 */
            break;
        case 6:
            if (!r_R1(z)) return 0; /* call R1, line 105 */
            if (!r_C(z)) return 0; /* call C, line 105 */
            slice_from_s(z, 3, s_38); /* <-, line 105 */
            break;
        case 7:
            if (!r_R2(z)) return 0; /* call R2, line 106 */
            slice_del(z); /* delete, line 106 */
            insert_s(z, z->c, z->c, 1, s_39); /* attach, line 106 */
            if (!r_lengthen_V(z)) return 0; /* call lengthen_V, line 106 */
            break;
        case 8:
            if (!r_R2(z)) return 0; /* call R2, line 107 */
            slice_del(z); /* delete, line 107 */
            insert_s(z, z->c, z->c, 1, s_40); /* attach, line 107 */
            if (!r_lengthen_V(z)) return 0; /* call lengthen_V, line 107 */
            break;
        case 9:
            if (!r_R1(z)) return 0; /* call R1, line 108 */
            if (!r_C(z)) return 0; /* call C, line 108 */
            slice_from_s(z, 1, s_41); /* <-, line 108 */
            break;
        case 10:
            if (!r_R1(z)) return 0; /* call R1, line 109 */
            if (!r_C(z)) return 0; /* call C, line 109 */
            slice_from_s(z, 1, s_42); /* <-, line 109 */
            break;
    }
    return 1;
}

static int r_Step_4(struct SN_env * z) {
    int among_var;
    {   int m = z->l - z->c; /* or, line 134 */
        z->ket = z->c; /* [, line 115 */
        among_var = find_among_b(z, a_3, 16); /* among, line 115 */
        if (!(among_var)) goto lab1;
        z->bra = z->c; /* ], line 115 */
        switch(among_var) {
            case 0: goto lab1;
            case 1:
                if (!r_R1(z)) goto lab1; /* call R1, line 116 */
                slice_from_s(z, 2, s_43); /* <-, line 116 */
                break;
            case 2:
                if (!r_R1(z)) goto lab1; /* call R1, line 117 */
                slice_from_s(z, 3, s_44); /* <-, line 117 */
                break;
            case 3:
                if (!r_R1(z)) goto lab1; /* call R1, line 118 */
                slice_del(z); /* delete, line 118 */
                break;
            case 4:
                if (!r_R1(z)) goto lab1; /* call R1, line 119 */
                if (!r_V(z)) goto lab1; /* call V, line 119 */
                slice_from_s(z, 1, s_45); /* <-, line 119 */
                break;
            case 5:
                if (!r_R1(z)) goto lab1; /* call R1, line 120 */
                if (!r_V(z)) goto lab1; /* call V, line 120 */
                slice_from_s(z, 1, s_46); /* <-, line 120 */
                break;
            case 6:
                if (!r_R1(z)) goto lab1; /* call R1, line 121 */
                if (!r_V(z)) goto lab1; /* call V, line 121 */
                slice_from_s(z, 1, s_47); /* <-, line 121 */
                break;
            case 7:
                if (!r_R1(z)) goto lab1; /* call R1, line 122 */
                slice_from_s(z, 4, s_48); /* <-, line 122 */
                break;
            case 8:
                if (!r_R1(z)) goto lab1; /* call R1, line 124 */
                slice_from_s(z, 4, s_49); /* <-, line 124 */
                break;
            case 9:
                if (!r_R1(z)) goto lab1; /* call R1, line 127 */
                slice_del(z); /* delete, line 127 */
                break;
            case 10:
                if (!r_R1(z)) goto lab1; /* call R1, line 131 */
                if (!r_C(z)) goto lab1; /* call C, line 131 */
                slice_del(z); /* delete, line 131 */
                if (!r_lengthen_V(z)) goto lab1; /* call lengthen_V, line 131 */
                break;
        }
        goto lab0;
    lab1:
        z->c = z->l - m;
        z->ket = z->c; /* [, line 135 */
        among_var = find_among_b(z, a_4, 3); /* among, line 135 */
        if (!(among_var)) return 0;
        z->bra = z->c; /* ], line 135 */
        switch(among_var) {
            case 0: return 0;
            case 1:
                if (!r_R1(z)) return 0; /* call R1, line 138 */
                if (!r_C(z)) return 0; /* call C, line 138 */
                slice_del(z); /* delete, line 138 */
                if (!r_lengthen_V(z)) return 0; /* call lengthen_V, line 138 */
                break;
        }
    }
lab0:
    return 1;
}

static int r_Step_7(struct SN_env * z) {
    int among_var;
    z->ket = z->c; /* [, line 145 */
    among_var = find_among_b(z, a_5, 3); /* among, line 145 */
    if (!(among_var)) return 0;
    z->bra = z->c; /* ], line 145 */
    switch(among_var) {
        case 0: return 0;
        case 1:
            slice_from_s(z, 1, s_50); /* <-, line 146 */
            break;
        case 2:
            slice_from_s(z, 1, s_51); /* <-, line 147 */
            break;
        case 3:
            slice_from_s(z, 1, s_52); /* <-, line 148 */
            break;
    }
    return 1;
}

static int r_Step_6(struct SN_env * z) {
    int among_var;
    z->ket = z->c; /* [, line 154 */
    among_var = find_among_b(z, a_6, 22); /* among, line 154 */
    if (!(among_var)) return 0;
    z->bra = z->c; /* ], line 154 */
    switch(among_var) {
        case 0: return 0;
        case 1:
            slice_from_s(z, 1, s_53); /* <-, line 155 */
            break;
        case 2:
            slice_from_s(z, 1, s_54); /* <-, line 156 */
            break;
        case 3:
            slice_from_s(z, 1, s_55); /* <-, line 157 */
            break;
        case 4:
            slice_from_s(z, 1, s_56); /* <-, line 158 */
            break;
        case 5:
            slice_from_s(z, 1, s_57); /* <-, line 159 */
            break;
        case 6:
            slice_from_s(z, 1, s_58); /* <-, line 160 */
            break;
        case 7:
            slice_from_s(z, 1, s_59); /* <-, line 161 */
            break;
        case 8:
            slice_from_s(z, 1, s_60); /* <-, line 162 */
            break;
        case 9:
            slice_from_s(z, 1, s_61); /* <-, line 163 */
            break;
        case 10:
            slice_from_s(z, 1, s_62); /* <-, line 164 */
            break;
        case 11:
            slice_from_s(z, 1, s_63); /* <-, line 165 */
            break;
        case 12:
            slice_from_s(z, 1, s_64); /* <-, line 166 */
            break;
        case 13:
            slice_from_s(z, 1, s_65); /* <-, line 167 */
            break;
        case 14:
            slice_from_s(z, 1, s_66); /* <-, line 168 */
            break;
        case 15:
            slice_from_s(z, 1, s_67); /* <-, line 169 */
            break;
        case 16:
            slice_from_s(z, 1, s_68); /* <-, line 170 */
            break;
        case 17:
            slice_from_s(z, 1, s_69); /* <-, line 171 */
            break;
        case 18:
            slice_from_s(z, 1, s_70); /* <-, line 172 */
            break;
        case 19:
            slice_from_s(z, 1, s_71); /* <-, line 173 */
            break;
        case 20:
            slice_from_s(z, 1, s_72); /* <-, line 174 */
            break;
        case 21:
            slice_from_s(z, 1, s_73); /* <-, line 175 */
            break;
        case 22:
            slice_from_s(z, 1, s_74); /* <-, line 176 */
            break;
    }
    return 1;
}

static int r_Step_1c(struct SN_env * z) {
    int among_var;
    z->ket = z->c; /* [, line 182 */
    among_var = find_among_b(z, a_7, 2); /* among, line 182 */
    if (!(among_var)) return 0;
    z->bra = z->c; /* ], line 182 */
    if (!r_R1(z)) return 0; /* call R1, line 182 */
    if (!r_C(z)) return 0; /* call C, line 182 */
    switch(among_var) {
        case 0: return 0;
        case 1:
            {   int m = z->l - z->c; /* not, line 183 */
                if (!(eq_s_b(z, 1, s_75))) goto lab0;
                if (!r_R1(z)) goto lab0; /* call R1, line 183 */
                return 0;
            lab0:
                z->c = z->l - m;
            }
            slice_del(z); /* delete, line 183 */
            break;
        case 2:
            {   int m = z->l - z->c; /* not, line 184 */
                if (!(eq_s_b(z, 1, s_76))) goto lab1;
                if (!r_R1(z)) goto lab1; /* call R1, line 184 */
                return 0;
            lab1:
                z->c = z->l - m;
            }
            slice_del(z); /* delete, line 184 */
            break;
    }
    return 1;
}

static int r_Lose_prefix(struct SN_env * z) {
    z->bra = z->c; /* [, line 190 */
    if (!(eq_s(z, 2, s_77))) return 0;
    z->ket = z->c; /* ], line 190 */
    {   int c_test = z->c; /* test, line 190 */
        {   int c = z->c + 3;
            if (0 > c || c > z->l) return 0;
            z->c = c; /* hop, line 190 */
        }
        z->c = c_test;
    }
    while(1) { /* goto, line 190 */
        int c = z->c;
        if (!(in_grouping(z, g_v, 97, 121))) goto lab0;
        z->c = c;
        break;
    lab0:
        z->c = c;
        if (z->c >= z->l) return 0;
        z->c++;
    }
    while(1) { /* goto, line 190 */
        int c = z->c;
        if (!(out_grouping(z, g_v, 97, 121))) goto lab1;
        z->c = c;
        break;
    lab1:
        z->c = c;
        if (z->c >= z->l) return 0;
        z->c++;
    }
    z->B[2] = 1; /* set GE_removed, line 191 */
    slice_del(z); /* delete, line 192 */
    return 1;
}

static int r_Lose_infix(struct SN_env * z) {
    if (z->c >= z->l) return 0;
    z->c++; /* next, line 196 */
    while(1) { /* gopast, line 197 */
        z->bra = z->c; /* [, line 197 */
        if (!(eq_s(z, 2, s_78))) goto lab0;
        z->ket = z->c; /* ], line 197 */
        break;
    lab0:
        if (z->c >= z->l) return 0;
        z->c++;
    }
    {   int c_test = z->c; /* test, line 197 */
        {   int c = z->c + 3;
            if (0 > c || c > z->l) return 0;
            z->c = c; /* hop, line 197 */
        }
        z->c = c_test;
    }
    while(1) { /* goto, line 197 */
        int c = z->c;
        if (!(in_grouping(z, g_v, 97, 121))) goto lab1;
        z->c = c;
        break;
    lab1:
        z->c = c;
        if (z->c >= z->l) return 0;
        z->c++;
    }
    while(1) { /* goto, line 197 */
        int c = z->c;
        if (!(out_grouping(z, g_v, 97, 121))) goto lab2;
        z->c = c;
        break;
    lab2:
        z->c = c;
        if (z->c >= z->l) return 0;
        z->c++;
    }
    z->B[2] = 1; /* set GE_removed, line 198 */
    slice_del(z); /* delete, line 199 */
    return 1;
}

static int r_measure(struct SN_env * z) {
    {   int c = z->c; /* do, line 203 */
        z->c = z->l; /* tolimit, line 204 */
        z->I[1] = z->c; /* setmark p1, line 205 */
        z->I[2] = z->c; /* setmark p2, line 206 */
    lab0:
        z->c = c;
    }
    {   int c = z->c; /* do, line 208 */
        while(1) { /* repeat, line 209 */
            if (!(out_grouping(z, g_v, 97, 121))) goto lab2;
            continue;
        lab2:
            break;
        }
        {   int i = 1;
            while(1) { /* atleast, line 209 */
                int c = z->c;
                {   int c = z->c; /* or, line 209 */
                    if (!(eq_s(z, 2, s_79))) goto lab5;
                    goto lab4;
                lab5:
                    z->c = c;
                    if (!(in_grouping(z, g_v, 97, 121))) goto lab3;
                }
            lab4:
                i--;
                continue;
            lab3:
                z->c = c;
                break;
            }
            if (i > 0) goto lab1;
        }
        if (!(out_grouping(z, g_v, 97, 121))) goto lab1;
        z->I[1] = z->c; /* setmark p1, line 209 */
        while(1) { /* repeat, line 210 */
            if (!(out_grouping(z, g_v, 97, 121))) goto lab6;
            continue;
        lab6:
            break;
        }
        {   int i = 1;
            while(1) { /* atleast, line 210 */
                int c = z->c;
                {   int c = z->c; /* or, line 210 */
                    if (!(eq_s(z, 2, s_80))) goto lab9;
                    goto lab8;
                lab9:
                    z->c = c;
                    if (!(in_grouping(z, g_v, 97, 121))) goto lab7;
                }
            lab8:
                i--;
                continue;
            lab7:
                z->c = c;
                break;
            }
            if (i > 0) goto lab1;
        }
        if (!(out_grouping(z, g_v, 97, 121))) goto lab1;
        z->I[2] = z->c; /* setmark p2, line 210 */
    lab1:
        z->c = c;
    }
    return 1;
}

extern int kp_stem(struct SN_env * z) {
    z->B[0] = 0; /* unset Y_found, line 216 */
    z->B[1] = 0; /* unset stemmed, line 217 */
    {   int c = z->c; /* do, line 218 */
        z->bra = z->c; /* [, line 218 */
        if (!(eq_s(z, 1, s_81))) goto lab0;
        z->ket = z->c; /* ], line 218 */
        slice_from_s(z, 1, s_82); /* <-, line 218 */
        z->B[0] = 1; /* set Y_found, line 218 */
    lab0:
        z->c = c;
    }
    {   int c = z->c; /* do, line 219 */
        while(1) { /* repeat, line 219 */
            int c = z->c;
            while(1) { /* goto, line 219 */
                int c = z->c;
                if (!(in_grouping(z, g_v, 97, 121))) goto lab3;
                z->bra = z->c; /* [, line 219 */
                if (!(eq_s(z, 1, s_83))) goto lab3;
                z->ket = z->c; /* ], line 219 */
                z->c = c;
                break;
            lab3:
                z->c = c;
                if (z->c >= z->l) goto lab2;
                z->c++;
            }
            slice_from_s(z, 1, s_84); /* <-, line 219 */
            z->B[0] = 1; /* set Y_found, line 219 */
            continue;
        lab2:
            z->c = c;
            break;
        }
    lab1:
        z->c = c;
    }
    if (!r_measure(z)) return 0; /* call measure, line 221 */
    z->lb = z->c; z->c = z->l; /* backwards, line 223 */

    {   int m = z->l - z->c; /* do, line 224 */
        if (!r_Step_1(z)) goto lab4; /* call Step_1, line 224 */
        z->B[1] = 1; /* set stemmed, line 224 */
    lab4:
        z->c = z->l - m;
    }
    {   int m = z->l - z->c; /* do, line 225 */
        if (!r_Step_2(z)) goto lab5; /* call Step_2, line 225 */
        z->B[1] = 1; /* set stemmed, line 225 */
    lab5:
        z->c = z->l - m;
    }
    {   int m = z->l - z->c; /* do, line 226 */
        if (!r_Step_3(z)) goto lab6; /* call Step_3, line 226 */
        z->B[1] = 1; /* set stemmed, line 226 */
    lab6:
        z->c = z->l - m;
    }
    {   int m = z->l - z->c; /* do, line 227 */
        if (!r_Step_4(z)) goto lab7; /* call Step_4, line 227 */
        z->B[1] = 1; /* set stemmed, line 227 */
    lab7:
        z->c = z->l - m;
    }
    z->c = z->lb;
    z->B[2] = 0; /* unset GE_removed, line 229 */
    {   int c = z->c; /* do, line 230 */
        {   int c = z->c; /* and, line 230 */
            if (!r_Lose_prefix(z)) goto lab8; /* call Lose_prefix, line 230 */
            z->c = c;
            if (!r_measure(z)) goto lab8; /* call measure, line 230 */
        }
    lab8:
        z->c = c;
    }
    z->lb = z->c; z->c = z->l; /* backwards, line 231 */

    {   int m = z->l - z->c; /* do, line 232 */
        if (!(z->B[2])) goto lab9; /* Boolean test GE_removed, line 232 */
        if (!r_Step_1c(z)) goto lab9; /* call Step_1c, line 232 */
    lab9:
        z->c = z->l - m;
    }
    z->c = z->lb;
    z->B[2] = 0; /* unset GE_removed, line 234 */
    {   int c = z->c; /* do, line 235 */
        {   int c = z->c; /* and, line 235 */
            if (!r_Lose_infix(z)) goto lab10; /* call Lose_infix, line 235 */
            z->c = c;
            if (!r_measure(z)) goto lab10; /* call measure, line 235 */
        }
    lab10:
        z->c = c;
    }
    z->lb = z->c; z->c = z->l; /* backwards, line 236 */

    {   int m = z->l - z->c; /* do, line 237 */
        if (!(z->B[2])) goto lab11; /* Boolean test GE_removed, line 237 */
        if (!r_Step_1c(z)) goto lab11; /* call Step_1c, line 237 */
    lab11:
        z->c = z->l - m;
    }
    z->c = z->lb;
    z->lb = z->c; z->c = z->l; /* backwards, line 239 */

    {   int m = z->l - z->c; /* do, line 240 */
        if (!r_Step_7(z)) goto lab12; /* call Step_7, line 240 */
        z->B[1] = 1; /* set stemmed, line 240 */
    lab12:
        z->c = z->l - m;
    }
    {   int m = z->l - z->c; /* do, line 241 */
        {   int m = z->l - z->c; /* or, line 241 */
            if (!(z->B[1])) goto lab15; /* Boolean test stemmed, line 241 */
            goto lab14;
        lab15:
            z->c = z->l - m;
            if (!(z->B[2])) goto lab13; /* Boolean test GE_removed, line 241 */
        }
    lab14:
        if (!r_Step_6(z)) goto lab13; /* call Step_6, line 241 */
    lab13:
        z->c = z->l - m;
    }
    z->c = z->lb;
    {   int c = z->c; /* do, line 243 */
        if (!(z->B[0])) goto lab16; /* Boolean test Y_found, line 243 */
        while(1) { /* repeat, line 243 */
            int c = z->c;
            while(1) { /* goto, line 243 */
                int c = z->c;
                z->bra = z->c; /* [, line 243 */
                if (!(eq_s(z, 1, s_85))) goto lab18;
                z->ket = z->c; /* ], line 243 */
                z->c = c;
                break;
            lab18:
                z->c = c;
                if (z->c >= z->l) goto lab17;
                z->c++;
            }
            slice_from_s(z, 1, s_86); /* <-, line 243 */
            continue;
        lab17:
            z->c = c;
            break;
        }
    lab16:
        z->c = c;
    }
    return 1;
}

extern struct SN_env * kp_create_env(void) { return SN_create_env(1, 3, 3); }

extern void kp_close_env(struct SN_env * z) { SN_close_env(z); }

