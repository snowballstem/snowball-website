// This file was generated automatically by the Snowball to JSX compiler
// http://snowballstem.org/

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
        ["tta", 4, 9],
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
        ["tt\u00E4", 26, 9]
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

    /** @const */ var /** Array<int> */ g_V1 = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

    /** @const */ var /** Array<int> */ g_V2 = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

    /** @const */ var /** Array<int> */ g_particle_end = [17, 97, 24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

    var /** boolean */ B_ending_removed = false;
    var /** string */ S_x = '';
    var /** number */ I_p2 = 0;
    var /** number */ I_p1 = 0;


    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 41
        I_p1 = base.limit;
        I_p2 = base.limit;
        // goto, line 46
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
        // gopast, line 46
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
        // setmark p1, line 46
        I_p1 = base.cursor;
        // goto, line 47
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
        // gopast, line 47
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
        // setmark p2, line 47
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
        // (, line 54
        // setlimit, line 55
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 55
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 55
        // [, line 55
        base.ket = base.cursor;
        // substring, line 55
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 55
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 62
                if (!(base.in_grouping_b(g_particle_end, 97, 246)))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 64
                // call R2, line 64
                if (!r_R2())
                {
                    return false;
                }
                break;
        }
        // delete, line 66
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_possessive() {
        var /** number */ among_var;
        // (, line 68
        // setlimit, line 69
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 69
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 69
        // [, line 69
        base.ket = base.cursor;
        // substring, line 69
        among_var = base.find_among_b(a_4);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 69
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 72
                // not, line 72
                {
                    var /** number */ v_3 = base.limit - base.cursor;
                    lab0: {
                        // literal, line 72
                        if (!(base.eq_s_b("k")))
                        {
                            break lab0;
                        }
                        return false;
                    }
                    base.cursor = base.limit - v_3;
                }
                // delete, line 72
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 74
                // delete, line 74
                if (!base.slice_del())
                {
                    return false;
                }
                // [, line 74
                base.ket = base.cursor;
                // literal, line 74
                if (!(base.eq_s_b("kse")))
                {
                    return false;
                }
                // ], line 74
                base.bra = base.cursor;
                // <-, line 74
                if (!base.slice_from("ksi"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 78
                // delete, line 78
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 4:
                // (, line 81
                // among, line 81
                if (base.find_among_b(a_1) == 0)
                {
                    return false;
                }
                // delete, line 81
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 5:
                // (, line 83
                // among, line 83
                if (base.find_among_b(a_2) == 0)
                {
                    return false;
                }
                // delete, line 84
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 6:
                // (, line 86
                // among, line 86
                if (base.find_among_b(a_3) == 0)
                {
                    return false;
                }
                // delete, line 86
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
        // among, line 91
        if (base.find_among_b(a_5) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_VI() {
        // (, line 93
        // literal, line 93
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
        // (, line 95
        // setlimit, line 96
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 96
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 96
        // [, line 96
        base.ket = base.cursor;
        // substring, line 96
        among_var = base.find_among_b(a_6);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 96
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 98
                // literal, line 98
                if (!(base.eq_s_b("a")))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 99
                // literal, line 99
                if (!(base.eq_s_b("e")))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 100
                // literal, line 100
                if (!(base.eq_s_b("i")))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 101
                // literal, line 101
                if (!(base.eq_s_b("o")))
                {
                    return false;
                }
                break;
            case 5:
                // (, line 102
                // literal, line 102
                if (!(base.eq_s_b("\u00E4")))
                {
                    return false;
                }
                break;
            case 6:
                // (, line 103
                // literal, line 103
                if (!(base.eq_s_b("\u00F6")))
                {
                    return false;
                }
                break;
            case 7:
                // (, line 111
                // try, line 111
                var /** number */ v_3 = base.limit - base.cursor;
                lab0: {
                    // (, line 111
                    // and, line 113
                    var /** number */ v_4 = base.limit - base.cursor;
                    // or, line 112
                    lab1: {
                        var /** number */ v_5 = base.limit - base.cursor;
                        lab2: {
                            // call LONG, line 111
                            if (!r_LONG())
                            {
                                break lab2;
                            }
                            break lab1;
                        }
                        base.cursor = base.limit - v_5;
                        // literal, line 112
                        if (!(base.eq_s_b("ie")))
                        {
                            base.cursor = base.limit - v_3;
                            break lab0;
                        }
                    }
                    base.cursor = base.limit - v_4;
                    // next, line 113
                    if (base.cursor <= base.limit_backward)
                    {
                        base.cursor = base.limit - v_3;
                        break lab0;
                    }
                    base.cursor--;
                    // ], line 113
                    base.bra = base.cursor;
                }
                break;
            case 8:
                // (, line 119
                if (!(base.in_grouping_b(g_V1, 97, 246)))
                {
                    return false;
                }
                if (!(base.out_grouping_b(g_V1, 97, 246)))
                {
                    return false;
                }
                break;
            case 9:
                // (, line 121
                // literal, line 121
                if (!(base.eq_s_b("e")))
                {
                    return false;
                }
                break;
        }
        // delete, line 138
        if (!base.slice_del())
        {
            return false;
        }
        // set ending_removed, line 139
        B_ending_removed = true;
        return true;
    };

    /** @return {boolean} */
    function r_other_endings() {
        var /** number */ among_var;
        // (, line 141
        // setlimit, line 142
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 142
        if (base.cursor < I_p2)
        {
            return false;
        }
        base.cursor = I_p2;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 142
        // [, line 142
        base.ket = base.cursor;
        // substring, line 142
        among_var = base.find_among_b(a_7);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 142
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 146
                // not, line 146
                {
                    var /** number */ v_3 = base.limit - base.cursor;
                    lab0: {
                        // literal, line 146
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
        // delete, line 151
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_i_plural() {
        // (, line 153
        // setlimit, line 154
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 154
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 154
        // [, line 154
        base.ket = base.cursor;
        // substring, line 154
        if (base.find_among_b(a_8) == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 154
        base.bra = base.cursor;
        base.limit_backward = v_2;
        // delete, line 158
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_t_plural() {
        var /** number */ among_var;
        // (, line 160
        // setlimit, line 161
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 161
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 161
        // [, line 162
        base.ket = base.cursor;
        // literal, line 162
        if (!(base.eq_s_b("t")))
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 162
        base.bra = base.cursor;
        // test, line 162
        var /** number */ v_3 = base.limit - base.cursor;
        if (!(base.in_grouping_b(g_V1, 97, 246)))
        {
            base.limit_backward = v_2;
            return false;
        }
        base.cursor = base.limit - v_3;
        // delete, line 163
        if (!base.slice_del())
        {
            return false;
        }
        base.limit_backward = v_2;
        // setlimit, line 165
        var /** number */ v_4 = base.limit - base.cursor;
        // tomark, line 165
        if (base.cursor < I_p2)
        {
            return false;
        }
        base.cursor = I_p2;
        var /** number */ v_5 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_4;
        // (, line 165
        // [, line 165
        base.ket = base.cursor;
        // substring, line 165
        among_var = base.find_among_b(a_9);
        if (among_var == 0)
        {
            base.limit_backward = v_5;
            return false;
        }
        // ], line 165
        base.bra = base.cursor;
        base.limit_backward = v_5;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 167
                // not, line 167
                {
                    var /** number */ v_6 = base.limit - base.cursor;
                    lab0: {
                        // literal, line 167
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
        // delete, line 170
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_tidy() {
        // (, line 172
        // setlimit, line 173
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 173
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 173
        // do, line 174
        var /** number */ v_3 = base.limit - base.cursor;
        lab0: {
            // (, line 174
            // and, line 174
            var /** number */ v_4 = base.limit - base.cursor;
            // call LONG, line 174
            if (!r_LONG())
            {
                break lab0;
            }
            base.cursor = base.limit - v_4;
            // (, line 174
            // [, line 174
            base.ket = base.cursor;
            // next, line 174
            if (base.cursor <= base.limit_backward)
            {
                break lab0;
            }
            base.cursor--;
            // ], line 174
            base.bra = base.cursor;
            // delete, line 174
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 175
        var /** number */ v_5 = base.limit - base.cursor;
        lab1: {
            // (, line 175
            // [, line 175
            base.ket = base.cursor;
            if (!(base.in_grouping_b(g_AEI, 97, 228)))
            {
                break lab1;
            }
            // ], line 175
            base.bra = base.cursor;
            if (!(base.out_grouping_b(g_V1, 97, 246)))
            {
                break lab1;
            }
            // delete, line 175
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_5;
        // do, line 176
        var /** number */ v_6 = base.limit - base.cursor;
        lab2: {
            // (, line 176
            // [, line 176
            base.ket = base.cursor;
            // literal, line 176
            if (!(base.eq_s_b("j")))
            {
                break lab2;
            }
            // ], line 176
            base.bra = base.cursor;
            // or, line 176
            lab3: {
                var /** number */ v_7 = base.limit - base.cursor;
                lab4: {
                    // literal, line 176
                    if (!(base.eq_s_b("o")))
                    {
                        break lab4;
                    }
                    break lab3;
                }
                base.cursor = base.limit - v_7;
                // literal, line 176
                if (!(base.eq_s_b("u")))
                {
                    break lab2;
                }
            }
            // delete, line 176
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_6;
        // do, line 177
        var /** number */ v_8 = base.limit - base.cursor;
        lab5: {
            // (, line 177
            // [, line 177
            base.ket = base.cursor;
            // literal, line 177
            if (!(base.eq_s_b("o")))
            {
                break lab5;
            }
            // ], line 177
            base.bra = base.cursor;
            // literal, line 177
            if (!(base.eq_s_b("j")))
            {
                break lab5;
            }
            // delete, line 177
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_8;
        base.limit_backward = v_2;
        // goto, line 179
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
        // [, line 179
        base.ket = base.cursor;
        // next, line 179
        if (base.cursor <= base.limit_backward)
        {
            return false;
        }
        base.cursor--;
        // ], line 179
        base.bra = base.cursor;
        // -> x, line 179
        S_x = base.slice_to();
        if (S_x == '')
        {
            return false;
        }
        // name x, line 179
        if (!(base.eq_s_b(S_x)))
        {
            return false;
        }
        // delete, line 179
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 183
        // do, line 185
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call mark_regions, line 185
            if (!r_mark_regions())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // unset ending_removed, line 186
        B_ending_removed = false;
        // backwards, line 187
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 187
        // do, line 188
        var /** number */ v_2 = base.limit - base.cursor;
        lab1: {
            // call particle_etc, line 188
            if (!r_particle_etc())
            {
                break lab1;
            }
        }
        base.cursor = base.limit - v_2;
        // do, line 189
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // call possessive, line 189
            if (!r_possessive())
            {
                break lab2;
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 190
        var /** number */ v_4 = base.limit - base.cursor;
        lab3: {
            // call case_ending, line 190
            if (!r_case_ending())
            {
                break lab3;
            }
        }
        base.cursor = base.limit - v_4;
        // do, line 191
        var /** number */ v_5 = base.limit - base.cursor;
        lab4: {
            // call other_endings, line 191
            if (!r_other_endings())
            {
                break lab4;
            }
        }
        base.cursor = base.limit - v_5;
        // or, line 192
        lab5: {
            var /** number */ v_6 = base.limit - base.cursor;
            lab6: {
                // (, line 192
                // Boolean test ending_removed, line 192
                if (!(B_ending_removed))
                {
                    break lab6;
                }
                // do, line 192
                var /** number */ v_7 = base.limit - base.cursor;
                lab7: {
                    // call i_plural, line 192
                    if (!r_i_plural())
                    {
                        break lab7;
                    }
                }
                base.cursor = base.limit - v_7;
                break lab5;
            }
            base.cursor = base.limit - v_6;
            // do, line 192
            var /** number */ v_8 = base.limit - base.cursor;
            lab8: {
                // call t_plural, line 192
                if (!r_t_plural())
                {
                    break lab8;
                }
            }
            base.cursor = base.limit - v_8;
        }
        // do, line 193
        var /** number */ v_9 = base.limit - base.cursor;
        lab9: {
            // call tidy, line 193
            if (!r_tidy())
            {
                break lab9;
            }
        }
        base.cursor = base.limit - v_9;
        base.cursor = base.limit_backward;        return true;
    };

    this.stemWord = function(word) {
	base.setCurrent(word);
	this.stem();
        return base.getCurrent();
    };
};
