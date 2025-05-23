// Generated from hungarian.sbl by Snowball 3.0.0 - https://snowballstem.org/

/**@constructor*/
var HungarianStemmer = function() {
    var base = new BaseStemmer();

    /** @const */ var a_0 = [
        ["\u00E1", -1, 1],
        ["\u00E9", -1, 2]
    ];

    /** @const */ var a_1 = [
        ["bb", -1, -1],
        ["cc", -1, -1],
        ["dd", -1, -1],
        ["ff", -1, -1],
        ["gg", -1, -1],
        ["jj", -1, -1],
        ["kk", -1, -1],
        ["ll", -1, -1],
        ["mm", -1, -1],
        ["nn", -1, -1],
        ["pp", -1, -1],
        ["rr", -1, -1],
        ["ccs", -1, -1],
        ["ss", -1, -1],
        ["zzs", -1, -1],
        ["tt", -1, -1],
        ["vv", -1, -1],
        ["ggy", -1, -1],
        ["lly", -1, -1],
        ["nny", -1, -1],
        ["tty", -1, -1],
        ["ssz", -1, -1],
        ["zz", -1, -1]
    ];

    /** @const */ var a_2 = [
        ["al", -1, 1],
        ["el", -1, 1]
    ];

    /** @const */ var a_3 = [
        ["ba", -1, -1],
        ["ra", -1, -1],
        ["be", -1, -1],
        ["re", -1, -1],
        ["ig", -1, -1],
        ["nak", -1, -1],
        ["nek", -1, -1],
        ["val", -1, -1],
        ["vel", -1, -1],
        ["ul", -1, -1],
        ["n\u00E1l", -1, -1],
        ["n\u00E9l", -1, -1],
        ["b\u00F3l", -1, -1],
        ["r\u00F3l", -1, -1],
        ["t\u00F3l", -1, -1],
        ["\u00FCl", -1, -1],
        ["b\u0151l", -1, -1],
        ["r\u0151l", -1, -1],
        ["t\u0151l", -1, -1],
        ["n", -1, -1],
        ["an", 19, -1],
        ["ban", 20, -1],
        ["en", 19, -1],
        ["ben", 22, -1],
        ["k\u00E9ppen", 22, -1],
        ["on", 19, -1],
        ["\u00F6n", 19, -1],
        ["k\u00E9pp", -1, -1],
        ["kor", -1, -1],
        ["t", -1, -1],
        ["at", 29, -1],
        ["et", 29, -1],
        ["k\u00E9nt", 29, -1],
        ["ank\u00E9nt", 32, -1],
        ["enk\u00E9nt", 32, -1],
        ["onk\u00E9nt", 32, -1],
        ["ot", 29, -1],
        ["\u00E9rt", 29, -1],
        ["\u00F6t", 29, -1],
        ["hez", -1, -1],
        ["hoz", -1, -1],
        ["h\u00F6z", -1, -1],
        ["v\u00E1", -1, -1],
        ["v\u00E9", -1, -1]
    ];

    /** @const */ var a_4 = [
        ["\u00E1n", -1, 2],
        ["\u00E9n", -1, 1],
        ["\u00E1nk\u00E9nt", -1, 2]
    ];

    /** @const */ var a_5 = [
        ["stul", -1, 1],
        ["astul", 0, 1],
        ["\u00E1stul", 0, 2],
        ["st\u00FCl", -1, 1],
        ["est\u00FCl", 3, 1],
        ["\u00E9st\u00FCl", 3, 3]
    ];

    /** @const */ var a_6 = [
        ["\u00E1", -1, 1],
        ["\u00E9", -1, 1]
    ];

    /** @const */ var a_7 = [
        ["k", -1, 3],
        ["ak", 0, 3],
        ["ek", 0, 3],
        ["ok", 0, 3],
        ["\u00E1k", 0, 1],
        ["\u00E9k", 0, 2],
        ["\u00F6k", 0, 3]
    ];

    /** @const */ var a_8 = [
        ["\u00E9i", -1, 1],
        ["\u00E1\u00E9i", 0, 3],
        ["\u00E9\u00E9i", 0, 2],
        ["\u00E9", -1, 1],
        ["k\u00E9", 3, 1],
        ["ak\u00E9", 4, 1],
        ["ek\u00E9", 4, 1],
        ["ok\u00E9", 4, 1],
        ["\u00E1k\u00E9", 4, 3],
        ["\u00E9k\u00E9", 4, 2],
        ["\u00F6k\u00E9", 4, 1],
        ["\u00E9\u00E9", 3, 2]
    ];

    /** @const */ var a_9 = [
        ["a", -1, 1],
        ["ja", 0, 1],
        ["d", -1, 1],
        ["ad", 2, 1],
        ["ed", 2, 1],
        ["od", 2, 1],
        ["\u00E1d", 2, 2],
        ["\u00E9d", 2, 3],
        ["\u00F6d", 2, 1],
        ["e", -1, 1],
        ["je", 9, 1],
        ["nk", -1, 1],
        ["unk", 11, 1],
        ["\u00E1nk", 11, 2],
        ["\u00E9nk", 11, 3],
        ["\u00FCnk", 11, 1],
        ["uk", -1, 1],
        ["juk", 16, 1],
        ["\u00E1juk", 17, 2],
        ["\u00FCk", -1, 1],
        ["j\u00FCk", 19, 1],
        ["\u00E9j\u00FCk", 20, 3],
        ["m", -1, 1],
        ["am", 22, 1],
        ["em", 22, 1],
        ["om", 22, 1],
        ["\u00E1m", 22, 2],
        ["\u00E9m", 22, 3],
        ["o", -1, 1],
        ["\u00E1", -1, 2],
        ["\u00E9", -1, 3]
    ];

    /** @const */ var a_10 = [
        ["id", -1, 1],
        ["aid", 0, 1],
        ["jaid", 1, 1],
        ["eid", 0, 1],
        ["jeid", 3, 1],
        ["\u00E1id", 0, 2],
        ["\u00E9id", 0, 3],
        ["i", -1, 1],
        ["ai", 7, 1],
        ["jai", 8, 1],
        ["ei", 7, 1],
        ["jei", 10, 1],
        ["\u00E1i", 7, 2],
        ["\u00E9i", 7, 3],
        ["itek", -1, 1],
        ["eitek", 14, 1],
        ["jeitek", 15, 1],
        ["\u00E9itek", 14, 3],
        ["ik", -1, 1],
        ["aik", 18, 1],
        ["jaik", 19, 1],
        ["eik", 18, 1],
        ["jeik", 21, 1],
        ["\u00E1ik", 18, 2],
        ["\u00E9ik", 18, 3],
        ["ink", -1, 1],
        ["aink", 25, 1],
        ["jaink", 26, 1],
        ["eink", 25, 1],
        ["jeink", 28, 1],
        ["\u00E1ink", 25, 2],
        ["\u00E9ink", 25, 3],
        ["aitok", -1, 1],
        ["jaitok", 32, 1],
        ["\u00E1itok", -1, 2],
        ["im", -1, 1],
        ["aim", 35, 1],
        ["jaim", 36, 1],
        ["eim", 35, 1],
        ["jeim", 38, 1],
        ["\u00E1im", 35, 2],
        ["\u00E9im", 35, 3]
    ];

    /** @const */ var /** Array<number> */ g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 36, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1];

    var /** number */ I_p1 = 0;


    /** @return {boolean} */
    function r_mark_regions() {
        I_p1 = base.limit;
        lab0: {
            /** @const */ var /** number */ v_1 = base.cursor;
            lab1: {
                if (!(base.in_grouping(g_v, 97, 369))) break lab1;
                /** @const */ var /** number */ v_2 = base.cursor;
                lab2: {
                    if (!base.go_in_grouping(g_v, 97, 369)) break lab2;
                    base.cursor++;
                    I_p1 = base.cursor;
                }
                base.cursor = v_2;
                break lab0;
            }
            base.cursor = v_1;
            if (!base.go_out_grouping(g_v, 97, 369)) return false;
            base.cursor++;
            I_p1 = base.cursor;
        }
        return true;
    };

    /** @return {boolean} */
    function r_R1() {
        return I_p1 <= base.cursor;
    };

    /** @return {boolean} */
    function r_v_ending() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_0);
        if (among_var == 0) return false;
        base.bra = base.cursor;
        if (!r_R1()) return false;
        switch (among_var) {
            case 1:
                if (!base.slice_from("a")) return false;
                break;
            case 2:
                if (!base.slice_from("e")) return false;
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_double() {
        /** @const */ var /** number */ v_1 = base.limit - base.cursor;
        if (base.find_among_b(a_1) == 0) return false;
        base.cursor = base.limit - v_1;
        return true;
    };

    /** @return {boolean} */
    function r_undouble() {
        if (base.cursor <= base.limit_backward) return false;
        base.cursor--;
        base.ket = base.cursor;
        if (base.cursor <= base.limit_backward) return false;
        base.cursor--;
        base.bra = base.cursor;
        if (!base.slice_del()) return false;
        return true;
    };

    /** @return {boolean} */
    function r_instrum() {
        base.ket = base.cursor;
        if (base.find_among_b(a_2) == 0) return false;
        base.bra = base.cursor;
        if (!r_R1()) return false;
        if (!r_double()) return false;
        if (!base.slice_del()) return false;
        return r_undouble();
    };

    /** @return {boolean} */
    function r_case() {
        base.ket = base.cursor;
        if (base.find_among_b(a_3) == 0) return false;
        base.bra = base.cursor;
        if (!r_R1()) return false;
        if (!base.slice_del()) return false;
        return r_v_ending();
    };

    /** @return {boolean} */
    function r_case_special() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_4);
        if (among_var == 0) return false;
        base.bra = base.cursor;
        if (!r_R1()) return false;
        switch (among_var) {
            case 1:
                if (!base.slice_from("e")) return false;
                break;
            case 2:
                if (!base.slice_from("a")) return false;
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_case_other() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_5);
        if (among_var == 0) return false;
        base.bra = base.cursor;
        if (!r_R1()) return false;
        switch (among_var) {
            case 1:
                if (!base.slice_del()) return false;
                break;
            case 2:
                if (!base.slice_from("a")) return false;
                break;
            case 3:
                if (!base.slice_from("e")) return false;
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_factive() {
        base.ket = base.cursor;
        if (base.find_among_b(a_6) == 0) return false;
        base.bra = base.cursor;
        if (!r_R1()) return false;
        if (!r_double()) return false;
        if (!base.slice_del()) return false;
        return r_undouble();
    };

    /** @return {boolean} */
    function r_plural() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_7);
        if (among_var == 0) return false;
        base.bra = base.cursor;
        if (!r_R1()) return false;
        switch (among_var) {
            case 1:
                if (!base.slice_from("a")) return false;
                break;
            case 2:
                if (!base.slice_from("e")) return false;
                break;
            case 3:
                if (!base.slice_del()) return false;
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_owned() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_8);
        if (among_var == 0) return false;
        base.bra = base.cursor;
        if (!r_R1()) return false;
        switch (among_var) {
            case 1:
                if (!base.slice_del()) return false;
                break;
            case 2:
                if (!base.slice_from("e")) return false;
                break;
            case 3:
                if (!base.slice_from("a")) return false;
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_sing_owner() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_9);
        if (among_var == 0) return false;
        base.bra = base.cursor;
        if (!r_R1()) return false;
        switch (among_var) {
            case 1:
                if (!base.slice_del()) return false;
                break;
            case 2:
                if (!base.slice_from("a")) return false;
                break;
            case 3:
                if (!base.slice_from("e")) return false;
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_plur_owner() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_10);
        if (among_var == 0) return false;
        base.bra = base.cursor;
        if (!r_R1()) return false;
        switch (among_var) {
            case 1:
                if (!base.slice_del()) return false;
                break;
            case 2:
                if (!base.slice_from("a")) return false;
                break;
            case 3:
                if (!base.slice_from("e")) return false;
                break;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        /** @const */ var /** number */ v_1 = base.cursor;
        r_mark_regions();
        base.cursor = v_1;
        base.limit_backward = base.cursor; base.cursor = base.limit;
        /** @const */ var /** number */ v_2 = base.limit - base.cursor;
        r_instrum();
        base.cursor = base.limit - v_2;
        /** @const */ var /** number */ v_3 = base.limit - base.cursor;
        r_case();
        base.cursor = base.limit - v_3;
        /** @const */ var /** number */ v_4 = base.limit - base.cursor;
        r_case_special();
        base.cursor = base.limit - v_4;
        /** @const */ var /** number */ v_5 = base.limit - base.cursor;
        r_case_other();
        base.cursor = base.limit - v_5;
        /** @const */ var /** number */ v_6 = base.limit - base.cursor;
        r_factive();
        base.cursor = base.limit - v_6;
        /** @const */ var /** number */ v_7 = base.limit - base.cursor;
        r_owned();
        base.cursor = base.limit - v_7;
        /** @const */ var /** number */ v_8 = base.limit - base.cursor;
        r_sing_owner();
        base.cursor = base.limit - v_8;
        /** @const */ var /** number */ v_9 = base.limit - base.cursor;
        r_plur_owner();
        base.cursor = base.limit - v_9;
        /** @const */ var /** number */ v_10 = base.limit - base.cursor;
        r_plural();
        base.cursor = base.limit - v_10;
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

window['HungarianStemmer'] = HungarianStemmer;
