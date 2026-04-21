// Generated from finnish.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["pa", -1, 1],
    ["sti", -1, 2],
    ["kaan", -1, 1],
    ["han", -1, 1],
    ["kin", -1, 1],
    ["h\u00E4n", -1, 1],
    ["k\u00E4\u00E4n", -1, 1],
    ["ko", -1, 1],
    ["p\u00E4", -1, 1],
    ["k\u00F6", -1, 1]
];

const a_1 = [
    ["lla", -1, -1],
    ["na", -1, -1],
    ["ssa", -1, -1],
    ["ta", -1, -1],
    ["lta", 3, -1],
    ["sta", 3, -1]
];

const a_2 = [
    ["ll\u00E4", -1, -1],
    ["n\u00E4", -1, -1],
    ["ss\u00E4", -1, -1],
    ["t\u00E4", -1, -1],
    ["lt\u00E4", 3, -1],
    ["st\u00E4", 3, -1]
];

const a_3 = [
    ["lle", -1, -1],
    ["ine", -1, -1]
];

const a_4 = [
    ["nsa", -1, 3],
    ["mme", -1, 3],
    ["nne", -1, 3],
    ["ni", -1, 2],
    ["si", -1, 1],
    ["an", -1, 4],
    ["en", -1, 6],
    ["\u00E4n", -1, 5],
    ["ns\u00E4", -1, 3]
];

const a_5 = [
    ["aa", -1, -1],
    ["ee", -1, -1],
    ["ii", -1, -1],
    ["oo", -1, -1],
    ["uu", -1, -1],
    ["\u00E4\u00E4", -1, -1],
    ["\u00F6\u00F6", -1, -1]
];

const a_6 = [
    ["a", -1, 8],
    ["lla", 0, -1],
    ["na", 0, -1],
    ["ssa", 0, -1],
    ["ta", 0, -1],
    ["lta", 4, -1],
    ["sta", 4, -1],
    ["tta", 4, 2],
    ["lle", -1, -1],
    ["ine", -1, -1],
    ["ksi", -1, -1],
    ["n", -1, 7],
    ["han", 11, 1],
    ["den", 11, -1, 1],
    ["seen", 11, -1, 2],
    ["hen", 11, 2],
    ["tten", 11, -1, 1],
    ["hin", 11, 3],
    ["siin", 11, -1, 1],
    ["hon", 11, 4],
    ["h\u00E4n", 11, 5],
    ["h\u00F6n", 11, 6],
    ["\u00E4", -1, 8],
    ["ll\u00E4", 22, -1],
    ["n\u00E4", 22, -1],
    ["ss\u00E4", 22, -1],
    ["t\u00E4", 22, -1],
    ["lt\u00E4", 26, -1],
    ["st\u00E4", 26, -1],
    ["tt\u00E4", 26, 2]
];

const a_7 = [
    ["eja", -1, -1],
    ["mma", -1, 1],
    ["imma", 1, -1],
    ["mpa", -1, 1],
    ["impa", 3, -1],
    ["mmi", -1, 1],
    ["immi", 5, -1],
    ["mpi", -1, 1],
    ["impi", 7, -1],
    ["ej\u00E4", -1, -1],
    ["mm\u00E4", -1, 1],
    ["imm\u00E4", 10, -1],
    ["mp\u00E4", -1, 1],
    ["imp\u00E4", 12, -1]
];

const a_8 = [
    ["i", -1, -1],
    ["j", -1, -1]
];

const a_9 = [
    ["mma", -1, 1],
    ["imma", 0, -1]
];

const /** Array<number> */ g_AEI = [17, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8];

const /** Array<number> */ g_C = [119, 223, 119, 1];

const /** Array<number> */ g_V1 = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

const /** Array<number> */ g_V2 = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

const /** Array<number> */ g_particle_end = [17, 97, 24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

import { BaseStemmer } from './base-stemmer.js'

class FinnishStemmer extends BaseStemmer {

    #B_ending_removed/** boolean */ = false;
    #I_p2/** number */ = 0;
    #I_p1/** number */ = 0;


    /** @return {boolean} */
    #af_6() {
        switch (this.af) {
            case 1: return this.#r_VI();
            case 2: return this.#r_LONG();
        }
        return false;
    }

    /** @return {boolean} */
    #r_mark_regions() {
        this.#I_p1 = this.limit;
        this.#I_p2 = this.limit;
        if (!this.go_out_grouping(g_V1, 97, 246)) return false;
        this.c++;
        if (!this.go_in_grouping(g_V1, 97, 246)) return false;
        this.c++;
        this.#I_p1 = this.c;
        if (!this.go_out_grouping(g_V1, 97, 246)) return false;
        this.c++;
        if (!this.go_in_grouping(g_V1, 97, 246)) return false;
        this.c++;
        this.#I_p2 = this.c;
        return true;
    }

    /** @return {boolean} */
    #r_R2() {
        return this.#I_p2 <= this.c;
    }

    /** @return {boolean} */
    #r_particle_etc() {
        let /** number */ a;
        if (this.c < this.#I_p1) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        this.ket = this.c;
        a = this.find_among_b(a_0);
        if (a === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.c;
        this.limit_backward = v_1;
        switch (a) {
            case 1: {
                if (!(this.in_grouping_b(g_particle_end, 97, 246))) return false;
                break;
            }
            case 2: {
                if (!this.#r_R2()) return false;
                break;
            }
        }
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #r_possessive() {
        let /** number */ a;
        if (this.c < this.#I_p1) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        this.ket = this.c;
        a = this.find_among_b(a_4);
        if (a === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.c;
        this.limit_backward = v_1;
        switch (a) {
            case 1: {
                {
                    const /** number */ v_2 = this.limit - this.c;
                    // deno-lint-ignore no-unused-labels
                    lab0: {
                        if (!(this.eq_s_b("k"))) break lab0;
                        return false;
                    }
                    this.c = this.limit - v_2;
                }
                this.slice_del();
                break;
            }
            case 2: {
                this.slice_del();
                this.ket = this.c;
                if (!(this.eq_s_b("kse"))) return false;
                this.bra = this.c;
                this.slice_from("ksi");
                break;
            }
            case 3: {
                this.slice_del();
                break;
            }
            case 4: {
                if (this.find_among_b(a_1) === 0) return false;
                this.slice_del();
                break;
            }
            case 5: {
                if (this.find_among_b(a_2) === 0) return false;
                this.slice_del();
                break;
            }
            case 6: {
                if (this.find_among_b(a_3) === 0) return false;
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_LONG() {
        return this.find_among_b(a_5) !== 0;
    }

    /** @return {boolean} */
    #r_VI() {
        if (!(this.eq_s_b("i"))) return false;
        return this.in_grouping_b(g_V2, 97, 246);
    }

    /** @return {boolean} */
    #r_case_ending() {
        let /** number */ a;
        if (this.c < this.#I_p1) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        this.ket = this.c;
        a = this.find_among_b(a_6, this.#af_6);
        if (a === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.c;
        this.limit_backward = v_1;
        switch (a) {
            case 1: {
                if (!(this.eq_s_b("a"))) return false;
                break;
            }
            case 2: {
                if (!(this.eq_s_b("e"))) return false;
                break;
            }
            case 3: {
                if (!(this.eq_s_b("i"))) return false;
                break;
            }
            case 4: {
                if (!(this.eq_s_b("o"))) return false;
                break;
            }
            case 5: {
                if (!(this.eq_s_b("\u00E4"))) return false;
                break;
            }
            case 6: {
                if (!(this.eq_s_b("\u00F6"))) return false;
                break;
            }
            case 7: {
                const /** number */ v_2 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab0: {
                    const /** number */ v_3 = this.limit - this.c;
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        const /** number */ v_4 = this.limit - this.c;
                        // deno-lint-ignore no-unused-labels
                        lab2: {
                            if (!this.#r_LONG()) break lab2;
                            break lab1;
                        }
                        this.c = this.limit - v_4;
                        if (!(this.eq_s_b("ie"))) {
                            this.c = this.limit - v_2;
                            break lab0;
                        }
                    }
                    this.c = this.limit - v_3;
                    if (this.c <= this.limit_backward) {
                        this.c = this.limit - v_2;
                        break lab0;
                    }
                    this.c--;
                    this.bra = this.c;
                }
                break;
            }
            case 8: {
                if (!(this.in_grouping_b(g_V1, 97, 246))) return false;
                if (!(this.in_grouping_b(g_C, 98, 122))) return false;
                break;
            }
        }
        this.slice_del();
        this.#B_ending_removed = true;
        return true;
    }

    /** @return {boolean} */
    #r_other_endings() {
        let /** number */ a;
        if (this.c < this.#I_p2) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_p2;
        this.ket = this.c;
        a = this.find_among_b(a_7);
        if (a === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.c;
        this.limit_backward = v_1;
        switch (a) {
            case 1: {
                {
                    const /** number */ v_2 = this.limit - this.c;
                    // deno-lint-ignore no-unused-labels
                    lab0: {
                        if (!(this.eq_s_b("po"))) break lab0;
                        return false;
                    }
                    this.c = this.limit - v_2;
                }
                break;
            }
        }
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #r_i_plural() {
        if (this.c < this.#I_p1) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        this.ket = this.c;
        if (this.find_among_b(a_8) === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.c;
        this.limit_backward = v_1;
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #r_t_plural() {
        let /** number */ a;
        if (this.c < this.#I_p1) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        this.ket = this.c;
        if (!(this.eq_s_b("t"))) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.c;
        const /** number */ v_2 = this.limit - this.c;
        if (!(this.in_grouping_b(g_V1, 97, 246))) {
            this.limit_backward = v_1;
            return false;
        }
        this.c = this.limit - v_2;
        this.slice_del();
        this.limit_backward = v_1;
        if (this.c < this.#I_p2) return false;
        const /** number */ v_3 = this.limit_backward;
        this.limit_backward = this.#I_p2;
        this.ket = this.c;
        a = this.find_among_b(a_9);
        if (a === 0) {
            this.limit_backward = v_3;
            return false;
        }
        this.bra = this.c;
        this.limit_backward = v_3;
        switch (a) {
            case 1: {
                {
                    const /** number */ v_4 = this.limit - this.c;
                    // deno-lint-ignore no-unused-labels
                    lab0: {
                        if (!(this.eq_s_b("po"))) break lab0;
                        return false;
                    }
                    this.c = this.limit - v_4;
                }
                break;
            }
        }
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #r_tidy() {
        let /** string */ S_x;
        if (this.c < this.#I_p1) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        const /** number */ v_2 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_3 = this.limit - this.c;
            if (!this.#r_LONG()) break lab0;
            this.c = this.limit - v_3;
            this.ket = this.c;
            if (this.c <= this.limit_backward) break lab0;
            this.c--;
            this.bra = this.c;
            this.slice_del();
        }
        this.c = this.limit - v_2;
        const /** number */ v_4 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab1: {
            this.ket = this.c;
            if (!(this.in_grouping_b(g_AEI, 97, 228))) break lab1;
            this.bra = this.c;
            if (!(this.in_grouping_b(g_C, 98, 122))) break lab1;
            this.slice_del();
        }
        this.c = this.limit - v_4;
        const /** number */ v_5 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab2: {
            this.ket = this.c;
            if (!(this.eq_s_b("j"))) break lab2;
            this.bra = this.c;
            // deno-lint-ignore no-unused-labels
            lab3: {
                const /** number */ v_6 = this.limit - this.c;
                // deno-lint-ignore no-unused-labels
                lab4: {
                    if (!(this.eq_s_b("o"))) break lab4;
                    break lab3;
                }
                this.c = this.limit - v_6;
                if (!(this.eq_s_b("u"))) break lab2;
            }
            this.slice_del();
        }
        this.c = this.limit - v_5;
        const /** number */ v_7 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab5: {
            this.ket = this.c;
            if (!(this.eq_s_b("o"))) break lab5;
            this.bra = this.c;
            if (!(this.eq_s_b("j"))) break lab5;
            this.slice_del();
        }
        this.c = this.limit - v_7;
        this.limit_backward = v_1;
        if (!this.go_in_grouping_b(g_V1, 97, 246)) return false;
        this.ket = this.c;
        if (!(this.in_grouping_b(g_C, 98, 122))) return false;
        this.bra = this.c;
        S_x = this.slice_to();
        if (!(this.eq_s_b(S_x))) return false;
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #stem() {
        const /** number */ v_1 = this.c;
        this.#r_mark_regions();
        this.c = v_1;
        this.#B_ending_removed = false;
        this.limit_backward = this.c; this.c = this.limit;
        const /** number */ v_2 = this.limit - this.c;
        this.#r_particle_etc();
        this.c = this.limit - v_2;
        const /** number */ v_3 = this.limit - this.c;
        this.#r_possessive();
        this.c = this.limit - v_3;
        const /** number */ v_4 = this.limit - this.c;
        this.#r_case_ending();
        this.c = this.limit - v_4;
        const /** number */ v_5 = this.limit - this.c;
        this.#r_other_endings();
        this.c = this.limit - v_5;
        // deno-lint-ignore no-unused-labels
        lab0: {
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!this.#B_ending_removed) break lab1;
                const /** number */ v_6 = this.limit - this.c;
                this.#r_i_plural();
                this.c = this.limit - v_6;
                break lab0;
            }
            const /** number */ v_7 = this.limit - this.c;
            this.#r_t_plural();
            this.c = this.limit - v_7;
        }
        const /** number */ v_8 = this.limit - this.c;
        this.#r_tidy();
        this.c = this.limit - v_8;
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

export { FinnishStemmer };
