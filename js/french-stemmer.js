// This file was generated automatically by the Snowball to JSX compiler
// http://snowballstem.org/

function FrenchStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["col", -1, -1],
        ["par", -1, -1],
        ["tap", -1, -1]
    ];

    /** @const */ var a_1 = [
        ["", -1, 4],
        ["I", 0, 1],
        ["U", 0, 2],
        ["Y", 0, 3]
    ];

    /** @const */ var a_2 = [
        ["iqU", -1, 3],
        ["abl", -1, 3],
        ["I\u00E8r", -1, 4],
        ["i\u00E8r", -1, 4],
        ["eus", -1, 2],
        ["iv", -1, 1]
    ];

    /** @const */ var a_3 = [
        ["ic", -1, 2],
        ["abil", -1, 1],
        ["iv", -1, 3]
    ];

    /** @const */ var a_4 = [
        ["iqUe", -1, 1],
        ["atrice", -1, 2],
        ["ance", -1, 1],
        ["ence", -1, 5],
        ["logie", -1, 3],
        ["able", -1, 1],
        ["isme", -1, 1],
        ["euse", -1, 11],
        ["iste", -1, 1],
        ["ive", -1, 8],
        ["if", -1, 8],
        ["usion", -1, 4],
        ["ation", -1, 2],
        ["ution", -1, 4],
        ["ateur", -1, 2],
        ["iqUes", -1, 1],
        ["atrices", -1, 2],
        ["ances", -1, 1],
        ["ences", -1, 5],
        ["logies", -1, 3],
        ["ables", -1, 1],
        ["ismes", -1, 1],
        ["euses", -1, 11],
        ["istes", -1, 1],
        ["ives", -1, 8],
        ["ifs", -1, 8],
        ["usions", -1, 4],
        ["ations", -1, 2],
        ["utions", -1, 4],
        ["ateurs", -1, 2],
        ["ments", -1, 15],
        ["ements", 30, 6],
        ["issements", 31, 12],
        ["it\u00E9s", -1, 7],
        ["ment", -1, 15],
        ["ement", 34, 6],
        ["issement", 35, 12],
        ["amment", 34, 13],
        ["emment", 34, 14],
        ["aux", -1, 10],
        ["eaux", 39, 9],
        ["eux", -1, 1],
        ["it\u00E9", -1, 7]
    ];

    /** @const */ var a_5 = [
        ["ira", -1, 1],
        ["ie", -1, 1],
        ["isse", -1, 1],
        ["issante", -1, 1],
        ["i", -1, 1],
        ["irai", 4, 1],
        ["ir", -1, 1],
        ["iras", -1, 1],
        ["ies", -1, 1],
        ["\u00EEmes", -1, 1],
        ["isses", -1, 1],
        ["issantes", -1, 1],
        ["\u00EEtes", -1, 1],
        ["is", -1, 1],
        ["irais", 13, 1],
        ["issais", 13, 1],
        ["irions", -1, 1],
        ["issions", -1, 1],
        ["irons", -1, 1],
        ["issons", -1, 1],
        ["issants", -1, 1],
        ["it", -1, 1],
        ["irait", 21, 1],
        ["issait", 21, 1],
        ["issant", -1, 1],
        ["iraIent", -1, 1],
        ["issaIent", -1, 1],
        ["irent", -1, 1],
        ["issent", -1, 1],
        ["iront", -1, 1],
        ["\u00EEt", -1, 1],
        ["iriez", -1, 1],
        ["issiez", -1, 1],
        ["irez", -1, 1],
        ["issez", -1, 1]
    ];

    /** @const */ var a_6 = [
        ["a", -1, 3],
        ["era", 0, 2],
        ["asse", -1, 3],
        ["ante", -1, 3],
        ["\u00E9e", -1, 2],
        ["ai", -1, 3],
        ["erai", 5, 2],
        ["er", -1, 2],
        ["as", -1, 3],
        ["eras", 8, 2],
        ["\u00E2mes", -1, 3],
        ["asses", -1, 3],
        ["antes", -1, 3],
        ["\u00E2tes", -1, 3],
        ["\u00E9es", -1, 2],
        ["ais", -1, 3],
        ["erais", 15, 2],
        ["ions", -1, 1],
        ["erions", 17, 2],
        ["assions", 17, 3],
        ["erons", -1, 2],
        ["ants", -1, 3],
        ["\u00E9s", -1, 2],
        ["ait", -1, 3],
        ["erait", 23, 2],
        ["ant", -1, 3],
        ["aIent", -1, 3],
        ["eraIent", 26, 2],
        ["\u00E8rent", -1, 2],
        ["assent", -1, 3],
        ["eront", -1, 2],
        ["\u00E2t", -1, 3],
        ["ez", -1, 2],
        ["iez", 32, 2],
        ["eriez", 33, 2],
        ["assiez", 33, 3],
        ["erez", 32, 2],
        ["\u00E9", -1, 2]
    ];

    /** @const */ var a_7 = [
        ["e", -1, 3],
        ["I\u00E8re", 0, 2],
        ["i\u00E8re", 0, 2],
        ["ion", -1, 1],
        ["Ier", -1, 2],
        ["ier", -1, 2],
        ["\u00EB", -1, 4]
    ];

    /** @const */ var a_8 = [
        ["ell", -1, -1],
        ["eill", -1, -1],
        ["enn", -1, -1],
        ["onn", -1, -1],
        ["ett", -1, -1]
    ];

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 130, 103, 8, 5];

    /** @const */ var /** Array<int> */ g_keep_with_s = [1, 65, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

    var /** number */ I_p2 = 0;
    var /** number */ I_p1 = 0;
    var /** number */ I_pV = 0;


    /** @return {boolean} */
    function r_prelude() {
        // repeat, line 38
        replab0: while(true)
        {
            var /** number */ v_1 = base.cursor;
            lab1: {
                // goto, line 38
                golab2: while(true)
                {
                    var /** number */ v_2 = base.cursor;
                    lab3: {
                        // (, line 38
                        // or, line 44
                        lab4: {
                            var /** number */ v_3 = base.cursor;
                            lab5: {
                                // (, line 40
                                if (!(base.in_grouping(g_v, 97, 251)))
                                {
                                    break lab5;
                                }
                                // [, line 40
                                base.bra = base.cursor;
                                // or, line 40
                                lab6: {
                                    var /** number */ v_4 = base.cursor;
                                    lab7: {
                                        // (, line 40
                                        // literal, line 40
                                        if (!(base.eq_s("u")))
                                        {
                                            break lab7;
                                        }
                                        // ], line 40
                                        base.ket = base.cursor;
                                        if (!(base.in_grouping(g_v, 97, 251)))
                                        {
                                            break lab7;
                                        }
                                        // <-, line 40
                                        if (!base.slice_from("U"))
                                        {
                                            return false;
                                        }
                                        break lab6;
                                    }
                                    base.cursor = v_4;
                                    lab8: {
                                        // (, line 41
                                        // literal, line 41
                                        if (!(base.eq_s("i")))
                                        {
                                            break lab8;
                                        }
                                        // ], line 41
                                        base.ket = base.cursor;
                                        if (!(base.in_grouping(g_v, 97, 251)))
                                        {
                                            break lab8;
                                        }
                                        // <-, line 41
                                        if (!base.slice_from("I"))
                                        {
                                            return false;
                                        }
                                        break lab6;
                                    }
                                    base.cursor = v_4;
                                    // (, line 42
                                    // literal, line 42
                                    if (!(base.eq_s("y")))
                                    {
                                        break lab5;
                                    }
                                    // ], line 42
                                    base.ket = base.cursor;
                                    // <-, line 42
                                    if (!base.slice_from("Y"))
                                    {
                                        return false;
                                    }
                                }
                                break lab4;
                            }
                            base.cursor = v_3;
                            lab9: {
                                // (, line 45
                                // [, line 45
                                base.bra = base.cursor;
                                // literal, line 45
                                if (!(base.eq_s("y")))
                                {
                                    break lab9;
                                }
                                // ], line 45
                                base.ket = base.cursor;
                                if (!(base.in_grouping(g_v, 97, 251)))
                                {
                                    break lab9;
                                }
                                // <-, line 45
                                if (!base.slice_from("Y"))
                                {
                                    return false;
                                }
                                break lab4;
                            }
                            base.cursor = v_3;
                            // (, line 47
                            // literal, line 47
                            if (!(base.eq_s("q")))
                            {
                                break lab3;
                            }
                            // [, line 47
                            base.bra = base.cursor;
                            // literal, line 47
                            if (!(base.eq_s("u")))
                            {
                                break lab3;
                            }
                            // ], line 47
                            base.ket = base.cursor;
                            // <-, line 47
                            if (!base.slice_from("U"))
                            {
                                return false;
                            }
                        }
                        base.cursor = v_2;
                        break golab2;
                    }
                    base.cursor = v_2;
                    if (base.cursor >= base.limit)
                    {
                        break lab1;
                    }
                    base.cursor++;
                }
                continue replab0;
            }
            base.cursor = v_1;
            break replab0;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 50
        I_pV = base.limit;
        I_p1 = base.limit;
        I_p2 = base.limit;
        // do, line 56
        var /** number */ v_1 = base.cursor;
        lab0: {
            // (, line 56
            // or, line 58
            lab1: {
                var /** number */ v_2 = base.cursor;
                lab2: {
                    // (, line 57
                    if (!(base.in_grouping(g_v, 97, 251)))
                    {
                        break lab2;
                    }
                    if (!(base.in_grouping(g_v, 97, 251)))
                    {
                        break lab2;
                    }
                    // next, line 57
                    if (base.cursor >= base.limit)
                    {
                        break lab2;
                    }
                    base.cursor++;
                    break lab1;
                }
                base.cursor = v_2;
                lab3: {
                    // among, line 59
                    if (base.find_among(a_0) == 0)
                    {
                        break lab3;
                    }
                    break lab1;
                }
                base.cursor = v_2;
                // (, line 66
                // next, line 66
                if (base.cursor >= base.limit)
                {
                    break lab0;
                }
                base.cursor++;
                // gopast, line 66
                golab4: while(true)
                {
                    lab5: {
                        if (!(base.in_grouping(g_v, 97, 251)))
                        {
                            break lab5;
                        }
                        break golab4;
                    }
                    if (base.cursor >= base.limit)
                    {
                        break lab0;
                    }
                    base.cursor++;
                }
            }
            // setmark pV, line 67
            I_pV = base.cursor;
        }
        base.cursor = v_1;
        // do, line 69
        var /** number */ v_4 = base.cursor;
        lab6: {
            // (, line 69
            // gopast, line 70
            golab7: while(true)
            {
                lab8: {
                    if (!(base.in_grouping(g_v, 97, 251)))
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
            // gopast, line 70
            golab9: while(true)
            {
                lab10: {
                    if (!(base.out_grouping(g_v, 97, 251)))
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
            // setmark p1, line 70
            I_p1 = base.cursor;
            // gopast, line 71
            golab11: while(true)
            {
                lab12: {
                    if (!(base.in_grouping(g_v, 97, 251)))
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
            // gopast, line 71
            golab13: while(true)
            {
                lab14: {
                    if (!(base.out_grouping(g_v, 97, 251)))
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
            // setmark p2, line 71
            I_p2 = base.cursor;
        }
        base.cursor = v_4;
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
                        if (!base.slice_from("i"))
                        {
                            return false;
                        }
                        break;
                    case 2:
                        // (, line 79
                        // <-, line 79
                        if (!base.slice_from("u"))
                        {
                            return false;
                        }
                        break;
                    case 3:
                        // (, line 80
                        // <-, line 80
                        if (!base.slice_from("y"))
                        {
                            return false;
                        }
                        break;
                    case 4:
                        // (, line 81
                        // next, line 81
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
    function r_standard_suffix() {
        var /** number */ among_var;
        // (, line 91
        // [, line 92
        base.ket = base.cursor;
        // substring, line 92
        among_var = base.find_among_b(a_4);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 92
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 96
                // call R2, line 96
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 96
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 99
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
                // try, line 100
                var /** number */ v_1 = base.limit - base.cursor;
                lab0: {
                    // (, line 100
                    // [, line 100
                    base.ket = base.cursor;
                    // literal, line 100
                    if (!(base.eq_s_b("ic")))
                    {
                        base.cursor = base.limit - v_1;
                        break lab0;
                    }
                    // ], line 100
                    base.bra = base.cursor;
                    // or, line 100
                    lab1: {
                        var /** number */ v_2 = base.limit - base.cursor;
                        lab2: {
                            // (, line 100
                            // call R2, line 100
                            if (!r_R2())
                            {
                                break lab2;
                            }
                            // delete, line 100
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break lab1;
                        }
                        base.cursor = base.limit - v_2;
                        // <-, line 100
                        if (!base.slice_from("iqU"))
                        {
                            return false;
                        }
                    }
                }
                break;
            case 3:
                // (, line 104
                // call R2, line 104
                if (!r_R2())
                {
                    return false;
                }
                // <-, line 104
                if (!base.slice_from("log"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 107
                // call R2, line 107
                if (!r_R2())
                {
                    return false;
                }
                // <-, line 107
                if (!base.slice_from("u"))
                {
                    return false;
                }
                break;
            case 5:
                // (, line 110
                // call R2, line 110
                if (!r_R2())
                {
                    return false;
                }
                // <-, line 110
                if (!base.slice_from("ent"))
                {
                    return false;
                }
                break;
            case 6:
                // (, line 113
                // call RV, line 114
                if (!r_RV())
                {
                    return false;
                }
                // delete, line 114
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 115
                var /** number */ v_3 = base.limit - base.cursor;
                lab3: {
                    // (, line 115
                    // [, line 116
                    base.ket = base.cursor;
                    // substring, line 116
                    among_var = base.find_among_b(a_2);
                    if (among_var == 0)
                    {
                        base.cursor = base.limit - v_3;
                        break lab3;
                    }
                    // ], line 116
                    base.bra = base.cursor;
                    switch (among_var) {
                        case 0:
                            base.cursor = base.limit - v_3;
                            break lab3;
                        case 1:
                            // (, line 117
                            // call R2, line 117
                            if (!r_R2())
                            {
                                base.cursor = base.limit - v_3;
                                break lab3;
                            }
                            // delete, line 117
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            // [, line 117
                            base.ket = base.cursor;
                            // literal, line 117
                            if (!(base.eq_s_b("at")))
                            {
                                base.cursor = base.limit - v_3;
                                break lab3;
                            }
                            // ], line 117
                            base.bra = base.cursor;
                            // call R2, line 117
                            if (!r_R2())
                            {
                                base.cursor = base.limit - v_3;
                                break lab3;
                            }
                            // delete, line 117
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                        case 2:
                            // (, line 118
                            // or, line 118
                            lab4: {
                                var /** number */ v_4 = base.limit - base.cursor;
                                lab5: {
                                    // (, line 118
                                    // call R2, line 118
                                    if (!r_R2())
                                    {
                                        break lab5;
                                    }
                                    // delete, line 118
                                    if (!base.slice_del())
                                    {
                                        return false;
                                    }
                                    break lab4;
                                }
                                base.cursor = base.limit - v_4;
                                // (, line 118
                                // call R1, line 118
                                if (!r_R1())
                                {
                                    base.cursor = base.limit - v_3;
                                    break lab3;
                                }
                                // <-, line 118
                                if (!base.slice_from("eux"))
                                {
                                    return false;
                                }
                            }
                            break;
                        case 3:
                            // (, line 120
                            // call R2, line 120
                            if (!r_R2())
                            {
                                base.cursor = base.limit - v_3;
                                break lab3;
                            }
                            // delete, line 120
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                        case 4:
                            // (, line 122
                            // call RV, line 122
                            if (!r_RV())
                            {
                                base.cursor = base.limit - v_3;
                                break lab3;
                            }
                            // <-, line 122
                            if (!base.slice_from("i"))
                            {
                                return false;
                            }
                            break;
                    }
                }
                break;
            case 7:
                // (, line 128
                // call R2, line 129
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 129
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 130
                var /** number */ v_5 = base.limit - base.cursor;
                lab6: {
                    // (, line 130
                    // [, line 131
                    base.ket = base.cursor;
                    // substring, line 131
                    among_var = base.find_among_b(a_3);
                    if (among_var == 0)
                    {
                        base.cursor = base.limit - v_5;
                        break lab6;
                    }
                    // ], line 131
                    base.bra = base.cursor;
                    switch (among_var) {
                        case 0:
                            base.cursor = base.limit - v_5;
                            break lab6;
                        case 1:
                            // (, line 132
                            // or, line 132
                            lab7: {
                                var /** number */ v_6 = base.limit - base.cursor;
                                lab8: {
                                    // (, line 132
                                    // call R2, line 132
                                    if (!r_R2())
                                    {
                                        break lab8;
                                    }
                                    // delete, line 132
                                    if (!base.slice_del())
                                    {
                                        return false;
                                    }
                                    break lab7;
                                }
                                base.cursor = base.limit - v_6;
                                // <-, line 132
                                if (!base.slice_from("abl"))
                                {
                                    return false;
                                }
                            }
                            break;
                        case 2:
                            // (, line 133
                            // or, line 133
                            lab9: {
                                var /** number */ v_7 = base.limit - base.cursor;
                                lab10: {
                                    // (, line 133
                                    // call R2, line 133
                                    if (!r_R2())
                                    {
                                        break lab10;
                                    }
                                    // delete, line 133
                                    if (!base.slice_del())
                                    {
                                        return false;
                                    }
                                    break lab9;
                                }
                                base.cursor = base.limit - v_7;
                                // <-, line 133
                                if (!base.slice_from("iqU"))
                                {
                                    return false;
                                }
                            }
                            break;
                        case 3:
                            // (, line 134
                            // call R2, line 134
                            if (!r_R2())
                            {
                                base.cursor = base.limit - v_5;
                                break lab6;
                            }
                            // delete, line 134
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                    }
                }
                break;
            case 8:
                // (, line 140
                // call R2, line 141
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 141
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 142
                var /** number */ v_8 = base.limit - base.cursor;
                lab11: {
                    // (, line 142
                    // [, line 142
                    base.ket = base.cursor;
                    // literal, line 142
                    if (!(base.eq_s_b("at")))
                    {
                        base.cursor = base.limit - v_8;
                        break lab11;
                    }
                    // ], line 142
                    base.bra = base.cursor;
                    // call R2, line 142
                    if (!r_R2())
                    {
                        base.cursor = base.limit - v_8;
                        break lab11;
                    }
                    // delete, line 142
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // [, line 142
                    base.ket = base.cursor;
                    // literal, line 142
                    if (!(base.eq_s_b("ic")))
                    {
                        base.cursor = base.limit - v_8;
                        break lab11;
                    }
                    // ], line 142
                    base.bra = base.cursor;
                    // or, line 142
                    lab12: {
                        var /** number */ v_9 = base.limit - base.cursor;
                        lab13: {
                            // (, line 142
                            // call R2, line 142
                            if (!r_R2())
                            {
                                break lab13;
                            }
                            // delete, line 142
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break lab12;
                        }
                        base.cursor = base.limit - v_9;
                        // <-, line 142
                        if (!base.slice_from("iqU"))
                        {
                            return false;
                        }
                    }
                }
                break;
            case 9:
                // (, line 144
                // <-, line 144
                if (!base.slice_from("eau"))
                {
                    return false;
                }
                break;
            case 10:
                // (, line 145
                // call R1, line 145
                if (!r_R1())
                {
                    return false;
                }
                // <-, line 145
                if (!base.slice_from("al"))
                {
                    return false;
                }
                break;
            case 11:
                // (, line 147
                // or, line 147
                lab14: {
                    var /** number */ v_10 = base.limit - base.cursor;
                    lab15: {
                        // (, line 147
                        // call R2, line 147
                        if (!r_R2())
                        {
                            break lab15;
                        }
                        // delete, line 147
                        if (!base.slice_del())
                        {
                            return false;
                        }
                        break lab14;
                    }
                    base.cursor = base.limit - v_10;
                    // (, line 147
                    // call R1, line 147
                    if (!r_R1())
                    {
                        return false;
                    }
                    // <-, line 147
                    if (!base.slice_from("eux"))
                    {
                        return false;
                    }
                }
                break;
            case 12:
                // (, line 150
                // call R1, line 150
                if (!r_R1())
                {
                    return false;
                }
                if (!(base.out_grouping_b(g_v, 97, 251)))
                {
                    return false;
                }
                // delete, line 150
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 13:
                // (, line 155
                // call RV, line 155
                if (!r_RV())
                {
                    return false;
                }
                // fail, line 155
                // (, line 155
                // <-, line 155
                if (!base.slice_from("ant"))
                {
                    return false;
                }
                return false;
            case 14:
                // (, line 156
                // call RV, line 156
                if (!r_RV())
                {
                    return false;
                }
                // fail, line 156
                // (, line 156
                // <-, line 156
                if (!base.slice_from("ent"))
                {
                    return false;
                }
                return false;
            case 15:
                // (, line 158
                // test, line 158
                var /** number */ v_11 = base.limit - base.cursor;
                // (, line 158
                if (!(base.in_grouping_b(g_v, 97, 251)))
                {
                    return false;
                }
                // call RV, line 158
                if (!r_RV())
                {
                    return false;
                }
                base.cursor = base.limit - v_11;
                // fail, line 158
                // (, line 158
                // delete, line 158
                if (!base.slice_del())
                {
                    return false;
                }
                return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_i_verb_suffix() {
        var /** number */ among_var;
        // setlimit, line 163
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 163
        if (base.cursor < I_pV)
        {
            return false;
        }
        base.cursor = I_pV;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 163
        // [, line 164
        base.ket = base.cursor;
        // substring, line 164
        among_var = base.find_among_b(a_5);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 164
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                base.limit_backward = v_2;
                return false;
            case 1:
                // (, line 170
                if (!(base.out_grouping_b(g_v, 97, 251)))
                {
                    base.limit_backward = v_2;
                    return false;
                }
                // delete, line 170
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        base.limit_backward = v_2;
        return true;
    };

    /** @return {boolean} */
    function r_verb_suffix() {
        var /** number */ among_var;
        // setlimit, line 174
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 174
        if (base.cursor < I_pV)
        {
            return false;
        }
        base.cursor = I_pV;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 174
        // [, line 175
        base.ket = base.cursor;
        // substring, line 175
        among_var = base.find_among_b(a_6);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 175
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                base.limit_backward = v_2;
                return false;
            case 1:
                // (, line 177
                // call R2, line 177
                if (!r_R2())
                {
                    base.limit_backward = v_2;
                    return false;
                }
                // delete, line 177
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 185
                // delete, line 185
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 190
                // delete, line 190
                if (!base.slice_del())
                {
                    return false;
                }
                // try, line 191
                var /** number */ v_3 = base.limit - base.cursor;
                lab0: {
                    // (, line 191
                    // [, line 191
                    base.ket = base.cursor;
                    // literal, line 191
                    if (!(base.eq_s_b("e")))
                    {
                        base.cursor = base.limit - v_3;
                        break lab0;
                    }
                    // ], line 191
                    base.bra = base.cursor;
                    // delete, line 191
                    if (!base.slice_del())
                    {
                        return false;
                    }
                }
                break;
        }
        base.limit_backward = v_2;
        return true;
    };

    /** @return {boolean} */
    function r_residual_suffix() {
        var /** number */ among_var;
        // (, line 198
        // try, line 199
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // (, line 199
            // [, line 199
            base.ket = base.cursor;
            // literal, line 199
            if (!(base.eq_s_b("s")))
            {
                base.cursor = base.limit - v_1;
                break lab0;
            }
            // ], line 199
            base.bra = base.cursor;
            // test, line 199
            var /** number */ v_2 = base.limit - base.cursor;
            if (!(base.out_grouping_b(g_keep_with_s, 97, 232)))
            {
                base.cursor = base.limit - v_1;
                break lab0;
            }
            base.cursor = base.limit - v_2;
            // delete, line 199
            if (!base.slice_del())
            {
                return false;
            }
        }
        // setlimit, line 200
        var /** number */ v_3 = base.limit - base.cursor;
        // tomark, line 200
        if (base.cursor < I_pV)
        {
            return false;
        }
        base.cursor = I_pV;
        var /** number */ v_4 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_3;
        // (, line 200
        // [, line 201
        base.ket = base.cursor;
        // substring, line 201
        among_var = base.find_among_b(a_7);
        if (among_var == 0)
        {
            base.limit_backward = v_4;
            return false;
        }
        // ], line 201
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                base.limit_backward = v_4;
                return false;
            case 1:
                // (, line 202
                // call R2, line 202
                if (!r_R2())
                {
                    base.limit_backward = v_4;
                    return false;
                }
                // or, line 202
                lab1: {
                    var /** number */ v_5 = base.limit - base.cursor;
                    lab2: {
                        // literal, line 202
                        if (!(base.eq_s_b("s")))
                        {
                            break lab2;
                        }
                        break lab1;
                    }
                    base.cursor = base.limit - v_5;
                    // literal, line 202
                    if (!(base.eq_s_b("t")))
                    {
                        base.limit_backward = v_4;
                        return false;
                    }
                }
                // delete, line 202
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 204
                // <-, line 204
                if (!base.slice_from("i"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 205
                // delete, line 205
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 4:
                // (, line 206
                // literal, line 206
                if (!(base.eq_s_b("gu")))
                {
                    base.limit_backward = v_4;
                    return false;
                }
                // delete, line 206
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        base.limit_backward = v_4;
        return true;
    };

    /** @return {boolean} */
    function r_un_double() {
        // (, line 211
        // test, line 212
        var /** number */ v_1 = base.limit - base.cursor;
        // among, line 212
        if (base.find_among_b(a_8) == 0)
        {
            return false;
        }
        base.cursor = base.limit - v_1;
        // [, line 212
        base.ket = base.cursor;
        // next, line 212
        if (base.cursor <= base.limit_backward)
        {
            return false;
        }
        base.cursor--;
        // ], line 212
        base.bra = base.cursor;
        // delete, line 212
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_un_accent() {
        // (, line 215
        // atleast, line 216
        {
            var v_1 = 1;
            // atleast, line 216
            replab0: while(true)
            {
                lab1: {
                    if (!(base.out_grouping_b(g_v, 97, 251)))
                    {
                        break lab1;
                    }
                    v_1--;
                    continue replab0;
                }
                break replab0;
            }
            if (v_1 > 0)
            {
                return false;
            }
        }
        // [, line 217
        base.ket = base.cursor;
        // or, line 217
        lab2: {
            var /** number */ v_3 = base.limit - base.cursor;
            lab3: {
                // literal, line 217
                if (!(base.eq_s_b("\u00E9")))
                {
                    break lab3;
                }
                break lab2;
            }
            base.cursor = base.limit - v_3;
            // literal, line 217
            if (!(base.eq_s_b("\u00E8")))
            {
                return false;
            }
        }
        // ], line 217
        base.bra = base.cursor;
        // <-, line 217
        if (!base.slice_from("e"))
        {
            return false;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 221
        // do, line 223
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call prelude, line 223
            if (!r_prelude())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // do, line 224
        var /** number */ v_2 = base.cursor;
        lab1: {
            // call mark_regions, line 224
            if (!r_mark_regions())
            {
                break lab1;
            }
        }
        base.cursor = v_2;
        // backwards, line 225
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 225
        // do, line 227
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // (, line 227
            // or, line 237
            lab3: {
                var /** number */ v_4 = base.limit - base.cursor;
                lab4: {
                    // (, line 228
                    // and, line 233
                    var /** number */ v_5 = base.limit - base.cursor;
                    // (, line 229
                    // or, line 229
                    lab5: {
                        var /** number */ v_6 = base.limit - base.cursor;
                        lab6: {
                            // call standard_suffix, line 229
                            if (!r_standard_suffix())
                            {
                                break lab6;
                            }
                            break lab5;
                        }
                        base.cursor = base.limit - v_6;
                        lab7: {
                            // call i_verb_suffix, line 230
                            if (!r_i_verb_suffix())
                            {
                                break lab7;
                            }
                            break lab5;
                        }
                        base.cursor = base.limit - v_6;
                        // call verb_suffix, line 231
                        if (!r_verb_suffix())
                        {
                            break lab4;
                        }
                    }
                    base.cursor = base.limit - v_5;
                    // try, line 234
                    var /** number */ v_7 = base.limit - base.cursor;
                    lab8: {
                        // (, line 234
                        // [, line 234
                        base.ket = base.cursor;
                        // or, line 234
                        lab9: {
                            var /** number */ v_8 = base.limit - base.cursor;
                            lab10: {
                                // (, line 234
                                // literal, line 234
                                if (!(base.eq_s_b("Y")))
                                {
                                    break lab10;
                                }
                                // ], line 234
                                base.bra = base.cursor;
                                // <-, line 234
                                if (!base.slice_from("i"))
                                {
                                    return false;
                                }
                                break lab9;
                            }
                            base.cursor = base.limit - v_8;
                            // (, line 235
                            // literal, line 235
                            if (!(base.eq_s_b("\u00E7")))
                            {
                                base.cursor = base.limit - v_7;
                                break lab8;
                            }
                            // ], line 235
                            base.bra = base.cursor;
                            // <-, line 235
                            if (!base.slice_from("c"))
                            {
                                return false;
                            }
                        }
                    }
                    break lab3;
                }
                base.cursor = base.limit - v_4;
                // call residual_suffix, line 238
                if (!r_residual_suffix())
                {
                    break lab2;
                }
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 243
        var /** number */ v_9 = base.limit - base.cursor;
        lab11: {
            // call un_double, line 243
            if (!r_un_double())
            {
                break lab11;
            }
        }
        base.cursor = base.limit - v_9;
        // do, line 244
        var /** number */ v_10 = base.limit - base.cursor;
        lab12: {
            // call un_accent, line 244
            if (!r_un_accent())
            {
                break lab12;
            }
        }
        base.cursor = base.limit - v_10;
        base.cursor = base.limit_backward;        // do, line 246
        var /** number */ v_11 = base.cursor;
        lab13: {
            // call postlude, line 246
            if (!r_postlude())
            {
                break lab13;
            }
        }
        base.cursor = v_11;
        return true;
    };

    this.stemWord = function(word) {
	base.setCurrent(word);
	this.stem();
        return base.getCurrent();
    };
};
