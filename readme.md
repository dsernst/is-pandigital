# is-pandigital

[![NPM Version](https://img.shields.io/npm/v/is-pandigital.svg)](https://www.npmjs.com/package/is-pandigital)
[![Build Status](https://travis-ci.org/dsernst/is-pandigital.svg?branch=master)](https://travis-ci.org/dsernst/is-pandigital)

Test if a number is [pandigital](https://en.wikipedia.org/wiki/Pandigital_number): made up of the digits 1-9, once each

## Install

```
$ npm install is-pandigital
```

```js
var isPandigital = require('is-pandigital');
```

## Usage

```js
console.log(isPandigital(192384576)); // true
console.log(isPandigital(918273645)); // true
console.log(isPandigital(9136485234)); // false
console.log(isPandigital(9183645)); // false
```

Optionally, pass in a second number to specify a base (defaults to 9):

```js
console.log(isPandigital(1234, 4)); // true
console.log(isPandigital(425631, 6)); // true
console.log(isPandigital(918273645, 2)); // false
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```
$ npm install
$ npm test
```
