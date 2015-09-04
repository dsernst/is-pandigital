/*global describe,it*/

var isPandigital = require('./index.js');
var assert = require('assert');

describe('isPandigital', function () {

  it('returns true for numbers with digits 1 - 9', function () {
    assert(isPandigital(192384576) === true);
    assert(isPandigital(918273645) === true);
  });

  it('returns false if number doesn\'t have the right number of digits', function () {
    assert(isPandigital(9136485234) === false);
    assert(isPandigital(9183645) === false);
  });

  it('can optionally take a second number to specify a base', function () {
    assert(isPandigital(1234, 4) === true);
    assert(isPandigital(425631, 6) === true);
    assert(isPandigital(918273645, 2) === false);
  });

});
