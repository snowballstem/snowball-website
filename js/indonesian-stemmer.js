// This file was generated automatically by the Snowball to Javascript compiler
// http://snowballstem.org/

/**@constructor*/
function IndonesianStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["kah", -1, 1],
        ["lah", -1, 1],
        ["pun", -1, 1]
    ];

    /** @const */ var a_1 = [
        ["nya", -1, 1],
        ["ku", -1, 1],
        ["mu", -1, 1]
    ];

    /** @const */ var a_2 = [
        ["i", -1, 1, r_SUFFIX_I_OK],
        ["an", -1, 1, r_SUFFIX_AN_OK],
        ["kan", 1, 1, r_SUFFIX_KAN_OK]
    ];

    /** @const */ var a_3 = [
        ["di", -1, 1],
        ["ke", -1, 2],
        ["me", -1, 1],
        ["mem", 2, 5],
        ["men", 2, 1],
        ["meng", 4, 1],
        ["meny", 4, 3, r_VOWEL],
        ["pem", -1, 6],
        ["pen", -1, 2],
        ["peng", 8, 2],
        ["peny", 8, 4, r_VOWEL],
        ["ter", -1, 1]
    ];

    /** @const */ var a_4 = [
        ["be", -1, 3, r_KER],
        ["belajar", 0, 4],
        ["ber", 0, 3],
        ["pe", -1, 1],
        ["pelajar", 3, 2],
        ["per", 3, 1]
    ];

    /** @const */ var /** Array<int> */ g_vowel = [17, 65, 16];

    var /** number */ I_prefix = 0;
    var /** number */ I_measure = 0;


    /** @return {boolean} */
    function r_remove_particle() {
        // (, line 50
        // [, line 51
        base.ket = base.cursor;
        // substring, line 51
        if (base.find_among_b(a_0) == 0)
        {
            return false;
        }
        // ], line 51
        base.bra = base.cursor;
        // (, line 52
        // delete, line 52
        if (!base.slice_del())
        {
            return false;
        }
        I_measure -= 1;
        return true;
    };

    /** @return {boolean} */
    function r_remove_possessive_pronoun() {
        // (, line 56
        // [, line 57
        base.ket = base.cursor;
        // substring, line 57
        if (base.find_among_b(a_1) == 0)
        {
            return false;
        }
        // ], line 57
        base.bra = base.cursor;
        // (, line 58
        // delete, line 58
        if (!base.slice_del())
        {
            return false;
        }
        I_measure -= 1;
        return true;
    };

    /** @return {boolean} */
    function r_SUFFIX_KAN_OK() {
        // (, line 63
        // and, line 85
        if (!(I_prefix != 3))
        {
            return false;
        }
        if (!(I_prefix != 2))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_SUFFIX_AN_OK() {
        // (, line 89
        if (!(I_prefix != 1))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_SUFFIX_I_OK() {
        // (, line 91
        if (!(I_prefix <= 2))
        {
            return false;
        }
        // not, line 128
        {
            var /** number */ v_1 = base.limit - base.cursor;
            lab0: {
                // literal, line 128
                if (!(base.eq_s_b("s")))
                {
                    break lab0;
                }
                return false;
            }
            base.cursor = base.limit - v_1;
        }
        return true;
    };

    /** @return {boolean} */
    function r_remove_suffix() {
        // (, line 131
        // [, line 132
        base.ket = base.cursor;
        // substring, line 132
        if (base.find_among_b(a_2) == 0)
        {
            return false;
        }
        // ], line 132
        base.bra = base.cursor;
        // (, line 134
        // delete, line 134
        if (!base.slice_del())
        {
            return false;
        }
        I_measure -= 1;
        return true;
    };

    /** @return {boolean} */
    function r_VOWEL() {
        // (, line 141
        if (!(base.in_grouping(g_vowel, 97, 117)))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_KER() {
        // (, line 143
        if (!(base.out_grouping(g_vowel, 97, 117)))
        {
            return false;
        }
        // literal, line 143
        if (!(base.eq_s("er")))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_remove_first_order_prefix() {
        var /** number */ among_var;
        // (, line 145
        // [, line 146
        base.bra = base.cursor;
        // substring, line 146
        among_var = base.find_among(a_3);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 146
        base.ket = base.cursor;
        switch (among_var) {
            case 1:
                // (, line 147
                // delete, line 147
                if (!base.slice_del())
                {
                    return false;
                }
                I_prefix = 1;
                I_measure -= 1;
                break;
            case 2:
                // (, line 148
                // delete, line 148
                if (!base.slice_del())
                {
                    return false;
                }
                I_prefix = 3;
                I_measure -= 1;
                break;
            case 3:
                // (, line 149
                I_prefix = 1;
                // <-, line 149
                if (!base.slice_from("s"))
                {
                    return false;
                }
                I_measure -= 1;
                break;
            case 4:
                // (, line 150
                I_prefix = 3;
                // <-, line 150
                if (!base.slice_from("s"))
                {
                    return false;
                }
                I_measure -= 1;
                break;
            case 5:
                // (, line 151
                I_prefix = 1;
                I_measure -= 1;
                // or, line 151
                lab0: {
                    var /** number */ v_1 = base.cursor;
                    lab1: {
                        // and, line 151
                        var /** number */ v_2 = base.cursor;
                        if (!(base.in_grouping(g_vowel, 97, 117)))
                        {
                            break lab1;
                        }
                        base.cursor = v_2;
                        // <-, line 151
                        if (!base.slice_from("p"))
                        {
                            return false;
                        }
                        break lab0;
                    }
                    base.cursor = v_1;
                    // delete, line 151
                    if (!base.slice_del())
                    {
                        return false;
                    }
                }
                break;
            case 6:
                // (, line 152
                I_prefix = 3;
                I_measure -= 1;
                // or, line 152
                lab2: {
                    var /** number */ v_3 = base.cursor;
                    lab3: {
                        // and, line 152
                        var /** number */ v_4 = base.cursor;
                        if (!(base.in_grouping(g_vowel, 97, 117)))
                        {
                            break lab3;
                        }
                        base.cursor = v_4;
                        // <-, line 152
                        if (!base.slice_from("p"))
                        {
                            return false;
                        }
                        break lab2;
                    }
                    base.cursor = v_3;
                    // delete, line 152
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
    function r_remove_second_order_prefix() {
        var /** number */ among_var;
        // (, line 156
        // [, line 162
        base.bra = base.cursor;
        // substring, line 162
        among_var = base.find_among(a_4);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 162
        base.ket = base.cursor;
        switch (among_var) {
            case 1:
                // (, line 163
                // delete, line 163
                if (!base.slice_del())
                {
                    return false;
                }
                I_prefix = 2;
                I_measure -= 1;
                break;
            case 2:
                // (, line 164
                // <-, line 164
                if (!base.slice_from("ajar"))
                {
                    return false;
                }
                I_measure -= 1;
                break;
            case 3:
                // (, line 165
                // delete, line 165
                if (!base.slice_del())
                {
                    return false;
                }
                I_prefix = 4;
                I_measure -= 1;
                break;
            case 4:
                // (, line 166
                // <-, line 166
                if (!base.slice_from("ajar"))
                {
                    return false;
                }
                I_prefix = 4;
                I_measure -= 1;
                break;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 171
        I_measure = 0;
        // do, line 173
        var /** number */ v_1 = base.cursor;
        lab0: {
            // (, line 173
            // repeat, line 173
            replab1: while(true)
            {
                var /** number */ v_2 = base.cursor;
                lab2: {
                    // (, line 173
                    // gopast, line 173
                    golab3: while(true)
                    {
                        lab4: {
                            if (!(base.in_grouping(g_vowel, 97, 117)))
                            {
                                break lab4;
                            }
                            break golab3;
                        }
                        if (base.cursor >= base.limit)
                        {
                            break lab2;
                        }
                        base.cursor++;
                    }
                    I_measure += 1;
                    continue replab1;
                }
                base.cursor = v_2;
                break replab1;
            }
        }
        base.cursor = v_1;
        if (!(I_measure > 2))
        {
            return false;
        }
        I_prefix = 0;
        // backwards, line 176
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 176
        // do, line 177
        var /** number */ v_4 = base.limit - base.cursor;
        lab5: {
            // call remove_particle, line 177
            if (!r_remove_particle())
            {
                break lab5;
            }
        }
        base.cursor = base.limit - v_4;
        if (!(I_measure > 2))
        {
            return false;
        }
        // do, line 179
        var /** number */ v_5 = base.limit - base.cursor;
        lab6: {
            // call remove_possessive_pronoun, line 179
            if (!r_remove_possessive_pronoun())
            {
                break lab6;
            }
        }
        base.cursor = base.limit - v_5;
        base.cursor = base.limit_backward;
        if (!(I_measure > 2))
        {
            return false;
        }
        // or, line 188
        lab7: {
            var /** number */ v_6 = base.cursor;
            lab8: {
                // test, line 182
                var /** number */ v_7 = base.cursor;
                // (, line 182
                // call remove_first_order_prefix, line 183
                if (!r_remove_first_order_prefix())
                {
                    break lab8;
                }
                // do, line 184
                var /** number */ v_8 = base.cursor;
                lab9: {
                    // (, line 184
                    // test, line 185
                    var /** number */ v_9 = base.cursor;
                    // (, line 185
                    if (!(I_measure > 2))
                    {
                        break lab9;
                    }
                    // backwards, line 185
                    base.limit_backward = base.cursor; base.cursor = base.limit;
                    // call remove_suffix, line 185
                    if (!r_remove_suffix())
                    {
                        break lab9;
                    }
                    base.cursor = base.limit_backward;
                    base.cursor = v_9;
                    if (!(I_measure > 2))
                    {
                        break lab9;
                    }
                    // call remove_second_order_prefix, line 186
                    if (!r_remove_second_order_prefix())
                    {
                        break lab9;
                    }
                }
                base.cursor = v_8;
                base.cursor = v_7;
                break lab7;
            }
            base.cursor = v_6;
            // (, line 188
            // do, line 189
            var /** number */ v_10 = base.cursor;
            lab10: {
                // call remove_second_order_prefix, line 189
                if (!r_remove_second_order_prefix())
                {
                    break lab10;
                }
            }
            base.cursor = v_10;
            // do, line 190
            var /** number */ v_11 = base.cursor;
            lab11: {
                // (, line 190
                if (!(I_measure > 2))
                {
                    break lab11;
                }
                // backwards, line 190
                base.limit_backward = base.cursor; base.cursor = base.limit;
                // call remove_suffix, line 190
                if (!r_remove_suffix())
                {
                    break lab11;
                }
                base.cursor = base.limit_backward;
            }
            base.cursor = v_11;
        }
        return true;
    };

    /**@return{string}*/
    this['stemWord'] = function(/**string*/word) {
        base.setCurrent(word);
        this.stem();
        return base.getCurrent();
    };
};
window['IndonesianStemmer'] = IndonesianStemmer;
