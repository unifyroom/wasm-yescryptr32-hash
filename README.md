# wasm-yescryptr32-hash
[![NPM Version](https://img.shields.io/npm/v/wasm-yescryptr32-hash)](https://www.npmjs.com/package/wasm-yescryptr32-hash)
[![Build Status](https://github.com/unifyroom/wasm-yescryptr32-hash/actions/workflows/test_and_release.yml/badge.svg)](https://github.com/unifyroom/wasm-yescryptr32-hash/actions/workflows/test_and_release.yml)
[![Release Date](https://img.shields.io/github/release-date/unifyroom/wasm-yescryptr32-hash)](https://github.com/unifyroom/wasm-yescryptr32-hash/releases/latest)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen)](https://github.com/RichardLitt/standard-readme)

WASM binding for YescryptR32 hashing algorithm written in C

## Installation and usage
_[Buffer](https://github.com/feross/buffer) polyfill is required for usage in browsers_
- `$ npm install wasm-yescryptr32-hash`

```javascript
const Ysrc = require('wasm-yescryptr32-hash');

Ysrc().then(ysrc => {
  const hash = ysrc.digest('hello world')
});
```

## Build and test
_Docker v20+ is required_

- `$ npm run build`
- `$ npm run test`

