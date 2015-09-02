var toDigits = require('to-digits');
var _ = require('lodash');

module.exports = function isPandigital(number, base) {
  base = base || 9;
  var digits = toDigits(number);

  if (digits.length !== base) {
    return false;
  }

  // does digits include every number 1 - base?
  return _.range(1, base + 1).every(_.curry(_.includes)(digits));
};
