// This file was generated automatically by the Snowball to JSX compiler
// http://snowballstem.org/

function RomanianStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["", -1, 3],
        ["I", 0, 1],
        ["U", 0, 2]
    ];

    /** @const */ var a_1 = [
        ["ea", -1, 3],
        ["a\u0163ia", -1, 7],
        ["aua", -1, 2],
        ["iua", -1, 4],
        ["a\u0163ie", -1, 7],
        ["ele", -1, 3],
        ["ile", -1, 5],
        ["iile", 6, 4],
        ["iei", -1, 4],
        ["atei", -1, 6],
        ["ii", -1, 4],
        ["ului", -1, 1],
        ["ul", -1, 1],
        ["elor", -1, 3],
        ["ilor", -1, 4],
        ["iilor", 14, 4]
    ];

    /** @const */ var a_2 = [
        ["icala", -1, 4],
        ["iciva", -1, 4],
        ["ativa", -1, 5],
        ["itiva", -1, 6],
        ["icale", -1, 4],
        ["a\u0163iune", -1, 5],
        ["i\u0163iune", -1, 6],
        ["atoare", -1, 5],
        ["itoare", -1, 6],
        ["\u0103toare", -1, 5],
        ["icitate", -1, 4],
        ["abilitate", -1, 1],
        ["ibilitate", -1, 2],
        ["ivitate", -1, 3],
        ["icive", -1, 4],
        ["ative", -1, 5],
        ["itive", -1, 6],
        ["icali", -1, 4],
        ["atori", -1, 5],
        ["icatori", 18, 4],
        ["itori", -1, 6],
        ["\u0103tori", -1, 5],
        ["icitati", -1, 4],
        ["abilitati", -1, 1],
        ["ivitati", -1, 3],
        ["icivi", -1, 4],
        ["ativi", -1, 5],
        ["itivi", -1, 6],
        ["icit\u0103i", -1, 4],
        ["abilit\u0103i", -1, 1],
        ["ivit\u0103i", -1, 3],
        ["icit\u0103\u0163i", -1, 4],
        ["abilit\u0103\u0163i", -1, 1],
        ["ivit\u0103\u0163i", -1, 3],
        ["ical", -1, 4],
        ["ator", -1, 5],
        ["icator", 35, 4],
        ["itor", -1, 6],
        ["\u0103tor", -1, 5],
        ["iciv", -1, 4],
        ["ativ", -1, 5],
        ["itiv", -1, 6],
        ["ical\u0103", -1, 4],
        ["iciv\u0103", -1, 4],
        ["ativ\u0103", -1, 5],
        ["itiv\u0103", -1, 6]
    ];

    /** @const */ var a_3 = [
        ["ica", -1, 1],
        ["abila", -1, 1],
        ["ibila", -1, 1],
        ["oasa", -1, 1],
        ["ata", -1, 1],
        ["ita", -1, 1],
        ["anta", -1, 1],
        ["ista", -1, 3],
        ["uta", -1, 1],
        ["iva", -1, 1],
        ["ic", -1, 1],
        ["ice", -1, 1],
        ["abile", -1, 1],
        ["ibile", -1, 1],
        ["isme", -1, 3],
        ["iune", -1, 2],
        ["oase", -1, 1],
        ["ate", -1, 1],
        ["itate", 17, 1],
        ["ite", -1, 1],
        ["ante", -1, 1],
        ["iste", -1, 3],
        ["ute", -1, 1],
        ["ive", -1, 1],
        ["ici", -1, 1],
        ["abili", -1, 1],
        ["ibili", -1, 1],
        ["iuni", -1, 2],
        ["atori", -1, 1],
        ["osi", -1, 1],
        ["ati", -1, 1],
        ["itati", 30, 1],
        ["iti", -1, 1],
        ["anti", -1, 1],
        ["isti", -1, 3],
        ["uti", -1, 1],
        ["i\u015Fti", -1, 3],
        ["ivi", -1, 1],
        ["it\u0103i", -1, 1],
        ["o\u015Fi", -1, 1],
        ["it\u0103\u0163i", -1, 1],
        ["abil", -1, 1],
        ["ibil", -1, 1],
        ["ism", -1, 3],
        ["ator", -1, 1],
        ["os", -1, 1],
        ["at", -1, 1],
        ["it", -1, 1],
        ["ant", -1, 1],
        ["ist", -1, 3],
        ["ut", -1, 1],
        ["iv", -1, 1],
        ["ic\u0103", -1, 1],
        ["abil\u0103", -1, 1],
        ["ibil\u0103", -1, 1],
        ["oas\u0103", -1, 1],
        ["at\u0103", -1, 1],
        ["it\u0103", -1, 1],
        ["ant\u0103", -1, 1],
        ["ist\u0103", -1, 3],
        ["ut\u0103", -1, 1],
        ["iv\u0103", -1, 1]
    ];

    /** @const */ var a_4 = [
        ["ea", -1, 1],
        ["ia", -1, 1],
        ["esc", -1, 1],
        ["\u0103sc", -1, 1],
        ["ind", -1, 1],
        ["\u00E2nd", -1, 1],
        ["are", -1, 1],
        ["ere", -1, 1],
        ["ire", -1, 1],
        ["\u00E2re", -1, 1],
        ["se", -1, 2],
        ["ase", 10, 1],
        ["sese", 10, 2],
        ["ise", 10, 1],
        ["use", 10, 1],
        ["\u00E2se", 10, 1],
        ["e\u015Fte", -1, 1],
        ["\u0103\u015Fte", -1, 1],
        ["eze", -1, 1],
        ["ai", -1, 1],
        ["eai", 19, 1],
        ["iai", 19, 1],
        ["sei", -1, 2],
        ["e\u015Fti", -1, 1],
        ["\u0103\u015Fti", -1, 1],
        ["ui", -1, 1],
        ["ezi", -1, 1],
        ["\u00E2i", -1, 1],
        ["a\u015Fi", -1, 1],
        ["se\u015Fi", -1, 2],
        ["ase\u015Fi", 29, 1],
        ["sese\u015Fi", 29, 2],
        ["ise\u015Fi", 29, 1],
        ["use\u015Fi", 29, 1],
        ["\u00E2se\u015Fi", 29, 1],
        ["i\u015Fi", -1, 1],
        ["u\u015Fi", -1, 1],
        ["\u00E2\u015Fi", -1, 1],
        ["a\u0163i", -1, 2],
        ["ea\u0163i", 38, 1],
        ["ia\u0163i", 38, 1],
        ["e\u0163i", -1, 2],
        ["i\u0163i", -1, 2],
        ["\u00E2\u0163i", -1, 2],
        ["ar\u0103\u0163i", -1, 1],
        ["ser\u0103\u0163i", -1, 2],
        ["aser\u0103\u0163i", 45, 1],
        ["seser\u0103\u0163i", 45, 2],
        ["iser\u0103\u0163i", 45, 1],
        ["user\u0103\u0163i", 45, 1],
        ["\u00E2ser\u0103\u0163i", 45, 1],
        ["ir\u0103\u0163i", -1, 1],
        ["ur\u0103\u0163i", -1, 1],
        ["\u00E2r\u0103\u0163i", -1, 1],
        ["am", -1, 1],
        ["eam", 54, 1],
        ["iam", 54, 1],
        ["em", -1, 2],
        ["asem", 57, 1],
        ["sesem", 57, 2],
        ["isem", 57, 1],
        ["usem", 57, 1],
        ["\u00E2sem", 57, 1],
        ["im", -1, 2],
        ["\u00E2m", -1, 2],
        ["\u0103m", -1, 2],
        ["ar\u0103m", 65, 1],
        ["ser\u0103m", 65, 2],
        ["aser\u0103m", 67, 1],
        ["seser\u0103m", 67, 2],
        ["iser\u0103m", 67, 1],
        ["user\u0103m", 67, 1],
        ["\u00E2ser\u0103m", 67, 1],
        ["ir\u0103m", 65, 1],
        ["ur\u0103m", 65, 1],
        ["\u00E2r\u0103m", 65, 1],
        ["au", -1, 1],
        ["eau", 76, 1],
        ["iau", 76, 1],
        ["indu", -1, 1],
        ["\u00E2ndu", -1, 1],
        ["ez", -1, 1],
        ["easc\u0103", -1, 1],
        ["ar\u0103", -1, 1],
        ["ser\u0103", -1, 2],
        ["aser\u0103", 84, 1],
        ["seser\u0103", 84, 2],
        ["iser\u0103", 84, 1],
        ["user\u0103", 84, 1],
        ["\u00E2ser\u0103", 84, 1],
        ["ir\u0103", -1, 1],
        ["ur\u0103", -1, 1],
        ["\u00E2r\u0103", -1, 1],
        ["eaz\u0103", -1, 1]
    ];

    /** @const */ var a_5 = [
        ["a", -1, 1],
        ["e", -1, 1],
        ["ie", 1, 1],
        ["i", -1, 1],
        ["\u0103", -1, 1]
    ];

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 32, 0, 0, 4];

    var /** boolean */ B_standard_suffix_removed = false;
    var /** number */ I_p2 = 0;
    var /** number */ I_p1 = 0;
    var /** number */ I_pV = 0;


    /** @return {boolean} */
    function r_prelude() {
        // (, line 31
        // repeat, line 32
        replab0: while(true)
        {
            var /** number */ v_1 = base.cursor;
            lab1: {
                // goto, line 32
                golab2: while(true)
                {
                    var /** number */ v_2 = base.cursor;
                    lab3: {
                        // (, line 32
                        if (!(base.in_grouping(g_v, 97, 259)))
                        {
                            break lab3;
                        }
                        // [, line 33
                        base.bra = base.cursor;
                        // or, line 33
                        lab4: {
                            var /** number */ v_3 = base.cursor;
                            lab5: {
                                // (, line 33
                                // literal, line 33
                                if (!(base.eq_s("u")))
                                {
                                    break lab5;
                                }
                                // ], line 33
                                base.ket = base.cursor;
                                if (!(base.in_grouping(g_v, 97, 259)))
                                {
                                    break lab5;
                                }
                                // <-, line 33
                                if (!base.slice_from("U"))
                                {
                                    return false;
                                }
                                break lab4;
                            }
                            base.cursor = v_3;
                            // (, line 34
                            // literal, line 34
                            if (!(base.eq_s("i")))
                            {
                                break lab3;
                            }
                            // ], line 34
                            base.ket = base.cursor;
                            if (!(base.in_grouping(g_v, 97, 259)))
                            {
                                break lab3;
                            }
                            // <-, line 34
                            if (!base.slice_from("I"))
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
        // (, line 38
        I_pV = base.limit;
        I_p1 = base.limit;
        I_p2 = base.limit;
        // do, line 44
        var /** number */ v_1 = base.cursor;
        lab0: {
            // (, line 44
            // or, line 46
            lab1: {
                var /** number */ v_2 = base.cursor;
                lab2: {
                    // (, line 45
                    if (!(base.in_grouping(g_v, 97, 259)))
                    {
                        break lab2;
                    }
                    // or, line 45
                    lab3: {
                        var /** number */ v_3 = base.cursor;
                        lab4: {
                            // (, line 45
                            if (!(base.out_grouping(g_v, 97, 259)))
                            {
                                break lab4;
                            }
                            // gopast, line 45
                            golab5: while(true)
                            {
                                lab6: {
                                    if (!(base.in_grouping(g_v, 97, 259)))
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
                        // (, line 45
                        if (!(base.in_grouping(g_v, 97, 259)))
                        {
                            break lab2;
                        }
                        // gopast, line 45
                        golab7: while(true)
                        {
                            lab8: {
                                if (!(base.out_grouping(g_v, 97, 259)))
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
                // (, line 47
                if (!(base.out_grouping(g_v, 97, 259)))
                {
                    break lab0;
                }
                // or, line 47
                lab9: {
                    var /** number */ v_6 = base.cursor;
                    lab10: {
                        // (, line 47
                        if (!(base.out_grouping(g_v, 97, 259)))
                        {
                            break lab10;
                        }
                        // gopast, line 47
                        golab11: while(true)
                        {
                            lab12: {
                                if (!(base.in_grouping(g_v, 97, 259)))
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
                    // (, line 47
                    if (!(base.in_grouping(g_v, 97, 259)))
                    {
                        break lab0;
                    }
                    // next, line 47
                    if (base.cursor >= base.limit)
                    {
                        break lab0;
                    }
                    base.cursor++;
                }
            }
            // setmark pV, line 48
            I_pV = base.cursor;
        }
        base.cursor = v_1;
        // do, line 50
        var /** number */ v_8 = base.cursor;
        lab13: {
            // (, line 50
            // gopast, line 51
            golab14: while(true)
            {
                lab15: {
                    if (!(base.in_grouping(g_v, 97, 259)))
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
            // gopast, line 51
            golab16: while(true)
            {
                lab17: {
                    if (!(base.out_grouping(g_v, 97, 259)))
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
            // setmark p1, line 51
            I_p1 = base.cursor;
            // gopast, line 52
            golab18: while(true)
            {
                lab19: {
                    if (!(base.in_grouping(g_v, 97, 259)))
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
            // gopast, line 52
            golab20: while(true)
            {
                lab21: {
                    if (!(base.out_grouping(g_v, 97, 259)))
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
            // setmark p2, line 52
            I_p2 = base.cursor;
        }
        base.cursor = v_8;
        return true;
    };

    /** @return {boolean} */
    function r_postlude() {
        var /** number */ among_var;
        // repeat, line 56
        replab0: while(true)
        {
            var /** number */ v_1 = base.cursor;
            lab1: {
                // (, line 56
                // [, line 58
                base.bra = base.cursor;
                // substring, line 58
                among_var = base.find_among(a_0);
                if (among_var == 0)
                {
                    break lab1;
                }
                // ], line 58
                base.ket = base.cursor;
                switch (among_var) {
                    case 0:
                        break lab1;
                    case 1:
                        // (, line 59
                        // <-, line 59
                        if (!base.slice_from("i"))
                        {
                            return false;
                        }
                        break;
                    case 2:
                        // (, line 60
                        // <-, line 60
                        if (!base.slice_from("u"))
                        {
                            return false;
                        }
                        break;
                    case 3:
                        // (, line 61
                        // next, line 61
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
    function r_step_0() {
        var /** number */ among_var;
        // (, line 72
        // [, line 73
        base.ket = base.cursor;
        // substring, line 73
        among_var = base.find_among_b(a_1);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 73
        base.bra = base.cursor;
        // call R1, line 73
        if (!r_R1())
        {
            return false;
        }
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 75
                // delete, line 75
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 77
                // <-, line 77
                if (!base.slice_from("a"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 79
                // <-, line 79
                if (!base.slice_from("e"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 81
                // <-, line 81
                if (!base.slice_from("i"))
                {
                    return false;
                }
                break;
            case 5:
                // (, line 83
                // not, line 83
                {
                    var /** number */ v_1 = base.limit - base.cursor;
                    lab0: {
                        // literal, line 83
                        if (!(base.eq_s_b("ab")))
                        {
                            break lab0;
                        }
                        return false;
                    }
                    base.cursor = base.limit - v_1;
                }
                // <-, line 83
                if (!base.slice_from("i"))
                {
                    return false;
                }
                break;
            case 6:
                // (, line 85
                // <-, line 85
                if (!base.slice_from("at"))
                {
                    return false;
                }
                break;
            case 7:
                // (, line 87
                // <-, line 87
                if (!base.slice_from("a\u0163i"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_combo_suffix() {
        var /** number */ among_var;
        // test, line 91
        var /** number */ v_1 = base.limit - base.cursor;
        // (, line 91
        // [, line 92
        base.ket = base.cursor;
        // substring, line 92
        among_var = base.find_among_b(a_2);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 92
        base.bra = base.cursor;
        // call R1, line 92
        if (!r_R1())
        {
            return false;
        }
        // (, line 92
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 100
                // <-, line 101
                if (!base.slice_from("abil"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 103
                // <-, line 104
                if (!base.slice_from("ibil"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 106
                // <-, line 107
                if (!base.slice_from("iv"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 112
                // <-, line 113
                if (!base.slice_from("ic"))
                {
                    return false;
                }
                break;
            case 5:
                // (, line 117
                // <-, line 118
                if (!base.slice_from("at"))
                {
                    return false;
                }
                break;
            case 6:
                // (, line 121
                // <-, line 122
                if (!base.slice_from("it"))
                {
                    return false;
                }
                break;
        }
        // set standard_suffix_removed, line 125
        B_standard_suffix_removed = true;
        base.cursor = base.limit - v_1;
        return true;
    };

    /** @return {boolean} */
    function r_standard_suffix() {
        var /** number */ among_var;
        // (, line 129
        // unset standard_suffix_removed, line 130
        B_standard_suffix_removed = false;
        // repeat, line 131
        replab0: while(true)
        {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // call combo_suffix, line 131
                if (!r_combo_suffix())
                {
                    break lab1;
                }
                continue replab0;
            }
            base.cursor = base.limit - v_1;
            break replab0;
        }
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
        // call R2, line 132
        if (!r_R2())
        {
            return false;
        }
        // (, line 132
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 148
                // delete, line 149
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 151
                // literal, line 152
                if (!(base.eq_s_b("\u0163")))
                {
                    return false;
                }
                // ], line 152
                base.bra = base.cursor;
                // <-, line 152
                if (!base.slice_from("t"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 155
                // <-, line 156
                if (!base.slice_from("ist"))
                {
                    return false;
                }
                break;
        }
        // set standard_suffix_removed, line 160
        B_standard_suffix_removed = true;
        return true;
    };

    /** @return {boolean} */
    function r_verb_suffix() {
        var /** number */ among_var;
        // setlimit, line 164
        var /** number */ v_1 = base.limit - base.cursor;
        // tomark, line 164
        if (base.cursor < I_pV)
        {
            return false;
        }
        base.cursor = I_pV;
        var /** number */ v_2 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_1;
        // (, line 164
        // [, line 165
        base.ket = base.cursor;
        // substring, line 165
        among_var = base.find_among_b(a_4);
        if (among_var == 0)
        {
            base.limit_backward = v_2;
            return false;
        }
        // ], line 165
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                base.limit_backward = v_2;
                return false;
            case 1:
                // (, line 200
                // or, line 200
                lab0: {
                    var /** number */ v_3 = base.limit - base.cursor;
                    lab1: {
                        if (!(base.out_grouping_b(g_v, 97, 259)))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_3;
                    // literal, line 200
                    if (!(base.eq_s_b("u")))
                    {
                        base.limit_backward = v_2;
                        return false;
                    }
                }
                // delete, line 200
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 214
                // delete, line 214
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
    function r_vowel_suffix() {
        var /** number */ among_var;
        // (, line 218
        // [, line 219
        base.ket = base.cursor;
        // substring, line 219
        among_var = base.find_among_b(a_5);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 219
        base.bra = base.cursor;
        // call RV, line 219
        if (!r_RV())
        {
            return false;
        }
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 220
                // delete, line 220
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 225
        // do, line 226
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call prelude, line 226
            if (!r_prelude())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // do, line 227
        var /** number */ v_2 = base.cursor;
        lab1: {
            // call mark_regions, line 227
            if (!r_mark_regions())
            {
                break lab1;
            }
        }
        base.cursor = v_2;
        // backwards, line 228
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 228
        // do, line 229
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // call step_0, line 229
            if (!r_step_0())
            {
                break lab2;
            }
        }
        base.cursor = base.limit - v_3;
        // do, line 230
        var /** number */ v_4 = base.limit - base.cursor;
        lab3: {
            // call standard_suffix, line 230
            if (!r_standard_suffix())
            {
                break lab3;
            }
        }
        base.cursor = base.limit - v_4;
        // do, line 231
        var /** number */ v_5 = base.limit - base.cursor;
        lab4: {
            // (, line 231
            // or, line 231
            lab5: {
                var /** number */ v_6 = base.limit - base.cursor;
                lab6: {
                    // Boolean test standard_suffix_removed, line 231
                    if (!(B_standard_suffix_removed))
                    {
                        break lab6;
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
        }
        base.cursor = base.limit - v_5;
        // do, line 232
        var /** number */ v_7 = base.limit - base.cursor;
        lab7: {
            // call vowel_suffix, line 232
            if (!r_vowel_suffix())
            {
                break lab7;
            }
        }
        base.cursor = base.limit - v_7;
        base.cursor = base.limit_backward;        // do, line 234
        var /** number */ v_8 = base.cursor;
        lab8: {
            // call postlude, line 234
            if (!r_postlude())
            {
                break lab8;
            }
        }
        base.cursor = v_8;
        return true;
    };

    this.stemWord = function(word) {
	base.setCurrent(word);
	this.stem();
        return base.getCurrent();
    };
};
