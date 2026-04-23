// Generated from dutch.sbl by Snowball 3.0.0 - https://snowballstem.org/

// deno-lint-ignore-file ban-unused-ignore no-constant-condition no-empty prefer-const

const a_0 = [
    ["a", -1, 1],
    ["e", -1, 2],
    ["o", -1, 1],
    ["u", -1, 1],
    ["\u00E0", -1, 1],
    ["\u00E1", -1, 1],
    ["\u00E2", -1, 1],
    ["\u00E4", -1, 1],
    ["\u00E8", -1, 2],
    ["\u00E9", -1, 2],
    ["\u00EA", -1, 2],
    ["e\u00EB", -1, 3],
    ["i\u00EB", -1, 4],
    ["\u00F2", -1, 1],
    ["\u00F3", -1, 1],
    ["\u00F4", -1, 1],
    ["\u00F6", -1, 1],
    ["\u00F9", -1, 1],
    ["\u00FA", -1, 1],
    ["\u00FB", -1, 1],
    ["\u00FC", -1, 1]
];

const a_1 = [
    ["nde", -1, 8],
    ["en", -1, 7],
    ["s", -1, 2],
    ["'s", 2, 1],
    ["es", 2, 4],
    ["ies", 4, 3],
    ["aus", 2, 6],
    ["\u00E9s", 2, 5]
];

const a_2 = [
    ["de", -1, 5],
    ["ge", -1, 2],
    ["ische", -1, 4],
    ["je", -1, 1],
    ["lijke", -1, 3],
    ["le", -1, 9],
    ["ene", -1, 10],
    ["re", -1, 8],
    ["se", -1, 7],
    ["te", -1, 6],
    ["ieve", -1, 11]
];

const a_3 = [
    ["heid", -1, 3],
    ["fie", -1, 7],
    ["gie", -1, 8],
    ["atie", -1, 1],
    ["isme", -1, 5],
    ["ing", -1, 5],
    ["arij", -1, 6],
    ["erij", -1, 5],
    ["sel", -1, 3],
    ["rder", -1, 4],
    ["ster", -1, 3],
    ["iteit", -1, 2],
    ["dst", -1, 10],
    ["tst", -1, 9]
];

const a_4 = [
    ["end", -1, 9],
    ["atief", -1, 2],
    ["erig", -1, 9],
    ["achtig", -1, 3],
    ["ioneel", -1, 1],
    ["baar", -1, 3],
    ["laar", -1, 5],
    ["naar", -1, 4],
    ["raar", -1, 6],
    ["eriger", -1, 9],
    ["achtiger", -1, 3],
    ["lijker", -1, 8],
    ["tant", -1, 7],
    ["erigst", -1, 9],
    ["achtigst", -1, 3],
    ["lijkst", -1, 8]
];

const a_5 = [
    ["ig", -1, 1],
    ["iger", -1, 1],
    ["igst", -1, 1]
];

const a_6 = [
    ["ft", -1, 2],
    ["kt", -1, 1],
    ["pt", -1, 3]
];

const a_7 = [
    ["bb", -1, 1],
    ["cc", -1, 2],
    ["dd", -1, 3],
    ["ff", -1, 4],
    ["gg", -1, 5],
    ["hh", -1, 6],
    ["jj", -1, 7],
    ["kk", -1, 8],
    ["ll", -1, 9],
    ["mm", -1, 10],
    ["nn", -1, 11],
    ["pp", -1, 12],
    ["qq", -1, 13],
    ["rr", -1, 14],
    ["ss", -1, 15],
    ["tt", -1, 16],
    ["v", -1, 4],
    ["vv", 16, 17],
    ["ww", -1, 18],
    ["xx", -1, 19],
    ["z", -1, 15],
    ["zz", 20, 20]
];

const a_8 = [
    ["d", -1, 1],
    ["t", -1, 2]
];

const a_9 = [
    ["", -1, -1],
    ["eft", 0, 1],
    ["vaa", 0, 1],
    ["val", 0, 1],
    ["vali", 3, -1],
    ["vare", 0, 1]
];

const a_10 = [
    ["\u00EB", -1, 1],
    ["\u00EF", -1, 2]
];

const a_11 = [
    ["\u00EB", -1, 1],
    ["\u00EF", -1, 2]
];

const /** Array<number> */ g_E = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120];

const /** Array<number> */ g_AIOU = [1, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 11, 120, 46, 15];

const /** Array<number> */ g_AEIOU = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 139, 127, 46, 15];

const /** Array<number> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 139, 127, 46, 15];

const /** Array<number> */ g_v_WX = [17, 65, 208, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 139, 127, 46, 15];

import { BaseStemmer } from './base-stemmer.js'

export class DutchStemmer extends BaseStemmer {

    #B_GE_removed/** boolean */ = false;
    #I_p2/** number */ = 0;
    #I_p1/** number */ = 0;


    /** @return {boolean} */
    #r_R1() {
        return this.#I_p1 <= this.cursor;
    }

    /** @return {boolean} */
    #r_R2() {
        return this.#I_p2 <= this.cursor;
    }

    /** @return {boolean} */
    #r_V() {
        const /** number */ v_1 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_2 = this.limit - this.cursor;
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!(this.in_grouping_b(g_v, 97, 252))) break lab1;
                break lab0;
            }
            this.cursor = this.limit - v_2;
            if (!(this.eq_s_b("ij"))) return false;
        }
        this.cursor = this.limit - v_1;
        return true;
    }

    /** @return {boolean} */
    #r_VX() {
        const /** number */ v_1 = this.limit - this.cursor;
        if (this.cursor <= this.limit_backward) return false;
        this.cursor--;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_2 = this.limit - this.cursor;
            // deno-lint-ignore no-unused-labels
            lab1: {
                if (!(this.in_grouping_b(g_v, 97, 252))) break lab1;
                break lab0;
            }
            this.cursor = this.limit - v_2;
            if (!(this.eq_s_b("ij"))) return false;
        }
        this.cursor = this.limit - v_1;
        return true;
    }

    /** @return {boolean} */
    #r_C() {
        const /** number */ v_1 = this.limit - this.cursor;
        {
            const /** number */ v_2 = this.limit - this.cursor;
            // deno-lint-ignore no-unused-labels
            lab0: {
                if (!(this.eq_s_b("ij"))) break lab0;
                return false;
            }
            this.cursor = this.limit - v_2;
        }
        if (!(this.out_grouping_b(g_v, 97, 252))) return false;
        this.cursor = this.limit - v_1;
        return true;
    }

    /** @return {boolean} */
    #r_lengthen_V() {
        let /** number */ a;
        let /** string */ S_ch;
        const /** number */ v_1 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (!(this.out_grouping_b(g_v_WX, 97, 252))) break lab0;
            this.ket = this.cursor;
            a = this.find_among_b(a_0);
            if (a === 0) break lab0;
            this.bra = this.cursor;
            switch (a) {
                case 1: {
                    const /** number */ v_2 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        const /** number */ v_3 = this.limit - this.cursor;
                        // deno-lint-ignore no-unused-labels
                        lab2: {
                            if (!(this.out_grouping_b(g_AEIOU, 97, 252))) break lab2;
                            break lab1;
                        }
                        this.cursor = this.limit - v_3;
                        if (this.cursor > this.limit_backward) break lab0;
                    }
                    this.cursor = this.limit - v_2;
                    S_ch = this.slice_to();
                    {
                        const /** number */ c = this.cursor;
                        this.insert(c, c, S_ch);
                        this.cursor = c;
                    }
                    break;
                }
                case 2: {
                    const /** number */ v_4 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab3: {
                        const /** number */ v_5 = this.limit - this.cursor;
                        // deno-lint-ignore no-unused-labels
                        lab4: {
                            if (!(this.out_grouping_b(g_AEIOU, 97, 252))) break lab4;
                            break lab3;
                        }
                        this.cursor = this.limit - v_5;
                        if (this.cursor > this.limit_backward) break lab0;
                    }
                    {
                        const /** number */ v_6 = this.limit - this.cursor;
                        // deno-lint-ignore no-unused-labels
                        lab5: {
                            // deno-lint-ignore no-unused-labels
                            lab6: {
                                const /** number */ v_7 = this.limit - this.cursor;
                                // deno-lint-ignore no-unused-labels
                                lab7: {
                                    if (!(this.in_grouping_b(g_AIOU, 97, 252))) break lab7;
                                    break lab6;
                                }
                                this.cursor = this.limit - v_7;
                                if (!(this.in_grouping_b(g_E, 101, 235))) break lab5;
                                if (this.cursor > this.limit_backward) break lab5;
                            }
                            break lab0;
                        }
                        this.cursor = this.limit - v_6;
                    }
                    {
                        const /** number */ v_8 = this.limit - this.cursor;
                        // deno-lint-ignore no-unused-labels
                        lab8: {
                            if (this.cursor <= this.limit_backward) break lab8;
                            this.cursor--;
                            if (!(this.in_grouping_b(g_AIOU, 97, 252))) break lab8;
                            if (!(this.out_grouping_b(g_AEIOU, 97, 252))) break lab8;
                            break lab0;
                        }
                        this.cursor = this.limit - v_8;
                    }
                    this.cursor = this.limit - v_4;
                    S_ch = this.slice_to();
                    {
                        const /** number */ c = this.cursor;
                        this.insert(c, c, S_ch);
                        this.cursor = c;
                    }
                    break;
                }
                case 3: {
                    this.slice_from("e\u00EBe");
                    break;
                }
                case 4: {
                    this.slice_from("iee");
                    break;
                }
            }
        }
        this.cursor = this.limit - v_1;
        return true;
    }

    /** @return {boolean} */
    #r_Step_1() {
        let /** number */ a;
        this.ket = this.cursor;
        a = this.find_among_b(a_1);
        if (a === 0) return false;
        this.bra = this.cursor;
        switch (a) {
            case 1: {
                this.slice_del();
                break;
            }
            case 2: {
                if (!this.#r_R1()) return false;
                {
                    const /** number */ v_1 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab0: {
                        if (!(this.eq_s_b("t"))) break lab0;
                        if (!this.#r_R1()) break lab0;
                        return false;
                    }
                    this.cursor = this.limit - v_1;
                }
                if (!this.#r_C()) return false;
                this.slice_del();
                break;
            }
            case 3: {
                if (!this.#r_R1()) return false;
                this.slice_from("ie");
                break;
            }
            case 4: {
                // deno-lint-ignore no-unused-labels
                lab1: {
                    const /** number */ v_2 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab2: {
                        const /** number */ v_3 = this.limit - this.cursor;
                        if (!(this.eq_s_b("ar"))) break lab2;
                        if (!this.#r_R1()) break lab2;
                        if (!this.#r_C()) break lab2;
                        this.cursor = this.limit - v_3;
                        this.slice_del();
                        this.#r_lengthen_V();
                        break lab1;
                    }
                    this.cursor = this.limit - v_2;
                    // deno-lint-ignore no-unused-labels
                    lab3: {
                        const /** number */ v_4 = this.limit - this.cursor;
                        if (!(this.eq_s_b("er"))) break lab3;
                        if (!this.#r_R1()) break lab3;
                        if (!this.#r_C()) break lab3;
                        this.cursor = this.limit - v_4;
                        this.slice_del();
                        break lab1;
                    }
                    this.cursor = this.limit - v_2;
                    if (!this.#r_R1()) return false;
                    if (!this.#r_C()) return false;
                    this.slice_from("e");
                }
                break;
            }
            case 5: {
                if (!this.#r_R1()) return false;
                this.slice_from("\u00E9");
                break;
            }
            case 6: {
                if (!this.#r_R1()) return false;
                if (!this.#r_V()) return false;
                this.slice_from("au");
                break;
            }
            case 7: {
                // deno-lint-ignore no-unused-labels
                lab4: {
                    const /** number */ v_5 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab5: {
                        if (!(this.eq_s_b("hed"))) break lab5;
                        if (!this.#r_R1()) break lab5;
                        this.bra = this.cursor;
                        this.slice_from("heid");
                        break lab4;
                    }
                    this.cursor = this.limit - v_5;
                    // deno-lint-ignore no-unused-labels
                    lab6: {
                        if (!(this.eq_s_b("nd"))) break lab6;
                        this.slice_del();
                        break lab4;
                    }
                    this.cursor = this.limit - v_5;
                    // deno-lint-ignore no-unused-labels
                    lab7: {
                        if (!(this.eq_s_b("d"))) break lab7;
                        if (!this.#r_R1()) break lab7;
                        if (!this.#r_C()) break lab7;
                        this.bra = this.cursor;
                        this.slice_del();
                        break lab4;
                    }
                    this.cursor = this.limit - v_5;
                    // deno-lint-ignore no-unused-labels
                    lab8: {
                        // deno-lint-ignore no-unused-labels
                        lab9: {
                            const /** number */ v_6 = this.limit - this.cursor;
                            // deno-lint-ignore no-unused-labels
                            lab10: {
                                if (!(this.eq_s_b("i"))) break lab10;
                                break lab9;
                            }
                            this.cursor = this.limit - v_6;
                            if (!(this.eq_s_b("j"))) break lab8;
                        }
                        if (!this.#r_V()) break lab8;
                        this.slice_del();
                        break lab4;
                    }
                    this.cursor = this.limit - v_5;
                    if (!this.#r_R1()) return false;
                    if (!this.#r_C()) return false;
                    this.slice_del();
                    this.#r_lengthen_V();
                }
                break;
            }
            case 8: {
                this.slice_from("nd");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_2() {
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
                        if (!(this.eq_s_b("'t"))) break lab1;
                        this.bra = this.cursor;
                        this.slice_del();
                        break lab0;
                    }
                    this.cursor = this.limit - v_1;
                    // deno-lint-ignore no-unused-labels
                    lab2: {
                        if (!(this.eq_s_b("et"))) break lab2;
                        this.bra = this.cursor;
                        if (!this.#r_R1()) break lab2;
                        if (!this.#r_C()) break lab2;
                        this.slice_del();
                        break lab0;
                    }
                    this.cursor = this.limit - v_1;
                    // deno-lint-ignore no-unused-labels
                    lab3: {
                        if (!(this.eq_s_b("rnt"))) break lab3;
                        this.bra = this.cursor;
                        this.slice_from("rn");
                        break lab0;
                    }
                    this.cursor = this.limit - v_1;
                    // deno-lint-ignore no-unused-labels
                    lab4: {
                        if (!(this.eq_s_b("t"))) break lab4;
                        this.bra = this.cursor;
                        if (!this.#r_R1()) break lab4;
                        if (!this.#r_VX()) break lab4;
                        this.slice_del();
                        break lab0;
                    }
                    this.cursor = this.limit - v_1;
                    // deno-lint-ignore no-unused-labels
                    lab5: {
                        if (!(this.eq_s_b("ink"))) break lab5;
                        this.bra = this.cursor;
                        this.slice_from("ing");
                        break lab0;
                    }
                    this.cursor = this.limit - v_1;
                    // deno-lint-ignore no-unused-labels
                    lab6: {
                        if (!(this.eq_s_b("mp"))) break lab6;
                        this.bra = this.cursor;
                        this.slice_from("m");
                        break lab0;
                    }
                    this.cursor = this.limit - v_1;
                    // deno-lint-ignore no-unused-labels
                    lab7: {
                        if (!(this.eq_s_b("'"))) break lab7;
                        this.bra = this.cursor;
                        if (!this.#r_R1()) break lab7;
                        this.slice_del();
                        break lab0;
                    }
                    this.cursor = this.limit - v_1;
                    this.bra = this.cursor;
                    if (!this.#r_R1()) return false;
                    if (!this.#r_C()) return false;
                    this.slice_del();
                }
                break;
            }
            case 2: {
                if (!this.#r_R1()) return false;
                this.slice_from("g");
                break;
            }
            case 3: {
                if (!this.#r_R1()) return false;
                this.slice_from("lijk");
                break;
            }
            case 4: {
                if (!this.#r_R1()) return false;
                this.slice_from("isch");
                break;
            }
            case 5: {
                if (!this.#r_R1()) return false;
                if (!this.#r_C()) return false;
                this.slice_del();
                break;
            }
            case 6: {
                if (!this.#r_R1()) return false;
                this.slice_from("t");
                break;
            }
            case 7: {
                if (!this.#r_R1()) return false;
                this.slice_from("s");
                break;
            }
            case 8: {
                if (!this.#r_R1()) return false;
                this.slice_from("r");
                break;
            }
            case 9: {
                if (!this.#r_R1()) return false;
                this.slice_del();
                this.insert(this.cursor, this.cursor, "l");
                this.#r_lengthen_V();
                break;
            }
            case 10: {
                if (!this.#r_R1()) return false;
                if (!this.#r_C()) return false;
                this.slice_del();
                this.insert(this.cursor, this.cursor, "en");
                this.#r_lengthen_V();
                break;
            }
            case 11: {
                if (!this.#r_R1()) return false;
                if (!this.#r_C()) return false;
                this.slice_from("ief");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_3() {
        let /** number */ a;
        this.ket = this.cursor;
        a = this.find_among_b(a_3);
        if (a === 0) return false;
        this.bra = this.cursor;
        switch (a) {
            case 1: {
                if (!this.#r_R1()) return false;
                this.slice_from("eer");
                break;
            }
            case 2: {
                if (!this.#r_R1()) return false;
                this.slice_del();
                this.#r_lengthen_V();
                break;
            }
            case 3: {
                if (!this.#r_R1()) return false;
                this.slice_del();
                break;
            }
            case 4: {
                this.slice_from("r");
                break;
            }
            case 5: {
                // deno-lint-ignore no-unused-labels
                lab0: {
                    const /** number */ v_1 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab1: {
                        if (!(this.eq_s_b("ild"))) break lab1;
                        this.slice_from("er");
                        break lab0;
                    }
                    this.cursor = this.limit - v_1;
                    if (!this.#r_R1()) return false;
                    this.slice_del();
                    this.#r_lengthen_V();
                }
                break;
            }
            case 6: {
                if (!this.#r_R1()) return false;
                if (!this.#r_C()) return false;
                this.slice_from("aar");
                break;
            }
            case 7: {
                if (!this.#r_R2()) return false;
                this.slice_del();
                this.insert(this.cursor, this.cursor, "f");
                this.#r_lengthen_V();
                break;
            }
            case 8: {
                if (!this.#r_R2()) return false;
                this.slice_del();
                this.insert(this.cursor, this.cursor, "g");
                this.#r_lengthen_V();
                break;
            }
            case 9: {
                if (!this.#r_R1()) return false;
                if (!this.#r_C()) return false;
                this.slice_from("t");
                break;
            }
            case 10: {
                if (!this.#r_R1()) return false;
                if (!this.#r_C()) return false;
                this.slice_from("d");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_4() {
        let /** number */ a;
        // deno-lint-ignore no-unused-labels
        lab0: {
            const /** number */ v_1 = this.limit - this.cursor;
            // deno-lint-ignore no-unused-labels
            lab1: {
                this.ket = this.cursor;
                a = this.find_among_b(a_4);
                if (a === 0) break lab1;
                this.bra = this.cursor;
                switch (a) {
                    case 1: {
                        if (!this.#r_R1()) break lab1;
                        this.slice_from("ie");
                        break;
                    }
                    case 2: {
                        if (!this.#r_R1()) break lab1;
                        this.slice_from("eer");
                        break;
                    }
                    case 3: {
                        if (!this.#r_R1()) break lab1;
                        this.slice_del();
                        break;
                    }
                    case 4: {
                        if (!this.#r_R1()) break lab1;
                        if (!this.#r_V()) break lab1;
                        this.slice_from("n");
                        break;
                    }
                    case 5: {
                        if (!this.#r_R1()) break lab1;
                        if (!this.#r_V()) break lab1;
                        this.slice_from("l");
                        break;
                    }
                    case 6: {
                        if (!this.#r_R1()) break lab1;
                        if (!this.#r_V()) break lab1;
                        this.slice_from("r");
                        break;
                    }
                    case 7: {
                        if (!this.#r_R1()) break lab1;
                        this.slice_from("teer");
                        break;
                    }
                    case 8: {
                        if (!this.#r_R1()) break lab1;
                        this.slice_from("lijk");
                        break;
                    }
                    case 9: {
                        if (!this.#r_R1()) break lab1;
                        if (!this.#r_C()) break lab1;
                        this.slice_del();
                        this.#r_lengthen_V();
                        break;
                    }
                }
                break lab0;
            }
            this.cursor = this.limit - v_1;
            this.ket = this.cursor;
            if (this.find_among_b(a_5) === 0) return false;
            this.bra = this.cursor;
            if (!this.#r_R1()) return false;
            {
                const /** number */ v_2 = this.limit - this.cursor;
                // deno-lint-ignore no-unused-labels
                lab2: {
                    if (!(this.eq_s_b("inn"))) break lab2;
                    if (this.cursor > this.limit_backward) break lab2;
                    return false;
                }
                this.cursor = this.limit - v_2;
            }
            if (!this.#r_C()) return false;
            this.slice_del();
            this.#r_lengthen_V();
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_7() {
        let /** number */ a;
        this.ket = this.cursor;
        a = this.find_among_b(a_6);
        if (a === 0) return false;
        this.bra = this.cursor;
        switch (a) {
            case 1: {
                this.slice_from("k");
                break;
            }
            case 2: {
                this.slice_from("f");
                break;
            }
            case 3: {
                this.slice_from("p");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_6() {
        let /** number */ a;
        this.ket = this.cursor;
        a = this.find_among_b(a_7);
        if (a === 0) return false;
        this.bra = this.cursor;
        switch (a) {
            case 1: {
                this.slice_from("b");
                break;
            }
            case 2: {
                this.slice_from("c");
                break;
            }
            case 3: {
                this.slice_from("d");
                break;
            }
            case 4: {
                this.slice_from("f");
                break;
            }
            case 5: {
                this.slice_from("g");
                break;
            }
            case 6: {
                this.slice_from("h");
                break;
            }
            case 7: {
                this.slice_from("j");
                break;
            }
            case 8: {
                this.slice_from("k");
                break;
            }
            case 9: {
                this.slice_from("l");
                break;
            }
            case 10: {
                this.slice_from("m");
                break;
            }
            case 11: {
                {
                    const /** number */ v_1 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab0: {
                        if (!(this.eq_s_b("i"))) break lab0;
                        if (this.cursor > this.limit_backward) break lab0;
                        return false;
                    }
                    this.cursor = this.limit - v_1;
                }
                this.slice_from("n");
                break;
            }
            case 12: {
                this.slice_from("p");
                break;
            }
            case 13: {
                this.slice_from("q");
                break;
            }
            case 14: {
                this.slice_from("r");
                break;
            }
            case 15: {
                this.slice_from("s");
                break;
            }
            case 16: {
                this.slice_from("t");
                break;
            }
            case 17: {
                this.slice_from("v");
                break;
            }
            case 18: {
                this.slice_from("w");
                break;
            }
            case 19: {
                this.slice_from("x");
                break;
            }
            case 20: {
                this.slice_from("z");
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Step_1c() {
        let /** number */ a;
        this.ket = this.cursor;
        a = this.find_among_b(a_8);
        if (a === 0) return false;
        this.bra = this.cursor;
        if (!this.#r_R1()) return false;
        if (!this.#r_C()) return false;
        switch (a) {
            case 1: {
                {
                    const /** number */ v_1 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab0: {
                        if (!(this.eq_s_b("n"))) break lab0;
                        if (!this.#r_R1()) break lab0;
                        return false;
                    }
                    this.cursor = this.limit - v_1;
                }
                // deno-lint-ignore no-unused-labels
                lab1: {
                    const /** number */ v_2 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab2: {
                        if (!(this.eq_s_b("in"))) break lab2;
                        if (this.cursor > this.limit_backward) break lab2;
                        this.slice_from("n");
                        break lab1;
                    }
                    this.cursor = this.limit - v_2;
                    this.slice_del();
                }
                break;
            }
            case 2: {
                {
                    const /** number */ v_3 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab3: {
                        if (!(this.eq_s_b("h"))) break lab3;
                        if (!this.#r_R1()) break lab3;
                        return false;
                    }
                    this.cursor = this.limit - v_3;
                }
                {
                    const /** number */ v_4 = this.limit - this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab4: {
                        if (!(this.eq_s_b("en"))) break lab4;
                        if (this.cursor > this.limit_backward) break lab4;
                        return false;
                    }
                    this.cursor = this.limit - v_4;
                }
                this.slice_del();
                break;
            }
        }
        return true;
    }

    /** @return {boolean} */
    #r_Lose_prefix() {
        let /** number */ a;
        this.bra = this.cursor;
        if (!(this.eq_s("ge"))) return false;
        this.ket = this.cursor;
        const /** number */ v_1 = this.cursor;
        {
            const /** number */ c = this.cursor + 3;
            if (c > this.limit) return false;
            this.cursor = c;
        }
        this.cursor = v_1;
        const /** number */ v_2 = this.cursor;
        // deno-lint-ignore no-unused-labels
        golab0: while (true)
        {
            const /** number */ v_3 = this.cursor;
            // deno-lint-ignore no-unused-labels
            lab1: {
                // deno-lint-ignore no-unused-labels
                lab2: {
                    const /** number */ v_4 = this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab3: {
                        if (!(this.eq_s("ij"))) break lab3;
                        break lab2;
                    }
                    this.cursor = v_4;
                    if (!(this.in_grouping(g_v, 97, 252))) break lab1;
                }
                break golab0;
            }
            this.cursor = v_3;
            if (this.cursor >= this.limit) return false;
            this.cursor++;
        }
        while (true) {
            const /** number */ v_5 = this.cursor;
            // deno-lint-ignore no-unused-labels
            lab4: {
                // deno-lint-ignore no-unused-labels
                lab5: {
                    const /** number */ v_6 = this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab6: {
                        if (!(this.eq_s("ij"))) break lab6;
                        break lab5;
                    }
                    this.cursor = v_6;
                    if (!(this.in_grouping(g_v, 97, 252))) break lab4;
                }
                continue;
            }
            this.cursor = v_5;
            break;
        }
        // deno-lint-ignore no-unused-labels
        lab7: {
            if (this.cursor < this.limit) break lab7;
            return false;
        }
        this.cursor = v_2;
        a = this.find_among(a_9);
        switch (a) {
            case 1: {
                return false;
            }
        }
        this.#B_GE_removed = true;
        this.slice_del();
        const /** number */ v_7 = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab8: {
            this.bra = this.cursor;
            a = this.find_among(a_10);
            if (a === 0) break lab8;
            this.ket = this.cursor;
            switch (a) {
                case 1: {
                    this.slice_from("e");
                    break;
                }
                case 2: {
                    this.slice_from("i");
                    break;
                }
            }
        }
        this.cursor = v_7;
        return true;
    }

    /** @return {boolean} */
    #r_Lose_infix() {
        let /** number */ a;
        if (this.cursor >= this.limit) return false;
        this.cursor++;
        // deno-lint-ignore no-unused-labels
        golab0: while (true)
        {
            // deno-lint-ignore no-unused-labels
            lab1: {
                this.bra = this.cursor;
                if (!(this.eq_s("ge"))) break lab1;
                this.ket = this.cursor;
                break golab0;
            }
            if (this.cursor >= this.limit) return false;
            this.cursor++;
        }
        const /** number */ v_1 = this.cursor;
        {
            const /** number */ c = this.cursor + 3;
            if (c > this.limit) return false;
            this.cursor = c;
        }
        this.cursor = v_1;
        const /** number */ v_2 = this.cursor;
        // deno-lint-ignore no-unused-labels
        golab2: while (true)
        {
            const /** number */ v_3 = this.cursor;
            // deno-lint-ignore no-unused-labels
            lab3: {
                // deno-lint-ignore no-unused-labels
                lab4: {
                    const /** number */ v_4 = this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab5: {
                        if (!(this.eq_s("ij"))) break lab5;
                        break lab4;
                    }
                    this.cursor = v_4;
                    if (!(this.in_grouping(g_v, 97, 252))) break lab3;
                }
                break golab2;
            }
            this.cursor = v_3;
            if (this.cursor >= this.limit) return false;
            this.cursor++;
        }
        while (true) {
            const /** number */ v_5 = this.cursor;
            // deno-lint-ignore no-unused-labels
            lab6: {
                // deno-lint-ignore no-unused-labels
                lab7: {
                    const /** number */ v_6 = this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab8: {
                        if (!(this.eq_s("ij"))) break lab8;
                        break lab7;
                    }
                    this.cursor = v_6;
                    if (!(this.in_grouping(g_v, 97, 252))) break lab6;
                }
                continue;
            }
            this.cursor = v_5;
            break;
        }
        // deno-lint-ignore no-unused-labels
        lab9: {
            if (this.cursor < this.limit) break lab9;
            return false;
        }
        this.cursor = v_2;
        this.#B_GE_removed = true;
        this.slice_del();
        const /** number */ v_7 = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab10: {
            this.bra = this.cursor;
            a = this.find_among(a_11);
            if (a === 0) break lab10;
            this.ket = this.cursor;
            switch (a) {
                case 1: {
                    this.slice_from("e");
                    break;
                }
                case 2: {
                    this.slice_from("i");
                    break;
                }
            }
        }
        this.cursor = v_7;
        return true;
    }

    /** @return {boolean} */
    #r_measure() {
        this.#I_p1 = this.limit;
        this.#I_p2 = this.limit;
        const /** number */ v_1 = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab0: {
            while (true) {
                // deno-lint-ignore no-unused-labels
                lab1: {
                    if (!(this.out_grouping(g_v, 97, 252))) break lab1;
                    continue;
                }
                break;
            }
            {
                let v_2 = 1;
                while (true) {
                    const /** number */ v_3 = this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab2: {
                        // deno-lint-ignore no-unused-labels
                        lab3: {
                            const /** number */ v_4 = this.cursor;
                            // deno-lint-ignore no-unused-labels
                            lab4: {
                                if (!(this.eq_s("ij"))) break lab4;
                                break lab3;
                            }
                            this.cursor = v_4;
                            if (!(this.in_grouping(g_v, 97, 252))) break lab2;
                        }
                        v_2--;
                        continue;
                    }
                    this.cursor = v_3;
                    break;
                }
                if (v_2 > 0) break lab0;
            }
            if (!(this.out_grouping(g_v, 97, 252))) break lab0;
            this.#I_p1 = this.cursor;
            while (true) {
                // deno-lint-ignore no-unused-labels
                lab5: {
                    if (!(this.out_grouping(g_v, 97, 252))) break lab5;
                    continue;
                }
                break;
            }
            {
                let v_5 = 1;
                while (true) {
                    const /** number */ v_6 = this.cursor;
                    // deno-lint-ignore no-unused-labels
                    lab6: {
                        // deno-lint-ignore no-unused-labels
                        lab7: {
                            const /** number */ v_7 = this.cursor;
                            // deno-lint-ignore no-unused-labels
                            lab8: {
                                if (!(this.eq_s("ij"))) break lab8;
                                break lab7;
                            }
                            this.cursor = v_7;
                            if (!(this.in_grouping(g_v, 97, 252))) break lab6;
                        }
                        v_5--;
                        continue;
                    }
                    this.cursor = v_6;
                    break;
                }
                if (v_5 > 0) break lab0;
            }
            if (!(this.out_grouping(g_v, 97, 252))) break lab0;
            this.#I_p2 = this.cursor;
        }
        this.cursor = v_1;
        return true;
    }

    /** @return {boolean} */
    #stem() {
        let /** boolean */ B_stemmed;
        B_stemmed = false;
        this.#r_measure();
        this.limit_backward = this.cursor; this.cursor = this.limit;
        const /** number */ v_1 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab0: {
            if (!this.#r_Step_1()) break lab0;
            B_stemmed = true;
        }
        this.cursor = this.limit - v_1;
        const /** number */ v_2 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab1: {
            if (!this.#r_Step_2()) break lab1;
            B_stemmed = true;
        }
        this.cursor = this.limit - v_2;
        const /** number */ v_3 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab2: {
            if (!this.#r_Step_3()) break lab2;
            B_stemmed = true;
        }
        this.cursor = this.limit - v_3;
        const /** number */ v_4 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab3: {
            if (!this.#r_Step_4()) break lab3;
            B_stemmed = true;
        }
        this.cursor = this.limit - v_4;
        this.cursor = this.limit_backward;
        this.#B_GE_removed = false;
        const /** number */ v_5 = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab4: {
            const /** number */ v_6 = this.cursor;
            if (!this.#r_Lose_prefix()) break lab4;
            this.cursor = v_6;
            this.#r_measure();
        }
        this.cursor = v_5;
        this.limit_backward = this.cursor; this.cursor = this.limit;
        const /** number */ v_7 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab5: {
            if (!this.#B_GE_removed) break lab5;
            B_stemmed = true;
            if (!this.#r_Step_1c()) break lab5;
        }
        this.cursor = this.limit - v_7;
        this.cursor = this.limit_backward;
        this.#B_GE_removed = false;
        const /** number */ v_8 = this.cursor;
        // deno-lint-ignore no-unused-labels
        lab6: {
            const /** number */ v_9 = this.cursor;
            if (!this.#r_Lose_infix()) break lab6;
            this.cursor = v_9;
            this.#r_measure();
        }
        this.cursor = v_8;
        this.limit_backward = this.cursor; this.cursor = this.limit;
        const /** number */ v_10 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab7: {
            if (!this.#B_GE_removed) break lab7;
            B_stemmed = true;
            if (!this.#r_Step_1c()) break lab7;
        }
        this.cursor = this.limit - v_10;
        this.cursor = this.limit_backward;
        this.limit_backward = this.cursor; this.cursor = this.limit;
        const /** number */ v_11 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab8: {
            if (!this.#r_Step_7()) break lab8;
            B_stemmed = true;
        }
        this.cursor = this.limit - v_11;
        const /** number */ v_12 = this.limit - this.cursor;
        // deno-lint-ignore no-unused-labels
        lab9: {
            if (!B_stemmed) break lab9;
            if (!this.#r_Step_6()) break lab9;
        }
        this.cursor = this.limit - v_12;
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

export default DutchStemmer;
