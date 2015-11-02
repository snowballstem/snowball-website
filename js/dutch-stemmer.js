// This file was generated automatically by the Snowball to JSX compiler
// http://snowballstem.org/

function DutchStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["", -1, 6],
        ["\u00E1", 0, 1],
        ["\u00E4", 0, 1],
        ["\u00E9", 0, 2],
        ["\u00EB", 0, 2],
        ["\u00ED", 0, 3],
        ["\u00EF", 0, 3],
        ["\u00F3", 0, 4],
        ["\u00F6", 0, 4],
        ["\u00FA", 0, 5],
        ["\u00FC", 0, 5]
    ];

    /** @const */ var a_1 = [
        ["", -1, 3],
        ["I", 0, 2],
        ["Y", 0, 1]
    ];

    /** @const */ var a_2 = [
        ["dd", -1, -1],
        ["kk", -1, -1],
        ["tt", -1, -1]
    ];

    /** @const */ var a_3 = [
        ["ene", -1, 2],
        ["se", -1, 3],
        ["en", -1, 2],
        ["heden", 2, 1],
        ["s", -1, 3]
    ];

    /** @const */ var a_4 = [
        ["end", -1, 1],
        ["ig", -1, 2],
        ["ing", -1, 1],
        ["lijk", -1, 3],
        ["baar", -1, 4],
        ["bar", -1, 5]
    ];

    /** @const */ var a_5 = [
        ["aa", -1, -1],
        ["ee", -1, -1],
        ["oo", -1, -1],
        ["uu", -1, -1]
    ];

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

    /** @const */ var /** Array<int> */ g_v_I = [1, 0, 0, 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

    /** @const */ var /** Array<int> */ g_v_j = [17, 67, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

    var /** number */ I_p2 = 0;
    var /** number */ I_p1 = 0;
    var /** boolean */ B_e_found = false;


    /** @return {boolean} */
    function r_prelude() {
        var /** number */ among_var;
        // (, line 41
        // test, line 42
        var /** number */ v_1 = base.cursor;
        // repeat, line 42
        replab0: while(true)
        {
            var /** number */ v_2 = base.cursor;
            lab1: {
                // (, line 42
                // [, line 43
                base.bra = base.cursor;
                // substring, line 43
                among_var = base.find_among(a_0);
                if (among_var == 0)
                {
                    break lab1;
                }
                // ], line 43
                base.ket = base.cursor;
                switch (among_var) {
                    case 0:
                        break lab1;
                    case 1:
                        // (, line 45
                        // <-, line 45
                        if (!base.slice_from("a"))
                        {
                            return false;
                        }
                        break;
                    case 2:
                        // (, line 47
                        // <-, line 47
                        if (!base.slice_from("e"))
                        {
                            return false;
                        }
                        break;
                    case 3:
                        // (, line 49
                        // <-, line 49
                        if (!base.slice_from("i"))
                        {
                            return false;
                        }
                        break;
                    case 4:
                        // (, line 51
                        // <-, line 51
                        if (!base.slice_from("o"))
                        {
                            return false;
                        }
                        break;
                    case 5:
                        // (, line 53
                        // <-, line 53
                        if (!base.slice_from("u"))
                        {
                            return false;
                        }
                        break;
                    case 6:
                        // (, line 54
                        // next, line 54
                        if (base.cursor >= base.limit)
                        {
                            break lab1;
                        }
                        base.cursor++;
                        break;
                }
                continue replab0;
            }
            base.cursor = v_2;
            break replab0;
        }
        base.cursor = v_1;
        // try, line 57
        var /** number */ v_3 = base.cursor;
        lab2: {
            // (, line 57
            // [, line 57
            base.bra = base.cursor;
            // literal, line 57
            if (!(base.eq_s("y")))
            {
                base.cursor = v_3;
                break lab2;
            }
            // ], line 57
            base.ket = base.cursor;
            // <-, line 57
            if (!base.slice_from("Y"))
            {
                return false;
            }
        }
        // repeat, line 58
        replab3: while(true)
        {
            var /** number */ v_4 = base.cursor;
            lab4: {
                // goto, line 58
                golab5: while(true)
                {
                    var /** number */ v_5 = base.cursor;
                    lab6: {
                        // (, line 58
                        if (!(base.in_grouping(g_v, 97, 232)))
                        {
                            break lab6;
                        }
                        // [, line 59
                        base.bra = base.cursor;
                        // or, line 59
                        lab7: {
                            var /** number */ v_6 = base.cursor;
                            lab8: {
                                // (, line 59
                                // literal, line 59
                                if (!(base.eq_s("i")))
                                {
                                    break lab8;
                                }
                                // ], line 59
                                base.ket = base.cursor;
                                if (!(base.in_grouping(g_v, 97, 232)))
                                {
                                    break lab8;
                                }
                                // <-, line 59
                                if (!base.slice_from("I"))
                                {
                                    return false;
                                }
                                break lab7;
                            }
                            base.cursor = v_6;
                            // (, line 60
                            // literal, line 60
                            if (!(base.eq_s("y")))
                            {
                                break lab6;
                            }
                            // ], line 60
                            base.ket = base.cursor;
                            // <-, line 60
                            if (!base.slice_from("Y"))
                            {
                                return false;
                            }
                        }
                        base.cursor = v_5;
                        break golab5;
                    }
                    base.cursor = v_5;
                    if (base.cursor >= base.limit)
                    {
                        break lab4;
                    }
                    base.cursor++;
                }
                continue replab3;
            }
            base.cursor = v_4;
            break replab3;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 64
        I_p1 = base.limit;
        I_p2 = base.limit;
        // gopast, line 69
        golab0: while(true)
        {
            lab1: {
                if (!(base.in_grouping(g_v, 97, 232)))
                {
                    break lab1;
                }
                break golab0;
            }
            if (base.cursor >= base.limit)
            {
                return false;
            }
            base.cursor++;
        }
        // gopast, line 69
        golab2: while(true)
        {
            lab3: {
                if (!(base.out_grouping(g_v, 97, 232)))
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
        // setmark p1, line 69
        I_p1 = base.cursor;
        // try, line 70
        lab4: {
            // (, line 70
            if (!(I_p1 < 3))
            {
                break lab4;
            }
            I_p1 = 3;
        }
        // gopast, line 71
        golab5: while(true)
        {
            lab6: {
                if (!(base.in_grouping(g_v, 97, 232)))
                {
                    break lab6;
                }
                break golab5;
            }
            if (base.cursor >= base.limit)
            {
                return false;
            }
            base.cursor++;
        }
        // gopast, line 71
        golab7: while(true)
        {
            lab8: {
                if (!(base.out_grouping(g_v, 97, 232)))
                {
                    break lab8;
                }
                break golab7;
            }
            if (base.cursor >= base.limit)
            {
                return false;
            }
            base.cursor++;
        }
        // setmark p2, line 71
        I_p2 = base.cursor;
        return true;
    };

    /** @return {boolean} */
    function r_postlude() {
        var /** number */ among_var;
        // repeat, line 75
        replab0: while(true)
        {
            var /** number */ v_1 = base.cursor;
            lab1: {
                // (, line 75
                // [, line 77
                base.bra = base.cursor;
                // substring, line 77
                among_var = base.find_among(a_1);
                if (among_var == 0)
                {
                    break lab1;
                }
                // ], line 77
                base.ket = base.cursor;
                switch (among_var) {
                    case 0:
                        break lab1;
                    case 1:
                        // (, line 78
                        // <-, line 78
                        if (!base.slice_from("y"))
                        {
                            return false;
                        }
                        break;
                    case 2:
                        // (, line 79
                        // <-, line 79
                        if (!base.slice_from("i"))
                        {
                            return false;
                        }
                        break;
                    case 3:
                        // (, line 80
                        // next, line 80
                        if (base.cursor >= base.limit)
                        {
                            break lab1;
                        }
                        base.cursor++;
                        break;
                }
                continue replab0;
            }
            base.cursor = v_1;
            break replab0;
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
    function r_undouble() {
        // (, line 90
        // test, line 91
        var /** number */ v_1 = base.limit - base.cursor;
        // among, line 91
        if (base.find_among_b(a_2) == 0)
        {
            return false;
        }
        base.cursor = base.limit - v_1;
        // [, line 91
        base.ket = base.cursor;
        // next, line 91
        if (base.cursor <= base.limit_backward)
        {
            return false;
        }
        base.cursor--;
        // ], line 91
        base.bra = base.cursor;
        // delete, line 91
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_e_ending() {
        // (, line 94
        // unset e_found, line 95
        B_e_found = false;
        // [, line 96
        base.ket = base.cursor;
        // literal, line 96
        if (!(base.eq_s_b("e")))
        {
            return false;
        }
        // ], line 96
        base.bra = base.cursor;
        // call R1, line 96
        if (!r_R1())
        {
            return false;
        }
        // test, line 96
        var /** number */ v_1 = base.limit - base.cursor;
        if (!(base.out_grouping_b(g_v, 97, 232)))
        {
            return false;
        }
        base.cursor = base.limit - v_1;
        // delete, line 96
        if (!base.slice_del())
        {
            return false;
        }
        // set e_found, line 97
        B_e_found = true;
        // call undouble, line 98
        if (!r_undouble())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_en_ending() {
        // (, line 101
        // call R1, line 102
        if (!r_R1())
        {
            return false;
        }
        // and, line 102
        var /** number */ v_1 = base.limit - base.cursor;
        if (!(base.out_grouping_b(g_v, 97, 232)))
        {
            return false;
        }
        base.cursor = base.limit - v_1;
        // not, line 102
        {
            var /** number */ v_2 = base.limit - base.cursor;
            lab0: {
                // literal, line 102
                if (!(base.eq_s_b("gem")))
                {
                    break lab0;
                }
                return false;
            }
            base.cursor = base.limit - v_2;
        }
        // delete, line 102
        if (!base.slice_del())
        {
            return false;
        }
        // call undouble, line 103
        if (!r_undouble())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_standard_suffix() {
        var /** number */ among_var;
        // (, line 106
        // do, line 107
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // (, line 107
            // [, line 108
            base.ket = base.cursor;
            // substring, line 108
            among_var = base.find_among_b(a_3);
            if (among_var == 0)
            {
                break lab0;
            }
            // ], line 108
            base.bra = base.cursor;
            switch (among_var) {
                case 0:
                    break lab0;
                case 1:
                    // (, line 110
                    // call R1, line 110
                    if (!r_R1())
                    {
                        break lab0;
                    }
                    // <-, line 110
                    if (!base.slice_from("heid"))
                    {
                        return false;
                    }
                    break;
                case 2:
                    // (, line 113
                    // call en_ending, line 113
                    if (!r_en_ending())
                    {
                        break lab0;
                    }
                    break;
                case 3:
                    // (, line 116
                    // call R1, line 116
                    if (!r_R1())
                    {
                        break lab0;
                    }
                    if (!(base.out_grouping_b(g_v_j, 97, 232)))
                    {
                        break lab0;
                    }
                    // delete, line 116
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
            }
        }
        base.cursor = base.limit - v_1;
        // do, line 120
        var /** number */ v_2 = base.limit - base.cursor;
        lab1: {
            // call e_ending, line 120
            if (!r_e_ending())
            {
                break lab1;
            }
        }
        base.cursor = base.limit - v_2;
        // do, line 122
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // (, line 122
            // [, line 122
            base.ket = base.cursor;
            // literal, line 122
            if (!(base.eq_s_b("heid")))
            {
                break lab2;
            }
            // ], line 122
            base.bra = base.cursor;
            // call R2, line 122
            if (!r_R2())
            {
                break lab2;
            }
            // not, line 122
            {
                var /** number */ v_4 = base.limit - base.cursor;
                lab3: {
                    // literal, line 122
                    if (!(base.eq_s_b("c")))
                    {
                        break lab3;
                    }
                    break lab2;
                }
                base.cursor = base.limit - v_4;
            }
            // delete, line 122
            if (!base.slice_del())
            {
                return false;
            }
            // [, line 123
            base.ket = base.cursor;
            // literal, line 123
            if (!(base.eq_s_b("en")))
            {
                break lab2;
            }
            // ], line 123
            base.bra = base.cursor;
            // call en_ending, line 123
            if (!r_en_ending())
            {
                break lab2;
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 126
        var /** number */ v_5 = base.limit - base.cursor;
        lab4: {
            // (, line 126
            // [, line 127
            base.ket = base.cursor;
            // substring, line 127
            among_var = base.find_among_b(a_4);
            if (among_var == 0)
            {
                break lab4;
            }
            // ], line 127
            base.bra = base.cursor;
            switch (among_var) {
                case 0:
                    break lab4;
                case 1:
                    // (, line 129
                    // call R2, line 129
                    if (!r_R2())
                    {
                        break lab4;
                    }
                    // delete, line 129
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // or, line 130
                    lab5: {
                        var /** number */ v_6 = base.limit - base.cursor;
                        lab6: {
                            // (, line 130
                            // [, line 130
                            base.ket = base.cursor;
                            // literal, line 130
                            if (!(base.eq_s_b("ig")))
                            {
                                break lab6;
                            }
                            // ], line 130
                            base.bra = base.cursor;
                            // call R2, line 130
                            if (!r_R2())
                            {
                                break lab6;
                            }
                            // not, line 130
                            {
                                var /** number */ v_7 = base.limit - base.cursor;
                                lab7: {
                                    // literal, line 130
                                    if (!(base.eq_s_b("e")))
                                    {
                                        break lab7;
                                    }
                                    break lab6;
                                }
                                base.cursor = base.limit - v_7;
                            }
                            // delete, line 130
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break lab5;
                        }
                        base.cursor = base.limit - v_6;
                        // call undouble, line 130
                        if (!r_undouble())
                        {
                            break lab4;
                        }
                    }
                    break;
                case 2:
                    // (, line 133
                    // call R2, line 133
                    if (!r_R2())
                    {
                        break lab4;
                    }
                    // not, line 133
                    {
                        var /** number */ v_8 = base.limit - base.cursor;
                        lab8: {
                            // literal, line 133
                            if (!(base.eq_s_b("e")))
                            {
                                break lab8;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_8;
                    }
                    // delete, line 133
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
                case 3:
                    // (, line 136
                    // call R2, line 136
                    if (!r_R2())
                    {
                        break lab4;
                    }
                    // delete, line 136
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // call e_ending, line 136
                    if (!r_e_ending())
                    {
                        break lab4;
                    }
                    break;
                case 4:
                    // (, line 139
                    // call R2, line 139
                    if (!r_R2())
                    {
                        break lab4;
                    }
                    // delete, line 139
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
                case 5:
                    // (, line 142
                    // call R2, line 142
                    if (!r_R2())
                    {
                        break lab4;
                    }
                    // Boolean test e_found, line 142
                    if (!(B_e_found))
                    {
                        break lab4;
                    }
                    // delete, line 142
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
            }
        }
        base.cursor = base.limit - v_5;
        // do, line 146
        var /** number */ v_9 = base.limit - base.cursor;
        lab9: {
            // (, line 146
            if (!(base.out_grouping_b(g_v_I, 73, 232)))
            {
                break lab9;
            }
            // test, line 148
            var /** number */ v_10 = base.limit - base.cursor;
            // (, line 148
            // among, line 149
            if (base.find_among_b(a_5) == 0)
            {
                break lab9;
            }
            if (!(base.out_grouping_b(g_v, 97, 232)))
            {
                break lab9;
            }
            base.cursor = base.limit - v_10;
            // [, line 152
            base.ket = base.cursor;
            // next, line 152
            if (base.cursor <= base.limit_backward)
            {
                break lab9;
            }
            base.cursor--;
            // ], line 152
            base.bra = base.cursor;
            // delete, line 152
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_9;
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 157
        // do, line 159
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call prelude, line 159
            if (!r_prelude())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // do, line 160
        var /** number */ v_2 = base.cursor;
        lab1: {
            // call mark_regions, line 160
            if (!r_mark_regions())
            {
                break lab1;
            }
        }
        base.cursor = v_2;
        // backwards, line 161
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // do, line 162
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // call standard_suffix, line 162
            if (!r_standard_suffix())
            {
                break lab2;
            }
        }
        base.cursor = base.limit - v_3;
        base.cursor = base.limit_backward;        // do, line 163
        var /** number */ v_4 = base.cursor;
        lab3: {
            // call postlude, line 163
            if (!r_postlude())
            {
                break lab3;
            }
        }
        base.cursor = v_4;
        return true;
    };

    this.stemWord = function(word) {
	base.setCurrent(word);
	this.stem();
        return base.getCurrent();
    };
};
