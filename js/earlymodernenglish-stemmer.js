// Generated from earlymodernenglish.sbl by Snowball 3.2.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["", 4],
    ["\u00E6", 1, 1],
    ["\u0153", 2, 2],
    ["\u017F", 3, 3]
];

const a_1 = [
    ["o'er", 1],
    ["t'", 2],
    ["th'", 2]
];

const a_2 = [
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

const a_3 = [
    ["'", 1],
    ["'s'", 1, 1],
    ["'s", 1]
];

const a_4 = [
    ["ied", 2],
    ["lie", 5],
    ["e'er", 4],
    ["s", 3],
    ["ies", 2, 1],
    ["sses", 1, 2],
    ["ss", -1, 3],
    ["us", -1, 4]
];

const a_5 = [
    ["succ", 1],
    ["proc", 1],
    ["exc", 1]
];

const a_6 = [
    ["even", 2],
    ["cann", 2],
    ["inn", 2],
    ["earr", 2],
    ["herr", 2],
    ["out", 2],
    ["y", 1]
];

const a_7 = [
    ["", -1],
    ["'d", 2, 1],
    ["ed", 2, 2],
    ["eed", 1, 1],
    ["ing", 3, 4],
    ["eth", 2, 5],
    ["'t", 2, 6],
    ["'st", 2, 7],
    ["'dst", 2, 8],
    ["edst", 2, 9],
    ["est", 2, 10],
    ["'dly", 2, 11],
    ["edly", 2, 12],
    ["eedly", 1, 1],
    ["ingly", 2, 14]
];

const a_8 = [
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

const a_9 = [
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

const a_10 = [
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

const a_11 = [
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

const a_12 = [
    ["'nd", 3],
    ["e", 1],
    ["'li", 6],
    ["'ri", 5],
    ["l", 2],
    ["'n", 3],
    ["'r", 4],
    ["'rous", 4]
];

const a_13 = [
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

const /**@type {Array<string>}*/ as_13 = ["ski", "sky", "idl", "gentl", "ugli", "earli", "onli", "singl"];

const /**@type {Array<number>}*/ g_aeo = [17, 64];

const /**@type {Array<number>}*/ g_v = [17, 65, 16, 1];

const /**@type {Array<number>}*/ g_v_WXY = [1, 17, 65, 208, 1];

const /**@type {Array<number>}*/ g_valid_LI = [55, 141, 2];

import B from './base-stemmer.js'

export default class extends B {


    /** @return {boolean} */
    #r_shortv() {
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /**@type {number}*/ v_1 = this.limit - this.c;
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
                if (/**@type {boolean}*/(this.c > this.limit_backward)) break lab2;
                break lab0;
            }
            this.c = this.limit - v_1;
            if (!(this.eq_s_b("past"))) return false;
        }
        return true;
    }

    /** @return {boolean} */
    #stem() {
        let /**@type {number}*/ a;
        let /**@type {boolean}*/ B_Y_found;
        let /**@type {number}*/ I_p2;
        let /**@type {number}*/ I_p1;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /**@type {number}*/ v_1 = this.c;
            // deno-lint-ignore no-unused-labels
            lab1: {
                this.bra = this.c;
                a = this.find_among(a_13);
                if (a === 0) break lab1;
                this.ket = this.c;
                if (/**@type {boolean}*/(this.c < this.limit)) break lab1;
                if (a > 0) {
                    this.slice_from(as_13[a - 1]);
                }
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
            // deno-lint-ignore no-unused-labels
            lab4: {
                const /**@type {number}*/ v_2 = this.c;
                // deno-lint-ignore no-unused-labels
                lab5: {
                    while (true) {
                        const /**@type {number}*/ v_3 = this.c;
                        // deno-lint-ignore no-unused-labels
                        lab6: {
                            this.bra = this.c;
                            a = this.find_among(a_0);
                            this.ket = this.c;
                            switch (a) {
                                case 1: {
                                    this.slice_from("ae");
                                    break;
                                }
                                case 2: {
                                    this.slice_from("oe");
                                    break;
                                }
                                case 3: {
                                    this.slice_from("s");
                                    break;
                                }
                                case 4: {
                                    if (this.c >= this.limit) break lab6;
                                    this.c++;
                                    break;
                                }
                            }
                            continue;
                        }
                        this.c = v_3;
                        break;
                    }
                }
                this.c = v_2;
                B_Y_found = false;
                const /**@type {number}*/ v_4 = this.c;
                // deno-lint-ignore no-unused-labels
                lab7: {
                    this.bra = this.c;
                    if (!(this.eq_s("'"))) break lab7;
                    this.ket = this.c;
                    this.slice_del();
                }
                this.c = v_4;
                const /**@type {number}*/ v_5 = this.c;
                // deno-lint-ignore no-unused-labels
                lab8: {
                    this.bra = this.c;
                    if (!(this.eq_s("y"))) break lab8;
                    this.ket = this.c;
                    this.slice_from("Y");
                    B_Y_found = true;
                }
                this.c = v_5;
                const /**@type {number}*/ v_6 = this.c;
                // deno-lint-ignore no-unused-labels
                lab9: {
                    while (true) {
                        const /**@type {number}*/ v_7 = this.c;
                        // deno-lint-ignore no-unused-labels
                        lab10: {
                            // deno-lint-ignore no-unused-labels
                            golab11: while (true)
                            {
                                const /**@type {number}*/ v_8 = this.c;
                                // deno-lint-ignore no-unused-labels
                                lab12: {
                                    if (!(this.in_grouping(g_v, 97, 121))) break lab12;
                                    this.bra = this.c;
                                    if (!(this.eq_s("y"))) break lab12;
                                    this.ket = this.c;
                                    this.c = v_8;
                                    break golab11;
                                }
                                this.c = v_8;
                                if (this.c >= this.limit) break lab10;
                                this.c++;
                            }
                            this.slice_from("Y");
                            B_Y_found = true;
                            continue;
                        }
                        this.c = v_7;
                        break;
                    }
                }
                this.c = v_6;
            }
            const /**@type {number}*/ v_9 = this.c;
            // deno-lint-ignore no-unused-labels
            lab13: {
                this.bra = this.c;
                a = this.find_among(a_1);
                if (a === 0) break lab13;
                this.ket = this.c;
                switch (a) {
                    case 1: {
                        this.slice_from("over");
                        break;
                    }
                    case 2: {
                        if (/**@type {boolean}*/(this.c >= this.limit)) break lab13;
                        this.slice_del();
                        break;
                    }
                }
            }
            this.c = v_9;
            // deno-lint-ignore no-unused-labels
            lab14: {
                I_p1 = this.limit;
                I_p2 = this.limit;
                const /**@type {number}*/ v_10 = this.c;
                // deno-lint-ignore no-unused-labels
                lab15: {
                    // deno-lint-ignore no-unused-labels
                    lab16: {
                        const /**@type {number}*/ v_11 = this.c;
                        // deno-lint-ignore no-unused-labels
                        lab17: {
                            if (this.find_among(a_2) === 0) break lab17;
                            break lab16;
                        }
                        this.c = v_11;
                        if (!this.go_out_grouping(g_v, 97, 121)) break lab15;
                        this.c++;
                        if (!this.go_in_grouping(g_v, 97, 121)) break lab15;
                        this.c++;
                    }
                    I_p1 = this.c;
                    if (!this.go_out_grouping(g_v, 97, 121)) break lab15;
                    this.c++;
                    if (!this.go_in_grouping(g_v, 97, 121)) break lab15;
                    this.c++;
                    I_p2 = this.c;
                }
                this.c = v_10;
            }
            this.limit_backward = this.c; this.c = this.limit;
            const /**@type {number}*/ v_12 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab18: {
                const /**@type {number}*/ v_13 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab19: {
                    this.ket = this.c;
                    if (this.find_among_b(a_3) === 0) {
                        this.c = this.limit - v_13;
                        break lab19;
                    }
                    this.bra = this.c;
                    this.slice_del();
                }
                this.ket = this.c;
                a = this.find_among_b(a_4);
                if (a === 0) break lab18;
                this.bra = this.c;
                switch (a) {
                    case 1: {
                        this.slice_from("ss");
                        break;
                    }
                    case 2: {
                        // deno-lint-ignore no-unused-labels
                        lab20: {
                            const /**@type {number}*/ v_14 = this.limit - this.c;
                            // deno-lint-ignore no-unused-labels
                            lab21: {
                                if (this.c - 2 < this.limit_backward) break lab21;
                                this.c -= 2;
                                this.slice_from("i");
                                break lab20;
                            }
                            this.c = this.limit - v_14;
                            this.slice_from("ie");
                        }
                        break;
                    }
                    case 3: {
                        if (this.c <= this.limit_backward) break lab18;
                        this.c--;
                        if (!this.go_out_grouping_b(g_v, 97, 121)) break lab18;
                        this.c--;
                        this.slice_del();
                        break;
                    }
                    case 4: {
                        this.slice_from("ever");
                        break;
                    }
                    case 5: {
                        if (/**@type {boolean}*/(I_p1 > this.c)) break lab18;
                        this.slice_from("ly");
                        break;
                    }
                }
            }
            this.c = this.limit - v_12;
            const /**@type {number}*/ v_15 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab22: {
                this.ket = this.c;
                a = this.find_among_b(a_7);
                this.bra = this.c;
                // deno-lint-ignore no-unused-labels
                lab23: {
                    const /**@type {number}*/ v_16 = this.limit - this.c;
                    // deno-lint-ignore no-unused-labels
                    lab24: {
                        switch (a) {
                            case 1: {
                                const /**@type {number}*/ v_17 = this.limit - this.c;
                                // deno-lint-ignore no-unused-labels
                                lab25: {
                                    if (/**@type {boolean}*/(I_p1 > this.c)) break lab25;
                                    // deno-lint-ignore no-unused-labels
                                    lab26: {
                                        const /**@type {number}*/ v_18 = this.limit - this.c;
                                        // deno-lint-ignore no-unused-labels
                                        lab27: {
                                            if (this.find_among_b(a_5) === 0) break lab27;
                                            if (/**@type {boolean}*/(this.c > this.limit_backward)) break lab27;
                                            break lab26;
                                        }
                                        this.c = this.limit - v_18;
                                        this.slice_from("ee");
                                    }
                                }
                                this.c = this.limit - v_17;
                                break;
                            }
                            case 2: {
                                break lab24;
                            }
                            case 3: {
                                a = this.find_among_b(a_6);
                                if (a === 0) break lab24;
                                switch (a) {
                                    case 1: {
                                        const /**@type {number}*/ v_19 = this.limit - this.c;
                                        if (!(this.out_grouping_b(g_v, 97, 121))) break lab24;
                                        if (/**@type {boolean}*/(this.c > this.limit_backward)) break lab24;
                                        this.c = this.limit - v_19;
                                        this.bra = this.c;
                                        this.slice_from("ie");
                                        break;
                                    }
                                    case 2: {
                                        if (/**@type {boolean}*/(this.c > this.limit_backward)) break lab24;
                                        break;
                                    }
                                }
                                break;
                            }
                        }
                        break lab23;
                    }
                    this.c = this.limit - v_16;
                    const /**@type {number}*/ v_20 = this.limit - this.c;
                    if (!this.go_out_grouping_b(g_v, 97, 121)) break lab22;
                    this.c--;
                    this.c = this.limit - v_20;
                    this.slice_del();
                    this.ket = this.c;
                    this.bra = this.c;
                    const /**@type {number}*/ v_21 = this.limit - this.c;
                    a = this.find_among_b(a_8);
                    switch (a) {
                        case 1: {
                            this.slice_from("e");
                            break lab22;
                        }
                        case 2: {
                            {
                                const /**@type {number}*/ v_22 = this.limit - this.c;
                                // deno-lint-ignore no-unused-labels
                                lab28: {
                                    if (!(this.in_grouping_b(g_aeo, 97, 111))) break lab28;
                                    if (/**@type {boolean}*/(this.c > this.limit_backward)) break lab28;
                                    break lab22;
                                }
                                this.c = this.limit - v_22;
                            }
                            break;
                        }
                        case 3: {
                            if (/**@type {boolean}*/(this.c !== I_p1)) break lab22;
                            const /**@type {number}*/ v_23 = this.limit - this.c;
                            if (!this.#r_shortv()) break lab22;
                            this.c = this.limit - v_23;
                            this.slice_from("e");
                            break lab22;
                        }
                    }
                    this.c = this.limit - v_21;
                    this.ket = this.c;
                    if (this.c <= this.limit_backward) break lab22;
                    this.c--;
                    this.bra = this.c;
                    this.slice_del();
                }
            }
            this.c = this.limit - v_15;
            const /**@type {number}*/ v_24 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab29: {
                this.ket = this.c;
                // deno-lint-ignore no-unused-labels
                lab30: {
                    // deno-lint-ignore no-unused-labels
                    lab31: {
                        if (!(this.eq_s_b("y"))) break lab31;
                        break lab30;
                    }
                    if (!(this.eq_s_b("Y"))) break lab29;
                }
                this.bra = this.c;
                if (!(this.out_grouping_b(g_v, 97, 121))) break lab29;
                if (/**@type {boolean}*/(this.c <= this.limit_backward)) break lab29;
                this.slice_from("i");
            }
            this.c = this.limit - v_24;
            const /**@type {number}*/ v_25 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab32: {
                this.ket = this.c;
                a = this.find_among_b(a_9);
                if (a === 0) break lab32;
                this.bra = this.c;
                if (/**@type {boolean}*/(I_p1 > this.c)) break lab32;
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
                        if (!(this.eq_s_b("l"))) break lab32;
                        this.slice_from("og");
                        break;
                    }
                    case 15: {
                        this.slice_from("less");
                        break;
                    }
                    case 16: {
                        if (!(this.in_grouping_b(g_valid_LI, 99, 116))) break lab32;
                        this.slice_del();
                        break;
                    }
                }
            }
            this.c = this.limit - v_25;
            const /**@type {number}*/ v_26 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab33: {
                this.ket = this.c;
                a = this.find_among_b(a_10);
                if (a === 0) break lab33;
                this.bra = this.c;
                if (/**@type {boolean}*/(I_p1 > this.c)) break lab33;
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
                        if (/**@type {boolean}*/(I_p2 > this.c)) break lab33;
                        this.slice_del();
                        break;
                    }
                }
            }
            this.c = this.limit - v_26;
            const /**@type {number}*/ v_27 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab34: {
                this.ket = this.c;
                a = this.find_among_b(a_11);
                if (a === 0) break lab34;
                this.bra = this.c;
                if (/**@type {boolean}*/(I_p2 > this.c)) break lab34;
                switch (a) {
                    case 1: {
                        this.slice_del();
                        break;
                    }
                    case 2: {
                        // deno-lint-ignore no-unused-labels
                        lab35: {
                            // deno-lint-ignore no-unused-labels
                            lab36: {
                                if (!(this.eq_s_b("s"))) break lab36;
                                break lab35;
                            }
                            if (!(this.eq_s_b("t"))) break lab34;
                        }
                        this.slice_del();
                        break;
                    }
                }
            }
            this.c = this.limit - v_27;
            const /**@type {number}*/ v_28 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab37: {
                this.ket = this.c;
                a = this.find_among_b(a_12);
                if (a === 0) break lab37;
                this.bra = this.c;
                switch (a) {
                    case 1: {
                        // deno-lint-ignore no-unused-labels
                        lab38: {
                            // deno-lint-ignore no-unused-labels
                            lab39: {
                                if (/**@type {boolean}*/(I_p2 > this.c)) break lab39;
                                break lab38;
                            }
                            if (/**@type {boolean}*/(I_p1 > this.c)) break lab37;
                            {
                                const /**@type {number}*/ v_29 = this.limit - this.c;
                                // deno-lint-ignore no-unused-labels
                                lab40: {
                                    if (!this.#r_shortv()) break lab40;
                                    break lab37;
                                }
                                this.c = this.limit - v_29;
                            }
                        }
                        this.slice_del();
                        break;
                    }
                    case 2: {
                        if (/**@type {boolean}*/(I_p2 > this.c)) break lab37;
                        if (!(this.eq_s_b("l"))) break lab37;
                        this.slice_del();
                        break;
                    }
                    case 3: {
                        this.slice_from("en");
                        break;
                    }
                    case 4: {
                        this.slice_from("er");
                        break;
                    }
                    case 5: {
                        this.slice_from("eri");
                        break;
                    }
                    case 6: {
                        this.slice_from("ili");
                        break;
                    }
                }
            }
            this.c = this.limit - v_28;
            this.c = this.limit_backward;
            const /**@type {number}*/ v_30 = this.c;
            // deno-lint-ignore no-unused-labels
            lab41: {
                if (!B_Y_found) break lab41;
                while (true) {
                    const /**@type {number}*/ v_31 = this.c;
                    // deno-lint-ignore no-unused-labels
                    lab42: {
                        // deno-lint-ignore no-unused-labels
                        golab43: while (true)
                        {
                            const /**@type {number}*/ v_32 = this.c;
                            // deno-lint-ignore no-unused-labels
                            lab44: {
                                this.bra = this.c;
                                if (!(this.eq_s("Y"))) break lab44;
                                this.ket = this.c;
                                this.c = v_32;
                                break golab43;
                            }
                            this.c = v_32;
                            if (this.c >= this.limit) break lab42;
                            this.c++;
                        }
                        this.slice_from("y");
                        continue;
                    }
                    this.c = v_31;
                    break;
                }
            }
            this.c = v_30;
        }
        return true;
    }

    /**@return{string}*/
    stem(/**@type {string}*/input) {
        this.setCurrent(input);
        this.#stem();
        return this.getCurrent();
    }

    stemWord = this.stem;
}

