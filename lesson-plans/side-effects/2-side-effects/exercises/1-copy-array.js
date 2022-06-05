'use strict';

// prettier-ignore
const deepCompare = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));

/**
 * Returns a shallow copy of an array.
 *
 * @param {number[]} [arr=[]] - __
 * @returns {number[]} __
 */
const copyArray = (array) => {
  const newArray = [];
  for (const item of array) {
    newArray.push(item);
   
  }
   return newArray;
};

const arr1 = [1, 2, 3];
const arr2 = copyArray(arr1);
console.log(arr2)
console.assert(arr1 !== arr2, '1');
console.assert(deepCompare(arr2, [1, 2, 3]), '2: with the same values');
console.assert(deepCompare(arr1, [1, 2, 3]), '3: arr1 was not modified');

const arr3 = [10, 11, 12, 13];
const arr4 = copyArray(arr3);
console.assert(arr3 !== arr4, '4: returns a new array');
console.assert(deepCompare(arr4, [10, 11, 12, 13]), '5: with the same values');
console.assert(deepCompare(arr3, [10, 11, 12, 13]), '6: arr3 was not modified');
