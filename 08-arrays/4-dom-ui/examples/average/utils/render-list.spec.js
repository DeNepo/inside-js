import { renderList } from './render-list.js';

describe('renderList: converts and array into a string list with `*` bullet points', () => {
	describe('creating the list', () => {
		it('renders an empty list', () => {
			const actual = renderList([]);
			expect(actual).toEqual('');
		});
		it('renders a list with one number', () => {
			const actual = renderList([12]);
			expect(actual).toEqual('* 12\n');
		});
		it('renders a list with many numbers', () => {
			const actual = renderList([3, 12, -4, 0]);
			expect(actual).toEqual('* 3\n* 12\n* -4\n* 0\n');
		});
	});
	describe('renderList is a pure function', () => {
		it('does not modify the argument', () => {
			const arg = [1, 2, 3];
			renderList(arg);
			expect(arg).toEqual([1, 2, 3]);
		});
	});
});
