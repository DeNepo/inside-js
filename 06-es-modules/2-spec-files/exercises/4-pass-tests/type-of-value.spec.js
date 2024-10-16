import { typeOfValue } from './type-of-value.js';

describe('the function returns the type of any value', () => {
  describe('"string"', () => {
    it('empty string -> "string"', () => {
      expect(typeOfValue('')).toEqual('string');
    });
    it('a short string -> "string"', () => {
      expect(typeOfValue('toads')).toEqual('string');
    });
    it('a long string -> "string"', () => {
      const longString = 'aiugn0923gonh dc987rz8xbs1';
      expect(typeOfValue(longString)).toEqual('string');
    });
  });
  describe('"number"', () => {
    it('NaN -> "number"', () => {
      expect(typeOfValue(NaN)).toEqual('number');
    });
    it('0 -> "number"', () => {
      expect(typeOfValue(0)).toEqual('number');
    });
    it('-Infinity -> "number"', () => {
      expect(typeOfValue(-Infinity)).toEqual('number');
    });
  });
  describe('"boolean"', () => {
    it('true -> "boolean"', () => {
      expect(typeOfValue(true)).toEqual('boolean');
    });
    it('false -> "boolean"', () => {
      expect(typeOfValue(false)).toEqual('boolean');
    });
  });
  describe('"undefined"', () => {
    it('undefined -> "undefined"', () => {
      expect(typeOfValue(undefined)).toEqual('undefined');
    });
    it('no argument -> "undefined"', () => {
      expect(typeOfValue()).toEqual('undefined');
    });
  });
  describe('"object"', () => {
    it('null -> "object"', () => {
      expect(typeOfValue(null)).toEqual('object');
    });
    it('an array -> "object"', () => {
      expect(typeOfValue([])).toEqual('object');
    });
    it('an object -> "object"', () => {
      expect(typeOfValue({})).toEqual('object');
    });
  });
  describe('"function"', () => {
    it('an ES5 function -> "function"', () => {
      expect(typeOfValue(function () {})).toEqual('function');
    });
    it('an ES6 arrow -> "function"', () => {
      expect(typeOfValue(() => {})).toEqual('function');
    });
  });
});
