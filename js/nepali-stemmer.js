// This file was generated automatically by the Snowball to Javascript compiler
// http://snowballstem.org/

/**@constructor*/
function NepaliStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["\u0932\u093E\u0907", -1, 1],
        ["\u0932\u093E\u0908", -1, 1],
        ["\u0938\u0901\u0917", -1, 1],
        ["\u0938\u0902\u0917", -1, 1],
        ["\u092E\u093E\u0930\u094D\u092B\u0924", -1, 1],
        ["\u0930\u0924", -1, 1],
        ["\u0915\u093E", -1, 2],
        ["\u092E\u093E", -1, 1],
        ["\u0926\u094D\u0935\u093E\u0930\u093E", -1, 1],
        ["\u0915\u093F", -1, 2],
        ["\u092A\u091B\u093F", -1, 1],
        ["\u0915\u0940", -1, 2],
        ["\u0932\u0947", -1, 1],
        ["\u0915\u0948", -1, 2],
        ["\u0938\u0901\u0917\u0948", -1, 1],
        ["\u092E\u0948", -1, 1],
        ["\u0915\u094B", -1, 2]
    ];

    /** @const */ var a_1 = [
        ["\u0901", -1, -1],
        ["\u0902", -1, -1],
        ["\u0948", -1, -1]
    ];

    /** @const */ var a_2 = [
        ["\u0901", -1, 1],
        ["\u0902", -1, 1],
        ["\u0948", -1, 2]
    ];

    /** @const */ var a_3 = [
        ["\u0925\u093F\u090F", -1, 1],
        ["\u091B", -1, 1],
        ["\u0907\u091B", 1, 1],
        ["\u090F\u091B", 1, 1],
        ["\u093F\u091B", 1, 1],
        ["\u0947\u091B", 1, 1],
        ["\u0928\u0947\u091B", 5, 1],
        ["\u0939\u0941\u0928\u0947\u091B", 6, 1],
        ["\u0907\u0928\u094D\u091B", 1, 1],
        ["\u093F\u0928\u094D\u091B", 1, 1],
        ["\u0939\u0941\u0928\u094D\u091B", 1, 1],
        ["\u090F\u0915\u093E", -1, 1],
        ["\u0907\u090F\u0915\u093E", 11, 1],
        ["\u093F\u090F\u0915\u093E", 11, 1],
        ["\u0947\u0915\u093E", -1, 1],
        ["\u0928\u0947\u0915\u093E", 14, 1],
        ["\u0926\u093E", -1, 1],
        ["\u0907\u0926\u093E", 16, 1],
        ["\u093F\u0926\u093E", 16, 1],
        ["\u0926\u0947\u0916\u093F", -1, 1],
        ["\u092E\u093E\u0925\u093F", -1, 1],
        ["\u090F\u0915\u0940", -1, 1],
        ["\u0907\u090F\u0915\u0940", 21, 1],
        ["\u093F\u090F\u0915\u0940", 21, 1],
        ["\u0947\u0915\u0940", -1, 1],
        ["\u0926\u0947\u0916\u0940", -1, 1],
        ["\u0925\u0940", -1, 1],
        ["\u0926\u0940", -1, 1],
        ["\u091B\u0941", -1, 1],
        ["\u090F\u091B\u0941", 28, 1],
        ["\u0947\u091B\u0941", 28, 1],
        ["\u0928\u0947\u091B\u0941", 30, 1],
        ["\u0928\u0941", -1, 1],
        ["\u0939\u0930\u0941", -1, 1],
        ["\u0939\u0930\u0942", -1, 1],
        ["\u091B\u0947", -1, 1],
        ["\u0925\u0947", -1, 1],
        ["\u0928\u0947", -1, 1],
        ["\u090F\u0915\u0948", -1, 1],
        ["\u0947\u0915\u0948", -1, 1],
        ["\u0928\u0947\u0915\u0948", 39, 1],
        ["\u0926\u0948", -1, 1],
        ["\u0907\u0926\u0948", 41, 1],
        ["\u093F\u0926\u0948", 41, 1],
        ["\u090F\u0915\u094B", -1, 1],
        ["\u0907\u090F\u0915\u094B", 44, 1],
        ["\u093F\u090F\u0915\u094B", 44, 1],
        ["\u0947\u0915\u094B", -1, 1],
        ["\u0928\u0947\u0915\u094B", 47, 1],
        ["\u0926\u094B", -1, 1],
        ["\u0907\u0926\u094B", 49, 1],
        ["\u093F\u0926\u094B", 49, 1],
        ["\u092F\u094B", -1, 1],
        ["\u0907\u092F\u094B", 52, 1],
        ["\u092D\u092F\u094B", 52, 1],
        ["\u093F\u092F\u094B", 52, 1],
        ["\u0925\u093F\u092F\u094B", 55, 1],
        ["\u0926\u093F\u092F\u094B", 55, 1],
        ["\u0925\u094D\u092F\u094B", 52, 1],
        ["\u091B\u094C", -1, 1],
        ["\u0907\u091B\u094C", 59, 1],
        ["\u090F\u091B\u094C", 59, 1],
        ["\u093F\u091B\u094C", 59, 1],
        ["\u0947\u091B\u094C", 59, 1],
        ["\u0928\u0947\u091B\u094C", 63, 1],
        ["\u092F\u094C", -1, 1],
        ["\u0925\u093F\u092F\u094C", 65, 1],
        ["\u091B\u094D\u092F\u094C", 65, 1],
        ["\u0925\u094D\u092F\u094C", 65, 1],
        ["\u091B\u0928\u094D", -1, 1],
        ["\u0907\u091B\u0928\u094D", 69, 1],
        ["\u090F\u091B\u0928\u094D", 69, 1],
        ["\u093F\u091B\u0928\u094D", 69, 1],
        ["\u0947\u091B\u0928\u094D", 69, 1],
        ["\u0928\u0947\u091B\u0928\u094D", 73, 1],
        ["\u0932\u093E\u0928\u094D", -1, 1],
        ["\u091B\u093F\u0928\u094D", -1, 1],
        ["\u0925\u093F\u0928\u094D", -1, 1],
        ["\u092A\u0930\u094D", -1, 1],
        ["\u0907\u0938\u094D", -1, 1],
        ["\u0925\u093F\u0907\u0938\u094D", 79, 1],
        ["\u091B\u0938\u094D", -1, 1],
        ["\u0907\u091B\u0938\u094D", 81, 1],
        ["\u090F\u091B\u0938\u094D", 81, 1],
        ["\u093F\u091B\u0938\u094D", 81, 1],
        ["\u0947\u091B\u0938\u094D", 81, 1],
        ["\u0928\u0947\u091B\u0938\u094D", 85, 1],
        ["\u093F\u0938\u094D", -1, 1],
        ["\u0925\u093F\u0938\u094D", 87, 1],
        ["\u091B\u0947\u0938\u094D", -1, 1],
        ["\u0939\u094B\u0938\u094D", -1, 1]
    ];



    /** @return {boolean} */
    function r_remove_category_1() {
        var /** number */ among_var;
        // (, line 53
        // [, line 54
        base.ket = base.cursor;
        // substring, line 54
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 54
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 58
                // delete, line 58
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 59
                // or, line 59
                lab0: {
                    var /** number */ v_1 = base.limit - base.cursor;
                    lab1: {
                        // (, line 59
                        // or, line 59
                        lab2: {
                            var /** number */ v_2 = base.limit - base.cursor;
                            lab3: {
                                // literal, line 59
                                if (!(base.eq_s_b("\u090F")))
                                {
                                    break lab3;
                                }
                                break lab2;
                            }
                            base.cursor = base.limit - v_2;
                            // literal, line 59
                            if (!(base.eq_s_b("\u0947")))
                            {
                                break lab1;
                            }
                        }
                        // (, line 59
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    // delete, line 59
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
    function r_check_category_2() {
        // (, line 63
        // [, line 64
        base.ket = base.cursor;
        // substring, line 64
        if (base.find_among_b(a_1) == 0)
        {
            return false;
        }
        // ], line 64
        base.bra = base.cursor;
        return true;
    };

    /** @return {boolean} */
    function r_remove_category_2() {
        var /** number */ among_var;
        // (, line 69
        // [, line 70
        base.ket = base.cursor;
        // substring, line 70
        among_var = base.find_among_b(a_2);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 70
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 71
                // or, line 71
                lab0: {
                    var /** number */ v_1 = base.limit - base.cursor;
                    lab1: {
                        // literal, line 71
                        if (!(base.eq_s_b("\u092F\u094C")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    lab2: {
                        // literal, line 71
                        if (!(base.eq_s_b("\u091B\u094C")))
                        {
                            break lab2;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    lab3: {
                        // literal, line 71
                        if (!(base.eq_s_b("\u0928\u094C")))
                        {
                            break lab3;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    // literal, line 71
                    if (!(base.eq_s_b("\u0925\u0947")))
                    {
                        return false;
                    }
                }
                // delete, line 71
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 72
                // literal, line 72
                if (!(base.eq_s_b("\u0924\u094D\u0930")))
                {
                    return false;
                }
                // delete, line 72
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_remove_category_3() {
        var /** number */ among_var;
        // (, line 76
        // [, line 77
        base.ket = base.cursor;
        // substring, line 77
        among_var = base.find_among_b(a_3);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 77
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 79
                // delete, line 79
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 85
        // backwards, line 86
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 86
        // do, line 87
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // call remove_category_1, line 87
            if (!r_remove_category_1())
            {
                break lab0;
            }
        }
        base.cursor = base.limit - v_1;
        // do, line 88
        var /** number */ v_2 = base.limit - base.cursor;
        lab1: {
            // (, line 88
            // repeat, line 89
            replab2: while(true)
            {
                var /** number */ v_3 = base.limit - base.cursor;
                lab3: {
                    // (, line 89
                    // or, line 89
                    lab4: {
                        var /** number */ v_4 = base.limit - base.cursor;
                        lab5: {
                            // and, line 89
                            var /** number */ v_5 = base.limit - base.cursor;
                            // call check_category_2, line 89
                            if (!r_check_category_2())
                            {
                                break lab5;
                            }
                            base.cursor = base.limit - v_5;
                            // call remove_category_2, line 89
                            if (!r_remove_category_2())
                            {
                                break lab5;
                            }
                            base.cursor = base.limit - v_5;
                            // call remove_category_3, line 89
                            if (!r_remove_category_3())
                            {
                                break lab5;
                            }
                            break lab4;
                        }
                        base.cursor = base.limit - v_4;
                        // call remove_category_3, line 89
                        if (!r_remove_category_3())
                        {
                            break lab3;
                        }
                    }
                    continue replab2;
                }
                base.cursor = base.limit - v_3;
                break replab2;
            }
        }
        base.cursor = base.limit - v_2;
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
window['NepaliStemmer'] = NepaliStemmer;
