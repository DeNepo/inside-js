// #todo

'use strict';

/**
 * Removes characters from a string based on their index.
 * It starts with index 0 then removes characters at a regular interval.
 *
 * @param {string} [text=''] - The text with characters to remove.
 * @param {number} [toSkip=1] - How often to skip a character.
 * @returns {string} The text with missing characters.
 */
const skipCharacters = (text = '', toSkip = 1) => {
  if (toSkip < 1) {
    return text;
  }

  let skipified = '';
  let index = 0;
  for (const character of text) {
    if (++index % toSkip === 0) {
      skipified += character;
    }
  }
  return skipified;
};

describe("skipCharacters: removes every x'th character from a string", () => {
  describe('how it skips characters by index', () => {
    it('skips nothing when passed anything less than 1', () => {
      const returned = skipCharacters('abcdefghijkl', -14);
      expect(returned).toEqual('abcdefghijkl');
    });
    it('skips everything', () => {
      const returned = skipCharacters('abcdefghijkl', 1);
      expect(returned).toEqual('');
    });
    it('skips every other starting with the first', () => {
      const returned = skipCharacters('abcdefghijkl', 2);
      expect(returned).toEqual('bdfhjl');
    });
    it('skips every 3 starting with the first', () => {
      const returned = skipCharacters('abcdefghijkl', 3);
      expect(returned).toEqual('bcefhikl');
    });
    it('skips every 4 starting with the first', () => {
      const returned = skipCharacters('abcdefghijkl', 4);
      expect(returned).toEqual('bcdfghjkl');
    });
    it('skips every 5 starting with the first', () => {
      const returned = skipCharacters('abcdefghijkl', 6);
      expect(returned).toEqual('bcdefhijkl');
    });
  });
  describe('default parameters', () => {
    it('second parameter, skips nothing', () => {
      const returned = skipCharacters('hello');
      expect(returned).toEqual('hello');
    });
    it('first parameter is an empty string', () => {
      const returned = skipCharacters();
      expect(returned).toEqual('');
    });
  });
});
