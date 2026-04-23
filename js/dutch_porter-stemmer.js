// Generated from dutch_porter.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["", -1, 6],
    ["\u00E1", 0, 1],
    ["\u00E4", 0, 1],
    ["\u00E9", 0, 2],
    ["\u00EB", 0, 2],
    ["\u00ED", 0, 3],
    ["\u00EF", 0, 3],
    ["\u00F3", 0, 4],
    ["\u00F6", 0, 4],
    ["\u00FA", 0, 5],
    ["\u00FC", 0, 5]
];

const a_1 = [
    ["", -1, 3],
    ["I", 0, 2],
    ["Y", 0, 1]
];

const a_2 = [
    ["dd", -1, -1],
    ["kk", -1, -1],
    ["tt", -1, -1]
];

const a_3 = [
    ["ene", -1, 2],
    ["se", -1, 3],
    ["en", -1, 2],
    ["heden", 2, 1],
    ["s", -1, 3]
];

const a_4 = [
    ["end", -1, 1],
    ["ig", -1, 2],
    ["ing", -1, 1],
    ["lijk", -1, 3],
    ["baar", -1, 4],
    ["bar", -1, 5]
];

const a_5 = [
    ["aa", -1, -1],
    ["ee", -1, -1],
    ["oo", -1, -1],
    ["uu", -1, -1]
];

const /** Array<number> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

const /** Array<number> */ g_v_I = [1, 0, 0, 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

const /** Array<number> */ g_v_j = [17, 67, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

import { BaseStemmer } from './base-stemmer.js'

export class DutchPorterStemmer extends BaseStemmer {

    #I_p2/** number */ = 0;
    #I_p1/** number */ = 0;
    #B_e_found/** boolean */ = false;


    /** @return {boolean} */
    #r_prelude() {
        let /** number */ a;
        const /** number */ v_1 = this.c;
        while (true) {
            const /** number */ v_2 = this.c;
            // deno-lint-ignore no-unused-labels
            lab0: {
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
                        if (this.c >= this.limit) break lab0;
                        this.c++;
                        break;
                    }
                }
                continue;
            }
            this.c = v_2;
            break;
        }
        this.c = v_1;
        const /** number */ v_3 = this.c;
        // deno-lint-ignore no-unused-labels
        lab1: {
            this.bra = this.c;
            if (!(this.eq_s("y"))) {
                this.c = v_3;
                break lab1;
            }
            this.ket = this.c;
            this.slice_from("Y");
        }
        while (true) {
            const /** number */ v_4 = this.c;
            // deno-lint-ignore no-unused-labels
            lab2: {
                if (!this.go_out_grouping(g_v, 97, 232)) break lab2;
                this.c++;
                const /** number */ v_5 = this.c;
                // deno-lint-ignore no-unused-labels
                lab3: {
                    this.bra = this.c;
                    // deno-lint-ignore no-unused-labels
                    lab4: {
                        const /** number */ v_6 = this.c;
                        // deno-lint-ignore no-unused-labels
                        lab5: {
                            if (!(this.eq_s("i"))) break lab5;
                            this.ket = this.c;
                            const /** number */ v_7 = this.c;
                            // deno-lint-ignore no-unused-labels
                            lab6: {
                                if (!(this.in_grouping(g_v, 97, 232))) break lab6;
                                this.slice_from("I");
                            }
                            this.c = v_7;
                            break lab4;
                        }
                        this.c = v_6;
                        if (!(this.eq_s("y"))) {
                            this.c = v_5;
                            break lab3;
                        }
                        this.ket = this.c;
                        this.slice_from("Y");
                    }
                }
                continue;
            }
            this.c = v_4;
            break;
        }
        return true;
    }

    /** @return {boolean} */
    #r_mark_regions() {
        let /** number */ I_x;
        this.#I_p1 = this.limit;
        this.#I_p2 = this.limit;
        const /** number */ v_1 = this.c;
        {
            const /** number */ c = this.c + 3;
            if (c > this.limit) return false;
            this.c = c;
        }
        I_x = this.c;
        this.c = v_1;
        if (!this.go_out_grouping(g_v, 97, 232)) return false;
        this.c++;
        if (!this.go_in_grouping(g_v, 97, 232)) return false;
        this.c++;
        this.#I_p1 = this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (this.#I_p1 >= I_x) break lab0;
            this.#I_p1 = I_x;
        }
        if (!this.go_out_grouping(g_v, 97, 232)) return false;
        this.c++;
        if (!this.go_in_grouping(g_v, 97, 232)) return false;
        this.c++;
        this.#I_p2 = this.c;
        return true;
    }

    /** @return {boolean} */
    #r_postlude() {
        let /** number */ a;
        while (true) {
            const /** number */ v_1 = this.c;
            // deno-lint-ignore no-unused-labels
            lab0: {
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
                        if (this.c >= this.limit) break lab0;
                        this.c++;
                        break;
                    }
                }
                continue;
            }
            this.c = v_1;
            break;
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
    #r_undouble() {
        const /** number */ v_1 = this.limit - this.c;
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
        if (!this.#r_R1()) return false;
        const /** number */ v_1 = this.limit - this.c;
        if (!(this.out_grouping_b(g_v, 97, 232))) return false;
        this.c = this.limit - v_1;
        this.slice_del();
        this.#B_e_found = true;
        return this.#r_undouble();
    }

    /** @return {boolean} */
    #r_en_ending() {
        if (!this.#r_R1()) return false;
        const /** number */ v_1 = this.limit - this.c;
        if (!(this.out_grouping_b(g_v, 97, 232))) return false;
        this.c = this.limit - v_1;
        {
            const /** number */ v_2 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab0: {
                if (!(this.eq_s_b("gem"))) break lab0;
                return false;
            }
            this.c = this.limit - v_2;
        }
        this.slice_del();
        return this.#r_undouble();
    }

    /** @return {boolean} */
    #r_standard_suffix() {
        let /** number */ a;
        const /** number */ v_1 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            this.ket = this.c;
            a = this.find_among_b(a_3);
            if (a === 0) break lab0;
            this.bra = this.c;
            switch (a) {
                case 1: {
                    if (!this.#r_R1()) break lab0;
                    this.slice_from("heid");
                    break;
                }
                case 2: {
                    if (!this.#r_en_ending()) break lab0;
                    break;
                }
                case 3: {
                    if (!this.#r_R1()) break lab0;
                    if (!(this.out_grouping_b(g_v_j, 97, 232))) break lab0;
                    this.slice_del();
                    break;
                }
            }
        }
        this.c = this.limit - v_1;
        const /** number */ v_2 = this.limit - this.c;
        this.#r_e_ending();
        this.c = this.limit - v_2;
        const /** number */ v_3 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab1: {
            this.ket = this.c;
            if (!(this.eq_s_b("heid"))) break lab1;
            this.bra = this.c;
            if (!this.#r_R2()) break lab1;
            {
                const /** number */ v_4 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab2: {
                    if (!(this.eq_s_b("c"))) break lab2;
                    break lab1;
                }
                this.c = this.limit - v_4;
            }
            this.slice_del();
            this.ket = this.c;
            if (!(this.eq_s_b("en"))) break lab1;
            this.bra = this.c;
            if (!this.#r_en_ending()) break lab1;
        }
        this.c = this.limit - v_3;
        const /** number */ v_5 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab3: {
            this.ket = this.c;
            a = this.find_among_b(a_4);
            if (a === 0) break lab3;
            this.bra = this.c;
            switch (a) {
                case 1: {
                    if (!this.#r_R2()) break lab3;
                    this.slice_del();
                    // deno-lint-ignore no-unused-labels
                    lab4: {
                        const /** number */ v_6 = this.limit - this.c;
                        // deno-lint-ignore no-unused-labels
                        lab5: {
                            this.ket = this.c;
                            if (!(this.eq_s_b("ig"))) break lab5;
                            this.bra = this.c;
                            if (!this.#r_R2()) break lab5;
                            {
                                const /** number */ v_7 = this.limit - this.c;
                                // deno-lint-ignore no-unused-labels
                                lab6: {
                                    if (!(this.eq_s_b("e"))) break lab6;
                                    break lab5;
                                }
                                this.c = this.limit - v_7;
                            }
                            this.slice_del();
                            break lab4;
                        }
                        this.c = this.limit - v_6;
                        if (!this.#r_undouble()) break lab3;
                    }
                    break;
                }
                case 2: {
                    if (!this.#r_R2()) break lab3;
                    {
                        const /** number */ v_8 = this.limit - this.c;
                        // deno-lint-ignore no-unused-labels
                        lab7: {
                            if (!(this.eq_s_b("e"))) break lab7;
                            break lab3;
                        }
                        this.c = this.limit - v_8;
                    }
                    this.slice_del();
                    break;
                }
                case 3: {
                    if (!this.#r_R2()) break lab3;
                    this.slice_del();
                    if (!this.#r_e_ending()) break lab3;
                    break;
                }
                case 4: {
                    if (!this.#r_R2()) break lab3;
                    this.slice_del();
                    break;
                }
                case 5: {
                    if (!this.#r_R2()) break lab3;
                    if (!this.#B_e_found) break lab3;
                    this.slice_del();
                    break;
                }
            }
        }
        this.c = this.limit - v_5;
        const /** number */ v_9 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab8: {
            if (!(this.out_grouping_b(g_v_I, 73, 232))) break lab8;
            const /** number */ v_10 = this.limit - this.c;
            if (this.find_among_b(a_5) === 0) break lab8;
            if (!(this.out_grouping_b(g_v, 97, 232))) break lab8;
            this.c = this.limit - v_10;
            this.ket = this.c;
            if (this.c <= this.limit_backward) break lab8;
            this.c--;
            this.bra = this.c;
            this.slice_del();
        }
        this.c = this.limit - v_9;
        return true;
    }

    /** @return {boolean} */
    #stem() {
        const /** number */ v_1 = this.c;
        this.#r_prelude();
        this.c = v_1;
        const /** number */ v_2 = this.c;
        this.#r_mark_regions();
        this.c = v_2;
        this.limit_backward = this.c; this.c = this.limit;
        this.#r_standard_suffix();
        this.c = this.limit_backward;
        const /** number */ v_3 = this.c;
        this.#r_postlude();
        this.c = v_3;
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

export default DutchPorterStemmer;
