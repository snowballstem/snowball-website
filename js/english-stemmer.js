// Generated from english.sbl by Snowball 3.1.1 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["arsen", -1],
    ["commun", -1],
    ["emerg", -1],
    ["gener", -1],
    ["inter", -1],
    ["later", -1],
    ["organ", -1],
    ["past", -1],
    ["univers", -1]
];

const a_1 = [
    ["'", 1],
    ["'s'", 1, 1],
    ["'s", 1]
];

const a_2 = [
    ["ied", 2],
    ["s", 3],
    ["ies", 2, 1],
    ["sses", 1, 2],
    ["ss", -1, 3],
    ["us", -1, 4]
];

const a_3 = [
    ["succ", 1],
    ["proc", 1],
    ["exc", 1]
];

const a_4 = [
    ["even", 2],
    ["cann", 2],
    ["inn", 2],
    ["earr", 2],
    ["herr", 2],
    ["out", 2],
    ["y", 1]
];

const a_5 = [
    ["", -1],
    ["ed", 2, 1],
    ["eed", 1, 1],
    ["ing", 3, 3],
    ["edly", 2, 4],
    ["eedly", 1, 1],
    ["ingly", 2, 6]
];

const a_6 = [
    ["", 3],
    ["bb", 2, 1],
    ["dd", 2, 2],
    ["ff", 2, 3],
    ["gg", 2, 4],
    ["bl", 1, 5],
    ["mm", 2, 6],
    ["nn", 2, 7],
    ["pp", 2, 8],
    ["rr", 2, 9],
    ["at", 1, 10],
    ["tt", 2, 11],
    ["iz", 1, 12]
];

const a_7 = [
    ["anci", 3],
    ["enci", 2],
    ["ogi", 14],
    ["li", 16],
    ["bli", 12, 1],
    ["abli", 4, 1],
    ["alli", 8, 3],
    ["fulli", 9, 4],
    ["lessli", 15, 5],
    ["ousli", 10, 6],
    ["entli", 5, 7],
    ["aliti", 8],
    ["biliti", 12],
    ["iviti", 11],
    ["tional", 1],
    ["ational", 7, 1],
    ["alism", 8],
    ["ation", 7],
    ["ization", 6, 1],
    ["izer", 6],
    ["ator", 7],
    ["iveness", 11],
    ["fulness", 9],
    ["ousness", 10],
    ["ogist", 13]
];

const a_8 = [
    ["icate", 4],
    ["ative", 6],
    ["alize", 3],
    ["iciti", 4],
    ["ical", 4],
    ["tional", 1],
    ["ational", 2, 1],
    ["ful", 5],
    ["ness", 5]
];

const a_9 = [
    ["ic", 1],
    ["ance", 1],
    ["ence", 1],
    ["able", 1],
    ["ible", 1],
    ["ate", 1],
    ["ive", 1],
    ["ize", 1],
    ["iti", 1],
    ["al", 1],
    ["ism", 1],
    ["ion", 2],
    ["er", 1],
    ["ous", 1],
    ["ant", 1],
    ["ent", 1],
    ["ment", 1, 1],
    ["ement", 1, 1]
];

const a_10 = [
    ["e", 1],
    ["l", 2]
];

const a_11 = [
    ["andes", -1],
    ["atlas", -1],
    ["bias", -1],
    ["cosmos", -1],
    ["early", 6],
    ["gently", 4],
    ["howe", -1],
    ["idly", 3],
    ["news", -1],
    ["only", 7],
    ["singly", 8],
    ["skies", 2],
    ["skis", 1],
    ["sky", -1],
    ["ugly", 5]
];

const /** Array<string> */ as_11 = ["ski", "sky", "idl", "gentl", "ugli", "earli", "onli", "singl"];

const /** Array<number> */ g_aeo = [17, 64];

const /** Array<number> */ g_v = [17, 65, 16, 1];

const /** Array<number> */ g_v_WXY = [1, 17, 65, 208, 1];

const /** Array<number> */ g_valid_LI = [55, 141, 2];

import B from './base-stemmer.js'

export default class extends B {

    #B_Y_found/** boolean */ = false;
    #I_p2/** number */ = 0;
    #I_p1/** number */ = 0;


    /** @return {boolean} */
    #r_prelude() {
        this.#B_Y_found = false;
        const /** number */ v_1 = this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            this.bra = this.c;
            if (!(this.eq_s("'"))) break lab0;
            this.ket = this.c;
            this.slice_del();
        }
        this.c = v_1;
        const /** number */ v_2 = this.c;
        // deno-lint-ignore no-unused-labels
        lab1: {
            this.bra = this.c;
            if (!(this.eq_s("y"))) break lab1;
            this.ket = this.c;
            this.slice_from("Y");
            this.#B_Y_found = true;
        }
        this.c = v_2;
        const /** number */ v_3 = this.c;
        // deno-lint-ignore no-unused-labels
        lab2: {
            while (true) {
                const /** number */ v_4 = this.c;
                // deno-lint-ignore no-unused-labels
                lab3: {
                    // deno-lint-ignore no-unused-labels
                    golab4: while (true)
                    {
                        const /** number */ v_5 = this.c;
                        // deno-lint-ignore no-unused-labels
                        lab5: {
                            if (!(this.in_grouping(g_v, 97, 121))) break lab5;
                            this.bra = this.c;
                            if (!(this.eq_s("y"))) break lab5;
                            this.ket = this.c;
                            this.c = v_5;
                            break golab4;
                        }
                        this.c = v_5;
                        if (this.c >= this.limit) break lab3;
                        this.c++;
                    }
                    this.slice_from("Y");
                    this.#B_Y_found = true;
                    continue;
                }
                this.c = v_4;
                break;
            }
        }
        this.c = v_3;
        return true;
    }

    /** @return {boolean} */
    #r_mark_regions() {
        this.#I_p1 = this.limit;
        this.#I_p2 = this.limit;
        const /** number */ v_1 = this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            // deno-lint-ignore no-unused-labels
            lab1: {
                const /** number */ v_2 = this.c;
                // deno-lint-ignore no-unused-labels
                lab2: {
                    if (this.find_among(a_0) === 0) break lab2;
                    break lab1;
                }
                this.c = v_2;
                if (!this.go_out_grouping(g_v, 97, 121)) break lab0;
                this.c++;
                if (!this.go_in_grouping(g_v, 97, 121)) break lab0;
                this.c++;
            }
            this.#I_p1 = this.c;
            if (!this.go_out_grouping(g_v, 97, 121)) break lab0;
            this.c++;
            if (!this.go_in_grouping(g_v, 97, 121)) break lab0;
            this.c++;
            this.#I_p2 = this.c;
        }
        this.c = v_1;
        return true;
    }

    /** @return {boolean} */
    #r_shortv() {
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_1 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!(this.out_grouping_b(g_v_WXY, 89, 121))) break lab1;
                if (!(this.in_grouping_b(g_v, 97, 121))) break lab1;
                if (!(this.out_grouping_b(g_v, 97, 121))) break lab1;
                break lab0;
            }
            this.c = this.limit - v_1;
            // deno-lint-ignore no-unused-labels
            lab2: {
                if (!(this.out_grouping_b(g_v, 97, 121))) break lab2;
                if (!(this.in_grouping_b(g_v, 97, 121))) break lab2;
                if (this.c > this.limit_backward) break lab2;
                break lab0;
            }
            this.c = this.limit - v_1;
            if (!(this.eq_s_b("past"))) return false;
        }
        return true;
    }

    /** @return {boolean} */
    #r_R1() {
        return this.#I_p1 <= this.c;
    }

    /** @return {boolean} */
    #r_R2() {
        return this.#I_p2 <= this.c;
    }

    /** @return {boolean} */
    #r_Step_1a() {
        let /** number */ a;
        const /** number */ v_1 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            this.ket = this.c;
            if (this.find_among_b(a_1) === 0) {
                this.c = this.limit - v_1;
                break lab0;
            }
            this.bra = this.c;
            this.slice_del();
        }
        this.ket = this.c;
        a = this.find_among_b(a_2);
        if (a === 0) return false;
        this.bra = this.c;
        switch (a) {
            case 1: {
                this.slice_from("ss");
                break;
            }
            case 2: {
                // deno-lint-ignore no-unused-labels
                lab1: {
                    const /** number */ v_2 = this.limit - this.c;
                    // deno-lint-ignore no-unused-labels
                    lab2: {
                        if (this.c - 2 < this.limit_backward) break lab2;
                        this.c -= 2;
                        this.slice_from("i");
                        break lab1;
                    }
                    this.c = this.limit - v_2;
                    this.slice_from("ie");
                }
                break;
            }
            case 3: {
                if (this.c <= this.limit_backward) return false;
                this.c--;
                if (!this.go_out_grouping_b(g_v, 97, 121)) return false;
                this.c--;
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_1b() {
        let /** number */ a;
        this.ket = this.c;
        a = this.find_among_b(a_5);
        this.bra = this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_1 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab1: {
                switch (a) {
                    case 1: {
                        const /** number */ v_2 = this.limit - this.c;
                        // deno-lint-ignore no-unused-labels
                        lab2: {
                            if (!this.#r_R1()) break lab2;
                            // deno-lint-ignore no-unused-labels
                            lab3: {
                                const /** number */ v_3 = this.limit - this.c;
                                // deno-lint-ignore no-unused-labels
                                lab4: {
                                    if (this.find_among_b(a_3) === 0) break lab4;
                                    if (this.c > this.limit_backward) break lab4;
                                    break lab3;
                                }
                                this.c = this.limit - v_3;
                                this.slice_from("ee");
                            }
                        }
                        this.c = this.limit - v_2;
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
                                const /** number */ v_4 = this.limit - this.c;
                                if (!(this.out_grouping_b(g_v, 97, 121))) break lab1;
                                if (this.c > this.limit_backward) break lab1;
                                this.c = this.limit - v_4;
                                this.bra = this.c;
                                this.slice_from("ie");
                                break;
                            }
                            case 2: {
                                if (this.c > this.limit_backward) break lab1;
                                break;
                            }
                        }
                        break;
                    }
                }
                break lab0;
            }
            this.c = this.limit - v_1;
            const /** number */ v_5 = this.limit - this.c;
            if (!this.go_out_grouping_b(g_v, 97, 121)) return false;
            this.c--;
            this.c = this.limit - v_5;
            this.slice_del();
            this.ket = this.c;
            this.bra = this.c;
            const /** number */ v_6 = this.limit - this.c;
            a = this.find_among_b(a_6);
            switch (a) {
                case 1: {
                    this.slice_from("e");
                    return false;
                }
                case 2: {
                    {
                        const /** number */ v_7 = this.limit - this.c;
                        // deno-lint-ignore no-unused-labels
                        lab5: {
                            if (!(this.in_grouping_b(g_aeo, 97, 111))) break lab5;
                            if (this.c > this.limit_backward) break lab5;
                            return false;
                        }
                        this.c = this.limit - v_7;
                    }
                    break;
                }
                case 3: {
                    if (this.c !== this.#I_p1) return false;
                    const /** number */ v_8 = this.limit - this.c;
                    if (!this.#r_shortv()) return false;
                    this.c = this.limit - v_8;
                    this.slice_from("e");
                    return false;
                }
            }
            this.c = this.limit - v_6;
            this.ket = this.c;
            if (this.c <= this.limit_backward) return false;
            this.c--;
            this.bra = this.c;
            this.slice_del();
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_1c() {
        this.ket = this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!(this.eq_s_b("y"))) break lab1;
                break lab0;
            }
            if (!(this.eq_s_b("Y"))) return false;
        }
        this.bra = this.c;
        if (!(this.out_grouping_b(g_v, 97, 121))) return false;
        if (this.c <= this.limit_backward) return false;
        this.slice_from("i");
        return true;
    }

    /** @return {boolean} */
    #r_Step_2() {
        let /** number */ a;
        this.ket = this.c;
        a = this.find_among_b(a_7);
        if (a === 0) return false;
        this.bra = this.c;
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
        this.ket = this.c;
        a = this.find_among_b(a_8);
        if (a === 0) return false;
        this.bra = this.c;
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
        this.ket = this.c;
        a = this.find_among_b(a_9);
        if (a === 0) return false;
        this.bra = this.c;
        if (!this.#r_R2()) return false;
        switch (a) {
            case 1: {
                this.slice_del();
                break;
            }
            case 2: {
                // deno-lint-ignore no-unused-labels
                lab0: {
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        if (!(this.eq_s_b("s"))) break lab1;
                        break lab0;
                    }
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
        this.ket = this.c;
        a = this.find_among_b(a_10);
        if (a === 0) return false;
        this.bra = this.c;
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
                        const /** number */ v_1 = this.limit - this.c;
                        // deno-lint-ignore no-unused-labels
                        lab2: {
                            if (!this.#r_shortv()) break lab2;
                            return false;
                        }
                        this.c = this.limit - v_1;
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
        this.bra = this.c;
        a = this.find_among(a_11);
        if (a === 0) return false;
        this.ket = this.c;
        if (this.c < this.limit) return false;
        if (a > 0) {
            this.slice_from(as_11[a - 1]);
        }
        return true;
    }

    /** @return {boolean} */
    #r_postlude() {
        if (!this.#B_Y_found) return false;
        while (true) {
            const /** number */ v_1 = this.c;
            // deno-lint-ignore no-unused-labels
            lab0: {
                // deno-lint-ignore no-unused-labels
                golab1: while (true)
                {
                    const /** number */ v_2 = this.c;
                    // deno-lint-ignore no-unused-labels
                    lab2: {
                        this.bra = this.c;
                        if (!(this.eq_s("Y"))) break lab2;
                        this.ket = this.c;
                        this.c = v_2;
                        break golab1;
                    }
                    this.c = v_2;
                    if (this.c >= this.limit) break lab0;
                    this.c++;
                }
                this.slice_from("y");
                continue;
            }
            this.c = v_1;
            break;
        }
        return true;
    }

    /** @return {boolean} */
    #stem() {
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_1 = this.c;
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!this.#r_exception1()) break lab1;
                break lab0;
            }
            this.c = v_1;
            // deno-lint-ignore no-unused-labels
            lab2: {
                // deno-lint-ignore no-unused-labels
                lab3: {
                    if (this.c + 3 > this.limit) break lab3;
                    this.c += 3;
                    break lab2;
                }
                break lab0;
            }
            this.c = v_1;
            this.#r_prelude();
            this.#r_mark_regions();
            this.limit_backward = this.c; this.c = this.limit;
            const /** number */ v_2 = this.limit - this.c;
            this.#r_Step_1a();
            this.c = this.limit - v_2;
            const /** number */ v_3 = this.limit - this.c;
            this.#r_Step_1b();
            this.c = this.limit - v_3;
            const /** number */ v_4 = this.limit - this.c;
            this.#r_Step_1c();
            this.c = this.limit - v_4;
            const /** number */ v_5 = this.limit - this.c;
            this.#r_Step_2();
            this.c = this.limit - v_5;
            const /** number */ v_6 = this.limit - this.c;
            this.#r_Step_3();
            this.c = this.limit - v_6;
            const /** number */ v_7 = this.limit - this.c;
            this.#r_Step_4();
            this.c = this.limit - v_7;
            const /** number */ v_8 = this.limit - this.c;
            this.#r_Step_5();
            this.c = this.limit - v_8;
            this.c = this.limit_backward;
            const /** number */ v_9 = this.c;
            this.#r_postlude();
            this.c = v_9;
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

