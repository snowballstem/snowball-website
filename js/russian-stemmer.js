// This file was generated automatically by the Snowball to JSX compiler
// http://snowballstem.org/

function RussianStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["\u0432", -1, 1],
        ["\u0438\u0432", 0, 2],
        ["\u044B\u0432", 0, 2],
        ["\u0432\u0448\u0438", -1, 1],
        ["\u0438\u0432\u0448\u0438", 3, 2],
        ["\u044B\u0432\u0448\u0438", 3, 2],
        ["\u0432\u0448\u0438\u0441\u044C", -1, 1],
        ["\u0438\u0432\u0448\u0438\u0441\u044C", 6, 2],
        ["\u044B\u0432\u0448\u0438\u0441\u044C", 6, 2]
    ];

    /** @const */ var a_1 = [
        ["\u0435\u0435", -1, 1],
        ["\u0438\u0435", -1, 1],
        ["\u043E\u0435", -1, 1],
        ["\u044B\u0435", -1, 1],
        ["\u0438\u043C\u0438", -1, 1],
        ["\u044B\u043C\u0438", -1, 1],
        ["\u0435\u0439", -1, 1],
        ["\u0438\u0439", -1, 1],
        ["\u043E\u0439", -1, 1],
        ["\u044B\u0439", -1, 1],
        ["\u0435\u043C", -1, 1],
        ["\u0438\u043C", -1, 1],
        ["\u043E\u043C", -1, 1],
        ["\u044B\u043C", -1, 1],
        ["\u0435\u0433\u043E", -1, 1],
        ["\u043E\u0433\u043E", -1, 1],
        ["\u0435\u043C\u0443", -1, 1],
        ["\u043E\u043C\u0443", -1, 1],
        ["\u0438\u0445", -1, 1],
        ["\u044B\u0445", -1, 1],
        ["\u0435\u044E", -1, 1],
        ["\u043E\u044E", -1, 1],
        ["\u0443\u044E", -1, 1],
        ["\u044E\u044E", -1, 1],
        ["\u0430\u044F", -1, 1],
        ["\u044F\u044F", -1, 1]
    ];

    /** @const */ var a_2 = [
        ["\u0435\u043C", -1, 1],
        ["\u043D\u043D", -1, 1],
        ["\u0432\u0448", -1, 1],
        ["\u0438\u0432\u0448", 2, 2],
        ["\u044B\u0432\u0448", 2, 2],
        ["\u0449", -1, 1],
        ["\u044E\u0449", 5, 1],
        ["\u0443\u044E\u0449", 6, 2]
    ];

    /** @const */ var a_3 = [
        ["\u0441\u044C", -1, 1],
        ["\u0441\u044F", -1, 1]
    ];

    /** @const */ var a_4 = [
        ["\u043B\u0430", -1, 1],
        ["\u0438\u043B\u0430", 0, 2],
        ["\u044B\u043B\u0430", 0, 2],
        ["\u043D\u0430", -1, 1],
        ["\u0435\u043D\u0430", 3, 2],
        ["\u0435\u0442\u0435", -1, 1],
        ["\u0438\u0442\u0435", -1, 2],
        ["\u0439\u0442\u0435", -1, 1],
        ["\u0435\u0439\u0442\u0435", 7, 2],
        ["\u0443\u0439\u0442\u0435", 7, 2],
        ["\u043B\u0438", -1, 1],
        ["\u0438\u043B\u0438", 10, 2],
        ["\u044B\u043B\u0438", 10, 2],
        ["\u0439", -1, 1],
        ["\u0435\u0439", 13, 2],
        ["\u0443\u0439", 13, 2],
        ["\u043B", -1, 1],
        ["\u0438\u043B", 16, 2],
        ["\u044B\u043B", 16, 2],
        ["\u0435\u043C", -1, 1],
        ["\u0438\u043C", -1, 2],
        ["\u044B\u043C", -1, 2],
        ["\u043D", -1, 1],
        ["\u0435\u043D", 22, 2],
        ["\u043B\u043E", -1, 1],
        ["\u0438\u043B\u043E", 24, 2],
        ["\u044B\u043B\u043E", 24, 2],
        ["\u043D\u043E", -1, 1],
        ["\u0435\u043D\u043E", 27, 2],
        ["\u043D\u043D\u043E", 27, 1],
        ["\u0435\u0442", -1, 1],
        ["\u0443\u0435\u0442", 30, 2],
        ["\u0438\u0442", -1, 2],
        ["\u044B\u0442", -1, 2],
        ["\u044E\u0442", -1, 1],
        ["\u0443\u044E\u0442", 34, 2],
        ["\u044F\u0442", -1, 2],
        ["\u043D\u044B", -1, 1],
        ["\u0435\u043D\u044B", 37, 2],
        ["\u0442\u044C", -1, 1],
        ["\u0438\u0442\u044C", 39, 2],
        ["\u044B\u0442\u044C", 39, 2],
        ["\u0435\u0448\u044C", -1, 1],
        ["\u0438\u0448\u044C", -1, 2],
        ["\u044E", -1, 2],
        ["\u0443\u044E", 44, 2]
    ];

    /** @const */ var a_5 = [
        ["\u0430", -1, 1],
        ["\u0435\u0432", -1, 1],
        ["\u043E\u0432", -1, 1],
        ["\u0435", -1, 1],
        ["\u0438\u0435", 3, 1],
        ["\u044C\u0435", 3, 1],
        ["\u0438", -1, 1],
        ["\u0435\u0438", 6, 1],
        ["\u0438\u0438", 6, 1],
        ["\u0430\u043C\u0438", 6, 1],
        ["\u044F\u043C\u0438", 6, 1],
        ["\u0438\u044F\u043C\u0438", 10, 1],
        ["\u0439", -1, 1],
        ["\u0435\u0439", 12, 1],
        ["\u0438\u0435\u0439", 13, 1],
        ["\u0438\u0439", 12, 1],
        ["\u043E\u0439", 12, 1],
        ["\u0430\u043C", -1, 1],
        ["\u0435\u043C", -1, 1],
        ["\u0438\u0435\u043C", 18, 1],
        ["\u043E\u043C", -1, 1],
        ["\u044F\u043C", -1, 1],
        ["\u0438\u044F\u043C", 21, 1],
        ["\u043E", -1, 1],
        ["\u0443", -1, 1],
        ["\u0430\u0445", -1, 1],
        ["\u044F\u0445", -1, 1],
        ["\u0438\u044F\u0445", 26, 1],
        ["\u044B", -1, 1],
        ["\u044C", -1, 1],
        ["\u044E", -1, 1],
        ["\u0438\u044E", 30, 1],
        ["\u044C\u044E", 30, 1],
        ["\u044F", -1, 1],
        ["\u0438\u044F", 33, 1],
        ["\u044C\u044F", 33, 1]
    ];

    /** @const */ var a_6 = [
        ["\u043E\u0441\u0442", -1, 1],
        ["\u043E\u0441\u0442\u044C", -1, 1]
    ];

    /** @const */ var a_7 = [
        ["\u0435\u0439\u0448\u0435", -1, 1],
        ["\u043D", -1, 2],
        ["\u0435\u0439\u0448", -1, 1],
        ["\u044C", -1, 3]
    ];

    /** @const */ var /** Array<int> */ g_v = [33, 65, 8, 232];

    var /** number */ I_p2 = 0;
    var /** number */ I_pV = 0;


    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 57
        I_pV = base.limit;
        I_p2 = base.limit;
        // do, line 61
        var /** number */ v_1 = base.cursor;
        lab0: {
            // (, line 61
            // gopast, line 62
            golab1: while(true)
            {
                lab2: {
                    if (!(base.in_grouping(g_v, 1072, 1103)))
                    {
                        break lab2;
                    }
                    break golab1;
                }
                if (base.cursor >= base.limit)
                {
                    break lab0;
                }
                base.cursor++;
            }
            // setmark pV, line 62
            I_pV = base.cursor;
            // gopast, line 62
            golab3: while(true)
            {
                lab4: {
                    if (!(base.out_grouping(g_v, 1072, 1103)))
                    {
                        break lab4;
                    }
                    break golab3;
                }
                if (base.cursor >= base.limit)
                {
                    break lab0;
                }
                base.cursor++;
            }
            // gopast, line 63
            golab5: while(true)
            {
                lab6: {
                    if (!(base.in_grouping(g_v, 1072, 1103)))
                    {
                        break lab6;
                    }
                    break golab5;
                }
                if (base.cursor >= base.limit)
                {
                    break lab0;
                }
                base.cursor++;
            }
            // gopast, line 63
            golab7: while(true)
            {
                lab8: {
                    if (!(base.out_grouping(g_v, 1072, 1103)))
                    {
                        break lab8;
                    }
                    break golab7;
                }
                if (base.cursor >= base.limit)
                {
                    break lab0;
                }
                base.cursor++;
            }
            // setmark p2, line 63
            I_p2 = base.cursor;
        }
        base.cursor = v_1;
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
    function r_perfective_gerund() {
        var /** number */ among_var;
        // (, line 71
        // [, line 72
        base.ket = base.cursor;
        // substring, line 72
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 72
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 76
                // or, line 76
                lab0: {
                    var /** number */ v_1 = base.limit - base.cursor;
                    lab1: {
                        // literal, line 76
                        if (!(base.eq_s_b("\u0430")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    // literal, line 76
                    if (!(base.eq_s_b("\u044F")))
                    {
                        return false;
                    }
                }
                // delete, line 76
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 83
                // delete, line 83
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_adjective() {
        var /** number */ among_var;
        // (, line 87
        // [, line 88
        base.ket = base.cursor;
        // substring, line 88
        among_var = base.find_among_b(a_1);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 88
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 97
                // delete, line 97
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_adjectival() {
        var /** number */ among_var;
        // (, line 101
        // call adjective, line 102
        if (!r_adjective())
        {
            return false;
        }
        // try, line 109
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // (, line 109
            // [, line 110
            base.ket = base.cursor;
            // substring, line 110
            among_var = base.find_among_b(a_2);
            if (among_var == 0)
            {
                base.cursor = base.limit - v_1;
                break lab0;
            }
            // ], line 110
            base.bra = base.cursor;
            switch (among_var) {
                case 0:
                    base.cursor = base.limit - v_1;
                    break lab0;
                case 1:
                    // (, line 115
                    // or, line 115
                    lab1: {
                        var /** number */ v_2 = base.limit - base.cursor;
                        lab2: {
                            // literal, line 115
                            if (!(base.eq_s_b("\u0430")))
                            {
                                break lab2;
                            }
                            break lab1;
                        }
                        base.cursor = base.limit - v_2;
                        // literal, line 115
                        if (!(base.eq_s_b("\u044F")))
                        {
                            base.cursor = base.limit - v_1;
                            break lab0;
                        }
                    }
                    // delete, line 115
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
                case 2:
                    // (, line 122
                    // delete, line 122
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_reflexive() {
        var /** number */ among_var;
        // (, line 128
        // [, line 129
        base.ket = base.cursor;
        // substring, line 129
        among_var = base.find_among_b(a_3);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 129
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 132
                // delete, line 132
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_verb() {
        var /** number */ among_var;
        // (, line 136
        // [, line 137
        base.ket = base.cursor;
        // substring, line 137
        among_var = base.find_among_b(a_4);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 137
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 143
                // or, line 143
                lab0: {
                    var /** number */ v_1 = base.limit - base.cursor;
                    lab1: {
                        // literal, line 143
                        if (!(base.eq_s_b("\u0430")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    // literal, line 143
                    if (!(base.eq_s_b("\u044F")))
                    {
                        return false;
                    }
                }
                // delete, line 143
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 151
                // delete, line 151
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_noun() {
        var /** number */ among_var;
        // (, line 159
        // [, line 160
        base.ket = base.cursor;
        // substring, line 160
        among_var = base.find_among_b(a_5);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 160
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 167
                // delete, line 167
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_derivational() {
        var /** number */ among_var;
        // (, line 175
        // [, line 176
        base.ket = base.cursor;
        // substring, line 176
        among_var = base.find_among_b(a_6);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 176
        base.bra = base.cursor;
        // call R2, line 176
        if (!r_R2())
        {
            return false;
        }
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 179
                // delete, line 179
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_tidy_up() {
        var /** number */ among_var;
        // (, line 183
        // [, line 184
        base.ket = base.cursor;
        // substring, line 184
        among_var = base.find_among_b(a_7);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 184
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 188
                // delete, line 188
                if (!base.slice_del())
                {
                    return false;
                }
                // [, line 189
                base.ket = base.cursor;
                // literal, line 189
                if (!(base.eq_s_b("\u043D")))
                {
                    return false;
                }
                // ], line 189
                base.bra = base.cursor;
                // literal, line 189
                if (!(base.eq_s_b("\u043D")))
                {
                    return false;
                }
                // delete, line 189
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 192
                // literal, line 192
                if (!(base.eq_s_b("\u043D")))
                {
                    return false;
                }
                // delete, line 192
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 194
                // delete, line 194
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 199
        // do, line 201
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call mark_regions, line 201
            if (!r_mark_regions())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // backwards, line 202
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // setlimit, line 202
        var /** number */ v_2 = base.limit - base.cursor;
        // tomark, line 202
        if (base.cursor < I_pV)
        {
            return false;
        }
        base.cursor = I_pV;
        var /** number */ v_3 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_2;
        // (, line 202
        // do, line 203
        var /** number */ v_4 = base.limit - base.cursor;
        lab1: {
            // (, line 203
            // or, line 204
            lab2: {
                var /** number */ v_5 = base.limit - base.cursor;
                lab3: {
                    // call perfective_gerund, line 204
                    if (!r_perfective_gerund())
                    {
                        break lab3;
                    }
                    break lab2;
                }
                base.cursor = base.limit - v_5;
                // (, line 205
                // try, line 205
                var /** number */ v_6 = base.limit - base.cursor;
                lab4: {
                    // call reflexive, line 205
                    if (!r_reflexive())
                    {
                        base.cursor = base.limit - v_6;
                        break lab4;
                    }
                }
                // or, line 206
                lab5: {
                    var /** number */ v_7 = base.limit - base.cursor;
                    lab6: {
                        // call adjectival, line 206
                        if (!r_adjectival())
                        {
                            break lab6;
                        }
                        break lab5;
                    }
                    base.cursor = base.limit - v_7;
                    lab7: {
                        // call verb, line 206
                        if (!r_verb())
                        {
                            break lab7;
                        }
                        break lab5;
                    }
                    base.cursor = base.limit - v_7;
                    // call noun, line 206
                    if (!r_noun())
                    {
                        break lab1;
                    }
                }
            }
        }
        base.cursor = base.limit - v_4;
        // try, line 209
        var /** number */ v_8 = base.limit - base.cursor;
        lab8: {
            // (, line 209
            // [, line 209
            base.ket = base.cursor;
            // literal, line 209
            if (!(base.eq_s_b("\u0438")))
            {
                base.cursor = base.limit - v_8;
                break lab8;
            }
            // ], line 209
            base.bra = base.cursor;
            // delete, line 209
            if (!base.slice_del())
            {
                return false;
            }
        }
        // do, line 212
        var /** number */ v_9 = base.limit - base.cursor;
        lab9: {
            // call derivational, line 212
            if (!r_derivational())
            {
                break lab9;
            }
        }
        base.cursor = base.limit - v_9;
        // do, line 213
        var /** number */ v_10 = base.limit - base.cursor;
        lab10: {
            // call tidy_up, line 213
            if (!r_tidy_up())
            {
                break lab10;
            }
        }
        base.cursor = base.limit - v_10;
        base.limit_backward = v_3;
        base.cursor = base.limit_backward;        return true;
    };

    this.stemWord = function(word) {
	base.setCurrent(word);
	this.stem();
        return base.getCurrent();
    };
};
