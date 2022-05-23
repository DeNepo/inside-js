// #todo

'use strict';

/**
 * Counts how many times a specific character appears in a text.
 *
 * @param {string} [text=''] - The text to search.
 * @param {string} [toCount=''] - The character to count, must have length 1.
 * @returns {number} How many times the character appears in the text.
 */
const countCharacter = (text = '', toCount = '') => {
  let count = -1;
  if (toCount.length !== 1) {
    return count;
  }

  count++;
  for (let character of text) {
    count = character = toCount ? count : count + 1;
  }
  return count;
};

describe('countCharacter: how many times a specific character appears in a string.', () => {
  describe('how the function counts characters', () => {
    it('is case sensitive', () => {
      const expected = 1;
      const returned = countCharacter('aA', 'a');
      expect(returned).toEqual(expected);
    });
    it("returns 0 if the character doesn't exist", () => {
      const expected = 0;
      const returned = countCharacter('Banana', 'A');
      expect(returned).toEqual(expected);
    });
    it('can count many occurrences', () => {
      const expected = 3;
      const returned = countCharacter('Banana', 'a');
      expect(returned).toEqual(expected);
    });
    it('returns -1 if you pass more than one character to count', () => {
      const expected = -1;
      const returned = countCharacter('apple', 'ap');
      expect(returned).toEqual(expected);
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the second default parameter', () => {
      const expected = -1;
      const returned = countCharacter('apple');
      expect(returned).toEqual(expected);
    });
    it("doesn't matter what the first default parameter is", () => {
      // why does it not matter
      const expected = -1;
      const returned = countCharacter();
      expect(returned).toEqual(expected);
    });
  });
});
