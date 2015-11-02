// This file was generated automatically by the Snowball to JSX compiler
// http://snowballstem.org/

function PorterStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["s", -1, 3],
        ["ies", 0, 2],
        ["sses", 0, 1],
        ["ss", 0, -1]
    ];

    /** @const */ var a_1 = [
        ["", -1, 3],
        ["bb", 0, 2],
        ["dd", 0, 2],
        ["ff", 0, 2],
        ["gg", 0, 2],
        ["bl", 0, 1],
        ["mm", 0, 2],
        ["nn", 0, 2],
        ["pp", 0, 2],
        ["rr", 0, 2],
        ["at", 0, 1],
        ["tt", 0, 2],
        ["iz", 0, 1]
    ];

    /** @const */ var a_2 = [
        ["ed", -1, 2],
        ["eed", 0, 1],
        ["ing", -1, 2]
    ];

    /** @const */ var a_3 = [
        ["anci", -1, 3],
        ["enci", -1, 2],
        ["abli", -1, 4],
        ["eli", -1, 6],
        ["alli", -1, 9],
        ["ousli", -1, 12],
        ["entli", -1, 5],
        ["aliti", -1, 10],
        ["biliti", -1, 14],
        ["iviti", -1, 13],
        ["tional", -1, 1],
        ["ational", 10, 8],
        ["alism", -1, 10],
        ["ation", -1, 8],
        ["ization", 13, 7],
        ["izer", -1, 7],
        ["ator", -1, 8],
        ["iveness", -1, 13],
        ["fulness", -1, 11],
        ["ousness", -1, 12]
    ];

    /** @const */ var a_4 = [
        ["icate", -1, 2],
        ["ative", -1, 3],
        ["alize", -1, 1],
        ["iciti", -1, 2],
        ["ical", -1, 2],
        ["ful", -1, 3],
        ["ness", -1, 3]
    ];

    /** @const */ var a_5 = [
        ["ic", -1, 1],
        ["ance", -1, 1],
        ["ence", -1, 1],
        ["able", -1, 1],
        ["ible", -1, 1],
        ["ate", -1, 1],
        ["ive", -1, 1],
        ["ize", -1, 1],
        ["iti", -1, 1],
        ["al", -1, 1],
        ["ism", -1, 1],
        ["ion", -1, 2],
        ["er", -1, 1],
        ["ous", -1, 1],
        ["ant", -1, 1],
        ["ent", -1, 1],
        ["ment", 15, 1],
        ["ement", 16, 1],
        ["ou", -1, 1]
    ];

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16, 1];

    /** @const */ var /** Array<int> */ g_v_WXY = [1, 17, 65, 208, 1];

    var /** boolean */ B_Y_found = false;
    var /** number */ I_p2 = 0;
    var /** number */ I_p1 = 0;


    /** @return {boolean} */
    function r_shortv() {
        // (, line 19
        if (!(base.out_grouping_b(g_v_WXY, 89, 121)))
        {
            return false;
        }
        if (!(base.in_grouping_b(g_v, 97, 121)))
        {
            return false;
        }
        if (!(base.out_grouping_b(g_v, 97, 121)))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_R1() {
        if (!(I_p1 <= base.cursor))
        {
            return false;
        }
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
    function r_Step_1a() {
        var /** number */ among_var;
        // (, line 24
        // [, line 25
        base.ket = base.cursor;
        // substring, line 25
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 25
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 26
                // <-, line 26
                if (!base.slice_from("ss"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 27
                // <-, line 27
                if (!base.slice_from("i"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 29
                // delete, line 29
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Step_1b() {
        var /** number */ among_var;
        // (, line 33
        // [, line 34
        base.ket = base.cursor;
        // substring, line 34
        among_var = base.find_among_b(a_2);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 34
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 35
                // call R1, line 35
                if (!r_R1())
                {
                    return false;
                }
                // <-, line 35
                if (!base.slice_from("ee"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 37
                // test, line 38
                var /** number */ v_1 = base.limit - base.cursor;
                // gopast, line 38
                golab0: while(true)
                {
                    lab1: {
                        if (!(base.in_grouping_b(g_v, 97, 121)))
                        {
                            break lab1;
                        }
                        break golab0;
                    }
                    if (base.cursor <= base.limit_backward)
                    {
                        return false;
                    }
                    base.cursor--;
                }
                base.cursor = base.limit - v_1;
                // delete, line 38
                if (!base.slice_del())
                {
                    return false;
                }
                // test, line 39
                var /** number */ v_3 = base.limit - base.cursor;
                // substring, line 39
                among_var = base.find_among_b(a_1);
                if (among_var == 0)
                {
                    return false;
                }
                base.cursor = base.limit - v_3;
                switch (among_var) {
                    case 0:
                        return false;
                    case 1:
                        // (, line 41
                        // <+, line 41
                        {
                            var /** number */ c = base.cursor;
                            base.insert(base.cursor, base.cursor, "e");
                            base.cursor = c;
                        }
                        break;
                    case 2:
                        // (, line 44
                        // [, line 44
                        base.ket = base.cursor;
                        // next, line 44
                        if (base.cursor <= base.limit_backward)
                        {
                            return false;
                        }
                        base.cursor--;
                        // ], line 44
                        base.bra = base.cursor;
                        // delete, line 44
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        break;
                    case 3:
                        // (, line 45
                        // atmark, line 45
                        if (base.cursor != I_p1)
                        {
                            return false;
                        }
                        // test, line 45
                        var /** number */ v_4 = base.limit - base.cursor;
                        // call shortv, line 45
                        if (!r_shortv())
                        {
                            return false;
                        }
                        base.cursor = base.limit - v_4;
                        // <+, line 45
                        {
                            var /** number */ c = base.cursor;
                            base.insert(base.cursor, base.cursor, "e");
                            base.cursor = c;
                        }
                        break;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Step_1c() {
        // (, line 51
        // [, line 52
        base.ket = base.cursor;
        // or, line 52
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // literal, line 52
                if (!(base.eq_s_b("y")))
                {
                    break lab1;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // literal, line 52
            if (!(base.eq_s_b("Y")))
            {
                return false;
            }
        }
        // ], line 52
        base.bra = base.cursor;
        // gopast, line 53
        golab2: while(true)
        {
            lab3: {
                if (!(base.in_grouping_b(g_v, 97, 121)))
                {
                    break lab3;
                }
                break golab2;
            }
            if (base.cursor <= base.limit_backward)
            {
                return false;
            }
            base.cursor--;
        }
        // <-, line 54
        if (!base.slice_from("i"))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Step_2() {
        var /** number */ among_var;
        // (, line 57
        // [, line 58
        base.ket = base.cursor;
        // substring, line 58
        among_var = base.find_among_b(a_3);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 58
        base.bra = base.cursor;
        // call R1, line 58
        if (!r_R1())
        {
            return false;
        }
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 59
                // <-, line 59
                if (!base.slice_from("tion"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 60
                // <-, line 60
                if (!base.slice_from("ence"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 61
                // <-, line 61
                if (!base.slice_from("ance"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 62
                // <-, line 62
                if (!base.slice_from("able"))
                {
                    return false;
                }
                break;
            case 5:
                // (, line 63
                // <-, line 63
                if (!base.slice_from("ent"))
                {
                    return false;
                }
                break;
            case 6:
                // (, line 64
                // <-, line 64
                if (!base.slice_from("e"))
                {
                    return false;
                }
                break;
            case 7:
                // (, line 66
                // <-, line 66
                if (!base.slice_from("ize"))
                {
                    return false;
                }
                break;
            case 8:
                // (, line 68
                // <-, line 68
                if (!base.slice_from("ate"))
                {
                    return false;
                }
                break;
            case 9:
                // (, line 69
                // <-, line 69
                if (!base.slice_from("al"))
                {
                    return false;
                }
                break;
            case 10:
                // (, line 71
                // <-, line 71
                if (!base.slice_from("al"))
                {
                    return false;
                }
                break;
            case 11:
                // (, line 72
                // <-, line 72
                if (!base.slice_from("ful"))
                {
                    return false;
                }
                break;
            case 12:
                // (, line 74
                // <-, line 74
                if (!base.slice_from("ous"))
                {
                    return false;
                }
                break;
            case 13:
                // (, line 76
                // <-, line 76
                if (!base.slice_from("ive"))
                {
                    return false;
                }
                break;
            case 14:
                // (, line 77
                // <-, line 77
                if (!base.slice_from("ble"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Step_3() {
        var /** number */ among_var;
        // (, line 81
        // [, line 82
        base.ket = base.cursor;
        // substring, line 82
        among_var = base.find_among_b(a_4);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 82
        base.bra = base.cursor;
        // call R1, line 82
        if (!r_R1())
        {
            return false;
        }
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 83
                // <-, line 83
                if (!base.slice_from("al"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 85
                // <-, line 85
                if (!base.slice_from("ic"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 87
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
    function r_Step_4() {
        var /** number */ among_var;
        // (, line 91
        // [, line 92
        base.ket = base.cursor;
        // substring, line 92
        among_var = base.find_among_b(a_5);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 92
        base.bra = base.cursor;
        // call R2, line 92
        if (!r_R2())
        {
            return false;
        }
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 95
                // delete, line 95
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 96
                // or, line 96
                lab0: {
                    var /** number */ v_1 = base.limit - base.cursor;
                    lab1: {
                        // literal, line 96
                        if (!(base.eq_s_b("s")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    // literal, line 96
                    if (!(base.eq_s_b("t")))
                    {
                        return false;
                    }
                }
                // delete, line 96
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Step_5a() {
        // (, line 100
        // [, line 101
        base.ket = base.cursor;
        // literal, line 101
        if (!(base.eq_s_b("e")))
        {
            return false;
        }
        // ], line 101
        base.bra = base.cursor;
        // or, line 102
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // call R2, line 102
                if (!r_R2())
                {
                    break lab1;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // (, line 102
            // call R1, line 102
            if (!r_R1())
            {
                return false;
            }
            // not, line 102
            {
                var /** number */ v_2 = base.limit - base.cursor;
                lab2: {
                    // call shortv, line 102
                    if (!r_shortv())
                    {
                        break lab2;
                    }
                    return false;
                }
                base.cursor = base.limit - v_2;
            }
        }
        // delete, line 103
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Step_5b() {
        // (, line 106
        // [, line 107
        base.ket = base.cursor;
        // literal, line 107
        if (!(base.eq_s_b("l")))
        {
            return false;
        }
        // ], line 107
        base.bra = base.cursor;
        // call R2, line 108
        if (!r_R2())
        {
            return false;
        }
        // literal, line 108
        if (!(base.eq_s_b("l")))
        {
            return false;
        }
        // delete, line 109
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 113
        // unset Y_found, line 115
        B_Y_found = false;
        // do, line 116
        var /** number */ v_1 = base.cursor;
        lab0: {
            // (, line 116
            // [, line 116
            base.bra = base.cursor;
            // literal, line 116
            if (!(base.eq_s("y")))
            {
                break lab0;
            }
            // ], line 116
            base.ket = base.cursor;
            // <-, line 116
            if (!base.slice_from("Y"))
            {
                return false;
            }
            // set Y_found, line 116
            B_Y_found = true;
        }
        base.cursor = v_1;
        // do, line 117
        var /** number */ v_2 = base.cursor;
        lab1: {
            // repeat, line 117
            replab2: while(true)
            {
                var /** number */ v_3 = base.cursor;
                lab3: {
                    // (, line 117
                    // goto, line 117
                    golab4: while(true)
                    {
                        var /** number */ v_4 = base.cursor;
                        lab5: {
                            // (, line 117
                            if (!(base.in_grouping(g_v, 97, 121)))
                            {
                                break lab5;
                            }
                            // [, line 117
                            base.bra = base.cursor;
                            // literal, line 117
                            if (!(base.eq_s("y")))
                            {
                                break lab5;
                            }
                            // ], line 117
                            base.ket = base.cursor;
                            base.cursor = v_4;
                            break golab4;
                        }
                        base.cursor = v_4;
                        if (base.cursor >= base.limit)
                        {
                            break lab3;
                        }
                        base.cursor++;
                    }
                    // <-, line 117
                    if (!base.slice_from("Y"))
                    {
                        return false;
                    }
                    // set Y_found, line 117
                    B_Y_found = true;
                    continue replab2;
                }
                base.cursor = v_3;
                break replab2;
            }
        }
        base.cursor = v_2;
        I_p1 = base.limit;
        I_p2 = base.limit;
        // do, line 121
        var /** number */ v_5 = base.cursor;
        lab6: {
            // (, line 121
            // gopast, line 122
            golab7: while(true)
            {
                lab8: {
                    if (!(base.in_grouping(g_v, 97, 121)))
                    {
                        break lab8;
                    }
                    break golab7;
                }
                if (base.cursor >= base.limit)
                {
                    break lab6;
                }
                base.cursor++;
            }
            // gopast, line 122
            golab9: while(true)
            {
                lab10: {
                    if (!(base.out_grouping(g_v, 97, 121)))
                    {
                        break lab10;
                    }
                    break golab9;
                }
                if (base.cursor >= base.limit)
                {
                    break lab6;
                }
                base.cursor++;
            }
            // setmark p1, line 122
            I_p1 = base.cursor;
            // gopast, line 123
            golab11: while(true)
            {
                lab12: {
                    if (!(base.in_grouping(g_v, 97, 121)))
                    {
                        break lab12;
                    }
                    break golab11;
                }
                if (base.cursor >= base.limit)
                {
                    break lab6;
                }
                base.cursor++;
            }
            // gopast, line 123
            golab13: while(true)
            {
                lab14: {
                    if (!(base.out_grouping(g_v, 97, 121)))
                    {
                        break lab14;
                    }
                    break golab13;
                }
                if (base.cursor >= base.limit)
                {
                    break lab6;
                }
                base.cursor++;
            }
            // setmark p2, line 123
            I_p2 = base.cursor;
        }
        base.cursor = v_5;
        // backwards, line 126
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 126
        // do, line 127
        var /** number */ v_10 = base.limit - base.cursor;
        lab15: {
            // call Step_1a, line 127
            if (!r_Step_1a())
            {
                break lab15;
            }
        }
        base.cursor = base.limit - v_10;
        // do, line 128
        var /** number */ v_11 = base.limit - base.cursor;
        lab16: {
            // call Step_1b, line 128
            if (!r_Step_1b())
            {
                break lab16;
            }
        }
        base.cursor = base.limit - v_11;
        // do, line 129
        var /** number */ v_12 = base.limit - base.cursor;
        lab17: {
            // call Step_1c, line 129
            if (!r_Step_1c())
            {
                break lab17;
            }
        }
        base.cursor = base.limit - v_12;
        // do, line 130
        var /** number */ v_13 = base.limit - base.cursor;
        lab18: {
            // call Step_2, line 130
            if (!r_Step_2())
            {
                break lab18;
            }
        }
        base.cursor = base.limit - v_13;
        // do, line 131
        var /** number */ v_14 = base.limit - base.cursor;
        lab19: {
            // call Step_3, line 131
            if (!r_Step_3())
            {
                break lab19;
            }
        }
        base.cursor = base.limit - v_14;
        // do, line 132
        var /** number */ v_15 = base.limit - base.cursor;
        lab20: {
            // call Step_4, line 132
            if (!r_Step_4())
            {
                break lab20;
            }
        }
        base.cursor = base.limit - v_15;
        // do, line 133
        var /** number */ v_16 = base.limit - base.cursor;
        lab21: {
            // call Step_5a, line 133
            if (!r_Step_5a())
            {
                break lab21;
            }
        }
        base.cursor = base.limit - v_16;
        // do, line 134
        var /** number */ v_17 = base.limit - base.cursor;
        lab22: {
            // call Step_5b, line 134
            if (!r_Step_5b())
            {
                break lab22;
            }
        }
        base.cursor = base.limit - v_17;
        base.cursor = base.limit_backward;        // do, line 137
        var /** number */ v_18 = base.cursor;
        lab23: {
            // (, line 137
            // Boolean test Y_found, line 137
            if (!(B_Y_found))
            {
                break lab23;
            }
            // repeat, line 137
            replab24: while(true)
            {
                var /** number */ v_19 = base.cursor;
                lab25: {
                    // (, line 137
                    // goto, line 137
                    golab26: while(true)
                    {
                        var /** number */ v_20 = base.cursor;
                        lab27: {
                            // (, line 137
                            // [, line 137
                            base.bra = base.cursor;
                            // literal, line 137
                            if (!(base.eq_s("Y")))
                            {
                                break lab27;
                            }
                            // ], line 137
                            base.ket = base.cursor;
                            base.cursor = v_20;
                            break golab26;
                        }
                        base.cursor = v_20;
                        if (base.cursor >= base.limit)
                        {
                            break lab25;
                        }
                        base.cursor++;
                    }
                    // <-, line 137
                    if (!base.slice_from("y"))
                    {
                        return false;
                    }
                    continue replab24;
                }
                base.cursor = v_19;
                break replab24;
            }
        }
        base.cursor = v_18;
        return true;
    };

    this.stemWord = function(word) {
	base.setCurrent(word);
	this.stem();
        return base.getCurrent();
    };
};
