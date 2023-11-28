// #todo

import { reverseAString } from './reverse-a-string.js';

describe('it should reverseAString strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverseAString()).toEqual('');
    });
  });
  describe('when argument is a string', () => {
    it('the empty string should return an empty string', () => {
      expect(reverseAString('')).toEqual(_);
    });
    it('"toads" should return "sdaot"', () => {
      expect(reverseAString(_)).toEqual('sdaot');
    });
    // write at least 5 more tests
  });
  describe('when argument is not a string', () => {
    it('true should return "text is not a string"', () => {
      expect(reverseAString(true)).toEqual(_);
    });
    // write at least 3 more tests
  });
});
