'use strict';

// experiment with different values
const a = _;
const b = _;

// "or" expression
const orValue = a || b;

// conditional statement
let conditionalValue;
if (Boolean(a) === true) {
  conditionalValue = a;
} else {
  conditionalValue = b;
}

console.assert(orValue === conditionalValue, 'always the same!');
