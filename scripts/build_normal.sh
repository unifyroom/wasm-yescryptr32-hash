# Guide https://web.dev/emscripting-a-c-library/

mkdir -p lib/wasm-build
rm -rf js-lib/wasm-build/*

emcc -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='["cwrap"]' -s MODULARIZE=1 \
  -s NODEJS_CATCH_EXIT=0 -s NODEJS_CATCH_REJECTION=0 \
  -I lib/yescrypt/yescrypt.h \
  lib/yescrypt/yescrypt.c \
  lib/yescrypt/bindings.c \
  -o lib/wasm-build/yescryptR32-hash.js

WASM_BUILD_BASE_64=$(base64 lib/wasm-build/yescryptR32-hash.wasm)

# fs.readFile/fetch of `yescryptR32-hash.wasm` isn't suitable for bundling into libraries
# Produce JS file with the wasm build base64 instead
echo 'module.exports = "'${WASM_BUILD_BASE_64}'"' > lib/wasm-build/yescryptR32-hash-wasm-base64.js

rm lib/wasm-build/yescryptR32-hash.wasm

sed -i 's/_scriptDir ||= __filename/_scriptDir || __filename/' lib/wasm-build/yescryptR32-hash.js