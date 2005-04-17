
/* Make header file work when included from C++ */
#ifdef __cplusplus
extern "C" {
#endif

struct sb_stemmer;

struct sb_stemmer *
sb_stemmer_create(const char * language);

void
sb_stemmer_release(struct sb_stemmer * stemmer);

const char *
sb_stemmer_stem(struct sb_stemmer * stemmer, const char * word, int size);

#ifdef __cplusplus
}
#endif

