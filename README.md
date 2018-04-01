# farmhash.wasm

[![Current Version](https://img.shields.io/npm/v/farmhash.wasm.svg)](https://www.npmjs.org/package/farmhash.wasm)
[![Build Status via Travis CI](https://travis-ci.org/cjihrig/farmhash.wasm.svg?branch=master)](https://travis-ci.org/cjihrig/farmhash.wasm)
![Dependencies](http://img.shields.io/david/cjihrig/farmhash.wasm.svg)
[![belly-button-style](https://img.shields.io/badge/eslint-bellybutton-4B32C3.svg)](https://github.com/cjihrig/belly-button)

WebAssembly implementation of Google FarmHash. This module began life as a quasi-fork of the [farmhash](https://www.npmjs.com/package/farmhash) module.

## Basic Usage

```javascript
'use strict';
const {
  hash32,
  hash32WithSeed,
  hash64,
  hash64WithSeed,
  hash64WithSeeds,
  fingerprint32,
  fingerprint64
} = require('farmhash.wasm');

console.log(hash32('foobar'));
console.log(hash32(Buffer.from('foobar')));
console.log(hash32WithSeed('foobar', 128));
console.log(hash32WithSeed(Buffer.from('foobar'), 128));
console.log(hash64('foobar'));
console.log(hash64(Buffer.from('foobar')));
console.log(hash64WithSeed('foobar', 0));
console.log(hash64WithSeed(Buffer.from('foobar'), 0));
console.log(hash64WithSeeds('foobar', 0, 0));
console.log(hash64WithSeeds(Buffer.from('foobar'), 0, 0));
console.log(fingerprint32('foobar'));
console.log(fingerprint32(Buffer.from('foobar')));
console.log(fingerprint64('foobar'));
console.log(fingerprint64(Buffer.from('foobar')));
```

## API

`farmhash.wasm` exports the following methods.

### `hash32(input)`

  - Arguments
    - `input` (string or Buffer) - Value to be hashed.
  - Returns
    - `result` (number) - A 32-bit unsigned integer hash value of `input`.

### `hash32WithSeed(input, seed)`

  - Arguments
    - `input` (string or Buffer) - Value to be hashed.
    - `seed` (integer) - Number to use as a seed.
  - Returns
    - `result` (number) - A 32-bit unsigned integer hash value of `input`.

### `hash64(input)`

  - Arguments
    - `input` (string or Buffer) - Value to be hashed.
  - Returns
    - `result` (string) - A string representation of a 64-bit unsigned integer hash value of `input`.

### `hash64WithSeed(input, seed)`

  - Arguments
    - `input` (string or Buffer) - Value to be hashed.
    - `seed` (integer) - Number to use as a seed.
  - Returns
    - `result` (string) - A string representation of a 64-bit unsigned integer hash value of `input`.

### `hash64WithSeeds(input, seed1, seed2)`

  - Arguments
    - `input` (string or Buffer) - Value to be hashed.
    - `seed1` and `seed2` (integer) - Numbers to use as a seed.
  - Returns
    - `result` (string) - A string representation of a 64-bit unsigned integer hash value of `input`.

### `fingerprint32(input)`

  - Arguments
    - `input` (string or Buffer) - Value to fingerprint.
  - Returns
    - `result` (number) - A 32-bit unsigned integer fingerprint value of `input`.

### `fingerprint64(input)`

  - Arguments
    - `input` (string or Buffer) - Value to fingerprint.
  - Returns
    - `result` (number) - A string representation of a 64-bit unsigned integer fingerprint value of `input`.
