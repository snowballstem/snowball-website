// This file was generated automatically by the Snowball to JSX compiler
// http://snowballstem.org/

function NorwegianStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["a", -1, 1],
        ["e", -1, 1],
        ["ede", 1, 1],
        ["ande", 1, 1],
        ["ende", 1, 1],
        ["ane", 1, 1],
        ["ene", 1, 1],
        ["hetene", 6, 1],
        ["erte", 1, 3],
        ["en", -1, 1],
        ["heten", 9, 1],
        ["ar", -1, 1],
        ["er", -1, 1],
        ["heter", 12, 1],
        ["s", -1, 2],
        ["as", 14, 1],
        ["es", 14, 1],
        ["edes", 16, 1],
        ["endes", 16, 1],
        ["enes", 16, 1],
        ["hetenes", 19, 1],
        ["ens", 14, 1],
        ["hetens", 21, 1],
        ["ers", 14, 1],
        ["ets", 14, 1],
        ["et", -1, 1],
        ["het", 25, 1],
        ["ert", -1, 3],
        ["ast", -1, 1]
    ];

    /** @const */ var a_1 = [
        ["dt", -1, -1],
        ["vt", -1, -1]
    ];

    /** @const */ var a_2 = [
        ["leg", -1, 1],
        ["eleg", 0, 1],
        ["ig", -1, 1],
        ["eig", 2, 1],
        ["lig", 2, 1],
        ["elig", 4, 1],
        ["els", -1, 1],
        ["lov", -1, 1],
        ["elov", 7, 1],
        ["slov", 7, 1],
        ["hetslov", 9, 1]
    ];

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128];

    /** @const */ var /** Array<int> */ g_s_ending = [119, 125, 149, 1];

    var /** number */ I_x = 0;
    var /** number */ I_p1 = 0;


    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 26
        I_p1 = base.limit;
        // test, line 30
        var /** number */ v_1 = base.cursor;
        // (, line 30
        // hop, line 30
        {
            var /** number */ c = base.cursor + 3;
            if (0 > c || c > base.limit)
            {
                return false;
            }
            base.cursor = c;
        }
        // setmark x, line 30
        I_x = base.cursor;
        base.cursor = v_1;
        // goto, line 31
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
        // gopast, line 31
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
        // setmark p1, line 31
        I_p1 = base.cursor;
        // try, line 32
        lab4: {
            // (, line 32
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
        // (, line 37
        // setlimit, line 38
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 38
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 38
        // [, line 38
        base.ket = base.cursor;
        // substring, line 38
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 38
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 44
                // delete, line 44
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 46
                // or, line 46
                lab0: {
                    var /** number */ v_3 = base.limit - base.cursor;
                    lab1: {
                        if (!(base.in_grouping_b(g_s_ending, 98, 122)))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_3;
                    // (, line 46
                    // literal, line 46
                    if (!(base.eq_s_b("k")))
                    {
                        return false;
                    }
                    if (!(base.out_grouping_b(g_v, 97, 248)))
                    {
                        return false;
                    }
                }
                // delete, line 46
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 48
                // <-, line 48
                if (!base.slice_from("er"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_consonant_pair() {
        // (, line 52
        // test, line 53
        var /** number */ v_1 = base.limit - base.cursor;
        // (, line 53
        // setlimit, line 54
        var /** number */ v_2 = base.limit - base.cursor;
        // tomark, line 54
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_3 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_2;
        // (, line 54
        // [, line 54
        base.ket = base.cursor;
        // substring, line 54
        if (base.find_among_b(a_1) == 0)
        {
            base.limit_backward = v_3;
            return false;
        }
        // ], line 54
        base.bra = base.cursor;
        base.limit_backward = v_3;
        base.cursor = base.limit - v_1;
        // next, line 59
        if (base.cursor <= base.limit_backward)
        {
            return false;
        }
        base.cursor--;
        // ], line 59
        base.bra = base.cursor;
        // delete, line 59
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_other_suffix() {
        var /** number */ among_var;
        // (, line 62
        // setlimit, line 63
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 63
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 63
        // [, line 63
        base.ket = base.cursor;
        // substring, line 63
        among_var = base.find_among_b(a_2);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 63
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 67
                // delete, line 67
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 72
        // do, line 74
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call mark_regions, line 74
            if (!r_mark_regions())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // backwards, line 75
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 75
        // do, line 76
        var /** number */ v_2 = base.limit - base.cursor;
        lab1: {
            // call main_suffix, line 76
            if (!r_main_suffix())
            {
                break lab1;
            }
        }
        base.cursor = base.limit - v_2;
        // do, line 77
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // call consonant_pair, line 77
            if (!r_consonant_pair())
            {
                break lab2;
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 78
        var /** number */ v_4 = base.limit - base.cursor;
        lab3: {
            // call other_suffix, line 78
            if (!r_other_suffix())
            {
                break lab3;
            }
        }
        base.cursor = base.limit - v_4;
        base.cursor = base.limit_backward;        return true;
    };

    this.stemWord = function(word) {
	base.setCurrent(word);
	this.stem();
        return base.getCurrent();
    };
};
