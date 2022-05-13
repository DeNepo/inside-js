'use strict';

/**
 * Adds a given number to each entry in an array.
 *  It returns a new array and has no side-effects.
 *
 * @param {number[]} [numbers=[]] - The numbers operate on.
 * @param {number} [addMe=0] - What to add to each number in the array.
 * @returns {number[]} A new array with all the big numbers.
 *
 * @example
 * addANumber([1, 2, 3, 4], 3); // [4, 5, 6, 7]
 *
 * @example
 * addANumber([-2, -1, 0, 1], 1); // [-1, 0, 1, 2]
 */
const addANumber = () => {};

describe('addANumber: adds a given number to each number in an array', () => {
  describe('the function adds to each entry:', () => {
    it('in a sorted array', () => {
      const actual = addANumber([-3, -2, -1, 0, 1, 2, 3], 1);
      expect(actual).toEqual([-2, -1, 0, 1, 2, 3, 4]);
    });
    it('in a backwards array', () => {
      const actual = addANumber([3, 2, 1, 0, -1, -2, -3], 2);
      expect(actual).toEqual([5, 4, 3, 2, 1, 0, -1]);
    });
    it('in a messy array', () => {
      const actual = addANumber([3, 0, 1, -1, 2, -3, -2], 3);
      expect(actual).toEqual([6, 3, 4, 2, 5, 0, 1]);
    });
    it('when adding a negative number', () => {
      const actual = addANumber([-2, -1, 0, 1, 2], -1);
      expect(actual).toEqual([-3, -2, -1, 0, 1]);
    });
    it('when there are decimal numbers', () => {
      const actual = addANumber([-1, -0.5, 0, 0.5, 1], 1);
      expect(actual).toEqual([0, 0.5, 1, 1.5, 2]);
    });
    it('when there are huge numbers', () => {
      const actual = addANumber(
        [-Infinity, -9999999999, 9999999, 123456789, Infinity],
        10000000,
      );
      expect(actual).toEqual([
        -Infinity,
        -9989999999,
        19999999,
        133456789,
        Infinity,
      ]);
    });
    it('by default it adds 0 to the array', () => {
      const actual = addANumber([-2, -1, 0, 1, 2]);
      expect(actual).toEqual([-2, -1, 0, 1, 2]);
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
