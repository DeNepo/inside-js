// #todo

'use strict';

// NaN is a strange thing in JavaScript
//  if you are not careful about types in your programs ...
//  ... NaN will come to get you!

console.log('--- NaN is a number');

console.log(typeof NaN); // "number"

console.log('--- Comparing with === is confusing');

console.log(NaN !== NaN); // true

console.log(NaN === NaN); // false

console.log('--- Comparing with Object.is() makes more sense');

console.log(Object.is(NaN, NaN)); // true

/* There are two common ways to check if something is NaN

  the second is Number.isNaN() (use this one!)
    checks if a value is NaN

  the first one is isNaN() (don't use this one!)
    checks if a value WILL BECOME NaN if you cast it

 */
console.log('--- Number.isNaN(x) returns true if a value is NaN ');
// this is the best practice for checking if a value is NaN

const numIsNan1 = Number.isNaN(NaN);
console.log(numIsNan1); // true

const numIsNan2 = Number.isNaN('asdf');
console.log(numIsNan2); // false

const numIsNan3 = Number.isNaN(undefined);
console.log(numIsNan3); // false

const numIsNan4 = Number.isNaN('4');
console.log(numIsNan4); // false

console.log('--- isNaN(x) returns true if a the value casts to NaN ');
// isNaN() method first converts any value provided to a number
// and then checks if it is NaN.

const isNan1 = isNaN(NaN);
console.log(isNan1); // true

const isNan2 = isNaN('asdf');
console.log(isNan2); // true

const isNan3 = isNaN(undefined);
console.log(isNan3); // true

const isNan4 = isNaN('4');
console.log(isNan4); // true

console.log('--- isNaN is the same as Number() then Number.isNaN');

const numA = Number(NaN);
const isNanA = isNaN(numA);
console.log(isNanA); // true

const numB = Number('asdf');
const isNanB = isNaN(numB);
console.log(isNanB); // true

const numC = Number(undefined);
const isNanC = isNaN(numC);
console.log(isNanC); // true

const numD = Number('4');
const isNanD = isNaN(numD);
console.log(isNanD); // false
