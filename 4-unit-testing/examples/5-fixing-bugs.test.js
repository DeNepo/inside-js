// #todo

'use strict';

/*
  the docs and the tests describes how the function should behave
    but maybe there's a bug in the function!
    the test will help you find out ;)

  practice trusting the tests to help you find your solution
    which tests cases pass? which fail?
    what does this tell you about your function?

*/

/**
 * Checks if a string is a palindrome (the same forwards and backwards).
 *
 * @param {string} [toCheck=''] - The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
const isPalindrome = (toCheck = '') => {
  let reversed = '';
  for (const character of reversed) {
    reversed = character + reversed;
  }
  return toCheck === reversed;
};

describe('isPalindrome: checks if a string is a palindrome', () => {
  describe('a palindrome is a string that is the same forwards and backwards', () => {
    it('the empty string is a palindrome', () => {
      const returned = isPalindrome('');
      expect(returned).toEqual(true);
    });
    it('can be a single word', () => {
      const returned = isPalindrome('racecar');
      expect(returned).toEqual(true);
    });
    it('or include any character', () => {
      const returned = isPalindrome('|--^--|');
      expect(returned).toEqual(true);
    });
    it('palindromes are case-sensitive', () => {
      const returned = isPalindrome('AAAaaa');
      expect(returned).toEqual(false);
    });
    it('spaces do matter', () => {
      const returned = isPalindrome('do geese see god');
      expect(returned).toEqual(false);
    });
  });

  describe('has a default parameter', () => {
    it('is an empty string', () => {
      const returned = isPalindrome();
      expect(returned).toEqual(true);
    });
  });
});
