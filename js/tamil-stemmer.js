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
    var /** boolean */ B_found_vetrumai_urupu = false;
    var /** boolean */ B_found_a_match = false;


    /** @return {boolean} */
    function r_has_min_length() {
        // (, line 103
        I_length = base.current.length;
        if (!(I_length > 4))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_fix_va_start() {
        // (, line 108
        // or, line 109
        lab0: {
            var /** number */ v_1 = base.cursor;
            lab1: {
                // (, line 109
                // and, line 109
                var /** number */ v_2 = base.cursor;
                // try, line 109
                var /** number */ v_3 = base.cursor;
                lab2: {
                    // literal, line 109
                    if (!(base.eq_s("\u0BB5\u0BCB")))
                    {
                        base.cursor = v_3;
                        break lab2;
                    }
                }
                base.cursor = v_2;
                // [, line 109
                base.bra = base.cursor;
                // literal, line 109
                if (!(base.eq_s("\u0BB5\u0BCB")))
                {
                    break lab1;
                }
                // ], line 109
                base.ket = base.cursor;
                // <-, line 109
                if (!base.slice_from("\u0B93"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = v_1;
            lab3: {
                // (, line 110
                // and, line 110
                var /** number */ v_4 = base.cursor;
                // try, line 110
                var /** number */ v_5 = base.cursor;
                lab4: {
                    // literal, line 110
                    if (!(base.eq_s("\u0BB5\u0BCA")))
                    {
                        base.cursor = v_5;
                        break lab4;
                    }
                }
                base.cursor = v_4;
                // [, line 110
                base.bra = base.cursor;
                // literal, line 110
                if (!(base.eq_s("\u0BB5\u0BCA")))
                {
                    break lab3;
                }
                // ], line 110
                base.ket = base.cursor;
                // <-, line 110
                if (!base.slice_from("\u0B92"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = v_1;
            lab5: {
                // (, line 111
                // and, line 111
                var /** number */ v_6 = base.cursor;
                // try, line 111
                var /** number */ v_7 = base.cursor;
                lab6: {
                    // literal, line 111
                    if (!(base.eq_s("\u0BB5\u0BC1")))
                    {
                        base.cursor = v_7;
                        break lab6;
                    }
                }
                base.cursor = v_6;
                // [, line 111
                base.bra = base.cursor;
                // literal, line 111
                if (!(base.eq_s("\u0BB5\u0BC1")))
                {
                    break lab5;
                }
                // ], line 111
                base.ket = base.cursor;
                // <-, line 111
                if (!base.slice_from("\u0B89"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = v_1;
            // (, line 112
            // and, line 112
            var /** number */ v_8 = base.cursor;
            // try, line 112
            var /** number */ v_9 = base.cursor;
            lab7: {
                // literal, line 112
                if (!(base.eq_s("\u0BB5\u0BC2")))
                {
                    base.cursor = v_9;
                    break lab7;
                }
            }
            base.cursor = v_8;
            // [, line 112
            base.bra = base.cursor;
            // literal, line 112
            if (!(base.eq_s("\u0BB5\u0BC2")))
            {
                return false;
            }
            // ], line 112
            base.ket = base.cursor;
            // <-, line 112
            if (!base.slice_from("\u0B8A"))
            {
                return false;
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_fix_endings() {
        // (, line 115
        // do, line 116
        var /** number */ v_1 = base.cursor;
        lab0: {
            // repeat, line 116
            replab1: while(true)
            {
                var /** number */ v_2 = base.cursor;
                lab2: {
                    // call fix_ending, line 116
                    if (!r_fix_ending())
                    {
                        break lab2;
                    }
                    continue replab1;
                }
                base.cursor = v_2;
                break replab1;
            }
        }
        base.cursor = v_1;
        return true;
    };

    /** @return {boolean} */
    function r_remove_question_prefixes() {
        // (, line 119
        // [, line 120
        base.bra = base.cursor;
        // (, line 120
        // literal, line 120
        if (!(base.eq_s("\u0B8E")))
        {
            return false;
        }
        // among, line 120
        if (base.find_among(a_0) == 0)
        {
            return false;
        }
        // literal, line 120
        if (!(base.eq_s("\u0BCD")))
        {
            return false;
        }
        // ], line 120
        base.ket = base.cursor;
        // delete, line 120
        if (!base.slice_del())
        {
            return false;
        }
        // do, line 121
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call fix_va_start, line 121
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
        // (, line 125
        I_length = base.current.length;
        if (!(I_length > 3))
        {
            return false;
        }
        // backwards, line 128
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 128
        // or, line 130
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // (, line 129
                // [, line 129
                base.ket = base.cursor;
                // among, line 129
                if (base.find_among_b(a_1) == 0)
                {
                    break lab1;
                }
                // ], line 129
                base.bra = base.cursor;
                // delete, line 129
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab2: {
                // (, line 131
                // [, line 131
                base.ket = base.cursor;
                // literal, line 131
                if (!(base.eq_s_b("\u0BAF\u0BCD")))
                {
                    break lab2;
                }
                // test, line 131
                var /** number */ v_2 = base.limit - base.cursor;
                // among, line 131
                if (base.find_among_b(a_2) == 0)
                {
                    break lab2;
                }
                base.cursor = base.limit - v_2;
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
            lab3: {
                // (, line 133
                // [, line 133
                base.ket = base.cursor;
                // or, line 133
                lab4: {
                    var /** number */ v_3 = base.limit - base.cursor;
                    lab5: {
                        // literal, line 133
                        if (!(base.eq_s_b("\u0B9F\u0BCD\u0BAA\u0BCD")))
                        {
                            break lab5;
                        }
                        break lab4;
                    }
                    base.cursor = base.limit - v_3;
                    // literal, line 133
                    if (!(base.eq_s_b("\u0B9F\u0BCD\u0B95\u0BCD")))
                    {
                        break lab3;
                    }
                }
                // ], line 133
                base.bra = base.cursor;
                // <-, line 133
                if (!base.slice_from("\u0BB3\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab6: {
                // (, line 135
                // [, line 135
                base.ket = base.cursor;
                // literal, line 135
                if (!(base.eq_s_b("\u0BA9\u0BCD\u0BB1\u0BCD")))
                {
                    break lab6;
                }
                // ], line 135
                base.bra = base.cursor;
                // <-, line 135
                if (!base.slice_from("\u0BB2\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab7: {
                // (, line 138
                // [, line 138
                base.ket = base.cursor;
                // literal, line 138
                if (!(base.eq_s_b("\u0BB1\u0BCD\u0B95\u0BCD")))
                {
                    break lab7;
                }
                // ], line 138
                base.bra = base.cursor;
                // <-, line 138
                if (!base.slice_from("\u0BB2\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab8: {
                // (, line 140
                // [, line 140
                base.ket = base.cursor;
                // literal, line 140
                if (!(base.eq_s_b("\u0B9F\u0BCD\u0B9F\u0BCD")))
                {
                    break lab8;
                }
                // ], line 140
                base.bra = base.cursor;
                // <-, line 140
                if (!base.slice_from("\u0B9F\u0BC1"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab9: {
                // (, line 142
                // Boolean test found_vetrumai_urupu, line 142
                if (!B_found_vetrumai_urupu)
                {
                    break lab9;
                }
                // [, line 142
                base.ket = base.cursor;
                // literal, line 142
                if (!(base.eq_s_b("\u0BA4\u0BCD\u0BA4\u0BCD")))
                {
                    break lab9;
                }
                // (, line 142
                // test, line 142
                var /** number */ v_4 = base.limit - base.cursor;
                // not, line 142
                {
                    var /** number */ v_5 = base.limit - base.cursor;
                    lab10: {
                        // literal, line 142
                        if (!(base.eq_s_b("\u0BC8")))
                        {
                            break lab10;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_5;
                }
                base.cursor = base.limit - v_4;
                // ], line 142
                base.bra = base.cursor;
                // <-, line 142
                if (!base.slice_from("\u0BAE\u0BCD"))
                {
                    return false;
                }
                // ], line 142
                base.bra = base.cursor;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab11: {
                // (, line 144
                // [, line 144
                base.ket = base.cursor;
                // or, line 144
                lab12: {
                    var /** number */ v_6 = base.limit - base.cursor;
                    lab13: {
                        // literal, line 144
                        if (!(base.eq_s_b("\u0BC1\u0B95\u0BCD")))
                        {
                            break lab13;
                        }
                        break lab12;
                    }
                    base.cursor = base.limit - v_6;
                    // literal, line 144
                    if (!(base.eq_s_b("\u0BC1\u0B95\u0BCD\u0B95\u0BCD")))
                    {
                        break lab11;
                    }
                }
                // ], line 144
                base.bra = base.cursor;
                // <-, line 144
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab14: {
                // (, line 146
                // [, line 146
                base.ket = base.cursor;
                // literal, line 146
                if (!(base.eq_s_b("\u0BCD")))
                {
                    break lab14;
                }
                // among, line 146
                if (base.find_among_b(a_3) == 0)
                {
                    break lab14;
                }
                // literal, line 146
                if (!(base.eq_s_b("\u0BCD")))
                {
                    break lab14;
                }
                // among, line 146
                if (base.find_among_b(a_4) == 0)
                {
                    break lab14;
                }
                // ], line 146
                base.bra = base.cursor;
                // delete, line 146
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab15: {
                // (, line 148
                // [, line 148
                base.ket = base.cursor;
                // literal, line 148
                if (!(base.eq_s_b("\u0BC1\u0B95\u0BCD")))
                {
                    break lab15;
                }
                // ], line 148
                base.bra = base.cursor;
                // <-, line 148
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab16: {
                // (, line 150
                // [, line 150
                base.ket = base.cursor;
                // literal, line 150
                if (!(base.eq_s_b("\u0BCD")))
                {
                    break lab16;
                }
                // among, line 150
                if (base.find_among_b(a_5) == 0)
                {
                    break lab16;
                }
                // ], line 150
                base.bra = base.cursor;
                // delete, line 150
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab17: {
                // (, line 152
                // [, line 152
                base.ket = base.cursor;
                // literal, line 152
                if (!(base.eq_s_b("\u0BCD")))
                {
                    break lab17;
                }
                // (, line 152
                // or, line 152
                lab18: {
                    var /** number */ v_7 = base.limit - base.cursor;
                    lab19: {
                        // among, line 152
                        if (base.find_among_b(a_6) == 0)
                        {
                            break lab19;
                        }
                        break lab18;
                    }
                    base.cursor = base.limit - v_7;
                    // among, line 152
                    if (base.find_among_b(a_7) == 0)
                    {
                        break lab17;
                    }
                }
                // literal, line 152
                if (!(base.eq_s_b("\u0BCD")))
                {
                    break lab17;
                }
                // ], line 152
                base.bra = base.cursor;
                // <-, line 152
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab20: {
                // (, line 154
                // [, line 154
                base.ket = base.cursor;
                // among, line 154
                if (base.find_among_b(a_8) == 0)
                {
                    break lab20;
                }
                // ], line 154
                base.bra = base.cursor;
                // delete, line 154
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab21: {
                // (, line 156
                // [, line 156
                base.ket = base.cursor;
                // literal, line 156
                if (!(base.eq_s_b("\u0BA9\u0BC1")))
                {
                    break lab21;
                }
                // (, line 156
                // test, line 156
                var /** number */ v_8 = base.limit - base.cursor;
                // not, line 156
                {
                    var /** number */ v_9 = base.limit - base.cursor;
                    lab22: {
                        // among, line 156
                        if (base.find_among_b(a_9) == 0)
                        {
                            break lab22;
                        }
                        break lab21;
                    }
                    base.cursor = base.limit - v_9;
                }
                base.cursor = base.limit - v_8;
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
            lab23: {
                // (, line 158
                // [, line 158
                base.ket = base.cursor;
                // literal, line 158
                if (!(base.eq_s_b("\u0B99\u0BCD")))
                {
                    break lab23;
                }
                // (, line 158
                // test, line 158
                var /** number */ v_10 = base.limit - base.cursor;
                // not, line 158
                {
                    var /** number */ v_11 = base.limit - base.cursor;
                    lab24: {
                        // literal, line 158
                        if (!(base.eq_s_b("\u0BC8")))
                        {
                            break lab24;
                        }
                        break lab23;
                    }
                    base.cursor = base.limit - v_11;
                }
                base.cursor = base.limit - v_10;
                // ], line 158
                base.bra = base.cursor;
                // <-, line 158
                if (!base.slice_from("\u0BAE\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab25: {
                // (, line 160
                // [, line 160
                base.ket = base.cursor;
                // literal, line 160
                if (!(base.eq_s_b("\u0B99\u0BCD")))
                {
                    break lab25;
                }
                // ], line 160
                base.bra = base.cursor;
                // delete, line 160
                if (!base.slice_del())
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // (, line 162
            // [, line 162
            base.ket = base.cursor;
            // literal, line 162
            if (!(base.eq_s_b("\u0BCD")))
            {
                return false;
            }
            // (, line 162
            // test, line 162
            var /** number */ v_12 = base.limit - base.cursor;
            // (, line 162
            // or, line 162
            lab26: {
                var /** number */ v_13 = base.limit - base.cursor;
                lab27: {
                    // among, line 162
                    if (base.find_among_b(a_10) == 0)
                    {
                        break lab27;
                    }
                    break lab26;
                }
                base.cursor = base.limit - v_13;
                // literal, line 162
                if (!(base.eq_s_b("\u0BCD")))
                {
                    return false;
                }
            }
            base.cursor = base.limit - v_12;
            // ], line 162
            base.bra = base.cursor;
            // delete, line 162
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit_backward;
        return true;
    };

    /** @return {boolean} */
    function r_remove_pronoun_prefixes() {
        // (, line 166
        // unset found_a_match, line 167
        B_found_a_match = false;
        // [, line 168
        base.bra = base.cursor;
        // among, line 168
        if (base.find_among(a_11) == 0)
        {
            return false;
        }
        // among, line 168
        if (base.find_among(a_12) == 0)
        {
            return false;
        }
        // literal, line 168
        if (!(base.eq_s("\u0BCD")))
        {
            return false;
        }
        // ], line 168
        base.ket = base.cursor;
        // delete, line 168
        if (!base.slice_del())
        {
            return false;
        }
        // (, line 169
        // set found_a_match, line 169
        B_found_a_match = true;
        // do, line 170
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call fix_va_start, line 170
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
        // (, line 173
        // unset found_a_match, line 174
        B_found_a_match = false;
        // backwards, line 175
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 175
        // or, line 176
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // (, line 176
                // [, line 176
                base.ket = base.cursor;
                // literal, line 176
                if (!(base.eq_s_b("\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD")))
                {
                    break lab1;
                }
                // (, line 176
                // test, line 176
                var /** number */ v_2 = base.limit - base.cursor;
                // not, line 176
                {
                    var /** number */ v_3 = base.limit - base.cursor;
                    lab2: {
                        // among, line 176
                        if (base.find_among_b(a_13) == 0)
                        {
                            break lab2;
                        }
                        break lab1;
                    }
                    base.cursor = base.limit - v_3;
                }
                base.cursor = base.limit - v_2;
                // ], line 176
                base.bra = base.cursor;
                // <-, line 176
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab3: {
                // (, line 177
                // [, line 177
                base.ket = base.cursor;
                // literal, line 177
                if (!(base.eq_s_b("\u0BB1\u0BCD\u0B95\u0BB3\u0BCD")))
                {
                    break lab3;
                }
                // ], line 177
                base.bra = base.cursor;
                // <-, line 177
                if (!base.slice_from("\u0BB2\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab4: {
                // (, line 178
                // [, line 178
                base.ket = base.cursor;
                // literal, line 178
                if (!(base.eq_s_b("\u0B9F\u0BCD\u0B95\u0BB3\u0BCD")))
                {
                    break lab4;
                }
                // ], line 178
                base.bra = base.cursor;
                // <-, line 178
                if (!base.slice_from("\u0BB3\u0BCD"))
                {
                    return false;
                }
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // (, line 179
            // [, line 179
            base.ket = base.cursor;
            // literal, line 179
            if (!(base.eq_s_b("\u0B95\u0BB3\u0BCD")))
            {
                return false;
            }
            // ], line 179
            base.bra = base.cursor;
            // delete, line 179
            if (!base.slice_del())
            {
                return false;
            }
        }
        // (, line 180
        // set found_a_match, line 180
        B_found_a_match = true;
        base.cursor = base.limit_backward;
        return true;
    };

    /** @return {boolean} */
    function r_remove_question_suffixes() {
        // (, line 184
        // call has_min_length, line 185
        if (!r_has_min_length())
        {
            return false;
        }
        // unset found_a_match, line 186
        B_found_a_match = false;
        // backwards, line 187
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 187
        // do, line 188
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // (, line 188
            // [, line 189
            base.ket = base.cursor;
            // among, line 189
            if (base.find_among_b(a_14) == 0)
            {
                break lab0;
            }
            // ], line 189
            base.bra = base.cursor;
            // <-, line 189
            if (!base.slice_from("\u0BCD"))
            {
                return false;
            }
            // (, line 190
            // set found_a_match, line 190
            B_found_a_match = true;
        }
        base.cursor = base.limit - v_1;
        base.cursor = base.limit_backward;
        // do, line 193
        lab1: {
            // call fix_endings, line 193
            if (!r_fix_endings())
            {
                break lab1;
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_remove_command_suffixes() {
        // (, line 196
        // call has_min_length, line 197
        if (!r_has_min_length())
        {
            return false;
        }
        // unset found_a_match, line 198
        B_found_a_match = false;
        // backwards, line 199
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 199
        // [, line 200
        base.ket = base.cursor;
        // among, line 200
        if (base.find_among_b(a_15) == 0)
        {
            return false;
        }
        // ], line 200
        base.bra = base.cursor;
        // delete, line 200
        if (!base.slice_del())
        {
            return false;
        }
        // (, line 201
        // set found_a_match, line 201
        B_found_a_match = true;
        base.cursor = base.limit_backward;
        return true;
    };

    /** @return {boolean} */
    function r_remove_um() {
        // (, line 205
        // unset found_a_match, line 206
        B_found_a_match = false;
        // call has_min_length, line 207
        if (!r_has_min_length())
        {
            return false;
        }
        // backwards, line 208
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 208
        // [, line 208
        base.ket = base.cursor;
        // literal, line 208
        if (!(base.eq_s_b("\u0BC1\u0BAE\u0BCD")))
        {
            return false;
        }
        // ], line 208
        base.bra = base.cursor;
        // <-, line 208
        if (!base.slice_from("\u0BCD"))
        {
            return false;
        }
        // (, line 209
        // set found_a_match, line 209
        B_found_a_match = true;
        base.cursor = base.limit_backward;
        // do, line 211
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call fix_ending, line 211
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
        // (, line 214
        // unset found_a_match, line 218
        B_found_a_match = false;
        // call has_min_length, line 219
        if (!r_has_min_length())
        {
            return false;
        }
        // backwards, line 220
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 220
        // or, line 237
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // test, line 221
                var /** number */ v_2 = base.limit - base.cursor;
                // (, line 221
                // [, line 221
                base.ket = base.cursor;
                // or, line 221
                lab2: {
                    var /** number */ v_3 = base.limit - base.cursor;
                    lab3: {
                        // literal, line 221
                        if (!(base.eq_s_b("\u0BC1\u0B9F\u0BA9\u0BCD")))
                        {
                            break lab3;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab4: {
                        // literal, line 222
                        if (!(base.eq_s_b("\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8")))
                        {
                            break lab4;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab5: {
                        // literal, line 223
                        if (!(base.eq_s_b("\u0BBF\u0B9F\u0BAE\u0BCD")))
                        {
                            break lab5;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab6: {
                        // literal, line 224
                        if (!(base.eq_s_b("\u0BBF\u0BA9\u0BCD\u0BB1\u0BBF")))
                        {
                            break lab6;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab7: {
                        // literal, line 225
                        if (!(base.eq_s_b("\u0BBE\u0B95\u0BBF")))
                        {
                            break lab7;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab8: {
                        // literal, line 226
                        if (!(base.eq_s_b("\u0BBE\u0B95\u0BBF\u0BAF")))
                        {
                            break lab8;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab9: {
                        // literal, line 227
                        if (!(base.eq_s_b("\u0BC6\u0BA9\u0BCD\u0BB1\u0BC1")))
                        {
                            break lab9;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab10: {
                        // literal, line 228
                        if (!(base.eq_s_b("\u0BC1\u0BB3\u0BCD\u0BB3")))
                        {
                            break lab10;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab11: {
                        // literal, line 229
                        if (!(base.eq_s_b("\u0BC1\u0B9F\u0BC8\u0BAF")))
                        {
                            break lab11;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab12: {
                        // literal, line 230
                        if (!(base.eq_s_b("\u0BC1\u0B9F\u0BC8")))
                        {
                            break lab12;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab13: {
                        // literal, line 231
                        if (!(base.eq_s_b("\u0BC6\u0BA9\u0BC1\u0BAE\u0BCD")))
                        {
                            break lab13;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    lab14: {
                        // (, line 232
                        // literal, line 232
                        if (!(base.eq_s_b("\u0BB2\u0BCD\u0BB2")))
                        {
                            break lab14;
                        }
                        // test, line 232
                        var /** number */ v_4 = base.limit - base.cursor;
                        // (, line 232
                        // not, line 232
                        {
                            var /** number */ v_5 = base.limit - base.cursor;
                            lab15: {
                                // among, line 232
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
                        // literal, line 233
                        if (!(base.eq_s_b("\u0BC6\u0BA9")))
                        {
                            break lab16;
                        }
                        break lab2;
                    }
                    base.cursor = base.limit - v_3;
                    // literal, line 234
                    if (!(base.eq_s_b("\u0BBE\u0B95\u0BBF")))
                    {
                        break lab1;
                    }
                }
                // ], line 234
                base.bra = base.cursor;
                // <-, line 234
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                // (, line 235
                // set found_a_match, line 235
                B_found_a_match = true;
                base.cursor = base.limit - v_2;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // test, line 238
            var /** number */ v_6 = base.limit - base.cursor;
            // (, line 238
            // [, line 238
            base.ket = base.cursor;
            // among, line 238
            if (base.find_among_b(a_17) == 0)
            {
                return false;
            }
            // ], line 251
            base.bra = base.cursor;
            // delete, line 251
            if (!base.slice_del())
            {
                return false;
            }
            // (, line 252
            // set found_a_match, line 252
            B_found_a_match = true;
            base.cursor = base.limit - v_6;
        }
        base.cursor = base.limit_backward;
        // do, line 255
        lab17: {
            // call fix_endings, line 255
            if (!r_fix_endings())
            {
                break lab17;
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_remove_vetrumai_urupukal() {
        // (, line 258
        // unset found_a_match, line 259
        B_found_a_match = false;
        // unset found_vetrumai_urupu, line 260
        B_found_vetrumai_urupu = false;
        // call has_min_length, line 261
        if (!r_has_min_length())
        {
            return false;
        }
        // backwards, line 262
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 262
        // (, line 263
        // or, line 265
        lab0: {
            var /** number */ v_1 = base.limit - base.cursor;
            lab1: {
                // test, line 264
                var /** number */ v_2 = base.limit - base.cursor;
                // (, line 264
                // [, line 264
                base.ket = base.cursor;
                // literal, line 264
                if (!(base.eq_s_b("\u0BA9\u0BC8")))
                {
                    break lab1;
                }
                // ], line 264
                base.bra = base.cursor;
                // delete, line 264
                if (!base.slice_del())
                {
                    return false;
                }
                base.cursor = base.limit - v_2;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab2: {
                // test, line 266
                var /** number */ v_3 = base.limit - base.cursor;
                // (, line 266
                // [, line 266
                base.ket = base.cursor;
                // or, line 267
                lab3: {
                    var /** number */ v_4 = base.limit - base.cursor;
                    lab4: {
                        // (, line 266
                        // or, line 266
                        lab5: {
                            var /** number */ v_5 = base.limit - base.cursor;
                            lab6: {
                                // literal, line 266
                                if (!(base.eq_s_b("\u0BBF\u0BA9\u0BC8")))
                                {
                                    break lab6;
                                }
                                break lab5;
                            }
                            base.cursor = base.limit - v_5;
                            // literal, line 267
                            if (!(base.eq_s_b("\u0BC8")))
                            {
                                break lab4;
                            }
                        }
                        // (, line 267
                        // test, line 267
                        var /** number */ v_6 = base.limit - base.cursor;
                        // not, line 267
                        {
                            var /** number */ v_7 = base.limit - base.cursor;
                            lab7: {
                                // among, line 267
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
                    // (, line 268
                    // literal, line 268
                    if (!(base.eq_s_b("\u0BC8")))
                    {
                        break lab2;
                    }
                    // (, line 268
                    // test, line 268
                    var /** number */ v_8 = base.limit - base.cursor;
                    // (, line 268
                    // among, line 268
                    if (base.find_among_b(a_19) == 0)
                    {
                        break lab2;
                    }
                    // literal, line 268
                    if (!(base.eq_s_b("\u0BCD")))
                    {
                        break lab2;
                    }
                    base.cursor = base.limit - v_8;
                }
                // ], line 269
                base.bra = base.cursor;
                // <-, line 269
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                base.cursor = base.limit - v_3;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab8: {
                // test, line 272
                var /** number */ v_9 = base.limit - base.cursor;
                // (, line 272
                // [, line 272
                base.ket = base.cursor;
                // or, line 273
                lab9: {
                    var /** number */ v_10 = base.limit - base.cursor;
                    lab10: {
                        // literal, line 273
                        if (!(base.eq_s_b("\u0BCA\u0B9F\u0BC1")))
                        {
                            break lab10;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab11: {
                        // literal, line 274
                        if (!(base.eq_s_b("\u0BCB\u0B9F\u0BC1")))
                        {
                            break lab11;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab12: {
                        // literal, line 275
                        if (!(base.eq_s_b("\u0BBF\u0BB2\u0BCD")))
                        {
                            break lab12;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab13: {
                        // literal, line 276
                        if (!(base.eq_s_b("\u0BBF\u0BB1\u0BCD")))
                        {
                            break lab13;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab14: {
                        // (, line 277
                        // literal, line 277
                        if (!(base.eq_s_b("\u0BBF\u0BA9\u0BCD")))
                        {
                            break lab14;
                        }
                        // (, line 277
                        // test, line 277
                        var /** number */ v_11 = base.limit - base.cursor;
                        // not, line 277
                        {
                            var /** number */ v_12 = base.limit - base.cursor;
                            lab15: {
                                // literal, line 277
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
                        // literal, line 278
                        if (!(base.eq_s_b("\u0BBF\u0BA9\u0BCD\u0BB1\u0BC1")))
                        {
                            break lab16;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab17: {
                        // literal, line 279
                        if (!(base.eq_s_b("\u0BBF\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BC1")))
                        {
                            break lab17;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab18: {
                        // literal, line 280
                        if (!(base.eq_s_b("\u0BB5\u0BBF\u0B9F")))
                        {
                            break lab18;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab19: {
                        // (, line 281
                        if (!(I_length >= 7))
                        {
                            break lab19;
                        }
                        // literal, line 281
                        if (!(base.eq_s_b("\u0BBF\u0B9F\u0BAE\u0BCD")))
                        {
                            break lab19;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab20: {
                        // literal, line 282
                        if (!(base.eq_s_b("\u0BBE\u0BB2\u0BCD")))
                        {
                            break lab20;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab21: {
                        // literal, line 283
                        if (!(base.eq_s_b("\u0BC1\u0B9F\u0BC8")))
                        {
                            break lab21;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab22: {
                        // literal, line 284
                        if (!(base.eq_s_b("\u0BBE\u0BAE\u0BB2\u0BCD")))
                        {
                            break lab22;
                        }
                        break lab9;
                    }
                    base.cursor = base.limit - v_10;
                    lab23: {
                        // (, line 285
                        // literal, line 285
                        if (!(base.eq_s_b("\u0BB2\u0BCD")))
                        {
                            break lab23;
                        }
                        // (, line 285
                        // test, line 285
                        var /** number */ v_13 = base.limit - base.cursor;
                        // not, line 285
                        {
                            var /** number */ v_14 = base.limit - base.cursor;
                            lab24: {
                                // among, line 285
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
                    // literal, line 286
                    if (!(base.eq_s_b("\u0BC1\u0BB3\u0BCD")))
                    {
                        break lab8;
                    }
                }
                // ], line 287
                base.bra = base.cursor;
                // <-, line 287
                if (!base.slice_from("\u0BCD"))
                {
                    return false;
                }
                base.cursor = base.limit - v_9;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            lab25: {
                // test, line 290
                var /** number */ v_15 = base.limit - base.cursor;
                // (, line 290
                // [, line 290
                base.ket = base.cursor;
                // or, line 291
                lab26: {
                    var /** number */ v_16 = base.limit - base.cursor;
                    lab27: {
                        // literal, line 291
                        if (!(base.eq_s_b("\u0B95\u0BA3\u0BCD")))
                        {
                            break lab27;
                        }
                        break lab26;
                    }
                    base.cursor = base.limit - v_16;
                    lab28: {
                        // literal, line 292
                        if (!(base.eq_s_b("\u0BAE\u0BC1\u0BA9\u0BCD")))
                        {
                            break lab28;
                        }
                        break lab26;
                    }
                    base.cursor = base.limit - v_16;
                    lab29: {
                        // literal, line 293
                        if (!(base.eq_s_b("\u0BAE\u0BC7\u0BB2\u0BCD")))
                        {
                            break lab29;
                        }
                        break lab26;
                    }
                    base.cursor = base.limit - v_16;
                    lab30: {
                        // literal, line 294
                        if (!(base.eq_s_b("\u0BAE\u0BC7\u0BB1\u0BCD")))
                        {
                            break lab30;
                        }
                        break lab26;
                    }
                    base.cursor = base.limit - v_16;
                    lab31: {
                        // literal, line 295
                        if (!(base.eq_s_b("\u0B95\u0BC0\u0BB4\u0BCD")))
                        {
                            break lab31;
                        }
                        break lab26;
                    }
                    base.cursor = base.limit - v_16;
                    lab32: {
                        // literal, line 296
                        if (!(base.eq_s_b("\u0BAA\u0BBF\u0BA9\u0BCD")))
                        {
                            break lab32;
                        }
                        break lab26;
                    }
                    base.cursor = base.limit - v_16;
                    // (, line 297
                    // literal, line 297
                    if (!(base.eq_s_b("\u0BA4\u0BC1")))
                    {
                        break lab25;
                    }
                    // (, line 297
                    // test, line 297
                    var /** number */ v_17 = base.limit - base.cursor;
                    // not, line 297
                    {
                        var /** number */ v_18 = base.limit - base.cursor;
                        lab33: {
                            // among, line 297
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
                // ], line 298
                base.bra = base.cursor;
                // delete, line 298
                if (!base.slice_del())
                {
                    return false;
                }
                base.cursor = base.limit - v_15;
                break lab0;
            }
            base.cursor = base.limit - v_1;
            // test, line 301
            var /** number */ v_19 = base.limit - base.cursor;
            // (, line 301
            // [, line 301
            base.ket = base.cursor;
            // literal, line 301
            if (!(base.eq_s_b("\u0BC0")))
            {
                return false;
            }
            // ], line 301
            base.bra = base.cursor;
            // <-, line 301
            if (!base.slice_from("\u0BBF"))
            {
                return false;
            }
            base.cursor = base.limit - v_19;
        }
        // (, line 303
        // set found_a_match, line 303
        B_found_a_match = true;
        // (, line 304
        // set found_vetrumai_urupu, line 304
        B_found_vetrumai_urupu = true;
        // do, line 305
        var /** number */ v_20 = base.limit - base.cursor;
        lab34: {
            // (, line 305
            // [, line 305
            base.ket = base.cursor;
            // literal, line 305
            if (!(base.eq_s_b("\u0BBF\u0BA9\u0BCD")))
            {
                break lab34;
            }
            // ], line 305
            base.bra = base.cursor;
            // <-, line 305
            if (!base.slice_from("\u0BCD"))
            {
                return false;
            }
        }
        base.cursor = base.limit - v_20;
        base.cursor = base.limit_backward;
        // do, line 307
        lab35: {
            // call fix_endings, line 307
            if (!r_fix_endings())
            {
                break lab35;
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_remove_tense_suffixes() {
        // (, line 310
        // set found_a_match, line 311
        B_found_a_match = true;
        // repeat, line 312
        replab0: while(true)
        {
            var /** number */ v_1 = base.cursor;
            lab1: {
                // (, line 312
                // Boolean test found_a_match, line 312
                if (!B_found_a_match)
                {
                    break lab1;
                }
                // (, line 312
                // do, line 312
                var /** number */ v_2 = base.cursor;
                lab2: {
                    // call remove_tense_suffix, line 312
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
        // (, line 315
        // unset found_a_match, line 316
        B_found_a_match = false;
        // call has_min_length, line 317
        if (!r_has_min_length())
        {
            return false;
        }
        // backwards, line 318
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 318
        // do, line 319
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // (, line 319
            // or, line 326
            lab1: {
                var /** number */ v_2 = base.limit - base.cursor;
                lab2: {
                    // test, line 320
                    var /** number */ v_3 = base.limit - base.cursor;
                    // (, line 320
                    // [, line 320
                    base.ket = base.cursor;
                    // among, line 320
                    if (base.find_among_b(a_22) == 0)
                    {
                        break lab2;
                    }
                    // ], line 323
                    base.bra = base.cursor;
                    // delete, line 323
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // (, line 324
                    // set found_a_match, line 324
                    B_found_a_match = true;
                    base.cursor = base.limit - v_3;
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                lab3: {
                    // test, line 327
                    var /** number */ v_4 = base.limit - base.cursor;
                    // (, line 327
                    // [, line 327
                    base.ket = base.cursor;
                    // or, line 328
                    lab4: {
                        var /** number */ v_5 = base.limit - base.cursor;
                        lab5: {
                            // literal, line 328
                            if (!(base.eq_s_b("\u0BAE\u0BBE\u0BB0\u0BCD")))
                            {
                                break lab5;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab6: {
                            // literal, line 329
                            if (!(base.eq_s_b("\u0BAE\u0BBF\u0BA9\u0BCD")))
                            {
                                break lab6;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab7: {
                            // literal, line 330
                            if (!(base.eq_s_b("\u0BA9\u0BA9\u0BCD")))
                            {
                                break lab7;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab8: {
                            // literal, line 331
                            if (!(base.eq_s_b("\u0BA9\u0BBE\u0BA9\u0BCD")))
                            {
                                break lab8;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab9: {
                            // literal, line 332
                            if (!(base.eq_s_b("\u0BA9\u0BBE\u0BB3\u0BCD")))
                            {
                                break lab9;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab10: {
                            // literal, line 333
                            if (!(base.eq_s_b("\u0BA9\u0BBE\u0BB0\u0BCD")))
                            {
                                break lab10;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab11: {
                            // (, line 334
                            // literal, line 334
                            if (!(base.eq_s_b("\u0BB5\u0BA9\u0BCD")))
                            {
                                break lab11;
                            }
                            // test, line 334
                            var /** number */ v_6 = base.limit - base.cursor;
                            // (, line 334
                            // not, line 334
                            {
                                var /** number */ v_7 = base.limit - base.cursor;
                                lab12: {
                                    // among, line 334
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
                            // literal, line 335
                            if (!(base.eq_s_b("\u0BA9\u0BB3\u0BCD")))
                            {
                                break lab13;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab14: {
                            // literal, line 336
                            if (!(base.eq_s_b("\u0BB5\u0BB3\u0BCD")))
                            {
                                break lab14;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab15: {
                            // literal, line 337
                            if (!(base.eq_s_b("\u0BA9\u0BB0\u0BCD")))
                            {
                                break lab15;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab16: {
                            // literal, line 338
                            if (!(base.eq_s_b("\u0BB5\u0BB0\u0BCD")))
                            {
                                break lab16;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab17: {
                            // literal, line 339
                            if (!(base.eq_s_b("\u0BA9")))
                            {
                                break lab17;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab18: {
                            // literal, line 339
                            if (!(base.eq_s_b("\u0BAA")))
                            {
                                break lab18;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab19: {
                            // literal, line 339
                            if (!(base.eq_s_b("\u0B95")))
                            {
                                break lab19;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab20: {
                            // literal, line 339
                            if (!(base.eq_s_b("\u0BA4")))
                            {
                                break lab20;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab21: {
                            // literal, line 339
                            if (!(base.eq_s_b("\u0BAF")))
                            {
                                break lab21;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab22: {
                            // literal, line 340
                            if (!(base.eq_s_b("\u0BAA\u0BA9\u0BCD")))
                            {
                                break lab22;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab23: {
                            // literal, line 341
                            if (!(base.eq_s_b("\u0BAA\u0BB3\u0BCD")))
                            {
                                break lab23;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab24: {
                            // literal, line 342
                            if (!(base.eq_s_b("\u0BAA\u0BB0\u0BCD")))
                            {
                                break lab24;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab25: {
                            // (, line 343
                            // literal, line 343
                            if (!(base.eq_s_b("\u0BA4\u0BC1")))
                            {
                                break lab25;
                            }
                            // (, line 343
                            // test, line 343
                            var /** number */ v_8 = base.limit - base.cursor;
                            // not, line 343
                            {
                                var /** number */ v_9 = base.limit - base.cursor;
                                lab26: {
                                    // among, line 343
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
                            // literal, line 344
                            if (!(base.eq_s_b("\u0BBF\u0BB1\u0BCD\u0BB1\u0BC1")))
                            {
                                break lab27;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab28: {
                            // literal, line 345
                            if (!(base.eq_s_b("\u0BAA\u0BAE\u0BCD")))
                            {
                                break lab28;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab29: {
                            // literal, line 346
                            if (!(base.eq_s_b("\u0BA9\u0BAE\u0BCD")))
                            {
                                break lab29;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab30: {
                            // literal, line 347
                            if (!(base.eq_s_b("\u0BA4\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab30;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab31: {
                            // literal, line 348
                            if (!(base.eq_s_b("\u0BB1\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab31;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab32: {
                            // literal, line 349
                            if (!(base.eq_s_b("\u0B95\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab32;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab33: {
                            // literal, line 350
                            if (!(base.eq_s_b("\u0BA9\u0BC6\u0BA9\u0BCD")))
                            {
                                break lab33;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        lab34: {
                            // literal, line 351
                            if (!(base.eq_s_b("\u0BA9\u0BC8")))
                            {
                                break lab34;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_5;
                        // literal, line 352
                        if (!(base.eq_s_b("\u0BB5\u0BC8")))
                        {
                            break lab3;
                        }
                    }
                    // ], line 353
                    base.bra = base.cursor;
                    // delete, line 353
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    // (, line 354
                    // set found_a_match, line 354
                    B_found_a_match = true;
                    base.cursor = base.limit - v_4;
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                lab35: {
                    // test, line 357
                    var /** number */ v_10 = base.limit - base.cursor;
                    // (, line 357
                    // [, line 357
                    base.ket = base.cursor;
                    // or, line 358
                    lab36: {
                        var /** number */ v_11 = base.limit - base.cursor;
                        lab37: {
                            // (, line 358
                            // literal, line 358
                            if (!(base.eq_s_b("\u0BBE\u0BA9\u0BCD")))
                            {
                                break lab37;
                            }
                            // test, line 358
                            var /** number */ v_12 = base.limit - base.cursor;
                            // (, line 358
                            // not, line 358
                            {
                                var /** number */ v_13 = base.limit - base.cursor;
                                lab38: {
                                    // literal, line 358
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
                            // literal, line 359
                            if (!(base.eq_s_b("\u0BBE\u0BB3\u0BCD")))
                            {
                                break lab39;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab40: {
                            // literal, line 360
                            if (!(base.eq_s_b("\u0BBE\u0BB0\u0BCD")))
                            {
                                break lab40;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab41: {
                            // literal, line 361
                            if (!(base.eq_s_b("\u0BC7\u0BA9\u0BCD")))
                            {
                                break lab41;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab42: {
                            // literal, line 362
                            if (!(base.eq_s_b("\u0BBE")))
                            {
                                break lab42;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab43: {
                            // literal, line 363
                            if (!(base.eq_s_b("\u0BBE\u0BAE\u0BCD")))
                            {
                                break lab43;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab44: {
                            // literal, line 364
                            if (!(base.eq_s_b("\u0BC6\u0BAE\u0BCD")))
                            {
                                break lab44;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab45: {
                            // literal, line 365
                            if (!(base.eq_s_b("\u0BC7\u0BAE\u0BCD")))
                            {
                                break lab45;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab46: {
                            // literal, line 366
                            if (!(base.eq_s_b("\u0BCB\u0BAE\u0BCD")))
                            {
                                break lab46;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab47: {
                            // literal, line 367
                            if (!(base.eq_s_b("\u0B95\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab47;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab48: {
                            // literal, line 368
                            if (!(base.eq_s_b("\u0BA4\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab48;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab49: {
                            // literal, line 369
                            if (!(base.eq_s_b("\u0B9F\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab49;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab50: {
                            // literal, line 370
                            if (!(base.eq_s_b("\u0BB1\u0BC1\u0BAE\u0BCD")))
                            {
                                break lab50;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab51: {
                            // literal, line 371
                            if (!(base.eq_s_b("\u0BBE\u0BAF\u0BCD")))
                            {
                                break lab51;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab52: {
                            // literal, line 372
                            if (!(base.eq_s_b("\u0BA9\u0BC6\u0BA9\u0BCD")))
                            {
                                break lab52;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab53: {
                            // literal, line 373
                            if (!(base.eq_s_b("\u0BA9\u0BBF\u0BB0\u0BCD")))
                            {
                                break lab53;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        lab54: {
                            // literal, line 374
                            if (!(base.eq_s_b("\u0BC0\u0BB0\u0BCD")))
                            {
                                break lab54;
                            }
                            break lab36;
                        }
                        base.cursor = base.limit - v_11;
                        // literal, line 375
                        if (!(base.eq_s_b("\u0BC0\u0BAF\u0BB0\u0BCD")))
                        {
                            break lab35;
                        }
                    }
                    // ], line 376
                    base.bra = base.cursor;
                    // <-, line 376
                    if (!base.slice_from("\u0BCD"))
                    {
                        return false;
                    }
                    // (, line 377
                    // set found_a_match, line 377
                    B_found_a_match = true;
                    base.cursor = base.limit - v_10;
                    break lab1;
                }
                base.cursor = base.limit - v_2;
                // test, line 380
                var /** number */ v_14 = base.limit - base.cursor;
                // (, line 380
                // (, line 380
                // [, line 380
                base.ket = base.cursor;
                // or, line 380
                lab55: {
                    var /** number */ v_15 = base.limit - base.cursor;
                    lab56: {
                        // literal, line 380
                        if (!(base.eq_s_b("\u0B95\u0BC1")))
                        {
                            break lab56;
                        }
                        break lab55;
                    }
                    base.cursor = base.limit - v_15;
                    // literal, line 380
                    if (!(base.eq_s_b("\u0BA4\u0BC1")))
                    {
                        break lab0;
                    }
                }
                // (, line 380
                // test, line 380
                var /** number */ v_16 = base.limit - base.cursor;
                // literal, line 380
                if (!(base.eq_s_b("\u0BCD")))
                {
                    break lab0;
                }
                base.cursor = base.limit - v_16;
                // ], line 380
                base.bra = base.cursor;
                // delete, line 380
                if (!base.slice_del())
                {
                    return false;
                }
                // (, line 381
                // set found_a_match, line 381
                B_found_a_match = true;
                base.cursor = base.limit - v_14;
            }
        }
        base.cursor = base.limit - v_1;
        // do, line 384
        var /** number */ v_17 = base.limit - base.cursor;
        lab57: {
            // (, line 384
            // [, line 384
            base.ket = base.cursor;
            // among, line 384
            if (base.find_among_b(a_25) == 0)
            {
                break lab57;
            }
            // ], line 391
            base.bra = base.cursor;
            // delete, line 391
            if (!base.slice_del())
            {
                return false;
            }
            // (, line 392
            // set found_a_match, line 392
            B_found_a_match = true;
        }
        base.cursor = base.limit - v_17;
        base.cursor = base.limit_backward;
        // do, line 395
        lab58: {
            // call fix_endings, line 395
            if (!r_fix_endings())
            {
                break lab58;
            }
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 398
        // unset found_vetrumai_urupu, line 399
        B_found_vetrumai_urupu = false;
        // do, line 400
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call fix_ending, line 400
            if (!r_fix_ending())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // call has_min_length, line 401
        if (!r_has_min_length())
        {
            return false;
        }
        // do, line 402
        var /** number */ v_2 = base.cursor;
        lab1: {
            // call remove_question_prefixes, line 402
            if (!r_remove_question_prefixes())
            {
                break lab1;
            }
        }
        base.cursor = v_2;
        // do, line 403
        var /** number */ v_3 = base.cursor;
        lab2: {
            // call remove_pronoun_prefixes, line 403
            if (!r_remove_pronoun_prefixes())
            {
                break lab2;
            }
        }
        base.cursor = v_3;
        // do, line 404
        var /** number */ v_4 = base.cursor;
        lab3: {
            // call remove_question_suffixes, line 404
            if (!r_remove_question_suffixes())
            {
                break lab3;
            }
        }
        base.cursor = v_4;
        // do, line 405
        var /** number */ v_5 = base.cursor;
        lab4: {
            // call remove_um, line 405
            if (!r_remove_um())
            {
                break lab4;
            }
        }
        base.cursor = v_5;
        // do, line 406
        var /** number */ v_6 = base.cursor;
        lab5: {
            // call remove_common_word_endings, line 406
            if (!r_remove_common_word_endings())
            {
                break lab5;
            }
        }
        base.cursor = v_6;
        // do, line 407
        var /** number */ v_7 = base.cursor;
        lab6: {
            // call remove_vetrumai_urupukal, line 407
            if (!r_remove_vetrumai_urupukal())
            {
                break lab6;
            }
        }
        base.cursor = v_7;
        // do, line 408
        var /** number */ v_8 = base.cursor;
        lab7: {
            // call remove_plural_suffix, line 408
            if (!r_remove_plural_suffix())
            {
                break lab7;
            }
        }
        base.cursor = v_8;
        // do, line 409
        var /** number */ v_9 = base.cursor;
        lab8: {
            // call remove_command_suffixes, line 409
            if (!r_remove_command_suffixes())
            {
                break lab8;
            }
        }
        base.cursor = v_9;
        // do, line 410
        var /** number */ v_10 = base.cursor;
        lab9: {
            // call remove_tense_suffixes, line 410
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
