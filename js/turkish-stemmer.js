// This file was generated automatically by the Snowball to JSX compiler
// http://snowballstem.org/

function TurkishStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["m", -1, -1],
        ["n", -1, -1],
        ["miz", -1, -1],
        ["niz", -1, -1],
        ["muz", -1, -1],
        ["nuz", -1, -1],
        ["m\u00FCz", -1, -1],
        ["n\u00FCz", -1, -1],
        ["m\u0131z", -1, -1],
        ["n\u0131z", -1, -1]
    ];

    /** @const */ var a_1 = [
        ["leri", -1, -1],
        ["lar\u0131", -1, -1]
    ];

    /** @const */ var a_2 = [
        ["ni", -1, -1],
        ["nu", -1, -1],
        ["n\u00FC", -1, -1],
        ["n\u0131", -1, -1]
    ];

    /** @const */ var a_3 = [
        ["in", -1, -1],
        ["un", -1, -1],
        ["\u00FCn", -1, -1],
        ["\u0131n", -1, -1]
    ];

    /** @const */ var a_4 = [
        ["a", -1, -1],
        ["e", -1, -1]
    ];

    /** @const */ var a_5 = [
        ["na", -1, -1],
        ["ne", -1, -1]
    ];

    /** @const */ var a_6 = [
        ["da", -1, -1],
        ["ta", -1, -1],
        ["de", -1, -1],
        ["te", -1, -1]
    ];

    /** @const */ var a_7 = [
        ["nda", -1, -1],
        ["nde", -1, -1]
    ];

    /** @const */ var a_8 = [
        ["dan", -1, -1],
        ["tan", -1, -1],
        ["den", -1, -1],
        ["ten", -1, -1]
    ];

    /** @const */ var a_9 = [
        ["ndan", -1, -1],
        ["nden", -1, -1]
    ];

    /** @const */ var a_10 = [
        ["la", -1, -1],
        ["le", -1, -1]
    ];

    /** @const */ var a_11 = [
        ["ca", -1, -1],
        ["ce", -1, -1]
    ];

    /** @const */ var a_12 = [
        ["im", -1, -1],
        ["um", -1, -1],
        ["\u00FCm", -1, -1],
        ["\u0131m", -1, -1]
    ];

    /** @const */ var a_13 = [
        ["sin", -1, -1],
        ["sun", -1, -1],
        ["s\u00FCn", -1, -1],
        ["s\u0131n", -1, -1]
    ];

    /** @const */ var a_14 = [
        ["iz", -1, -1],
        ["uz", -1, -1],
        ["\u00FCz", -1, -1],
        ["\u0131z", -1, -1]
    ];

    /** @const */ var a_15 = [
        ["siniz", -1, -1],
        ["sunuz", -1, -1],
        ["s\u00FCn\u00FCz", -1, -1],
        ["s\u0131n\u0131z", -1, -1]
    ];

    /** @const */ var a_16 = [
        ["lar", -1, -1],
        ["ler", -1, -1]
    ];

    /** @const */ var a_17 = [
        ["niz", -1, -1],
        ["nuz", -1, -1],
        ["n\u00FCz", -1, -1],
        ["n\u0131z", -1, -1]
    ];

    /** @const */ var a_18 = [
        ["dir", -1, -1],
        ["tir", -1, -1],
        ["dur", -1, -1],
        ["tur", -1, -1],
        ["d\u00FCr", -1, -1],
        ["t\u00FCr", -1, -1],
        ["d\u0131r", -1, -1],
        ["t\u0131r", -1, -1]
    ];

    /** @const */ var a_19 = [
        ["cas\u0131na", -1, -1],
        ["cesine", -1, -1]
    ];

    /** @const */ var a_20 = [
        ["di", -1, -1],
        ["ti", -1, -1],
        ["dik", -1, -1],
        ["tik", -1, -1],
        ["duk", -1, -1],
        ["tuk", -1, -1],
        ["d\u00FCk", -1, -1],
        ["t\u00FCk", -1, -1],
        ["d\u0131k", -1, -1],
        ["t\u0131k", -1, -1],
        ["dim", -1, -1],
        ["tim", -1, -1],
        ["dum", -1, -1],
        ["tum", -1, -1],
        ["d\u00FCm", -1, -1],
        ["t\u00FCm", -1, -1],
        ["d\u0131m", -1, -1],
        ["t\u0131m", -1, -1],
        ["din", -1, -1],
        ["tin", -1, -1],
        ["dun", -1, -1],
        ["tun", -1, -1],
        ["d\u00FCn", -1, -1],
        ["t\u00FCn", -1, -1],
        ["d\u0131n", -1, -1],
        ["t\u0131n", -1, -1],
        ["du", -1, -1],
        ["tu", -1, -1],
        ["d\u00FC", -1, -1],
        ["t\u00FC", -1, -1],
        ["d\u0131", -1, -1],
        ["t\u0131", -1, -1]
    ];

    /** @const */ var a_21 = [
        ["sa", -1, -1],
        ["se", -1, -1],
        ["sak", -1, -1],
        ["sek", -1, -1],
        ["sam", -1, -1],
        ["sem", -1, -1],
        ["san", -1, -1],
        ["sen", -1, -1]
    ];

    /** @const */ var a_22 = [
        ["mi\u015F", -1, -1],
        ["mu\u015F", -1, -1],
        ["m\u00FC\u015F", -1, -1],
        ["m\u0131\u015F", -1, -1]
    ];

    /** @const */ var a_23 = [
        ["b", -1, 1],
        ["c", -1, 2],
        ["d", -1, 3],
        ["\u011F", -1, 4]
    ];

    /** @const */ var /** Array<int> */ g_vowel = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 8, 0, 0, 0, 0, 0, 0, 1];

    /** @const */ var /** Array<int> */ g_U = [1, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1];

    /** @const */ var /** Array<int> */ g_vowel1 = [1, 64, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

    /** @const */ var /** Array<int> */ g_vowel2 = [17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130];

    /** @const */ var /** Array<int> */ g_vowel3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

    /** @const */ var /** Array<int> */ g_vowel4 = [17];

    /** @const */ var /** Array<int> */ g_vowel5 = [65];

    /** @const */ var /** Array<int> */ g_vowel6 = [65];

    var /** boolean */ B_continue_stemming_noun_suffixes = false;
    var /** number */ I_strlen = 0;


    /** @return {boolean} */
    function r_check_vowel_harmony() {
        // (, line 111
        // test, line 112
        var /** number */ v_1 = base.limit - base.cursor;
        // (, line 113
        // (, line 114
        // goto, line 114
        golab0: while(true)
        {
            var /** number */ v_2 = base.limit - base.cursor;
            lab1: {
                if (!(base.in_grouping_b(g_vowel, 97, 305)))
                {
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                break golab0;
            }
            base.cursor = base.limit - v_2;
            if (base.cursor <= base.limit_backward)
            {
                return false;
            }
            base.cursor--;
        }
        // (, line 115
        // or, line 116
        lab2: {
            var /** number */ v_3 = base.limit - base.cursor;
            lab3: {
                // (, line 116
                // literal, line 116
                if (!(base.eq_s_b("a")))
                {
                    break lab3;
                }
                // goto, line 116
                golab4: while(true)
                {
                    var /** number */ v_4 = base.limit - base.cursor;
                    lab5: {
                        if (!(base.in_grouping_b(g_vowel1, 97, 305)))
                        {
                            break lab5;
                        }
                        base.cursor = base.limit - v_4;
                        break golab4;
                    }
                    base.cursor = base.limit - v_4;
                    if (base.cursor <= base.limit_backward)
                    {
                        break lab3;
                    }
                    base.cursor--;
                }
                break lab2;
            }
            base.cursor = base.limit - v_3;
            lab6: {
                // (, line 117
                // literal, line 117
                if (!(base.eq_s_b("e")))
                {
                    break lab6;
                }
                // goto, line 117
                golab7: while(true)
                {
                    var /** number */ v_5 = base.limit - base.cursor;
                    lab8: {
                        if (!(base.in_grouping_b(g_vowel2, 101, 252)))
                        {
                            break lab8;
                        }
                        base.cursor = base.limit - v_5;
                        break golab7;
                    }
                    base.cursor = base.limit - v_5;
                    if (base.cursor <= base.limit_backward)
                    {
                        break lab6;
                    }
                    base.cursor--;
                }
                break lab2;
            }
            base.cursor = base.limit - v_3;
            lab9: {
                // (, line 118
                // literal, line 118
                if (!(base.eq_s_b("\u0131")))
                {
                    break lab9;
                }
                // goto, line 118
                golab10: while(true)
                {
                    var /** number */ v_6 = base.limit - base.cursor;
                    lab11: {
                        if (!(base.in_grouping_b(g_vowel3, 97, 305)))
                        {
                            break lab11;
                        }
                        base.cursor = base.limit - v_6;
                        break golab10;
                    }
                    base.cursor = base.limit - v_6;
                    if (base.cursor <= base.limit_backward)
                    {
                        break lab9;
                    }
                    base.cursor--;
                }
                break lab2;
            }
            base.cursor = base.limit - v_3;
            lab12: {
                // (, line 119
                // literal, line 119
                if (!(base.eq_s_b("i")))
                {
                    break lab12;
                }
                // goto, line 119
                golab13: while(true)
                {
                    var /** number */ v_7 = base.limit - base.cursor;
                    lab14: {
                        if (!(base.in_grouping_b(g_vowel4, 101, 105)))
                        {
                            break lab14;
                        }
                        base.cursor = base.limit - v_7;
                        break golab13;
                    }
                    base.cursor = base.limit - v_7;
                    if (base.cursor <= base.limit_backward)
                    {
                        break lab12;
                    }
                    base.cursor--;
                }
                break lab2;
            }
            base.cursor = base.limit - v_3;
            lab15: {
                // (, line 120
                // literal, line 120
                if (!(base.eq_s_b("o")))
                {
                    break lab15;
                }
                // goto, line 120
                golab16: while(true)
                {
                    var /** number */ v_8 = base.limit - base.cursor;
                    lab17: {
                        if (!(base.in_grouping_b(g_vowel5, 111, 117)))
                        {
                            break lab17;
                        }
                        base.cursor = base.limit - v_8;
                        break golab16;
                    }
                    base.cursor = base.limit - v_8;
                    if (base.cursor <= base.limit_backward)
                    {
                        break lab15;
                    }
                    base.cursor--;
                }
                break lab2;
            }
            base.cursor = base.limit - v_3;
            lab18: {
                // (, line 121
                // literal, line 121
                if (!(base.eq_s_b("\u00F6")))
                {
                    break lab18;
                }
                // goto, line 121
                golab19: while(true)
                {
                    var /** number */ v_9 = base.limit - base.cursor;
                    lab20: {
                        if (!(base.in_grouping_b(g_vowel6, 246, 252)))
                        {
                            break lab20;
                        }
                        base.cursor = base.limit - v_9;
                        break golab19;
                    }
                    base.cursor = base.limit - v_9;
                    if (base.cursor <= base.limit_backward)
                    {
                        break lab18;
                    }
                    base.cursor--;
                }
                break lab2;
            }
            base.cursor = base.limit - v_3;
            lab21: {
                // (, line 122
                // literal, line 122
                if (!(base.eq_s_b("u")))
                {
                    break lab21;
                }
                // goto, line 122
                golab22: while(true)
                {
                    var /** number */ v_10 = base.limit - base.cursor;
                    lab23: {
                        if (!(base.in_grouping_b(g_vowel5, 111, 117)))
                        {
                            break lab23;
                        }
                        base.cursor = base.limit - v_10;
                        break golab22;
                    }
                    base.cursor = base.limit - v_10;
                    if (base.cursor <= base.limit_backward)
                    {
                        break lab21;
                    }
                    base.cursor--;
                }
                break lab2;
            }
            base.cursor = base.limit - v_3;
            // (, line 123
            // literal, line 123
            if (!(base.eq_s_b("\u00FC")))
            {
                return false;
            }
            // goto, line 123
            golab24: while(true)
            {
                var /** number */ v_11 = base.limit - base.cursor;
                lab25: {
                    if (!(base.in_grouping_b(g_vowel6, 246, 252)))
                    {
                        break lab25;
                    }
                    base.cursor = base.limit - v_11;
                    break golab24;
                }
                base.cursor = base.limit - v_11;
                if (base.cursor <= base.limit_backward)
                {
                    return false;
                }
                base.cursor--;
            }
        }
        base.cursor = base.limit - v_1;
        return true;
    };

    /** @return {boolean} */
    function r_mark_suffix_with_optional_n_consonant() {
        // (, line 132
        // or, line 134
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // (, line 133
                // literal, line 133
                if (!(base.eq_s_b("n")))
                {
                    break lab1;
                }
                // (, line 133
                // test, line 133
                var /** number */ v_2 = base.limit - base.cursor;
                if (!(base.in_grouping_b(g_vowel, 97, 305)))
                {
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // (, line 135
            // (, line 135
            // not, line 135
            {
                var /** number */ v_3 = base.limit - base.cursor;
                lab2: {
                    // (, line 135
                    // test, line 135
                    var /** number */ v_4 = base.limit - base.cursor;
                    // literal, line 135
                    if (!(base.eq_s_b("n")))
                    {
                        break lab2;
                    }
                    base.cursor = base.limit - v_4;
                    return false;
                }
                base.cursor = base.limit - v_3;
            }
            // test, line 135
            var /** number */ v_5 = base.limit - base.cursor;
            // (, line 135
            // next, line 135
            if (base.cursor <= base.limit_backward)
            {
                return false;
            }
            base.cursor--;
            if (!(base.in_grouping_b(g_vowel, 97, 305)))
            {
                return false;
            }
            base.cursor = base.limit - v_5;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_suffix_with_optional_s_consonant() {
        // (, line 143
        // or, line 145
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // (, line 144
                // literal, line 144
                if (!(base.eq_s_b("s")))
                {
                    break lab1;
                }
                // (, line 144
                // test, line 144
                var /** number */ v_2 = base.limit - base.cursor;
                if (!(base.in_grouping_b(g_vowel, 97, 305)))
                {
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // (, line 146
            // (, line 146
            // not, line 146
            {
                var /** number */ v_3 = base.limit - base.cursor;
                lab2: {
                    // (, line 146
                    // test, line 146
                    var /** number */ v_4 = base.limit - base.cursor;
                    // literal, line 146
                    if (!(base.eq_s_b("s")))
                    {
                        break lab2;
                    }
                    base.cursor = base.limit - v_4;
                    return false;
                }
                base.cursor = base.limit - v_3;
            }
            // test, line 146
            var /** number */ v_5 = base.limit - base.cursor;
            // (, line 146
            // next, line 146
            if (base.cursor <= base.limit_backward)
            {
                return false;
            }
            base.cursor--;
            if (!(base.in_grouping_b(g_vowel, 97, 305)))
            {
                return false;
            }
            base.cursor = base.limit - v_5;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_suffix_with_optional_y_consonant() {
        // (, line 153
        // or, line 155
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // (, line 154
                // literal, line 154
                if (!(base.eq_s_b("y")))
                {
                    break lab1;
                }
                // (, line 154
                // test, line 154
                var /** number */ v_2 = base.limit - base.cursor;
                if (!(base.in_grouping_b(g_vowel, 97, 305)))
                {
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // (, line 156
            // (, line 156
            // not, line 156
            {
                var /** number */ v_3 = base.limit - base.cursor;
                lab2: {
                    // (, line 156
                    // test, line 156
                    var /** number */ v_4 = base.limit - base.cursor;
                    // literal, line 156
                    if (!(base.eq_s_b("y")))
                    {
                        break lab2;
                    }
                    base.cursor = base.limit - v_4;
                    return false;
                }
                base.cursor = base.limit - v_3;
            }
            // test, line 156
            var /** number */ v_5 = base.limit - base.cursor;
            // (, line 156
            // next, line 156
            if (base.cursor <= base.limit_backward)
            {
                return false;
            }
            base.cursor--;
            if (!(base.in_grouping_b(g_vowel, 97, 305)))
            {
                return false;
            }
            base.cursor = base.limit - v_5;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_suffix_with_optional_U_vowel() {
        // (, line 159
        // or, line 161
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // (, line 160
                if (!(base.in_grouping_b(g_U, 105, 305)))
                {
                    break lab1;
                }
                // (, line 160
                // test, line 160
                var /** number */ v_2 = base.limit - base.cursor;
                if (!(base.out_grouping_b(g_vowel, 97, 305)))
                {
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // (, line 162
            // (, line 162
            // not, line 162
            {
                var /** number */ v_3 = base.limit - base.cursor;
                lab2: {
                    // (, line 162
                    // test, line 162
                    var /** number */ v_4 = base.limit - base.cursor;
                    if (!(base.in_grouping_b(g_U, 105, 305)))
                    {
                        break lab2;
                    }
                    base.cursor = base.limit - v_4;
                    return false;
                }
                base.cursor = base.limit - v_3;
            }
            // test, line 162
            var /** number */ v_5 = base.limit - base.cursor;
            // (, line 162
            // next, line 162
            if (base.cursor <= base.limit_backward)
            {
                return false;
            }
            base.cursor--;
            if (!(base.out_grouping_b(g_vowel, 97, 305)))
            {
                return false;
            }
            base.cursor = base.limit - v_5;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_possessives() {
        // (, line 166
        // among, line 167
        if (base.find_among_b(a_0) == 0)
        {
            return false;
        }
        // (, line 169
        // call mark_suffix_with_optional_U_vowel, line 169
        if (!r_mark_suffix_with_optional_U_vowel())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_sU() {
        // (, line 172
        // call check_vowel_harmony, line 173
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (!(base.in_grouping_b(g_U, 105, 305)))
        {
            return false;
        }
        // (, line 175
        // call mark_suffix_with_optional_s_consonant, line 175
        if (!r_mark_suffix_with_optional_s_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_lArI() {
        // (, line 178
        // among, line 179
        if (base.find_among_b(a_1) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_yU() {
        // (, line 182
        // call check_vowel_harmony, line 183
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        if (!(base.in_grouping_b(g_U, 105, 305)))
        {
            return false;
        }
        // (, line 185
        // call mark_suffix_with_optional_y_consonant, line 185
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_nU() {
        // (, line 188
        // call check_vowel_harmony, line 189
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 190
        if (base.find_among_b(a_2) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_nUn() {
        // (, line 193
        // call check_vowel_harmony, line 194
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 195
        if (base.find_among_b(a_3) == 0)
        {
            return false;
        }
        // (, line 196
        // call mark_suffix_with_optional_n_consonant, line 196
        if (!r_mark_suffix_with_optional_n_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_yA() {
        // (, line 199
        // call check_vowel_harmony, line 200
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 201
        if (base.find_among_b(a_4) == 0)
        {
            return false;
        }
        // (, line 202
        // call mark_suffix_with_optional_y_consonant, line 202
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_nA() {
        // (, line 205
        // call check_vowel_harmony, line 206
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 207
        if (base.find_among_b(a_5) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_DA() {
        // (, line 210
        // call check_vowel_harmony, line 211
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 212
        if (base.find_among_b(a_6) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ndA() {
        // (, line 215
        // call check_vowel_harmony, line 216
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 217
        if (base.find_among_b(a_7) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_DAn() {
        // (, line 220
        // call check_vowel_harmony, line 221
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 222
        if (base.find_among_b(a_8) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ndAn() {
        // (, line 225
        // call check_vowel_harmony, line 226
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 227
        if (base.find_among_b(a_9) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ylA() {
        // (, line 230
        // call check_vowel_harmony, line 231
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 232
        if (base.find_among_b(a_10) == 0)
        {
            return false;
        }
        // (, line 233
        // call mark_suffix_with_optional_y_consonant, line 233
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ki() {
        // (, line 236
        // literal, line 237
        if (!(base.eq_s_b("ki")))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ncA() {
        // (, line 240
        // call check_vowel_harmony, line 241
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 242
        if (base.find_among_b(a_11) == 0)
        {
            return false;
        }
        // (, line 243
        // call mark_suffix_with_optional_n_consonant, line 243
        if (!r_mark_suffix_with_optional_n_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_yUm() {
        // (, line 246
        // call check_vowel_harmony, line 247
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 248
        if (base.find_among_b(a_12) == 0)
        {
            return false;
        }
        // (, line 249
        // call mark_suffix_with_optional_y_consonant, line 249
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_sUn() {
        // (, line 252
        // call check_vowel_harmony, line 253
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 254
        if (base.find_among_b(a_13) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_yUz() {
        // (, line 257
        // call check_vowel_harmony, line 258
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 259
        if (base.find_among_b(a_14) == 0)
        {
            return false;
        }
        // (, line 260
        // call mark_suffix_with_optional_y_consonant, line 260
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_sUnUz() {
        // (, line 263
        // among, line 264
        if (base.find_among_b(a_15) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_lAr() {
        // (, line 267
        // call check_vowel_harmony, line 268
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 269
        if (base.find_among_b(a_16) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_nUz() {
        // (, line 272
        // call check_vowel_harmony, line 273
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 274
        if (base.find_among_b(a_17) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_DUr() {
        // (, line 277
        // call check_vowel_harmony, line 278
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 279
        if (base.find_among_b(a_18) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_cAsInA() {
        // (, line 282
        // among, line 283
        if (base.find_among_b(a_19) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_yDU() {
        // (, line 286
        // call check_vowel_harmony, line 287
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 288
        if (base.find_among_b(a_20) == 0)
        {
            return false;
        }
        // (, line 292
        // call mark_suffix_with_optional_y_consonant, line 292
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ysA() {
        // (, line 296
        // among, line 297
        if (base.find_among_b(a_21) == 0)
        {
            return false;
        }
        // (, line 298
        // call mark_suffix_with_optional_y_consonant, line 298
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_ymUs_() {
        // (, line 301
        // call check_vowel_harmony, line 302
        if (!r_check_vowel_harmony())
        {
            return false;
        }
        // among, line 303
        if (base.find_among_b(a_22) == 0)
        {
            return false;
        }
        // (, line 304
        // call mark_suffix_with_optional_y_consonant, line 304
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_yken() {
        // (, line 307
        // literal, line 308
        if (!(base.eq_s_b("ken")))
        {
            return false;
        }
        // (, line 308
        // call mark_suffix_with_optional_y_consonant, line 308
        if (!r_mark_suffix_with_optional_y_consonant())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_stem_nominal_verb_suffixes() {
        // (, line 311
        // [, line 312
        base.ket = base.cursor;
        // set continue_stemming_noun_suffixes, line 313
        B_continue_stemming_noun_suffixes = true;
        // or, line 315
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // (, line 314
                // or, line 314
                lab2: {
                    var /** number */ v_2 = base.limit - base.cursor;
                    lab3: {
                        // call mark_ymUs_, line 314
                        if (!r_mark_ymUs_())
                        {
                            break lab3;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_2;
                    lab4: {
                        // call mark_yDU, line 314
                        if (!r_mark_yDU())
                        {
                            break lab4;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_2;
                    lab5: {
                        // call mark_ysA, line 314
                        if (!r_mark_ysA())
                        {
                            break lab5;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_2;
                    // call mark_yken, line 314
                    if (!r_mark_yken())
                    {
                        break lab1;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab6: {
                // (, line 316
                // call mark_cAsInA, line 316
                if (!r_mark_cAsInA())
                {
                    break lab6;
                }
                // (, line 316
                // or, line 316
                lab7: {
                    var /** number */ v_3 = base.limit - base.cursor;
                    lab8: {
                        // call mark_sUnUz, line 316
                        if (!r_mark_sUnUz())
                        {
                            break lab8;
                        }
                        break lab7;
                    }
                    base.cursor = base.limit - v_3;
                    lab9: {
                        // call mark_lAr, line 316
                        if (!r_mark_lAr())
                        {
                            break lab9;
                        }
                        break lab7;
                    }
                    base.cursor = base.limit - v_3;
                    lab10: {
                        // call mark_yUm, line 316
                        if (!r_mark_yUm())
                        {
                            break lab10;
                        }
                        break lab7;
                    }
                    base.cursor = base.limit - v_3;
                    lab11: {
                        // call mark_sUn, line 316
                        if (!r_mark_sUn())
                        {
                            break lab11;
                        }
                        break lab7;
                    }
                    base.cursor = base.limit - v_3;
                    lab12: {
                        // call mark_yUz, line 316
                        if (!r_mark_yUz())
                        {
                            break lab12;
                        }
                        break lab7;
                    }
                    base.cursor = base.limit - v_3;
                }
                // call mark_ymUs_, line 316
                if (!r_mark_ymUs_())
                {
                    break lab6;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab13: {
                // (, line 318
                // call mark_lAr, line 319
                if (!r_mark_lAr())
                {
                    break lab13;
                }
                // ], line 319
                base.bra = base.cursor;
                // delete, line 319
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 319
                var /** number */ v_4 = base.limit - base.cursor;
                lab14: {
                    // (, line 319
                    // [, line 319
                    base.ket = base.cursor;
                    // (, line 319
                    // or, line 319
                    lab15: {
                        var /** number */ v_5 = base.limit - base.cursor;
                        lab16: {
                            // call mark_DUr, line 319
                            if (!r_mark_DUr())
                            {
                                break lab16;
                            }
                            break lab15;
                        }
                        base.cursor = base.limit - v_5;
                        lab17: {
                            // call mark_yDU, line 319
                            if (!r_mark_yDU())
                            {
                                break lab17;
                            }
                            break lab15;
                        }
                        base.cursor = base.limit - v_5;
                        lab18: {
                            // call mark_ysA, line 319
                            if (!r_mark_ysA())
                            {
                                break lab18;
                            }
                            break lab15;
                        }
                        base.cursor = base.limit - v_5;
                        // call mark_ymUs_, line 319
                        if (!r_mark_ymUs_())
                        {
                            base.cursor = base.limit - v_4;
                            break lab14;
                        }
                    }
                }
                // unset continue_stemming_noun_suffixes, line 320
                B_continue_stemming_noun_suffixes = false;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab19: {
                // (, line 323
                // call mark_nUz, line 323
                if (!r_mark_nUz())
                {
                    break lab19;
                }
                // (, line 323
                // or, line 323
                lab20: {
                    var /** number */ v_6 = base.limit - base.cursor;
                    lab21: {
                        // call mark_yDU, line 323
                        if (!r_mark_yDU())
                        {
                            break lab21;
                        }
                        break lab20;
                    }
                    base.cursor = base.limit - v_6;
                    // call mark_ysA, line 323
                    if (!r_mark_ysA())
                    {
                        break lab19;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab22: {
                // (, line 325
                // (, line 325
                // or, line 325
                lab23: {
                    var /** number */ v_7 = base.limit - base.cursor;
                    lab24: {
                        // call mark_sUnUz, line 325
                        if (!r_mark_sUnUz())
                        {
                            break lab24;
                        }
                        break lab23;
                    }
                    base.cursor = base.limit - v_7;
                    lab25: {
                        // call mark_yUz, line 325
                        if (!r_mark_yUz())
                        {
                            break lab25;
                        }
                        break lab23;
                    }
                    base.cursor = base.limit - v_7;
                    lab26: {
                        // call mark_sUn, line 325
                        if (!r_mark_sUn())
                        {
                            break lab26;
                        }
                        break lab23;
                    }
                    base.cursor = base.limit - v_7;
                    // call mark_yUm, line 325
                    if (!r_mark_yUm())
                    {
                        break lab22;
                    }
                }
                // ], line 325
                base.bra = base.cursor;
                // delete, line 325
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 325
                var /** number */ v_8 = base.limit - base.cursor;
                lab27: {
                    // (, line 325
                    // [, line 325
                    base.ket = base.cursor;
                    // call mark_ymUs_, line 325
                    if (!r_mark_ymUs_())
                    {
                        base.cursor = base.limit - v_8;
                        break lab27;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // (, line 327
            // call mark_DUr, line 327
            if (!r_mark_DUr())
            {
                return false;
            }
            // ], line 327
            base.bra = base.cursor;
            // delete, line 327
            if (!base.slice_del())
            {
                return false;
            }
            // try, line 327
            var /** number */ v_9 = base.limit - base.cursor;
            lab28: {
                // (, line 327
                // [, line 327
                base.ket = base.cursor;
                // (, line 327
                // or, line 327
                lab29: {
                    var /** number */ v_10 = base.limit - base.cursor;
                    lab30: {
                        // call mark_sUnUz, line 327
                        if (!r_mark_sUnUz())
                        {
                            break lab30;
                        }
                        break lab29;
                    }
                    base.cursor = base.limit - v_10;
                    lab31: {
                        // call mark_lAr, line 327
                        if (!r_mark_lAr())
                        {
                            break lab31;
                        }
                        break lab29;
                    }
                    base.cursor = base.limit - v_10;
                    lab32: {
                        // call mark_yUm, line 327
                        if (!r_mark_yUm())
                        {
                            break lab32;
                        }
                        break lab29;
                    }
                    base.cursor = base.limit - v_10;
                    lab33: {
                        // call mark_sUn, line 327
                        if (!r_mark_sUn())
                        {
                            break lab33;
                        }
                        break lab29;
                    }
                    base.cursor = base.limit - v_10;
                    lab34: {
                        // call mark_yUz, line 327
                        if (!r_mark_yUz())
                        {
                            break lab34;
                        }
                        break lab29;
                    }
                    base.cursor = base.limit - v_10;
                }
                // call mark_ymUs_, line 327
                if (!r_mark_ymUs_())
                {
                    base.cursor = base.limit - v_9;
                    break lab28;
                }
            }
        }
        // ], line 328
        base.bra = base.cursor;
        // delete, line 328
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_stem_suffix_chain_before_ki() {
        // (, line 332
        // [, line 333
        base.ket = base.cursor;
        // call mark_ki, line 334
        if (!r_mark_ki())
        {
            return false;
        }
        // (, line 335
        // or, line 342
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // (, line 336
                // call mark_DA, line 336
                if (!r_mark_DA())
                {
                    break lab1;
                }
                // ], line 336
                base.bra = base.cursor;
                // delete, line 336
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 336
                var /** number */ v_2 = base.limit - base.cursor;
                lab2: {
                    // (, line 336
                    // [, line 336
                    base.ket = base.cursor;
                    // or, line 338
                    lab3: {
                        var /** number */ v_3 = base.limit - base.cursor;
                        lab4: {
                            // (, line 337
                            // call mark_lAr, line 337
                            if (!r_mark_lAr())
                            {
                                break lab4;
                            }
                            // ], line 337
                            base.bra = base.cursor;
                            // delete, line 337
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            // try, line 337
                            var /** number */ v_4 = base.limit - base.cursor;
                            lab5: {
                                // (, line 337
                                // call stem_suffix_chain_before_ki, line 337
                                if (!r_stem_suffix_chain_before_ki())
                                {
                                    base.cursor = base.limit - v_4;
                                    break lab5;
                                }
                            }
                            break lab3;
                        }
                        base.cursor = base.limit - v_3;
                        // (, line 339
                        // call mark_possessives, line 339
                        if (!r_mark_possessives())
                        {
                            base.cursor = base.limit - v_2;
                            break lab2;
                        }
                        // ], line 339
                        base.bra = base.cursor;
                        // delete, line 339
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        // try, line 339
                        var /** number */ v_5 = base.limit - base.cursor;
                        lab6: {
                            // (, line 339
                            // [, line 339
                            base.ket = base.cursor;
                            // call mark_lAr, line 339
                            if (!r_mark_lAr())
                            {
                                base.cursor = base.limit - v_5;
                                break lab6;
                            }
                            // ], line 339
                            base.bra = base.cursor;
                            // delete, line 339
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            // call stem_suffix_chain_before_ki, line 339
                            if (!r_stem_suffix_chain_before_ki())
                            {
                                base.cursor = base.limit - v_5;
                                break lab6;
                            }
                        }
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab7: {
                // (, line 343
                // call mark_nUn, line 343
                if (!r_mark_nUn())
                {
                    break lab7;
                }
                // ], line 343
                base.bra = base.cursor;
                // delete, line 343
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 343
                var /** number */ v_6 = base.limit - base.cursor;
                lab8: {
                    // (, line 343
                    // [, line 343
                    base.ket = base.cursor;
                    // or, line 345
                    lab9: {
                        var /** number */ v_7 = base.limit - base.cursor;
                        lab10: {
                            // (, line 344
                            // call mark_lArI, line 344
                            if (!r_mark_lArI())
                            {
                                break lab10;
                            }
                            // ], line 344
                            base.bra = base.cursor;
                            // delete, line 344
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break lab9;
                        }
                        base.cursor = base.limit - v_7;
                        lab11: {
                            // (, line 346
                            // [, line 346
                            base.ket = base.cursor;
                            // or, line 346
                            lab12: {
                                var /** number */ v_8 = base.limit - base.cursor;
                                lab13: {
                                    // call mark_possessives, line 346
                                    if (!r_mark_possessives())
                                    {
                                        break lab13;
                                    }
                                    break lab12;
                                }
                                base.cursor = base.limit - v_8;
                                // call mark_sU, line 346
                                if (!r_mark_sU())
                                {
                                    break lab11;
                                }
                            }
                            // ], line 346
                            base.bra = base.cursor;
                            // delete, line 346
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            // try, line 346
                            var /** number */ v_9 = base.limit - base.cursor;
                            lab14: {
                                // (, line 346
                                // [, line 346
                                base.ket = base.cursor;
                                // call mark_lAr, line 346
                                if (!r_mark_lAr())
                                {
                                    base.cursor = base.limit - v_9;
                                    break lab14;
                                }
                                // ], line 346
                                base.bra = base.cursor;
                                // delete, line 346
                                if (!base.slice_del())
                                {
                                    return false;
                                }
                                // call stem_suffix_chain_before_ki, line 346
                                if (!r_stem_suffix_chain_before_ki())
                                {
                                    base.cursor = base.limit - v_9;
                                    break lab14;
                                }
                            }
                            break lab9;
                        }
                        base.cursor = base.limit - v_7;
                        // (, line 348
                        // call stem_suffix_chain_before_ki, line 348
                        if (!r_stem_suffix_chain_before_ki())
                        {
                            base.cursor = base.limit - v_6;
                            break lab8;
                        }
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // (, line 351
            // call mark_ndA, line 351
            if (!r_mark_ndA())
            {
                return false;
            }
            // (, line 351
            // or, line 353
            lab15: {
                var /** number */ v_10 = base.limit - base.cursor;
                lab16: {
                    // (, line 352
                    // call mark_lArI, line 352
                    if (!r_mark_lArI())
                    {
                        break lab16;
                    }
                    // ], line 352
                    base.bra = base.cursor;
                    // delete, line 352
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break lab15;
                }
                base.cursor = base.limit - v_10;
                lab17: {
                    // (, line 354
                    // (, line 354
                    // call mark_sU, line 354
                    if (!r_mark_sU())
                    {
                        break lab17;
                    }
                    // ], line 354
                    base.bra = base.cursor;
                    // delete, line 354
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // try, line 354
                    var /** number */ v_11 = base.limit - base.cursor;
                    lab18: {
                        // (, line 354
                        // [, line 354
                        base.ket = base.cursor;
                        // call mark_lAr, line 354
                        if (!r_mark_lAr())
                        {
                            base.cursor = base.limit - v_11;
                            break lab18;
                        }
                        // ], line 354
                        base.bra = base.cursor;
                        // delete, line 354
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        // call stem_suffix_chain_before_ki, line 354
                        if (!r_stem_suffix_chain_before_ki())
                        {
                            base.cursor = base.limit - v_11;
                            break lab18;
                        }
                    }
                    break lab15;
                }
                base.cursor = base.limit - v_10;
                // (, line 356
                // call stem_suffix_chain_before_ki, line 356
                if (!r_stem_suffix_chain_before_ki())
                {
                    return false;
                }
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_stem_noun_suffixes() {
        // (, line 361
        // or, line 363
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // (, line 362
                // [, line 362
                base.ket = base.cursor;
                // call mark_lAr, line 362
                if (!r_mark_lAr())
                {
                    break lab1;
                }
                // ], line 362
                base.bra = base.cursor;
                // delete, line 362
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 362
                var /** number */ v_2 = base.limit - base.cursor;
                lab2: {
                    // (, line 362
                    // call stem_suffix_chain_before_ki, line 362
                    if (!r_stem_suffix_chain_before_ki())
                    {
                        base.cursor = base.limit - v_2;
                        break lab2;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab3: {
                // (, line 364
                // [, line 364
                base.ket = base.cursor;
                // call mark_ncA, line 364
                if (!r_mark_ncA())
                {
                    break lab3;
                }
                // ], line 364
                base.bra = base.cursor;
                // delete, line 364
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 365
                var /** number */ v_3 = base.limit - base.cursor;
                lab4: {
                    // (, line 365
                    // or, line 367
                    lab5: {
                        var /** number */ v_4 = base.limit - base.cursor;
                        lab6: {
                            // (, line 366
                            // [, line 366
                            base.ket = base.cursor;
                            // call mark_lArI, line 366
                            if (!r_mark_lArI())
                            {
                                break lab6;
                            }
                            // ], line 366
                            base.bra = base.cursor;
                            // delete, line 366
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break lab5;
                        }
                        base.cursor = base.limit - v_4;
                        lab7: {
                            // (, line 368
                            // [, line 368
                            base.ket = base.cursor;
                            // or, line 368
                            lab8: {
                                var /** number */ v_5 = base.limit - base.cursor;
                                lab9: {
                                    // call mark_possessives, line 368
                                    if (!r_mark_possessives())
                                    {
                                        break lab9;
                                    }
                                    break lab8;
                                }
                                base.cursor = base.limit - v_5;
                                // call mark_sU, line 368
                                if (!r_mark_sU())
                                {
                                    break lab7;
                                }
                            }
                            // ], line 368
                            base.bra = base.cursor;
                            // delete, line 368
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            // try, line 368
                            var /** number */ v_6 = base.limit - base.cursor;
                            lab10: {
                                // (, line 368
                                // [, line 368
                                base.ket = base.cursor;
                                // call mark_lAr, line 368
                                if (!r_mark_lAr())
                                {
                                    base.cursor = base.limit - v_6;
                                    break lab10;
                                }
                                // ], line 368
                                base.bra = base.cursor;
                                // delete, line 368
                                if (!base.slice_del())
                                {
                                    return false;
                                }
                                // call stem_suffix_chain_before_ki, line 368
                                if (!r_stem_suffix_chain_before_ki())
                                {
                                    base.cursor = base.limit - v_6;
                                    break lab10;
                                }
                            }
                            break lab5;
                        }
                        base.cursor = base.limit - v_4;
                        // (, line 370
                        // [, line 370
                        base.ket = base.cursor;
                        // call mark_lAr, line 370
                        if (!r_mark_lAr())
                        {
                            base.cursor = base.limit - v_3;
                            break lab4;
                        }
                        // ], line 370
                        base.bra = base.cursor;
                        // delete, line 370
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        // call stem_suffix_chain_before_ki, line 370
                        if (!r_stem_suffix_chain_before_ki())
                        {
                            base.cursor = base.limit - v_3;
                            break lab4;
                        }
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab11: {
                // (, line 374
                // [, line 374
                base.ket = base.cursor;
                // (, line 374
                // or, line 374
                lab12: {
                    var /** number */ v_7 = base.limit - base.cursor;
                    lab13: {
                        // call mark_ndA, line 374
                        if (!r_mark_ndA())
                        {
                            break lab13;
                        }
                        break lab12;
                    }
                    base.cursor = base.limit - v_7;
                    // call mark_nA, line 374
                    if (!r_mark_nA())
                    {
                        break lab11;
                    }
                }
                // (, line 375
                // or, line 377
                lab14: {
                    var /** number */ v_8 = base.limit - base.cursor;
                    lab15: {
                        // (, line 376
                        // call mark_lArI, line 376
                        if (!r_mark_lArI())
                        {
                            break lab15;
                        }
                        // ], line 376
                        base.bra = base.cursor;
                        // delete, line 376
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        break lab14;
                    }
                    base.cursor = base.limit - v_8;
                    lab16: {
                        // (, line 378
                        // call mark_sU, line 378
                        if (!r_mark_sU())
                        {
                            break lab16;
                        }
                        // ], line 378
                        base.bra = base.cursor;
                        // delete, line 378
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        // try, line 378
                        var /** number */ v_9 = base.limit - base.cursor;
                        lab17: {
                            // (, line 378
                            // [, line 378
                            base.ket = base.cursor;
                            // call mark_lAr, line 378
                            if (!r_mark_lAr())
                            {
                                base.cursor = base.limit - v_9;
                                break lab17;
                            }
                            // ], line 378
                            base.bra = base.cursor;
                            // delete, line 378
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            // call stem_suffix_chain_before_ki, line 378
                            if (!r_stem_suffix_chain_before_ki())
                            {
                                base.cursor = base.limit - v_9;
                                break lab17;
                            }
                        }
                        break lab14;
                    }
                    base.cursor = base.limit - v_8;
                    // (, line 380
                    // call stem_suffix_chain_before_ki, line 380
                    if (!r_stem_suffix_chain_before_ki())
                    {
                        break lab11;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab18: {
                // (, line 384
                // [, line 384
                base.ket = base.cursor;
                // (, line 384
                // or, line 384
                lab19: {
                    var /** number */ v_10 = base.limit - base.cursor;
                    lab20: {
                        // call mark_ndAn, line 384
                        if (!r_mark_ndAn())
                        {
                            break lab20;
                        }
                        break lab19;
                    }
                    base.cursor = base.limit - v_10;
                    // call mark_nU, line 384
                    if (!r_mark_nU())
                    {
                        break lab18;
                    }
                }
                // (, line 384
                // or, line 384
                lab21: {
                    var /** number */ v_11 = base.limit - base.cursor;
                    lab22: {
                        // (, line 384
                        // call mark_sU, line 384
                        if (!r_mark_sU())
                        {
                            break lab22;
                        }
                        // ], line 384
                        base.bra = base.cursor;
                        // delete, line 384
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        // try, line 384
                        var /** number */ v_12 = base.limit - base.cursor;
                        lab23: {
                            // (, line 384
                            // [, line 384
                            base.ket = base.cursor;
                            // call mark_lAr, line 384
                            if (!r_mark_lAr())
                            {
                                base.cursor = base.limit - v_12;
                                break lab23;
                            }
                            // ], line 384
                            base.bra = base.cursor;
                            // delete, line 384
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            // call stem_suffix_chain_before_ki, line 384
                            if (!r_stem_suffix_chain_before_ki())
                            {
                                base.cursor = base.limit - v_12;
                                break lab23;
                            }
                        }
                        break lab21;
                    }
                    base.cursor = base.limit - v_11;
                    // (, line 384
                    // call mark_lArI, line 384
                    if (!r_mark_lArI())
                    {
                        break lab18;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab24: {
                // (, line 386
                // [, line 386
                base.ket = base.cursor;
                // call mark_DAn, line 386
                if (!r_mark_DAn())
                {
                    break lab24;
                }
                // ], line 386
                base.bra = base.cursor;
                // delete, line 386
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 386
                var /** number */ v_13 = base.limit - base.cursor;
                lab25: {
                    // (, line 386
                    // [, line 386
                    base.ket = base.cursor;
                    // (, line 387
                    // or, line 389
                    lab26: {
                        var /** number */ v_14 = base.limit - base.cursor;
                        lab27: {
                            // (, line 388
                            // call mark_possessives, line 388
                            if (!r_mark_possessives())
                            {
                                break lab27;
                            }
                            // ], line 388
                            base.bra = base.cursor;
                            // delete, line 388
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            // try, line 388
                            var /** number */ v_15 = base.limit - base.cursor;
                            lab28: {
                                // (, line 388
                                // [, line 388
                                base.ket = base.cursor;
                                // call mark_lAr, line 388
                                if (!r_mark_lAr())
                                {
                                    base.cursor = base.limit - v_15;
                                    break lab28;
                                }
                                // ], line 388
                                base.bra = base.cursor;
                                // delete, line 388
                                if (!base.slice_del())
                                {
                                    return false;
                                }
                                // call stem_suffix_chain_before_ki, line 388
                                if (!r_stem_suffix_chain_before_ki())
                                {
                                    base.cursor = base.limit - v_15;
                                    break lab28;
                                }
                            }
                            break lab26;
                        }
                        base.cursor = base.limit - v_14;
                        lab29: {
                            // (, line 390
                            // call mark_lAr, line 390
                            if (!r_mark_lAr())
                            {
                                break lab29;
                            }
                            // ], line 390
                            base.bra = base.cursor;
                            // delete, line 390
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            // try, line 390
                            var /** number */ v_16 = base.limit - base.cursor;
                            lab30: {
                                // (, line 390
                                // call stem_suffix_chain_before_ki, line 390
                                if (!r_stem_suffix_chain_before_ki())
                                {
                                    base.cursor = base.limit - v_16;
                                    break lab30;
                                }
                            }
                            break lab26;
                        }
                        base.cursor = base.limit - v_14;
                        // (, line 392
                        // call stem_suffix_chain_before_ki, line 392
                        if (!r_stem_suffix_chain_before_ki())
                        {
                            base.cursor = base.limit - v_13;
                            break lab25;
                        }
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab31: {
                // (, line 396
                // [, line 396
                base.ket = base.cursor;
                // or, line 396
                lab32: {
                    var /** number */ v_17 = base.limit - base.cursor;
                    lab33: {
                        // call mark_nUn, line 396
                        if (!r_mark_nUn())
                        {
                            break lab33;
                        }
                        break lab32;
                    }
                    base.cursor = base.limit - v_17;
                    // call mark_ylA, line 396
                    if (!r_mark_ylA())
                    {
                        break lab31;
                    }
                }
                // ], line 396
                base.bra = base.cursor;
                // delete, line 396
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 397
                var /** number */ v_18 = base.limit - base.cursor;
                lab34: {
                    // (, line 397
                    // or, line 399
                    lab35: {
                        var /** number */ v_19 = base.limit - base.cursor;
                        lab36: {
                            // (, line 398
                            // [, line 398
                            base.ket = base.cursor;
                            // call mark_lAr, line 398
                            if (!r_mark_lAr())
                            {
                                break lab36;
                            }
                            // ], line 398
                            base.bra = base.cursor;
                            // delete, line 398
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            // call stem_suffix_chain_before_ki, line 398
                            if (!r_stem_suffix_chain_before_ki())
                            {
                                break lab36;
                            }
                            break lab35;
                        }
                        base.cursor = base.limit - v_19;
                        lab37: {
                            // (, line 400
                            // [, line 400
                            base.ket = base.cursor;
                            // or, line 400
                            lab38: {
                                var /** number */ v_20 = base.limit - base.cursor;
                                lab39: {
                                    // call mark_possessives, line 400
                                    if (!r_mark_possessives())
                                    {
                                        break lab39;
                                    }
                                    break lab38;
                                }
                                base.cursor = base.limit - v_20;
                                // call mark_sU, line 400
                                if (!r_mark_sU())
                                {
                                    break lab37;
                                }
                            }
                            // ], line 400
                            base.bra = base.cursor;
                            // delete, line 400
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            // try, line 400
                            var /** number */ v_21 = base.limit - base.cursor;
                            lab40: {
                                // (, line 400
                                // [, line 400
                                base.ket = base.cursor;
                                // call mark_lAr, line 400
                                if (!r_mark_lAr())
                                {
                                    base.cursor = base.limit - v_21;
                                    break lab40;
                                }
                                // ], line 400
                                base.bra = base.cursor;
                                // delete, line 400
                                if (!base.slice_del())
                                {
                                    return false;
                                }
                                // call stem_suffix_chain_before_ki, line 400
                                if (!r_stem_suffix_chain_before_ki())
                                {
                                    base.cursor = base.limit - v_21;
                                    break lab40;
                                }
                            }
                            break lab35;
                        }
                        base.cursor = base.limit - v_19;
                        // call stem_suffix_chain_before_ki, line 402
                        if (!r_stem_suffix_chain_before_ki())
                        {
                            base.cursor = base.limit - v_18;
                            break lab34;
                        }
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab41: {
                // (, line 406
                // [, line 406
                base.ket = base.cursor;
                // call mark_lArI, line 406
                if (!r_mark_lArI())
                {
                    break lab41;
                }
                // ], line 406
                base.bra = base.cursor;
                // delete, line 406
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab42: {
                // (, line 408
                // call stem_suffix_chain_before_ki, line 408
                if (!r_stem_suffix_chain_before_ki())
                {
                    break lab42;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab43: {
                // (, line 410
                // [, line 410
                base.ket = base.cursor;
                // or, line 410
                lab44: {
                    var /** number */ v_22 = base.limit - base.cursor;
                    lab45: {
                        // call mark_DA, line 410
                        if (!r_mark_DA())
                        {
                            break lab45;
                        }
                        break lab44;
                    }
                    base.cursor = base.limit - v_22;
                    lab46: {
                        // call mark_yU, line 410
                        if (!r_mark_yU())
                        {
                            break lab46;
                        }
                        break lab44;
                    }
                    base.cursor = base.limit - v_22;
                    // call mark_yA, line 410
                    if (!r_mark_yA())
                    {
                        break lab43;
                    }
                }
                // ], line 410
                base.bra = base.cursor;
                // delete, line 410
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 410
                var /** number */ v_23 = base.limit - base.cursor;
                lab47: {
                    // (, line 410
                    // [, line 410
                    base.ket = base.cursor;
                    // (, line 410
                    // or, line 410
                    lab48: {
                        var /** number */ v_24 = base.limit - base.cursor;
                        lab49: {
                            // (, line 410
                            // call mark_possessives, line 410
                            if (!r_mark_possessives())
                            {
                                break lab49;
                            }
                            // ], line 410
                            base.bra = base.cursor;
                            // delete, line 410
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            // try, line 410
                            var /** number */ v_25 = base.limit - base.cursor;
                            lab50: {
                                // (, line 410
                                // [, line 410
                                base.ket = base.cursor;
                                // call mark_lAr, line 410
                                if (!r_mark_lAr())
                                {
                                    base.cursor = base.limit - v_25;
                                    break lab50;
                                }
                            }
                            break lab48;
                        }
                        base.cursor = base.limit - v_24;
                        // call mark_lAr, line 410
                        if (!r_mark_lAr())
                        {
                            base.cursor = base.limit - v_23;
                            break lab47;
                        }
                    }
                    // ], line 410
                    base.bra = base.cursor;
                    // delete, line 410
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // [, line 410
                    base.ket = base.cursor;
                    // call stem_suffix_chain_before_ki, line 410
                    if (!r_stem_suffix_chain_before_ki())
                    {
                        base.cursor = base.limit - v_23;
                        break lab47;
                    }
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // (, line 412
            // [, line 412
            base.ket = base.cursor;
            // or, line 412
            lab51: {
                var /** number */ v_26 = base.limit - base.cursor;
                lab52: {
                    // call mark_possessives, line 412
                    if (!r_mark_possessives())
                    {
                        break lab52;
                    }
                    break lab51;
                }
                base.cursor = base.limit - v_26;
                // call mark_sU, line 412
                if (!r_mark_sU())
                {
                    return false;
                }
            }
            // ], line 412
            base.bra = base.cursor;
            // delete, line 412
            if (!base.slice_del())
            {
                return false;
            }
            // try, line 412
            var /** number */ v_27 = base.limit - base.cursor;
            lab53: {
                // (, line 412
                // [, line 412
                base.ket = base.cursor;
                // call mark_lAr, line 412
                if (!r_mark_lAr())
                {
                    base.cursor = base.limit - v_27;
                    break lab53;
                }
                // ], line 412
                base.bra = base.cursor;
                // delete, line 412
                if (!base.slice_del())
                {
                    return false;
                }
                // call stem_suffix_chain_before_ki, line 412
                if (!r_stem_suffix_chain_before_ki())
                {
                    base.cursor = base.limit - v_27;
                    break lab53;
                }
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_post_process_last_consonants() {
        var /** number */ among_var;
        // (, line 415
        // [, line 416
        base.ket = base.cursor;
        // substring, line 416
        among_var = base.find_among_b(a_23);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 416
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 417
                // <-, line 417
                if (!base.slice_from("p"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 418
                // <-, line 418
                if (!base.slice_from("\u00E7"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 419
                // <-, line 419
                if (!base.slice_from("t"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 420
                // <-, line 420
                if (!base.slice_from("k"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_append_U_to_stems_ending_with_d_or_g() {
        // (, line 430
        // test, line 431
        var /** number */ v_1 = base.limit - base.cursor;
        // (, line 431
        // or, line 431
        lab0: {
            var /** number */ v_2 = base.limit - base.cursor;
            lab1: {
                // literal, line 431
                if (!(base.eq_s_b("d")))
                {
                    break lab1;
                }
                break lab0;
            }
            base.cursor = base.limit - v_2;
            // literal, line 431
            if (!(base.eq_s_b("g")))
            {
                return false;
            }
        }
        base.cursor = base.limit - v_1;
        // or, line 433
        lab2: {
            var /** number */ v_3 = base.limit - base.cursor;
            lab3: {
                // (, line 432
                // test, line 432
                var /** number */ v_4 = base.limit - base.cursor;
                // (, line 432
                // (, line 432
                // goto, line 432
                golab4: while(true)
                {
                    var /** number */ v_5 = base.limit - base.cursor;
                    lab5: {
                        if (!(base.in_grouping_b(g_vowel, 97, 305)))
                        {
                            break lab5;
                        }
                        base.cursor = base.limit - v_5;
                        break golab4;
                    }
                    base.cursor = base.limit - v_5;
                    if (base.cursor <= base.limit_backward)
                    {
                        break lab3;
                    }
                    base.cursor--;
                }
                // or, line 432
                lab6: {
                    var /** number */ v_6 = base.limit - base.cursor;
                    lab7: {
                        // literal, line 432
                        if (!(base.eq_s_b("a")))
                        {
                            break lab7;
                        }
                        break lab6;
                    }
                    base.cursor = base.limit - v_6;
                    // literal, line 432
                    if (!(base.eq_s_b("\u0131")))
                    {
                        break lab3;
                    }
                }
                base.cursor = base.limit - v_4;
                // <+, line 432
                {
                    var /** number */ c = base.cursor;
                    base.insert(base.cursor, base.cursor, "\u0131");
                    base.cursor = c;
                }
                break lab2;
            }
            base.cursor = base.limit - v_3;
            lab8: {
                // (, line 434
                // test, line 434
                var /** number */ v_7 = base.limit - base.cursor;
                // (, line 434
                // (, line 434
                // goto, line 434
                golab9: while(true)
                {
                    var /** number */ v_8 = base.limit - base.cursor;
                    lab10: {
                        if (!(base.in_grouping_b(g_vowel, 97, 305)))
                        {
                            break lab10;
                        }
                        base.cursor = base.limit - v_8;
                        break golab9;
                    }
                    base.cursor = base.limit - v_8;
                    if (base.cursor <= base.limit_backward)
                    {
                        break lab8;
                    }
                    base.cursor--;
                }
                // or, line 434
                lab11: {
                    var /** number */ v_9 = base.limit - base.cursor;
                    lab12: {
                        // literal, line 434
                        if (!(base.eq_s_b("e")))
                        {
                            break lab12;
                        }
                        break lab11;
                    }
                    base.cursor = base.limit - v_9;
                    // literal, line 434
                    if (!(base.eq_s_b("i")))
                    {
                        break lab8;
                    }
                }
                base.cursor = base.limit - v_7;
                // <+, line 434
                {
                    var /** number */ c = base.cursor;
                    base.insert(base.cursor, base.cursor, "i");
                    base.cursor = c;
                }
                break lab2;
            }
            base.cursor = base.limit - v_3;
            lab13: {
                // (, line 436
                // test, line 436
                var /** number */ v_10 = base.limit - base.cursor;
                // (, line 436
                // (, line 436
                // goto, line 436
                golab14: while(true)
                {
                    var /** number */ v_11 = base.limit - base.cursor;
                    lab15: {
                        if (!(base.in_grouping_b(g_vowel, 97, 305)))
                        {
                            break lab15;
                        }
                        base.cursor = base.limit - v_11;
                        break golab14;
                    }
                    base.cursor = base.limit - v_11;
                    if (base.cursor <= base.limit_backward)
                    {
                        break lab13;
                    }
                    base.cursor--;
                }
                // or, line 436
                lab16: {
                    var /** number */ v_12 = base.limit - base.cursor;
                    lab17: {
                        // literal, line 436
                        if (!(base.eq_s_b("o")))
                        {
                            break lab17;
                        }
                        break lab16;
                    }
                    base.cursor = base.limit - v_12;
                    // literal, line 436
                    if (!(base.eq_s_b("u")))
                    {
                        break lab13;
                    }
                }
                base.cursor = base.limit - v_10;
                // <+, line 436
                {
                    var /** number */ c = base.cursor;
                    base.insert(base.cursor, base.cursor, "u");
                    base.cursor = c;
                }
                break lab2;
            }
            base.cursor = base.limit - v_3;
            // (, line 438
            // test, line 438
            var /** number */ v_13 = base.limit - base.cursor;
            // (, line 438
            // (, line 438
            // goto, line 438
            golab18: while(true)
            {
                var /** number */ v_14 = base.limit - base.cursor;
                lab19: {
                    if (!(base.in_grouping_b(g_vowel, 97, 305)))
                    {
                        break lab19;
                    }
                    base.cursor = base.limit - v_14;
                    break golab18;
                }
                base.cursor = base.limit - v_14;
                if (base.cursor <= base.limit_backward)
                {
                    return false;
                }
                base.cursor--;
            }
            // or, line 438
            lab20: {
                var /** number */ v_15 = base.limit - base.cursor;
                lab21: {
                    // literal, line 438
                    if (!(base.eq_s_b("\u00F6")))
                    {
                        break lab21;
                    }
                    break lab20;
                }
                base.cursor = base.limit - v_15;
                // literal, line 438
                if (!(base.eq_s_b("\u00FC")))
                {
                    return false;
                }
            }
            base.cursor = base.limit - v_13;
            // <+, line 438
            {
                var /** number */ c = base.cursor;
                base.insert(base.cursor, base.cursor, "\u00FC");
                base.cursor = c;
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_more_than_one_syllable_word() {
        // (, line 445
        // test, line 446
        var /** number */ v_1 = base.cursor;
        // (, line 446
        // atleast, line 446
        {
            var v_2 = 2;
            // atleast, line 446
            replab0: while(true)
            {
                var /** number */ v_3 = base.cursor;
                lab1: {
                    // (, line 446
                    // gopast, line 446
                    golab2: while(true)
                    {
                        lab3: {
                            if (!(base.in_grouping(g_vowel, 97, 305)))
                            {
                                break lab3;
                            }
                            break golab2;
                        }
                        if (base.cursor >= base.limit)
                        {
                            break lab1;
                        }
                        base.cursor++;
                    }
                    v_2--;
                    continue replab0;
                }
                base.cursor = v_3;
                break replab0;
            }
            if (v_2 > 0)
            {
                return false;
            }
        }
        base.cursor = v_1;
        return true;
    };

    /** @return {boolean} */
    function r_is_reserved_word() {
        // (, line 449
        // or, line 451
        lab0: {
            var /** number */ v_1 = base.cursor;
            lab1: {
                // test, line 450
                var /** number */ v_2 = base.cursor;
                // (, line 450
                // gopast, line 450
                golab2: while(true)
                {
                    lab3: {
                        // literal, line 450
                        if (!(base.eq_s("ad")))
                        {
                            break lab3;
                        }
                        break golab2;
                    }
                    if (base.cursor >= base.limit)
                    {
                        break lab1;
                    }
                    base.cursor++;
                }
                // (, line 450
                I_strlen = 2;
                // (, line 450
                if (!(I_strlen == base.limit))
                {
                    break lab1;
                }
                base.cursor = v_2;
                break lab0;
            }
            base.cursor = v_1;
            // test, line 452
            var /** number */ v_4 = base.cursor;
            // (, line 452
            // gopast, line 452
            golab4: while(true)
            {
                lab5: {
                    // literal, line 452
                    if (!(base.eq_s("soyad")))
                    {
                        break lab5;
                    }
                    break golab4;
                }
                if (base.cursor >= base.limit)
                {
                    return false;
                }
                base.cursor++;
            }
            // (, line 452
            I_strlen = 5;
            // (, line 452
            if (!(I_strlen == base.limit))
            {
                return false;
            }
            base.cursor = v_4;
        }
        return true;
    };

    /** @return {boolean} */
    function r_postlude() {
        // (, line 455
        // not, line 456
        {
            var /** number */ v_1 = base.cursor;
            lab0: {
                // (, line 456
                // call is_reserved_word, line 456
                if (!r_is_reserved_word())
                {
                    break lab0;
                }
                return false;
            }
            base.cursor = v_1;
        }
        // backwards, line 457
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 457
        // do, line 458
        var /** number */ v_2 = base.limit - base.cursor;
        lab1: {
            // call append_U_to_stems_ending_with_d_or_g, line 458
            if (!r_append_U_to_stems_ending_with_d_or_g())
            {
                break lab1;
            }
        }
        base.cursor = base.limit - v_2;
        // do, line 459
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // call post_process_last_consonants, line 459
            if (!r_post_process_last_consonants())
            {
                break lab2;
            }
        }
        base.cursor = base.limit - v_3;
        base.cursor = base.limit_backward;        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 464
        // (, line 465
        // call more_than_one_syllable_word, line 465
        if (!r_more_than_one_syllable_word())
        {
            return false;
        }
        // (, line 466
        // backwards, line 467
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 467
        // do, line 468
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // call stem_nominal_verb_suffixes, line 468
            if (!r_stem_nominal_verb_suffixes())
            {
                break lab0;
            }
        }
        base.cursor = base.limit - v_1;
        // Boolean test continue_stemming_noun_suffixes, line 469
        if (!(B_continue_stemming_noun_suffixes))
        {
            return false;
        }
        // do, line 470
        var /** number */ v_2 = base.limit - base.cursor;
        lab1: {
            // call stem_noun_suffixes, line 470
            if (!r_stem_noun_suffixes())
            {
                break lab1;
            }
        }
        base.cursor = base.limit - v_2;
        base.cursor = base.limit_backward;        // call postlude, line 473
        if (!r_postlude())
        {
            return false;
        }
        return true;
    };

    this.stemWord = function(word) {
	base.setCurrent(word);
	this.stem();
        return base.getCurrent();
    };
};
