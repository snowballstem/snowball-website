// This file was generated automatically by the Snowball to Javascript compiler
// http://snowballstem.org/

/**@constructor*/
function TamilStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["\u0B95", -1, -1],
        ["\u0B99", -1, -1],
        ["\u0B9A", -1, -1],
        ["\u0B9E", -1, -1],
        ["\u0BA4", -1, -1],
        ["\u0BA8", -1, -1],
        ["\u0BAA", -1, -1],
        ["\u0BAE", -1, -1],
        ["\u0BAF", -1, -1],
        ["\u0BB5", -1, -1]
    ];

    /** @const */ var a_1 = [
        ["\u0BA8\u0BCD\u0BA4", -1, -1],
        ["\u0BA8\u0BCD\u0BA4\u0BCD", -1, -1],
        ["\u0BA8\u0BCD", -1, -1]
    ];

    /** @const */ var a_2 = [
        ["\u0BBF", -1, -1],
        ["\u0BC0", -1, -1],
        ["\u0BC8", -1, -1]
    ];

    /** @const */ var a_3 = [
        ["\u0B95", -1, -1],
        ["\u0B9A", -1, -1],
        ["\u0B9F", -1, -1],
        ["\u0BA4", -1, -1],
        ["\u0BAA", -1, -1],
        ["\u0BB1", -1, -1]
    ];

    /** @const */ var a_4 = [
        ["\u0B95", -1, -1],
        ["\u0B9A", -1, -1],
        ["\u0B9F", -1, -1],
        ["\u0BA4", -1, -1],
        ["\u0BAA", -1, -1],
        ["\u0BB1", -1, -1]
    ];

    /** @const */ var a_5 = [
        ["\u0B95", -1, -1],
        ["\u0B9A", -1, -1],
        ["\u0B9F", -1, -1],
        ["\u0BA4", -1, -1],
        ["\u0BAA", -1, -1],
        ["\u0BB1", -1, -1]
    ];

    /** @const */ var a_6 = [
        ["\u0BAF", -1, -1],
        ["\u0BB0", -1, -1],
        ["\u0BB2", -1, -1],
        ["\u0BB3", -1, -1],
        ["\u0BB4", -1, -1],
        ["\u0BB5", -1, -1]
    ];

    /** @const */ var a_7 = [
        ["\u0B99", -1, -1],
        ["\u0B9E", -1, -1],
        ["\u0BA3", -1, -1],
        ["\u0BA8", -1, -1],
        ["\u0BA9", -1, -1],
        ["\u0BAE", -1, -1]
    ];

    /** @const */ var a_8 = [
        ["\u0BAF", -1, -1],
        ["\u0BB5", -1, -1],
        ["\u0BB5\u0BCD", -1, -1]
    ];

    /** @const */ var a_9 = [
        ["\u0BBE", -1, -1],
        ["\u0BBF", -1, -1],
        ["\u0BC0", -1, -1],
        ["\u0BC1", -1, -1],
        ["\u0BC2", -1, -1],
        ["\u0BC6", -1, -1],
        ["\u0BC7", -1, -1],
        ["\u0BC8", -1, -1]
    ];

    /** @const */ var a_10 = [
        ["\u0BBE", -1, -1],
        ["\u0BBF", -1, -1],
        ["\u0BC0", -1, -1],
        ["\u0BC1", -1, -1],
        ["\u0BC2", -1, -1],
        ["\u0BC6", -1, -1],
        ["\u0BC7", -1, -1],
        ["\u0BC8", -1, -1]
    ];

    /** @const */ var a_11 = [
        ["\u0B85", -1, -1],
        ["\u0B87", -1, -1],
        ["\u0B89", -1, -1]
    ];

    /** @const */ var a_12 = [
        ["\u0B95", -1, -1],
        ["\u0B99", -1, -1],
        ["\u0B9A", -1, -1],
        ["\u0B9E", -1, -1],
        ["\u0BA4", -1, -1],
        ["\u0BA8", -1, -1],
        ["\u0BAA", -1, -1],
        ["\u0BAE", -1, -1],
        ["\u0BAF", -1, -1],
        ["\u0BB5", -1, -1]
    ];

    /** @const */ var a_13 = [
        ["\u0B95", -1, -1],
        ["\u0B9A", -1, -1],
        ["\u0B9F", -1, -1],
        ["\u0BA4", -1, -1],
        ["\u0BAA", -1, -1],
        ["\u0BB1", -1, -1]
    ];

    /** @const */ var a_14 = [
        ["\u0BBE", -1, -1],
        ["\u0BC7", -1, -1],
        ["\u0BCB", -1, -1]
    ];

    /** @const */ var a_15 = [
        ["\u0BAA\u0BBF", -1, -1],
        ["\u0BB5\u0BBF", -1, -1]
    ];

    /** @const */ var a_16 = [
        ["\u0BBE", -1, -1],
        ["\u0BBF", -1, -1],
        ["\u0BC0", -1, -1],
        ["\u0BC1", -1, -1],
        ["\u0BC2", -1, -1],
        ["\u0BC6", -1, -1],
        ["\u0BC7", -1, -1],
        ["\u0BC8", -1, -1]
    ];

    /** @const */ var a_17 = [
        ["\u0BAA\u0B9F\u0BCD\u0B9F", -1, -1],
        ["\u0BAA\u0B9F\u0BCD\u0B9F\u0BA3", -1, -1],
        ["\u0BA4\u0BBE\u0BA9", -1, -1],
        ["\u0BAA\u0B9F\u0BBF\u0BA4\u0BBE\u0BA9", 2, -1],
        ["\u0B95\u0BC1\u0BB0\u0BBF\u0BAF", -1, -1],
        ["\u0BAA\u0B9F\u0BBF", -1, -1],
        ["\u0BAA\u0BB1\u0BCD\u0BB1\u0BBF", -1, -1],
        ["\u0BAA\u0B9F\u0BC1", -1, -1],
        ["\u0BB5\u0BBF\u0B9F\u0BC1", -1, -1],
        ["\u0BAA\u0B9F\u0BCD\u0B9F\u0BC1", -1, -1],
        ["\u0BB5\u0BBF\u0B9F\u0BCD\u0B9F\u0BC1", -1, -1],
        ["\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1", -1, -1],
        ["\u0BC6\u0BB2\u0BCD\u0BB2\u0BBE\u0BAE\u0BCD", -1, -1]
    ];

    /** @const */ var a_18 = [
        ["\u0B95", -1, -1],
        ["\u0B9A", -1, -1],
        ["\u0B9F", -1, -1],
        ["\u0BA4", -1, -1],
        ["\u0BAA", -1, -1],
        ["\u0BB1", -1, -1]
    ];

    /** @const */ var a_19 = [
        ["\u0B95", -1, -1],
        ["\u0B9A", -1, -1],
        ["\u0B9F", -1, -1],
        ["\u0BA4", -1, -1],
        ["\u0BAA", -1, -1],
        ["\u0BB1", -1, -1]
    ];

    /** @const */ var a_20 = [
        ["\u0BBE", -1, -1],
        ["\u0BBF", -1, -1],
        ["\u0BC0", -1, -1],
        ["\u0BC1", -1, -1],
        ["\u0BC2", -1, -1],
        ["\u0BC6", -1, -1],
        ["\u0BC7", -1, -1],
        ["\u0BC8", -1, -1]
    ];

    /** @const */ var a_21 = [
        ["\u0BBE", -1, -1],
        ["\u0BBF", -1, -1],
        ["\u0BC0", -1, -1],
        ["\u0BC1", -1, -1],
        ["\u0BC2", -1, -1],
        ["\u0BC6", -1, -1],
        ["\u0BC7", -1, -1],
        ["\u0BC8", -1, -1]
    ];

    /** @const */ var a_22 = [
        ["\u0BAA\u0B9F\u0BC1", -1, -1],
        ["\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BCD", -1, -1]
    ];

    /** @const */ var a_23 = [
        ["\u0B85", -1, -1],
        ["\u0B86", -1, -1],
        ["\u0B87", -1, -1],
        ["\u0B88", -1, -1],
        ["\u0B89", -1, -1],
        ["\u0B8A", -1, -1],
        ["\u0B8E", -1, -1],
        ["\u0B8F", -1, -1],
        ["\u0B90", -1, -1],
        ["\u0B92", -1, -1],
        ["\u0B93", -1, -1],
        ["\u0B94", -1, -1]
    ];

    /** @const */ var a_24 = [
        ["\u0BBE", -1, -1],
        ["\u0BBF", -1, -1],
        ["\u0BC0", -1, -1],
        ["\u0BC1", -1, -1],
        ["\u0BC2", -1, -1],
        ["\u0BC6", -1, -1],
        ["\u0BC7", -1, -1],
        ["\u0BC8", -1, -1]
    ];

    /** @const */ var a_25 = [
        ["\u0B95\u0BBF\u0BB1", -1, -1],
        ["\u0B95\u0BBF\u0BA9\u0BCD\u0BB1", -1, -1],
        ["\u0BBE\u0BA8\u0BBF\u0BA9\u0BCD\u0BB1", -1, -1],
        ["\u0B95\u0BBF\u0BB1\u0BCD", -1, -1],
        ["\u0B95\u0BBF\u0BA9\u0BCD\u0BB1\u0BCD", -1, -1],
        ["\u0BBE\u0BA8\u0BBF\u0BA9\u0BCD\u0BB1\u0BCD", -1, -1]
    ];

    var /** number */ I_length = 0;
    var /** boolean */ B_found_wrong_ending = false;
    var /** boolean */ B_found_vetrumai_urupu = false;
    var /** boolean */ B_found_a_match = false;


    /** @return {boolean} */
    function r_has_min_length() {
        // (, line 104
        I_length = (base.current.length);
        if (!(I_length > 4))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_fix_va_start() {
        // (, line 109
        // or, line 110
        lab0: {
            var /** number */ v_1 = base.cursor;
            lab1: {
                // (, line 110
                // and, line 110
                var /** number */ v_2 = base.cursor;
                // try, line 110
                var /** number */ v_3 = base.cursor;
                lab2: {
                    // literal, line 110
                    if (!(base.eq_s("\u0BB5\u0BCB")))
                    {
                        base.cursor = v_3;
                        break lab2;
                    }
                }
                base.cursor = v_2;
                // [, line 110
                base.bra = base.cursor;
                // literal, line 110
                if (!(base.eq_s("\u0BB5\u0BCB")))
                {
                    break lab1;
                }
                // ], line 110
                base.ket = base.cursor;
                // <-, line 110
                if (!base.slice_from("\u0B93"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = v_1;
            lab3: {
                // (, line 111
                // and, line 111
                var /** number */ v_4 = base.cursor;
                // try, line 111
                var /** number */ v_5 = base.cursor;
                lab4: {
                    // literal, line 111
                    if (!(base.eq_s("\u0BB5\u0BCA")))
                    {
                        base.cursor = v_5;
                        break lab4;
                    }
                }
                base.cursor = v_4;
                // [, line 111
                base.bra = base.cursor;
                // literal, line 111
                if (!(base.eq_s("\u0BB5\u0BCA")))
                {
                    break lab3;
                }
                // ], line 111
                base.ket = base.cursor;
                // <-, line 111
                if (!base.slice_from("\u0B92"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = v_1;
            lab5: {
                // (, line 112
                // and, line 112
                var /** number */ v_6 = base.cursor;
                // try, line 112
                var /** number */ v_7 = base.cursor;
                lab6: {
                    // literal, line 112
                    if (!(base.eq_s("\u0BB5\u0BC1")))
                    {
                        base.cursor = v_7;
                        break lab6;
                    }
                }
                base.cursor = v_6;
                // [, line 112
                base.bra = base.cursor;
                // literal, line 112
                if (!(base.eq_s("\u0BB5\u0BC1")))
                {
                    break lab5;
                }
                // ], line 112
                base.ket = base.cursor;
                // <-, line 112
                if (!base.slice_from("\u0B89"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = v_1;
            // (, line 113
            // and, line 113
            var /** number */ v_8 = base.cursor;
            // try, line 113
            var /** number */ v_9 = base.cursor;
            lab7: {
                // literal, line 113
                if (!(base.eq_s("\u0BB5\u0BC2")))
                {
                    base.cursor = v_9;
                    break lab7;
                }
            }
            base.cursor = v_8;
            // [, line 113
            base.bra = base.cursor;
            // literal, line 113
            if (!(base.eq_s("\u0BB5\u0BC2")))
            {
                return false;
            }
            // ], line 113
            base.ket = base.cursor;
            // <-, line 113
            if (!base.slice_from("\u0B8A"))
            {
                return false;
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_fix_endings() {
        // (, line 116
        // set found_wrong_ending, line 117
        B_found_wrong_ending = true;
        // repeat, line 118
        replab0: while(true)
        {
            var /** number */ v_1 = base.cursor;
            lab1: {
                // (, line 118
                // Boolean test found_wrong_ending, line 118
                if (!B_found_wrong_ending)
                {
                    break lab1;
                }
                // (, line 118
                // do, line 118
                var /** number */ v_2 = base.cursor;
                lab2: {
                    // call fix_ending, line 118
                    if (!r_fix_ending())
                    {
                        break lab2;
                    }
                }
                base.cursor = v_2;
                continue replab0;
            }
            base.cursor = v_1;
            break replab0;
        }
        return true;
    };

    /** @return {boolean} */
    function r_remove_question_prefixes() {
        // (, line 121
        // [, line 122
        base.bra = base.cursor;
        // (, line 122
        // literal, line 122
        if (!(base.eq_s("\u0B8E")))
        {
            return false;
        }
        // among, line 122
        if (base.find_among(a_0) == 0)
        {
            return false;
        }
        // literal, line 122
        if (!(base.eq_s("\u0BCD")))
        {
            return false;
        }
        // ], line 122
        base.ket = base.cursor;
        // delete, line 122
        if (!base.slice_del())
        {
            return false;
        }
        // do, line 123
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call fix_va_start, line 123
            if (!r_fix_va_start())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        return true;
    };

    /** @return {boolean} */
    function r_fix_ending() {
        // (, line 126
        // unset found_wrong_ending, line 127
        B_found_wrong_ending = false;
        I_length = (base.current.length);
        if (!(I_length > 3))
        {
            return false;
        }
        // backwards, line 130
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 130
        // or, line 132
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // (, line 131
                // [, line 131
                base.ket = base.cursor;
                // among, line 131
                if (base.find_among_b(a_1) == 0)
                {
                    break lab1;
                }
                // ], line 131
                base.bra = base.cursor;
                // delete, line 131
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab2: {
                // (, line 133
                // [, line 133
                base.ket = base.cursor;
                // literal, line 133
                if (!(base.eq_s_b("\u0BAF\u0BCD")))
                {
                    break lab2;
                }
                // test, line 133
                var /** number */ v_2 = base.limit - base.cursor;
                // among, line 133
                if (base.find_among_b(a_2) == 0)
                {
                    break lab2;
                }
                base.cursor = base.limit - v_2;
                // ], line 133
                base.bra = base.cursor;
                // delete, line 133
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab3: {
                // (, line 135
                // [, line 135
                base.ket = base.cursor;
                // or, line 135
                lab4: {
                    var /** number */ v_3 = base.limit - base.cursor;
                    lab5: {
                        // literal, line 135
                        if (!(base.eq_s_b("\u0B9F\u0BCD\u0BAA\u0BCD")))
                        {
                            break lab5;
                        }
                        break lab4;
                    }
                    base.cursor = base.limit - v_3;
                    // literal, line 135
                    if (!(base.eq_s_b("\u0B9F\u0BCD\u0B95\u0BCD")))
                    {
                        break lab3;
                    }
                }
                // ], line 135
                base.bra = base.cursor;
                // <-, line 135
                if (!base.slice_from("\u0BB3\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab6: {
                // (, line 137
                // [, line 137
                base.ket = base.cursor;
                // literal, line 137
                if (!(base.eq_s_b("\u0BA9\u0BCD\u0BB1\u0BCD")))
                {
                    break lab6;
                }
                // ], line 137
                base.bra = base.cursor;
                // <-, line 137
                if (!base.slice_from("\u0BB2\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab7: {
                // (, line 140
                // [, line 140
                base.ket = base.cursor;
                // literal, line 140
                if (!(base.eq_s_b("\u0BB1\u0BCD\u0B95\u0BCD")))
                {
                    break lab7;
                }
                // ], line 140
                base.bra = base.cursor;
                // <-, line 140
                if (!base.slice_from("\u0BB2\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab8: {
                // (, line 142
                // [, line 142
                base.ket = base.cursor;
                // literal, line 142
                if (!(base.eq_s_b("\u0B9F\u0BCD\u0B9F\u0BCD")))
                {
                    break lab8;
                }
                // ], line 142
                base.bra = base.cursor;
                // <-, line 142
                if (!base.slice_from("\u0B9F\u0BC1"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab9: {
                // (, line 144
                // Boolean test found_vetrumai_urupu, line 144
                if (!B_found_vetrumai_urupu)
                {
                    break lab9;
                }
                // [, line 144
                base.ket = base.cursor;
                // literal, line 144
                if (!(base.eq_s_b("\u0BA4\u0BCD\u0BA4\u0BCD")))
                {
                    break lab9;
                }
                // (, line 144
                // test, line 144
                var /** number */ v_4 = base.limit - base.cursor;
                // not, line 144
                {
                    var /** number */ v_5 = base.limit - base.cursor;
                    lab10: {
                        // literal, line 144
                        if (!(base.eq_s_b("\u0BC8")))
                        {
                            break lab10;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_5;
                }
                base.cursor = base.limit - v_4;
                // ], line 144
                base.bra = base.cursor;
                // <-, line 144
                if (!base.slice_from("\u0BAE\u0BCD"))
                {
                    return false;
                }
                // ], line 144
                base.bra = base.cursor;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab11: {
                // (, line 146
                // [, line 146
                base.ket = base.cursor;
                // or, line 146
                lab12: {
                    var /** number */ v_6 = base.limit - base.cursor;
                    lab13: {
                        // literal, line 146
                        if (!(base.eq_s_b("\u0BC1\u0B95\u0BCD")))
                        {
                            break lab13;
                        }
                        break lab12;
                    }
                    base.cursor = base.limit - v_6;
                    // literal, line 146
                    if (!(base.eq_s_b("\u0BC1\u0B95\u0BCD\u0B95\u0BCD")))
                    {
                        break lab11;
                    }
                }
                // ], line 146
                base.bra = base.cursor;
                // <-, line 146
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab14: {
                // (, line 148
                // [, line 148
                base.ket = base.cursor;
                // literal, line 148
                if (!(base.eq_s_b("\u0BCD")))
                {
                    break lab14;
                }
                // among, line 148
                if (base.find_among_b(a_3) == 0)
                {
                    break lab14;
                }
                // literal, line 148
                if (!(base.eq_s_b("\u0BCD")))
                {
                    break lab14;
                }
                // among, line 148
                if (base.find_among_b(a_4) == 0)
                {
                    break lab14;
                }
                // ], line 148
                base.bra = base.cursor;
                // delete, line 148
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab15: {
                // (, line 150
                // [, line 150
                base.ket = base.cursor;
                // literal, line 150
                if (!(base.eq_s_b("\u0BC1\u0B95\u0BCD")))
                {
                    break lab15;
                }
                // ], line 150
                base.bra = base.cursor;
                // <-, line 150
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab16: {
                // (, line 152
                // [, line 152
                base.ket = base.cursor;
                // literal, line 152
                if (!(base.eq_s_b("\u0BCD")))
                {
                    break lab16;
                }
                // among, line 152
                if (base.find_among_b(a_5) == 0)
                {
                    break lab16;
                }
                // ], line 152
                base.bra = base.cursor;
                // delete, line 152
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab17: {
                // (, line 154
                // [, line 154
                base.ket = base.cursor;
                // literal, line 154
                if (!(base.eq_s_b("\u0BCD")))
                {
                    break lab17;
                }
                // (, line 154
                // or, line 154
                lab18: {
                    var /** number */ v_7 = base.limit - base.cursor;
                    lab19: {
                        // among, line 154
                        if (base.find_among_b(a_6) == 0)
                        {
                            break lab19;
                        }
                        break lab18;
                    }
                    base.cursor = base.limit - v_7;
                    // among, line 154
                    if (base.find_among_b(a_7) == 0)
                    {
                        break lab17;
                    }
                }
                // literal, line 154
                if (!(base.eq_s_b("\u0BCD")))
                {
                    break lab17;
                }
                // ], line 154
                base.bra = base.cursor;
                // <-, line 154
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab20: {
                // (, line 156
                // [, line 156
                base.ket = base.cursor;
                // among, line 156
                if (base.find_among_b(a_8) == 0)
                {
                    break lab20;
                }
                // ], line 156
                base.bra = base.cursor;
                // delete, line 156
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab21: {
                // (, line 158
                // [, line 158
                base.ket = base.cursor;
                // literal, line 158
                if (!(base.eq_s_b("\u0BA9\u0BC1")))
                {
                    break lab21;
                }
                // (, line 158
                // test, line 158
                var /** number */ v_8 = base.limit - base.cursor;
                // not, line 158
                {
                    var /** number */ v_9 = base.limit - base.cursor;
                    lab22: {
                        // among, line 158
                        if (base.find_among_b(a_9) == 0)
                        {
                            break lab22;
                        }
                        break lab21;
                    }
                    base.cursor = base.limit - v_9;
                }
                base.cursor = base.limit - v_8;
                // ], line 158
                base.bra = base.cursor;
                // delete, line 158
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab23: {
                // (, line 160
                // [, line 160
                base.ket = base.cursor;
                // literal, line 160
                if (!(base.eq_s_b("\u0B99\u0BCD")))
                {
                    break lab23;
                }
                // (, line 160
                // test, line 160
                var /** number */ v_10 = base.limit - base.cursor;
                // not, line 160
                {
                    var /** number */ v_11 = base.limit - base.cursor;
                    lab24: {
                        // literal, line 160
                        if (!(base.eq_s_b("\u0BC8")))
                        {
                            break lab24;
                        }
                        break lab23;
                    }
                    base.cursor = base.limit - v_11;
                }
                base.cursor = base.limit - v_10;
                // ], line 160
                base.bra = base.cursor;
                // <-, line 160
                if (!base.slice_from("\u0BAE\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab25: {
                // (, line 162
                // [, line 162
                base.ket = base.cursor;
                // literal, line 162
                if (!(base.eq_s_b("\u0B99\u0BCD")))
                {
                    break lab25;
                }
                // ], line 162
                base.bra = base.cursor;
                // delete, line 162
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // (, line 164
            // [, line 164
            base.ket = base.cursor;
            // literal, line 164
            if (!(base.eq_s_b("\u0BCD")))
            {
                return false;
            }
            // (, line 164
            // test, line 164
            var /** number */ v_12 = base.limit - base.cursor;
            // (, line 164
            // or, line 164
            lab26: {
                var /** number */ v_13 = base.limit - base.cursor;
                lab27: {
                    // among, line 164
                    if (base.find_among_b(a_10) == 0)
                    {
                        break lab27;
                    }
                    break lab26;
                }
                base.cursor = base.limit - v_13;
                // literal, line 164
                if (!(base.eq_s_b("\u0BCD")))
                {
                    return false;
                }
            }
            base.cursor = base.limit - v_12;
            // ], line 164
            base.bra = base.cursor;
            // delete, line 164
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit_backward;        // set found_wrong_ending, line 167
        B_found_wrong_ending = true;
        return true;
    };

    /** @return {boolean} */
    function r_remove_pronoun_prefixes() {
        // (, line 170
        // unset found_a_match, line 171
        B_found_a_match = false;
        // [, line 172
        base.bra = base.cursor;
        // among, line 172
        if (base.find_among(a_11) == 0)
        {
            return false;
        }
        // among, line 172
        if (base.find_among(a_12) == 0)
        {
            return false;
        }
        // literal, line 172
        if (!(base.eq_s("\u0BCD")))
        {
            return false;
        }
        // ], line 172
        base.ket = base.cursor;
        // delete, line 172
        if (!base.slice_del())
        {
            return false;
        }
        // (, line 173
        // set found_a_match, line 173
        B_found_a_match = true;
        // do, line 174
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call fix_va_start, line 174
            if (!r_fix_va_start())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        return true;
    };

    /** @return {boolean} */
    function r_remove_plural_suffix() {
        // (, line 177
        // unset found_a_match, line 178
        B_found_a_match = false;
        // backwards, line 179
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 179
        // or, line 180
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // (, line 180
                // [, line 180
                base.ket = base.cursor;
                // literal, line 180
                if (!(base.eq_s_b("\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD")))
                {
                    break lab1;
                }
                // (, line 180
                // test, line 180
                var /** number */ v_2 = base.limit - base.cursor;
                // not, line 180
                {
                    var /** number */ v_3 = base.limit - base.cursor;
                    lab2: {
                        // among, line 180
                        if (base.find_among_b(a_13) == 0)
                        {
                            break lab2;
                        }
                        break lab1;
                    }
                    base.cursor = base.limit - v_3;
                }
                base.cursor = base.limit - v_2;
                // ], line 180
                base.bra = base.cursor;
                // <-, line 180
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab3: {
                // (, line 181
                // [, line 181
                base.ket = base.cursor;
                // literal, line 181
                if (!(base.eq_s_b("\u0BB1\u0BCD\u0B95\u0BB3\u0BCD")))
                {
                    break lab3;
                }
                // ], line 181
                base.bra = base.cursor;
                // <-, line 181
                if (!base.slice_from("\u0BB2\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab4: {
                // (, line 182
                // [, line 182
                base.ket = base.cursor;
                // literal, line 182
                if (!(base.eq_s_b("\u0B9F\u0BCD\u0B95\u0BB3\u0BCD")))
                {
                    break lab4;
                }
                // ], line 182
                base.bra = base.cursor;
                // <-, line 182
                if (!base.slice_from("\u0BB3\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // (, line 183
            // [, line 183
            base.ket = base.cursor;
            // literal, line 183
            if (!(base.eq_s_b("\u0B95\u0BB3\u0BCD")))
            {
                return false;
            }
            // ], line 183
            base.bra = base.cursor;
            // delete, line 183
            if (!base.slice_del())
            {
                return false;
            }
        }
        // (, line 184
        // set found_a_match, line 184
        B_found_a_match = true;
        base.cursor = base.limit_backward;        return true;
    };

    /** @return {boolean} */
    function r_remove_question_suffixes() {
        // (, line 188
        // call has_min_length, line 189
        if (!r_has_min_length())
        {
            return false;
        }
        // unset found_a_match, line 190
        B_found_a_match = false;
        // backwards, line 191
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 191
        // do, line 192
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // (, line 192
            // [, line 193
            base.ket = base.cursor;
            // among, line 193
            if (base.find_among_b(a_14) == 0)
            {
                break lab0;
            }
            // ], line 193
            base.bra = base.cursor;
            // <-, line 193
            if (!base.slice_from("\u0BCD"))
            {
                return false;
            }
            // (, line 194
            // set found_a_match, line 194
            B_found_a_match = true;
        }
        base.cursor = base.limit - v_1;
        base.cursor = base.limit_backward;        // do, line 197
        var /** number */ v_2 = base.cursor;
        lab1: {
            // call fix_endings, line 197
            if (!r_fix_endings())
            {
                break lab1;
            }
        }
        base.cursor = v_2;
        return true;
    };

    /** @return {boolean} */
    function r_remove_command_suffixes() {
        // (, line 200
        // call has_min_length, line 201
        if (!r_has_min_length())
        {
            return false;
        }
        // unset found_a_match, line 202
        B_found_a_match = false;
        // backwards, line 203
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 203
        // [, line 204
        base.ket = base.cursor;
        // among, line 204
        if (base.find_among_b(a_15) == 0)
        {
            return false;
        }
        // ], line 204
        base.bra = base.cursor;
        // delete, line 204
        if (!base.slice_del())
        {
            return false;
        }
        // (, line 205
        // set found_a_match, line 205
        B_found_a_match = true;
        base.cursor = base.limit_backward;        return true;
    };

    /** @return {boolean} */
    function r_remove_um() {
        // (, line 209
        // unset found_a_match, line 210
        B_found_a_match = false;
        // call has_min_length, line 211
        if (!r_has_min_length())
        {
            return false;
        }
        // backwards, line 212
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 212
        // [, line 212
        base.ket = base.cursor;
        // literal, line 212
        if (!(base.eq_s_b("\u0BC1\u0BAE\u0BCD")))
        {
            return false;
        }
        // ], line 212
        base.bra = base.cursor;
        // <-, line 212
        if (!base.slice_from("\u0BCD"))
        {
            return false;
        }
        // (, line 213
        // set found_a_match, line 213
        B_found_a_match = true;
        base.cursor = base.limit_backward;        // do, line 215
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call fix_ending, line 215
            if (!r_fix_ending())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        return true;
    };

    /** @return {boolean} */
    function r_remove_common_word_endings() {
        // (, line 218
        // unset found_a_match, line 222
        B_found_a_match = false;
        // call has_min_length, line 223
        if (!r_has_min_length())
        {
            return false;
        }
        // backwards, line 224
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 224
        // or, line 241
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // test, line 225
                var /** number */ v_2 = base.limit - base.cursor;
                // (, line 225
                // [, line 225
                base.ket = base.cursor;
                // or, line 225
                lab2: {
                    var /** number */ v_3 = base.limit - base.cursor;
                    lab3: {
                        // literal, line 225
                        if (!(base.eq_s_b("\u0BC1\u0B9F\u0BA9\u0BCD")))
                        {
                            break lab3;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab4: {
                        // literal, line 226
                        if (!(base.eq_s_b("\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8")))
                        {
                            break lab4;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab5: {
                        // literal, line 227
                        if (!(base.eq_s_b("\u0BBF\u0B9F\u0BAE\u0BCD")))
                        {
                            break lab5;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab6: {
                        // literal, line 228
                        if (!(base.eq_s_b("\u0BBF\u0BA9\u0BCD\u0BB1\u0BBF")))
                        {
                            break lab6;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab7: {
                        // literal, line 229
                        if (!(base.eq_s_b("\u0BBE\u0B95\u0BBF")))
                        {
                            break lab7;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab8: {
                        // literal, line 230
                        if (!(base.eq_s_b("\u0BBE\u0B95\u0BBF\u0BAF")))
                        {
                            break lab8;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab9: {
                        // literal, line 231
                        if (!(base.eq_s_b("\u0BC6\u0BA9\u0BCD\u0BB1\u0BC1")))
                        {
                            break lab9;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab10: {
                        // literal, line 232
                        if (!(base.eq_s_b("\u0BC1\u0BB3\u0BCD\u0BB3")))
                        {
                            break lab10;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab11: {
                        // literal, line 233
                        if (!(base.eq_s_b("\u0BC1\u0B9F\u0BC8\u0BAF")))
                        {
                            break lab11;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab12: {
                        // literal, line 234
                        if (!(base.eq_s_b("\u0BC1\u0B9F\u0BC8")))
                        {
                            break lab12;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab13: {
                        // literal, line 235
                        if (!(base.eq_s_b("\u0BC6\u0BA9\u0BC1\u0BAE\u0BCD")))
                        {
                            break lab13;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab14: {
                        // (, line 236
                        // literal, line 236
                        if (!(base.eq_s_b("\u0BB2\u0BCD\u0BB2")))
                        {
                            break lab14;
                        }
                        // test, line 236
                        var /** number */ v_4 = base.limit - base.cursor;
                        // (, line 236
                        // not, line 236
                        {
                            var /** number */ v_5 = base.limit - base.cursor;
                            lab15: {
                                // among, line 236
                                if (base.find_among_b(a_16) == 0)
                                {
                                    break lab15;
                                }
                                break lab14;
                            }
                            base.cursor = base.limit - v_5;
                        }
                        base.cursor = base.limit - v_4;
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab16: {
                        // literal, line 237
                        if (!(base.eq_s_b("\u0BC6\u0BA9")))
                        {
                            break lab16;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    // literal, line 238
                    if (!(base.eq_s_b("\u0BBE\u0B95\u0BBF")))
                    {
                        break lab1;
                    }
                }
                // ], line 238
                base.bra = base.cursor;
                // <-, line 238
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                // (, line 239
                // set found_a_match, line 239
                B_found_a_match = true;
                base.cursor = base.limit - v_2;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // test, line 242
            var /** number */ v_6 = base.limit - base.cursor;
            // (, line 242
            // [, line 242
            base.ket = base.cursor;
            // among, line 242
            if (base.find_among_b(a_17) == 0)
            {
                return false;
            }
            // ], line 255
            base.bra = base.cursor;
            // delete, line 255
            if (!base.slice_del())
            {
                return false;
            }
            // (, line 256
            // set found_a_match, line 256
            B_found_a_match = true;
            base.cursor = base.limit - v_6;
        }
        base.cursor = base.limit_backward;        // do, line 259
        var /** number */ v_7 = base.cursor;
        lab17: {
            // call fix_endings, line 259
            if (!r_fix_endings())
            {
                break lab17;
            }
        }
        base.cursor = v_7;
        return true;
    };

    /** @return {boolean} */
    function r_remove_vetrumai_urupukal() {
        // (, line 262
        // unset found_a_match, line 263
        B_found_a_match = false;
        // unset found_vetrumai_urupu, line 264
        B_found_vetrumai_urupu = false;
        // call has_min_length, line 265
        if (!r_has_min_length())
        {
            return false;
        }
        // backwards, line 266
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 266
        // (, line 267
        // or, line 269
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // test, line 268
                var /** number */ v_2 = base.limit - base.cursor;
                // (, line 268
                // [, line 268
                base.ket = base.cursor;
                // literal, line 268
                if (!(base.eq_s_b("\u0BA9\u0BC8")))
                {
                    break lab1;
                }
                // ], line 268
                base.bra = base.cursor;
                // delete, line 268
                if (!base.slice_del())
                {
                    return false;
                }
                base.cursor = base.limit - v_2;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab2: {
                // test, line 270
                var /** number */ v_3 = base.limit - base.cursor;
                // (, line 270
                // [, line 270
                base.ket = base.cursor;
                // or, line 271
                lab3: {
                    var /** number */ v_4 = base.limit - base.cursor;
                    lab4: {
                        // (, line 270
                        // or, line 270
                        lab5: {
                            var /** number */ v_5 = base.limit - base.cursor;
                            lab6: {
                                // literal, line 270
                                if (!(base.eq_s_b("\u0BBF\u0BA9\u0BC8")))
                                {
                                    break lab6;
                                }
                                break lab5;
                            }
                            base.cursor = base.limit - v_5;
                            // literal, line 271
                            if (!(base.eq_s_b("\u0BC8")))
                            {
                                break lab4;
                            }
                        }
                        // (, line 271
                        // test, line 271
                        var /** number */ v_6 = base.limit - base.cursor;
                        // not, line 271
                        {
                            var /** number */ v_7 = base.limit - base.cursor;
                            lab7: {
                                // among, line 271
                                if (base.find_among_b(a_18) == 0)
                                {
                                    break lab7;
                                }
                                break lab4;
                            }
                            base.cursor = base.limit - v_7;
                        }
                        base.cursor = base.limit - v_6;
                        break lab3;
                    }
                    base.cursor = base.limit - v_4;
                    // (, line 272
                    // literal, line 272
                    if (!(base.eq_s_b("\u0BC8")))
                    {
                        break lab2;
                    }
                    // (, line 272
                    // test, line 272
                    var /** number */ v_8 = base.limit - base.cursor;
                    // (, line 272
                    // among, line 272
                    if (base.find_among_b(a_19) == 0)
                    {
                        break lab2;
                    }
                    // literal, line 272
                    if (!(base.eq_s_b("\u0BCD")))
                    {
                        break lab2;
                    }
                    base.cursor = base.limit - v_8;
                }
                // ], line 273
                base.bra = base.cursor;
                // <-, line 273
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                base.cursor = base.limit - v_3;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab8: {
                // test, line 276
                var /** number */ v_9 = base.limit - base.cursor;
                // (, line 276
                // [, line 276
                base.ket = base.cursor;
                // or, line 277
                lab9: {
                    var /** number */ v_10 = base.limit - base.cursor;
                    lab10: {
                        // literal, line 277
                        if (!(base.eq_s_b("\u0BCA\u0B9F\u0BC1")))
                        {
                            break lab10;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab11: {
                        // literal, line 278
                        if (!(base.eq_s_b("\u0BCB\u0B9F\u0BC1")))
                        {
                            break lab11;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab12: {
                        // literal, line 279
                        if (!(base.eq_s_b("\u0BBF\u0BB2\u0BCD")))
                        {
                            break lab12;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab13: {
                        // literal, line 280
                        if (!(base.eq_s_b("\u0BBF\u0BB1\u0BCD")))
                        {
                            break lab13;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab14: {
                        // (, line 281
                        // literal, line 281
                        if (!(base.eq_s_b("\u0BBF\u0BA9\u0BCD")))
                        {
                            break lab14;
                        }
                        // (, line 281
                        // test, line 281
                        var /** number */ v_11 = base.limit - base.cursor;
                        // not, line 281
                        {
                            var /** number */ v_12 = base.limit - base.cursor;
                            lab15: {
                                // literal, line 281
                                if (!(base.eq_s_b("\u0BAE")))
                                {
                                    break lab15;
                                }
                                break lab14;
                            }
                            base.cursor = base.limit - v_12;
                        }
                        base.cursor = base.limit - v_11;
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab16: {
                        // literal, line 282
                        if (!(base.eq_s_b("\u0BBF\u0BA9\u0BCD\u0BB1\u0BC1")))
                        {
                            break lab16;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab17: {
                        // literal, line 283
                        if (!(base.eq_s_b("\u0BBF\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BC1")))
                        {
                            break lab17;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab18: {
                        // literal, line 284
                        if (!(base.eq_s_b("\u0BB5\u0BBF\u0B9F")))
                        {
                            break lab18;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab19: {
                        // (, line 285
                        if (!(I_length >= 7))
                        {
                            break lab19;
                        }
                        // literal, line 285
                        if (!(base.eq_s_b("\u0BBF\u0B9F\u0BAE\u0BCD")))
                        {
                            break lab19;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab20: {
                        // literal, line 286
                        if (!(base.eq_s_b("\u0BBE\u0BB2\u0BCD")))
                        {
                            break lab20;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab21: {
                        // literal, line 287
                        if (!(base.eq_s_b("\u0BC1\u0B9F\u0BC8")))
                        {
                            break lab21;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab22: {
                        // literal, line 288
                        if (!(base.eq_s_b("\u0BBE\u0BAE\u0BB2\u0BCD")))
                        {
                            break lab22;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab23: {
                        // (, line 289
                        // literal, line 289
                        if (!(base.eq_s_b("\u0BB2\u0BCD")))
                        {
                            break lab23;
                        }
                        // (, line 289
                        // test, line 289
                        var /** number */ v_13 = base.limit - base.cursor;
                        // not, line 289
                        {
                            var /** number */ v_14 = base.limit - base.cursor;
                            lab24: {
                                // among, line 289
                                if (base.find_among_b(a_20) == 0)
                                {
                                    break lab24;
                                }
                                break lab23;
                            }
                            base.cursor = base.limit - v_14;
                        }
                        base.cursor = base.limit - v_13;
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    // literal, line 290
                    if (!(base.eq_s_b("\u0BC1\u0BB3\u0BCD")))
                    {
                        break lab8;
                    }
                }
                // ], line 291
                base.bra = base.cursor;
                // <-, line 291
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                base.cursor = base.limit - v_9;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab25: {
                // test, line 294
                var /** number */ v_15 = base.limit - base.cursor;
                // (, line 294
                // [, line 294
                base.ket = base.cursor;
                // or, line 295
                lab26: {
                    var /** number */ v_16 = base.limit - base.cursor;
                    lab27: {
                        // literal, line 295
                        if (!(base.eq_s_b("\u0B95\u0BA3\u0BCD")))
                        {
                            break lab27;
                        }
                        break lab26;
                    }
                    base.cursor = base.limit - v_16;
                    lab28: {
                        // literal, line 296
                        if (!(base.eq_s_b("\u0BAE\u0BC1\u0BA9\u0BCD")))
                        {
                            break lab28;
                        }
                        break lab26;
                    }
                    base.cursor = base.limit - v_16;
                    lab29: {
                        // literal, line 297
                        if (!(base.eq_s_b("\u0BAE\u0BC7\u0BB2\u0BCD")))
                        {
                            break lab29;
                        }
                        break lab26;
                    }
                    base.cursor = base.limit - v_16;
                    lab30: {
                        // literal, line 298
                        if (!(base.eq_s_b("\u0BAE\u0BC7\u0BB1\u0BCD")))
                        {
                            break lab30;
                        }
                        break lab26;
                    }
                    base.cursor = base.limit - v_16;
                    lab31: {
                        // literal, line 299
                        if (!(base.eq_s_b("\u0B95\u0BC0\u0BB4\u0BCD")))
                        {
                            break lab31;
                        }
                        break lab26;
                    }
                    base.cursor = base.limit - v_16;
                    lab32: {
                        // literal, line 300
                        if (!(base.eq_s_b("\u0BAA\u0BBF\u0BA9\u0BCD")))
                        {
                            break lab32;
                        }
                        break lab26;
                    }
                    base.cursor = base.limit - v_16;
                    // (, line 301
                    // literal, line 301
                    if (!(base.eq_s_b("\u0BA4\u0BC1")))
                    {
                        break lab25;
                    }
                    // (, line 301
                    // test, line 301
                    var /** number */ v_17 = base.limit - base.cursor;
                    // not, line 301
                    {
                        var /** number */ v_18 = base.limit - base.cursor;
                        lab33: {
                            // among, line 301
                            if (base.find_among_b(a_21) == 0)
                            {
                                break lab33;
                            }
                            break lab25;
                        }
                        base.cursor = base.limit - v_18;
                    }
                    base.cursor = base.limit - v_17;
                }
                // ], line 302
                base.bra = base.cursor;
                // delete, line 302
                if (!base.slice_del())
                {
                    return false;
                }
                base.cursor = base.limit - v_15;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // test, line 305
            var /** number */ v_19 = base.limit - base.cursor;
            // (, line 305
            // [, line 305
            base.ket = base.cursor;
            // literal, line 305
            if (!(base.eq_s_b("\u0BC0")))
            {
                return false;
            }
            // ], line 305
            base.bra = base.cursor;
            // <-, line 305
            if (!base.slice_from("\u0BBF"))
            {
                return false;
            }
            base.cursor = base.limit - v_19;
        }
        // (, line 307
        // set found_a_match, line 307
        B_found_a_match = true;
        // (, line 308
        // set found_vetrumai_urupu, line 308
        B_found_vetrumai_urupu = true;
        // do, line 309
        var /** number */ v_20 = base.limit - base.cursor;
        lab34: {
            // (, line 309
            // [, line 309
            base.ket = base.cursor;
            // literal, line 309
            if (!(base.eq_s_b("\u0BBF\u0BA9\u0BCD")))
            {
                break lab34;
            }
            // ], line 309
            base.bra = base.cursor;
            // <-, line 309
            if (!base.slice_from("\u0BCD"))
            {
                return false;
            }
        }
        base.cursor = base.limit - v_20;
        base.cursor = base.limit_backward;        // do, line 311
        var /** number */ v_21 = base.cursor;
        lab35: {
            // call fix_endings, line 311
            if (!r_fix_endings())
            {
                break lab35;
            }
        }
        base.cursor = v_21;
        return true;
    };

    /** @return {boolean} */
    function r_remove_tense_suffixes() {
        // (, line 314
        // set found_a_match, line 315
        B_found_a_match = true;
        // repeat, line 316
        replab0: while(true)
        {
            var /** number */ v_1 = base.cursor;
            lab1: {
                // (, line 316
                // Boolean test found_a_match, line 316
                if (!B_found_a_match)
                {
                    break lab1;
                }
                // (, line 316
                // do, line 316
                var /** number */ v_2 = base.cursor;
                lab2: {
                    // call remove_tense_suffix, line 316
                    if (!r_remove_tense_suffix())
                    {
                        break lab2;
                    }
                }
                base.cursor = v_2;
                continue replab0;
            }
            base.cursor = v_1;
            break replab0;
        }
        return true;
    };

    /** @return {boolean} */
    function r_remove_tense_suffix() {
        // (, line 319
        // unset found_a_match, line 320
        B_found_a_match = false;
        // call has_min_length, line 321
        if (!r_has_min_length())
        {
            return false;
        }
        // backwards, line 322
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 322
        // do, line 323
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // (, line 323
            // or, line 330
            lab1: {
                var /** number */ v_2 = base.limit - base.cursor;
                lab2: {
                    // test, line 324
                    var /** number */ v_3 = base.limit - base.cursor;
                    // (, line 324
                    // [, line 324
                    base.ket = base.cursor;
                    // among, line 324
                    if (base.find_among_b(a_22) == 0)
                    {
                        break lab2;
                    }
                    // ], line 327
                    base.bra = base.cursor;
                    // delete, line 327
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // (, line 328
                    // set found_a_match, line 328
                    B_found_a_match = true;
                    base.cursor = base.limit - v_3;
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                lab3: {
                    // test, line 331
                    var /** number */ v_4 = base.limit - base.cursor;
                    // (, line 331
                    // [, line 331
                    base.ket = base.cursor;
                    // or, line 332
                    lab4: {
                        var /** number */ v_5 = base.limit - base.cursor;
                        lab5: {
                            // literal, line 332
                            if (!(base.eq_s_b("\u0BAE\u0BBE\u0BB0\u0BCD")))
                            {
                                break lab5;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab6: {
                            // literal, line 333
                            if (!(base.eq_s_b("\u0BAE\u0BBF\u0BA9\u0BCD")))
                            {
                                break lab6;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab7: {
                            // literal, line 334
                            if (!(base.eq_s_b("\u0BA9\u0BA9\u0BCD")))
                            {
                                break lab7;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab8: {
                            // literal, line 335
                            if (!(base.eq_s_b("\u0BA9\u0BBE\u0BA9\u0BCD")))
                            {
                                break lab8;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab9: {
                            // literal, line 336
                            if (!(base.eq_s_b("\u0BA9\u0BBE\u0BB3\u0BCD")))
                            {
                                break lab9;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab10: {
                            // literal, line 337
                            if (!(base.eq_s_b("\u0BA9\u0BBE\u0BB0\u0BCD")))
                            {
                                break lab10;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab11: {
                            // (, line 338
                            // literal, line 338
                            if (!(base.eq_s_b("\u0BB5\u0BA9\u0BCD")))
                            {
                                break lab11;
                            }
                            // test, line 338
                            var /** number */ v_6 = base.limit - base.cursor;
                            // (, line 338
                            // not, line 338
                            {
                                var /** number */ v_7 = base.limit - base.cursor;
                                lab12: {
                                    // among, line 338
                                    if (base.find_among_b(a_23) == 0)
                                    {
                                        break lab12;
                                    }
                                    break lab11;
                                }
                                base.cursor = base.limit - v_7;
                            }
                            base.cursor = base.limit - v_6;
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab13: {
                            // literal, line 339
                            if (!(base.eq_s_b("\u0BA9\u0BB3\u0BCD")))
                            {
                                break lab13;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab14: {
                            // literal, line 340
                            if (!(base.eq_s_b("\u0BB5\u0BB3\u0BCD")))
                            {
                                break lab14;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab15: {
                            // literal, line 341
                            if (!(base.eq_s_b("\u0BA9\u0BB0\u0BCD")))
                            {
                                break lab15;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab16: {
                            // literal, line 342
                            if (!(base.eq_s_b("\u0BB5\u0BB0\u0BCD")))
                            {
                                break lab16;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab17: {
                            // literal, line 343
                            if (!(base.eq_s_b("\u0BA9")))
                            {
                                break lab17;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab18: {
                            // literal, line 343
                            if (!(base.eq_s_b("\u0BAA")))
                            {
                                break lab18;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab19: {
                            // literal, line 343
                            if (!(base.eq_s_b("\u0B95")))
                            {
                                break lab19;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab20: {
                            // literal, line 343
                            if (!(base.eq_s_b("\u0BA4")))
                            {
                                break lab20;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab21: {
                            // literal, line 343
                            if (!(base.eq_s_b("\u0BAF")))
                            {
                                break lab21;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab22: {
                            // literal, line 344
                            if (!(base.eq_s_b("\u0BAA\u0BA9\u0BCD")))
                            {
                                break lab22;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab23: {
                            // literal, line 345
                            if (!(base.eq_s_b("\u0BAA\u0BB3\u0BCD")))
                            {
                                break lab23;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab24: {
                            // literal, line 346
                            if (!(base.eq_s_b("\u0BAA\u0BB0\u0BCD")))
                            {
                                break lab24;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab25: {
                            // (, line 347
                            // literal, line 347
                            if (!(base.eq_s_b("\u0BA4\u0BC1")))
                            {
                                break lab25;
                            }
                            // (, line 347
                            // test, line 347
                            var /** number */ v_8 = base.limit - base.cursor;
                            // not, line 347
                            {
                                var /** number */ v_9 = base.limit - base.cursor;
                                lab26: {
                                    // among, line 347
                                    if (base.find_among_b(a_24) == 0)
                                    {
                                        break lab26;
                                    }
                                    break lab25;
                                }
                                base.cursor = base.limit - v_9;
                            }
                            base.cursor = base.limit - v_8;
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab27: {
                            // literal, line 348
                            if (!(base.eq_s_b("\u0BBF\u0BB1\u0BCD\u0BB1\u0BC1")))
                            {
                                break lab27;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab28: {
                            // literal, line 349
                            if (!(base.eq_s_b("\u0BAA\u0BAE\u0BCD")))
                            {
                                break lab28;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab29: {
                            // literal, line 350
                            if (!(base.eq_s_b("\u0BA9\u0BAE\u0BCD")))
                            {
                                break lab29;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab30: {
                            // literal, line 351
                            if (!(base.eq_s_b("\u0BA4\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab30;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab31: {
                            // literal, line 352
                            if (!(base.eq_s_b("\u0BB1\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab31;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab32: {
                            // literal, line 353
                            if (!(base.eq_s_b("\u0B95\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab32;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab33: {
                            // literal, line 354
                            if (!(base.eq_s_b("\u0BA9\u0BC6\u0BA9\u0BCD")))
                            {
                                break lab33;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab34: {
                            // literal, line 355
                            if (!(base.eq_s_b("\u0BA9\u0BC8")))
                            {
                                break lab34;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        // literal, line 356
                        if (!(base.eq_s_b("\u0BB5\u0BC8")))
                        {
                            break lab3;
                        }
                    }
                    // ], line 357
                    base.bra = base.cursor;
                    // delete, line 357
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // (, line 358
                    // set found_a_match, line 358
                    B_found_a_match = true;
                    base.cursor = base.limit - v_4;
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                lab35: {
                    // test, line 361
                    var /** number */ v_10 = base.limit - base.cursor;
                    // (, line 361
                    // [, line 361
                    base.ket = base.cursor;
                    // or, line 362
                    lab36: {
                        var /** number */ v_11 = base.limit - base.cursor;
                        lab37: {
                            // (, line 362
                            // literal, line 362
                            if (!(base.eq_s_b("\u0BBE\u0BA9\u0BCD")))
                            {
                                break lab37;
                            }
                            // test, line 362
                            var /** number */ v_12 = base.limit - base.cursor;
                            // (, line 362
                            // not, line 362
                            {
                                var /** number */ v_13 = base.limit - base.cursor;
                                lab38: {
                                    // literal, line 362
                                    if (!(base.eq_s_b("\u0B9A")))
                                    {
                                        break lab38;
                                    }
                                    break lab37;
                                }
                                base.cursor = base.limit - v_13;
                            }
                            base.cursor = base.limit - v_12;
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab39: {
                            // literal, line 363
                            if (!(base.eq_s_b("\u0BBE\u0BB3\u0BCD")))
                            {
                                break lab39;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab40: {
                            // literal, line 364
                            if (!(base.eq_s_b("\u0BBE\u0BB0\u0BCD")))
                            {
                                break lab40;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab41: {
                            // literal, line 365
                            if (!(base.eq_s_b("\u0BC7\u0BA9\u0BCD")))
                            {
                                break lab41;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab42: {
                            // literal, line 366
                            if (!(base.eq_s_b("\u0BBE")))
                            {
                                break lab42;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab43: {
                            // literal, line 367
                            if (!(base.eq_s_b("\u0BBE\u0BAE\u0BCD")))
                            {
                                break lab43;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab44: {
                            // literal, line 368
                            if (!(base.eq_s_b("\u0BC6\u0BAE\u0BCD")))
                            {
                                break lab44;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab45: {
                            // literal, line 369
                            if (!(base.eq_s_b("\u0BC7\u0BAE\u0BCD")))
                            {
                                break lab45;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab46: {
                            // literal, line 370
                            if (!(base.eq_s_b("\u0BCB\u0BAE\u0BCD")))
                            {
                                break lab46;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab47: {
                            // literal, line 371
                            if (!(base.eq_s_b("\u0B95\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab47;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab48: {
                            // literal, line 372
                            if (!(base.eq_s_b("\u0BA4\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab48;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab49: {
                            // literal, line 373
                            if (!(base.eq_s_b("\u0B9F\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab49;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab50: {
                            // literal, line 374
                            if (!(base.eq_s_b("\u0BB1\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab50;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab51: {
                            // literal, line 375
                            if (!(base.eq_s_b("\u0BBE\u0BAF\u0BCD")))
                            {
                                break lab51;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab52: {
                            // literal, line 376
                            if (!(base.eq_s_b("\u0BA9\u0BC6\u0BA9\u0BCD")))
                            {
                                break lab52;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab53: {
                            // literal, line 377
                            if (!(base.eq_s_b("\u0BA9\u0BBF\u0BB0\u0BCD")))
                            {
                                break lab53;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab54: {
                            // literal, line 378
                            if (!(base.eq_s_b("\u0BC0\u0BB0\u0BCD")))
                            {
                                break lab54;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        // literal, line 379
                        if (!(base.eq_s_b("\u0BC0\u0BAF\u0BB0\u0BCD")))
                        {
                            break lab35;
                        }
                    }
                    // ], line 380
                    base.bra = base.cursor;
                    // <-, line 380
                    if (!base.slice_from("\u0BCD"))
                    {
                        return false;
                    }
                    // (, line 381
                    // set found_a_match, line 381
                    B_found_a_match = true;
                    base.cursor = base.limit - v_10;
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                // test, line 384
                var /** number */ v_14 = base.limit - base.cursor;
                // (, line 384
                // (, line 384
                // [, line 384
                base.ket = base.cursor;
                // or, line 384
                lab55: {
                    var /** number */ v_15 = base.limit - base.cursor;
                    lab56: {
                        // literal, line 384
                        if (!(base.eq_s_b("\u0B95\u0BC1")))
                        {
                            break lab56;
                        }
                        break lab55;
                    }
                    base.cursor = base.limit - v_15;
                    // literal, line 384
                    if (!(base.eq_s_b("\u0BA4\u0BC1")))
                    {
                        break lab0;
                    }
                }
                // (, line 384
                // test, line 384
                var /** number */ v_16 = base.limit - base.cursor;
                // literal, line 384
                if (!(base.eq_s_b("\u0BCD")))
                {
                    break lab0;
                }
                base.cursor = base.limit - v_16;
                // ], line 384
                base.bra = base.cursor;
                // delete, line 384
                if (!base.slice_del())
                {
                    return false;
                }
                // (, line 385
                // set found_a_match, line 385
                B_found_a_match = true;
                base.cursor = base.limit - v_14;
            }
        }
        base.cursor = base.limit - v_1;
        // do, line 388
        var /** number */ v_17 = base.limit - base.cursor;
        lab57: {
            // (, line 388
            // [, line 388
            base.ket = base.cursor;
            // among, line 388
            if (base.find_among_b(a_25) == 0)
            {
                break lab57;
            }
            // ], line 395
            base.bra = base.cursor;
            // delete, line 395
            if (!base.slice_del())
            {
                return false;
            }
            // (, line 396
            // set found_a_match, line 396
            B_found_a_match = true;
        }
        base.cursor = base.limit - v_17;
        base.cursor = base.limit_backward;        // do, line 399
        var /** number */ v_18 = base.cursor;
        lab58: {
            // call fix_endings, line 399
            if (!r_fix_endings())
            {
                break lab58;
            }
        }
        base.cursor = v_18;
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 402
        // unset found_vetrumai_urupu, line 403
        B_found_vetrumai_urupu = false;
        // do, line 404
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call fix_ending, line 404
            if (!r_fix_ending())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // call has_min_length, line 405
        if (!r_has_min_length())
        {
            return false;
        }
        // do, line 406
        var /** number */ v_2 = base.cursor;
        lab1: {
            // call remove_question_prefixes, line 406
            if (!r_remove_question_prefixes())
            {
                break lab1;
            }
        }
        base.cursor = v_2;
        // do, line 407
        var /** number */ v_3 = base.cursor;
        lab2: {
            // call remove_pronoun_prefixes, line 407
            if (!r_remove_pronoun_prefixes())
            {
                break lab2;
            }
        }
        base.cursor = v_3;
        // do, line 408
        var /** number */ v_4 = base.cursor;
        lab3: {
            // call remove_question_suffixes, line 408
            if (!r_remove_question_suffixes())
            {
                break lab3;
            }
        }
        base.cursor = v_4;
        // do, line 409
        var /** number */ v_5 = base.cursor;
        lab4: {
            // call remove_um, line 409
            if (!r_remove_um())
            {
                break lab4;
            }
        }
        base.cursor = v_5;
        // do, line 410
        var /** number */ v_6 = base.cursor;
        lab5: {
            // call remove_common_word_endings, line 410
            if (!r_remove_common_word_endings())
            {
                break lab5;
            }
        }
        base.cursor = v_6;
        // do, line 411
        var /** number */ v_7 = base.cursor;
        lab6: {
            // call remove_vetrumai_urupukal, line 411
            if (!r_remove_vetrumai_urupukal())
            {
                break lab6;
            }
        }
        base.cursor = v_7;
        // do, line 412
        var /** number */ v_8 = base.cursor;
        lab7: {
            // call remove_plural_suffix, line 412
            if (!r_remove_plural_suffix())
            {
                break lab7;
            }
        }
        base.cursor = v_8;
        // do, line 413
        var /** number */ v_9 = base.cursor;
        lab8: {
            // call remove_command_suffixes, line 413
            if (!r_remove_command_suffixes())
            {
                break lab8;
            }
        }
        base.cursor = v_9;
        // do, line 414
        var /** number */ v_10 = base.cursor;
        lab9: {
            // call remove_tense_suffixes, line 414
            if (!r_remove_tense_suffixes())
            {
                break lab9;
            }
        }
        base.cursor = v_10;
        return true;
    };

    /**@return{string}*/
    this['stemWord'] = function(/**string*/word) {
        base.setCurrent(word);
        this.stem();
        return base.getCurrent();
    };
};
window['TamilStemmer'] = TamilStemmer;
