// Generated from danish.sbl by Snowball 3.0.0 - https://snowballstem.org/

/**@constructor*/
var DanishStemmer = function() {
    var base = new BaseStemmer();

    /** @const */ var a_0 = [
        ["hed", -1, 1],
        ["ethed", 0, 1],
        ["ered", -1, 1],
        ["e", -1, 1],
        ["erede", 3, 1],
        ["ende", 3, 1],
        ["erende", 5, 1],
        ["ene", 3, 1],
        ["erne", 3, 1],
        ["ere", 3, 1],
        ["en", -1, 1],
        ["heden", 10, 1],
        ["eren", 10, 1],
        ["er", -1, 1],
        ["heder", 13, 1],
        ["erer", 13, 1],
        ["s", -1, 2],
        ["heds", 16, 1],
        ["es", 16, 1],
        ["endes", 18, 1],
        ["erendes", 19, 1],
        ["enes", 18, 1],
        ["ernes", 18, 1],
        ["eres", 18, 1],
        ["ens", 16, 1],
        ["hedens", 24, 1],
        ["erens", 24, 1],
        ["ers", 16, 1],
        ["ets", 16, 1],
        ["erets", 28, 1],
        ["et", -1, 1],
        ["eret", 30, 1]
    ];

    /** @const */ var a_1 = [
        ["gd", -1, -1],
        ["dt", -1, -1],
        ["gt", -1, -1],
        ["kt", -1, -1]
    ];

    /** @const */ var a_2 = [
        ["ig", -1, 1],
        ["lig", 0, 1],
        ["elig", 1, 1],
        ["els", -1, 1],
        ["l\u00F8st", -1, 2]
    ];

    /** @const */ var /** Array<number> */ g_c = [119, 223, 119, 1];

    /** @const */ var /** Array<number> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128];

    /** @const */ var /** Array<number> */ g_s_ending = [239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16];

    var /** number */ I_x = 0;
    var /** number */ I_p1 = 0;
    var /** string */ S_ch = '';


    /** @return {boolean} */
    function r_mark_regions() {
        I_p1 = base.limit;
        /** @const */ var /** number */ v_1 = base.cursor;
        {
            /** @const */ var /** number */ c1 = base.cursor + 3;
            if (c1 > base.limit) return false;
            base.cursor = c1;
        }
        I_x = base.cursor;
        base.cursor = v_1;
        if (!base.go_out_grouping(g_v, 97, 248)) return false;
        base.cursor++;
        if (!base.go_in_grouping(g_v, 97, 248)) return false;
        base.cursor++;
        I_p1 = base.cursor;
        lab0: {
            if (I_p1 >= I_x) break lab0;
            I_p1 = I_x;
        }
        return true;
    };

    /** @return {boolean} */
    function r_main_suffix() {
        var /** number */ among_var;
        if (base.cursor < I_p1) return false;
        /** @const */ var /** number */ v_1 = base.limit_backward;
        base.limit_backward = I_p1;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_0);
        if (among_var == 0) {
            base.limit_backward = v_1;
            return false;
        }
        base.bra = base.cursor;
        base.limit_backward = v_1;
        switch (among_var) {
            case 1:
                if (!base.slice_del()) return false;
                break;
            case 2:
                if (!(base.in_grouping_b(g_s_ending, 97, 229))) return false;
                if (!base.slice_del()) return false;
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_consonant_pair() {
        /** @const */ var /** number */ v_1 = base.limit - base.cursor;
        if (base.cursor < I_p1) return false;
        /** @const */ var /** number */ v_2 = base.limit_backward;
        base.limit_backward = I_p1;
        base.ket = base.cursor;
        if (base.find_among_b(a_1) == 0) {
            base.limit_backward = v_2;
            return false;
        }
        base.bra = base.cursor;
        base.limit_backward = v_2;
        base.cursor = base.limit - v_1;
        if (base.cursor <= base.limit_backward) return false;
        base.cursor--;
        base.bra = base.cursor;
        if (!base.slice_del()) return false;
        return true;
    };

    /** @return {boolean} */
    function r_other_suffix() {
        var /** number */ among_var;
        /** @const */ var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            base.ket = base.cursor;
            if (!(base.eq_s_b("st"))) break lab0;
            base.bra = base.cursor;
            if (!(base.eq_s_b("ig"))) break lab0;
            if (!base.slice_del()) return false;
        }
        base.cursor = base.limit - v_1;
        if (base.cursor < I_p1) return false;
        /** @const */ var /** number */ v_2 = base.limit_backward;
        base.limit_backward = I_p1;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_2);
        if (among_var == 0) {
            base.limit_backward = v_2;
            return false;
        }
        base.bra = base.cursor;
        base.limit_backward = v_2;
        switch (among_var) {
            case 1:
                if (!base.slice_del()) return false;
                /** @const */ var /** number */ v_3 = base.limit - base.cursor;
                r_consonant_pair();
                base.cursor = base.limit - v_3;
                break;
            case 2:
                if (!base.slice_from("l\u00F8s")) return false;
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_undouble() {
        if (base.cursor < I_p1) return false;
        /** @const */ var /** number */ v_1 = base.limit_backward;
        base.limit_backward = I_p1;
        base.ket = base.cursor;
        if (!(base.in_grouping_b(g_c, 98, 122))) {
            base.limit_backward = v_1;
            return false;
        }
        base.bra = base.cursor;
        S_ch = base.slice_to();
        if (S_ch == '') return false;
        base.limit_backward = v_1;
        if (!(base.eq_s_b(S_ch))) return false;
        if (!base.slice_del()) return false;
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        /** @const */ var /** number */ v_1 = base.cursor;
        r_mark_regions();
        base.cursor = v_1;
        base.limit_backward = base.cursor; base.cursor = base.limit;
        /** @const */ var /** number */ v_2 = base.limit - base.cursor;
        r_main_suffix();
        base.cursor = base.limit - v_2;
        /** @const */ var /** number */ v_3 = base.limit - base.cursor;
        r_consonant_pair();
        base.cursor = base.limit - v_3;
        /** @const */ var /** number */ v_4 = base.limit - base.cursor;
        r_other_suffix();
        base.cursor = base.limit - v_4;
        /** @const */ var /** number */ v_5 = base.limit - base.cursor;
        r_undouble();
        base.cursor = base.limit - v_5;
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

window['DanishStemmer'] = DanishStemmer;
