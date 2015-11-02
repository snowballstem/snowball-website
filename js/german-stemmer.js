// This file was generated automatically by the Snowball to JSX compiler
// http://snowballstem.org/

function GermanStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["", -1, 6],
        ["U", 0, 2],
        ["Y", 0, 1],
        ["\u00E4", 0, 3],
        ["\u00F6", 0, 4],
        ["\u00FC", 0, 5]
    ];

    /** @const */ var a_1 = [
        ["e", -1, 2],
        ["em", -1, 1],
        ["en", -1, 2],
        ["ern", -1, 1],
        ["er", -1, 1],
        ["s", -1, 3],
        ["es", 5, 2]
    ];

    /** @const */ var a_2 = [
        ["en", -1, 1],
        ["er", -1, 1],
        ["st", -1, 2],
        ["est", 2, 1]
    ];

    /** @const */ var a_3 = [
        ["ig", -1, 1],
        ["lich", -1, 1]
    ];

    /** @const */ var a_4 = [
        ["end", -1, 1],
        ["ig", -1, 2],
        ["ung", -1, 1],
        ["lich", -1, 3],
        ["isch", -1, 2],
        ["ik", -1, 2],
        ["heit", -1, 3],
        ["keit", -1, 4]
    ];

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 8];

    /** @const */ var /** Array<int> */ g_s_ending = [117, 30, 5];

    /** @const */ var /** Array<int> */ g_st_ending = [117, 30, 4];

    var /** number */ I_x = 0;
    var /** number */ I_p2 = 0;
    var /** number */ I_p1 = 0;


    /** @return {boolean} */
    function r_prelude() {
        // (, line 33
        // test, line 35
        var /** number */ v_1 = base.cursor;
        // repeat, line 35
        replab0: while(true)
        {
            var /** number */ v_2 = base.cursor;
            lab1: {
                // (, line 35
                // or, line 38
                lab2: {
                    var /** number */ v_3 = base.cursor;
                    lab3: {
                        // (, line 36
                        // [, line 37
                        base.bra = base.cursor;
                        // literal, line 37
                        if (!(base.eq_s("\u00DF")))
                        {
                            break lab3;
                        }
                        // ], line 37
                        base.ket = base.cursor;
                        // <-, line 37
                        if (!base.slice_from("ss"))
                        {
                            return false;
                        }
                        break lab2;
                    }
                    base.cursor = v_3;
                    // next, line 38
                    if (base.cursor >= base.limit)
                    {
                        break lab1;
                    }
                    base.cursor++;
                }
                continue replab0;
            }
            base.cursor = v_2;
            break replab0;
        }
        base.cursor = v_1;
        // repeat, line 41
        replab4: while(true)
        {
            var /** number */ v_4 = base.cursor;
            lab5: {
                // goto, line 41
                golab6: while(true)
                {
                    var /** number */ v_5 = base.cursor;
                    lab7: {
                        // (, line 41
                        if (!(base.in_grouping(g_v, 97, 252)))
                        {
                            break lab7;
                        }
                        // [, line 42
                        base.bra = base.cursor;
                        // or, line 42
                        lab8: {
                            var /** number */ v_6 = base.cursor;
                            lab9: {
                                // (, line 42
                                // literal, line 42
                                if (!(base.eq_s("u")))
                                {
                                    break lab9;
                                }
                                // ], line 42
                                base.ket = base.cursor;
                                if (!(base.in_grouping(g_v, 97, 252)))
                                {
                                    break lab9;
                                }
                                // <-, line 42
                                if (!base.slice_from("U"))
                                {
                                    return false;
                                }
                                break lab8;
                            }
                            base.cursor = v_6;
                            // (, line 43
                            // literal, line 43
                            if (!(base.eq_s("y")))
                            {
                                break lab7;
                            }
                            // ], line 43
                            base.ket = base.cursor;
                            if (!(base.in_grouping(g_v, 97, 252)))
                            {
                                break lab7;
                            }
                            // <-, line 43
                            if (!base.slice_from("Y"))
                            {
                                return false;
                            }
                        }
                        base.cursor = v_5;
                        break golab6;
                    }
                    base.cursor = v_5;
                    if (base.cursor >= base.limit)
                    {
                        break lab5;
                    }
                    base.cursor++;
                }
                continue replab4;
            }
            base.cursor = v_4;
            break replab4;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 47
        I_p1 = base.limit;
        I_p2 = base.limit;
        // test, line 52
        var /** number */ v_1 = base.cursor;
        // (, line 52
        // hop, line 52
        {
            var /** number */ c = base.cursor + 3;
            if (0 > c || c > base.limit)
            {
                return false;
            }
            base.cursor = c;
        }
        // setmark x, line 52
        I_x = base.cursor;
        base.cursor = v_1;
        // gopast, line 54
        golab0: while(true)
        {
            lab1: {
                if (!(base.in_grouping(g_v, 97, 252)))
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
        // gopast, line 54
        golab2: while(true)
        {
            lab3: {
                if (!(base.out_grouping(g_v, 97, 252)))
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
        // setmark p1, line 54
        I_p1 = base.cursor;
        // try, line 55
        lab4: {
            // (, line 55
            if (!(I_p1 < I_x))
            {
                break lab4;
            }
            I_p1 = I_x;
        }
        // gopast, line 56
        golab5: while(true)
        {
            lab6: {
                if (!(base.in_grouping(g_v, 97, 252)))
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
        // gopast, line 56
        golab7: while(true)
        {
            lab8: {
                if (!(base.out_grouping(g_v, 97, 252)))
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
        // setmark p2, line 56
        I_p2 = base.cursor;
        return true;
    };

    /** @return {boolean} */
    function r_postlude() {
        var /** number */ among_var;
        // repeat, line 60
        replab0: while(true)
        {
            var /** number */ v_1 = base.cursor;
            lab1: {
                // (, line 60
                // [, line 62
                base.bra = base.cursor;
                // substring, line 62
                among_var = base.find_among(a_0);
                if (among_var == 0)
                {
                    break lab1;
                }
                // ], line 62
                base.ket = base.cursor;
                switch (among_var) {
                    case 0:
                        break lab1;
                    case 1:
                        // (, line 63
                        // <-, line 63
                        if (!base.slice_from("y"))
                        {
                            return false;
                        }
                        break;
                    case 2:
                        // (, line 64
                        // <-, line 64
                        if (!base.slice_from("u"))
                        {
                            return false;
                        }
                        break;
                    case 3:
                        // (, line 65
                        // <-, line 65
                        if (!base.slice_from("a"))
                        {
                            return false;
                        }
                        break;
                    case 4:
                        // (, line 66
                        // <-, line 66
                        if (!base.slice_from("o"))
                        {
                            return false;
                        }
                        break;
                    case 5:
                        // (, line 67
                        // <-, line 67
                        if (!base.slice_from("u"))
                        {
                            return false;
                        }
                        break;
                    case 6:
                        // (, line 68
                        // next, line 68
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
    function r_standard_suffix() {
        var /** number */ among_var;
        // (, line 78
        // do, line 79
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // (, line 79
            // [, line 80
            base.ket = base.cursor;
            // substring, line 80
            among_var = base.find_among_b(a_1);
            if (among_var == 0)
            {
                break lab0;
            }
            // ], line 80
            base.bra = base.cursor;
            // call R1, line 80
            if (!r_R1())
            {
                break lab0;
            }
            switch (among_var) {
                case 0:
                    break lab0;
                case 1:
                    // (, line 82
                    // delete, line 82
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
                case 2:
                    // (, line 85
                    // delete, line 85
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // try, line 86
                    var /** number */ v_2 = base.limit - base.cursor;
                    lab1: {
                        // (, line 86
                        // [, line 86
                        base.ket = base.cursor;
                        // literal, line 86
                        if (!(base.eq_s_b("s")))
                        {
                            base.cursor = base.limit - v_2;
                            break lab1;
                        }
                        // ], line 86
                        base.bra = base.cursor;
                        // literal, line 86
                        if (!(base.eq_s_b("nis")))
                        {
                            base.cursor = base.limit - v_2;
                            break lab1;
                        }
                        // delete, line 86
                        if (!base.slice_del())
                        {
                            return false;
                        }
                    }
                    break;
                case 3:
                    // (, line 89
                    if (!(base.in_grouping_b(g_s_ending, 98, 116)))
                    {
                        break lab0;
                    }
                    // delete, line 89
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
            }
        }
        base.cursor = base.limit - v_1;
        // do, line 93
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // (, line 93
            // [, line 94
            base.ket = base.cursor;
            // substring, line 94
            among_var = base.find_among_b(a_2);
            if (among_var == 0)
            {
                break lab2;
            }
            // ], line 94
            base.bra = base.cursor;
            // call R1, line 94
            if (!r_R1())
            {
                break lab2;
            }
            switch (among_var) {
                case 0:
                    break lab2;
                case 1:
                    // (, line 96
                    // delete, line 96
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
                case 2:
                    // (, line 99
                    if (!(base.in_grouping_b(g_st_ending, 98, 116)))
                    {
                        break lab2;
                    }
                    // hop, line 99
                    {
                        var /** number */ c = base.cursor - 3;
                        if (base.limit_backward > c || c > base.limit)
                        {
                            break lab2;
                        }
                        base.cursor = c;
                    }
                    // delete, line 99
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 103
        var /** number */ v_4 = base.limit - base.cursor;
        lab3: {
            // (, line 103
            // [, line 104
            base.ket = base.cursor;
            // substring, line 104
            among_var = base.find_among_b(a_4);
            if (among_var == 0)
            {
                break lab3;
            }
            // ], line 104
            base.bra = base.cursor;
            // call R2, line 104
            if (!r_R2())
            {
                break lab3;
            }
            switch (among_var) {
                case 0:
                    break lab3;
                case 1:
                    // (, line 106
                    // delete, line 106
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // try, line 107
                    var /** number */ v_5 = base.limit - base.cursor;
                    lab4: {
                        // (, line 107
                        // [, line 107
                        base.ket = base.cursor;
                        // literal, line 107
                        if (!(base.eq_s_b("ig")))
                        {
                            base.cursor = base.limit - v_5;
                            break lab4;
                        }
                        // ], line 107
                        base.bra = base.cursor;
                        // not, line 107
                        {
                            var /** number */ v_6 = base.limit - base.cursor;
                            lab5: {
                                // literal, line 107
                                if (!(base.eq_s_b("e")))
                                {
                                    break lab5;
                                }
                                base.cursor = base.limit - v_5;
                                break lab4;
                            }
                            base.cursor = base.limit - v_6;
                        }
                        // call R2, line 107
                        if (!r_R2())
                        {
                            base.cursor = base.limit - v_5;
                            break lab4;
                        }
                        // delete, line 107
                        if (!base.slice_del())
                        {
                            return false;
                        }
                    }
                    break;
                case 2:
                    // (, line 110
                    // not, line 110
                    {
                        var /** number */ v_7 = base.limit - base.cursor;
                        lab6: {
                            // literal, line 110
                            if (!(base.eq_s_b("e")))
                            {
                                break lab6;
                            }
                            break lab3;
                        }
                        base.cursor = base.limit - v_7;
                    }
                    // delete, line 110
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
                case 3:
                    // (, line 113
                    // delete, line 113
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // try, line 114
                    var /** number */ v_8 = base.limit - base.cursor;
                    lab7: {
                        // (, line 114
                        // [, line 115
                        base.ket = base.cursor;
                        // or, line 115
                        lab8: {
                            var /** number */ v_9 = base.limit - base.cursor;
                            lab9: {
                                // literal, line 115
                                if (!(base.eq_s_b("er")))
                                {
                                    break lab9;
                                }
                                break lab8;
                            }
                            base.cursor = base.limit - v_9;
                            // literal, line 115
                            if (!(base.eq_s_b("en")))
                            {
                                base.cursor = base.limit - v_8;
                                break lab7;
                            }
                        }
                        // ], line 115
                        base.bra = base.cursor;
                        // call R1, line 115
                        if (!r_R1())
                        {
                            base.cursor = base.limit - v_8;
                            break lab7;
                        }
                        // delete, line 115
                        if (!base.slice_del())
                        {
                            return false;
                        }
                    }
                    break;
                case 4:
                    // (, line 119
                    // delete, line 119
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // try, line 120
                    var /** number */ v_10 = base.limit - base.cursor;
                    lab10: {
                        // (, line 120
                        // [, line 121
                        base.ket = base.cursor;
                        // substring, line 121
                        among_var = base.find_among_b(a_3);
                        if (among_var == 0)
                        {
                            base.cursor = base.limit - v_10;
                            break lab10;
                        }
                        // ], line 121
                        base.bra = base.cursor;
                        // call R2, line 121
                        if (!r_R2())
                        {
                            base.cursor = base.limit - v_10;
                            break lab10;
                        }
                        switch (among_var) {
                            case 0:
                                base.cursor = base.limit - v_10;
                                break lab10;
                            case 1:
                                // (, line 123
                                // delete, line 123
                                if (!base.slice_del())
                                {
                                    return false;
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        base.cursor = base.limit - v_4;
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 133
        // do, line 134
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call prelude, line 134
            if (!r_prelude())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // do, line 135
        var /** number */ v_2 = base.cursor;
        lab1: {
            // call mark_regions, line 135
            if (!r_mark_regions())
            {
                break lab1;
            }
        }
        base.cursor = v_2;
        // backwards, line 136
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // do, line 137
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // call standard_suffix, line 137
            if (!r_standard_suffix())
            {
                break lab2;
            }
        }
        base.cursor = base.limit - v_3;
        base.cursor = base.limit_backward;        // do, line 138
        var /** number */ v_4 = base.cursor;
        lab3: {
            // call postlude, line 138
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
