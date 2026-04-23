// Generated from indonesian.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["kah", -1, 1],
    ["lah", -1, 1],
    ["pun", -1, 1]
];

const a_1 = [
    ["nya", -1, 1],
    ["ku", -1, 1],
    ["mu", -1, 1]
];

const a_2 = [
    ["i", -1, 2],
    ["an", -1, 1]
];

const a_3 = [
    ["di", -1, 1],
    ["ke", -1, 3],
    ["me", -1, 1],
    ["mem", 2, 5],
    ["men", 2, 2],
    ["meng", 4, 1],
    ["pem", -1, 6],
    ["pen", -1, 4],
    ["peng", 7, 3],
    ["ter", -1, 1]
];

const a_4 = [
    ["be", -1, 2],
    ["pe", -1, 1]
];

const /** Array<number> */ g_vowel = [17, 65, 16];

import { BaseStemmer } from './base-stemmer.js'

class IndonesianStemmer extends BaseStemmer {

    #I_prefix/** number */ = 0;
    #I_measure/** number */ = 0;


    /** @return {boolean} */
    #r_remove_particle() {
        this.ket = this.cursor;
        if (this.find_among_b(a_0) === 0) return false;
        this.bra = this.cursor;
        this.slice_del();
        --this.#I_measure;
        return true;
    }

    /** @return {boolean} */
    #r_remove_possessive_pronoun() {
        this.ket = this.cursor;
        if (this.find_among_b(a_1) === 0) return false;
        this.bra = this.cursor;
        this.slice_del();
        --this.#I_measure;
        return true;
    }

    /** @return {boolean} */
    #r_remove_suffix() {
        let /** number */ a;
        this.ket = this.cursor;
        a = this.find_among_b(a_2);
        if (a === 0) return false;
        this.bra = this.cursor;
        switch (a) {
            case 1: {
                // deno-lint-ignore no-unused-labels
                lab0: {
                    const /** number */ v_1 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        if (this.#I_prefix === 3) break lab1;
                        if (this.#I_prefix === 2) break lab1;
                        if (!(this.eq_s_b("k"))) break lab1;
                        this.bra = this.cursor;
                        break lab0;
                    }
                    this.cursor = this.limit - v_1;
                    if (this.#I_prefix === 1) return false;
                }
                break;
            }
            case 2: {
                if (this.#I_prefix > 2) return false;
                {
                    const /** number */ v_2 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab2: {
                        if (!(this.eq_s_b("s"))) break lab2;
                        return false;
                    }
                    this.cursor = this.limit - v_2;
                }
                break;
            }
        }
        this.slice_del();
        --this.#I_measure;
        return true;
    }

    /** @return {boolean} */
    #r_remove_first_order_prefix() {
        let /** number */ a;
        this.bra = this.cursor;
        a = this.find_among(a_3);
        if (a === 0) return false;
        this.ket = this.cursor;
        switch (a) {
            case 1: {
                this.slice_del();
                this.#I_prefix = 1;
                --this.#I_measure;
                break;
            }
            case 2: {
                // deno-lint-ignore no-unused-labels
                lab0: {
                    const /** number */ v_1 = this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        if (!(this.eq_s("y"))) break lab1;
                        const /** number */ v_2 = this.cursor;
                        if (!(this.in_grouping(g_vowel, 97, 117))) break lab1;
                        this.cursor = v_2;
                        this.ket = this.cursor;
                        this.slice_from("s");
                        this.#I_prefix = 1;
                        --this.#I_measure;
                        break lab0;
                    }
                    this.cursor = v_1;
                    this.slice_del();
                    this.#I_prefix = 1;
                    --this.#I_measure;
                }
                break;
            }
            case 3: {
                this.slice_del();
                this.#I_prefix = 3;
                --this.#I_measure;
                break;
            }
            case 4: {
                // deno-lint-ignore no-unused-labels
                lab2: {
                    const /** number */ v_3 = this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab3: {
                        if (!(this.eq_s("y"))) break lab3;
                        const /** number */ v_4 = this.cursor;
                        if (!(this.in_grouping(g_vowel, 97, 117))) break lab3;
                        this.cursor = v_4;
                        this.ket = this.cursor;
                        this.slice_from("s");
                        this.#I_prefix = 3;
                        --this.#I_measure;
                        break lab2;
                    }
                    this.cursor = v_3;
                    this.slice_del();
                    this.#I_prefix = 3;
                    --this.#I_measure;
                }
                break;
            }
            case 5: {
                this.#I_prefix = 1;
                --this.#I_measure;
                // deno-lint-ignore no-unused-labels
                lab4: {
                    const /** number */ v_5 = this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab5: {
                        const /** number */ v_6 = this.cursor;
                        if (!(this.in_grouping(g_vowel, 97, 117))) break lab5;
                        this.cursor = v_6;
                        this.slice_from("p");
                        break lab4;
                    }
                    this.cursor = v_5;
                    this.slice_del();
                }
                break;
            }
            case 6: {
                this.#I_prefix = 3;
                --this.#I_measure;
                // deno-lint-ignore no-unused-labels
                lab6: {
                    const /** number */ v_7 = this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab7: {
                        const /** number */ v_8 = this.cursor;
                        if (!(this.in_grouping(g_vowel, 97, 117))) break lab7;
                        this.cursor = v_8;
                        this.slice_from("p");
                        break lab6;
                    }
                    this.cursor = v_7;
                    this.slice_del();
                }
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_remove_second_order_prefix() {
        let /** number */ a;
        this.bra = this.cursor;
        a = this.find_among(a_4);
        if (a === 0) return false;
        switch (a) {
            case 1: {
                // deno-lint-ignore no-unused-labels
                lab0: {
                    const /** number */ v_1 = this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        if (!(this.eq_s("r"))) break lab1;
                        this.ket = this.cursor;
                        this.#I_prefix = 2;
                        break lab0;
                    }
                    this.cursor = v_1;
                    // deno-lint-ignore no-unused-labels
                    lab2: {
                        if (!(this.eq_s("l"))) break lab2;
                        this.ket = this.cursor;
                        if (!(this.eq_s("ajar"))) break lab2;
                        break lab0;
                    }
                    this.cursor = v_1;
                    this.ket = this.cursor;
                    this.#I_prefix = 2;
                }
                break;
            }
            case 2: {
                // deno-lint-ignore no-unused-labels
                lab3: {
                    const /** number */ v_2 = this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab4: {
                        if (!(this.eq_s("r"))) break lab4;
                        this.ket = this.cursor;
                        break lab3;
                    }
                    this.cursor = v_2;
                    // deno-lint-ignore no-unused-labels
                    lab5: {
                        if (!(this.eq_s("l"))) break lab5;
                        this.ket = this.cursor;
                        if (!(this.eq_s("ajar"))) break lab5;
                        break lab3;
                    }
                    this.cursor = v_2;
                    this.ket = this.cursor;
                    if (!(this.out_grouping(g_vowel, 97, 117))) return false;
                    if (!(this.eq_s("er"))) return false;
                }
                this.#I_prefix = 4;
                break;
            }
        }
        --this.#I_measure;
        this.slice_del();
        return true;
    }

    /** @return {boolean} */
    #stem() {
        this.#I_measure = 0;
        const /** number */ v_1 = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab0: {
            while (true) {
                const /** number */ v_2 = this.cursor;
                // deno-lint-ignore no-unused-labels
                lab1: {
                    if (!this.go_out_grouping(g_vowel, 97, 117)) break lab1;
                    this.cursor++;
                    ++this.#I_measure;
                    continue;
                }
                this.cursor = v_2;
                break;
            }
        }
        this.cursor = v_1;
        if (this.#I_measure <= 2) return false;
        this.#I_prefix = 0;
        this.limit_backward = this.cursor; this.cursor = this.limit;
        const /** number */ v_3 = this.limit - this.cursor;
        this.#r_remove_particle();
        this.cursor = this.limit - v_3;
        if (this.#I_measure <= 2) return false;
        const /** number */ v_4 = this.limit - this.cursor;
        this.#r_remove_possessive_pronoun();
        this.cursor = this.limit - v_4;
        this.cursor = this.limit_backward;
        if (this.#I_measure <= 2) return false;
        // deno-lint-ignore no-unused-labels
        lab2: {
            const /** number */ v_5 = this.cursor;
            // deno-lint-ignore no-unused-labels
            lab3: {
                const /** number */ v_6 = this.cursor;
                if (!this.#r_remove_first_order_prefix()) break lab3;
                const /** number */ v_7 = this.cursor;
                // deno-lint-ignore no-unused-labels
                lab4: {
                    const /** number */ v_8 = this.cursor;
                    if (this.#I_measure <= 2) break lab4;
                    this.limit_backward = this.cursor; this.cursor = this.limit;
                    if (!this.#r_remove_suffix()) break lab4;
                    this.cursor = this.limit_backward;
                    this.cursor = v_8;
                    if (this.#I_measure <= 2) break lab4;
                    if (!this.#r_remove_second_order_prefix()) break lab4;
                }
                this.cursor = v_7;
                this.cursor = v_6;
                break lab2;
            }
            this.cursor = v_5;
            const /** number */ v_9 = this.cursor;
            this.#r_remove_second_order_prefix();
            this.cursor = v_9;
            const /** number */ v_10 = this.cursor;
            // deno-lint-ignore no-unused-labels
            lab5: {
                if (this.#I_measure <= 2) break lab5;
                this.limit_backward = this.cursor; this.cursor = this.limit;
                if (!this.#r_remove_suffix()) break lab5;
                this.cursor = this.limit_backward;
            }
            this.cursor = v_10;
        }
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

export {IndonesianStemmer as default,IndonesianStemmer};
