// Generated from english.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["arsen", -1, -1],
    ["commun", -1, -1],
    ["emerg", -1, -1],
    ["gener", -1, -1],
    ["inter", -1, -1],
    ["later", -1, -1],
    ["organ", -1, -1],
    ["past", -1, -1],
    ["univers", -1, -1]
];

const a_1 = [
    ["'", -1, 1],
    ["'s'", 0, 1],
    ["'s", -1, 1]
];

const a_2 = [
    ["ied", -1, 2],
    ["s", -1, 3],
    ["ies", 1, 2],
    ["sses", 1, 1],
    ["ss", 1, -1],
    ["us", 1, -1]
];

const a_3 = [
    ["succ", -1, 1],
    ["proc", -1, 1],
    ["exc", -1, 1]
];

const a_4 = [
    ["even", -1, 2],
    ["cann", -1, 2],
    ["inn", -1, 2],
    ["earr", -1, 2],
    ["herr", -1, 2],
    ["out", -1, 2],
    ["y", -1, 1]
];

const a_5 = [
    ["", -1, -1],
    ["ed", 0, 2],
    ["eed", 1, 1],
    ["ing", 0, 3],
    ["edly", 0, 2],
    ["eedly", 4, 1],
    ["ingly", 0, 2]
];

const a_6 = [
    ["", -1, 3],
    ["bb", 0, 2],
    ["dd", 0, 2],
    ["ff", 0, 2],
    ["gg", 0, 2],
    ["bl", 0, 1],
    ["mm", 0, 2],
    ["nn", 0, 2],
    ["pp", 0, 2],
    ["rr", 0, 2],
    ["at", 0, 1],
    ["tt", 0, 2],
    ["iz", 0, 1]
];

const a_7 = [
    ["anci", -1, 3],
    ["enci", -1, 2],
    ["ogi", -1, 14],
    ["li", -1, 16],
    ["bli", 3, 12],
    ["abli", 4, 4],
    ["alli", 3, 8],
    ["fulli", 3, 9],
    ["lessli", 3, 15],
    ["ousli", 3, 10],
    ["entli", 3, 5],
    ["aliti", -1, 8],
    ["biliti", -1, 12],
    ["iviti", -1, 11],
    ["tional", -1, 1],
    ["ational", 14, 7],
    ["alism", -1, 8],
    ["ation", -1, 7],
    ["ization", 17, 6],
    ["izer", -1, 6],
    ["ator", -1, 7],
    ["iveness", -1, 11],
    ["fulness", -1, 9],
    ["ousness", -1, 10],
    ["ogist", -1, 13]
];

const a_8 = [
    ["icate", -1, 4],
    ["ative", -1, 6],
    ["alize", -1, 3],
    ["iciti", -1, 4],
    ["ical", -1, 4],
    ["tional", -1, 1],
    ["ational", 5, 2],
    ["ful", -1, 5],
    ["ness", -1, 5]
];

const a_9 = [
    ["ic", -1, 1],
    ["ance", -1, 1],
    ["ence", -1, 1],
    ["able", -1, 1],
    ["ible", -1, 1],
    ["ate", -1, 1],
    ["ive", -1, 1],
    ["ize", -1, 1],
    ["iti", -1, 1],
    ["al", -1, 1],
    ["ism", -1, 1],
    ["ion", -1, 2],
    ["er", -1, 1],
    ["ous", -1, 1],
    ["ant", -1, 1],
    ["ent", -1, 1],
    ["ment", 15, 1],
    ["ement", 16, 1]
];

const a_10 = [
    ["e", -1, 1],
    ["l", -1, 2]
];

const a_11 = [
    ["andes", -1, -1],
    ["atlas", -1, -1],
    ["bias", -1, -1],
    ["cosmos", -1, -1],
    ["early", -1, 6],
    ["gently", -1, 4],
    ["howe", -1, -1],
    ["idly", -1, 3],
    ["news", -1, -1],
    ["only", -1, 7],
    ["singly", -1, 8],
    ["skies", -1, 2],
    ["skis", -1, 1],
    ["sky", -1, -1],
    ["ugly", -1, 5]
];

const /** Array<number> */ g_aeo = [17, 64];

const /** Array<number> */ g_v = [17, 65, 16, 1];

const /** Array<number> */ g_v_WXY = [1, 17, 65, 208, 1];

const /** Array<number> */ g_valid_LI = [55, 141, 2];

import { BaseStemmer } from './base-stemmer.js'

class EnglishStemmer extends BaseStemmer {

    #B_Y_found/** boolean */ = false;
    #I_p2/** number */ = 0;
    #I_p1/** number */ = 0;


    /** @return {boolean} */
    #r_prelude() {
        this.#B_Y_found = false;
        const /** number */ v_1 = this.C;
        // deno-lint-ignore no-unused-labels
        lab0: {
            this.bra = this.C;
            if (!(this.eq_s("'"))) break lab0;
            this.ket = this.C;
            this.slice_del();
        }
        this.C = v_1;
        const /** number */ v_2 = this.C;
        // deno-lint-ignore no-unused-labels
        lab1: {
            this.bra = this.C;
            if (!(this.eq_s("y"))) break lab1;
            this.ket = this.C;
            this.slice_from("Y");
            this.#B_Y_found = true;
        }
        this.C = v_2;
        const /** number */ v_3 = this.C;
        // deno-lint-ignore no-unused-labels
        lab2: {
            while (true) {
                const /** number */ v_4 = this.C;
                // deno-lint-ignore no-unused-labels
                lab3: {
                    // deno-lint-ignore no-unused-labels
                    golab4: while (true)
                    {
                        const /** number */ v_5 = this.C;
                        // deno-lint-ignore no-unused-labels
                        lab5: {
                            if (!(this.in_grouping(g_v, 97, 121))) break lab5;
                            this.bra = this.C;
                            if (!(this.eq_s("y"))) break lab5;
                            this.ket = this.C;
                            this.C = v_5;
                            break golab4;
                        }
                        this.C = v_5;
                        if (this.C >= this.limit) break lab3;
                        this.C++;
                    }
                    this.slice_from("Y");
                    this.#B_Y_found = true;
                    continue;
                }
                this.C = v_4;
                break;
            }
        }
        this.C = v_3;
        return true;
    }

    /** @return {boolean} */
    #r_mark_regions() {
        this.#I_p1 = this.limit;
        this.#I_p2 = this.limit;
        const /** number */ v_1 = this.C;
        // deno-lint-ignore no-unused-labels
        lab0: {
            // deno-lint-ignore no-unused-labels
            lab1: {
                const /** number */ v_2 = this.C;
                // deno-lint-ignore no-unused-labels
                lab2: {
                    if (this.find_among(a_0) === 0) break lab2;
                    break lab1;
                }
                this.C = v_2;
                if (!this.go_out_grouping(g_v, 97, 121)) break lab0;
                this.C++;
                if (!this.go_in_grouping(g_v, 97, 121)) break lab0;
                this.C++;
            }
            this.#I_p1 = this.C;
            if (!this.go_out_grouping(g_v, 97, 121)) break lab0;
            this.C++;
            if (!this.go_in_grouping(g_v, 97, 121)) break lab0;
            this.C++;
            this.#I_p2 = this.C;
        }
        this.C = v_1;
        return true;
    }

    /** @return {boolean} */
    #r_shortv() {
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_1 = this.limit - this.C;
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!(this.out_grouping_b(g_v_WXY, 89, 121))) break lab1;
                if (!(this.in_grouping_b(g_v, 97, 121))) break lab1;
                if (!(this.out_grouping_b(g_v, 97, 121))) break lab1;
                break lab0;
            }
            this.C = this.limit - v_1;
            // deno-lint-ignore no-unused-labels
            lab2: {
                if (!(this.out_grouping_b(g_v, 97, 121))) break lab2;
                if (!(this.in_grouping_b(g_v, 97, 121))) break lab2;
                if (this.C > this.limit_backward) break lab2;
                break lab0;
            }
            this.C = this.limit - v_1;
            if (!(this.eq_s_b("past"))) return false;
        }
        return true;
    }

    /** @return {boolean} */
    #r_R1() {
        return this.#I_p1 <= this.C;
    }

    /** @return {boolean} */
    #r_R2() {
        return this.#I_p2 <= this.C;
    }

    /** @return {boolean} */
    #r_Step_1a() {
        let /** number */ a;
        const /** number */ v_1 = this.limit - this.C;
        // deno-lint-ignore no-unused-labels
        lab0: {
            this.ket = this.C;
            if (this.find_among_b(a_1) === 0) {
                this.C = this.limit - v_1;
                break lab0;
            }
            this.bra = this.C;
            this.slice_del();
        }
        this.ket = this.C;
        a = this.find_among_b(a_2);
        if (a === 0) return false;
        this.bra = this.C;
        switch (a) {
            case 1: {
                this.slice_from("ss");
                break;
            }
            case 2: {
                // deno-lint-ignore no-unused-labels
                lab1: {
                    const /** number */ v_2 = this.limit - this.C;
                    // deno-lint-ignore no-unused-labels
                    lab2: {
                        {
                            const /** number */ c = this.C - 2;
                            if (c < this.limit_backward) break lab2;
                            this.C = c;
                        }
                        this.slice_from("i");
                        break lab1;
                    }
                    this.C = this.limit - v_2;
                    this.slice_from("ie");
                }
                break;
            }
            case 3: {
                if (this.C <= this.limit_backward) return false;
                this.C--;
                if (!this.go_out_grouping_b(g_v, 97, 121)) return false;
                this.C--;
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_1b() {
        let /** number */ a;
        this.ket = this.C;
        a = this.find_among_b(a_5);
        this.bra = this.C;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_1 = this.limit - this.C;
            // deno-lint-ignore no-unused-labels
            lab1: {
                switch (a) {
                    case 1: {
                        const /** number */ v_2 = this.limit - this.C;
                        // deno-lint-ignore no-unused-labels
                        lab2: {
                            if (!this.#r_R1()) break lab2;
                            // deno-lint-ignore no-unused-labels
                            lab3: {
                                const /** number */ v_3 = this.limit - this.C;
                                // deno-lint-ignore no-unused-labels
                                lab4: {
                                    if (this.find_among_b(a_3) === 0) break lab4;
                                    if (this.C > this.limit_backward) break lab4;
                                    break lab3;
                                }
                                this.C = this.limit - v_3;
                                this.slice_from("ee");
                            }
                        }
                        this.C = this.limit - v_2;
                        break;
                    }
                    case 2: {
                        break lab1;
                    }
                    case 3: {
                        a = this.find_among_b(a_4);
                        if (a === 0) break lab1;
                        switch (a) {
                            case 1: {
                                const /** number */ v_4 = this.limit - this.C;
                                if (!(this.out_grouping_b(g_v, 97, 121))) break lab1;
                                if (this.C > this.limit_backward) break lab1;
                                this.C = this.limit - v_4;
                                this.bra = this.C;
                                this.slice_from("ie");
                                break;
                            }
                            case 2: {
                                if (this.C > this.limit_backward) break lab1;
                                break;
                            }
                        }
                        break;
                    }
                }
                break lab0;
            }
            this.C = this.limit - v_1;
            const /** number */ v_5 = this.limit - this.C;
            if (!this.go_out_grouping_b(g_v, 97, 121)) return false;
            this.C--;
            this.C = this.limit - v_5;
            this.slice_del();
            this.ket = this.C;
            this.bra = this.C;
            const /** number */ v_6 = this.limit - this.C;
            a = this.find_among_b(a_6);
            switch (a) {
                case 1: {
                    this.slice_from("e");
                    return false;
                }
                case 2: {
                    {
                        const /** number */ v_7 = this.limit - this.C;
                        // deno-lint-ignore no-unused-labels
                        lab5: {
                            if (!(this.in_grouping_b(g_aeo, 97, 111))) break lab5;
                            if (this.C > this.limit_backward) break lab5;
                            return false;
                        }
                        this.C = this.limit - v_7;
                    }
                    break;
                }
                case 3: {
                    if (this.C !== this.#I_p1) return false;
                    const /** number */ v_8 = this.limit - this.C;
                    if (!this.#r_shortv()) return false;
                    this.C = this.limit - v_8;
                    this.slice_from("e");
                    return false;
                }
            }
            this.C = this.limit - v_6;
            this.ket = this.C;
            if (this.C <= this.limit_backward) return false;
            this.C--;
            this.bra = this.C;
            this.slice_del();
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_1c() {
        this.ket = this.C;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_1 = this.limit - this.C;
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!(this.eq_s_b("y"))) break lab1;
                break lab0;
            }
            this.C = this.limit - v_1;
            if (!(this.eq_s_b("Y"))) return false;
        }
        this.bra = this.C;
        if (!(this.out_grouping_b(g_v, 97, 121))) return false;
        // deno-lint-ignore no-unused-labels
        lab2: {
            if (this.C > this.limit_backward) break lab2;
            return false;
        }
        this.slice_from("i");
        return true;
    }

    /** @return {boolean} */
    #r_Step_2() {
        let /** number */ a;
        this.ket = this.C;
        a = this.find_among_b(a_7);
        if (a === 0) return false;
        this.bra = this.C;
        if (!this.#r_R1()) return false;
        switch (a) {
            case 1: {
                this.slice_from("tion");
                break;
            }
            case 2: {
                this.slice_from("ence");
                break;
            }
            case 3: {
                this.slice_from("ance");
                break;
            }
            case 4: {
                this.slice_from("able");
                break;
            }
            case 5: {
                this.slice_from("ent");
                break;
            }
            case 6: {
                this.slice_from("ize");
                break;
            }
            case 7: {
                this.slice_from("ate");
                break;
            }
            case 8: {
                this.slice_from("al");
                break;
            }
            case 9: {
                this.slice_from("ful");
                break;
            }
            case 10: {
                this.slice_from("ous");
                break;
            }
            case 11: {
                this.slice_from("ive");
                break;
            }
            case 12: {
                this.slice_from("ble");
                break;
            }
            case 13: {
                this.slice_from("og");
                break;
            }
            case 14: {
                if (!(this.eq_s_b("l"))) return false;
                this.slice_from("og");
                break;
            }
            case 15: {
                this.slice_from("less");
                break;
            }
            case 16: {
                if (!(this.in_grouping_b(g_valid_LI, 99, 116))) return false;
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_3() {
        let /** number */ a;
        this.ket = this.C;
        a = this.find_among_b(a_8);
        if (a === 0) return false;
        this.bra = this.C;
        if (!this.#r_R1()) return false;
        switch (a) {
            case 1: {
                this.slice_from("tion");
                break;
            }
            case 2: {
                this.slice_from("ate");
                break;
            }
            case 3: {
                this.slice_from("al");
                break;
            }
            case 4: {
                this.slice_from("ic");
                break;
            }
            case 5: {
                this.slice_del();
                break;
            }
            case 6: {
                if (!this.#r_R2()) return false;
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_4() {
        let /** number */ a;
        this.ket = this.C;
        a = this.find_among_b(a_9);
        if (a === 0) return false;
        this.bra = this.C;
        if (!this.#r_R2()) return false;
        switch (a) {
            case 1: {
                this.slice_del();
                break;
            }
            case 2: {
                // deno-lint-ignore no-unused-labels
                lab0: {
                    const /** number */ v_1 = this.limit - this.C;
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        if (!(this.eq_s_b("s"))) break lab1;
                        break lab0;
                    }
                    this.C = this.limit - v_1;
                    if (!(this.eq_s_b("t"))) return false;
                }
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_5() {
        let /** number */ a;
        this.ket = this.C;
        a = this.find_among_b(a_10);
        if (a === 0) return false;
        this.bra = this.C;
        switch (a) {
            case 1: {
                // deno-lint-ignore no-unused-labels
                lab0: {
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        if (!this.#r_R2()) break lab1;
                        break lab0;
                    }
                    if (!this.#r_R1()) return false;
                    {
                        const /** number */ v_1 = this.limit - this.C;
                        // deno-lint-ignore no-unused-labels
                        lab2: {
                            if (!this.#r_shortv()) break lab2;
                            return false;
                        }
                        this.C = this.limit - v_1;
                    }
                }
                this.slice_del();
                break;
            }
            case 2: {
                if (!this.#r_R2()) return false;
                if (!(this.eq_s_b("l"))) return false;
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_exception1() {
        let /** number */ a;
        this.bra = this.C;
        a = this.find_among(a_11);
        if (a === 0) return false;
        this.ket = this.C;
        if (this.C < this.limit) return false;
        switch (a) {
            case 1: {
                this.slice_from("ski");
                break;
            }
            case 2: {
                this.slice_from("sky");
                break;
            }
            case 3: {
                this.slice_from("idl");
                break;
            }
            case 4: {
                this.slice_from("gentl");
                break;
            }
            case 5: {
                this.slice_from("ugli");
                break;
            }
            case 6: {
                this.slice_from("earli");
                break;
            }
            case 7: {
                this.slice_from("onli");
                break;
            }
            case 8: {
                this.slice_from("singl");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_postlude() {
        if (!this.#B_Y_found) return false;
        while (true) {
            const /** number */ v_1 = this.C;
            // deno-lint-ignore no-unused-labels
            lab0: {
                // deno-lint-ignore no-unused-labels
                golab1: while (true)
                {
                    const /** number */ v_2 = this.C;
                    // deno-lint-ignore no-unused-labels
                    lab2: {
                        this.bra = this.C;
                        if (!(this.eq_s("Y"))) break lab2;
                        this.ket = this.C;
                        this.C = v_2;
                        break golab1;
                    }
                    this.C = v_2;
                    if (this.C >= this.limit) break lab0;
                    this.C++;
                }
                this.slice_from("y");
                continue;
            }
            this.C = v_1;
            break;
        }
        return true;
    }

    /** @return {boolean} */
    #stem() {
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_1 = this.C;
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!this.#r_exception1()) break lab1;
                break lab0;
            }
            this.C = v_1;
            // deno-lint-ignore no-unused-labels
            lab2: {
                {
                    const /** number */ v_2 = this.C;
                    // deno-lint-ignore no-unused-labels
                    lab3: {
                        {
                            const /** number */ c = this.C + 3;
                            if (c > this.limit) break lab3;
                            this.C = c;
                        }
                        break lab2;
                    }
                    this.C = v_2;
                }
                break lab0;
            }
            this.C = v_1;
            this.#r_prelude();
            this.#r_mark_regions();
            this.limit_backward = this.C; this.C = this.limit;
            const /** number */ v_3 = this.limit - this.C;
            this.#r_Step_1a();
            this.C = this.limit - v_3;
            const /** number */ v_4 = this.limit - this.C;
            this.#r_Step_1b();
            this.C = this.limit - v_4;
            const /** number */ v_5 = this.limit - this.C;
            this.#r_Step_1c();
            this.C = this.limit - v_5;
            const /** number */ v_6 = this.limit - this.C;
            this.#r_Step_2();
            this.C = this.limit - v_6;
            const /** number */ v_7 = this.limit - this.C;
            this.#r_Step_3();
            this.C = this.limit - v_7;
            const /** number */ v_8 = this.limit - this.C;
            this.#r_Step_4();
            this.C = this.limit - v_8;
            const /** number */ v_9 = this.limit - this.C;
            this.#r_Step_5();
            this.C = this.limit - v_9;
            this.C = this.limit_backward;
            const /** number */ v_10 = this.C;
            this.#r_postlude();
            this.C = v_10;
        }
        return true;
    }

    /**@return{string}*/
    stem(/**string*/input) {
        this.setCurrent(input);
        this.#stem();
        return this.getCurrent();
    }

    stemWord = this.stem;
}

export { EnglishStemmer };
