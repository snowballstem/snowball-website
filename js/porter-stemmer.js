// Generated from porter.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["s", -1, 3],
    ["ies", 0, 2],
    ["sses", 0, 1],
    ["ss", 0, -1]
];

const a_1 = [
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

const a_2 = [
    ["ed", -1, 2],
    ["eed", 0, 1],
    ["ing", -1, 2]
];

const a_3 = [
    ["anci", -1, 3],
    ["enci", -1, 2],
    ["abli", -1, 4],
    ["eli", -1, 6],
    ["alli", -1, 9],
    ["ousli", -1, 11],
    ["entli", -1, 5],
    ["aliti", -1, 9],
    ["biliti", -1, 13],
    ["iviti", -1, 12],
    ["tional", -1, 1],
    ["ational", 10, 8],
    ["alism", -1, 9],
    ["ation", -1, 8],
    ["ization", 13, 7],
    ["izer", -1, 7],
    ["ator", -1, 8],
    ["iveness", -1, 12],
    ["fulness", -1, 10],
    ["ousness", -1, 11]
];

const a_4 = [
    ["icate", -1, 2],
    ["ative", -1, 3],
    ["alize", -1, 1],
    ["iciti", -1, 2],
    ["ical", -1, 2],
    ["ful", -1, 3],
    ["ness", -1, 3]
];

const a_5 = [
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
    ["ement", 16, 1],
    ["ou", -1, 1]
];

const /** Array<number> */ g_v = [17, 65, 16, 1];

const /** Array<number> */ g_v_WXY = [1, 17, 65, 208, 1];

import { BaseStemmer } from './base-stemmer.js'

export class PorterStemmer extends BaseStemmer {

    #I_p2/** number */ = 0;
    #I_p1/** number */ = 0;


    /** @return {boolean} */
    #r_shortv() {
        if (!(this.out_grouping_b(g_v_WXY, 89, 121))) return false;
        if (!(this.in_grouping_b(g_v, 97, 121))) return false;
        return this.out_grouping_b(g_v, 97, 121);
    }

    /** @return {boolean} */
    #r_R1() {
        return this.#I_p1 <= this.cursor;
    }

    /** @return {boolean} */
    #r_R2() {
        return this.#I_p2 <= this.cursor;
    }

    /** @return {boolean} */
    #r_Step_1a() {
        let /** number */ a;
        this.ket = this.cursor;
        a = this.find_among_b(a_0);
        if (a === 0) return false;
        this.bra = this.cursor;
        switch (a) {
            case 1: {
                this.slice_from("ss");
                break;
            }
            case 2: {
                this.slice_from("i");
                break;
            }
            case 3: {
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_1b() {
        let /** number */ a;
        this.ket = this.cursor;
        a = this.find_among_b(a_2);
        if (a === 0) return false;
        this.bra = this.cursor;
        switch (a) {
            case 1: {
                if (!this.#r_R1()) return false;
                this.slice_from("ee");
                break;
            }
            case 2: {
                const /** number */ v_1 = this.limit - this.cursor;
                if (!this.go_out_grouping_b(g_v, 97, 121)) return false;
                this.cursor--;
                this.cursor = this.limit - v_1;
                this.slice_del();
                const /** number */ v_2 = this.limit - this.cursor;
                a = this.find_among_b(a_1);
                this.cursor = this.limit - v_2;
                switch (a) {
                    case 1: {
                        {
                            const /** number */ c = this.cursor;
                            this.insert(c, c, "e");
                            this.cursor = c;
                        }
                        break;
                    }
                    case 2: {
                        this.ket = this.cursor;
                        if (this.cursor <= this.limit_backward) return false;
                        this.cursor--;
                        this.bra = this.cursor;
                        this.slice_del();
                        break;
                    }
                    case 3: {
                        if (this.cursor !== this.#I_p1) return false;
                        const /** number */ v_3 = this.limit - this.cursor;
                        if (!this.#r_shortv()) return false;
                        this.cursor = this.limit - v_3;
                        {
                            const /** number */ c = this.cursor;
                            this.insert(c, c, "e");
                            this.cursor = c;
                        }
                        break;
                    }
                }
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_1c() {
        this.ket = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_1 = this.limit - this.cursor;
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!(this.eq_s_b("y"))) break lab1;
                break lab0;
            }
            this.cursor = this.limit - v_1;
            if (!(this.eq_s_b("Y"))) return false;
        }
        this.bra = this.cursor;
        if (!this.go_out_grouping_b(g_v, 97, 121)) return false;
        this.cursor--;
        this.slice_from("i");
        return true;
    }

    /** @return {boolean} */
    #r_Step_2() {
        let /** number */ a;
        this.ket = this.cursor;
        a = this.find_among_b(a_3);
        if (a === 0) return false;
        this.bra = this.cursor;
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
                this.slice_from("e");
                break;
            }
            case 7: {
                this.slice_from("ize");
                break;
            }
            case 8: {
                this.slice_from("ate");
                break;
            }
            case 9: {
                this.slice_from("al");
                break;
            }
            case 10: {
                this.slice_from("ful");
                break;
            }
            case 11: {
                this.slice_from("ous");
                break;
            }
            case 12: {
                this.slice_from("ive");
                break;
            }
            case 13: {
                this.slice_from("ble");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_3() {
        let /** number */ a;
        this.ket = this.cursor;
        a = this.find_among_b(a_4);
        if (a === 0) return false;
        this.bra = this.cursor;
        if (!this.#r_R1()) return false;
        switch (a) {
            case 1: {
                this.slice_from("al");
                break;
            }
            case 2: {
                this.slice_from("ic");
                break;
            }
            case 3: {
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_4() {
        let /** number */ a;
        this.ket = this.cursor;
        a = this.find_among_b(a_5);
        if (a === 0) return false;
        this.bra = this.cursor;
        if (!this.#r_R2()) return false;
        switch (a) {
            case 1: {
                this.slice_del();
                break;
            }
            case 2: {
                // deno-lint-ignore no-unused-labels
                lab0: {
                    const /** number */ v_1 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        if (!(this.eq_s_b("s"))) break lab1;
                        break lab0;
                    }
                    this.cursor = this.limit - v_1;
                    if (!(this.eq_s_b("t"))) return false;
                }
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_5a() {
        this.ket = this.cursor;
        if (!(this.eq_s_b("e"))) return false;
        this.bra = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab0: {
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!this.#r_R2()) break lab1;
                break lab0;
            }
            if (!this.#r_R1()) return false;
            {
                const /** number */ v_1 = this.limit - this.cursor;
                // deno-lint-ignore no-unused-labels
                lab2: {
                    if (!this.#r_shortv()) break lab2;
                    return false;
                }
                this.cursor = this.limit - v_1;
            }
        }
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #r_Step_5b() {
        this.ket = this.cursor;
        if (!(this.eq_s_b("l"))) return false;
        this.bra = this.cursor;
        if (!this.#r_R2()) return false;
        if (!(this.eq_s_b("l"))) return false;
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #stem() {
        let /** boolean */ B_Y_found;
        B_Y_found = false;
        const /** number */ v_1 = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab0: {
            this.bra = this.cursor;
            if (!(this.eq_s("y"))) break lab0;
            this.ket = this.cursor;
            this.slice_from("Y");
            B_Y_found = true;
        }
        this.cursor = v_1;
        const /** number */ v_2 = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab1: {
            while (true) {
                const /** number */ v_3 = this.cursor;
                // deno-lint-ignore no-unused-labels
                lab2: {
                    // deno-lint-ignore no-unused-labels
                    golab3: while (true)
                    {
                        const /** number */ v_4 = this.cursor;
                        // deno-lint-ignore no-unused-labels
                        lab4: {
                            if (!(this.in_grouping(g_v, 97, 121))) break lab4;
                            this.bra = this.cursor;
                            if (!(this.eq_s("y"))) break lab4;
                            this.ket = this.cursor;
                            this.cursor = v_4;
                            break golab3;
                        }
                        this.cursor = v_4;
                        if (this.cursor >= this.limit) break lab2;
                        this.cursor++;
                    }
                    this.slice_from("Y");
                    B_Y_found = true;
                    continue;
                }
                this.cursor = v_3;
                break;
            }
        }
        this.cursor = v_2;
        this.#I_p1 = this.limit;
        this.#I_p2 = this.limit;
        const /** number */ v_5 = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab5: {
            if (!this.go_out_grouping(g_v, 97, 121)) break lab5;
            this.cursor++;
            if (!this.go_in_grouping(g_v, 97, 121)) break lab5;
            this.cursor++;
            this.#I_p1 = this.cursor;
            if (!this.go_out_grouping(g_v, 97, 121)) break lab5;
            this.cursor++;
            if (!this.go_in_grouping(g_v, 97, 121)) break lab5;
            this.cursor++;
            this.#I_p2 = this.cursor;
        }
        this.cursor = v_5;
        this.limit_backward = this.cursor; this.cursor = this.limit;
        const /** number */ v_6 = this.limit - this.cursor;
        this.#r_Step_1a();
        this.cursor = this.limit - v_6;
        const /** number */ v_7 = this.limit - this.cursor;
        this.#r_Step_1b();
        this.cursor = this.limit - v_7;
        const /** number */ v_8 = this.limit - this.cursor;
        this.#r_Step_1c();
        this.cursor = this.limit - v_8;
        const /** number */ v_9 = this.limit - this.cursor;
        this.#r_Step_2();
        this.cursor = this.limit - v_9;
        const /** number */ v_10 = this.limit - this.cursor;
        this.#r_Step_3();
        this.cursor = this.limit - v_10;
        const /** number */ v_11 = this.limit - this.cursor;
        this.#r_Step_4();
        this.cursor = this.limit - v_11;
        const /** number */ v_12 = this.limit - this.cursor;
        this.#r_Step_5a();
        this.cursor = this.limit - v_12;
        const /** number */ v_13 = this.limit - this.cursor;
        this.#r_Step_5b();
        this.cursor = this.limit - v_13;
        this.cursor = this.limit_backward;
        const /** number */ v_14 = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab6: {
            if (!B_Y_found) break lab6;
            while (true) {
                const /** number */ v_15 = this.cursor;
                // deno-lint-ignore no-unused-labels
                lab7: {
                    // deno-lint-ignore no-unused-labels
                    golab8: while (true)
                    {
                        const /** number */ v_16 = this.cursor;
                        // deno-lint-ignore no-unused-labels
                        lab9: {
                            this.bra = this.cursor;
                            if (!(this.eq_s("Y"))) break lab9;
                            this.ket = this.cursor;
                            this.cursor = v_16;
                            break golab8;
                        }
                        this.cursor = v_16;
                        if (this.cursor >= this.limit) break lab7;
                        this.cursor++;
                    }
                    this.slice_from("y");
                    continue;
                }
                this.cursor = v_15;
                break;
            }
        }
        this.cursor = v_14;
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

export default PorterStemmer;
