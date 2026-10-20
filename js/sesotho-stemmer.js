// Generated from sesotho.sbl by Snowball 3.2.0 - https://snowballstem.org/

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

const /**@type {Array<number>}*/ g_v = [17, 65, 16];

import B from './base-stemmer.js'

export default class extends B {


    /** @return {boolean} */
    #stem() {
        let /**@type {number}*/ I_pV;
        const /**@type {number}*/ v_1 = this.c;
        if (!this.go_out_grouping(g_v, 97, 117)) return false;
        this.c++;
        I_pV = this.c;
        this.c = v_1;
        const /**@type {number}*/ v_2 = this.c;
        if (this.c + 2 > this.limit) return false;
        this.c += 2;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (/**@type {boolean}*/(this.c <= I_pV)) break lab0;
            I_pV = this.c;
        }
        this.c = v_2;
        this.limit_backward = this.c; this.c = this.limit;
        const /**@type {number}*/ v_3 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab1: {
            if (this.c < I_pV) break lab1;
            const /**@type {number}*/ v_4 = this.limit_backward;
            this.limit_backward = I_pV;
            this.ket = this.c;
            if (this.find_among_b(a_2) === 0) {
                this.limit_backward = v_4;
                break lab1;
            }
            this.bra = this.c;
            this.slice_del();
            this.limit_backward = v_4;
        }
        this.c = this.limit - v_3;
        const /**@type {number}*/ v_5 = this.limit - this.c;
        // deno-lint-ignore no-unused-labels
        lab2: {
            if (this.c < I_pV) break lab2;
            const /**@type {number}*/ v_6 = this.limit_backward;
            this.limit_backward = I_pV;
            this.ket = this.c;
            if (this.find_among_b(a_1) === 0) {
                this.limit_backward = v_6;
                break lab2;
            }
            this.bra = this.c;
            this.slice_del();
            this.limit_backward = v_6;
        }
        this.c = this.limit - v_5;
        this.c = this.limit_backward;
        const /**@type {number}*/ v_7 = this.c;
        // deno-lint-ignore no-unused-labels
        lab3: {
            this.bra = this.c;
            if (this.find_among(a_0) === 0) break lab3;
            this.ket = this.c;
            const /**@type {number}*/ v_8 = this.c;
            if (this.c >= this.limit) break lab3;
            this.c++;
            if (/**@type {boolean}*/(this.c >= this.limit)) break lab3;
            this.c = v_8;
            if (!this.go_out_grouping(g_v, 97, 117)) break lab3;
            this.c++;
            this.slice_del();
        }
        this.c = v_7;
        return true;
    }

    /**@return{string}*/
    stem(/**@type {string}*/input) {
        this.setCurrent(input);
        this.#stem();
        return this.getCurrent();
    }

    stemWord = this.stem;
}

