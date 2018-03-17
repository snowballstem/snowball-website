// This file was generated automatically by the Snowball to Javascript compiler
// http://snowballstem.org/

/**@constructor*/
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
        // (, line 60
        I_pV = base.limit;
        I_p2 = base.limit;
        // do, line 64
        var /** number */ v_1 = base.cursor;
        lab0: {
            // (, line 64
            // gopast, line 65
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
            // setmark pV, line 65
            I_pV = base.cursor;
            // gopast, line 65
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
            // gopast, line 66
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
            // gopast, line 66
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
            // setmark p2, line 66
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
        // (, line 74
        // [, line 75
        base.ket = base.cursor;
        // substring, line 75
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 75
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 79
                // or, line 79
                lab0: {
                    var /** number */ v_1 = base.limit - base.cursor;
                    lab1: {
                        // literal, line 79
                        if (!(base.eq_s_b("\u0430")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    // literal, line 79
                    if (!(base.eq_s_b("\u044F")))
                    {
                        return false;
                    }
                }
                // delete, line 79
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 86
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
    function r_adjective() {
        var /** number */ among_var;
        // (, line 90
        // [, line 91
        base.ket = base.cursor;
        // substring, line 91
        among_var = base.find_among_b(a_1);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 91
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 100
                // delete, line 100
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
        // (, line 104
        // call adjective, line 105
        if (!r_adjective())
        {
            return false;
        }
        // try, line 112
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // (, line 112
            // [, line 113
            base.ket = base.cursor;
            // substring, line 113
            among_var = base.find_among_b(a_2);
            if (among_var == 0)
            {
                base.cursor = base.limit - v_1;
                break lab0;
            }
            // ], line 113
            base.bra = base.cursor;
            switch (among_var) {
                case 0:
                    base.cursor = base.limit - v_1;
                    break lab0;
                case 1:
                    // (, line 118
                    // or, line 118
                    lab1: {
                        var /** number */ v_2 = base.limit - base.cursor;
                        lab2: {
                            // literal, line 118
                            if (!(base.eq_s_b("\u0430")))
                            {
                                break lab2;
                            }
                            break lab1;
                        }
                        base.cursor = base.limit - v_2;
                        // literal, line 118
                        if (!(base.eq_s_b("\u044F")))
                        {
                            base.cursor = base.limit - v_1;
                            break lab0;
                        }
                    }
                    // delete, line 118
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
                case 2:
                    // (, line 125
                    // delete, line 125
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
        // (, line 131
        // [, line 132
        base.ket = base.cursor;
        // substring, line 132
        among_var = base.find_among_b(a_3);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 132
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 135
                // delete, line 135
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
        // (, line 139
        // [, line 140
        base.ket = base.cursor;
        // substring, line 140
        among_var = base.find_among_b(a_4);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 140
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 146
                // or, line 146
                lab0: {
                    var /** number */ v_1 = base.limit - base.cursor;
                    lab1: {
                        // literal, line 146
                        if (!(base.eq_s_b("\u0430")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    // literal, line 146
                    if (!(base.eq_s_b("\u044F")))
                    {
                        return false;
                    }
                }
                // delete, line 146
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 154
                // delete, line 154
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
        // (, line 162
        // [, line 163
        base.ket = base.cursor;
        // substring, line 163
        among_var = base.find_among_b(a_5);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 163
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 170
                // delete, line 170
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
        // (, line 178
        // [, line 179
        base.ket = base.cursor;
        // substring, line 179
        among_var = base.find_among_b(a_6);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 179
        base.bra = base.cursor;
        // call R2, line 179
        if (!r_R2())
        {
            return false;
        }
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 182
                // delete, line 182
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
        // (, line 186
        // [, line 187
        base.ket = base.cursor;
        // substring, line 187
        among_var = base.find_among_b(a_7);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 187
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 191
                // delete, line 191
                if (!base.slice_del())
                {
                    return false;
                }
                // [, line 192
                base.ket = base.cursor;
                // literal, line 192
                if (!(base.eq_s_b("\u043D")))
                {
                    return false;
                }
                // ], line 192
                base.bra = base.cursor;
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
            case 2:
                // (, line 195
                // literal, line 195
                if (!(base.eq_s_b("\u043D")))
                {
                    return false;
                }
                // delete, line 195
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 197
                // delete, line 197
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 202
        // do, line 206
        var /** number */ v_1 = base.cursor;
        lab0: {
            // repeat, line 206
            replab1: while(true)
            {
                var /** number */ v_2 = base.cursor;
                lab2: {
                    // (, line 206
                    // goto, line 206
                    golab3: while(true)
                    {
                        var /** number */ v_3 = base.cursor;
                        lab4: {
                            // (, line 206
                            // [, line 206
                            base.bra = base.cursor;
                            // literal, line 206
                            if (!(base.eq_s("\u0451")))
                            {
                                break lab4;
                            }
                            // ], line 206
                            base.ket = base.cursor;
                            base.cursor = v_3;
                            break golab3;
                        }
                        base.cursor = v_3;
                        if (base.cursor >= base.limit)
                        {
                            break lab2;
                        }
                        base.cursor++;
                    }
                    // <-, line 206
                    if (!base.slice_from("\u0435"))
                    {
                        return false;
                    }
                    continue replab1;
                }
                base.cursor = v_2;
                break replab1;
            }
        }
        base.cursor = v_1;
        // do, line 208
        var /** number */ v_4 = base.cursor;
        lab5: {
            // call mark_regions, line 208
            if (!r_mark_regions())
            {
                break lab5;
            }
        }
        base.cursor = v_4;
        // backwards, line 209
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // setlimit, line 209
        var /** number */ v_5 = base.limit - base.cursor;
        // tomark, line 209
        if (base.cursor < I_pV)
        {
            return false;
        }
        base.cursor = I_pV;
        var /** number */ v_6 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_5;
        // (, line 209
        // do, line 210
        var /** number */ v_7 = base.limit - base.cursor;
        lab6: {
            // (, line 210
            // or, line 211
            lab7: {
                var /** number */ v_8 = base.limit - base.cursor;
                lab8: {
                    // call perfective_gerund, line 211
                    if (!r_perfective_gerund())
                    {
                        break lab8;
                    }
                    break lab7;
                }
                base.cursor = base.limit - v_8;
                // (, line 212
                // try, line 212
                var /** number */ v_9 = base.limit - base.cursor;
                lab9: {
                    // call reflexive, line 212
                    if (!r_reflexive())
                    {
                        base.cursor = base.limit - v_9;
                        break lab9;
                    }
                }
                // or, line 213
                lab10: {
                    var /** number */ v_10 = base.limit - base.cursor;
                    lab11: {
                        // call adjectival, line 213
                        if (!r_adjectival())
                        {
                            break lab11;
                        }
                        break lab10;
                    }
                    base.cursor = base.limit - v_10;
                    lab12: {
                        // call verb, line 213
                        if (!r_verb())
                        {
                            break lab12;
                        }
                        break lab10;
                    }
                    base.cursor = base.limit - v_10;
                    // call noun, line 213
                    if (!r_noun())
                    {
                        break lab6;
                    }
                }
            }
        }
        base.cursor = base.limit - v_7;
        // try, line 216
        var /** number */ v_11 = base.limit - base.cursor;
        lab13: {
            // (, line 216
            // [, line 216
            base.ket = base.cursor;
            // literal, line 216
            if (!(base.eq_s_b("\u0438")))
            {
                base.cursor = base.limit - v_11;
                break lab13;
            }
            // ], line 216
            base.bra = base.cursor;
            // delete, line 216
            if (!base.slice_del())
            {
                return false;
            }
        }
        // do, line 219
        var /** number */ v_12 = base.limit - base.cursor;
        lab14: {
            // call derivational, line 219
            if (!r_derivational())
            {
                break lab14;
            }
        }
        base.cursor = base.limit - v_12;
        // do, line 220
        var /** number */ v_13 = base.limit - base.cursor;
        lab15: {
            // call tidy_up, line 220
            if (!r_tidy_up())
            {
                break lab15;
            }
        }
        base.cursor = base.limit - v_13;
        base.limit_backward = v_6;
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
window['RussianStemmer'] = RussianStemmer;
