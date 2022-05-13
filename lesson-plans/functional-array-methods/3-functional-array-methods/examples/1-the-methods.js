'use strict';

/* array methods use callbacks
  you can write and test your logic as a separate function
  then trust the array methods to use it correctly

  no side-effects!
*/

/**
 * returns true if a value is truthy, false if it is falsy
 * @param {any} entry
 * @returns {boolean}
 */
const isTruthy = (entry) => {
  return Boolean(entry);
};

// --- use array methods ---
const array = ['hi!', 0, 199, '', false, true];

// create a new array filled with the return values of isTruthy
const _1_mapped = array.map(isTruthy);

// create a new array with only the truthy values
const _2_filtered = array.filter(isTruthy);

// determine if every entry in the array is truthy
const _4_everyed = array.every(isTruthy);

// determine if some entries in the array are truthy
const _5_somed = array.some(isTruthy);
