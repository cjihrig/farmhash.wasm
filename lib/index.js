'use strict';
// Hack to work around issue related to loading from other directories.
// See https://github.com/kripken/emscripten/issues/4542
const cwd = process.cwd();
process.chdir(__dirname);
const Wasm = require('./farmhash');
process.chdir(cwd);
// End hack


function assertStringOrBuffer (input) {
  if (typeof input !== 'string' && !Buffer.isBuffer(input)) {
    throw new TypeError('input must be a string or Buffer');
  }
}


function assertInteger (seed) {
  if (!Number.isInteger(seed)) {
    throw new TypeError('seed must be an integer');
  }
}


function hash32 (input) {
  assertStringOrBuffer(input);
  return Wasm.Hash32(input);
}


function hash32WithSeed (input, seed) {
  assertStringOrBuffer(input);
  assertInteger(seed);
  return Wasm.Hash32WithSeed(input, seed);
}


function hash64 (input) {
  assertStringOrBuffer(input);
  return Wasm.Hash64(input);
}


function hash64WithSeed (input, seed) {
  assertStringOrBuffer(input);
  assertInteger(seed);
  return Wasm.Hash64WithSeed(input, seed);
}


function hash64WithSeeds (input, seed1, seed2) {
  assertStringOrBuffer(input);
  assertInteger(seed1);
  assertInteger(seed2);
  return Wasm.Hash64WithSeeds(input, seed1, seed2);
}


function fingerprint32 (input) {
  assertStringOrBuffer(input);
  return Wasm.Fingerprint32(input);
}


function fingerprint64 (input) {
  assertStringOrBuffer(input);
  return Wasm.Fingerprint64(input);
}


module.exports = {
  hash32,
  hash32WithSeed,
  hash64,
  hash64WithSeed,
  hash64WithSeeds,
  fingerprint32,
  fingerprint64
};
