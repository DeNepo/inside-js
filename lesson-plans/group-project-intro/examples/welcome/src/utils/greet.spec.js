import { greet } from './greet.js';

describe('greet: creates a greeting from a first and last name', () => {
  it('says "Welcome!" when no names are passed', () => {
    expect(greet('', '')).toEqual('Welcome!');
  });
  it('says "Welcome <first>!" when only a first name is passed', () => {
    expect(greet('Java', '')).toEqual('Welcome Java!');
  });
  it('says "Welcome <last>!" when only a last name is passed', () => {
    expect(greet('', 'Script')).toEqual('Welcome Script!');
  });
  it('says "Welcome <first> <last>!" when both names are passed', () => {
    expect(greet('Java', 'Script')).toEqual('Welcome Java Script!');
  });
});
