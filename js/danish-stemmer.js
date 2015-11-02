// This file was generated automatically by the Snowball to JSX compiler
// http://snowballstem.org/

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

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128];

    /** @const */ var /** Array<int> */ g_s_ending = [239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16];

    var /** number */ I_x = 0;
    var /** number */ I_p1 = 0;
    var /** string */ S_ch = '';


    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 29
        I_p1 = base.limit;
        // test, line 33
        var /** number */ v_1 = base.cursor;
        // (, line 33
        // hop, line 33
        {
            var /** number */ c = base.cursor + 3;
            if (0 > c || c > base.limit)
            {
                return false;
            }
            base.cursor = c;
        }
        // setmark x, line 33
        I_x = base.cursor;
        base.cursor = v_1;
        // goto, line 34
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
        // gopast, line 34
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
        // setmark p1, line 34
        I_p1 = base.cursor;
        // try, line 35
        lab4: {
            // (, line 35
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
        // (, line 40
        // setlimit, line 41
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 41
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 41
        // [, line 41
        base.ket = base.cursor;
        // substring, line 41
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 41
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 48
                // delete, line 48
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 50
                if (!(base.in_grouping_b(g_s_ending, 97, 229)))
                {
                    return false;
                }
                // delete, line 50
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
        // (, line 54
        // test, line 55
        var /** number */ v_1 = base.limit - base.cursor;
        // (, line 55
        // setlimit, line 56
        var /** number */ v_2 = base.limit - base.cursor;
        // tomark, line 56
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_3 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_2;
        // (, line 56
        // [, line 56
        base.ket = base.cursor;
        // substring, line 56
        if (base.find_among_b(a_1) == 0)
        {
            base.limit_backward = v_3;
            return false;
        }
        // ], line 56
        base.bra = base.cursor;
        base.limit_backward = v_3;
        base.cursor = base.limit - v_1;
        // next, line 62
        if (base.cursor <= base.limit_backward)
        {
            return false;
        }
        base.cursor--;
        // ], line 62
        base.bra = base.cursor;
        // delete, line 62
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_other_suffix() {
        var /** number */ among_var;
        // (, line 65
        // do, line 66
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // (, line 66
            // [, line 66
            base.ket = base.cursor;
            // literal, line 66
            if (!(base.eq_s_b("st")))
            {
                break lab0;
            }
            // ], line 66
            base.bra = base.cursor;
            // literal, line 66
            if (!(base.eq_s_b("ig")))
            {
                break lab0;
            }
            // delete, line 66
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_1;
        // setlimit, line 67
        var /** number */ v_2 = base.limit - base.cursor;
        // tomark, line 67
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_3 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_2;
        // (, line 67
        // [, line 67
        base.ket = base.cursor;
        // substring, line 67
        among_var = base.find_among_b(a_2);
        if (among_var == 0)
        {
            base.limit_backward = v_3;
            return false;
        }
        // ], line 67
        base.bra = base.cursor;
        base.limit_backward = v_3;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 70
                // delete, line 70
                if (!base.slice_del())
                {
                    return false;
                }
                // do, line 70
                var /** number */ v_4 = base.limit - base.cursor;
                lab1: {
                    // call consonant_pair, line 70
                    if (!r_consonant_pair())
                    {
                        break lab1;
                    }
                }
                base.cursor = base.limit - v_4;
                break;
            case 2:
                // (, line 72
                // <-, line 72
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
        // (, line 75
        // setlimit, line 76
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 76
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 76
        // [, line 76
        base.ket = base.cursor;
        if (!(base.out_grouping_b(g_v, 97, 248)))
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 76
        base.bra = base.cursor;
        // -> ch, line 76
        S_ch = base.slice_to();
        if (S_ch == '')
        {
            return false;
        }
        base.limit_backward = v_2;
        // name ch, line 77
        if (!(base.eq_s_b(S_ch)))
        {
            return false;
        }
        // delete, line 78
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 82
        // do, line 84
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call mark_regions, line 84
            if (!r_mark_regions())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // backwards, line 85
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 85
        // do, line 86
        var /** number */ v_2 = base.limit - base.cursor;
        lab1: {
            // call main_suffix, line 86
            if (!r_main_suffix())
            {
                break lab1;
            }
        }
        base.cursor = base.limit - v_2;
        // do, line 87
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // call consonant_pair, line 87
            if (!r_consonant_pair())
            {
                break lab2;
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 88
        var /** number */ v_4 = base.limit - base.cursor;
        lab3: {
            // call other_suffix, line 88
            if (!r_other_suffix())
            {
                break lab3;
            }
        }
        base.cursor = base.limit - v_4;
        // do, line 89
        var /** number */ v_5 = base.limit - base.cursor;
        lab4: {
            // call undouble, line 89
            if (!r_undouble())
            {
                break lab4;
            }
        }
        base.cursor = base.limit - v_5;
        base.cursor = base.limit_backward;        return true;
    };

    this.stemWord = function(word) {
	base.setCurrent(word);
	this.stem();
        return base.getCurrent();
    };
};
