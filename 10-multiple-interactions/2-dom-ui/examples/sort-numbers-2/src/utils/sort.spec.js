import { sort } from './sort.js';

describe('sort: sorts an array of numbers', () => {
  describe('sorting the numbers', () => {
    it('sorts an empty array', () => {
      expect(sort([], true)).toEqual([]);
    });
    it('sorts from smallest to largest', () => {
      expect(sort([4, 2, 3, 1], true)).toEqual([1, 2, 3, 4]);
    });
    it('sorts from smallest to largest (by default)', () => {
      expect(sort([5, 7, 2])).toEqual([2, 5, 7]);
    });
    it('can sort from largest to smallest', () => {
      expect(sort([5, -3, 7, 2], false)).toEqual([7, 5, 2, -3]);
    });
  });
  describe('avoiding side-effects', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = sort(arg);
      expect(arg !== returned).toEqual(true);
    });
    it('does not modify the argument when sorting up', () => {
      const arg = [3, 1, 2];
      sort(arg);
      expect(arg).toEqual([3, 1, 2]);
    });
    it('does not modify the argument when sorting down', () => {
      const arg = [3, 1, 2];
      sort(arg, false);
      expect(arg).toEqual([3, 1, 2]);
    });
  });
});
