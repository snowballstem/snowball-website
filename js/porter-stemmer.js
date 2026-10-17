// Generated from porter.sbl by Snowball 3.2.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["s", 3],
    ["ies", 2, 1],
    ["sses", 1, 2],
    ["ss", -1, 3]
];

const /**@type {Array<string>}*/ as_0 = ["ss", "i", ""];

const a_1 = [
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

const a_2 = [
    ["ed", 2],
    ["eed", 1, 1],
    ["ing", 2]
];

const a_3 = [
    ["anci", 3],
    ["enci", 2],
    ["abli", 4],
    ["eli", 6],
    ["alli", 9],
    ["ousli", 11],
    ["entli", 5],
    ["aliti", 9],
    ["biliti", 13],
    ["iviti", 12],
    ["tional", 1],
    ["ational", 8, 1],
    ["alism", 9],
    ["ation", 8],
    ["ization", 7, 1],
    ["izer", 7],
    ["ator", 8],
    ["iveness", 12],
    ["fulness", 10],
    ["ousness", 11]
];

const /**@type {Array<string>}*/ as_3 = ["tion", "ence", "ance", "able", "ent", "e", "ize", "ate", "al", "ful", "ous", "ive", "ble"];

const a_4 = [
    ["icate", 2],
    ["ative", 3],
    ["alize", 1],
    ["iciti", 2],
    ["ical", 2],
    ["ful", 3],
    ["ness", 3]
];

const /**@type {Array<string>}*/ as_4 = ["al", "ic", ""];

const a_5 = [
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
    ["ement", 1, 1],
    ["ou", 1]
];

const /**@type {Array<number>}*/ g_v = [17, 65, 16, 1];

const /**@type {Array<number>}*/ g_v_WXY = [1, 17, 65, 208, 1];

import B from './base-stemmer.js'

export default class extends B {


    /** @return {boolean} */
    #r_shortv() {
        if (!(this.out_grouping_b(g_v_WXY, 89, 121))) return false;
        if (!(this.in_grouping_b(g_v, 97, 121))) return false;
        return this.out_grouping_b(g_v, 97, 121);
    }

    /** @return {boolean} */
    #stem() {
        let /**@type {number}*/ a;
        let /**@type {boolean}*/ B_Y_found;
        let /**@type {number}*/ I_p2;
        let /**@type {number}*/ I_p1;
        B_Y_found = false;
        const /**@type {number}*/ v_1 = this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            this.bra = this.c;
            if (!(this.eq_s("y"))) break lab0;
            this.ket = this.c;
            this.slice_from("Y");
            B_Y_found = true;
        }
        this.c = v_1;
        const /**@type {number}*/ v_2 = this.c;
        // deno-lint-ignore no-unused-labels
        lab1: {
            while (true) {
                const /**@type {number}*/ v_3 = this.c;
                // deno-lint-ignore no-unused-labels
                lab2: {
                    // deno-lint-ignore no-unused-labels
                    golab3: while (true)
                    {
                        const /**@type {number}*/ v_4 = this.c;
                        // deno-lint-ignore no-unused-labels
                        lab4: {
                            if (!(this.in_grouping(g_v, 97, 121))) break lab4;
                            this.bra = this.c;
                            if (!(this.eq_s("y"))) break lab4;
                            this.ket = this.c;
                            this.c = v_4;
                            break golab3;
                        }
                        this.c = v_4;
                        if (this.c >= this.limit) break lab2;
                        this.c++;
                    }
                    this.slice_from("Y");
                    B_Y_found = true;
                    continue;
                }
                this.c = v_3;
                break;
            }
        }
        this.c = v_2;
        I_p1 = this.limit;
        I_p2 = this.limit;
        const /**@type {number}*/ v_5 = this.c;
        // deno-lint-ignore no-unused-labels
        lab5: {
            if (!this.go_out_grouping(g_v, 97, 121)) break lab5;
            this.c++;
            if (!this.go_in_grouping(g_v, 97, 121)) break lab5;
            this.c++;
            I_p1 = this.c;
            if (!this.go_out_grouping(g_v, 97, 121)) break lab5;
            this.c++;
            if (!this.go_in_grouping(g_v, 97, 121)) break lab5;
            this.c++;
            I_p2 = this.c;
        }
        this.c = v_5;
        this.limit_backward = this.c; this.c = this.limit;
        const /**@type {number}*/ v_6 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab6: {
            this.ket = this.c;
            a = this.find_among_b(a_0);
            if (a === 0) break lab6;
            this.bra = this.c;
            if (a > 0) {
                this.slice_from(as_0[a - 1]);
            }
        }
        this.c = this.limit - v_6;
        const /**@type {number}*/ v_7 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab7: {
            this.ket = this.c;
            a = this.find_among_b(a_2);
            if (a === 0) break lab7;
            this.bra = this.c;
            switch (a) {
                case 1: {
                    if (/**@type {boolean}*/(I_p1 > this.c)) break lab7;
                    this.slice_from("ee");
                    break;
                }
                case 2: {
                    const /**@type {number}*/ v_8 = this.limit - this.c;
                    if (!this.go_out_grouping_b(g_v, 97, 121)) break lab7;
                    this.c--;
                    this.c = this.limit - v_8;
                    this.slice_del();
                    const /**@type {number}*/ v_9 = this.limit - this.c;
                    a = this.find_among_b(a_1);
                    this.c = this.limit - v_9;
                    switch (a) {
                        case 1: {
                            {
                                const /**@type {number}*/ c = this.c;
                                this.insert(c, c, "e");
                                this.c = c;
                            }
                            break;
                        }
                        case 2: {
                            this.ket = this.c;
                            if (this.c <= this.limit_backward) break lab7;
                            this.c--;
                            this.bra = this.c;
                            this.slice_del();
                            break;
                        }
                        case 3: {
                            if (/**@type {boolean}*/(this.c !== I_p1)) break lab7;
                            const /**@type {number}*/ v_10 = this.limit - this.c;
                            if (!this.#r_shortv()) break lab7;
                            this.c = this.limit - v_10;
                            {
                                const /**@type {number}*/ c = this.c;
                                this.insert(c, c, "e");
                                this.c = c;
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        }
        this.c = this.limit - v_7;
        const /**@type {number}*/ v_11 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab8: {
            this.ket = this.c;
            // deno-lint-ignore no-unused-labels
            lab9: {
                // deno-lint-ignore no-unused-labels
                lab10: {
                    if (!(this.eq_s_b("y"))) break lab10;
                    break lab9;
                }
                if (!(this.eq_s_b("Y"))) break lab8;
            }
            this.bra = this.c;
            if (!this.go_out_grouping_b(g_v, 97, 121)) break lab8;
            this.c--;
            this.slice_from("i");
        }
        this.c = this.limit - v_11;
        const /**@type {number}*/ v_12 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab11: {
            this.ket = this.c;
            a = this.find_among_b(a_3);
            if (a === 0) break lab11;
            this.bra = this.c;
            if (/**@type {boolean}*/(I_p1 > this.c)) break lab11;
            this.slice_from(as_3[a - 1]);
        }
        this.c = this.limit - v_12;
        const /**@type {number}*/ v_13 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab12: {
            this.ket = this.c;
            a = this.find_among_b(a_4);
            if (a === 0) break lab12;
            this.bra = this.c;
            if (/**@type {boolean}*/(I_p1 > this.c)) break lab12;
            this.slice_from(as_4[a - 1]);
        }
        this.c = this.limit - v_13;
        const /**@type {number}*/ v_14 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab13: {
            this.ket = this.c;
            a = this.find_among_b(a_5);
            if (a === 0) break lab13;
            this.bra = this.c;
            if (/**@type {boolean}*/(I_p2 > this.c)) break lab13;
            switch (a) {
                case 1: {
                    this.slice_del();
                    break;
                }
                case 2: {
                    // deno-lint-ignore no-unused-labels
                    lab14: {
                        // deno-lint-ignore no-unused-labels
                        lab15: {
                            if (!(this.eq_s_b("s"))) break lab15;
                            break lab14;
                        }
                        if (!(this.eq_s_b("t"))) break lab13;
                    }
                    this.slice_del();
                    break;
                }
            }
        }
        this.c = this.limit - v_14;
        const /**@type {number}*/ v_15 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab16: {
            this.ket = this.c;
            if (!(this.eq_s_b("e"))) break lab16;
            this.bra = this.c;
            // deno-lint-ignore no-unused-labels
            lab17: {
                // deno-lint-ignore no-unused-labels
                lab18: {
                    if (/**@type {boolean}*/(I_p2 > this.c)) break lab18;
                    break lab17;
                }
                if (/**@type {boolean}*/(I_p1 > this.c)) break lab16;
                {
                    const /**@type {number}*/ v_16 = this.limit - this.c;
                    // deno-lint-ignore no-unused-labels
                    lab19: {
                        if (!this.#r_shortv()) break lab19;
                        break lab16;
                    }
                    this.c = this.limit - v_16;
                }
            }
            this.slice_del();
        }
        this.c = this.limit - v_15;
        const /**@type {number}*/ v_17 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab20: {
            this.ket = this.c;
            if (!(this.eq_s_b("l"))) break lab20;
            this.bra = this.c;
            if (/**@type {boolean}*/(I_p2 > this.c)) break lab20;
            if (!(this.eq_s_b("l"))) break lab20;
            this.slice_del();
        }
        this.c = this.limit - v_17;
        this.c = this.limit_backward;
        const /**@type {number}*/ v_18 = this.c;
        // deno-lint-ignore no-unused-labels
        lab21: {
            if (!B_Y_found) break lab21;
            while (true) {
                const /**@type {number}*/ v_19 = this.c;
                // deno-lint-ignore no-unused-labels
                lab22: {
                    // deno-lint-ignore no-unused-labels
                    golab23: while (true)
                    {
                        const /**@type {number}*/ v_20 = this.c;
                        // deno-lint-ignore no-unused-labels
                        lab24: {
                            this.bra = this.c;
                            if (!(this.eq_s("Y"))) break lab24;
                            this.ket = this.c;
                            this.c = v_20;
                            break golab23;
                        }
                        this.c = v_20;
                        if (this.c >= this.limit) break lab22;
                        this.c++;
                    }
                    this.slice_from("y");
                    continue;
                }
                this.c = v_19;
                break;
            }
        }
        this.c = v_18;
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

