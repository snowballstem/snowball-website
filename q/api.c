
#include "header.h"

extern struct SN_env * SN_create_env(int S_size, int I_size, int B_size)
{   struct SN_env * z = (struct SN_env *) calloc(1, sizeof(struct SN_env));
    z->p = create_s();
    if (S_size)
    {   z->S = (byte * *) calloc(S_size, sizeof(byte *));
        {   int i;
            for (i = 0; i < S_size; i++) z->S[i] = create_s();
        }
        z->S_size = S_size;
    }

    if (I_size)
    {   z->I = (int *) calloc(I_size, sizeof(int));
        z->I_size = I_size;
    }

    if (B_size)
    {   z->B = (byte *) calloc(B_size, sizeof(byte));
        z->B_size = B_size;
    }

    return z;
}

extern void SN_close_env(struct SN_env * z)
{
    if (z->S_size)
    {
        {   int i;
            for (i = 0; i < z->S_size; i++) lose_s(z->S[i]);
        }
        free(z->S);
    }
    if (z->I_size) free(z->I);
    if (z->B_size) free(z->B);
    free(z);
}

extern void SN_set_current(struct SN_env * z, int size, char * s)
{
    replace_s(z, 0, z->l, size, (byte *) s);
    z->c = 0;
}

