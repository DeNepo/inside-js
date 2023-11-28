import { remove } from './remove.js';

describe('remove: removes all of one number from an array', () => {
  describe('removing numbers', () => {
    it('removes nothing from an empty array', () => {
      const actual = remove([], 0);
      expect(actual).toEqual([]);
    });
    it('removes nothing when the number does not exist', () => {
      const actual = remove([7, 8, 9], 10);
      expect(actual).toEqual([7, 8, 9]);
    });
    it('removes all numbers if they match', () => {
      const actual = remove([4, 4, 4, 4], 4);
      expect(actual).toEqual([]);
    });
    it('removes only the number that it should', () => {
      const actual = remove([-2, -1, 1, 2, 1], 1);
      expect(actual).toEqual([-2, -1, 2]);
    });
  });
  describe('remove is a pure function', () => {
    it('does not modify the argument', () => {
      const arg = [3, 2, 1];
      remove(arg, 2);
      expect(arg).toEqual([3, 2, 1]);
    });
    it('returns a new array', () => {
      const arg = [3, 2, 1];
      const returned = remove(arg, 2);
      expect(arg !== returned).toEqual(true);
    });
  });
});
