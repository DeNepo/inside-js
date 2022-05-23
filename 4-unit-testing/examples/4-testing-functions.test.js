// #todo

'use strict';

/* testing functions

  most often you will be using `describe`, `it` and `expect` to test functions
  functions can be described by their arguments and return values:
  - arguments: the values passed into a function call
  - return value: the value returned from a function call

  unit testing functions is simple (in principle), just compare!
  did the function actually return the value you expected it to?
  - expected: what the function should return if it's working correctly
  - actual: what the function actually returns (maybe it's broken!)

  testing functions just means comparing these two values

*/

/**
 * Checks if a string is a palindrome (the same forwards and backwards).
 *
 * @param {string} [toCheck=''] - The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
const isPalindrome = (toCheck = '') => {
  let reversed = '';
  for (const character of toCheck) {
    reversed = character + reversed;
  }
  return toCheck === reversed;
};

describe('isPalindrome: checks if a string is a palindrome', () => {
  describe('a palindrome is a string that is the same forwards and backwards', () => {
    it('the empty string is a palindrome', () => {
      const actual = isPalindrome('');
      const expected = true;
      expect(actual).toEqual(expected);
    });
    it('can be a single word', () => {
      const actual = isPalindrome('racecar');
      const expected = true;
      expect(actual).toEqual(expected);
    });
    it('or include any character', () => {
      const actual = isPalindrome('|--^--|');
      const expected = true;
      expect(actual).toEqual(expected);
    });
    it('palindromes are case-sensitive', () => {
      const actual = isPalindrome('AAAaaa');
      const expected = false;
      expect(actual).toEqual(expected);
    });
    it('spaces do matter', () => {
      const actual = isPalindrome('do geese see god');
      const expected = false;
      expect(actual).toEqual(expected);
    });
  });

  describe('has a default parameter', () => {
    it('is an empty string', () => {
      const actual = isPalindrome();
      expect(actual).toEqual(true);
    });
  });
});
