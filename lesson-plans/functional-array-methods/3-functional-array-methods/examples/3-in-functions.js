'use strict';

// a function that uses array methods

/**
 * sums all of the even numbers in an array of numbers
 *  does not modify the array
 *  checks to make sure all entries are numbers
 * @param {number[]} [numbers=[]] - contains to numbers to operate on
 * @returns {number} the sum of all even numbers in the array
 */
const findNumbers = (numbers = []) => {
  const castToNumber = (entry) => {
    return Number(entry);
  };
  const isNotNaN = (entry) => {
    return !Number.isNaN(entry);
  };

  return numbers.map(castToNumber).filter(isNotNaN);
};

const _1_arg = ['1', '2', 'x', '', '-6'];
const _1_result = findNumbers(_1_arg);
console.log(_1_result); // [1, 2, 0, -6]

const _2_arg = ['hi', '2', 'five', '5', ''];
const _2_result = findNumbers(_2_arg);
console.log(_2_result); // [2, 5, 0]
