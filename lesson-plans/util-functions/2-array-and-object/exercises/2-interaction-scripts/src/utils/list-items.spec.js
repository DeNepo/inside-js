import { listItems } from './list-items.js';

describe('listItems: converts and array into a string list with `*` bullet points', () => {
  describe('creating the list', () => {
    it('renders an empty list', () => {
      const actual = listItems([]);
      expect(actual).toEqual('');
    });
    it('renders a list with one number', () => {
      const actual = listItems([12]);
      expect(actual).toEqual('* 12\n');
    });
    it('renders a list with many numbers', () => {
      const actual = listItems([3, 12, -4, 0]);
      expect(actual).toEqual('* 3\n* 12\n* -4\n* 0\n');
    });
  });
  describe('listItems is a pure function', () => {
    it('does not modify the argument', () => {
      const arg = [1, 2, 3];
      listItems(arg);
      expect(arg).toEqual([1, 2, 3]);
    });
  });
});
