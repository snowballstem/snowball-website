// Generated from porter.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["s", 3],
    ["ies", 2, 1],
    ["sses", 1, 2],
    ["ss", -1, 3]
];

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

const /** Array<string> */ as_3 = ["tion", "ence", "ance", "able", "ent", "e", "ize", "ate", "al", "ful", "ous", "ive", "ble"];

const a_4 = [
    ["icate", 2],
    ["ative", 3],
    ["alize", 1],
    ["iciti", 2],
    ["ical", 2],
    ["ful", 3],
    ["ness", 3]
];

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

const /** Array<number> */ g_v = [17, 65, 16, 1];

const /** Array<number> */ g_v_WXY = [1, 17, 65, 208, 1];

import B from './base-stemmer.js'

export default class extends B {

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
        return this.#I_p1 <= this.c;
    }

    /** @return {boolean} */
    #r_R2() {
        return this.#I_p2 <= this.c;
    }

    /** @return {boolean} */
    #r_Step_1a() {
        let /** number */ a;
        this.ket = this.c;
        a = this.find_among_b(a_0);
        if (a === 0) return false;
        this.bra = this.c;
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
        this.ket = this.c;
        a = this.find_among_b(a_2);
        if (a === 0) return false;
        this.bra = this.c;
        switch (a) {
            case 1: {
                if (!this.#r_R1()) return false;
                this.slice_from("ee");
                break;
            }
            case 2: {
                const /** number */ v_1 = this.limit - this.c;
                if (!this.go_out_grouping_b(g_v, 97, 121)) return false;
                this.c--;
                this.c = this.limit - v_1;
                this.slice_del();
                const /** number */ v_2 = this.limit - this.c;
                a = this.find_among_b(a_1);
                this.c = this.limit - v_2;
                switch (a) {
                    case 1: {
                        {
                            const /** number */ c = this.c;
                            this.insert(c, c, "e");
                            this.c = c;
                        }
                        break;
                    }
                    case 2: {
                        this.ket = this.c;
                        if (this.c <= this.limit_backward) return false;
                        this.c--;
                        this.bra = this.c;
                        this.slice_del();
                        break;
                    }
                    case 3: {
                        if (this.c !== this.#I_p1) return false;
                        const /** number */ v_3 = this.limit - this.c;
                        if (!this.#r_shortv()) return false;
                        this.c = this.limit - v_3;
                        {
                            const /** number */ c = this.c;
                            this.insert(c, c, "e");
                            this.c = c;
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
        if (!this.go_out_grouping_b(g_v, 97, 121)) return false;
        this.c--;
        this.slice_from("i");
        return true;
    }

    /** @return {boolean} */
    #r_Step_2() {
        let /** number */ a;
        this.ket = this.c;
        a = this.find_among_b(a_3);
        if (a === 0) return false;
        this.bra = this.c;
        if (!this.#r_R1()) return false;
        this.slice_from(as_3[a - 1]);
        return true;
    }

    /** @return {boolean} */
    #r_Step_3() {
        let /** number */ a;
        this.ket = this.c;
        a = this.find_among_b(a_4);
        if (a === 0) return false;
        this.bra = this.c;
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
        this.ket = this.c;
        a = this.find_among_b(a_5);
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
    #r_Step_5a() {
        this.ket = this.c;
        if (!(this.eq_s_b("e"))) return false;
        this.bra = this.c;
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
        return true;
    }

    /** @return {boolean} */
    #r_Step_5b() {
        this.ket = this.c;
        if (!(this.eq_s_b("l"))) return false;
        this.bra = this.c;
        if (!this.#r_R2()) return false;
        if (!(this.eq_s_b("l"))) return false;
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #stem() {
        let /** boolean */ B_Y_found;
        B_Y_found = false;
        const /** number */ v_1 = this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            this.bra = this.c;
            if (!(this.eq_s("y"))) break lab0;
            this.ket = this.c;
            this.slice_from("Y");
            B_Y_found = true;
        }
        this.c = v_1;
        const /** number */ v_2 = this.c;
        // deno-lint-ignore no-unused-labels
        lab1: {
            while (true) {
                const /** number */ v_3 = this.c;
                // deno-lint-ignore no-unused-labels
                lab2: {
                    // deno-lint-ignore no-unused-labels
                    golab3: while (true)
                    {
                        const /** number */ v_4 = this.c;
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
        this.#I_p1 = this.limit;
        this.#I_p2 = this.limit;
        const /** number */ v_5 = this.c;
        // deno-lint-ignore no-unused-labels
        lab5: {
            if (!this.go_out_grouping(g_v, 97, 121)) break lab5;
            this.c++;
            if (!this.go_in_grouping(g_v, 97, 121)) break lab5;
            this.c++;
            this.#I_p1 = this.c;
            if (!this.go_out_grouping(g_v, 97, 121)) break lab5;
            this.c++;
            if (!this.go_in_grouping(g_v, 97, 121)) break lab5;
            this.c++;
            this.#I_p2 = this.c;
        }
        this.c = v_5;
        this.limit_backward = this.c; this.c = this.limit;
        const /** number */ v_6 = this.limit - this.c;
        this.#r_Step_1a();
        this.c = this.limit - v_6;
        const /** number */ v_7 = this.limit - this.c;
        this.#r_Step_1b();
        this.c = this.limit - v_7;
        const /** number */ v_8 = this.limit - this.c;
        this.#r_Step_1c();
        this.c = this.limit - v_8;
        const /** number */ v_9 = this.limit - this.c;
        this.#r_Step_2();
        this.c = this.limit - v_9;
        const /** number */ v_10 = this.limit - this.c;
        this.#r_Step_3();
        this.c = this.limit - v_10;
        const /** number */ v_11 = this.limit - this.c;
        this.#r_Step_4();
        this.c = this.limit - v_11;
        const /** number */ v_12 = this.limit - this.c;
        this.#r_Step_5a();
        this.c = this.limit - v_12;
        const /** number */ v_13 = this.limit - this.c;
        this.#r_Step_5b();
        this.c = this.limit - v_13;
        this.c = this.limit_backward;
        const /** number */ v_14 = this.c;
        // deno-lint-ignore no-unused-labels
        lab6: {
            if (!B_Y_found) break lab6;
            while (true) {
                const /** number */ v_15 = this.c;
                // deno-lint-ignore no-unused-labels
                lab7: {
                    // deno-lint-ignore no-unused-labels
                    golab8: while (true)
                    {
                        const /** number */ v_16 = this.c;
                        // deno-lint-ignore no-unused-labels
                        lab9: {
                            this.bra = this.c;
                            if (!(this.eq_s("Y"))) break lab9;
                            this.ket = this.c;
                            this.c = v_16;
                            break golab8;
                        }
                        this.c = v_16;
                        if (this.c >= this.limit) break lab7;
                        this.c++;
                    }
                    this.slice_from("y");
                    continue;
                }
                this.c = v_15;
                break;
            }
        }
        this.c = v_14;
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

