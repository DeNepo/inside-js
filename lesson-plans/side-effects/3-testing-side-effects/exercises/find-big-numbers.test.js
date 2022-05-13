'use strict';

/**
 * Finds all of the numbers in an array larger than a specific value.
 * It returns a new array and has no side-effects.
 *
 * @param {number[]} [numbers=[]] - The numbers to search.
 * @param {number} [big=0] - Keep numbers larger than or equal to this value.
 * @returns {number[]} A new array with all the big numbers.
 *
 * @example
 * findBigNumbers([1, 2, 3, 4], 3); // [3, 4]
 *
 * @example
 * findBigNumbers([-2, -1, 0, 1, 2], 0); // [0, 1, 2]
 */
const findBigNumbers = () => {};

describe('findBigNumbers: finds all the big numbers in an array', () => {
  describe('the function finds big numbers:', () => {
    it('in a sorted array', () => {
      const actual = findBigNumbers([-3, -2, -1, 0, 1, 2, 3], 1);
      expect(actual).toEqual([1, 2, 3]);
    });
    it('in a backwards array', () => {
      const actual = findBigNumbers([3, 2, 1, 0, -1, -2, -3], 1);
      expect(actual).toEqual([3, 2, 1]);
    });
    it('in a messy array', () => {
      const actual = findBigNumbers([3, 0, 1, -1, 2, -3, -2], 1);
      expect(actual).toEqual([3, 1, 2]);
    });
    it('when the limit is negative', () => {
      const actual = findBigNumbers([3, 0, 1, -1, 2, -3, -2], -1);
      expect(actual).toEqual([3, 0, 1, -1, 2]);
    });
    it('when there are decimal numbers', () => {
      const actual = findBigNumbers([-1, -0.5, 0, 0.5, 1], -0.5);
      expect(actual).toEqual([-0.5, 0, 0.5, 1]);
    });
    it('when there are huge numbers', () => {
      const actual = findBigNumbers(
        [-Infinity, -9999999999, 9999999, 123456789, Infinity],
        10000000,
      );
      expect(actual).toEqual([123456789, Infinity]);
    });
    it('by default "big" is greater than or equal to 0', () => {
      const actual = findBigNumbers([-2, -1, 0, 1, 2]);
      expect(actual).toEqual([0, 1, 2]);
    });
  });
  describe('there are no side-effects', () => {
    it('returns a new array', () => {
      writeThisTest;
    });
    it('does not modify the original array', () => {
      writeThisTest;
    });
  });
});
