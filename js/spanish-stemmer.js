// This file was generated automatically by the Snowball to JSX compiler
// http://snowballstem.org/

function SpanishStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["", -1, 6],
        ["\u00E1", 0, 1],
        ["\u00E9", 0, 2],
        ["\u00ED", 0, 3],
        ["\u00F3", 0, 4],
        ["\u00FA", 0, 5]
    ];

    /** @const */ var a_1 = [
        ["la", -1, -1],
        ["sela", 0, -1],
        ["le", -1, -1],
        ["me", -1, -1],
        ["se", -1, -1],
        ["lo", -1, -1],
        ["selo", 5, -1],
        ["las", -1, -1],
        ["selas", 7, -1],
        ["les", -1, -1],
        ["los", -1, -1],
        ["selos", 10, -1],
        ["nos", -1, -1]
    ];

    /** @const */ var a_2 = [
        ["ando", -1, 6],
        ["iendo", -1, 6],
        ["yendo", -1, 7],
        ["\u00E1ndo", -1, 2],
        ["i\u00E9ndo", -1, 1],
        ["ar", -1, 6],
        ["er", -1, 6],
        ["ir", -1, 6],
        ["\u00E1r", -1, 3],
        ["\u00E9r", -1, 4],
        ["\u00EDr", -1, 5]
    ];

    /** @const */ var a_3 = [
        ["ic", -1, -1],
        ["ad", -1, -1],
        ["os", -1, -1],
        ["iv", -1, 1]
    ];

    /** @const */ var a_4 = [
        ["able", -1, 1],
        ["ible", -1, 1],
        ["ante", -1, 1]
    ];

    /** @const */ var a_5 = [
        ["ic", -1, 1],
        ["abil", -1, 1],
        ["iv", -1, 1]
    ];

    /** @const */ var a_6 = [
        ["ica", -1, 1],
        ["ancia", -1, 2],
        ["encia", -1, 5],
        ["adora", -1, 2],
        ["osa", -1, 1],
        ["ista", -1, 1],
        ["iva", -1, 9],
        ["anza", -1, 1],
        ["log\u00EDa", -1, 3],
        ["idad", -1, 8],
        ["able", -1, 1],
        ["ible", -1, 1],
        ["ante", -1, 2],
        ["mente", -1, 7],
        ["amente", 13, 6],
        ["aci\u00F3n", -1, 2],
        ["uci\u00F3n", -1, 4],
        ["ico", -1, 1],
        ["ismo", -1, 1],
        ["oso", -1, 1],
        ["amiento", -1, 1],
        ["imiento", -1, 1],
        ["ivo", -1, 9],
        ["ador", -1, 2],
        ["icas", -1, 1],
        ["ancias", -1, 2],
        ["encias", -1, 5],
        ["adoras", -1, 2],
        ["osas", -1, 1],
        ["istas", -1, 1],
        ["ivas", -1, 9],
        ["anzas", -1, 1],
        ["log\u00EDas", -1, 3],
        ["idades", -1, 8],
        ["ables", -1, 1],
        ["ibles", -1, 1],
        ["aciones", -1, 2],
        ["uciones", -1, 4],
        ["adores", -1, 2],
        ["antes", -1, 2],
        ["icos", -1, 1],
        ["ismos", -1, 1],
        ["osos", -1, 1],
        ["amientos", -1, 1],
        ["imientos", -1, 1],
        ["ivos", -1, 9]
    ];

    /** @const */ var a_7 = [
        ["ya", -1, 1],
        ["ye", -1, 1],
        ["yan", -1, 1],
        ["yen", -1, 1],
        ["yeron", -1, 1],
        ["yendo", -1, 1],
        ["yo", -1, 1],
        ["yas", -1, 1],
        ["yes", -1, 1],
        ["yais", -1, 1],
        ["yamos", -1, 1],
        ["y\u00F3", -1, 1]
    ];

    /** @const */ var a_8 = [
        ["aba", -1, 2],
        ["ada", -1, 2],
        ["ida", -1, 2],
        ["ara", -1, 2],
        ["iera", -1, 2],
        ["\u00EDa", -1, 2],
        ["ar\u00EDa", 5, 2],
        ["er\u00EDa", 5, 2],
        ["ir\u00EDa", 5, 2],
        ["ad", -1, 2],
        ["ed", -1, 2],
        ["id", -1, 2],
        ["ase", -1, 2],
        ["iese", -1, 2],
        ["aste", -1, 2],
        ["iste", -1, 2],
        ["an", -1, 2],
        ["aban", 16, 2],
        ["aran", 16, 2],
        ["ieran", 16, 2],
        ["\u00EDan", 16, 2],
        ["ar\u00EDan", 20, 2],
        ["er\u00EDan", 20, 2],
        ["ir\u00EDan", 20, 2],
        ["en", -1, 1],
        ["asen", 24, 2],
        ["iesen", 24, 2],
        ["aron", -1, 2],
        ["ieron", -1, 2],
        ["ar\u00E1n", -1, 2],
        ["er\u00E1n", -1, 2],
        ["ir\u00E1n", -1, 2],
        ["ado", -1, 2],
        ["ido", -1, 2],
        ["ando", -1, 2],
        ["iendo", -1, 2],
        ["ar", -1, 2],
        ["er", -1, 2],
        ["ir", -1, 2],
        ["as", -1, 2],
        ["abas", 39, 2],
        ["adas", 39, 2],
        ["idas", 39, 2],
        ["aras", 39, 2],
        ["ieras", 39, 2],
        ["\u00EDas", 39, 2],
        ["ar\u00EDas", 45, 2],
        ["er\u00EDas", 45, 2],
        ["ir\u00EDas", 45, 2],
        ["es", -1, 1],
        ["ases", 49, 2],
        ["ieses", 49, 2],
        ["abais", -1, 2],
        ["arais", -1, 2],
        ["ierais", -1, 2],
        ["\u00EDais", -1, 2],
        ["ar\u00EDais", 55, 2],
        ["er\u00EDais", 55, 2],
        ["ir\u00EDais", 55, 2],
        ["aseis", -1, 2],
        ["ieseis", -1, 2],
        ["asteis", -1, 2],
        ["isteis", -1, 2],
        ["\u00E1is", -1, 2],
        ["\u00E9is", -1, 1],
        ["ar\u00E9is", 64, 2],
        ["er\u00E9is", 64, 2],
        ["ir\u00E9is", 64, 2],
        ["ados", -1, 2],
        ["idos", -1, 2],
        ["amos", -1, 2],
        ["\u00E1bamos", 70, 2],
        ["\u00E1ramos", 70, 2],
        ["i\u00E9ramos", 70, 2],
        ["\u00EDamos", 70, 2],
        ["ar\u00EDamos", 74, 2],
        ["er\u00EDamos", 74, 2],
        ["ir\u00EDamos", 74, 2],
        ["emos", -1, 1],
        ["aremos", 78, 2],
        ["eremos", 78, 2],
        ["iremos", 78, 2],
        ["\u00E1semos", 78, 2],
        ["i\u00E9semos", 78, 2],
        ["imos", -1, 2],
        ["ar\u00E1s", -1, 2],
        ["er\u00E1s", -1, 2],
        ["ir\u00E1s", -1, 2],
        ["\u00EDs", -1, 2],
        ["ar\u00E1", -1, 2],
        ["er\u00E1", -1, 2],
        ["ir\u00E1", -1, 2],
        ["ar\u00E9", -1, 2],
        ["er\u00E9", -1, 2],
        ["ir\u00E9", -1, 2],
        ["i\u00F3", -1, 2]
    ];

    /** @const */ var a_9 = [
        ["a", -1, 1],
        ["e", -1, 2],
        ["o", -1, 1],
        ["os", -1, 1],
        ["\u00E1", -1, 1],
        ["\u00E9", -1, 2],
        ["\u00ED", -1, 1],
        ["\u00F3", -1, 1]
    ];

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 10];

    var /** number */ I_p2 = 0;
    var /** number */ I_p1 = 0;
    var /** number */ I_pV = 0;


    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 31
        I_pV = base.limit;
        I_p1 = base.limit;
        I_p2 = base.limit;
        // do, line 37
        var /** number */ v_1 = base.cursor;
        lab0: {
            // (, line 37
            // or, line 39
            lab1: {
                var /** number */ v_2 = base.cursor;
                lab2: {
                    // (, line 38
                    if (!(base.in_grouping(g_v, 97, 252)))
                    {
                        break lab2;
                    }
                    // or, line 38
                    lab3: {
                        var /** number */ v_3 = base.cursor;
                        lab4: {
                            // (, line 38
                            if (!(base.out_grouping(g_v, 97, 252)))
                            {
                                break lab4;
                            }
                            // gopast, line 38
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
                                    break lab4;
                                }
                                base.cursor++;
                            }
                            break lab3;
                        }
                        base.cursor = v_3;
                        // (, line 38
                        if (!(base.in_grouping(g_v, 97, 252)))
                        {
                            break lab2;
                        }
                        // gopast, line 38
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
                                break lab2;
                            }
                            base.cursor++;
                        }
                    }
                    break lab1;
                }
                base.cursor = v_2;
                // (, line 40
                if (!(base.out_grouping(g_v, 97, 252)))
                {
                    break lab0;
                }
                // or, line 40
                lab9: {
                    var /** number */ v_6 = base.cursor;
                    lab10: {
                        // (, line 40
                        if (!(base.out_grouping(g_v, 97, 252)))
                        {
                            break lab10;
                        }
                        // gopast, line 40
                        golab11: while(true)
                        {
                            lab12: {
                                if (!(base.in_grouping(g_v, 97, 252)))
                                {
                                    break lab12;
                                }
                                break golab11;
                            }
                            if (base.cursor >= base.limit)
                            {
                                break lab10;
                            }
                            base.cursor++;
                        }
                        break lab9;
                    }
                    base.cursor = v_6;
                    // (, line 40
                    if (!(base.in_grouping(g_v, 97, 252)))
                    {
                        break lab0;
                    }
                    // next, line 40
                    if (base.cursor >= base.limit)
                    {
                        break lab0;
                    }
                    base.cursor++;
                }
            }
            // setmark pV, line 41
            I_pV = base.cursor;
        }
        base.cursor = v_1;
        // do, line 43
        var /** number */ v_8 = base.cursor;
        lab13: {
            // (, line 43
            // gopast, line 44
            golab14: while(true)
            {
                lab15: {
                    if (!(base.in_grouping(g_v, 97, 252)))
                    {
                        break lab15;
                    }
                    break golab14;
                }
                if (base.cursor >= base.limit)
                {
                    break lab13;
                }
                base.cursor++;
            }
            // gopast, line 44
            golab16: while(true)
            {
                lab17: {
                    if (!(base.out_grouping(g_v, 97, 252)))
                    {
                        break lab17;
                    }
                    break golab16;
                }
                if (base.cursor >= base.limit)
                {
                    break lab13;
                }
                base.cursor++;
            }
            // setmark p1, line 44
            I_p1 = base.cursor;
            // gopast, line 45
            golab18: while(true)
            {
                lab19: {
                    if (!(base.in_grouping(g_v, 97, 252)))
                    {
                        break lab19;
                    }
                    break golab18;
                }
                if (base.cursor >= base.limit)
                {
                    break lab13;
                }
                base.cursor++;
            }
            // gopast, line 45
            golab20: while(true)
            {
                lab21: {
                    if (!(base.out_grouping(g_v, 97, 252)))
                    {
                        break lab21;
                    }
                    break golab20;
                }
                if (base.cursor >= base.limit)
                {
                    break lab13;
                }
                base.cursor++;
            }
            // setmark p2, line 45
            I_p2 = base.cursor;
        }
        base.cursor = v_8;
        return true;
    };

    /** @return {boolean} */
    function r_postlude() {
        var /** number */ among_var;
        // repeat, line 49
        replab0: while(true)
        {
            var /** number */ v_1 = base.cursor;
            lab1: {
                // (, line 49
                // [, line 50
                base.bra = base.cursor;
                // substring, line 50
                among_var = base.find_among(a_0);
                if (among_var == 0)
                {
                    break lab1;
                }
                // ], line 50
                base.ket = base.cursor;
                switch (among_var) {
                    case 0:
                        break lab1;
                    case 1:
                        // (, line 51
                        // <-, line 51
                        if (!base.slice_from("a"))
                        {
                            return false;
                        }
                        break;
                    case 2:
                        // (, line 52
                        // <-, line 52
                        if (!base.slice_from("e"))
                        {
                            return false;
                        }
                        break;
                    case 3:
                        // (, line 53
                        // <-, line 53
                        if (!base.slice_from("i"))
                        {
                            return false;
                        }
                        break;
                    case 4:
                        // (, line 54
                        // <-, line 54
                        if (!base.slice_from("o"))
                        {
                            return false;
                        }
                        break;
                    case 5:
                        // (, line 55
                        // <-, line 55
                        if (!base.slice_from("u"))
                        {
                            return false;
                        }
                        break;
                    case 6:
                        // (, line 57
                        // next, line 57
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
    function r_RV() {
        if (!(I_pV <= base.cursor))
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
    function r_attached_pronoun() {
        var /** number */ among_var;
        // (, line 67
        // [, line 68
        base.ket = base.cursor;
        // substring, line 68
        if (base.find_among_b(a_1) == 0)
        {
            return false;
        }
        // ], line 68
        base.bra = base.cursor;
        // substring, line 72
        among_var = base.find_among_b(a_2);
        if (among_var == 0)
        {
            return false;
        }
        // call RV, line 72
        if (!r_RV())
        {
            return false;
        }
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 73
                // ], line 73
                base.bra = base.cursor;
                // <-, line 73
                if (!base.slice_from("iendo"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 74
                // ], line 74
                base.bra = base.cursor;
                // <-, line 74
                if (!base.slice_from("ando"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 75
                // ], line 75
                base.bra = base.cursor;
                // <-, line 75
                if (!base.slice_from("ar"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 76
                // ], line 76
                base.bra = base.cursor;
                // <-, line 76
                if (!base.slice_from("er"))
                {
                    return false;
                }
                break;
            case 5:
                // (, line 77
                // ], line 77
                base.bra = base.cursor;
                // <-, line 77
                if (!base.slice_from("ir"))
                {
                    return false;
                }
                break;
            case 6:
                // (, line 81
                // delete, line 81
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 7:
                // (, line 82
                // literal, line 82
                if (!(base.eq_s_b("u")))
                {
                    return false;
                }
                // delete, line 82
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_standard_suffix() {
        var /** number */ among_var;
        // (, line 86
        // [, line 87
        base.ket = base.cursor;
        // substring, line 87
        among_var = base.find_among_b(a_6);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 87
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 98
                // call R2, line 99
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 99
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 104
                // call R2, line 105
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 105
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 106
                var /** number */ v_1 = base.limit - base.cursor;
                lab0: {
                    // (, line 106
                    // [, line 106
                    base.ket = base.cursor;
                    // literal, line 106
                    if (!(base.eq_s_b("ic")))
                    {
                        base.cursor = base.limit - v_1;
                        break lab0;
                    }
                    // ], line 106
                    base.bra = base.cursor;
                    // call R2, line 106
                    if (!r_R2())
                    {
                        base.cursor = base.limit - v_1;
                        break lab0;
                    }
                    // delete, line 106
                    if (!base.slice_del())
                    {
                        return false;
                    }
                }
                break;
            case 3:
                // (, line 110
                // call R2, line 111
                if (!r_R2())
                {
                    return false;
                }
                // <-, line 111
                if (!base.slice_from("log"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 114
                // call R2, line 115
                if (!r_R2())
                {
                    return false;
                }
                // <-, line 115
                if (!base.slice_from("u"))
                {
                    return false;
                }
                break;
            case 5:
                // (, line 118
                // call R2, line 119
                if (!r_R2())
                {
                    return false;
                }
                // <-, line 119
                if (!base.slice_from("ente"))
                {
                    return false;
                }
                break;
            case 6:
                // (, line 122
                // call R1, line 123
                if (!r_R1())
                {
                    return false;
                }
                // delete, line 123
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 124
                var /** number */ v_2 = base.limit - base.cursor;
                lab1: {
                    // (, line 124
                    // [, line 125
                    base.ket = base.cursor;
                    // substring, line 125
                    among_var = base.find_among_b(a_3);
                    if (among_var == 0)
                    {
                        base.cursor = base.limit - v_2;
                        break lab1;
                    }
                    // ], line 125
                    base.bra = base.cursor;
                    // call R2, line 125
                    if (!r_R2())
                    {
                        base.cursor = base.limit - v_2;
                        break lab1;
                    }
                    // delete, line 125
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    switch (among_var) {
                        case 0:
                            base.cursor = base.limit - v_2;
                            break lab1;
                        case 1:
                            // (, line 126
                            // [, line 126
                            base.ket = base.cursor;
                            // literal, line 126
                            if (!(base.eq_s_b("at")))
                            {
                                base.cursor = base.limit - v_2;
                                break lab1;
                            }
                            // ], line 126
                            base.bra = base.cursor;
                            // call R2, line 126
                            if (!r_R2())
                            {
                                base.cursor = base.limit - v_2;
                                break lab1;
                            }
                            // delete, line 126
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                    }
                }
                break;
            case 7:
                // (, line 134
                // call R2, line 135
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 135
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 136
                var /** number */ v_3 = base.limit - base.cursor;
                lab2: {
                    // (, line 136
                    // [, line 137
                    base.ket = base.cursor;
                    // substring, line 137
                    among_var = base.find_among_b(a_4);
                    if (among_var == 0)
                    {
                        base.cursor = base.limit - v_3;
                        break lab2;
                    }
                    // ], line 137
                    base.bra = base.cursor;
                    switch (among_var) {
                        case 0:
                            base.cursor = base.limit - v_3;
                            break lab2;
                        case 1:
                            // (, line 140
                            // call R2, line 140
                            if (!r_R2())
                            {
                                base.cursor = base.limit - v_3;
                                break lab2;
                            }
                            // delete, line 140
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                    }
                }
                break;
            case 8:
                // (, line 146
                // call R2, line 147
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 147
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 148
                var /** number */ v_4 = base.limit - base.cursor;
                lab3: {
                    // (, line 148
                    // [, line 149
                    base.ket = base.cursor;
                    // substring, line 149
                    among_var = base.find_among_b(a_5);
                    if (among_var == 0)
                    {
                        base.cursor = base.limit - v_4;
                        break lab3;
                    }
                    // ], line 149
                    base.bra = base.cursor;
                    switch (among_var) {
                        case 0:
                            base.cursor = base.limit - v_4;
                            break lab3;
                        case 1:
                            // (, line 152
                            // call R2, line 152
                            if (!r_R2())
                            {
                                base.cursor = base.limit - v_4;
                                break lab3;
                            }
                            // delete, line 152
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                    }
                }
                break;
            case 9:
                // (, line 158
                // call R2, line 159
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 159
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 160
                var /** number */ v_5 = base.limit - base.cursor;
                lab4: {
                    // (, line 160
                    // [, line 161
                    base.ket = base.cursor;
                    // literal, line 161
                    if (!(base.eq_s_b("at")))
                    {
                        base.cursor = base.limit - v_5;
                        break lab4;
                    }
                    // ], line 161
                    base.bra = base.cursor;
                    // call R2, line 161
                    if (!r_R2())
                    {
                        base.cursor = base.limit - v_5;
                        break lab4;
                    }
                    // delete, line 161
                    if (!base.slice_del())
                    {
                        return false;
                    }
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_y_verb_suffix() {
        var /** number */ among_var;
        // (, line 167
        // setlimit, line 168
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 168
        if (base.cursor < I_pV)
        {
            return false;
        }
        base.cursor = I_pV;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 168
        // [, line 168
        base.ket = base.cursor;
        // substring, line 168
        among_var = base.find_among_b(a_7);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 168
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 171
                // literal, line 171
                if (!(base.eq_s_b("u")))
                {
                    return false;
                }
                // delete, line 171
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_verb_suffix() {
        var /** number */ among_var;
        // (, line 175
        // setlimit, line 176
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 176
        if (base.cursor < I_pV)
        {
            return false;
        }
        base.cursor = I_pV;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 176
        // [, line 176
        base.ket = base.cursor;
        // substring, line 176
        among_var = base.find_among_b(a_8);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 176
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 179
                // try, line 179
                var /** number */ v_3 = base.limit - base.cursor;
                lab0: {
                    // (, line 179
                    // literal, line 179
                    if (!(base.eq_s_b("u")))
                    {
                        base.cursor = base.limit - v_3;
                        break lab0;
                    }
                    // test, line 179
                    var /** number */ v_4 = base.limit - base.cursor;
                    // literal, line 179
                    if (!(base.eq_s_b("g")))
                    {
                        base.cursor = base.limit - v_3;
                        break lab0;
                    }
                    base.cursor = base.limit - v_4;
                }
                // ], line 179
                base.bra = base.cursor;
                // delete, line 179
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 200
                // delete, line 200
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_residual_suffix() {
        var /** number */ among_var;
        // (, line 204
        // [, line 205
        base.ket = base.cursor;
        // substring, line 205
        among_var = base.find_among_b(a_9);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 205
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 208
                // call RV, line 208
                if (!r_RV())
                {
                    return false;
                }
                // delete, line 208
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 210
                // call RV, line 210
                if (!r_RV())
                {
                    return false;
                }
                // delete, line 210
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 210
                var /** number */ v_1 = base.limit - base.cursor;
                lab0: {
                    // (, line 210
                    // [, line 210
                    base.ket = base.cursor;
                    // literal, line 210
                    if (!(base.eq_s_b("u")))
                    {
                        base.cursor = base.limit - v_1;
                        break lab0;
                    }
                    // ], line 210
                    base.bra = base.cursor;
                    // test, line 210
                    var /** number */ v_2 = base.limit - base.cursor;
                    // literal, line 210
                    if (!(base.eq_s_b("g")))
                    {
                        base.cursor = base.limit - v_1;
                        break lab0;
                    }
                    base.cursor = base.limit - v_2;
                    // call RV, line 210
                    if (!r_RV())
                    {
                        base.cursor = base.limit - v_1;
                        break lab0;
                    }
                    // delete, line 210
                    if (!base.slice_del())
                    {
                        return false;
                    }
                }
                break;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 215
        // do, line 216
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call mark_regions, line 216
            if (!r_mark_regions())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // backwards, line 217
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 217
        // do, line 218
        var /** number */ v_2 = base.limit - base.cursor;
        lab1: {
            // call attached_pronoun, line 218
            if (!r_attached_pronoun())
            {
                break lab1;
            }
        }
        base.cursor = base.limit - v_2;
        // do, line 219
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // (, line 219
            // or, line 219
            lab3: {
                var /** number */ v_4 = base.limit - base.cursor;
                lab4: {
                    // call standard_suffix, line 219
                    if (!r_standard_suffix())
                    {
                        break lab4;
                    }
                    break lab3;
                }
                base.cursor = base.limit - v_4;
                lab5: {
                    // call y_verb_suffix, line 220
                    if (!r_y_verb_suffix())
                    {
                        break lab5;
                    }
                    break lab3;
                }
                base.cursor = base.limit - v_4;
                // call verb_suffix, line 221
                if (!r_verb_suffix())
                {
                    break lab2;
                }
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 223
        var /** number */ v_5 = base.limit - base.cursor;
        lab6: {
            // call residual_suffix, line 223
            if (!r_residual_suffix())
            {
                break lab6;
            }
        }
        base.cursor = base.limit - v_5;
        base.cursor = base.limit_backward;        // do, line 225
        var /** number */ v_6 = base.cursor;
        lab7: {
            // call postlude, line 225
            if (!r_postlude())
            {
                break lab7;
            }
        }
        base.cursor = v_6;
        return true;
    };

    this.stemWord = function(word) {
	base.setCurrent(word);
	this.stem();
        return base.getCurrent();
    };
};
