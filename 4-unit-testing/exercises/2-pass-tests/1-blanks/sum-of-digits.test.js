// #todo

'use strict';

/**
 * Add together all the digits in a number.
 * If the number is negative, the sum will be negative.
 *
 * @param {number} [toSum=0] - The number who's digits will be summed.
 * @returns {number} The sum of all digits in toSum.
 */
const sumOfDigits = (toSum = 0) => {
  const _ = String(toSum);
  const onlyDigits = stringedNumber.replaceAll('.', '').replaceAll('-', '');
  let sum = 0;
  for (const character of _) {
    const num = _(character);
    __;
  }

  return _ ? -sum : sum;
};

describe('sumOfDigits: sums the digits in a number', () => {
  describe('how it sums the digits', () => {
    it('each digit in the number is summed as a separate number', () => {
      const actual = sumOfDigits(123);
      expect(actual).toEqual(6);
    });
    it('single-digit numbers are not changed', () => {
      const actual = sumOfDigits(4);
      expect(actual).toEqual(4);
    });
    it('the point in decimals is ignored', () => {
      const actual = sumOfDigits(1.5);
      expect(actual).toEqual(6);
    });
    it('negative numbers return negative values', () => {
      const actual = sumOfDigits(-11);
      expect(actual).toEqual(-2);
    });
    it('zero is zero', () => {
      const actual = sumOfDigits(0);
      expect(actual).toEqual(0);
    });
    it('zeros are ignored', () => {
      const actual = sumOfDigits(100000);
      expect(actual).toEqual(1);
    });
    it('does all of these things at once', () => {
      const actual = sumOfDigits(-50.5);
      expect(actual).toEqual(-10);
    });
  });
  describe('default parameters', () => {
    it('has a default parameter 0', () => {
      const actual = sumOfDigits();
      expect(actual).toEqual(0);
    });
  });
});
