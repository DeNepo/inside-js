// #todo

'use strict';

/**
 * Searches for a specific character in a string.
 * If the string exists it returns the index.
 * Otherwise it returns -1.
 *
 * @param {string} [toSearch=''] - The text to search.
 * @param {string} [toFind=''] - The character to search for.
 *  If toFind is not 1 character, the search returns -1.
 * @returns {number} The index of the found character or -1.
 */
__;

describe('indexOf: finds the index of a character in a string', () => {
  describe('successful searches', () => {
    it('finds characters at the beginning of a string', () => {
      const actual = indexOf('qwerty', 'a');
      expect(actual).toEqual(0);
    });
    it('finds characters at the end of a string', () => {
      const actual = indexOf('frog', 'g');
      expect(actual).toEqual(3);
    });
    it('finds characters in the middle of a string', () => {
      const actual = indexOf('computer', 'u');
      expect(actual).toEqual(4);
    });
    it('finds the first occurrence of a character', () => {
      const actual = indexOf('potato', 't');
      expect(actual).toEqual(2);
    });
  });
  describe('indexOf return -1 when the search fails', () => {
    it('if the character does not exist', () => {
      const actual = indexOf('qwerty', 'a');
      expect(actual).toEqual(-1);
    });
    it('if you search for the empty string', () => {
      const actual = indexOf('asdfgh', '');
      expect(actual).toEqual(-1);
    });
    it('if you search for more than 1 character', () => {
      const actual = indexOf('asdfgh', 'as');
      expect(actual).toEqual(-1);
    });
    it('searching is case-sensitive', () => {
      const actual = indexOf('dog', 'D');
      expect(actual).toEqual(-1);
    });
  });
  describe('has default parameters', () => {
    it('has an empty string for the second default param', () => {
      const actual = indexOf('tomato');
      expect(actual).toEqual(-1);
    });
    it('and for the first param', () => {
      const actual = indexOf();
      expect(actual).toEqual(-1);
    });
  });
});
