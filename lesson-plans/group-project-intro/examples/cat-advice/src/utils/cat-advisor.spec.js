import { catAdvisor } from './cat-advisor.js';

describe('catAdvisor: tells you if you should get a cat or not', () => {
  it('yes, yes, yes', () => {
    const actual = catAdvisor(true, true, true);
    expect(actual).toEqual('replace your cat with a stuffed animal');
  });
  it('yes, yes, no', () => {
    const actual = catAdvisor(true, true, false);
    expect(actual).toEqual('make a friend who has a cat');
  });
  it('yes, no, yes', () => {
    const actual = catAdvisor(true, false, true);
    expect(actual).toEqual('you are doing great');
  });
  it('yes, no, no', () => {
    const actual = catAdvisor(true, false, false);
    expect(actual).toEqual('get a cat');
  });
  it('no, yes, yes', () => {
    const actual = catAdvisor(false, true, true);
    expect(actual).toEqual('rethink your life choices');
  });
  it('no, yes, no', () => {
    const actual = catAdvisor(false, true, false);
    expect(actual).toEqual('you are doing great');
  });
  it('no, no, yes', () => {
    const actual = catAdvisor(false, false, true);
    expect(actual).toEqual('you could be doing worse');
  });
  it('no, no, no', () => {
    const actual = catAdvisor(false, false, false);
    expect(actual).toEqual('you are doing great');
  });
});
