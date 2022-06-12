'use strict';

// prettier-ignore
const deepCompare = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));

/**
 * Reverses an array without modifying the parameter.
 *
 * @param {number[]} [arr=[]] - __
 * @returns {number[]} __
 */
const reverseArray = (array) => {
  const newArray = [];
  for (const item of array) {
    newArray.push(item);
   
  }
   return newArray.reverse();
};

<<<<<<< HEAD
const arr1 = [1, 2, 3];
const arr2 = reverseArray(arr1);
console.assert(arr1 !== arr2, '1: returns a new array');
console.assert(deepCompare(arr2, [3, 2, 1]), '2: reverses the entries');
console.log(deepCompare(arr2, [3, 2, 1]), '2: reverses the entries');
console.assert(deepCompare(arr1, [1, 2, 3]), '3: arr1 was not modified');

const arr3 = [10, 11, 12, 13];
const arr4 = reverseArray(arr3);
console.assert(arr3 !== arr4, '4: returns a new array');
console.assert(deepCompare(arr4, [13, 12, 11, 10]), '5: reverses the entries');
console.log(deepCompare(arr4, [13, 12, 11, 10]), '5: reverses the entries');
console.assert(deepCompare(arr3, [10, 11, 12, 13]), '6: arr3 was not modified');
=======
const _1_arg = [1, 2, 3];
const _1_returned = reverseArray(_1_arg);
console.assert(_1_arg !== _1_returned, '1.a: returns a new array');
console.assert(
  deepCompare(_1_returned, [3, 2, 1]),
  '1.b: reverses the entries',
);
console.assert(deepCompare(_1_arg, [1, 2, 3]), '1.c: _1_arg was not modified');

const _2_arg = [10, 11, 12, 13];
const _2_returned = reverseArray(_2_arg);
console.assert(_2_arg !== _2_returned, '2.a: returns a new array');
console.assert(
  deepCompare(_2_returned, [13, 12, 11, 10]),
  '2.b: reverses the entries',
);
console.assert(
  deepCompare(_2_arg, [10, 11, 12, 13]),
  '2.c: _2_arg was not modified',
);
>>>>>>> a0f616a451783d310b82f1dbe85ea73ccf3216cd
