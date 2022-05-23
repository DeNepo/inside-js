import { similarity } from './similarity.js';

describe('determine how similar two values are', () => {
  describe('exactly the same', () => {
    const expected = 'exactly the same';
    it('1000 and 1e3', () => {
      const actual = similarity(1000, 1e3);
      expect(actual).toEqual(expected);
    });
    it('NaN and NaN', () => {
      const actual = similarity(NaN, NaN);
      expect(actual).toEqual(expected);
    });
    it('"hello" and "hello"', () => {
      const actual = similarity('hello', 'hello');
      expect(actual).toEqual(expected);
    });
    it(' and ', () => {
      const actual = similarity('hello', 'hello');
      expect(actual).toEqual(expected);
    });
  });
  describe('the same type', () => {
    const expected = 'the same type';
    it('"hello" and "goodbye"', () => {
      expect(similarity('hello', 'goodbye')).toEqual(expected);
    });
    it('100 and -100', () => {
      expect(similarity(100, -100)).toEqual(expected);
    });
    it('true and false', () => {
      expect(similarity(true, false)).toEqual(expected);
    });
    it('[] and null', () => {
      expect(similarity([], null)).toEqual(expected);
    });
  });
  describe('nothing alike', () => {
    it('true and 10', () => {
      expect(similarity(true, 10)).toEqual('nothing alike');
    });
    it('"asdf" and { hi: "mom" }', () => {
      expect(similarity('asdf', { hi: 'mom' })).toEqual('nothing alike');
    });
    it('null and undefined', () => {
      expect(similarity(null, undefined)).toEqual('nothing alike');
    });
    it('"4" and 4', () => {
      expect(similarity('4', 4)).toEqual('nothing alike');
    });
  });
});
