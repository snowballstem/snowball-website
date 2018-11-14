// This file was generated automatically by the Snowball to Javascript compiler
// http://snowballstem.org/

/**@constructor*/
function DanishStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["hed", -1, 1],
        ["ethed", 0, 1],
        ["ered", -1, 1],
        ["e", -1, 1],
        ["erede", 3, 1],
        ["ende", 3, 1],
        ["erende", 5, 1],
        ["ene", 3, 1],
        ["erne", 3, 1],
        ["ere", 3, 1],
        ["en", -1, 1],
        ["heden", 10, 1],
        ["eren", 10, 1],
        ["er", -1, 1],
        ["heder", 13, 1],
        ["erer", 13, 1],
        ["s", -1, 2],
        ["heds", 16, 1],
        ["es", 16, 1],
        ["endes", 18, 1],
        ["erendes", 19, 1],
        ["enes", 18, 1],
        ["ernes", 18, 1],
        ["eres", 18, 1],
        ["ens", 16, 1],
        ["hedens", 24, 1],
        ["erens", 24, 1],
        ["ers", 16, 1],
        ["ets", 16, 1],
        ["erets", 28, 1],
        ["et", -1, 1],
        ["eret", 30, 1]
    ];

    /** @const */ var a_1 = [
        ["gd", -1, -1],
        ["dt", -1, -1],
        ["gt", -1, -1],
        ["kt", -1, -1]
    ];

    /** @const */ var a_2 = [
        ["ig", -1, 1],
        ["lig", 0, 1],
        ["elig", 1, 1],
        ["els", -1, 1],
        ["l\u00F8st", -1, 2]
    ];

    /** @const */ var /** Array<int> */ g_c = [119, 223, 119, 1];

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128];

    /** @const */ var /** Array<int> */ g_s_ending = [239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16];

    var /** number */ I_x = 0;
    var /** number */ I_p1 = 0;
    var /** string */ S_ch = '';


    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 31
        I_p1 = base.limit;
        // test, line 35
        var /** number */ v_1 = base.cursor;
        // (, line 35
        // hop, line 35
        {
            var /** number */ c1 = base.cursor + 3;
            if (0 > c1 || c1 > base.limit)
            {
                return false;
            }
            base.cursor = c1;
        }
        // setmark x, line 35
        I_x = base.cursor;
        base.cursor = v_1;
        // goto, line 36
        golab0: while(true)
        {
            var /** number */ v_2 = base.cursor;
            lab1: {
                if (!(base.in_grouping(g_v, 97, 248)))
                {
                    break lab1;
                }
                base.cursor = v_2;
                break golab0;
            }
            base.cursor = v_2;
            if (base.cursor >= base.limit)
            {
                return false;
            }
            base.cursor++;
        }
        // gopast, line 36
        golab2: while(true)
        {
            lab3: {
                if (!(base.out_grouping(g_v, 97, 248)))
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
        // setmark p1, line 36
        I_p1 = base.cursor;
        // try, line 37
        lab4: {
            // (, line 37
            if (!(I_p1 < I_x))
            {
                break lab4;
            }
            I_p1 = I_x;
        }
        return true;
    };

    /** @return {boolean} */
    function r_main_suffix() {
        var /** number */ among_var;
        // (, line 42
        // setlimit, line 43
        if (base.cursor < I_p1)
        {
            return false;
        }
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = I_p1;
        // (, line 43
        // [, line 43
        base.ket = base.cursor;
        // substring, line 43
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 43
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 1:
                // (, line 50
                // delete, line 50
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 52
                if (!(base.in_grouping_b(g_s_ending, 97, 229)))
                {
                    return false;
                }
                // delete, line 52
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_consonant_pair() {
        // (, line 56
        // test, line 57
        var /** number */ v_1 = base.limit - base.cursor;
        // (, line 57
        // setlimit, line 58
        if (base.cursor < I_p1)
        {
            return false;
        }
        var /** number */ v_3 = base.limit_backward;
        base.limit_backward = I_p1;
        // (, line 58
        // [, line 58
        base.ket = base.cursor;
        // substring, line 58
        if (base.find_among_b(a_1) == 0)
        {
            base.limit_backward = v_3;
            return false;
        }
        // ], line 58
        base.bra = base.cursor;
        base.limit_backward = v_3;
        base.cursor = base.limit - v_1;
        // next, line 64
        if (base.cursor <= base.limit_backward)
        {
            return false;
        }
        base.cursor--;
        // ], line 64
        base.bra = base.cursor;
        // delete, line 64
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_other_suffix() {
        var /** number */ among_var;
        // (, line 67
        // do, line 68
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // (, line 68
            // [, line 68
            base.ket = base.cursor;
            // literal, line 68
            if (!(base.eq_s_b("st")))
            {
                break lab0;
            }
            // ], line 68
            base.bra = base.cursor;
            // literal, line 68
            if (!(base.eq_s_b("ig")))
            {
                break lab0;
            }
            // delete, line 68
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_1;
        // setlimit, line 69
        if (base.cursor < I_p1)
        {
            return false;
        }
        var /** number */ v_3 = base.limit_backward;
        base.limit_backward = I_p1;
        // (, line 69
        // [, line 69
        base.ket = base.cursor;
        // substring, line 69
        among_var = base.find_among_b(a_2);
        if (among_var == 0)
        {
            base.limit_backward = v_3;
            return false;
        }
        // ], line 69
        base.bra = base.cursor;
        base.limit_backward = v_3;
        switch (among_var) {
            case 1:
                // (, line 72
                // delete, line 72
                if (!base.slice_del())
                {
                    return false;
                }
                // do, line 72
                var /** number */ v_4 = base.limit - base.cursor;
                lab1: {
                    // call consonant_pair, line 72
                    if (!r_consonant_pair())
                    {
                        break lab1;
                    }
                }
                base.cursor = base.limit - v_4;
                break;
            case 2:
                // (, line 74
                // <-, line 74
                if (!base.slice_from("l\u00F8s"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_undouble() {
        // (, line 77
        // setlimit, line 78
        if (base.cursor < I_p1)
        {
            return false;
        }
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = I_p1;
        // (, line 78
        // [, line 78
        base.ket = base.cursor;
        if (!(base.in_grouping_b(g_c, 98, 122)))
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 78
        base.bra = base.cursor;
        // -> ch, line 78
        S_ch = base.slice_to();
        if (S_ch == '')
        {
            return false;
        }
        base.limit_backward = v_2;
        // name ch, line 79
        if (!(base.eq_s_b(S_ch)))
        {
            return false;
        }
        // delete, line 80
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 84
        // do, line 86
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call mark_regions, line 86
            if (!r_mark_regions())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // backwards, line 87
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 87
        // do, line 88
        var /** number */ v_2 = base.limit - base.cursor;
        lab1: {
            // call main_suffix, line 88
            if (!r_main_suffix())
            {
                break lab1;
            }
        }
        base.cursor = base.limit - v_2;
        // do, line 89
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // call consonant_pair, line 89
            if (!r_consonant_pair())
            {
                break lab2;
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 90
        var /** number */ v_4 = base.limit - base.cursor;
        lab3: {
            // call other_suffix, line 90
            if (!r_other_suffix())
            {
                break lab3;
            }
        }
        base.cursor = base.limit - v_4;
        // do, line 91
        var /** number */ v_5 = base.limit - base.cursor;
        lab4: {
            // call undouble, line 91
            if (!r_undouble())
            {
                break lab4;
            }
        }
        base.cursor = base.limit - v_5;
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
window['DanishStemmer'] = DanishStemmer;
