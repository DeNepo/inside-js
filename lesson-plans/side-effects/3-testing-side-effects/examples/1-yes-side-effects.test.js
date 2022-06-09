'use strict';

/**
 * Creates a new array with entries reversed.
 *  Modifies the original array.
 *
 * @param {Array} [arr=[]] - The array to reverse.
 * @returns {Array} A new array with the reversed entries of `arr`.
 */
const reverseArray = (arr = []) => {
  // sorting the array in place
  // assigning the same array to a new variable
  const backwards = arr.reverse();
  // returning a reference to the same array!
  return backwards;
};

describe('reverseArray: reverses the entries in an array', () => {
  describe("the function's behavior", () => {
    it('reverses an empty array', () => {
      const actual = reverseArray([]);
      expect(actual).toEqual([]);
    });
    it('reverses an array of four numbers', () => {
      const actual = reverseArray([1, 2, 3, 4]);
      expect(actual).toEqual([4, 3, 2, 1]);
    });
    it('reverses an array of four booleans', () => {
      const actual = reverseArray([true, false, true, false]);
      expect(actual).toEqual([false, true, false, true]);
    });
    it('reverses an array of six strings', () => {
      const actual = reverseArray(['a', 'b', 'c', 'd', 'e', 'f']);
      expect(actual).toEqual(['f', 'e', 'd', 'c', 'b', 'a']);
    });
  });
  // another nested test suite
  describe('has no side-effects', () => {
    it('returns a new array', () => {
      // test for reference inequality (did the function return a new array?)
      const argument = ['a', 'b', 'c', 'd'];
      const returned = reverseArray(argument);
      expect(argument === returned).toEqual(false);
    });
    it('does not modify the original array', () => {
      // test for side-effects (was the argument's reference modified?)
      const argument = ['a', 'b', 'c', 'd'];
      reverseArray(argument);
      expect(argument).toEqual(['a', 'b', 'c', 'd']);
    });
  });
});
