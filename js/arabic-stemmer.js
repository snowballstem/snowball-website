// This file was generated automatically by the Snowball to Javascript compiler
// http://snowballstem.org/

/**@constructor*/
function ArabicStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["\u0640", -1, 2],
        ["\u064B", -1, 1],
        ["\u064C", -1, 1],
        ["\u064D", -1, 1],
        ["\u064E", -1, 1],
        ["\u064F", -1, 1],
        ["\u0650", -1, 1],
        ["\u0651", -1, 1],
        ["\u0652", -1, 1],
        ["\u0660", -1, 3],
        ["\u0661", -1, 4],
        ["\u0662", -1, 5],
        ["\u0663", -1, 6],
        ["\u0664", -1, 7],
        ["\u0665", -1, 8],
        ["\u0666", -1, 9],
        ["\u0667", -1, 10],
        ["\u0668", -1, 11],
        ["\u0669", -1, 12],
        ["\uFE80", -1, 13],
        ["\uFE81", -1, 17],
        ["\uFE82", -1, 17],
        ["\uFE83", -1, 14],
        ["\uFE84", -1, 14],
        ["\uFE85", -1, 18],
        ["\uFE86", -1, 18],
        ["\uFE87", -1, 15],
        ["\uFE88", -1, 15],
        ["\uFE89", -1, 16],
        ["\uFE8A", -1, 16],
        ["\uFE8B", -1, 16],
        ["\uFE8C", -1, 16],
        ["\uFE8D", -1, 19],
        ["\uFE8E", -1, 19],
        ["\uFE8F", -1, 20],
        ["\uFE90", -1, 20],
        ["\uFE91", -1, 20],
        ["\uFE92", -1, 20],
        ["\uFE93", -1, 21],
        ["\uFE94", -1, 21],
        ["\uFE95", -1, 22],
        ["\uFE96", -1, 22],
        ["\uFE97", -1, 22],
        ["\uFE98", -1, 22],
        ["\uFE99", -1, 23],
        ["\uFE9A", -1, 23],
        ["\uFE9B", -1, 23],
        ["\uFE9C", -1, 23],
        ["\uFE9D", -1, 24],
        ["\uFE9E", -1, 24],
        ["\uFE9F", -1, 24],
        ["\uFEA0", -1, 24],
        ["\uFEA1", -1, 25],
        ["\uFEA2", -1, 25],
        ["\uFEA3", -1, 25],
        ["\uFEA4", -1, 25],
        ["\uFEA5", -1, 26],
        ["\uFEA6", -1, 26],
        ["\uFEA7", -1, 26],
        ["\uFEA8", -1, 26],
        ["\uFEA9", -1, 27],
        ["\uFEAA", -1, 27],
        ["\uFEAB", -1, 28],
        ["\uFEAC", -1, 28],
        ["\uFEAD", -1, 29],
        ["\uFEAE", -1, 29],
        ["\uFEAF", -1, 30],
        ["\uFEB0", -1, 30],
        ["\uFEB1", -1, 31],
        ["\uFEB2", -1, 31],
        ["\uFEB3", -1, 31],
        ["\uFEB4", -1, 31],
        ["\uFEB5", -1, 32],
        ["\uFEB6", -1, 32],
        ["\uFEB7", -1, 32],
        ["\uFEB8", -1, 32],
        ["\uFEB9", -1, 33],
        ["\uFEBA", -1, 33],
        ["\uFEBB", -1, 33],
        ["\uFEBC", -1, 33],
        ["\uFEBD", -1, 34],
        ["\uFEBE", -1, 34],
        ["\uFEBF", -1, 34],
        ["\uFEC0", -1, 34],
        ["\uFEC1", -1, 35],
        ["\uFEC2", -1, 35],
        ["\uFEC3", -1, 35],
        ["\uFEC4", -1, 35],
        ["\uFEC5", -1, 36],
        ["\uFEC6", -1, 36],
        ["\uFEC7", -1, 36],
        ["\uFEC8", -1, 36],
        ["\uFEC9", -1, 37],
        ["\uFECA", -1, 37],
        ["\uFECB", -1, 37],
        ["\uFECC", -1, 37],
        ["\uFECD", -1, 38],
        ["\uFECE", -1, 38],
        ["\uFECF", -1, 38],
        ["\uFED0", -1, 38],
        ["\uFED1", -1, 39],
        ["\uFED2", -1, 39],
        ["\uFED3", -1, 39],
        ["\uFED4", -1, 39],
        ["\uFED5", -1, 40],
        ["\uFED6", -1, 40],
        ["\uFED7", -1, 40],
        ["\uFED8", -1, 40],
        ["\uFED9", -1, 41],
        ["\uFEDA", -1, 41],
        ["\uFEDB", -1, 41],
        ["\uFEDC", -1, 41],
        ["\uFEDD", -1, 42],
        ["\uFEDE", -1, 42],
        ["\uFEDF", -1, 42],
        ["\uFEE0", -1, 42],
        ["\uFEE1", -1, 43],
        ["\uFEE2", -1, 43],
        ["\uFEE3", -1, 43],
        ["\uFEE4", -1, 43],
        ["\uFEE5", -1, 44],
        ["\uFEE6", -1, 44],
        ["\uFEE7", -1, 44],
        ["\uFEE8", -1, 44],
        ["\uFEE9", -1, 45],
        ["\uFEEA", -1, 45],
        ["\uFEEB", -1, 45],
        ["\uFEEC", -1, 45],
        ["\uFEED", -1, 46],
        ["\uFEEE", -1, 46],
        ["\uFEEF", -1, 47],
        ["\uFEF0", -1, 47],
        ["\uFEF1", -1, 48],
        ["\uFEF2", -1, 48],
        ["\uFEF3", -1, 48],
        ["\uFEF4", -1, 48],
        ["\uFEF5", -1, 52],
        ["\uFEF6", -1, 52],
        ["\uFEF7", -1, 50],
        ["\uFEF8", -1, 50],
        ["\uFEF9", -1, 51],
        ["\uFEFA", -1, 51],
        ["\uFEFB", -1, 49],
        ["\uFEFC", -1, 49]
    ];

    /** @const */ var a_1 = [
        ["\u0622", -1, 1],
        ["\u0623", -1, 1],
        ["\u0624", -1, 2],
        ["\u0625", -1, 1],
        ["\u0626", -1, 3]
    ];

    /** @const */ var a_2 = [
        ["\u0622", -1, 1],
        ["\u0623", -1, 1],
        ["\u0624", -1, 2],
        ["\u0625", -1, 1],
        ["\u0626", -1, 3]
    ];

    /** @const */ var a_3 = [
        ["\u0627\u0644", -1, 2],
        ["\u0628\u0627\u0644", -1, 1],
        ["\u0643\u0627\u0644", -1, 1],
        ["\u0644\u0644", -1, 2]
    ];

    /** @const */ var a_4 = [
        ["\u0623\u0622", -1, 2],
        ["\u0623\u0623", -1, 1],
        ["\u0623\u0624", -1, 3],
        ["\u0623\u0625", -1, 5],
        ["\u0623\u0627", -1, 4]
    ];

    /** @const */ var a_5 = [
        ["\u0641", -1, 1],
        ["\u0648", -1, 2]
    ];

    /** @const */ var a_6 = [
        ["\u0627\u0644", -1, 2],
        ["\u0628\u0627\u0644", -1, 1],
        ["\u0643\u0627\u0644", -1, 1],
        ["\u0644\u0644", -1, 2]
    ];

    /** @const */ var a_7 = [
        ["\u0628", -1, 1],
        ["\u0628\u0628", 0, 2],
        ["\u0643\u0643", -1, 3]
    ];

    /** @const */ var a_8 = [
        ["\u0633\u0623", -1, 4],
        ["\u0633\u062A", -1, 2],
        ["\u0633\u0646", -1, 3],
        ["\u0633\u064A", -1, 1]
    ];

    /** @const */ var a_9 = [
        ["\u062A\u0633\u062A", -1, 1],
        ["\u0646\u0633\u062A", -1, 1],
        ["\u064A\u0633\u062A", -1, 1]
    ];

    /** @const */ var a_10 = [
        ["\u0643\u0645\u0627", -1, 3],
        ["\u0647\u0645\u0627", -1, 3],
        ["\u0646\u0627", -1, 2],
        ["\u0647\u0627", -1, 2],
        ["\u0643", -1, 1],
        ["\u0643\u0645", -1, 2],
        ["\u0647\u0645", -1, 2],
        ["\u0647\u0646", -1, 2],
        ["\u0647", -1, 1],
        ["\u064A", -1, 1]
    ];

    /** @const */ var a_11 = [
        ["\u0646", -1, 1]
    ];

    /** @const */ var a_12 = [
        ["\u0627", -1, 1],
        ["\u0648", -1, 1],
        ["\u064A", -1, 1]
    ];

    /** @const */ var a_13 = [
        ["\u0627\u062A", -1, 1]
    ];

    /** @const */ var a_14 = [
        ["\u062A", -1, 1]
    ];

    /** @const */ var a_15 = [
        ["\u0629", -1, 1]
    ];

    /** @const */ var a_16 = [
        ["\u064A", -1, 1]
    ];

    /** @const */ var a_17 = [
        ["\u0643\u0645\u0627", -1, 3],
        ["\u0647\u0645\u0627", -1, 3],
        ["\u0646\u0627", -1, 2],
        ["\u0647\u0627", -1, 2],
        ["\u0643", -1, 1],
        ["\u0643\u0645", -1, 2],
        ["\u0647\u0645", -1, 2],
        ["\u0643\u0646", -1, 2],
        ["\u0647\u0646", -1, 2],
        ["\u0647", -1, 1],
        ["\u0643\u0645\u0648", -1, 3],
        ["\u0646\u064A", -1, 2]
    ];

    /** @const */ var a_18 = [
        ["\u0627", -1, 2],
        ["\u062A\u0627", 0, 3],
        ["\u062A\u0645\u0627", 0, 5],
        ["\u0646\u0627", 0, 3],
        ["\u062A", -1, 1],
        ["\u0646", -1, 2],
        ["\u0627\u0646", 5, 4],
        ["\u062A\u0646", 5, 3],
        ["\u0648\u0646", 5, 4],
        ["\u064A\u0646", 5, 4],
        ["\u064A", -1, 2]
    ];

    /** @const */ var a_19 = [
        ["\u0648\u0627", -1, 1],
        ["\u062A\u0645", -1, 1]
    ];

    /** @const */ var a_20 = [
        ["\u0648", -1, 1],
        ["\u062A\u0645\u0648", 0, 2]
    ];

    /** @const */ var a_21 = [
        ["\u0649", -1, 1]
    ];

    var /** boolean */ B_is_defined = false;
    var /** boolean */ B_is_verb = false;
    var /** boolean */ B_is_noun = false;
    var /** number */ I_word_len = 0;


    /** @return {boolean} */
    function r_Normalize_pre() {
        var /** number */ among_var;
        // (, line 251
        // loop, line 252
        for (var /** number */ v_1 = base.current.length; v_1 > 0; v_1--)
        {
            // (, line 252
            // or, line 316
            lab0: {
                var /** number */ v_2 = base.cursor;
                lab1: {
                    // (, line 253
                    // [, line 254
                    base.bra = base.cursor;
                    // substring, line 254
                    among_var = base.find_among(a_0);
                    if (among_var == 0)
                    {
                        break lab1;
                    }
                    // ], line 254
                    base.ket = base.cursor;
                    switch (among_var) {
                        case 0:
                            break lab1;
                        case 1:
                            // (, line 255
                            // delete, line 255
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                        case 2:
                            // (, line 256
                            // delete, line 256
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                        case 3:
                            // (, line 259
                            // <-, line 259
                            if (!base.slice_from("0"))
                            {
                                return false;
                            }
                            break;
                        case 4:
                            // (, line 260
                            // <-, line 260
                            if (!base.slice_from("1"))
                            {
                                return false;
                            }
                            break;
                        case 5:
                            // (, line 261
                            // <-, line 261
                            if (!base.slice_from("2"))
                            {
                                return false;
                            }
                            break;
                        case 6:
                            // (, line 262
                            // <-, line 262
                            if (!base.slice_from("3"))
                            {
                                return false;
                            }
                            break;
                        case 7:
                            // (, line 263
                            // <-, line 263
                            if (!base.slice_from("4"))
                            {
                                return false;
                            }
                            break;
                        case 8:
                            // (, line 264
                            // <-, line 264
                            if (!base.slice_from("5"))
                            {
                                return false;
                            }
                            break;
                        case 9:
                            // (, line 265
                            // <-, line 265
                            if (!base.slice_from("6"))
                            {
                                return false;
                            }
                            break;
                        case 10:
                            // (, line 266
                            // <-, line 266
                            if (!base.slice_from("7"))
                            {
                                return false;
                            }
                            break;
                        case 11:
                            // (, line 267
                            // <-, line 267
                            if (!base.slice_from("8"))
                            {
                                return false;
                            }
                            break;
                        case 12:
                            // (, line 268
                            // <-, line 268
                            if (!base.slice_from("9"))
                            {
                                return false;
                            }
                            break;
                        case 13:
                            // (, line 271
                            // <-, line 271
                            if (!base.slice_from("\u0621"))
                            {
                                return false;
                            }
                            break;
                        case 14:
                            // (, line 272
                            // <-, line 272
                            if (!base.slice_from("\u0623"))
                            {
                                return false;
                            }
                            break;
                        case 15:
                            // (, line 273
                            // <-, line 273
                            if (!base.slice_from("\u0625"))
                            {
                                return false;
                            }
                            break;
                        case 16:
                            // (, line 274
                            // <-, line 274
                            if (!base.slice_from("\u0626"))
                            {
                                return false;
                            }
                            break;
                        case 17:
                            // (, line 275
                            // <-, line 275
                            if (!base.slice_from("\u0622"))
                            {
                                return false;
                            }
                            break;
                        case 18:
                            // (, line 276
                            // <-, line 276
                            if (!base.slice_from("\u0624"))
                            {
                                return false;
                            }
                            break;
                        case 19:
                            // (, line 277
                            // <-, line 277
                            if (!base.slice_from("\u0627"))
                            {
                                return false;
                            }
                            break;
                        case 20:
                            // (, line 278
                            // <-, line 278
                            if (!base.slice_from("\u0628"))
                            {
                                return false;
                            }
                            break;
                        case 21:
                            // (, line 279
                            // <-, line 279
                            if (!base.slice_from("\u0629"))
                            {
                                return false;
                            }
                            break;
                        case 22:
                            // (, line 280
                            // <-, line 280
                            if (!base.slice_from("\u062A"))
                            {
                                return false;
                            }
                            break;
                        case 23:
                            // (, line 281
                            // <-, line 281
                            if (!base.slice_from("\u062B"))
                            {
                                return false;
                            }
                            break;
                        case 24:
                            // (, line 282
                            // <-, line 282
                            if (!base.slice_from("\u062C"))
                            {
                                return false;
                            }
                            break;
                        case 25:
                            // (, line 283
                            // <-, line 283
                            if (!base.slice_from("\u062D"))
                            {
                                return false;
                            }
                            break;
                        case 26:
                            // (, line 284
                            // <-, line 284
                            if (!base.slice_from("\u062E"))
                            {
                                return false;
                            }
                            break;
                        case 27:
                            // (, line 285
                            // <-, line 285
                            if (!base.slice_from("\u062F"))
                            {
                                return false;
                            }
                            break;
                        case 28:
                            // (, line 286
                            // <-, line 286
                            if (!base.slice_from("\u0630"))
                            {
                                return false;
                            }
                            break;
                        case 29:
                            // (, line 287
                            // <-, line 287
                            if (!base.slice_from("\u0631"))
                            {
                                return false;
                            }
                            break;
                        case 30:
                            // (, line 288
                            // <-, line 288
                            if (!base.slice_from("\u0632"))
                            {
                                return false;
                            }
                            break;
                        case 31:
                            // (, line 289
                            // <-, line 289
                            if (!base.slice_from("\u0633"))
                            {
                                return false;
                            }
                            break;
                        case 32:
                            // (, line 290
                            // <-, line 290
                            if (!base.slice_from("\u0634"))
                            {
                                return false;
                            }
                            break;
                        case 33:
                            // (, line 291
                            // <-, line 291
                            if (!base.slice_from("\u0635"))
                            {
                                return false;
                            }
                            break;
                        case 34:
                            // (, line 292
                            // <-, line 292
                            if (!base.slice_from("\u0636"))
                            {
                                return false;
                            }
                            break;
                        case 35:
                            // (, line 293
                            // <-, line 293
                            if (!base.slice_from("\u0637"))
                            {
                                return false;
                            }
                            break;
                        case 36:
                            // (, line 294
                            // <-, line 294
                            if (!base.slice_from("\u0638"))
                            {
                                return false;
                            }
                            break;
                        case 37:
                            // (, line 295
                            // <-, line 295
                            if (!base.slice_from("\u0639"))
                            {
                                return false;
                            }
                            break;
                        case 38:
                            // (, line 296
                            // <-, line 296
                            if (!base.slice_from("\u063A"))
                            {
                                return false;
                            }
                            break;
                        case 39:
                            // (, line 297
                            // <-, line 297
                            if (!base.slice_from("\u0641"))
                            {
                                return false;
                            }
                            break;
                        case 40:
                            // (, line 298
                            // <-, line 298
                            if (!base.slice_from("\u0642"))
                            {
                                return false;
                            }
                            break;
                        case 41:
                            // (, line 299
                            // <-, line 299
                            if (!base.slice_from("\u0643"))
                            {
                                return false;
                            }
                            break;
                        case 42:
                            // (, line 300
                            // <-, line 300
                            if (!base.slice_from("\u0644"))
                            {
                                return false;
                            }
                            break;
                        case 43:
                            // (, line 301
                            // <-, line 301
                            if (!base.slice_from("\u0645"))
                            {
                                return false;
                            }
                            break;
                        case 44:
                            // (, line 302
                            // <-, line 302
                            if (!base.slice_from("\u0646"))
                            {
                                return false;
                            }
                            break;
                        case 45:
                            // (, line 303
                            // <-, line 303
                            if (!base.slice_from("\u0647"))
                            {
                                return false;
                            }
                            break;
                        case 46:
                            // (, line 304
                            // <-, line 304
                            if (!base.slice_from("\u0648"))
                            {
                                return false;
                            }
                            break;
                        case 47:
                            // (, line 305
                            // <-, line 305
                            if (!base.slice_from("\u0649"))
                            {
                                return false;
                            }
                            break;
                        case 48:
                            // (, line 306
                            // <-, line 306
                            if (!base.slice_from("\u064A"))
                            {
                                return false;
                            }
                            break;
                        case 49:
                            // (, line 309
                            // <-, line 309
                            if (!base.slice_from("\u0644\u0627"))
                            {
                                return false;
                            }
                            break;
                        case 50:
                            // (, line 310
                            // <-, line 310
                            if (!base.slice_from("\u0644\u0623"))
                            {
                                return false;
                            }
                            break;
                        case 51:
                            // (, line 311
                            // <-, line 311
                            if (!base.slice_from("\u0644\u0625"))
                            {
                                return false;
                            }
                            break;
                        case 52:
                            // (, line 312
                            // <-, line 312
                            if (!base.slice_from("\u0644\u0622"))
                            {
                                return false;
                            }
                            break;
                    }
                    break lab0;
                }
                base.cursor = v_2;
                // next, line 317
                if (base.cursor >= base.limit)
                {
                    return false;
                }
                base.cursor++;
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_Normalize_post() {
        var /** number */ among_var;
        // (, line 321
        // do, line 323
        var /** number */ v_1 = base.cursor;
        lab0: {
            // (, line 323
            // backwards, line 325
            base.limit_backward = base.cursor; base.cursor = base.limit;
            // (, line 325
            // [, line 326
            base.ket = base.cursor;
            // substring, line 326
            among_var = base.find_among_b(a_1);
            if (among_var == 0)
            {
                break lab0;
            }
            // ], line 326
            base.bra = base.cursor;
            switch (among_var) {
                case 0:
                    break lab0;
                case 1:
                    // (, line 327
                    // <-, line 327
                    if (!base.slice_from("\u0621"))
                    {
                        return false;
                    }
                    break;
                case 2:
                    // (, line 328
                    // <-, line 328
                    if (!base.slice_from("\u0621"))
                    {
                        return false;
                    }
                    break;
                case 3:
                    // (, line 329
                    // <-, line 329
                    if (!base.slice_from("\u0621"))
                    {
                        return false;
                    }
                    break;
            }
            base.cursor = base.limit_backward;
        }
        base.cursor = v_1;
        // do, line 334
        var /** number */ v_2 = base.cursor;
        lab1: {
            // loop, line 334
            for (var /** number */ v_3 = I_word_len; v_3 > 0; v_3--)
            {
                // (, line 334
                // or, line 343
                lab2: {
                    var /** number */ v_4 = base.cursor;
                    lab3: {
                        // (, line 335
                        // [, line 337
                        base.bra = base.cursor;
                        // substring, line 337
                        among_var = base.find_among(a_2);
                        if (among_var == 0)
                        {
                            break lab3;
                        }
                        // ], line 337
                        base.ket = base.cursor;
                        switch (among_var) {
                            case 0:
                                break lab3;
                            case 1:
                                // (, line 338
                                // <-, line 338
                                if (!base.slice_from("\u0627"))
                                {
                                    return false;
                                }
                                break;
                            case 2:
                                // (, line 339
                                // <-, line 339
                                if (!base.slice_from("\u0648"))
                                {
                                    return false;
                                }
                                break;
                            case 3:
                                // (, line 340
                                // <-, line 340
                                if (!base.slice_from("\u064A"))
                                {
                                    return false;
                                }
                                break;
                        }
                        break lab2;
                    }
                    base.cursor = v_4;
                    // next, line 344
                    if (base.cursor >= base.limit)
                    {
                        break lab1;
                    }
                    base.cursor++;
                }
            }
        }
        base.cursor = v_2;
        return true;
    };

    /** @return {boolean} */
    function r_Checks1() {
        var /** number */ among_var;
        // (, line 349
        I_word_len = base.current.length;
        // [, line 351
        base.bra = base.cursor;
        // substring, line 351
        among_var = base.find_among(a_3);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 351
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 352
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // set is_noun, line 352
                B_is_noun = true;
                // unset is_verb, line 352
                B_is_verb = false;
                // set is_defined, line 352
                B_is_defined = true;
                break;
            case 2:
                // (, line 353
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // set is_noun, line 353
                B_is_noun = true;
                // unset is_verb, line 353
                B_is_verb = false;
                // set is_defined, line 353
                B_is_defined = true;
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Prefix_Step1() {
        var /** number */ among_var;
        // (, line 359
        I_word_len = base.current.length;
        // [, line 361
        base.bra = base.cursor;
        // substring, line 361
        among_var = base.find_among(a_4);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 361
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 362
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 362
                if (!base.slice_from("\u0623"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 363
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 363
                if (!base.slice_from("\u0622"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 364
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 364
                if (!base.slice_from("\u0623"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 365
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 365
                if (!base.slice_from("\u0627"))
                {
                    return false;
                }
                break;
            case 5:
                // (, line 366
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 366
                if (!base.slice_from("\u0625"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Prefix_Step2() {
        var /** number */ among_var;
        // (, line 371
        I_word_len = base.current.length;
        // not, line 373
        {
            var /** number */ v_1 = base.cursor;
            lab0: {
                // literal, line 373
                if (!(base.eq_s("\u0641\u0627")))
                {
                    break lab0;
                }
                return false;
            }
            base.cursor = v_1;
        }
        // not, line 374
        {
            var /** number */ v_2 = base.cursor;
            lab1: {
                // literal, line 374
                if (!(base.eq_s("\u0648\u0627")))
                {
                    break lab1;
                }
                return false;
            }
            base.cursor = v_2;
        }
        // [, line 375
        base.bra = base.cursor;
        // substring, line 375
        among_var = base.find_among(a_5);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 375
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 376
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // delete, line 376
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 377
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // delete, line 377
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Prefix_Step3a_Noun() {
        var /** number */ among_var;
        // (, line 381
        I_word_len = base.current.length;
        // [, line 383
        base.bra = base.cursor;
        // substring, line 383
        among_var = base.find_among(a_6);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 383
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 384
                if (!(I_word_len > 5))
                {
                    return false;
                }
                // delete, line 384
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 385
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // delete, line 385
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Prefix_Step3b_Noun() {
        var /** number */ among_var;
        // (, line 389
        I_word_len = base.current.length;
        // not, line 391
        {
            var /** number */ v_1 = base.cursor;
            lab0: {
                // literal, line 391
                if (!(base.eq_s("\u0628\u0627")))
                {
                    break lab0;
                }
                return false;
            }
            base.cursor = v_1;
        }
        // [, line 392
        base.bra = base.cursor;
        // substring, line 392
        among_var = base.find_among(a_7);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 392
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 393
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // delete, line 393
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 395
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 395
                if (!base.slice_from("\u0628"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 396
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 396
                if (!base.slice_from("\u0643"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Prefix_Step3_Verb() {
        var /** number */ among_var;
        // (, line 401
        I_word_len = base.current.length;
        // [, line 403
        base.bra = base.cursor;
        // substring, line 403
        among_var = base.find_among(a_8);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 403
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 405
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // <-, line 405
                if (!base.slice_from("\u064A"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 406
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // <-, line 406
                if (!base.slice_from("\u062A"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 407
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // <-, line 407
                if (!base.slice_from("\u0646"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 408
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // <-, line 408
                if (!base.slice_from("\u0623"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Prefix_Step4_Verb() {
        var /** number */ among_var;
        // (, line 412
        I_word_len = base.current.length;
        // [, line 414
        base.bra = base.cursor;
        // substring, line 414
        among_var = base.find_among(a_9);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 414
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 415
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // set is_verb, line 415
                B_is_verb = true;
                // unset is_noun, line 415
                B_is_noun = false;
                // <-, line 415
                if (!base.slice_from("\u0627\u0633\u062A"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Suffix_Noun_Step1a() {
        var /** number */ among_var;
        // (, line 422
        I_word_len = base.current.length;
        // [, line 424
        base.ket = base.cursor;
        // substring, line 424
        among_var = base.find_among_b(a_10);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 424
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 425
                if (!(I_word_len >= 4))
                {
                    return false;
                }
                // delete, line 425
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 426
                if (!(I_word_len >= 5))
                {
                    return false;
                }
                // delete, line 426
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 427
                if (!(I_word_len >= 6))
                {
                    return false;
                }
                // delete, line 427
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Suffix_Noun_Step1b() {
        var /** number */ among_var;
        // (, line 430
        I_word_len = base.current.length;
        // [, line 432
        base.ket = base.cursor;
        // substring, line 432
        among_var = base.find_among_b(a_11);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 432
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 433
                if (!(I_word_len > 5))
                {
                    return false;
                }
                // delete, line 433
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Suffix_Noun_Step2a() {
        var /** number */ among_var;
        // (, line 437
        I_word_len = base.current.length;
        // [, line 439
        base.ket = base.cursor;
        // substring, line 439
        among_var = base.find_among_b(a_12);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 439
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 440
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // delete, line 440
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Suffix_Noun_Step2b() {
        var /** number */ among_var;
        // (, line 444
        I_word_len = base.current.length;
        // [, line 446
        base.ket = base.cursor;
        // substring, line 446
        among_var = base.find_among_b(a_13);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 446
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 447
                if (!(I_word_len >= 5))
                {
                    return false;
                }
                // delete, line 447
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Suffix_Noun_Step2c1() {
        var /** number */ among_var;
        // (, line 451
        I_word_len = base.current.length;
        // [, line 453
        base.ket = base.cursor;
        // substring, line 453
        among_var = base.find_among_b(a_14);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 453
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 454
                if (!(I_word_len >= 4))
                {
                    return false;
                }
                // delete, line 454
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Suffix_Noun_Step2c2() {
        var /** number */ among_var;
        // (, line 457
        I_word_len = base.current.length;
        // [, line 459
        base.ket = base.cursor;
        // substring, line 459
        among_var = base.find_among_b(a_15);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 459
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 460
                if (!(I_word_len >= 4))
                {
                    return false;
                }
                // delete, line 460
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Suffix_Noun_Step3() {
        var /** number */ among_var;
        // (, line 463
        I_word_len = base.current.length;
        // [, line 465
        base.ket = base.cursor;
        // substring, line 465
        among_var = base.find_among_b(a_16);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 465
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 466
                if (!(I_word_len >= 3))
                {
                    return false;
                }
                // delete, line 466
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Suffix_Verb_Step1() {
        var /** number */ among_var;
        // (, line 470
        I_word_len = base.current.length;
        // [, line 472
        base.ket = base.cursor;
        // substring, line 472
        among_var = base.find_among_b(a_17);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 472
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 473
                if (!(I_word_len >= 4))
                {
                    return false;
                }
                // delete, line 473
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 474
                if (!(I_word_len >= 5))
                {
                    return false;
                }
                // delete, line 474
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 475
                if (!(I_word_len >= 6))
                {
                    return false;
                }
                // delete, line 475
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Suffix_Verb_Step2a() {
        var /** number */ among_var;
        // (, line 478
        I_word_len = base.current.length;
        // [, line 480
        base.ket = base.cursor;
        // substring, line 480
        among_var = base.find_among_b(a_18);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 480
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 481
                if (!(I_word_len >= 4))
                {
                    return false;
                }
                // delete, line 481
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 482
                if (!(I_word_len >= 4))
                {
                    return false;
                }
                // delete, line 482
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 483
                if (!(I_word_len >= 5))
                {
                    return false;
                }
                // delete, line 483
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 4:
                // (, line 484
                if (!(I_word_len > 5))
                {
                    return false;
                }
                // delete, line 484
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 5:
                // (, line 485
                if (!(I_word_len >= 6))
                {
                    return false;
                }
                // delete, line 485
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Suffix_Verb_Step2b() {
        var /** number */ among_var;
        // (, line 489
        I_word_len = base.current.length;
        // [, line 491
        base.ket = base.cursor;
        // substring, line 491
        among_var = base.find_among_b(a_19);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 491
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 492
                if (!(I_word_len >= 5))
                {
                    return false;
                }
                // delete, line 492
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Suffix_Verb_Step2c() {
        var /** number */ among_var;
        // (, line 497
        I_word_len = base.current.length;
        // [, line 499
        base.ket = base.cursor;
        // substring, line 499
        among_var = base.find_among_b(a_20);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 499
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 500
                if (!(I_word_len >= 4))
                {
                    return false;
                }
                // delete, line 500
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 501
                if (!(I_word_len >= 6))
                {
                    return false;
                }
                // delete, line 501
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Suffix_All_alef_maqsura() {
        var /** number */ among_var;
        // (, line 505
        I_word_len = base.current.length;
        // [, line 507
        base.ket = base.cursor;
        // substring, line 507
        among_var = base.find_among_b(a_21);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 507
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 508
                // <-, line 508
                if (!base.slice_from("\u064A"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 515
        // set is_noun, line 517
        B_is_noun = true;
        // set is_verb, line 518
        B_is_verb = true;
        // unset is_defined, line 519
        B_is_defined = false;
        // do, line 522
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call Checks1, line 522
            if (!r_Checks1())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // do, line 525
        var /** number */ v_2 = base.cursor;
        lab1: {
            // call Normalize_pre, line 525
            if (!r_Normalize_pre())
            {
                break lab1;
            }
        }
        base.cursor = v_2;
        // backwards, line 528
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 528
        // do, line 530
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // (, line 530
            // or, line 544
            lab3: {
                var /** number */ v_4 = base.limit - base.cursor;
                lab4: {
                    // (, line 532
                    // Boolean test is_verb, line 533
                    if (!B_is_verb)
                    {
                        break lab4;
                    }
                    // (, line 534
                    // or, line 539
                    lab5: {
                        var /** number */ v_5 = base.limit - base.cursor;
                        lab6: {
                            // (, line 535
                            // (, line 536
                            // atleast, line 536
                            {
                                var v_6 = 1;
                                // atleast, line 536
                                replab7: while(true)
                                {
                                    var /** number */ v_7 = base.limit - base.cursor;
                                    lab8: {
                                        // call Suffix_Verb_Step1, line 536
                                        if (!r_Suffix_Verb_Step1())
                                        {
                                            break lab8;
                                        }
                                        v_6--;
                                        continue replab7;
                                    }
                                    base.cursor = base.limit - v_7;
                                    break replab7;
                                }
                                if (v_6 > 0)
                                {
                                    break lab6;
                                }
                            }
                            // (, line 537
                            // or, line 537
                            lab9: {
                                var /** number */ v_8 = base.limit - base.cursor;
                                lab10: {
                                    // call Suffix_Verb_Step2a, line 537
                                    if (!r_Suffix_Verb_Step2a())
                                    {
                                        break lab10;
                                    }
                                    break lab9;
                                }
                                base.cursor = base.limit - v_8;
                                lab11: {
                                    // call Suffix_Verb_Step2c, line 537
                                    if (!r_Suffix_Verb_Step2c())
                                    {
                                        break lab11;
                                    }
                                    break lab9;
                                }
                                base.cursor = base.limit - v_8;
                                // next, line 537
                                if (base.cursor <= base.limit_backward)
                                {
                                    break lab6;
                                }
                                base.cursor--;
                            }
                            break lab5;
                        }
                        base.cursor = base.limit - v_5;
                        lab12: {
                            // call Suffix_Verb_Step2b, line 539
                            if (!r_Suffix_Verb_Step2b())
                            {
                                break lab12;
                            }
                            break lab5;
                        }
                        base.cursor = base.limit - v_5;
                        // call Suffix_Verb_Step2a, line 540
                        if (!r_Suffix_Verb_Step2a())
                        {
                            break lab4;
                        }
                    }
                    break lab3;
                }
                base.cursor = base.limit - v_4;
                lab13: {
                    // (, line 544
                    // Boolean test is_noun, line 545
                    if (!B_is_noun)
                    {
                        break lab13;
                    }
                    // (, line 546
                    // try, line 548
                    var /** number */ v_9 = base.limit - base.cursor;
                    lab14: {
                        // (, line 548
                        // or, line 550
                        lab15: {
                            var /** number */ v_10 = base.limit - base.cursor;
                            lab16: {
                                // call Suffix_Noun_Step2c2, line 549
                                if (!r_Suffix_Noun_Step2c2())
                                {
                                    break lab16;
                                }
                                break lab15;
                            }
                            base.cursor = base.limit - v_10;
                            lab17: {
                                // (, line 550
                                // not, line 550
                                lab18: {
                                    // Boolean test is_defined, line 550
                                    if (!B_is_defined)
                                    {
                                        break lab18;
                                    }
                                    break lab17;
                                }
                                // call Suffix_Noun_Step1a, line 550
                                if (!r_Suffix_Noun_Step1a())
                                {
                                    break lab17;
                                }
                                // (, line 550
                                // or, line 552
                                lab19: {
                                    var /** number */ v_12 = base.limit - base.cursor;
                                    lab20: {
                                        // call Suffix_Noun_Step2a, line 551
                                        if (!r_Suffix_Noun_Step2a())
                                        {
                                            break lab20;
                                        }
                                        break lab19;
                                    }
                                    base.cursor = base.limit - v_12;
                                    lab21: {
                                        // call Suffix_Noun_Step2b, line 552
                                        if (!r_Suffix_Noun_Step2b())
                                        {
                                            break lab21;
                                        }
                                        break lab19;
                                    }
                                    base.cursor = base.limit - v_12;
                                    lab22: {
                                        // call Suffix_Noun_Step2c1, line 553
                                        if (!r_Suffix_Noun_Step2c1())
                                        {
                                            break lab22;
                                        }
                                        break lab19;
                                    }
                                    base.cursor = base.limit - v_12;
                                    // next, line 554
                                    if (base.cursor <= base.limit_backward)
                                    {
                                        break lab17;
                                    }
                                    base.cursor--;
                                }
                                break lab15;
                            }
                            base.cursor = base.limit - v_10;
                            lab23: {
                                // (, line 555
                                // call Suffix_Noun_Step1b, line 555
                                if (!r_Suffix_Noun_Step1b())
                                {
                                    break lab23;
                                }
                                // (, line 555
                                // or, line 557
                                lab24: {
                                    var /** number */ v_13 = base.limit - base.cursor;
                                    lab25: {
                                        // call Suffix_Noun_Step2a, line 556
                                        if (!r_Suffix_Noun_Step2a())
                                        {
                                            break lab25;
                                        }
                                        break lab24;
                                    }
                                    base.cursor = base.limit - v_13;
                                    lab26: {
                                        // call Suffix_Noun_Step2b, line 557
                                        if (!r_Suffix_Noun_Step2b())
                                        {
                                            break lab26;
                                        }
                                        break lab24;
                                    }
                                    base.cursor = base.limit - v_13;
                                    // call Suffix_Noun_Step2c1, line 558
                                    if (!r_Suffix_Noun_Step2c1())
                                    {
                                        break lab23;
                                    }
                                }
                                break lab15;
                            }
                            base.cursor = base.limit - v_10;
                            lab27: {
                                // (, line 559
                                // not, line 559
                                lab28: {
                                    // Boolean test is_defined, line 559
                                    if (!B_is_defined)
                                    {
                                        break lab28;
                                    }
                                    break lab27;
                                }
                                // call Suffix_Noun_Step2a, line 559
                                if (!r_Suffix_Noun_Step2a())
                                {
                                    break lab27;
                                }
                                break lab15;
                            }
                            base.cursor = base.limit - v_10;
                            // (, line 560
                            // call Suffix_Noun_Step2b, line 560
                            if (!r_Suffix_Noun_Step2b())
                            {
                                base.cursor = base.limit - v_9;
                                break lab14;
                            }
                        }
                    }
                    // call Suffix_Noun_Step3, line 562
                    if (!r_Suffix_Noun_Step3())
                    {
                        break lab13;
                    }
                    break lab3;
                }
                base.cursor = base.limit - v_4;
                // call Suffix_All_alef_maqsura, line 568
                if (!r_Suffix_All_alef_maqsura())
                {
                    break lab2;
                }
            }
        }
        base.cursor = base.limit - v_3;
        base.cursor = base.limit_backward;
        // do, line 573
        var /** number */ v_15 = base.cursor;
        lab29: {
            // (, line 573
            // try, line 574
            var /** number */ v_16 = base.cursor;
            lab30: {
                // call Prefix_Step1, line 574
                if (!r_Prefix_Step1())
                {
                    base.cursor = v_16;
                    break lab30;
                }
            }
            // try, line 575
            var /** number */ v_17 = base.cursor;
            lab31: {
                // call Prefix_Step2, line 575
                if (!r_Prefix_Step2())
                {
                    base.cursor = v_17;
                    break lab31;
                }
            }
            // (, line 576
            // or, line 577
            lab32: {
                var /** number */ v_18 = base.cursor;
                lab33: {
                    // call Prefix_Step3a_Noun, line 576
                    if (!r_Prefix_Step3a_Noun())
                    {
                        break lab33;
                    }
                    break lab32;
                }
                base.cursor = v_18;
                lab34: {
                    // (, line 577
                    // Boolean test is_noun, line 577
                    if (!B_is_noun)
                    {
                        break lab34;
                    }
                    // call Prefix_Step3b_Noun, line 577
                    if (!r_Prefix_Step3b_Noun())
                    {
                        break lab34;
                    }
                    break lab32;
                }
                base.cursor = v_18;
                // (, line 578
                // Boolean test is_verb, line 578
                if (!B_is_verb)
                {
                    break lab29;
                }
                // try, line 578
                var /** number */ v_19 = base.cursor;
                lab35: {
                    // call Prefix_Step3_Verb, line 578
                    if (!r_Prefix_Step3_Verb())
                    {
                        base.cursor = v_19;
                        break lab35;
                    }
                }
                // call Prefix_Step4_Verb, line 578
                if (!r_Prefix_Step4_Verb())
                {
                    break lab29;
                }
            }
        }
        base.cursor = v_15;
        // do, line 583
        var /** number */ v_20 = base.cursor;
        lab36: {
            // call Normalize_post, line 583
            if (!r_Normalize_post())
            {
                break lab36;
            }
        }
        base.cursor = v_20;
        return true;
    };

    /**@return{string}*/
    this['stemWord'] = function(/**string*/word) {
        base.setCurrent(word);
        this.stem();
        return base.getCurrent();
    };
};
window['ArabicStemmer'] = ArabicStemmer;
