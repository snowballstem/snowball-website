// Generated from norwegian.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["", -1, 1],
    ["ind", 0, -1],
    ["kk", 0, -1],
    ["nk", 0, -1],
    ["amm", 0, -1],
    ["omm", 0, -1],
    ["kap", 0, -1],
    ["skap", 6, 1],
    ["pp", 0, -1],
    ["lt", 0, -1],
    ["ast", 0, -1],
    ["\u00F8st", 0, -1],
    ["v", 0, -1],
    ["hav", 12, 1],
    ["giv", 12, 1]
];

const a_1 = [
    ["a", -1, 1],
    ["e", -1, 1],
    ["ede", 1, 1],
    ["ande", 1, 1],
    ["ende", 1, 1],
    ["ane", 1, 1],
    ["ene", 1, 1],
    ["hetene", 6, 1],
    ["erte", 1, 4],
    ["en", -1, 1],
    ["heten", 9, 1],
    ["ar", -1, 1],
    ["er", -1, 1],
    ["heter", 12, 1],
    ["s", -1, 3],
    ["as", 14, 1],
    ["es", 14, 1],
    ["edes", 16, 1],
    ["endes", 16, 1],
    ["enes", 16, 1],
    ["hetenes", 19, 1],
    ["ens", 14, 1],
    ["hetens", 21, 1],
    ["ers", 14, 2],
    ["ets", 14, 1],
    ["et", -1, 1],
    ["het", 25, 1],
    ["ert", -1, 4],
    ["ast", -1, 1]
];

const a_2 = [
    ["dt", -1, -1],
    ["vt", -1, -1]
];

const a_3 = [
    ["leg", -1, 1],
    ["eleg", 0, 1],
    ["ig", -1, 1],
    ["eig", 2, 1],
    ["lig", 2, 1],
    ["elig", 4, 1],
    ["els", -1, 1],
    ["lov", -1, 1],
    ["elov", 7, 1],
    ["slov", 7, 1],
    ["hetslov", 9, 1]
];

const /** Array<number> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 2, 142];

const /** Array<number> */ g_s_ending = [119, 125, 148, 1];

import { BaseStemmer } from './base-stemmer.js'

class NorwegianStemmer extends BaseStemmer {

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
        if (!this.go_out_grouping(g_v, 97, 248)) return false;
        this.cursor++;
        if (!this.go_in_grouping(g_v, 97, 248)) return false;
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
                a = this.find_among_b(a_0);
                switch (a) {
                    case 1: {
                        this.slice_del();
                        break;
                    }
                }
                break;
            }
            case 3: {
                // deno-lint-ignore no-unused-labels
                lab0: {
                    const /** number */ v_2 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        if (!(this.in_grouping_b(g_s_ending, 98, 122))) break lab1;
                        break lab0;
                    }
                    this.cursor = this.limit - v_2;
                    // deno-lint-ignore no-unused-labels
                    lab2: {
                        if (!(this.eq_s_b("r"))) break lab2;
                        {
                            const /** number */ v_3 = this.limit - this.cursor;
                            // deno-lint-ignore no-unused-labels
                            lab3: {
                                if (!(this.eq_s_b("e"))) break lab3;
                                break lab2;
                            }
                            this.cursor = this.limit - v_3;
                        }
                        break lab0;
                    }
                    this.cursor = this.limit - v_2;
                    if (!(this.eq_s_b("k"))) return false;
                    if (!(this.out_grouping_b(g_v, 97, 248))) return false;
                }
                this.slice_del();
                break;
            }
            case 4: {
                this.slice_from("er");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_consonant_pair() {
        const /** number */ v_1 = this.limit - this.cursor;
        if (this.cursor < this.#I_p1) return false;
        const /** number */ v_2 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        this.ket = this.cursor;
        if (this.find_among_b(a_2) === 0) {
            this.limit_backward = v_2;
            return false;
        }
        this.bra = this.cursor;
        this.limit_backward = v_2;
        this.cursor = this.limit - v_1;
        if (this.cursor <= this.limit_backward) return false;
        this.cursor--;
        this.bra = this.cursor;
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #r_other_suffix() {
        if (this.cursor < this.#I_p1) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        this.ket = this.cursor;
        if (this.find_among_b(a_3) === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.cursor;
        this.limit_backward = v_1;
        this.slice_del();
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

export {NorwegianStemmer as default,NorwegianStemmer};
