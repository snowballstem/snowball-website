
#include <stdlib.h>
#include "libstemmer.h"
#include "api.h"
#include "modules.c"

struct sb_stemmer {
    struct SN_env * (*create)(void);
    void (*close)(struct SN_env *);
    int (*stem)(struct SN_env *);

    struct SN_env * env;
};

/** Create a new stemmer object, for the specified language.
 *
 *  @return If the specified language is not recognised, 0 will be 
 *  returned; otherwise a pointer to a newly created stemmer for that
 *  language will be returned.
 */
struct sb_stemmer * sb_stemmer_create(const char * language)
{
    struct stemmer_modules * module;
    struct sb_stemmer * stemmer =
	    (struct sb_stemmer *) malloc(sizeof(struct sb_stemmer));
    if (stemmer == 0) return 0;

    for (module = modules; module->name != 0; module++) {
	if (strcmp(module->name, language) == 0) break;
    }
    if (module->name == 0) return 0;
    
    stemmer->create = module->create;
    stemmer->close = module->close;
    stemmer->stem = module->stem;

    stemmer->env = stemmer->create();

    return stemmer;
}

void sb_stemmer_release(struct sb_stemmer * stemmer)
{
    if (stemmer == 0) return;
    if (stemmer->close == 0) return;
    stemmer->close(stemmer->env);
    stemmer->close = 0;
    free(stemmer);
}

const char *
sb_stemmer_stem(struct sb_stemmer * stemmer, const char * word, int size)
{
    SN_set_current(stemmer->env, size, word);
    /* We don't care what the return value is. */
    (void) stemmer->stem(stemmer->env);
    stemmer->env->p[stemmer->env->l] = 0;
    return stemmer->env->p;
}

/* test code */
/*
void error(const char * err) {
    printf("%s\n", err);
    exit(0);
}

int main () {
    const char * stemmed;
    const char * unstemmed;
    struct sb_stemmer * s;
    
    s = sb_stemmer_create("e");
    if (s != 0) error("TEST FAIL: non zero return for unrecognised language");
    s = sb_stemmer_create("english");
    if (s == 0) error("TEST FAIL: zero return for recognised language");
    unstemmed = "recognised";
    stemmed = sb_stemmer_stem(s, unstemmed, 10);
    printf("%s -> %s\n", unstemmed, stemmed);
    unstemmed = "recognized";
    printf("%s -> %s\n", unstemmed, stemmed);
    sb_stemmer_close(s);
    printf("FINISHED\n");
}

*/
