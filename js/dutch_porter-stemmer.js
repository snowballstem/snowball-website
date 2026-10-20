// Generated from dutch_porter.sbl by Snowball 3.2.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["", 6],
    ["\u00E1", 1, 1],
    ["\u00E4", 1, 2],
    ["\u00E9", 2, 3],
    ["\u00EB", 2, 4],
    ["\u00ED", 3, 5],
    ["\u00EF", 3, 6],
    ["\u00F3", 4, 7],
    ["\u00F6", 4, 8],
    ["\u00FA", 5, 9],
    ["\u00FC", 5, 10]
];

const a_1 = [
    ["", 3],
    ["I", 2, 1],
    ["Y", 1, 2]
];

const a_2 = [
    ["dd", -1],
    ["kk", -1],
    ["tt", -1]
];

const a_3 = [
    ["ene", 2],
    ["se", 3],
    ["en", 2],
    ["heden", 1, 1],
    ["s", 3]
];

const a_4 = [
    ["end", 1],
    ["ig", 2],
    ["ing", 1],
    ["lijk", 3],
    ["baar", 4],
    ["bar", 5]
];

const a_5 = [
    ["aa", -1],
    ["ee", -1],
    ["oo", -1],
    ["uu", -1]
];

const /**@type {Array<number>}*/ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

const /**@type {Array<number>}*/ g_v_I = [1, 0, 0, 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

const /**@type {Array<number>}*/ g_v_j = [17, 67, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

import B from './base-stemmer.js'

export default class extends B {

    #I_p1/**@type {number}*/ = 0;
    #B_e_found/**@type {boolean}*/ = false;


    /** @return {boolean} */
    #r_undouble() {
        const /**@type {number}*/ v_1 = this.limit - this.c;
        if (this.find_among_b(a_2) === 0) return false;
        this.c = this.limit - v_1;
        this.ket = this.c;
        if (this.c <= this.limit_backward) return false;
        this.c--;
        this.bra = this.c;
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #r_e_ending() {
        this.#B_e_found = false;
        this.ket = this.c;
        if (!(this.eq_s_b("e"))) return false;
        this.bra = this.c;
        if (/**@type {boolean}*/(this.#I_p1 > this.c)) return false;
        const /**@type {number}*/ v_1 = this.limit - this.c;
        if (!(this.out_grouping_b(g_v, 97, 232))) return false;
        this.c = this.limit - v_1;
        this.slice_del();
        this.#B_e_found = true;
        return this.#r_undouble();
    }

    /** @return {boolean} */
    #r_en_ending() {
        if (/**@type {boolean}*/(this.#I_p1 > this.c)) return false;
        const /**@type {number}*/ v_1 = this.limit - this.c;
        if (!(this.out_grouping_b(g_v, 97, 232))) return false;
        this.c = this.limit - v_1;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (!(this.eq_s_b("gem"))) break lab0;
            return false;
        }
        this.slice_del();
        return this.#r_undouble();
    }

    /** @return {boolean} */
    #stem() {
        let /**@type {number}*/ a;
        let /**@type {number}*/ I_x;
        let /**@type {number}*/ I_p2;
        const /**@type {number}*/ v_1 = this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /**@type {number}*/ v_2 = this.c;
            while (true) {
                const /**@type {number}*/ v_3 = this.c;
                // deno-lint-ignore no-unused-labels
                lab1: {
                    this.bra = this.c;
                    a = this.find_among(a_0);
                    this.ket = this.c;
                    switch (a) {
                        case 1: {
                            this.slice_from("a");
                            break;
                        }
                        case 2: {
                            this.slice_from("e");
                            break;
                        }
                        case 3: {
                            this.slice_from("i");
                            break;
                        }
                        case 4: {
                            this.slice_from("o");
                            break;
                        }
                        case 5: {
                            this.slice_from("u");
                            break;
                        }
                        case 6: {
                            if (this.c >= this.limit) break lab1;
                            this.c++;
                            break;
                        }
                    }
                    continue;
                }
                this.c = v_3;
                break;
            }
            this.c = v_2;
            const /**@type {number}*/ v_4 = this.c;
            // deno-lint-ignore no-unused-labels
            lab2: {
                this.bra = this.c;
                if (!(this.eq_s("y"))) {
                    this.c = v_4;
                    break lab2;
                }
                this.ket = this.c;
                this.slice_from("Y");
            }
            while (true) {
                const /**@type {number}*/ v_5 = this.c;
                // deno-lint-ignore no-unused-labels
                lab3: {
                    if (!this.go_out_grouping(g_v, 97, 232)) break lab3;
                    this.c++;
                    const /**@type {number}*/ v_6 = this.c;
                    // deno-lint-ignore no-unused-labels
                    lab4: {
                        this.bra = this.c;
                        // deno-lint-ignore no-unused-labels
                        lab5: {
                            const /**@type {number}*/ v_7 = this.c;
                            // deno-lint-ignore no-unused-labels
                            lab6: {
                                if (!(this.eq_s("i"))) break lab6;
                                this.ket = this.c;
                                const /**@type {number}*/ v_8 = this.c;
                                // deno-lint-ignore no-unused-labels
                                lab7: {
                                    if (!(this.in_grouping(g_v, 97, 232))) break lab7;
                                    this.slice_from("I");
                                }
                                this.c = v_8;
                                break lab5;
                            }
                            this.c = v_7;
                            if (!(this.eq_s("y"))) {
                                this.c = v_6;
                                break lab4;
                            }
                            this.ket = this.c;
                            this.slice_from("Y");
                        }
                    }
                    continue;
                }
                this.c = v_5;
                break;
            }
        }
        this.c = v_1;
        const /**@type {number}*/ v_9 = this.c;
        // deno-lint-ignore no-unused-labels
        lab8: {
            this.#I_p1 = this.limit;
            I_p2 = this.limit;
            const /**@type {number}*/ v_10 = this.c;
            if (this.c + 3 > this.limit) break lab8;
            this.c += 3;
            I_x = this.c;
            this.c = v_10;
            if (!this.go_out_grouping(g_v, 97, 232)) break lab8;
            this.c++;
            if (!this.go_in_grouping(g_v, 97, 232)) break lab8;
            this.c++;
            this.#I_p1 = this.c;
            // deno-lint-ignore no-unused-labels
            lab9: {
                if (/**@type {boolean}*/(this.#I_p1 >= I_x)) break lab9;
                this.#I_p1 = I_x;
            }
            if (!this.go_out_grouping(g_v, 97, 232)) break lab8;
            this.c++;
            if (!this.go_in_grouping(g_v, 97, 232)) break lab8;
            this.c++;
            I_p2 = this.c;
        }
        this.c = v_9;
        this.limit_backward = this.c; this.c = this.limit;
        // deno-lint-ignore no-unused-labels
        lab10: {
            const /**@type {number}*/ v_11 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab11: {
                this.ket = this.c;
                a = this.find_among_b(a_3);
                if (a === 0) break lab11;
                this.bra = this.c;
                switch (a) {
                    case 1: {
                        if (/**@type {boolean}*/(this.#I_p1 > this.c)) break lab11;
                        this.slice_from("heid");
                        break;
                    }
                    case 2: {
                        if (!this.#r_en_ending()) break lab11;
                        break;
                    }
                    case 3: {
                        if (/**@type {boolean}*/(this.#I_p1 > this.c)) break lab11;
                        if (!(this.out_grouping_b(g_v_j, 97, 232))) break lab11;
                        this.slice_del();
                        break;
                    }
                }
            }
            this.c = this.limit - v_11;
            const /**@type {number}*/ v_12 = this.limit - this.c;
            this.#r_e_ending();
            this.c = this.limit - v_12;
            const /**@type {number}*/ v_13 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab12: {
                this.ket = this.c;
                if (!(this.eq_s_b("heid"))) break lab12;
                this.bra = this.c;
                if (/**@type {boolean}*/(I_p2 > this.c)) break lab12;
                // deno-lint-ignore no-unused-labels
                lab13: {
                    if (!(this.eq_s_b("c"))) break lab13;
                    break lab12;
                }
                this.slice_del();
                this.ket = this.c;
                if (!(this.eq_s_b("en"))) break lab12;
                this.bra = this.c;
                if (!this.#r_en_ending()) break lab12;
            }
            this.c = this.limit - v_13;
            const /**@type {number}*/ v_14 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab14: {
                this.ket = this.c;
                a = this.find_among_b(a_4);
                if (a === 0) break lab14;
                this.bra = this.c;
                switch (a) {
                    case 1: {
                        if (/**@type {boolean}*/(I_p2 > this.c)) break lab14;
                        this.slice_del();
                        // deno-lint-ignore no-unused-labels
                        lab15: {
                            const /**@type {number}*/ v_15 = this.limit - this.c;
                            // deno-lint-ignore no-unused-labels
                            lab16: {
                                this.ket = this.c;
                                if (!(this.eq_s_b("ig"))) break lab16;
                                this.bra = this.c;
                                if (/**@type {boolean}*/(I_p2 > this.c)) break lab16;
                                // deno-lint-ignore no-unused-labels
                                lab17: {
                                    if (!(this.eq_s_b("e"))) break lab17;
                                    break lab16;
                                }
                                this.slice_del();
                                break lab15;
                            }
                            this.c = this.limit - v_15;
                            if (!this.#r_undouble()) break lab14;
                        }
                        break;
                    }
                    case 2: {
                        if (/**@type {boolean}*/(I_p2 > this.c)) break lab14;
                        // deno-lint-ignore no-unused-labels
                        lab18: {
                            if (!(this.eq_s_b("e"))) break lab18;
                            break lab14;
                        }
                        this.slice_del();
                        break;
                    }
                    case 3: {
                        if (/**@type {boolean}*/(I_p2 > this.c)) break lab14;
                        this.slice_del();
                        if (!this.#r_e_ending()) break lab14;
                        break;
                    }
                    case 4: {
                        if (/**@type {boolean}*/(I_p2 > this.c)) break lab14;
                        this.slice_del();
                        break;
                    }
                    case 5: {
                        if (/**@type {boolean}*/(I_p2 > this.c)) break lab14;
                        if (!this.#B_e_found) break lab14;
                        this.slice_del();
                        break;
                    }
                }
            }
            this.c = this.limit - v_14;
            const /**@type {number}*/ v_16 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab19: {
                if (!(this.out_grouping_b(g_v_I, 73, 232))) break lab19;
                const /**@type {number}*/ v_17 = this.limit - this.c;
                if (this.find_among_b(a_5) === 0) break lab19;
                if (!(this.out_grouping_b(g_v, 97, 232))) break lab19;
                this.c = this.limit - v_17;
                this.ket = this.c;
                if (this.c <= this.limit_backward) break lab19;
                this.c--;
                this.bra = this.c;
                this.slice_del();
            }
            this.c = this.limit - v_16;
        }
        this.c = this.limit_backward;
        const /**@type {number}*/ v_18 = this.c;
        // deno-lint-ignore no-unused-labels
        lab20: {
            while (true) {
                const /**@type {number}*/ v_19 = this.c;
                // deno-lint-ignore no-unused-labels
                lab21: {
                    this.bra = this.c;
                    a = this.find_among(a_1);
                    this.ket = this.c;
                    switch (a) {
                        case 1: {
                            this.slice_from("y");
                            break;
                        }
                        case 2: {
                            this.slice_from("i");
                            break;
                        }
                        case 3: {
                            if (this.c >= this.limit) break lab21;
                            this.c++;
                            break;
                        }
                    }
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

