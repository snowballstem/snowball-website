// This file was generated automatically by the Snowball to Javascript compiler
// http://snowballstem.org/

/**@constructor*/
function ArabicStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["!", -1, 3],
        ["\"", -1, 3],
        ["%", -1, 3],
        ["*", -1, 3],
        [",", -1, 3],
        [".", -1, 3],
        ["/", -1, 3],
        [":", -1, 3],
        [";", -1, 3],
        ["?", -1, 3],
        ["\\", -1, 3],
        ["\u060C", -1, 4],
        ["\u061B", -1, 4],
        ["\u061F", -1, 4],
        ["\u0640", -1, 2],
        ["\u064B", -1, 1],
        ["\u064C", -1, 1],
        ["\u064D", -1, 1],
        ["\u064E", -1, 1],
        ["\u064F", -1, 1],
        ["\u0650", -1, 1],
        ["\u0651", -1, 1],
        ["\u0652", -1, 1],
        ["\u0660", -1, 5],
        ["\u0661", -1, 6],
        ["\u0662", -1, 7],
        ["\u0663", -1, 8],
        ["\u0664", -1, 9],
        ["\u0665", -1, 10],
        ["\u0666", -1, 11],
        ["\u0667", -1, 12],
        ["\u0668", -1, 13],
        ["\u0669", -1, 14],
        ["\u066A", -1, 15],
        ["\u066B", -1, 15],
        ["\u066C", -1, 15],
        ["\uFE80", -1, 16],
        ["\uFE81", -1, 20],
        ["\uFE82", -1, 20],
        ["\uFE83", -1, 17],
        ["\uFE84", -1, 17],
        ["\uFE85", -1, 21],
        ["\uFE86", -1, 21],
        ["\uFE87", -1, 18],
        ["\uFE88", -1, 18],
        ["\uFE89", -1, 19],
        ["\uFE8A", -1, 19],
        ["\uFE8B", -1, 19],
        ["\uFE8C", -1, 19],
        ["\uFE8D", -1, 22],
        ["\uFE8E", -1, 22],
        ["\uFE8F", -1, 23],
        ["\uFE90", -1, 23],
        ["\uFE91", -1, 23],
        ["\uFE92", -1, 23],
        ["\uFE93", -1, 24],
        ["\uFE94", -1, 24],
        ["\uFE95", -1, 25],
        ["\uFE96", -1, 25],
        ["\uFE97", -1, 25],
        ["\uFE98", -1, 25],
        ["\uFE99", -1, 26],
        ["\uFE9A", -1, 26],
        ["\uFE9B", -1, 26],
        ["\uFE9C", -1, 26],
        ["\uFE9D", -1, 27],
        ["\uFE9E", -1, 27],
        ["\uFE9F", -1, 27],
        ["\uFEA0", -1, 27],
        ["\uFEA1", -1, 28],
        ["\uFEA2", -1, 28],
        ["\uFEA3", -1, 28],
        ["\uFEA4", -1, 28],
        ["\uFEA5", -1, 29],
        ["\uFEA6", -1, 29],
        ["\uFEA7", -1, 29],
        ["\uFEA8", -1, 29],
        ["\uFEA9", -1, 30],
        ["\uFEAA", -1, 30],
        ["\uFEAB", -1, 31],
        ["\uFEAC", -1, 31],
        ["\uFEAD", -1, 32],
        ["\uFEAE", -1, 32],
        ["\uFEAF", -1, 33],
        ["\uFEB0", -1, 33],
        ["\uFEB1", -1, 34],
        ["\uFEB2", -1, 34],
        ["\uFEB3", -1, 34],
        ["\uFEB4", -1, 34],
        ["\uFEB5", -1, 35],
        ["\uFEB6", -1, 35],
        ["\uFEB7", -1, 35],
        ["\uFEB8", -1, 35],
        ["\uFEB9", -1, 36],
        ["\uFEBA", -1, 36],
        ["\uFEBB", -1, 36],
        ["\uFEBC", -1, 36],
        ["\uFEBD", -1, 37],
        ["\uFEBE", -1, 37],
        ["\uFEBF", -1, 37],
        ["\uFEC0", -1, 37],
        ["\uFEC1", -1, 38],
        ["\uFEC2", -1, 38],
        ["\uFEC3", -1, 38],
        ["\uFEC4", -1, 38],
        ["\uFEC5", -1, 39],
        ["\uFEC6", -1, 39],
        ["\uFEC7", -1, 39],
        ["\uFEC8", -1, 39],
        ["\uFEC9", -1, 40],
        ["\uFECA", -1, 40],
        ["\uFECB", -1, 40],
        ["\uFECC", -1, 40],
        ["\uFECD", -1, 41],
        ["\uFECE", -1, 41],
        ["\uFECF", -1, 41],
        ["\uFED0", -1, 41],
        ["\uFED1", -1, 42],
        ["\uFED2", -1, 42],
        ["\uFED3", -1, 42],
        ["\uFED4", -1, 42],
        ["\uFED5", -1, 43],
        ["\uFED6", -1, 43],
        ["\uFED7", -1, 43],
        ["\uFED8", -1, 43],
        ["\uFED9", -1, 44],
        ["\uFEDA", -1, 44],
        ["\uFEDB", -1, 44],
        ["\uFEDC", -1, 44],
        ["\uFEDD", -1, 45],
        ["\uFEDE", -1, 45],
        ["\uFEDF", -1, 45],
        ["\uFEE0", -1, 45],
        ["\uFEE1", -1, 46],
        ["\uFEE2", -1, 46],
        ["\uFEE3", -1, 46],
        ["\uFEE4", -1, 46],
        ["\uFEE5", -1, 47],
        ["\uFEE6", -1, 47],
        ["\uFEE7", -1, 47],
        ["\uFEE8", -1, 47],
        ["\uFEE9", -1, 48],
        ["\uFEEA", -1, 48],
        ["\uFEEB", -1, 48],
        ["\uFEEC", -1, 48],
        ["\uFEED", -1, 49],
        ["\uFEEE", -1, 49],
        ["\uFEEF", -1, 50],
        ["\uFEF0", -1, 50],
        ["\uFEF1", -1, 51],
        ["\uFEF2", -1, 51],
        ["\uFEF3", -1, 51],
        ["\uFEF4", -1, 51],
        ["\uFEF5", -1, 55],
        ["\uFEF6", -1, 55],
        ["\uFEF7", -1, 53],
        ["\uFEF8", -1, 53],
        ["\uFEF9", -1, 54],
        ["\uFEFA", -1, 54],
        ["\uFEFB", -1, 52],
        ["\uFEFC", -1, 52]
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
        // (, line 258
        // loop, line 259
        for (var /** number */ v_1 = (base.current.length); v_1 > 0; v_1--)
        {
            // (, line 259
            // or, line 328
            lab0: {
                var /** number */ v_2 = base.cursor;
                lab1: {
                    // (, line 260
                    // [, line 261
                    base.bra = base.cursor;
                    // substring, line 261
                    among_var = base.find_among(a_0);
                    if (among_var == 0)
                    {
                        break lab1;
                    }
                    // ], line 261
                    base.ket = base.cursor;
                    switch (among_var) {
                        case 0:
                            break lab1;
                        case 1:
                            // (, line 262
                            // delete, line 262
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                        case 2:
                            // (, line 263
                            // delete, line 263
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                        case 3:
                            // (, line 266
                            // delete, line 266
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                        case 4:
                            // (, line 267
                            // delete, line 267
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                        case 5:
                            // (, line 270
                            // <-, line 270
                            if (!base.slice_from("0"))
                            {
                                return false;
                            }
                            break;
                        case 6:
                            // (, line 271
                            // <-, line 271
                            if (!base.slice_from("1"))
                            {
                                return false;
                            }
                            break;
                        case 7:
                            // (, line 272
                            // <-, line 272
                            if (!base.slice_from("2"))
                            {
                                return false;
                            }
                            break;
                        case 8:
                            // (, line 273
                            // <-, line 273
                            if (!base.slice_from("3"))
                            {
                                return false;
                            }
                            break;
                        case 9:
                            // (, line 274
                            // <-, line 274
                            if (!base.slice_from("4"))
                            {
                                return false;
                            }
                            break;
                        case 10:
                            // (, line 275
                            // <-, line 275
                            if (!base.slice_from("5"))
                            {
                                return false;
                            }
                            break;
                        case 11:
                            // (, line 276
                            // <-, line 276
                            if (!base.slice_from("6"))
                            {
                                return false;
                            }
                            break;
                        case 12:
                            // (, line 277
                            // <-, line 277
                            if (!base.slice_from("7"))
                            {
                                return false;
                            }
                            break;
                        case 13:
                            // (, line 278
                            // <-, line 278
                            if (!base.slice_from("8"))
                            {
                                return false;
                            }
                            break;
                        case 14:
                            // (, line 279
                            // <-, line 279
                            if (!base.slice_from("9"))
                            {
                                return false;
                            }
                            break;
                        case 15:
                            // (, line 280
                            // delete, line 280
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                        case 16:
                            // (, line 283
                            // <-, line 283
                            if (!base.slice_from("\u0621"))
                            {
                                return false;
                            }
                            break;
                        case 17:
                            // (, line 284
                            // <-, line 284
                            if (!base.slice_from("\u0623"))
                            {
                                return false;
                            }
                            break;
                        case 18:
                            // (, line 285
                            // <-, line 285
                            if (!base.slice_from("\u0625"))
                            {
                                return false;
                            }
                            break;
                        case 19:
                            // (, line 286
                            // <-, line 286
                            if (!base.slice_from("\u0626"))
                            {
                                return false;
                            }
                            break;
                        case 20:
                            // (, line 287
                            // <-, line 287
                            if (!base.slice_from("\u0622"))
                            {
                                return false;
                            }
                            break;
                        case 21:
                            // (, line 288
                            // <-, line 288
                            if (!base.slice_from("\u0624"))
                            {
                                return false;
                            }
                            break;
                        case 22:
                            // (, line 289
                            // <-, line 289
                            if (!base.slice_from("\u0627"))
                            {
                                return false;
                            }
                            break;
                        case 23:
                            // (, line 290
                            // <-, line 290
                            if (!base.slice_from("\u0628"))
                            {
                                return false;
                            }
                            break;
                        case 24:
                            // (, line 291
                            // <-, line 291
                            if (!base.slice_from("\u0629"))
                            {
                                return false;
                            }
                            break;
                        case 25:
                            // (, line 292
                            // <-, line 292
                            if (!base.slice_from("\u062A"))
                            {
                                return false;
                            }
                            break;
                        case 26:
                            // (, line 293
                            // <-, line 293
                            if (!base.slice_from("\u062B"))
                            {
                                return false;
                            }
                            break;
                        case 27:
                            // (, line 294
                            // <-, line 294
                            if (!base.slice_from("\u062C"))
                            {
                                return false;
                            }
                            break;
                        case 28:
                            // (, line 295
                            // <-, line 295
                            if (!base.slice_from("\u062D"))
                            {
                                return false;
                            }
                            break;
                        case 29:
                            // (, line 296
                            // <-, line 296
                            if (!base.slice_from("\u062E"))
                            {
                                return false;
                            }
                            break;
                        case 30:
                            // (, line 297
                            // <-, line 297
                            if (!base.slice_from("\u062F"))
                            {
                                return false;
                            }
                            break;
                        case 31:
                            // (, line 298
                            // <-, line 298
                            if (!base.slice_from("\u0630"))
                            {
                                return false;
                            }
                            break;
                        case 32:
                            // (, line 299
                            // <-, line 299
                            if (!base.slice_from("\u0631"))
                            {
                                return false;
                            }
                            break;
                        case 33:
                            // (, line 300
                            // <-, line 300
                            if (!base.slice_from("\u0632"))
                            {
                                return false;
                            }
                            break;
                        case 34:
                            // (, line 301
                            // <-, line 301
                            if (!base.slice_from("\u0633"))
                            {
                                return false;
                            }
                            break;
                        case 35:
                            // (, line 302
                            // <-, line 302
                            if (!base.slice_from("\u0634"))
                            {
                                return false;
                            }
                            break;
                        case 36:
                            // (, line 303
                            // <-, line 303
                            if (!base.slice_from("\u0635"))
                            {
                                return false;
                            }
                            break;
                        case 37:
                            // (, line 304
                            // <-, line 304
                            if (!base.slice_from("\u0636"))
                            {
                                return false;
                            }
                            break;
                        case 38:
                            // (, line 305
                            // <-, line 305
                            if (!base.slice_from("\u0637"))
                            {
                                return false;
                            }
                            break;
                        case 39:
                            // (, line 306
                            // <-, line 306
                            if (!base.slice_from("\u0638"))
                            {
                                return false;
                            }
                            break;
                        case 40:
                            // (, line 307
                            // <-, line 307
                            if (!base.slice_from("\u0639"))
                            {
                                return false;
                            }
                            break;
                        case 41:
                            // (, line 308
                            // <-, line 308
                            if (!base.slice_from("\u063A"))
                            {
                                return false;
                            }
                            break;
                        case 42:
                            // (, line 309
                            // <-, line 309
                            if (!base.slice_from("\u0641"))
                            {
                                return false;
                            }
                            break;
                        case 43:
                            // (, line 310
                            // <-, line 310
                            if (!base.slice_from("\u0642"))
                            {
                                return false;
                            }
                            break;
                        case 44:
                            // (, line 311
                            // <-, line 311
                            if (!base.slice_from("\u0643"))
                            {
                                return false;
                            }
                            break;
                        case 45:
                            // (, line 312
                            // <-, line 312
                            if (!base.slice_from("\u0644"))
                            {
                                return false;
                            }
                            break;
                        case 46:
                            // (, line 313
                            // <-, line 313
                            if (!base.slice_from("\u0645"))
                            {
                                return false;
                            }
                            break;
                        case 47:
                            // (, line 314
                            // <-, line 314
                            if (!base.slice_from("\u0646"))
                            {
                                return false;
                            }
                            break;
                        case 48:
                            // (, line 315
                            // <-, line 315
                            if (!base.slice_from("\u0647"))
                            {
                                return false;
                            }
                            break;
                        case 49:
                            // (, line 316
                            // <-, line 316
                            if (!base.slice_from("\u0648"))
                            {
                                return false;
                            }
                            break;
                        case 50:
                            // (, line 317
                            // <-, line 317
                            if (!base.slice_from("\u0649"))
                            {
                                return false;
                            }
                            break;
                        case 51:
                            // (, line 318
                            // <-, line 318
                            if (!base.slice_from("\u064A"))
                            {
                                return false;
                            }
                            break;
                        case 52:
                            // (, line 321
                            // <-, line 321
                            if (!base.slice_from("\u0644\u0627"))
                            {
                                return false;
                            }
                            break;
                        case 53:
                            // (, line 322
                            // <-, line 322
                            if (!base.slice_from("\u0644\u0623"))
                            {
                                return false;
                            }
                            break;
                        case 54:
                            // (, line 323
                            // <-, line 323
                            if (!base.slice_from("\u0644\u0625"))
                            {
                                return false;
                            }
                            break;
                        case 55:
                            // (, line 324
                            // <-, line 324
                            if (!base.slice_from("\u0644\u0622"))
                            {
                                return false;
                            }
                            break;
                    }
                    break lab0;
                }
                base.cursor = v_2;
                // next, line 329
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
        // (, line 333
        // do, line 335
        var /** number */ v_1 = base.cursor;
        lab0: {
            // (, line 335
            // backwards, line 337
            base.limit_backward = base.cursor; base.cursor = base.limit;
            // (, line 337
            // [, line 338
            base.ket = base.cursor;
            // substring, line 338
            among_var = base.find_among_b(a_1);
            if (among_var == 0)
            {
                break lab0;
            }
            // ], line 338
            base.bra = base.cursor;
            switch (among_var) {
                case 0:
                    break lab0;
                case 1:
                    // (, line 339
                    // <-, line 339
                    if (!base.slice_from("\u0621"))
                    {
                        return false;
                    }
                    break;
                case 2:
                    // (, line 340
                    // <-, line 340
                    if (!base.slice_from("\u0621"))
                    {
                        return false;
                    }
                    break;
                case 3:
                    // (, line 341
                    // <-, line 341
                    if (!base.slice_from("\u0621"))
                    {
                        return false;
                    }
                    break;
            }
            base.cursor = base.limit_backward;        }
        base.cursor = v_1;
        // do, line 346
        var /** number */ v_2 = base.cursor;
        lab1: {
            // loop, line 346
            for (var /** number */ v_3 = I_word_len; v_3 > 0; v_3--)
            {
                // (, line 346
                // or, line 355
                lab2: {
                    var /** number */ v_4 = base.cursor;
                    lab3: {
                        // (, line 347
                        // [, line 349
                        base.bra = base.cursor;
                        // substring, line 349
                        among_var = base.find_among(a_2);
                        if (among_var == 0)
                        {
                            break lab3;
                        }
                        // ], line 349
                        base.ket = base.cursor;
                        switch (among_var) {
                            case 0:
                                break lab3;
                            case 1:
                                // (, line 350
                                // <-, line 350
                                if (!base.slice_from("\u0627"))
                                {
                                    return false;
                                }
                                break;
                            case 2:
                                // (, line 351
                                // <-, line 351
                                if (!base.slice_from("\u0648"))
                                {
                                    return false;
                                }
                                break;
                            case 3:
                                // (, line 352
                                // <-, line 352
                                if (!base.slice_from("\u064A"))
                                {
                                    return false;
                                }
                                break;
                        }
                        break lab2;
                    }
                    base.cursor = v_4;
                    // next, line 356
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
        // (, line 361
        I_word_len = (base.current.length);
        // [, line 363
        base.bra = base.cursor;
        // substring, line 363
        among_var = base.find_among(a_3);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 363
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 364
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // set is_noun, line 364
                B_is_noun = true;
                // unset is_verb, line 364
                B_is_verb = false;
                // set is_defined, line 364
                B_is_defined = true;
                break;
            case 2:
                // (, line 365
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // set is_noun, line 365
                B_is_noun = true;
                // unset is_verb, line 365
                B_is_verb = false;
                // set is_defined, line 365
                B_is_defined = true;
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_Prefix_Step1() {
        var /** number */ among_var;
        // (, line 371
        I_word_len = (base.current.length);
        // [, line 373
        base.bra = base.cursor;
        // substring, line 373
        among_var = base.find_among(a_4);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 373
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 374
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 374
                if (!base.slice_from("\u0623"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 375
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 375
                if (!base.slice_from("\u0622"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 376
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 376
                if (!base.slice_from("\u0623"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 377
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 377
                if (!base.slice_from("\u0627"))
                {
                    return false;
                }
                break;
            case 5:
                // (, line 378
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 378
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
        // (, line 383
        I_word_len = (base.current.length);
        // not, line 385
        {
            var /** number */ v_1 = base.cursor;
            lab0: {
                // literal, line 385
                if (!(base.eq_s("\u0641\u0627")))
                {
                    break lab0;
                }
                return false;
            }
            base.cursor = v_1;
        }
        // not, line 386
        {
            var /** number */ v_2 = base.cursor;
            lab1: {
                // literal, line 386
                if (!(base.eq_s("\u0648\u0627")))
                {
                    break lab1;
                }
                return false;
            }
            base.cursor = v_2;
        }
        // [, line 387
        base.bra = base.cursor;
        // substring, line 387
        among_var = base.find_among(a_5);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 387
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 388
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // delete, line 388
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 389
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // delete, line 389
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
        // (, line 393
        I_word_len = (base.current.length);
        // [, line 395
        base.bra = base.cursor;
        // substring, line 395
        among_var = base.find_among(a_6);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 395
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 396
                if (!(I_word_len > 5))
                {
                    return false;
                }
                // delete, line 396
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 397
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // delete, line 397
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
        // (, line 401
        I_word_len = (base.current.length);
        // not, line 403
        {
            var /** number */ v_1 = base.cursor;
            lab0: {
                // literal, line 403
                if (!(base.eq_s("\u0628\u0627")))
                {
                    break lab0;
                }
                return false;
            }
            base.cursor = v_1;
        }
        // [, line 404
        base.bra = base.cursor;
        // substring, line 404
        among_var = base.find_among(a_7);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 404
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 405
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // delete, line 405
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 407
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 407
                if (!base.slice_from("\u0628"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 408
                if (!(I_word_len > 3))
                {
                    return false;
                }
                // <-, line 408
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
        // (, line 413
        I_word_len = (base.current.length);
        // [, line 415
        base.bra = base.cursor;
        // substring, line 415
        among_var = base.find_among(a_8);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 415
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 417
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // <-, line 417
                if (!base.slice_from("\u064A"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 418
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // <-, line 418
                if (!base.slice_from("\u062A"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 419
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // <-, line 419
                if (!base.slice_from("\u0646"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 420
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // <-, line 420
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
        // (, line 424
        I_word_len = (base.current.length);
        // [, line 426
        base.bra = base.cursor;
        // substring, line 426
        among_var = base.find_among(a_9);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 426
        base.ket = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 427
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // set is_verb, line 427
                B_is_verb = true;
                // unset is_noun, line 427
                B_is_noun = false;
                // <-, line 427
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
        // (, line 434
        I_word_len = (base.current.length);
        // [, line 436
        base.ket = base.cursor;
        // substring, line 436
        among_var = base.find_among_b(a_10);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 436
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 437
                if (!(I_word_len >= 4))
                {
                    return false;
                }
                // delete, line 437
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 438
                if (!(I_word_len >= 5))
                {
                    return false;
                }
                // delete, line 438
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 439
                if (!(I_word_len >= 6))
                {
                    return false;
                }
                // delete, line 439
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
        // (, line 442
        I_word_len = (base.current.length);
        // [, line 444
        base.ket = base.cursor;
        // substring, line 444
        among_var = base.find_among_b(a_11);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 444
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 445
                if (!(I_word_len > 5))
                {
                    return false;
                }
                // delete, line 445
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
        // (, line 449
        I_word_len = (base.current.length);
        // [, line 451
        base.ket = base.cursor;
        // substring, line 451
        among_var = base.find_among_b(a_12);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 451
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 452
                if (!(I_word_len > 4))
                {
                    return false;
                }
                // delete, line 452
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
        // (, line 456
        I_word_len = (base.current.length);
        // [, line 458
        base.ket = base.cursor;
        // substring, line 458
        among_var = base.find_among_b(a_13);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 458
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 459
                if (!(I_word_len >= 5))
                {
                    return false;
                }
                // delete, line 459
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
        // (, line 463
        I_word_len = (base.current.length);
        // [, line 465
        base.ket = base.cursor;
        // substring, line 465
        among_var = base.find_among_b(a_14);
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
                if (!(I_word_len >= 4))
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
    function r_Suffix_Noun_Step2c2() {
        var /** number */ among_var;
        // (, line 469
        I_word_len = (base.current.length);
        // [, line 471
        base.ket = base.cursor;
        // substring, line 471
        among_var = base.find_among_b(a_15);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 471
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 472
                if (!(I_word_len >= 4))
                {
                    return false;
                }
                // delete, line 472
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
        // (, line 475
        I_word_len = (base.current.length);
        // [, line 477
        base.ket = base.cursor;
        // substring, line 477
        among_var = base.find_among_b(a_16);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 477
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 478
                if (!(I_word_len >= 3))
                {
                    return false;
                }
                // delete, line 478
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
        // (, line 482
        I_word_len = (base.current.length);
        // [, line 484
        base.ket = base.cursor;
        // substring, line 484
        among_var = base.find_among_b(a_17);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 484
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 485
                if (!(I_word_len >= 4))
                {
                    return false;
                }
                // delete, line 485
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 486
                if (!(I_word_len >= 5))
                {
                    return false;
                }
                // delete, line 486
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 487
                if (!(I_word_len >= 6))
                {
                    return false;
                }
                // delete, line 487
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
        // (, line 490
        I_word_len = (base.current.length);
        // [, line 492
        base.ket = base.cursor;
        // substring, line 492
        among_var = base.find_among_b(a_18);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 492
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 493
                if (!(I_word_len >= 4))
                {
                    return false;
                }
                // delete, line 493
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 494
                if (!(I_word_len >= 4))
                {
                    return false;
                }
                // delete, line 494
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 495
                if (!(I_word_len >= 5))
                {
                    return false;
                }
                // delete, line 495
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 4:
                // (, line 496
                if (!(I_word_len > 5))
                {
                    return false;
                }
                // delete, line 496
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 5:
                // (, line 497
                if (!(I_word_len >= 6))
                {
                    return false;
                }
                // delete, line 497
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
        // (, line 501
        I_word_len = (base.current.length);
        // [, line 503
        base.ket = base.cursor;
        // substring, line 503
        among_var = base.find_among_b(a_19);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 503
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 504
                if (!(I_word_len >= 5))
                {
                    return false;
                }
                // delete, line 504
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
        // (, line 509
        I_word_len = (base.current.length);
        // [, line 511
        base.ket = base.cursor;
        // substring, line 511
        among_var = base.find_among_b(a_20);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 511
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 512
                if (!(I_word_len >= 4))
                {
                    return false;
                }
                // delete, line 512
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 513
                if (!(I_word_len >= 6))
                {
                    return false;
                }
                // delete, line 513
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
        // (, line 517
        I_word_len = (base.current.length);
        // [, line 519
        base.ket = base.cursor;
        // substring, line 519
        among_var = base.find_among_b(a_21);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 519
        base.bra = base.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 520
                // <-, line 520
                if (!base.slice_from("\u064A"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 527
        // set is_noun, line 529
        B_is_noun = true;
        // set is_verb, line 530
        B_is_verb = true;
        // unset is_defined, line 531
        B_is_defined = false;
        // do, line 534
        var /** number */ v_1 = base.cursor;
        lab0: {
            // call Checks1, line 534
            if (!r_Checks1())
            {
                break lab0;
            }
        }
        base.cursor = v_1;
        // do, line 537
        var /** number */ v_2 = base.cursor;
        lab1: {
            // call Normalize_pre, line 537
            if (!r_Normalize_pre())
            {
                break lab1;
            }
        }
        base.cursor = v_2;
        // backwards, line 540
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 540
        // do, line 542
        var /** number */ v_3 = base.limit - base.cursor;
        lab2: {
            // (, line 542
            // or, line 556
            lab3: {
                var /** number */ v_4 = base.limit - base.cursor;
                lab4: {
                    // (, line 544
                    // Boolean test is_verb, line 545
                    if (!B_is_verb)
                    {
                        break lab4;
                    }
                    // (, line 546
                    // or, line 551
                    lab5: {
                        var /** number */ v_5 = base.limit - base.cursor;
                        lab6: {
                            // (, line 547
                            // (, line 548
                            // atleast, line 548
                            {
                                var v_6 = 1;
                                // atleast, line 548
                                replab7: while(true)
                                {
                                    var /** number */ v_7 = base.limit - base.cursor;
                                    lab8: {
                                        // call Suffix_Verb_Step1, line 548
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
                            // (, line 549
                            // or, line 549
                            lab9: {
                                var /** number */ v_8 = base.limit - base.cursor;
                                lab10: {
                                    // call Suffix_Verb_Step2a, line 549
                                    if (!r_Suffix_Verb_Step2a())
                                    {
                                        break lab10;
                                    }
                                    break lab9;
                                }
                                base.cursor = base.limit - v_8;
                                lab11: {
                                    // call Suffix_Verb_Step2c, line 549
                                    if (!r_Suffix_Verb_Step2c())
                                    {
                                        break lab11;
                                    }
                                    break lab9;
                                }
                                base.cursor = base.limit - v_8;
                                // next, line 549
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
                            // call Suffix_Verb_Step2b, line 551
                            if (!r_Suffix_Verb_Step2b())
                            {
                                break lab12;
                            }
                            break lab5;
                        }
                        base.cursor = base.limit - v_5;
                        // call Suffix_Verb_Step2a, line 552
                        if (!r_Suffix_Verb_Step2a())
                        {
                            break lab4;
                        }
                    }
                    break lab3;
                }
                base.cursor = base.limit - v_4;
                lab13: {
                    // (, line 556
                    // Boolean test is_noun, line 557
                    if (!B_is_noun)
                    {
                        break lab13;
                    }
                    // (, line 558
                    // try, line 560
                    var /** number */ v_9 = base.limit - base.cursor;
                    lab14: {
                        // (, line 560
                        // or, line 562
                        lab15: {
                            var /** number */ v_10 = base.limit - base.cursor;
                            lab16: {
                                // call Suffix_Noun_Step2c2, line 561
                                if (!r_Suffix_Noun_Step2c2())
                                {
                                    break lab16;
                                }
                                break lab15;
                            }
                            base.cursor = base.limit - v_10;
                            lab17: {
                                // (, line 562
                                // not, line 562
                                lab18: {
                                    // Boolean test is_defined, line 562
                                    if (!B_is_defined)
                                    {
                                        break lab18;
                                    }
                                    break lab17;
                                }
                                // call Suffix_Noun_Step1a, line 562
                                if (!r_Suffix_Noun_Step1a())
                                {
                                    break lab17;
                                }
                                // (, line 562
                                // or, line 564
                                lab19: {
                                    var /** number */ v_12 = base.limit - base.cursor;
                                    lab20: {
                                        // call Suffix_Noun_Step2a, line 563
                                        if (!r_Suffix_Noun_Step2a())
                                        {
                                            break lab20;
                                        }
                                        break lab19;
                                    }
                                    base.cursor = base.limit - v_12;
                                    lab21: {
                                        // call Suffix_Noun_Step2b, line 564
                                        if (!r_Suffix_Noun_Step2b())
                                        {
                                            break lab21;
                                        }
                                        break lab19;
                                    }
                                    base.cursor = base.limit - v_12;
                                    lab22: {
                                        // call Suffix_Noun_Step2c1, line 565
                                        if (!r_Suffix_Noun_Step2c1())
                                        {
                                            break lab22;
                                        }
                                        break lab19;
                                    }
                                    base.cursor = base.limit - v_12;
                                    // next, line 566
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
                                // (, line 567
                                // call Suffix_Noun_Step1b, line 567
                                if (!r_Suffix_Noun_Step1b())
                                {
                                    break lab23;
                                }
                                // (, line 567
                                // or, line 569
                                lab24: {
                                    var /** number */ v_13 = base.limit - base.cursor;
                                    lab25: {
                                        // call Suffix_Noun_Step2a, line 568
                                        if (!r_Suffix_Noun_Step2a())
                                        {
                                            break lab25;
                                        }
                                        break lab24;
                                    }
                                    base.cursor = base.limit - v_13;
                                    lab26: {
                                        // call Suffix_Noun_Step2b, line 569
                                        if (!r_Suffix_Noun_Step2b())
                                        {
                                            break lab26;
                                        }
                                        break lab24;
                                    }
                                    base.cursor = base.limit - v_13;
                                    // call Suffix_Noun_Step2c1, line 570
                                    if (!r_Suffix_Noun_Step2c1())
                                    {
                                        break lab23;
                                    }
                                }
                                break lab15;
                            }
                            base.cursor = base.limit - v_10;
                            lab27: {
                                // (, line 571
                                // not, line 571
                                lab28: {
                                    // Boolean test is_defined, line 571
                                    if (!B_is_defined)
                                    {
                                        break lab28;
                                    }
                                    break lab27;
                                }
                                // call Suffix_Noun_Step2a, line 571
                                if (!r_Suffix_Noun_Step2a())
                                {
                                    break lab27;
                                }
                                break lab15;
                            }
                            base.cursor = base.limit - v_10;
                            // (, line 572
                            // call Suffix_Noun_Step2b, line 572
                            if (!r_Suffix_Noun_Step2b())
                            {
                                base.cursor = base.limit - v_9;
                                break lab14;
                            }
                        }
                    }
                    // call Suffix_Noun_Step3, line 574
                    if (!r_Suffix_Noun_Step3())
                    {
                        break lab13;
                    }
                    break lab3;
                }
                base.cursor = base.limit - v_4;
                // call Suffix_All_alef_maqsura, line 580
                if (!r_Suffix_All_alef_maqsura())
                {
                    break lab2;
                }
            }
        }
        base.cursor = base.limit - v_3;
        base.cursor = base.limit_backward;        // do, line 585
        var /** number */ v_15 = base.cursor;
        lab29: {
            // (, line 585
            // try, line 586
            var /** number */ v_16 = base.cursor;
            lab30: {
                // call Prefix_Step1, line 586
                if (!r_Prefix_Step1())
                {
                    base.cursor = v_16;
                    break lab30;
                }
            }
            // try, line 587
            var /** number */ v_17 = base.cursor;
            lab31: {
                // call Prefix_Step2, line 587
                if (!r_Prefix_Step2())
                {
                    base.cursor = v_17;
                    break lab31;
                }
            }
            // (, line 588
            // or, line 589
            lab32: {
                var /** number */ v_18 = base.cursor;
                lab33: {
                    // call Prefix_Step3a_Noun, line 588
                    if (!r_Prefix_Step3a_Noun())
                    {
                        break lab33;
                    }
                    break lab32;
                }
                base.cursor = v_18;
                lab34: {
                    // (, line 589
                    // Boolean test is_noun, line 589
                    if (!B_is_noun)
                    {
                        break lab34;
                    }
                    // call Prefix_Step3b_Noun, line 589
                    if (!r_Prefix_Step3b_Noun())
                    {
                        break lab34;
                    }
                    break lab32;
                }
                base.cursor = v_18;
                // (, line 590
                // Boolean test is_verb, line 590
                if (!B_is_verb)
                {
                    break lab29;
                }
                // try, line 590
                var /** number */ v_19 = base.cursor;
                lab35: {
                    // call Prefix_Step3_Verb, line 590
                    if (!r_Prefix_Step3_Verb())
                    {
                        base.cursor = v_19;
                        break lab35;
                    }
                }
                // call Prefix_Step4_Verb, line 590
                if (!r_Prefix_Step4_Verb())
                {
                    break lab29;
                }
            }
        }
        base.cursor = v_15;
        // do, line 595
        var /** number */ v_20 = base.cursor;
        lab36: {
            // call Normalize_post, line 595
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
