#include <errno.h>
#include "emscripten.h"
#include "yescrypt.h"

EMSCRIPTEN_KEEPALIVE
uint8_t* create_buffer(uint32_t size) {
  return malloc(size * sizeof(char));
}

EMSCRIPTEN_KEEPALIVE
void destroy_buffer(uint8_t* p) {
  free(p);
}

EMSCRIPTEN_KEEPALIVE
void digest(uint8_t* p_in, uint8_t* p_out) {
    yescrypt_hash((char *) p_in, (char *) p_out);
}
