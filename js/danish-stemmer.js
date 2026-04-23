// Generated from danish.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["hed", -1, 1],
    ["ethed", 0, 1],
    ["ered", -1, 1],
    ["e", -1, 1],
    ["erede", 3, 1],
    ["ende", 3, 1],
    ["erende", 5, 1],
    ["ene", 3, 1],
    ["erne", 3, 1],
    ["ere", 3, 1],
    ["en", -1, 1],
    ["heden", 10, 1],
    ["eren", 10, 1],
    ["er", -1, 1],
    ["heder", 13, 1],
    ["erer", 13, 1],
    ["s", -1, 2],
    ["heds", 16, 1],
    ["es", 16, 1],
    ["endes", 18, 1],
    ["erendes", 19, 1],
    ["enes", 18, 1],
    ["ernes", 18, 1],
    ["eres", 18, 1],
    ["ens", 16, 1],
    ["hedens", 24, 1],
    ["erens", 24, 1],
    ["ers", 16, 1],
    ["ets", 16, 1],
    ["erets", 28, 1],
    ["et", -1, 1],
    ["eret", 30, 1]
];

const a_1 = [
    ["gd", -1, -1],
    ["dt", -1, -1],
    ["gt", -1, -1],
    ["kt", -1, -1]
];

const a_2 = [
    ["ig", -1, 1],
    ["lig", 0, 1],
    ["elig", 1, 1],
    ["els", -1, 1],
    ["l\u00F8st", -1, 2]
];

const /** Array<number> */ g_c = [119, 223, 119, 1];

const /** Array<number> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128];

const /** Array<number> */ g_s_ending = [239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16];

import { BaseStemmer } from './base-stemmer.js'

class DanishStemmer extends BaseStemmer {

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
        a = this.find_among_b(a_0);
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
                if (!(this.in_grouping_b(g_s_ending, 97, 229))) return false;
                this.slice_del();
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
        if (this.find_among_b(a_1) === 0) {
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
        let /** number */ a;
        const /** number */ v_1 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab0: {
            this.ket = this.cursor;
            if (!(this.eq_s_b("st"))) break lab0;
            this.bra = this.cursor;
            if (!(this.eq_s_b("ig"))) break lab0;
            this.slice_del();
        }
        this.cursor = this.limit - v_1;
        if (this.cursor < this.#I_p1) return false;
        const /** number */ v_2 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        this.ket = this.cursor;
        a = this.find_among_b(a_2);
        if (a === 0) {
            this.limit_backward = v_2;
            return false;
        }
        this.bra = this.cursor;
        this.limit_backward = v_2;
        switch (a) {
            case 1: {
                this.slice_del();
                const /** number */ v_3 = this.limit - this.cursor;
                this.#r_consonant_pair();
                this.cursor = this.limit - v_3;
                break;
            }
            case 2: {
                this.slice_from("l\u00F8s");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_undouble() {
        let /** string */ S_ch;
        if (this.cursor < this.#I_p1) return false;
        const /** number */ v_1 = this.limit_backward;
        this.limit_backward = this.#I_p1;
        this.ket = this.cursor;
        if (!(this.in_grouping_b(g_c, 98, 122))) {
            this.limit_backward = v_1;
            return false;
        }
        this.bra = this.cursor;
        S_ch = this.slice_to();
        this.limit_backward = v_1;
        if (!(this.eq_s_b(S_ch))) return false;
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
        const /** number */ v_5 = this.limit - this.cursor;
        this.#r_undouble();
        this.cursor = this.limit - v_5;
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

export {DanishStemmer as default,DanishStemmer};
