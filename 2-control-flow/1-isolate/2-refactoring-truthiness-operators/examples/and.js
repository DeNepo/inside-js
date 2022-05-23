'use strict';

// experiment with different values
const a = _;
const b = _;

// "and" expression
const andValue = a && b;

// conditional statement
let conditionalValue;
if (Boolean(a) === false) {
  conditionalValue = a;
} else {
  conditionalValue = b;
}

console.assert(andValue === conditionalValue, 'always the same!');
