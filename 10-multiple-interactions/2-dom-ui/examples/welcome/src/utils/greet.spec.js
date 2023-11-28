import { greet } from './greet.js';

describe('greet: creates a greeting from a first and last name', () => {
	it('says "Welcome!" when no names are passed', () => {
		expect(greet('Welcome', '', '')).toEqual('Welcome!');
	});
	it('says "Welcome <first>!" when only a first name is passed', () => {
		expect(greet('Hi', 'Java', '')).toEqual('Hi Java!');
	});
	it('says "Welcome <last>!" when only a last name is passed', () => {
		expect(greet('Leave me alone', '', 'Script')).toEqual(
			'Leave me alone Script!',
		);
	});
	it('says "Welcome <first> <last>!" when both names are passed', () => {
		expect(greet('Howdy', 'Java', 'Script')).toEqual('Howdy Java Script!');
	});
});
