// This file was generated automatically by the Snowball to JSX compiler
// http://snowballstem.org/

function SwedishStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["a", -1, 1],
        ["arna", 0, 1],
        ["erna", 0, 1],
        ["heterna", 2, 1],
        ["orna", 0, 1],
        ["ad", -1, 1],
        ["e", -1, 1],
        ["ade", 6, 1],
        ["ande", 6, 1],
        ["arne", 6, 1],
        ["are", 6, 1],
        ["aste", 6, 1],
        ["en", -1, 1],
        ["anden", 12, 1],
        ["aren", 12, 1],
        ["heten", 12, 1],
        ["ern", -1, 1],
        ["ar", -1, 1],
        ["er", -1, 1],
        ["heter", 18, 1],
        ["or", -1, 1],
        ["s", -1, 2],
        ["as", 21, 1],
        ["arnas", 22, 1],
        ["ernas", 22, 1],
        ["ornas", 22, 1],
        ["es", 21, 1],
        ["ades", 26, 1],
        ["andes", 26, 1],
        ["ens", 21, 1],
        ["arens", 29, 1],
        ["hetens", 29, 1],
        ["erns", 21, 1],
        ["at", -1, 1],
        ["andet", -1, 1],
        ["het", -1, 1],
        ["ast", -1, 1]
    ];

    /** @const */ var a_1 = [
        ["dd", -1, -1],
        ["gd", -1, -1],
        ["nn", -1, -1],
        ["dt", -1, -1],
        ["gt", -1, -1],
        ["kt", -1, -1],
        ["tt", -1, -1]
    ];

    /** @const */ var a_2 = [
        ["ig", -1, 1],
        ["lig", 0, 1],
        ["els", -1, 1],
        ["fullt", -1, 3],
        ["l\u00F6st", -1, 2]
    ];

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 32];

    /** @const */ var /** Array<int> */ g_s_ending = [119, 127, 149];

    var /** number */ I_x = 0;
    var /** number */ I_p1 = 0;


    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 26
        I_p1 = base.limit;
        // test, line 29
        var /** number */ v_1 = base.cursor;
        // (, line 29
        // hop, line 29
        {
            var /** number */ c = base.cursor + 3;
            if (0 > c || c > base.limit)
            {
                return false;
            }
            base.cursor = c;
        }
        // setmark x, line 29
        I_x = base.cursor;
        base.cursor = v_1;
        // goto, line 30
        golab0: while(true)
        {
            var /** number */ v_2 = base.cursor;
            lab1: {
                if (!(base.in_grouping(g_v, 97, 246)))
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
        // gopast, line 30
        golab2: while(true)
        {
            lab3: {
                if (!(base.out_grouping(g_v, 97, 246)))
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
        // setmark p1, line 30
        I_p1 = base.cursor;
        // try, line 31
        lab4: {
            // (, line 31
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
        // (, line 36
        // setlimit, line 37
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 37
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 37
        // [, line 37
        base.ket = base.cursor;
        // substring, line 37
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 37
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
                if (!(base.in_grouping_b(g_s_ending, 98, 121)))
                {
                    return false;
                }
                // delete, line 46
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
        // setlimit, line 50
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 50
        if (base.cursor < I_p1)
        {
            return false;
        }
        base.cursor = I_p1;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 50
        // and, line 52
        var /** number */ v_3 = base.limit - base.cursor;
        // among, line 51
        if (base.find_among_b(a_1) == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        base.cursor = base.limit - v_3;
        // (, line 52
        // [, line 52
        base.ket = base.cursor;
        // next, line 52
        if (base.cursor <= base.limit_backward)
        {
            base.limit_backward = v_2;
            return false;
        }
        base.cursor--;
        // ], line 52
        base.bra = base.cursor;
        // delete, line 52
        if (!base.slice_del())
        {
            return false;
        }
        base.limit_backward = v_2;
        return true;
    };

    /** @return {boolean} */
    function r_other_suffix() {
        var /** number */ among_var;
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
        // [, line 56
        base.ket = base.cursor;
        // substring, line 56
        among_var = base.find_among_b(a_2);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 56
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                base.limit_backward = v_2;
                return false;
            case 1:
                // (, line 57
                // delete, line 57
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 58
                // <-, line 58
                if (!base.slice_from("l\u00F6s"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 59
                // <-, line 59
                if (!base.slice_from("full"))
                {
                    return false;
                }
                break;
        }
        base.limit_backward = v_2;
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 64
        // do, line 66
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call mark_regions, line 66
            if (!r_mark_regions())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // backwards, line 67
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 67
        // do, line 68
        var /** number */ v_2 = base.limit - base.cursor;
        lab1: {
            // call main_suffix, line 68
            if (!r_main_suffix())
            {
                break lab1;
            }
        }
        base.cursor = base.limit - v_2;
        // do, line 69
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // call consonant_pair, line 69
            if (!r_consonant_pair())
            {
                break lab2;
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 70
        var /** number */ v_4 = base.limit - base.cursor;
        lab3: {
            // call other_suffix, line 70
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
