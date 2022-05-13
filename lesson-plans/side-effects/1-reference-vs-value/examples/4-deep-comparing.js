'use strict';

/* to test if two arrays contain the same entries
  you need to check each and every entry separately!
  JavaScript does not have a native way to do this

  this process is called deep comparing
*/

const expected = [4, 100, null, 'hi!'];

const firstArr = [4, 100, null, 'hi!'];
const secondArr = [4, 'null', 'good bye'];

// you can do it manually, but that's a very bad idea
//  way too many ways to make a mistake
//  and it's not practical for large arrays
const manualCheckFirst =
  firstArr[0] === expected[0] &&
  firstArr[1] === expected[1] &&
  firstArr[2] === expected[2] &&
  firstArr[3] === expected[3];
console.assert(manualCheckFirst, 'Compare first (manual)');

const manualCheckSecond =
  secondArr[0] === expected[0] &&
  secondArr[1] === expected[1] &&
  secondArr[2] === expected[2] &&
  secondArr[3] === expected[3];
console.assert(manualCheckSecond, 'Compare second (manual)');

/* more commonly you will use a function that does this for you
  the function below will compare each item in an array
    returns true if the arguments are deeply equal
    returns false if they are not
  the function is tiny and hard to read, that's on purpose!
    you can learn how to use it without reading how it was written
    it's on one line to take up less space in the debugger or JS Tutor
  soon you'll learn to deep compare with a professional assertion library
*/

// prettier-ignore
const deepCompare = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));

const deepCompareArraysFirst = deepCompare(firstArr, expected);
console.assert(deepCompareArraysFirst, 'Compare first (with function)'); // break point here

const deepCompareArraysSecond = deepCompare(secondArr, expected);
console.assert(deepCompareArraysSecond, 'Compare second (with function)'); // break point here
