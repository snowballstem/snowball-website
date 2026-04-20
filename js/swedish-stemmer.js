// Generated from swedish.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["fab", -1, -1],
    ["h", -1, -1],
    ["pak", -1, -1],
    ["rak", -1, -1],
    ["stak", -1, -1],
    ["kom", -1, -1],
    ["iet", -1, -1],
    ["cit", -1, -1],
    ["dit", -1, -1],
    ["alit", -1, -1],
    ["ilit", -1, -1],
    ["mit", -1, -1],
    ["nit", -1, -1],
    ["pit", -1, -1],
    ["rit", -1, -1],
    ["sit", -1, -1],
    ["tit", -1, -1],
    ["uit", -1, -1],
    ["ivit", -1, -1],
    ["kvit", -1, -1],
    ["xit", -1, -1]
];

const a_1 = [
    ["a", -1, 1],
    ["arna", 0, 1],
    ["erna", 0, 1],
    ["heterna", 2, 1],
    ["orna", 0, 1],
    ["ad", -1, 1],
    ["e", -1, 1],
    ["ade", 6, 1],
    ["ande", 6, 1],
    ["arne", 6, 1],
    ["are", 6, 1],
    ["aste", 6, 1],
    ["en", -1, 1],
    ["anden", 12, 1],
    ["aren", 12, 1],
    ["heten", 12, 1],
    ["ern", -1, 1],
    ["ar", -1, 1],
    ["er", -1, 1],
    ["heter", 18, 1],
    ["or", -1, 1],
    ["s", -1, 2],
    ["as", 21, 1],
    ["arnas", 22, 1],
    ["ernas", 22, 1],
    ["ornas", 22, 1],
    ["es", 21, 1],
    ["ades", 26, 1],
    ["andes", 26, 1],
    ["ens", 21, 1],
    ["arens", 29, 1],
    ["hetens", 29, 1],
    ["erns", 21, 1],
    ["at", -1, 1],
    ["et", -1, 3],
    ["andet", 34, 1],
    ["het", 34, 1],
    ["ast", -1, 1]
];

const a_2 = [
    ["dd", -1, -1],
    ["gd", -1, -1],
    ["nn", -1, -1],
    ["dt", -1, -1],
    ["gt", -1, -1],
    ["kt", -1, -1],
    ["tt", -1, -1]
];

const a_3 = [
    ["ig", -1, 1],
    ["lig", 0, 1],
    ["els", -1, 1],
    ["fullt", -1, 3],
    ["\u00F6st", -1, 2]
];

const /** Array<number> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 32];

const /** Array<number> */ g_s_ending = [119, 127, 149];

const /** Array<number> */ g_ost_ending = [173, 58];

import { BaseStemmer } from './base-stemmer.js'

class SwedishStemmer extends BaseStemmer {

    #I_p1/** number */ = 0;


    /** @return {boolean} */
    #r_mark_regions() {
        let /** number */ I_x;
        this.#I_p1 = this.limit;
        const /** number */ v_1 = this.cursor;
        {
            const /** number */ c = this.cursor + 3;
            if (c > this.limit) return false;
            this.cursor = c;
        }
        I_x = this.cursor;
        this.cursor = v_1;
        if (!this.go_out_grouping(g_v, 97, 246)) return false;
        this.cursor++;
        if (!this.go_in_grouping(g_v, 97, 246)) return false;
        this.cursor++;
        this.#I_p1 = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (this.#I_p1 >= I_x) break lab0;
            this.#I_p1 = I_x;
        }
        return true;
    }

    /** @return {boolean} */
    #r_et_condition() {
        const /** number */ v_1 = this.limit - this.cursor;
        if (!(this.out_grouping_b(g_v, 97, 246))) return false;
        if (!(this.in_grouping_b(g_v, 97, 246))) return false;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (this.cursor > this.limit_backward) break lab0;
            return false;
        }
        this.cursor = this.limit - v_1;
        {
            const /** number */ v_2 = this.limit - this.cursor;
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (this.find_among_b(a_0) === 0) break lab1;
                return false;
            }
            this.cursor = this.limit - v_2;
        }
        return true;
    }

    /** @return {boolean} */
    #r_main_suffix() {
        let /** number */ a;
        if (this.cursor < this.#I_p1) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        this.ket = this.cursor;
        a = this.find_among_b(a_1);
        if (a === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.cursor;
        this.limit_backward = v_1;
        switch (a) {
            case 1: {
                this.slice_del();
                break;
            }
            case 2: {
                // deno-lint-ignore no-unused-labels
                lab0: {
                    const /** number */ v_2 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        if (!(this.eq_s_b("et"))) break lab1;
                        if (!this.#r_et_condition()) break lab1;
                        this.bra = this.cursor;
                        break lab0;
                    }
                    this.cursor = this.limit - v_2;
                    if (!(this.in_grouping_b(g_s_ending, 98, 121))) return false;
                }
                this.slice_del();
                break;
            }
            case 3: {
                if (!this.#r_et_condition()) return false;
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_consonant_pair() {
        if (this.cursor < this.#I_p1) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        const /** number */ v_2 = this.limit - this.cursor;
        if (this.find_among_b(a_2) === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.cursor = this.limit - v_2;
        this.ket = this.cursor;
        if (this.cursor <= this.limit_backward) {
            this.limit_backward = v_1;
            return false;
        }
        this.cursor--;
        this.bra = this.cursor;
        this.slice_del();
        this.limit_backward = v_1;
        return true;
    }

    /** @return {boolean} */
    #r_other_suffix() {
        let /** number */ a;
        if (this.cursor < this.#I_p1) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        this.ket = this.cursor;
        a = this.find_among_b(a_3);
        if (a === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.cursor;
        this.limit_backward = v_1;
        switch (a) {
            case 1: {
                this.slice_del();
                break;
            }
            case 2: {
                if (!(this.in_grouping_b(g_ost_ending, 105, 118))) return false;
                this.slice_from("\u00F6s");
                break;
            }
            case 3: {
                this.slice_from("full");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #stem() {
        const /** number */ v_1 = this.cursor;
        this.#r_mark_regions();
        this.cursor = v_1;
        this.limit_backward = this.cursor; this.cursor = this.limit;
        const /** number */ v_2 = this.limit - this.cursor;
        this.#r_main_suffix();
        this.cursor = this.limit - v_2;
        const /** number */ v_3 = this.limit - this.cursor;
        this.#r_consonant_pair();
        this.cursor = this.limit - v_3;
        const /** number */ v_4 = this.limit - this.cursor;
        this.#r_other_suffix();
        this.cursor = this.limit - v_4;
        this.cursor = this.limit_backward;
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

export { SwedishStemmer as default};
