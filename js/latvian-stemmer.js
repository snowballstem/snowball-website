// Generated from latvian.sbl by Snowball 3.2.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["aiz", -1],
    ["ap", -1],
    ["at", -1],
    ["ie", -1],
    ["iz", -1],
    ["no", -1],
    ["pa", -1],
    ["pie", -1],
    ["p\u0101r", -1],
    ["sa", -1],
    ["uz", -1]
];

const a_1 = [
    ["dama", -1, 0, 2],
    ["si", -1, 0, 4],
    ["usi", -1, 1, 2],
    ["sim", -1, 0, 4],
    ["damas", -1, 0, 2],
    ["ies", -1, 0, 2],
    ["amies", -1, 1, 2],
    ["damies", -1, 1, 2],
    ["\u0101mies", -1, 3, 2],
    ["usies", -1, 4, 2],
    ["ties", -1, 5, 5],
    ["aties", -1, 1, 2],
    ["oties", -1, 2, 2],
    ["u\u0161ies", -1, 8, 2],
    ["dams", -1, 0, 2],
    ["dam\u0101s", -1, 0, 2],
    ["t", -1, 0, 1],
    ["iet", -1, 1, 2],
    ["siet", -1, 1, 4],
    ["\u0113tu", -1, 0, 2],
    ["\u0161u", -1, 0, 3]
];

const a_2 = [
    ["a", 1],
    ["e", -1],
    ["ie", -1, 1],
    ["i", 1],
    ["ai", -1, 1],
    ["ajai", -1, 1],
    ["ei", -1, 3],
    ["ij", -1],
    ["am", -1],
    ["ajam", -1, 1],
    ["iem", 1],
    ["ajiem", -1, 1],
    ["im", -1],
    ["um", -1],
    ["\u0101m", -1],
    ["aj\u0101m", -1, 1],
    ["\u0113m", -1],
    ["\u012Bm", -1],
    ["o", -1],
    ["s", -1],
    ["as", -1, 1],
    ["es", -1, 2],
    ["is", -1, 3],
    ["ais", -1, 1],
    ["os", 1, 5],
    ["ajos", -1, 1],
    ["us", 2, 7],
    ["\u0101s", -1, 8],
    ["aj\u0101s", -1, 1],
    ["\u0113s", -1, 10],
    ["\u012Bs", -1, 11],
    ["u", 2],
    ["\u0101", -1],
    ["aj\u0101", -1, 1],
    ["\u0113", -1],
    ["\u012B", -1],
    ["\u0161", -1],
    ["\u016B", -1]
];

const a_3 = [
    ["t\u016Bl", -1],
    ["piem", -1],
    ["atm", -1]
];

const a_4 = [
    ["i\u0146", 1],
    ["\u012B\u0161", 2]
];

const a_5 = [
    ["j", 1],
    ["\u0146\u0146", 3],
    ["k\u0161", 2]
];

const a_6 = [
    ["am", -1],
    ["\u0101m", -1]
];

const a_7 = [
    ["tagad", -1],
    ["vid", -1],
    ["p\u0113d", -1],
    ["gal", -1],
    ["\u0161ejien", -1],
    ["kop", -1],
    ["tur", -1],
    ["\u0101r", -1],
    ["viet", -1],
    ["pret", -1],
    ["k\u0101rt", -1],
    ["sav", -1],
    ["reiz", -1],
    ["aug\u0161", -1],
    ["apak\u0161", -1],
    ["iek\u0161", -1],
    ["m\u016B\u017E", -1]
];

const a_8 = [
    ["oj", -1],
    ["\u0101j", 1],
    ["\u0113j", 2],
    ["\u012Bj", -1]
];

const a_9 = [
    ["pla\u0161", -1],
    ["tie\u0161", -1],
    ["sve\u0161", -1],
    ["aug\u0161", -1],
    ["gai\u0161", -1],
    ["m\u012Bk\u0161", -1],
    ["tum\u0161", -1],
    ["dro\u0161", -1],
    ["kau\u0161", -1],
    ["du\u0161", 1],
    ["m\u0101\u0161", 1],
    ["bie\u017E", -1],
    ["me\u017E", -1],
    ["lau\u017E", -1]
];

const a_10 = [
    ["\u010D", 5],
    ["\u013C", 3],
    ["\u013C\u013C", 11, 1],
    ["\u0161\u013C", 8, 2],
    ["\u017E\u013C", 9, 3],
    ["\u0146", 4],
    ["\u013C\u0146", 10, 1],
    ["\u0161\u0146", 6, 2],
    ["\u017E\u0146", 7, 3],
    ["\u0161", 1],
    ["\u017E", 2]
];

const /**@type {Array<number>}*/ g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4];

const /**@type {Array<number>}*/ g_type_v = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 16, 0, 0, 16];

const /**@type {Array<number>}*/ g_labial = [1, 72, 16];

import B from './base-stemmer.js'

export default class extends B {

    #I_q/**@type {number}*/ = 0;
    #I_p2/**@type {number}*/ = 0;
    #I_p1/**@type {number}*/ = 0;


    /** @return {boolean} */
    #af_1() {
        switch (this.af) {
            case 1: return this.#r_infinitive();
            case 2: return this.#r_R2();
            case 3: return this.#r_future_su();
            case 4: return this.#r_future();
            case 5: return this.#r_reflexive_ties();
        }
        return false;
    }

    /** @return {boolean} */
    #r_mark_regions() {
        let /**@type {number}*/ I_x;
        this.#I_p1 = this.limit;
        this.#I_p2 = this.limit;
        const /**@type {number}*/ v_1 = this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /**@type {number}*/ v_2 = this.c;
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!(this.eq_s("ne"))) {
                    this.c = v_2;
                    break lab1;
                }
            }
            const /**@type {number}*/ v_3 = this.c;
            // deno-lint-ignore no-unused-labels
            lab2: {
                if (this.find_among(a_0) === 0) {
                    this.c = v_3;
                    break lab2;
                }
            }
            this.#I_q = this.c;
        }
        this.c = v_1;
        const /**@type {number}*/ v_4 = this.c;
        if (this.c + 3 > this.limit) return false;
        this.c += 3;
        I_x = this.c;
        this.c = v_4;
        const /**@type {number}*/ v_5 = this.c;
        // deno-lint-ignore no-unused-labels
        lab3: {
            if (!this.go_out_grouping(g_v, 97, 363)) break lab3;
            this.c++;
            this.#I_p1 = this.c;
            // deno-lint-ignore no-unused-labels
            lab4: {
                if (/**@type {boolean}*/(this.#I_p1 >= I_x)) break lab4;
                this.#I_p1 = I_x;
            }
        }
        this.c = v_5;
        const /**@type {number}*/ v_6 = this.c;
        // deno-lint-ignore no-unused-labels
        lab5: {
            if (this.c > this.#I_q) break lab5;
            this.c = this.#I_q;
            if (!this.go_out_grouping(g_v, 97, 363)) break lab5;
            this.c++;
            this.#I_p2 = this.c;
            // deno-lint-ignore no-unused-labels
            lab6: {
                if (/**@type {boolean}*/(this.#I_p2 >= I_x)) break lab6;
                this.#I_p2 = I_x;
            }
        }
        this.c = v_6;
        return true;
    }

    /** @return {boolean} */
    #r_R2() {
        return this.#I_p2 <= this.c;
    }

    /** @return {boolean} */
    #r_infinitive() {
        if (/**@type {boolean}*/(this.#I_p2 > this.c)) return false;
        if (!this.go_out_grouping_b(g_v, 97, 363)) return false;
        this.c--;
        if (!this.go_out_grouping_b(g_v, 97, 363)) return false;
        this.c--;
        return true;
    }

    /** @return {boolean} */
    #r_future() {
        if (/**@type {boolean}*/(this.#I_p2 > this.c)) return false;
        return this.in_grouping_b(g_type_v, 111, 299);
    }

    /** @return {boolean} */
    #r_future_su() {
        if (/**@type {boolean}*/(this.#I_p2 > this.c)) return false;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (!(this.eq_s_b("\u012B"))) break lab0;
            return false;
        }
        return this.in_grouping_b(g_type_v, 111, 299);
    }

    /** @return {boolean} */
    #r_reflexive_ties() {
        if (/**@type {boolean}*/(this.#I_p2 > this.c)) return false;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (!(this.eq_s_b("n"))) break lab0;
            return false;
        }
        return true;
    }

    /** @return {boolean} */
    #stem() {
        let /**@type {number}*/ a;
        let /**@type {boolean}*/ B_diminutive_found;
        let /**@type {boolean}*/ B_comparative_found;
        let /**@type {boolean}*/ B_palatal_u;
        let /**@type {boolean}*/ B_palatal;
        let /**@type {boolean}*/ B_ending_removed;
        B_ending_removed = false;
        B_palatal = false;
        B_palatal_u = false;
        B_comparative_found = false;
        B_diminutive_found = false;
        const /**@type {number}*/ v_1 = this.c;
        this.#r_mark_regions();
        this.c = v_1;
        this.limit_backward = this.c; this.c = this.limit;
        const /**@type {number}*/ v_2 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            // deno-lint-ignore no-unused-labels
            lab1: {
                const /**@type {number}*/ v_3 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab2: {
                    this.ket = this.c;
                    if (this.find_among_b(a_1, this.#af_1) === 0) break lab2;
                    this.bra = this.c;
                    this.slice_del();
                    B_ending_removed = true;
                    const /**@type {number}*/ v_4 = this.limit - this.c;
                    // deno-lint-ignore no-unused-labels
                    lab3: {
                        this.ket = this.c;
                        if (!(this.in_grouping_b(g_type_v, 111, 299))) {
                            this.c = this.limit - v_4;
                            break lab3;
                        }
                        this.bra = this.c;
                        if (/**@type {boolean}*/(this.#I_p2 > this.c)) {
                            this.c = this.limit - v_4;
                            break lab3;
                        }
                        this.slice_del();
                    }
                    break lab1;
                }
                this.c = this.limit - v_3;
                if (this.c < this.#I_p1) break lab0;
                const /**@type {number}*/ v_5 = this.limit_backward;
                this.limit_backward = this.#I_p1;
                this.ket = this.c;
                a = this.find_among_b(a_2);
                if (a === 0) {
                    this.limit_backward = v_5;
                    break lab0;
                }
                this.bra = this.c;
                this.limit_backward = v_5;
                switch (a) {
                    case 1: {
                        B_palatal = true;
                        break;
                    }
                    case 2: {
                        B_palatal = true;
                        B_palatal_u = true;
                        break;
                    }
                }
                this.slice_del();
                B_ending_removed = true;
            }
        }
        this.c = this.limit - v_2;
        const /**@type {number}*/ v_6 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab4: {
            this.ket = this.c;
            if (!(this.eq_s_b("aj"))) break lab4;
            this.bra = this.c;
            if (/**@type {boolean}*/(this.#I_p2 > this.c)) break lab4;
            this.slice_del();
            B_palatal = false;
        }
        this.c = this.limit - v_6;
        const /**@type {number}*/ v_7 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab5: {
            this.ket = this.c;
            if (!(this.eq_s_b("\u0101k"))) break lab5;
            this.bra = this.c;
            if (/**@type {boolean}*/(this.#I_p2 > this.c)) break lab5;
            {
                const /**@type {number}*/ v_8 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab6: {
                    if (!(this.eq_s_b("vec"))) break lab6;
                    if (/**@type {boolean}*/(this.c > this.limit_backward)) break lab6;
                    break lab5;
                }
                this.c = this.limit - v_8;
            }
            this.slice_del();
            B_comparative_found = true;
            B_palatal = false;
        }
        this.c = this.limit - v_7;
        this.c = this.limit_backward;
        const /**@type {number}*/ v_9 = this.c;
        // deno-lint-ignore no-unused-labels
        lab7: {
            if (!B_comparative_found) break lab7;
            this.bra = this.c;
            if (!(this.eq_s("vis"))) break lab7;
            this.ket = this.c;
            const /**@type {number}*/ v_10 = this.c;
            if (this.c + 3 > this.limit) break lab7;
            this.c += 3;
            this.c = v_10;
            this.slice_del();
            const /**@type {number}*/ v_11 = this.c;
            this.#r_mark_regions();
            this.c = v_11;
        }
        this.c = v_9;
        this.limit_backward = this.c; this.c = this.limit;
        const /**@type {number}*/ v_12 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab8: {
            // deno-lint-ignore no-unused-labels
            lab9: {
                const /**@type {number}*/ v_13 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab10: {
                    this.ket = this.c;
                    a = this.find_among_b(a_4);
                    if (a === 0) break lab10;
                    this.bra = this.c;
                    if (/**@type {boolean}*/(this.#I_p1 > this.c)) break lab10;
                    const /**@type {number}*/ v_14 = this.limit - this.c;
                    if (!(this.out_grouping_b(g_v, 97, 363))) break lab10;
                    this.c = this.limit - v_14;
                    switch (a) {
                        case 1: {
                            {
                                const /**@type {number}*/ v_15 = this.limit - this.c;
                                // deno-lint-ignore no-unused-labels
                                lab11: {
                                    if (!(this.eq_s_b("z"))) break lab11;
                                    if (/**@type {boolean}*/(this.#I_q !== this.c)) break lab11;
                                    break lab10;
                                }
                                this.c = this.limit - v_15;
                            }
                            {
                                const /**@type {number}*/ v_16 = this.limit - this.c;
                                // deno-lint-ignore no-unused-labels
                                lab12: {
                                    if (this.find_among_b(a_3) === 0) break lab12;
                                    break lab10;
                                }
                                this.c = this.limit - v_16;
                            }
                            break;
                        }
                        case 2: {
                            this.slice_from("\u012Bt");
                            break;
                        }
                    }
                    B_diminutive_found = true;
                    break lab9;
                }
                this.c = this.limit - v_13;
                if (!B_palatal) break lab8;
                this.ket = this.c;
                a = this.find_among_b(a_5);
                if (a === 0) break lab8;
                this.bra = this.c;
                switch (a) {
                    case 1: {
                        if (!(this.in_grouping_b(g_labial, 98, 118))) break lab8;
                        this.slice_del();
                        break;
                    }
                    case 2: {
                        if (!B_palatal_u) break lab8;
                        this.slice_from("kst");
                        break;
                    }
                    case 3: {
                        if (!B_palatal_u) break lab8;
                        this.slice_from("nn");
                        break;
                    }
                }
            }
        }
        this.c = this.limit - v_12;
        // deno-lint-ignore no-unused-labels
        lab13: {
            const /**@type {number}*/ v_17 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab14: {
                this.ket = this.c;
                if (!(this.eq_s_b("o\u0161"))) break lab14;
                this.bra = this.c;
                if (/**@type {boolean}*/(this.#I_p2 > this.c)) break lab14;
                this.slice_del();
            }
            this.c = this.limit - v_17;
            const /**@type {number}*/ v_18 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab15: {
                this.ket = this.c;
                if (!(this.eq_s_b("u\u0161"))) break lab15;
                this.bra = this.c;
                if (/**@type {boolean}*/(this.#I_p2 > this.c)) break lab15;
                this.slice_del();
            }
            this.c = this.limit - v_18;
            const /**@type {number}*/ v_19 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab16: {
                this.ket = this.c;
                if (this.find_among_b(a_6) === 0) break lab16;
                this.bra = this.c;
                if (/**@type {boolean}*/(this.#I_p2 > this.c)) break lab16;
                this.slice_del();
            }
            this.c = this.limit - v_19;
        }
        const /**@type {number}*/ v_20 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab17: {
            this.ket = this.c;
            a = this.find_among_b(a_8);
            if (a === 0) break lab17;
            this.bra = this.c;
            if (/**@type {boolean}*/(this.#I_p2 > this.c)) break lab17;
            switch (a) {
                case 1: {
                    // deno-lint-ignore no-unused-labels
                    lab18: {
                        if (!(this.eq_s_b("t"))) break lab18;
                        break lab17;
                    }
                    break;
                }
                case 2: {
                    {
                        const /**@type {number}*/ v_21 = this.limit - this.c;
                        // deno-lint-ignore no-unused-labels
                        lab19: {
                            if (this.find_among_b(a_7) === 0) break lab19;
                            break lab17;
                        }
                        this.c = this.limit - v_21;
                    }
                    break;
                }
            }
            this.slice_del();
        }
        this.c = this.limit - v_20;
        const /**@type {number}*/ v_22 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab20: {
            if (!B_ending_removed) break lab20;
            if (B_diminutive_found) break lab20;
            {
                const /**@type {number}*/ v_23 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab21: {
                    a = this.find_among_b(a_9);
                    if (a === 0) break lab21;
                    switch (a) {
                        case 1: {
                            if (/**@type {boolean}*/(this.c > this.limit_backward)) break lab21;
                            break;
                        }
                    }
                    break lab20;
                }
                this.c = this.limit - v_23;
            }
            this.ket = this.c;
            a = this.find_among_b(a_10);
            if (a === 0) break lab20;
            this.bra = this.c;
            switch (a) {
                case 1: {
                    // deno-lint-ignore no-unused-labels
                    lab22: {
                        const /**@type {number}*/ v_24 = this.limit - this.c;
                        // deno-lint-ignore no-unused-labels
                        lab23: {
                            if (!(this.eq_s_b("ie"))) break lab23;
                            if (this.c - 3 < this.limit_backward) break lab23;
                            this.c -= 3;
                            this.slice_from("t");
                            break lab22;
                        }
                        this.c = this.limit - v_24;
                        this.slice_from("s");
                    }
                    break;
                }
                case 2: {
                    this.slice_from("z");
                    break;
                }
                case 3: {
                    this.slice_from("l");
                    break;
                }
                case 4: {
                    this.slice_from("n");
                    break;
                }
                case 5: {
                    this.slice_from("c");
                    break;
                }
                case 6: {
                    this.slice_from("sn");
                    break;
                }
                case 7: {
                    this.slice_from("zn");
                    break;
                }
                case 8: {
                    this.slice_from("sl");
                    break;
                }
                case 9: {
                    this.slice_from("zl");
                    break;
                }
                case 10: {
                    this.slice_from("ln");
                    break;
                }
                case 11: {
                    this.slice_from("ll");
                    break;
                }
            }
        }
        this.c = this.limit - v_22;
        this.c = this.limit_backward;
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

