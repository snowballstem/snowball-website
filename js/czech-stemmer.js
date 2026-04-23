// Generated from czech.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["c", -1, 1],
    ["nc", 0, -1],
    ["\u00EDnc", 1, 2],
    ["avc", 0, -1],
    ["ovc", 0, -1]
];

const a_1 = [
    ["c", -1, 1],
    ["nc", 0, -1],
    ["\u00EDnc", 1, 2],
    ["avc", 0, -1],
    ["ovc", 0, -1],
    ["\u010Dt", -1, 3],
    ["\u0161t", -1, 4],
    ["de\u0161t", 6, -1],
    ["le\u0161t", 6, -1],
    ["i\u0161t", 6, -1],
    ["pou\u0161t", 6, -1],
    ["\u00E1\u0161t", 6, -1],
    ["\u00ED\u0161t", 6, -1]
];

const a_2 = [
    ["in", -1, 2],
    ["ov", -1, 1],
    ["\u016Fv", -1, 1]
];

const a_3 = [
    ["", -1, 2],
    ["l", 0, 1],
    ["tl", 1, 2],
    ["s", 0, 1],
    ["es", 3, 2],
    ["\u010D", 0, 1],
    ["e\u010D", 5, 2],
    ["\u0159", 0, 1],
    ["\u017E", 0, 1]
];

const a_4 = [
    ["obl", -1, -1],
    ["sn", -1, -1],
    ["dot", -1, -1]
];

const a_5 = [
    ["uc", -1, -1],
    ["h", -1, -1],
    ["ok", -1, -1],
    ["kar", -1, -1],
    ["\u010D", -1, -1]
];

const a_6 = [
    ["a", -1, 1],
    ["ama", 0, 1],
    ["ata", 0, 1],
    ["eb", -1, 4],
    ["ec", -1, 5],
    ["e", -1, 2],
    ["ete", 5, 3],
    ["\u011Bte", 5, 1],
    ["ech", -1, 2],
    ["atech", 8, 1],
    ["\u00E1ch", -1, 1],
    ["\u00EDch", -1, 12],
    ["\u00FDch", -1, 1],
    ["i", -1, 12],
    ["mi", 13, 1],
    ["ami", 14, 1],
    ["emi", 14, 2],
    ["\u00EDmi", 14, 12],
    ["\u00FDmi", 14, 1],
    ["\u011Bmi", 14, 1],
    ["\u0165mi", 14, 11],
    ["eti", 13, 3],
    ["\u011Bti", 13, 1],
    ["ovi", 13, 1],
    ["ek", -1, 6],
    ["\u011Bk", -1, 7],
    ["em", -1, 2],
    ["etem", 26, 3],
    ["\u011Btem", 26, 1],
    ["\u00E1m", -1, 1],
    ["\u00E9m", -1, 1],
    ["\u00EDm", -1, 12],
    ["\u00FDm", -1, 1],
    ["\u011Bm", -1, 1],
    ["\u016Fm", -1, 1],
    ["at\u016Fm", 34, 1],
    ["o", -1, 1],
    ["\u00E9ho", 36, 1],
    ["\u00EDho", 36, 12],
    ["us", -1, 1],
    ["at", -1, 1],
    ["et", -1, 9],
    ["u", -1, 1],
    ["\u00E9mu", 42, 1],
    ["\u00EDmu", 42, 12],
    ["ou", 42, 1],
    ["ev", -1, 10],
    ["y", -1, 1],
    ["aty", 47, 1],
    ["\u00E1", -1, 1],
    ["\u00E9", -1, 1],
    ["ov\u00E9", 50, 1],
    ["\u00ED", -1, 12],
    ["\u00FD", -1, 1],
    ["\u011B", -1, 1],
    ["e\u0148", -1, 8],
    ["\u0165", -1, 11],
    ["\u016F", -1, 1]
];

const /** Array<number> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 18, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64];

const /** Array<number> */ g_v_or_syllabic_c = [17, 73, 18, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 18, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64];

const /** Array<number> */ g_ev_ending = [73, 20, 4];

const /** Array<number> */ g_env_ending = [71, 66, 23, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 16];

import B from './base-stemmer.js'

export default class extends B {

    #I_p1/** number */ = 0;


    /** @return {boolean} */
    #r_mark_regions() {
        let /** number */ I_x;
        const /** number */ v_1 = this.c;
        {
            const /** number */ c = this.c + 3;
            if (c > this.limit) return false;
            this.c = c;
        }
        I_x = this.c;
        this.c = v_1;
        this.#I_p1 = this.limit;
        const /** number */ v_2 = this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            // deno-lint-ignore no-unused-labels
            lab1: {
                const /** number */ v_3 = this.c;
                // deno-lint-ignore no-unused-labels
                lab2: {
                    if (!(this.in_grouping(g_v, 97, 367))) break lab2;
                    break lab1;
                }
                this.c = v_3;
                if (this.c >= this.limit) break lab0;
                this.c++;
                if (!this.go_out_grouping(g_v_or_syllabic_c, 97, 367)) break lab0;
                this.c++;
            }
            if (!this.go_in_grouping(g_v, 97, 367)) break lab0;
            this.c++;
            this.#I_p1 = this.c;
            // deno-lint-ignore no-unused-labels
            lab3: {
                if (this.#I_p1 >= I_x) break lab3;
                this.#I_p1 = I_x;
            }
        }
        this.c = v_2;
        return true;
    }

    /** @return {boolean} */
    #r_R1() {
        return this.#I_p1 <= this.c;
    }

    /** @return {boolean} */
    #r_palatalise_e() {
        let /** number */ a;
        this.ket = this.c;
        a = this.find_among_b(a_0);
        if (a === 0) return false;
        this.bra = this.c;
        switch (a) {
            case 1: {
                this.slice_from("k");
                break;
            }
            case 2: {
                this.slice_from("\u00EDnk");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_palatalise_i() {
        let /** number */ a;
        this.ket = this.c;
        a = this.find_among_b(a_1);
        if (a === 0) return false;
        this.bra = this.c;
        switch (a) {
            case 1: {
                this.slice_from("k");
                break;
            }
            case 2: {
                this.slice_from("\u00EDnk");
                break;
            }
            case 3: {
                this.slice_from("ck");
                break;
            }
            case 4: {
                this.slice_from("sk");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_possessive_suffix() {
        let /** number */ a;
        this.ket = this.c;
        a = this.find_among_b(a_2);
        if (a === 0) return false;
        this.bra = this.c;
        if (!this.#r_R1()) return false;
        switch (a) {
            case 1: {
                this.slice_del();
                break;
            }
            case 2: {
                this.slice_del();
                const /** number */ v_1 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab0: {
                    if (!this.#r_palatalise_i()) {
                        this.c = this.limit - v_1;
                        break lab0;
                    }
                }
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_case_suffix() {
        let /** number */ a;
        if (this.c < this.#I_p1) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        this.ket = this.c;
        a = this.find_among_b(a_6);
        if (a === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.c;
        this.limit_backward = v_1;
        switch (a) {
            case 1: {
                this.slice_del();
                break;
            }
            case 2: {
                this.slice_del();
                const /** number */ v_2 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab0: {
                    if (!this.#r_palatalise_e()) {
                        this.c = this.limit - v_2;
                        break lab0;
                    }
                }
                break;
            }
            case 3: {
                a = this.find_among_b(a_3);
                switch (a) {
                    case 1: {
                        this.slice_del();
                        break;
                    }
                    case 2: {
                        this.slice_from("et");
                        break;
                    }
                }
                break;
            }
            case 4: {
                const /** number */ v_3 = this.limit - this.c;
                if (!(this.out_grouping_b(g_v, 97, 367))) return false;
                this.c = this.limit - v_3;
                {
                    const /** number */ v_4 = this.limit - this.c;
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        if (!(this.eq_s_b("t\u0159"))) break lab1;
                        return false;
                    }
                    this.c = this.limit - v_4;
                }
                this.slice_from("b");
                break;
            }
            case 5: {
                const /** number */ v_5 = this.limit - this.c;
                if (!(this.out_grouping_b(g_v, 97, 367))) return false;
                this.c = this.limit - v_5;
                this.slice_del();
                this.insert(this.c, this.c, "c");
                const /** number */ v_6 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab2: {
                    if (!this.#r_palatalise_e()) {
                        this.c = this.limit - v_6;
                        break lab2;
                    }
                }
                break;
            }
            case 6: {
                const /** number */ v_7 = this.limit - this.c;
                if (!(this.out_grouping_b(g_v, 97, 367))) return false;
                this.c = this.limit - v_7;
                {
                    const /** number */ v_8 = this.limit - this.c;
                    // deno-lint-ignore no-unused-labels
                    lab3: {
                        if (this.find_among_b(a_4) === 0) break lab3;
                        return false;
                    }
                    this.c = this.limit - v_8;
                }
                this.slice_from("k");
                break;
            }
            case 7: {
                if (!(this.eq_s_b("n"))) return false;
                this.bra = this.c;
                this.slice_from("\u0148k");
                break;
            }
            case 8: {
                const /** number */ v_9 = this.limit - this.c;
                if (!(this.in_grouping_b(g_env_ending, 98, 382))) return false;
                this.c = this.limit - v_9;
                this.slice_from("n");
                break;
            }
            case 9: {
                if (this.find_among_b(a_5) === 0) return false;
                this.slice_from("t");
                break;
            }
            case 10: {
                if (!(this.in_grouping_b(g_ev_ending, 104, 122))) return false;
                this.slice_from("v");
                break;
            }
            case 11: {
                this.slice_from("t");
                break;
            }
            case 12: {
                this.slice_del();
                const /** number */ v_10 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab4: {
                    if (!this.#r_palatalise_i()) {
                        this.c = this.limit - v_10;
                        break lab4;
                    }
                }
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #stem() {
        if (!this.#r_mark_regions()) return false;
        this.limit_backward = this.c; this.c = this.limit;
        const /** number */ v_1 = this.limit - this.c;
        this.#r_case_suffix();
        this.c = this.limit - v_1;
        const /** number */ v_2 = this.limit - this.c;
        this.#r_possessive_suffix();
        this.c = this.limit - v_2;
        this.c = this.limit_backward;
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

