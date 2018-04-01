#include <emscripten.h>
#include <emscripten/bind.h>
#include "farmhash.h"

using namespace emscripten;


uint32_t Hash32(const std::string data) {
  return util::Hash32(data);
}


uint32_t Hash32WithSeed(const std::string data, const uint32_t seed) {
  return util::Hash32WithSeed(data, seed);
}


std::string Hash64(const std::string data) {
  return std::to_string(util::Hash64(data));
}


std::string Hash64WithSeed(const std::string data, const uint32_t seed) {
  return std::to_string(util::Hash64WithSeed(data, seed));
}


std::string Hash64WithSeeds(const std::string data,
                            const uint32_t seed1,
                            const uint32_t seed2) {
  return std::to_string(util::Hash64WithSeeds(data, seed1, seed2));
}


uint32_t Fingerprint32(const std::string data) {
  return util::Fingerprint32(data);
}


std::string Fingerprint64(const std::string data) {
  return std::to_string(util::Fingerprint64(data));
}


EMSCRIPTEN_BINDINGS(farmhash) {
  function("Hash32", &Hash32);
  function("Hash32WithSeed", &Hash32WithSeed);
  function("Hash64", &Hash64);
  function("Hash64WithSeed", &Hash64WithSeed);
  function("Hash64WithSeeds", &Hash64WithSeeds);
  function("Fingerprint32", &Fingerprint32);
  function("Fingerprint64", &Fingerprint64);
}
