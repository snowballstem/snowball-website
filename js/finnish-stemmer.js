// This file was generated automatically by the Snowball to Javascript compiler
// http://snowballstem.org/

/**@constructor*/
function FinnishStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["pa", -1, 1],
        ["sti", -1, 2],
        ["kaan", -1, 1],
        ["han", -1, 1],
        ["kin", -1, 1],
        ["h\u00E4n", -1, 1],
        ["k\u00E4\u00E4n", -1, 1],
        ["ko", -1, 1],
        ["p\u00E4", -1, 1],
        ["k\u00F6", -1, 1]
    ];

    /** @const */ var a_1 = [
        ["lla", -1, -1],
        ["na", -1, -1],
        ["ssa", -1, -1],
        ["ta", -1, -1],
        ["lta", 3, -1],
        ["sta", 3, -1]
    ];

    /** @const */ var a_2 = [
        ["ll\u00E4", -1, -1],
        ["n\u00E4", -1, -1],
        ["ss\u00E4", -1, -1],
        ["t\u00E4", -1, -1],
        ["lt\u00E4", 3, -1],
        ["st\u00E4", 3, -1]
    ];

    /** @const */ var a_3 = [
        ["lle", -1, -1],
        ["ine", -1, -1]
    ];

    /** @const */ var a_4 = [
        ["nsa", -1, 3],
        ["mme", -1, 3],
        ["nne", -1, 3],
        ["ni", -1, 2],
        ["si", -1, 1],
        ["an", -1, 4],
        ["en", -1, 6],
        ["\u00E4n", -1, 5],
        ["ns\u00E4", -1, 3]
    ];

    /** @const */ var a_5 = [
        ["aa", -1, -1],
        ["ee", -1, -1],
        ["ii", -1, -1],
        ["oo", -1, -1],
        ["uu", -1, -1],
        ["\u00E4\u00E4", -1, -1],
        ["\u00F6\u00F6", -1, -1]
    ];

    /** @const */ var a_6 = [
        ["a", -1, 8],
        ["lla", 0, -1],
        ["na", 0, -1],
        ["ssa", 0, -1],
        ["ta", 0, -1],
        ["lta", 4, -1],
        ["sta", 4, -1],
        ["tta", 4, 2],
        ["lle", -1, -1],
        ["ine", -1, -1],
        ["ksi", -1, -1],
        ["n", -1, 7],
        ["han", 11, 1],
        ["den", 11, -1, r_VI],
        ["seen", 11, -1, r_LONG],
        ["hen", 11, 2],
        ["tten", 11, -1, r_VI],
        ["hin", 11, 3],
        ["siin", 11, -1, r_VI],
        ["hon", 11, 4],
        ["h\u00E4n", 11, 5],
        ["h\u00F6n", 11, 6],
        ["\u00E4", -1, 8],
        ["ll\u00E4", 22, -1],
        ["n\u00E4", 22, -1],
        ["ss\u00E4", 22, -1],
        ["t\u00E4", 22, -1],
        ["lt\u00E4", 26, -1],
        ["st\u00E4", 26, -1],
        ["tt\u00E4", 26, 2]
    ];

    /** @const */ var a_7 = [
        ["eja", -1, -1],
        ["mma", -1, 1],
        ["imma", 1, -1],
        ["mpa", -1, 1],
        ["impa", 3, -1],
        ["mmi", -1, 1],
        ["immi", 5, -1],
        ["mpi", -1, 1],
        ["impi", 7, -1],
        ["ej\u00E4", -1, -1],
        ["mm\u00E4", -1, 1],
        ["imm\u00E4", 10, -1],
        ["mp\u00E4", -1, 1],
        ["imp\u00E4", 12, -1]
    ];

    /** @const */ var a_8 = [
        ["i", -1, -1],
        ["j", -1, -1]
    ];

    /** @const */ var a_9 = [
        ["mma", -1, 1],
        ["imma", 0, -1]
    ];

    /** @const */ var /** Array<int> */ g_AEI = [17, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8];

    /** @const */ var /** Array<int> */ g_C = [119, 223, 119, 1];

    /** @const */ var /** Array<int> */ g_V1 = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

    /** @const */ var /** Array<int> */ g_V2 = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

    /** @const */ var /** Array<int> */ g_particle_end = [17, 97, 24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

    var /** boolean */ B_ending_removed = false;
    var /** string */ S_x = '';
    var /** number */ I_p2 = 0;
    var /** number */ I_p1 = 0;


    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 42
        I_p1 = base.limit;
        I_p2 = base.limit;
        // goto, line 47
        golab0: while(true)
        {
            var /** number */ v_1 = base.cursor;
            lab1: {
                if (!(base.in_grouping(g_V1, 97, 246)))
                {
                    break lab1;
                }
                base.cursor = v_1;
                break golab0;
            }
            base.cursor = v_1;
            if (base.cursor >= base.limit)
            {
                return false;
            }
            base.cursor++;
        }
        // gopast, line 47
        golab2: while(true)
        {
            lab3: {
                if (!(base.out_grouping(g_V1, 97, 246)))
                {
                    break lab3;
                }
                break golab2;
            }
            if (base.cursor >= base.limit)
            {
                return false;
            }
            base.cursor++;
        }
        // setmark p1, line 47
        I_p1 = base.cursor;
        // goto, line 48
        golab4: while(true)
        {
            var /** number */ v_3 = base.cursor;
            lab5: {
                if (!(base.in_grouping(g_V1, 97, 246)))
                {
                    break lab5;
                }
                base.cursor = v_3;
                break golab4;
            }
            base.cursor = v_3;
            if (base.cursor >= base.limit)
            {
                return false;
            }
            base.cursor++;
        }
        // gopast, line 48
        golab6: while(true)
        {
            lab7: {
                if (!(base.out_grouping(g_V1, 97, 246)))
                {
                    break lab7;
                }
                break golab6;
            }
            if (base.cursor >= base.limit)
            {
                return false;
            }
            base.cursor++;
        }
        // setmark p2, line 48
        I_p2 = base.cursor;
        return true;
    };

    /** @return {boolean} */
    function r_R2() {
        if (!(I_p2 <= base.cursor))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_particle_etc() {
        var /** number */ among_var;
        // (, line 55
        // setlimit, line 56
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 56
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 56
        // [, line 56
        base.ket = base.cursor;
        // substring, line 56
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 56
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 1:
                // (, line 63
                if (!(base.in_grouping_b(g_particle_end, 97, 246)))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 65
                // call R2, line 65
                if (!r_R2())
                {
                    return false;
                }
                break;
        }
        // delete, line 67
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_possessive() {
        var /** number */ among_var;
        // (, line 69
        // setlimit, line 70
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 70
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 70
        // [, line 70
        base.ket = base.cursor;
        // substring, line 70
        among_var = base.find_among_b(a_4);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 70
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 1:
                // (, line 73
                // not, line 73
                {
                    var /** number */ v_3 = base.limit - base.cursor;
                    lab0: {
                        // literal, line 73
                        if (!(base.eq_s_b("k")))
                        {
                            break lab0;
                        }
                        return false;
                    }
                    base.cursor = base.limit - v_3;
                }
                // delete, line 73
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 75
                // delete, line 75
                if (!base.slice_del())
                {
                    return false;
                }
                // [, line 75
                base.ket = base.cursor;
                // literal, line 75
                if (!(base.eq_s_b("kse")))
                {
                    return false;
                }
                // ], line 75
                base.bra = base.cursor;
                // <-, line 75
                if (!base.slice_from("ksi"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 79
                // delete, line 79
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 4:
                // (, line 82
                // among, line 82
                if (base.find_among_b(a_1) == 0)
                {
                    return false;
                }
                // delete, line 82
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 5:
                // (, line 84
                // among, line 84
                if (base.find_among_b(a_2) == 0)
                {
                    return false;
                }
                // delete, line 85
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 6:
                // (, line 87
                // among, line 87
                if (base.find_among_b(a_3) == 0)
                {
                    return false;
                }
                // delete, line 87
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_LONG() {
        // among, line 92
        if (base.find_among_b(a_5) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_VI() {
        // (, line 94
        // literal, line 94
        if (!(base.eq_s_b("i")))
        {
            return false;
        }
        if (!(base.in_grouping_b(g_V2, 97, 246)))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_case_ending() {
        var /** number */ among_var;
        // (, line 96
        // setlimit, line 97
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 97
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 97
        // [, line 97
        base.ket = base.cursor;
        // substring, line 97
        among_var = base.find_among_b(a_6);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 97
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 1:
                // (, line 99
                // literal, line 99
                if (!(base.eq_s_b("a")))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 100
                // literal, line 100
                if (!(base.eq_s_b("e")))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 101
                // literal, line 101
                if (!(base.eq_s_b("i")))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 102
                // literal, line 102
                if (!(base.eq_s_b("o")))
                {
                    return false;
                }
                break;
            case 5:
                // (, line 103
                // literal, line 103
                if (!(base.eq_s_b("\u00E4")))
                {
                    return false;
                }
                break;
            case 6:
                // (, line 104
                // literal, line 104
                if (!(base.eq_s_b("\u00F6")))
                {
                    return false;
                }
                break;
            case 7:
                // (, line 112
                // try, line 112
                var /** number */ v_3 = base.limit - base.cursor;
                lab0: {
                    // (, line 112
                    // and, line 114
                    var /** number */ v_4 = base.limit - base.cursor;
                    // or, line 113
                    lab1: {
                        var /** number */ v_5 = base.limit - base.cursor;
                        lab2: {
                            // call LONG, line 112
                            if (!r_LONG())
                            {
                                break lab2;
                            }
                            break lab1;
                        }
                        base.cursor = base.limit - v_5;
                        // literal, line 113
                        if (!(base.eq_s_b("ie")))
                        {
                            base.cursor = base.limit - v_3;
                            break lab0;
                        }
                    }
                    base.cursor = base.limit - v_4;
                    // next, line 114
                    if (base.cursor <= base.limit_backward)
                    {
                        base.cursor = base.limit - v_3;
                        break lab0;
                    }
                    base.cursor--;
                    // ], line 114
                    base.bra = base.cursor;
                }
                break;
            case 8:
                // (, line 120
                if (!(base.in_grouping_b(g_V1, 97, 246)))
                {
                    return false;
                }
                if (!(base.in_grouping_b(g_C, 98, 122)))
                {
                    return false;
                }
                break;
        }
        // delete, line 139
        if (!base.slice_del())
        {
            return false;
        }
        // set ending_removed, line 140
        B_ending_removed = true;
        return true;
    };

    /** @return {boolean} */
    function r_other_endings() {
        var /** number */ among_var;
        // (, line 142
        // setlimit, line 143
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 143
        if (base.cursor < I_p2)
        {
            return false;
        }
        base.cursor = I_p2;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 143
        // [, line 143
        base.ket = base.cursor;
        // substring, line 143
        among_var = base.find_among_b(a_7);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 143
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 1:
                // (, line 147
                // not, line 147
                {
                    var /** number */ v_3 = base.limit - base.cursor;
                    lab0: {
                        // literal, line 147
                        if (!(base.eq_s_b("po")))
                        {
                            break lab0;
                        }
                        return false;
                    }
                    base.cursor = base.limit - v_3;
                }
                break;
        }
        // delete, line 152
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_i_plural() {
        // (, line 154
        // setlimit, line 155
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 155
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 155
        // [, line 155
        base.ket = base.cursor;
        // substring, line 155
        if (base.find_among_b(a_8) == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 155
        base.bra = base.cursor;
        base.limit_backward = v_2;
        // delete, line 159
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_t_plural() {
        var /** number */ among_var;
        // (, line 161
        // setlimit, line 162
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 162
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 162
        // [, line 163
        base.ket = base.cursor;
        // literal, line 163
        if (!(base.eq_s_b("t")))
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 163
        base.bra = base.cursor;
        // test, line 163
        var /** number */ v_3 = base.limit - base.cursor;
        if (!(base.in_grouping_b(g_V1, 97, 246)))
        {
            base.limit_backward = v_2;
            return false;
        }
        base.cursor = base.limit - v_3;
        // delete, line 164
        if (!base.slice_del())
        {
            return false;
        }
        base.limit_backward = v_2;
        // setlimit, line 166
        var /** number */ v_4 = base.limit - base.cursor;
        // tomark, line 166
        if (base.cursor < I_p2)
        {
            return false;
        }
        base.cursor = I_p2;
        var /** number */ v_5 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_4;
        // (, line 166
        // [, line 166
        base.ket = base.cursor;
        // substring, line 166
        among_var = base.find_among_b(a_9);
        if (among_var == 0)
        {
            base.limit_backward = v_5;
            return false;
        }
        // ], line 166
        base.bra = base.cursor;
        base.limit_backward = v_5;
        switch (among_var) {
            case 1:
                // (, line 168
                // not, line 168
                {
                    var /** number */ v_6 = base.limit - base.cursor;
                    lab0: {
                        // literal, line 168
                        if (!(base.eq_s_b("po")))
                        {
                            break lab0;
                        }
                        return false;
                    }
                    base.cursor = base.limit - v_6;
                }
                break;
        }
        // delete, line 171
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_tidy() {
        // (, line 173
        // setlimit, line 174
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 174
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 174
        // do, line 175
        var /** number */ v_3 = base.limit - base.cursor;
        lab0: {
            // (, line 175
            // and, line 175
            var /** number */ v_4 = base.limit - base.cursor;
            // call LONG, line 175
            if (!r_LONG())
            {
                break lab0;
            }
            base.cursor = base.limit - v_4;
            // (, line 175
            // [, line 175
            base.ket = base.cursor;
            // next, line 175
            if (base.cursor <= base.limit_backward)
            {
                break lab0;
            }
            base.cursor--;
            // ], line 175
            base.bra = base.cursor;
            // delete, line 175
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 176
        var /** number */ v_5 = base.limit - base.cursor;
        lab1: {
            // (, line 176
            // [, line 176
            base.ket = base.cursor;
            if (!(base.in_grouping_b(g_AEI, 97, 228)))
            {
                break lab1;
            }
            // ], line 176
            base.bra = base.cursor;
            if (!(base.in_grouping_b(g_C, 98, 122)))
            {
                break lab1;
            }
            // delete, line 176
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_5;
        // do, line 177
        var /** number */ v_6 = base.limit - base.cursor;
        lab2: {
            // (, line 177
            // [, line 177
            base.ket = base.cursor;
            // literal, line 177
            if (!(base.eq_s_b("j")))
            {
                break lab2;
            }
            // ], line 177
            base.bra = base.cursor;
            // or, line 177
            lab3: {
                var /** number */ v_7 = base.limit - base.cursor;
                lab4: {
                    // literal, line 177
                    if (!(base.eq_s_b("o")))
                    {
                        break lab4;
                    }
                    break lab3;
                }
                base.cursor = base.limit - v_7;
                // literal, line 177
                if (!(base.eq_s_b("u")))
                {
                    break lab2;
                }
            }
            // delete, line 177
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_6;
        // do, line 178
        var /** number */ v_8 = base.limit - base.cursor;
        lab5: {
            // (, line 178
            // [, line 178
            base.ket = base.cursor;
            // literal, line 178
            if (!(base.eq_s_b("o")))
            {
                break lab5;
            }
            // ], line 178
            base.bra = base.cursor;
            // literal, line 178
            if (!(base.eq_s_b("j")))
            {
                break lab5;
            }
            // delete, line 178
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_8;
        base.limit_backward = v_2;
        // goto, line 180
        golab6: while(true)
        {
            var /** number */ v_9 = base.limit - base.cursor;
            lab7: {
                if (!(base.out_grouping_b(g_V1, 97, 246)))
                {
                    break lab7;
                }
                base.cursor = base.limit - v_9;
                break golab6;
            }
            base.cursor = base.limit - v_9;
            if (base.cursor <= base.limit_backward)
            {
                return false;
            }
            base.cursor--;
        }
        // [, line 180
        base.ket = base.cursor;
        if (!(base.in_grouping_b(g_C, 98, 122)))
        {
            return false;
        }
        // ], line 180
        base.bra = base.cursor;
        // -> x, line 180
        S_x = base.slice_to();
        if (S_x == '')
        {
            return false;
        }
        // name x, line 180
        if (!(base.eq_s_b(S_x)))
        {
            return false;
        }
        // delete, line 180
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 184
        // do, line 186
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call mark_regions, line 186
            if (!r_mark_regions())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // unset ending_removed, line 187
        B_ending_removed = false;
        // backwards, line 188
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 188
        // do, line 189
        var /** number */ v_2 = base.limit - base.cursor;
        lab1: {
            // call particle_etc, line 189
            if (!r_particle_etc())
            {
                break lab1;
            }
        }
        base.cursor = base.limit - v_2;
        // do, line 190
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // call possessive, line 190
            if (!r_possessive())
            {
                break lab2;
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 191
        var /** number */ v_4 = base.limit - base.cursor;
        lab3: {
            // call case_ending, line 191
            if (!r_case_ending())
            {
                break lab3;
            }
        }
        base.cursor = base.limit - v_4;
        // do, line 192
        var /** number */ v_5 = base.limit - base.cursor;
        lab4: {
            // call other_endings, line 192
            if (!r_other_endings())
            {
                break lab4;
            }
        }
        base.cursor = base.limit - v_5;
        // or, line 193
        lab5: {
            lab6: {
                // (, line 193
                // Boolean test ending_removed, line 193
                if (!B_ending_removed)
                {
                    break lab6;
                }
                // do, line 193
                var /** number */ v_7 = base.limit - base.cursor;
                lab7: {
                    // call i_plural, line 193
                    if (!r_i_plural())
                    {
                        break lab7;
                    }
                }
                base.cursor = base.limit - v_7;
                break lab5;
            }
            // do, line 193
            var /** number */ v_8 = base.limit - base.cursor;
            lab8: {
                // call t_plural, line 193
                if (!r_t_plural())
                {
                    break lab8;
                }
            }
            base.cursor = base.limit - v_8;
        }
        // do, line 194
        var /** number */ v_9 = base.limit - base.cursor;
        lab9: {
            // call tidy, line 194
            if (!r_tidy())
            {
                break lab9;
            }
        }
        base.cursor = base.limit - v_9;
        base.cursor = base.limit_backward;
        return true;
    };

    /**@return{string}*/
    this['stemWord'] = function(/**string*/word) {
        base.setCurrent(word);
        this.stem();
        return base.getCurrent();
    };
};
window['FinnishStemmer'] = FinnishStemmer;
