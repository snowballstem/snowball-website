// Generated from sesotho.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["ba", -1, -1],
    ["boi", -1, -1],
    ["le", -1, -1],
    ["li", -1, -1],
    ["ma", -1, -1],
    ["me", -1, -1],
    ["mo", -1, -1],
    ["se", -1, -1]
];

const a_1 = [
    ["a", -1, 1],
    ["ela", 0, 1],
    ["isa", 0, 1],
    ["wa", 0, 1],
    ["ile", -1, 1],
    ["etse", -1, 1],
    ["ang", -1, 1],
    ["eng", -1, 1],
    ["ong", -1, 1]
];

const a_2 = [
    ["ana", -1, 1],
    ["nyana", 0, 1],
    ["oa", -1, 1],
    ["i", -1, 1]
];

const /** Array<number> */ g_v = [17, 65, 16];

import { BaseStemmer } from './base-stemmer.js'

class SesothoStemmer extends BaseStemmer {

    #I_pV/** number */ = 0;


    /** @return {boolean} */
    #r_mark_regions() {
        this.#I_pV = this.limit;
        const /** number */ v_1 = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (!this.go_out_grouping(g_v, 97, 117)) break lab0;
            this.cursor++;
            this.#I_pV = this.cursor;
        }
        this.cursor = v_1;
        return true;
    }

    /** @return {boolean} */
    #r_remove_noun_prefixes() {
        this.bra = this.cursor;
        if (this.find_among(a_0) === 0) return false;
        this.ket = this.cursor;
        if (!this.go_out_grouping(g_v, 97, 117)) return false;
        this.cursor++;
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #r_remove_verb_suffixes() {
        this.limit_backward = this.cursor; this.cursor = this.limit;
        if (this.cursor < this.#I_pV) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_pV;
        this.ket = this.cursor;
        if (this.find_among_b(a_1) === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.cursor;
        this.slice_del();
        this.limit_backward = v_1;
        this.cursor = this.limit_backward;
        return true;
    }

    /** @return {boolean} */
    #r_remove_nominal_suffixes() {
        this.limit_backward = this.cursor; this.cursor = this.limit;
        if (this.cursor < this.#I_pV) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_pV;
        this.ket = this.cursor;
        if (this.find_among_b(a_2) === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.cursor;
        this.slice_del();
        this.limit_backward = v_1;
        this.cursor = this.limit_backward;
        return true;
    }

    /** @return {boolean} */
    #stem() {
        this.#r_mark_regions();
        const /** number */ v_1 = this.cursor;
        this.#r_remove_nominal_suffixes();
        this.cursor = v_1;
        const /** number */ v_2 = this.cursor;
        this.#r_remove_verb_suffixes();
        this.cursor = v_2;
        const /** number */ v_3 = this.cursor;
        this.#r_remove_noun_prefixes();
        this.cursor = v_3;
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

export { SesothoStemmer };
