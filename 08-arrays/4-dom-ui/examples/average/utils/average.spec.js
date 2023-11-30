import { average } from './average.js';

describe('average: calculates the average of an array of numbers', () => {
  describe('averaging numbers', () => {
    it('returns 0 for an empty array', () => {
      const actual = average([]);
      expect(actual).toEqual(0);
    });
    it('can average a single number', () => {
      const actual = average([4]);
      expect(actual).toEqual(4);
    });
    it('can average many of the same number', () => {
      const actual = average([4, 4, 4, 4]);
      expect(actual).toEqual(4);
    });
    it('can average opposites', () => {
      const actual = average([-2, -1, 1, 2]);
      expect(actual).toEqual(0);
    });
    it('can average a mess of numbers', () => {
      const actual = average([200, -2, 4, -10, 0, 1, 0.7, 2]);
      expect(actual).toEqual(24.4625);
    });
  });
  describe('average is a pure function', () => {
    it('does not modify the argument', () => {
      const arg = [1, 2, 3];
      average(arg);
      expect(arg).toEqual([1, 2, 3]);
    });
  });
});
