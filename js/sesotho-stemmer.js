// Generated from sesotho.sbl by Snowball 3.1.1 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["ba", -1],
    ["boi", -1],
    ["le", -1],
    ["li", -1],
    ["ma", -1],
    ["me", -1],
    ["mo", -1],
    ["se", -1]
];

const a_1 = [
    ["a", 1],
    ["ela", 1, 1],
    ["isa", 1, 2],
    ["wa", 1, 3],
    ["ile", 1],
    ["etse", 1],
    ["ang", 1],
    ["eng", 1],
    ["ong", 1]
];

const a_2 = [
    ["ana", 1],
    ["nyana", 1, 1],
    ["oa", 1],
    ["i", 1],
    ["ano", 1]
];

const /** Array<number> */ g_v = [17, 65, 16];

import B from './base-stemmer.js'

export default class extends B {

    #I_pV/** number */ = 0;


    /** @return {boolean} */
    #r_mark_regions() {
        const /** number */ v_1 = this.c;
        if (!this.go_out_grouping(g_v, 97, 117)) return false;
        this.c++;
        this.#I_pV = this.c;
        this.c = v_1;
        const /** number */ v_2 = this.c;
        if (this.c + 2 > this.limit) return false;
        this.c += 2;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (this.c <= this.#I_pV) break lab0;
            this.#I_pV = this.c;
        }
        this.c = v_2;
        return true;
    }

    /** @return {boolean} */
    #r_remove_noun_prefixes() {
        this.bra = this.c;
        if (this.find_among(a_0) === 0) return false;
        this.ket = this.c;
        const /** number */ v_1 = this.c;
        if (this.c >= this.limit) return false;
        this.c++;
        if (this.c >= this.limit) return false;
        this.c = v_1;
        if (!this.go_out_grouping(g_v, 97, 117)) return false;
        this.c++;
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #r_remove_verb_suffixes() {
        if (this.c < this.#I_pV) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_pV;
        this.ket = this.c;
        if (this.find_among_b(a_1) === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.c;
        this.slice_del();
        this.limit_backward = v_1;
        return true;
    }

    /** @return {boolean} */
    #r_remove_nominal_suffixes() {
        if (this.c < this.#I_pV) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_pV;
        this.ket = this.c;
        if (this.find_among_b(a_2) === 0) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.c;
        this.slice_del();
        this.limit_backward = v_1;
        return true;
    }

    /** @return {boolean} */
    #stem() {
        if (!this.#r_mark_regions()) return false;
        this.limit_backward = this.c; this.c = this.limit;
        const /** number */ v_1 = this.limit - this.c;
        this.#r_remove_nominal_suffixes();
        this.c = this.limit - v_1;
        const /** number */ v_2 = this.limit - this.c;
        this.#r_remove_verb_suffixes();
        this.c = this.limit - v_2;
        this.c = this.limit_backward;
        const /** number */ v_3 = this.c;
        this.#r_remove_noun_prefixes();
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

