// Generated from irish.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["b'", -1, 1],
    ["bh", -1, 4],
    ["bhf", 1, 2],
    ["bp", -1, 8],
    ["ch", -1, 5],
    ["d'", -1, 1],
    ["d'fh", 5, 2],
    ["dh", -1, 6],
    ["dt", -1, 9],
    ["fh", -1, 2],
    ["gc", -1, 5],
    ["gh", -1, 7],
    ["h-", -1, 1],
    ["m'", -1, 1],
    ["mb", -1, 4],
    ["mh", -1, 10],
    ["n-", -1, 1],
    ["nd", -1, 6],
    ["ng", -1, 7],
    ["ph", -1, 8],
    ["sh", -1, 3],
    ["t-", -1, 1],
    ["th", -1, 9],
    ["ts", -1, 3]
];

const a_1 = [
    ["\u00EDochta", -1, 1],
    ["a\u00EDochta", 0, 1],
    ["ire", -1, 2],
    ["aire", 2, 2],
    ["abh", -1, 1],
    ["eabh", 4, 1],
    ["ibh", -1, 1],
    ["aibh", 6, 1],
    ["amh", -1, 1],
    ["eamh", 8, 1],
    ["imh", -1, 1],
    ["aimh", 10, 1],
    ["\u00EDocht", -1, 1],
    ["a\u00EDocht", 12, 1],
    ["ir\u00ED", -1, 2],
    ["air\u00ED", 14, 2]
];

const a_2 = [
    ["\u00F3ideacha", -1, 6],
    ["patacha", -1, 5],
    ["achta", -1, 1],
    ["arcachta", 2, 2],
    ["eachta", 2, 1],
    ["grafa\u00EDochta", -1, 4],
    ["paite", -1, 5],
    ["ach", -1, 1],
    ["each", 7, 1],
    ["\u00F3ideach", 8, 6],
    ["gineach", 8, 3],
    ["patach", 7, 5],
    ["grafa\u00EDoch", -1, 4],
    ["pataigh", -1, 5],
    ["\u00F3idigh", -1, 6],
    ["acht\u00FAil", -1, 1],
    ["eacht\u00FAil", 15, 1],
    ["gineas", -1, 3],
    ["ginis", -1, 3],
    ["acht", -1, 1],
    ["arcacht", 19, 2],
    ["eacht", 19, 1],
    ["grafa\u00EDocht", -1, 4],
    ["arcachta\u00ED", -1, 2],
    ["grafa\u00EDochta\u00ED", -1, 4]
];

const a_3 = [
    ["imid", -1, 1],
    ["aimid", 0, 1],
    ["\u00EDmid", -1, 1],
    ["a\u00EDmid", 2, 1],
    ["adh", -1, 2],
    ["eadh", 4, 2],
    ["faidh", -1, 1],
    ["fidh", -1, 1],
    ["\u00E1il", -1, 2],
    ["ain", -1, 2],
    ["tear", -1, 2],
    ["tar", -1, 2]
];

const /** Array<number> */ g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 2];

import { BaseStemmer } from './base-stemmer.js'

class IrishStemmer extends BaseStemmer {

    #I_p2/** number */ = 0;
    #I_p1/** number */ = 0;
    #I_pV/** number */ = 0;


    /** @return {boolean} */
    #r_mark_regions() {
        this.#I_pV = this.limit;
        this.#I_p1 = this.limit;
        this.#I_p2 = this.limit;
        const /** number */ v_1 = this.c;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (!this.go_out_grouping(g_v, 97, 250)) break lab0;
            this.c++;
            this.#I_pV = this.c;
            if (!this.go_in_grouping(g_v, 97, 250)) break lab0;
            this.c++;
            this.#I_p1 = this.c;
            if (!this.go_out_grouping(g_v, 97, 250)) break lab0;
            this.c++;
            if (!this.go_in_grouping(g_v, 97, 250)) break lab0;
            this.c++;
            this.#I_p2 = this.c;
        }
        this.c = v_1;
        return true;
    }

    /** @return {boolean} */
    #r_initial_morph() {
        let /** number */ a;
        this.bra = this.c;
        a = this.find_among(a_0);
        if (a === 0) return false;
        this.ket = this.c;
        switch (a) {
            case 1: {
                this.slice_del();
                break;
            }
            case 2: {
                this.slice_from("f");
                break;
            }
            case 3: {
                this.slice_from("s");
                break;
            }
            case 4: {
                this.slice_from("b");
                break;
            }
            case 5: {
                this.slice_from("c");
                break;
            }
            case 6: {
                this.slice_from("d");
                break;
            }
            case 7: {
                this.slice_from("g");
                break;
            }
            case 8: {
                this.slice_from("p");
                break;
            }
            case 9: {
                this.slice_from("t");
                break;
            }
            case 10: {
                this.slice_from("m");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_RV() {
        return this.#I_pV <= this.c;
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
    #r_noun_sfx() {
        let /** number */ a;
        this.ket = this.c;
        a = this.find_among_b(a_1);
        if (a === 0) return false;
        this.bra = this.c;
        switch (a) {
            case 1: {
                if (!this.#r_R1()) return false;
                this.slice_del();
                break;
            }
            case 2: {
                if (!this.#r_R2()) return false;
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_deriv() {
        let /** number */ a;
        this.ket = this.c;
        a = this.find_among_b(a_2);
        if (a === 0) return false;
        this.bra = this.c;
        switch (a) {
            case 1: {
                if (!this.#r_R2()) return false;
                this.slice_del();
                break;
            }
            case 2: {
                this.slice_from("arc");
                break;
            }
            case 3: {
                this.slice_from("gin");
                break;
            }
            case 4: {
                this.slice_from("graf");
                break;
            }
            case 5: {
                this.slice_from("paite");
                break;
            }
            case 6: {
                this.slice_from("\u00F3id");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_verb_sfx() {
        let /** number */ a;
        this.ket = this.c;
        a = this.find_among_b(a_3);
        if (a === 0) return false;
        this.bra = this.c;
        switch (a) {
            case 1: {
                if (!this.#r_RV()) return false;
                this.slice_del();
                break;
            }
            case 2: {
                if (!this.#r_R1()) return false;
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #stem() {
        const /** number */ v_1 = this.c;
        this.#r_initial_morph();
        this.c = v_1;
        this.#r_mark_regions();
        this.limit_backward = this.c; this.c = this.limit;
        const /** number */ v_2 = this.limit - this.c;
        this.#r_noun_sfx();
        this.c = this.limit - v_2;
        const /** number */ v_3 = this.limit - this.c;
        this.#r_deriv();
        this.c = this.limit - v_3;
        const /** number */ v_4 = this.limit - this.c;
        this.#r_verb_sfx();
        this.c = this.limit - v_4;
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

export { IrishStemmer };
