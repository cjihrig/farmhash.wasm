'use strict';
const Code = require('code');
const Lab = require('lab');
const {
  hash32,
  hash32WithSeed,
  hash64,
  hash64WithSeed,
  hash64WithSeeds,
  fingerprint32,
  fingerprint64
} = require('../lib');

// Test shortcuts
const lab = exports.lab = Lab.script();
const { describe, it } = lab;
const { expect } = Code;


describe('FarmHash', () => {
  it('validates results from all functions', () => {
    const input = 'The quick brown fox jumped over the lazy sleeping dog';
    const seed = 123;

    expect(hash32(input)).to.be.a.number().and.equal(577833711);
    expect(hash32WithSeed(input, seed)).to.be.a.number().and.equal(1375312431);
    expect(hash64(input)).to.be.a.string().and.equal('16382131313952563933');
    expect(hash64WithSeed(input, seed)).to.be.a.string().and.equal('14847439105710386525');
    expect(hash64WithSeeds(input, seed, seed)).to.be.a.string().and.equal('1066598616902653328');
    expect(fingerprint32(input)).to.be.a.number().and.equal(2280764877);
    expect(fingerprint64(input)).to.be.a.string().and.equal('17097846426514660294');
  });

  it('all functions throw if input is not a string or Buffer', () => {
    [
      hash32,
      hash32WithSeed,
      hash64,
      hash64WithSeed,
      hash64WithSeeds,
      fingerprint32,
      fingerprint64
    ].forEach((fn) => {
      [undefined, null, true, false, 0, NaN, Infinity, {}].forEach((value) => {
        expect(() => {
          fn(value);
        }).to.throw(TypeError, 'input must be a string or Buffer');
      });
    });
  });

  it('throws if seed inputs are not integers', () => {
    [hash32WithSeed, hash64WithSeed, hash64WithSeeds].forEach((fn) => {
      [undefined, null, true, false, '', 2.1, NaN, Infinity, {}].forEach((value) => {
        expect(() => {
          fn('foo', value);
        }).to.throw(TypeError, 'seed must be an integer');
      });
    });
  });
});
