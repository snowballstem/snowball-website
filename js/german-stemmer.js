// Generated from german.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["", -1, 5],
    ["ae", 0, 2],
    ["oe", 0, 3],
    ["qu", 0, -1],
    ["ue", 0, 4],
    ["\u00DF", 0, 1]
];

const a_1 = [
    ["", -1, 5],
    ["U", 0, 2],
    ["Y", 0, 1],
    ["\u00E4", 0, 3],
    ["\u00F6", 0, 4],
    ["\u00FC", 0, 2]
];

const a_2 = [
    ["e", -1, 3],
    ["em", -1, 1],
    ["en", -1, 3],
    ["erinnen", 2, 2],
    ["erin", -1, 2],
    ["ln", -1, 5],
    ["ern", -1, 2],
    ["er", -1, 2],
    ["s", -1, 4],
    ["es", 8, 3],
    ["lns", 8, 5]
];

const a_3 = [
    ["tick", -1, -1],
    ["plan", -1, -1],
    ["geordn", -1, -1],
    ["intern", -1, -1],
    ["tr", -1, -1]
];

const a_4 = [
    ["en", -1, 1],
    ["er", -1, 1],
    ["et", -1, 3],
    ["st", -1, 2],
    ["est", 3, 1]
];

const a_5 = [
    ["ig", -1, 1],
    ["lich", -1, 1]
];

const a_6 = [
    ["end", -1, 1],
    ["ig", -1, 2],
    ["ung", -1, 1],
    ["lich", -1, 3],
    ["isch", -1, 2],
    ["ik", -1, 2],
    ["heit", -1, 3],
    ["keit", -1, 4]
];

const /** Array<number> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 8];

const /** Array<number> */ g_et_ending = [1, 128, 198, 227, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

const /** Array<number> */ g_s_ending = [117, 30, 5];

const /** Array<number> */ g_st_ending = [117, 30, 4];

import { BaseStemmer } from './base-stemmer.js'

class GermanStemmer extends BaseStemmer {

    #I_p2/** number */ = 0;
    #I_p1/** number */ = 0;


    /** @return {boolean} */
    #r_prelude() {
        let /** number */ a;
        const /** number */ v_1 = this.cursor;
        while (true) {
            const /** number */ v_2 = this.cursor;
            // deno-lint-ignore no-unused-labels
            lab0: {
                // deno-lint-ignore no-unused-labels
                golab1: while (true)
                {
                    const /** number */ v_3 = this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab2: {
                        if (!(this.in_grouping(g_v, 97, 252))) break lab2;
                        this.bra = this.cursor;
                        // deno-lint-ignore no-unused-labels
                        lab3: {
                            const /** number */ v_4 = this.cursor;
                            // deno-lint-ignore no-unused-labels
                            lab4: {
                                if (!(this.eq_s("u"))) break lab4;
                                this.ket = this.cursor;
                                if (!(this.in_grouping(g_v, 97, 252))) break lab4;
                                this.slice_from("U");
                                break lab3;
                            }
                            this.cursor = v_4;
                            if (!(this.eq_s("y"))) break lab2;
                            this.ket = this.cursor;
                            if (!(this.in_grouping(g_v, 97, 252))) break lab2;
                            this.slice_from("Y");
                        }
                        this.cursor = v_3;
                        break golab1;
                    }
                    this.cursor = v_3;
                    if (this.cursor >= this.limit) break lab0;
                    this.cursor++;
                }
                continue;
            }
            this.cursor = v_2;
            break;
        }
        this.cursor = v_1;
        while (true) {
            const /** number */ v_5 = this.cursor;
            // deno-lint-ignore no-unused-labels
            lab5: {
                this.bra = this.cursor;
                a = this.find_among(a_0);
                this.ket = this.cursor;
                switch (a) {
                    case 1: {
                        this.slice_from("ss");
                        break;
                    }
                    case 2: {
                        this.slice_from("\u00E4");
                        break;
                    }
                    case 3: {
                        this.slice_from("\u00F6");
                        break;
                    }
                    case 4: {
                        this.slice_from("\u00FC");
                        break;
                    }
                    case 5: {
                        if (this.cursor >= this.limit) break lab5;
                        this.cursor++;
                        break;
                    }
                }
                continue;
            }
            this.cursor = v_5;
            break;
        }
        return true;
    }

    /** @return {boolean} */
    #r_mark_regions() {
        let /** number */ I_x;
        this.#I_p1 = this.limit;
        this.#I_p2 = this.limit;
        const /** number */ v_1 = this.cursor;
        {
            const /** number */ c = this.cursor + 3;
            if (c > this.limit) return false;
            this.cursor = c;
        }
        I_x = this.cursor;
        this.cursor = v_1;
        if (!this.go_out_grouping(g_v, 97, 252)) return false;
        this.cursor++;
        if (!this.go_in_grouping(g_v, 97, 252)) return false;
        this.cursor++;
        this.#I_p1 = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (this.#I_p1 >= I_x) break lab0;
            this.#I_p1 = I_x;
        }
        if (!this.go_out_grouping(g_v, 97, 252)) return false;
        this.cursor++;
        if (!this.go_in_grouping(g_v, 97, 252)) return false;
        this.cursor++;
        this.#I_p2 = this.cursor;
        return true;
    }

    /** @return {boolean} */
    #r_postlude() {
        let /** number */ a;
        while (true) {
            const /** number */ v_1 = this.cursor;
            // deno-lint-ignore no-unused-labels
            lab0: {
                this.bra = this.cursor;
                a = this.find_among(a_1);
                this.ket = this.cursor;
                switch (a) {
                    case 1: {
                        this.slice_from("y");
                        break;
                    }
                    case 2: {
                        this.slice_from("u");
                        break;
                    }
                    case 3: {
                        this.slice_from("a");
                        break;
                    }
                    case 4: {
                        this.slice_from("o");
                        break;
                    }
                    case 5: {
                        if (this.cursor >= this.limit) break lab0;
                        this.cursor++;
                        break;
                    }
                }
                continue;
            }
            this.cursor = v_1;
            break;
        }
        return true;
    }

    /** @return {boolean} */
    #r_R1() {
        return this.#I_p1 <= this.cursor;
    }

    /** @return {boolean} */
    #r_R2() {
        return this.#I_p2 <= this.cursor;
    }

    /** @return {boolean} */
    #r_standard_suffix() {
        let /** number */ a;
        const /** number */ v_1 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab0: {
            this.ket = this.cursor;
            a = this.find_among_b(a_2);
            if (a === 0) break lab0;
            this.bra = this.cursor;
            if (!this.#r_R1()) break lab0;
            switch (a) {
                case 1: {
                    {
                        const /** number */ v_2 = this.limit - this.cursor;
                        // deno-lint-ignore no-unused-labels
                        lab1: {
                            if (!(this.eq_s_b("syst"))) break lab1;
                            break lab0;
                        }
                        this.cursor = this.limit - v_2;
                    }
                    this.slice_del();
                    break;
                }
                case 2: {
                    this.slice_del();
                    break;
                }
                case 3: {
                    this.slice_del();
                    const /** number */ v_3 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab2: {
                        this.ket = this.cursor;
                        if (!(this.eq_s_b("s"))) {
                            this.cursor = this.limit - v_3;
                            break lab2;
                        }
                        this.bra = this.cursor;
                        if (!(this.eq_s_b("nis"))) {
                            this.cursor = this.limit - v_3;
                            break lab2;
                        }
                        this.slice_del();
                    }
                    break;
                }
                case 4: {
                    if (!(this.in_grouping_b(g_s_ending, 98, 116))) break lab0;
                    this.slice_del();
                    break;
                }
                case 5: {
                    this.slice_from("l");
                    break;
                }
            }
        }
        this.cursor = this.limit - v_1;
        const /** number */ v_4 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab3: {
            this.ket = this.cursor;
            a = this.find_among_b(a_4);
            if (a === 0) break lab3;
            this.bra = this.cursor;
            if (!this.#r_R1()) break lab3;
            switch (a) {
                case 1: {
                    this.slice_del();
                    break;
                }
                case 2: {
                    if (!(this.in_grouping_b(g_st_ending, 98, 116))) break lab3;
                    {
                        const /** number */ c = this.cursor - 3;
                        if (c < this.limit_backward) break lab3;
                        this.cursor = c;
                    }
                    this.slice_del();
                    break;
                }
                case 3: {
                    const /** number */ v_5 = this.limit - this.cursor;
                    if (!(this.in_grouping_b(g_et_ending, 85, 228))) break lab3;
                    this.cursor = this.limit - v_5;
                    {
                        const /** number */ v_6 = this.limit - this.cursor;
                        // deno-lint-ignore no-unused-labels
                        lab4: {
                            if (this.find_among_b(a_3) === 0) break lab4;
                            break lab3;
                        }
                        this.cursor = this.limit - v_6;
                    }
                    this.slice_del();
                    break;
                }
            }
        }
        this.cursor = this.limit - v_4;
        const /** number */ v_7 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab5: {
            this.ket = this.cursor;
            a = this.find_among_b(a_6);
            if (a === 0) break lab5;
            this.bra = this.cursor;
            if (!this.#r_R2()) break lab5;
            switch (a) {
                case 1: {
                    this.slice_del();
                    const /** number */ v_8 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab6: {
                        this.ket = this.cursor;
                        if (!(this.eq_s_b("ig"))) {
                            this.cursor = this.limit - v_8;
                            break lab6;
                        }
                        this.bra = this.cursor;
                        {
                            const /** number */ v_9 = this.limit - this.cursor;
                            // deno-lint-ignore no-unused-labels
                            lab7: {
                                if (!(this.eq_s_b("e"))) break lab7;
                                this.cursor = this.limit - v_8;
                                break lab6;
                            }
                            this.cursor = this.limit - v_9;
                        }
                        if (!this.#r_R2()) {
                            this.cursor = this.limit - v_8;
                            break lab6;
                        }
                        this.slice_del();
                    }
                    break;
                }
                case 2: {
                    {
                        const /** number */ v_10 = this.limit - this.cursor;
                        // deno-lint-ignore no-unused-labels
                        lab8: {
                            if (!(this.eq_s_b("e"))) break lab8;
                            break lab5;
                        }
                        this.cursor = this.limit - v_10;
                    }
                    this.slice_del();
                    break;
                }
                case 3: {
                    this.slice_del();
                    const /** number */ v_11 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab9: {
                        this.ket = this.cursor;
                        // deno-lint-ignore no-unused-labels
                        lab10: {
                            const /** number */ v_12 = this.limit - this.cursor;
                            // deno-lint-ignore no-unused-labels
                            lab11: {
                                if (!(this.eq_s_b("er"))) break lab11;
                                break lab10;
                            }
                            this.cursor = this.limit - v_12;
                            if (!(this.eq_s_b("en"))) {
                                this.cursor = this.limit - v_11;
                                break lab9;
                            }
                        }
                        this.bra = this.cursor;
                        if (!this.#r_R1()) {
                            this.cursor = this.limit - v_11;
                            break lab9;
                        }
                        this.slice_del();
                    }
                    break;
                }
                case 4: {
                    this.slice_del();
                    const /** number */ v_13 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab12: {
                        this.ket = this.cursor;
                        if (this.find_among_b(a_5) === 0) {
                            this.cursor = this.limit - v_13;
                            break lab12;
                        }
                        this.bra = this.cursor;
                        if (!this.#r_R2()) {
                            this.cursor = this.limit - v_13;
                            break lab12;
                        }
                        this.slice_del();
                    }
                    break;
                }
            }
        }
        this.cursor = this.limit - v_7;
        return true;
    }

    /** @return {boolean} */
    #stem() {
        const /** number */ v_1 = this.cursor;
        this.#r_prelude();
        this.cursor = v_1;
        const /** number */ v_2 = this.cursor;
        this.#r_mark_regions();
        this.cursor = v_2;
        this.limit_backward = this.cursor; this.cursor = this.limit;
        this.#r_standard_suffix();
        this.cursor = this.limit_backward;
        const /** number */ v_3 = this.cursor;
        this.#r_postlude();
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

export {GermanStemmer as default,GermanStemmer};
