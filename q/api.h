
struct SN_env {
    unsigned char * p;
    int c; int a; int l; int lb; int bra; int ket;
    int S_size; int I_size; int B_size;
    unsigned char * * S;
    int * I;
    unsigned char * B;
};

extern struct SN_env * SN_create_env(int S_size, int I_size, int B_size);
extern void SN_close_env(struct SN_env * z);

extern void SN_set_current(struct SN_env * z, int size, char * s);

