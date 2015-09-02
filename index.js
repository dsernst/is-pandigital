var toDigits = require('to-digits');
var _ = require('lodash');

module.exports = function isPandigital(number) {
  var digits = toDigits(number);

  if (digits.length !== 9) {
    return false;
  }

  // does digits include every number 1 - 9?
  return _.range(1, 10).every(_.curry(_.includes)(digits));
};
