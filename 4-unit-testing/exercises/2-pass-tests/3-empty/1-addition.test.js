// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=_] - The left number.
 * @param {number} [y=_] - The right number.
 * @returns {number} The sum of x and y.
 */
__;

describe('add: adds two numbers', () => {
  describe('how addition works', () => {
    it('1 + 1 -> 2', () => {
      const returned = add(1, 1);
      expect(returned).toEqual(2);
    });
    it('-1 + 1 -> 0', () => {
      const returned = add(-1, 1);
      expect(returned).toEqual(0);
    });
    it('13 + -1 -> 12', () => {
      const returned = add(13, -1);
      expect(returned).toEqual(12);
    });
    it('0 + 0 -> 0', () => {
      const returned = add(0, 0);
      expect(returned).toEqual(0);
    });
  });

  describe('the default parameters', () => {
    it('the second is 0', () => {
      const returned = add(1);
      expect(returned).toEqual(1);
    });
    it('the first is also 0', () => {
      const returned = add();
      expect(returned).toEqual(0);
    });
  });
});
