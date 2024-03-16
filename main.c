#include <errno.h>
#include "./lib/yescrypt/yescrypt.h"


void digest(uint8_t* p_in, uint8_t* p_out) {
  yescrypt_hash((char *) p_in, (char *) p_out);
}