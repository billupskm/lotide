// index.js

const assertArraysEqual  = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual        = require('./assertEqual');
const countLetters       = require('./countLetters');
const countOnly          = require('./countOnly');
const eqArrays           = require('./eqArrays');
const eqObjects          = require('./eqObjects');
const findKey            = require('./findKey');
const findKeyByValue     = require('./findKeyByValue');
const letterPositions    = require('./letterPositions');
const without            = require('./without');
const head               = require('./head');
const tail               = require('./tail');
const middle             = require('./middle');
const map                = require('./map');
const takeUntil          = require('./takeUntil');



module.exports = {
  assertArraysEqual:    assertArraysEqual,
  assertObjectsEqual:   assertObjectsEqual,
  assertEqual:          assertEqual,
  countLetters:         countLetters,
  countOnly:            countOnly,
  eqArrays:             eqArrays,
  eqObjects:            eqObjects,
  findKey:              findKey,
  findKeyByValue:       findKeyByValue,
  letterPositions:      letterPositions,
  without:              without,
  head:                 head,
  tail:                 tail,
  middle:               middle,
  map:                  map,
  takeUntil:            takeUntil

};