

struct sb_stemmer;

struct sb_stemmer *
sb_stemmer_create(const char * language);

void
sb_stemmer_release(struct sb_stemmer * stemmer);

const char *
sb_stemmer_stem(struct sb_stemmer * stemmer, const char * word, int size);

