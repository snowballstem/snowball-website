// Generated from esperanto.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["", -1, 14],
    ["-", 0, 13],
    ["cx", 0, 1],
    ["gx", 0, 2],
    ["hx", 0, 3],
    ["jx", 0, 4],
    ["q", 0, 12],
    ["sx", 0, 5],
    ["ux", 0, 6],
    ["w", 0, 12],
    ["x", 0, 12],
    ["y", 0, 12],
    ["\u00E1", 0, 7],
    ["\u00E9", 0, 8],
    ["\u00ED", 0, 9],
    ["\u00F3", 0, 10],
    ["\u00FA", 0, 11]
];

const a_1 = [
    ["as", -1, -1],
    ["i", -1, -1],
    ["is", 1, -1],
    ["os", -1, -1],
    ["u", -1, -1],
    ["us", 4, -1]
];

const a_2 = [
    ["ci", -1, -1],
    ["gi", -1, -1],
    ["hi", -1, -1],
    ["li", -1, -1],
    ["ili", 3, -1],
    ["\u015Dli", 3, -1],
    ["mi", -1, -1],
    ["ni", -1, -1],
    ["oni", 7, -1],
    ["ri", -1, -1],
    ["si", -1, -1],
    ["vi", -1, -1],
    ["ivi", 11, -1],
    ["\u011Di", -1, -1],
    ["\u015Di", -1, -1],
    ["i\u015Di", 14, -1],
    ["mal\u015Di", 14, -1]
];

const a_3 = [
    ["amb", -1, -1],
    ["bald", -1, -1],
    ["malbald", 1, -1],
    ["morg", -1, -1],
    ["postmorg", 3, -1],
    ["adi", -1, -1],
    ["hodi", -1, -1],
    ["ank", -1, -1],
    ["\u0109irk", -1, -1],
    ["tut\u0109irk", 8, -1],
    ["presk", -1, -1],
    ["almen", -1, -1],
    ["apen", -1, -1],
    ["hier", -1, -1],
    ["anta\u016Dhier", 13, -1],
    ["malgr", -1, -1],
    ["ankor", -1, -1],
    ["kontr", -1, -1],
    ["anstat", -1, -1],
    ["kvaz", -1, -1]
];

const a_4 = [
    ["aliu", -1, -1],
    ["unu", -1, -1]
];

const a_5 = [
    ["aha", -1, -1],
    ["haha", 0, -1],
    ["haleluja", -1, -1],
    ["hola", -1, -1],
    ["hosana", -1, -1],
    ["maltra", -1, -1],
    ["hura", -1, -1],
    ["\u0125a\u0125a", -1, -1],
    ["ekde", -1, -1],
    ["elde", -1, -1],
    ["disde", -1, -1],
    ["ehe", -1, -1],
    ["maltre", -1, -1],
    ["dirlididi", -1, -1],
    ["malpli", -1, -1],
    ["mal\u0109i", -1, -1],
    ["malkaj", -1, -1],
    ["amen", -1, -1],
    ["tamen", 17, -1],
    ["oho", -1, -1],
    ["maltro", -1, -1],
    ["minus", -1, -1],
    ["uhu", -1, -1],
    ["muu", -1, -1]
];

const a_6 = [
    ["tri", -1, -1],
    ["du", -1, -1],
    ["unu", -1, -1]
];

const a_7 = [
    ["dek", -1, -1],
    ["cent", -1, -1]
];

const a_8 = [
    ["k", -1, -1],
    ["kelk", 0, -1],
    ["nen", -1, -1],
    ["t", -1, -1],
    ["mult", 3, -1],
    ["samt", 3, -1],
    ["\u0109", -1, -1]
];

const a_9 = [
    ["a", -1, -1],
    ["e", -1, -1],
    ["i", -1, -1],
    ["j", -1, 1],
    ["aj", 3, -1],
    ["oj", 3, -1],
    ["n", -1, 1],
    ["an", 6, -1],
    ["en", 6, -1],
    ["jn", 6, 1],
    ["ajn", 9, -1],
    ["ojn", 9, -1],
    ["on", 6, -1],
    ["o", -1, -1],
    ["as", -1, -1],
    ["is", -1, -1],
    ["os", -1, -1],
    ["us", -1, -1],
    ["u", -1, -1]
];

const /** Array<number> */ g_vowel = [17, 65, 16];

const /** Array<number> */ g_aou = [1, 64, 16];

const /** Array<number> */ g_digit = [255, 3];

import { BaseStemmer } from './base-stemmer.js'

export default class extends BaseStemmer {


    /** @return {boolean} */
    #r_canonical_form() {
        let /** number */ a;
        let /** boolean */ B_foreign;
        B_foreign = false;
        while (true) {
            const /** number */ v_1 = this.c;
            // deno-lint-ignore no-unused-labels
            lab0: {
                this.bra = this.c;
                a = this.find_among(a_0);
                this.ket = this.c;
                switch (a) {
                    case 1: {
                        this.slice_from("\u0109");
                        break;
                    }
                    case 2: {
                        this.slice_from("\u011D");
                        break;
                    }
                    case 3: {
                        this.slice_from("\u0125");
                        break;
                    }
                    case 4: {
                        this.slice_from("\u0135");
                        break;
                    }
                    case 5: {
                        this.slice_from("\u015D");
                        break;
                    }
                    case 6: {
                        this.slice_from("\u016D");
                        break;
                    }
                    case 7: {
                        this.slice_from("a");
                        B_foreign = true;
                        break;
                    }
                    case 8: {
                        this.slice_from("e");
                        B_foreign = true;
                        break;
                    }
                    case 9: {
                        this.slice_from("i");
                        B_foreign = true;
                        break;
                    }
                    case 10: {
                        this.slice_from("o");
                        B_foreign = true;
                        break;
                    }
                    case 11: {
                        this.slice_from("u");
                        B_foreign = true;
                        break;
                    }
                    case 12: {
                        B_foreign = true;
                        break;
                    }
                    case 13: {
                        B_foreign = false;
                        break;
                    }
                    case 14: {
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
        return !B_foreign;
    }

    /** @return {boolean} */
    #r_initial_apostrophe() {
        this.bra = this.c;
        if (!(this.eq_s("'"))) return false;
        this.ket = this.c;
        if (!(this.eq_s("st"))) return false;
        if (this.find_among(a_1) === 0) return false;
        if (this.c < this.limit) return false;
        this.slice_from("e");
        return true;
    }

    /** @return {boolean} */
    #r_pronoun() {
        this.ket = this.c;
        const /** number */ v_1 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (!(this.eq_s_b("n"))) {
                this.c = this.limit - v_1;
                break lab0;
            }
        }
        this.bra = this.c;
        if (this.find_among_b(a_2) === 0) return false;
        // deno-lint-ignore no-unused-labels
        lab1: {
            const /** number */ v_2 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab2: {
                if (this.c > this.limit_backward) break lab2;
                break lab1;
            }
            this.c = this.limit - v_2;
            if (!(this.eq_s_b("-"))) return false;
        }
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #r_final_apostrophe() {
        this.ket = this.c;
        if (!(this.eq_s_b("'"))) return false;
        this.bra = this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_1 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!(this.eq_s_b("l"))) break lab1;
                if (this.c > this.limit_backward) break lab1;
                this.slice_from("a");
                break lab0;
            }
            this.c = this.limit - v_1;
            // deno-lint-ignore no-unused-labels
            lab2: {
                if (!(this.eq_s_b("un"))) break lab2;
                if (this.c > this.limit_backward) break lab2;
                this.slice_from("u");
                break lab0;
            }
            this.c = this.limit - v_1;
            // deno-lint-ignore no-unused-labels
            lab3: {
                if (this.find_among_b(a_3) === 0) break lab3;
                // deno-lint-ignore no-unused-labels
                lab4: {
                    const /** number */ v_2 = this.limit - this.c;
                    // deno-lint-ignore no-unused-labels
                    lab5: {
                        if (this.c > this.limit_backward) break lab5;
                        break lab4;
                    }
                    this.c = this.limit - v_2;
                    if (!(this.eq_s_b("-"))) break lab3;
                }
                this.slice_from("a\u016D");
                break lab0;
            }
            this.c = this.limit - v_1;
            this.slice_from("o");
        }
        return true;
    }

    /** @return {boolean} */
    #r_ujn_suffix() {
        this.ket = this.c;
        const /** number */ v_1 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (!(this.eq_s_b("n"))) {
                this.c = this.limit - v_1;
                break lab0;
            }
        }
        const /** number */ v_2 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab1: {
            if (!(this.eq_s_b("j"))) {
                this.c = this.limit - v_2;
                break lab1;
            }
        }
        this.bra = this.c;
        if (this.find_among_b(a_4) === 0) return false;
        // deno-lint-ignore no-unused-labels
        lab2: {
            const /** number */ v_3 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab3: {
                if (this.c > this.limit_backward) break lab3;
                break lab2;
            }
            this.c = this.limit - v_3;
            if (!(this.eq_s_b("-"))) return false;
        }
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #r_uninflected() {
        if (this.find_among_b(a_5) === 0) return false;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_1 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (this.c > this.limit_backward) break lab1;
                break lab0;
            }
            this.c = this.limit - v_1;
            if (!(this.eq_s_b("-"))) return false;
        }
        return true;
    }

    /** @return {boolean} */
    #r_merged_numeral() {
        if (this.find_among_b(a_6) === 0) return false;
        return this.find_among_b(a_7) !== 0;
    }

    /** @return {boolean} */
    #r_correlative() {
        this.ket = this.c;
        this.bra = this.c;
        const /** number */ v_1 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_2 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab1: {
                const /** number */ v_3 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab2: {
                    if (!(this.eq_s_b("n"))) {
                        this.c = this.limit - v_3;
                        break lab2;
                    }
                }
                this.bra = this.c;
                if (!(this.eq_s_b("e"))) break lab1;
                break lab0;
            }
            this.c = this.limit - v_2;
            const /** number */ v_4 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab3: {
                if (!(this.eq_s_b("n"))) {
                    this.c = this.limit - v_4;
                    break lab3;
                }
            }
            const /** number */ v_5 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab4: {
                if (!(this.eq_s_b("j"))) {
                    this.c = this.limit - v_5;
                    break lab4;
                }
            }
            this.bra = this.c;
            if (!(this.in_grouping_b(g_aou, 97, 117))) return false;
        }
        if (!(this.eq_s_b("i"))) return false;
        const /** number */ v_6 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab5: {
            if (this.find_among_b(a_8) === 0) {
                this.c = this.limit - v_6;
                break lab5;
            }
        }
        // deno-lint-ignore no-unused-labels
        lab6: {
            const /** number */ v_7 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab7: {
                if (this.c > this.limit_backward) break lab7;
                break lab6;
            }
            this.c = this.limit - v_7;
            if (!(this.eq_s_b("-"))) return false;
        }
        this.c = this.limit - v_1;
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #r_long_word() {
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_1 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab1: {
                for (let /** number */ v_2 = 2; v_2 > 0; v_2--)
                {
                    if (!this.go_out_grouping_b(g_vowel, 97, 117)) break lab1;
                    this.c--;
                }
                break lab0;
            }
            this.c = this.limit - v_1;
            // deno-lint-ignore no-unused-labels
            lab2: {
                // deno-lint-ignore no-unused-labels
                golab3: while (true)
                {
                    // deno-lint-ignore no-unused-labels
                    lab4: {
                        if (!(this.eq_s_b("-"))) break lab4;
                        break golab3;
                    }
                    if (this.c <= this.limit_backward) break lab2;
                    this.c--;
                }
                if (this.c <= this.limit_backward) break lab2;
                this.c--;
                break lab0;
            }
            this.c = this.limit - v_1;
            if (!this.go_out_grouping_b(g_digit, 48, 57)) return false;
            this.c--;
        }
        return true;
    }

    /** @return {boolean} */
    #r_standard_suffix() {
        let /** number */ a;
        this.ket = this.c;
        a = this.find_among_b(a_9);
        if (a === 0) return false;
        switch (a) {
            case 1: {
                const /** number */ v_1 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab0: {
                    const /** number */ v_2 = this.limit - this.c;
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        if (!(this.eq_s_b("-"))) break lab1;
                        break lab0;
                    }
                    this.c = this.limit - v_2;
                    if (!(this.in_grouping_b(g_digit, 48, 57))) return false;
                }
                this.c = this.limit - v_1;
                break;
            }
        }
        const /** number */ v_3 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab2: {
            if (!(this.eq_s_b("-"))) {
                this.c = this.limit - v_3;
                break lab2;
            }
        }
        this.bra = this.c;
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #stem() {
        const /** number */ v_1 = this.c;
        if (!this.#r_canonical_form()) return false;
        this.c = v_1;
        const /** number */ v_2 = this.c;
        this.#r_initial_apostrophe();
        this.c = v_2;
        this.limit_backward = this.c; this.c = this.limit;
        {
            const /** number */ v_3 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab0: {
                if (!this.#r_pronoun()) break lab0;
                return false;
            }
            this.c = this.limit - v_3;
        }
        const /** number */ v_4 = this.limit - this.c;
        this.#r_final_apostrophe();
        this.c = this.limit - v_4;
        {
            const /** number */ v_5 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!this.#r_correlative()) break lab1;
                return false;
            }
            this.c = this.limit - v_5;
        }
        {
            const /** number */ v_6 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab2: {
                if (!this.#r_uninflected()) break lab2;
                return false;
            }
            this.c = this.limit - v_6;
        }
        {
            const /** number */ v_7 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab3: {
                if (!this.#r_merged_numeral()) break lab3;
                return false;
            }
            this.c = this.limit - v_7;
        }
        {
            const /** number */ v_8 = this.limit - this.c;
            // deno-lint-ignore no-unused-labels
            lab4: {
                if (!this.#r_ujn_suffix()) break lab4;
                return false;
            }
            this.c = this.limit - v_8;
        }
        const /** number */ v_9 = this.limit - this.c;
        if (!this.#r_long_word()) return false;
        this.c = this.limit - v_9;
        if (!this.#r_standard_suffix()) return false;
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

