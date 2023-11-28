// #todo

'use strict';

/**
 * ___
 * @param {string} [text=''] - ___
 * @param {number} [repeats=_] - ___
 * @returns {string} ___
 */
__;

describe('repeater: repeats a string a specific number of times', () => {
  it('can repeat a string once', () => {
    const actual = repeat('aaaa', 1);
    expect(actual).toEqual('aaaa');
  });
  it('can repeat a string 4 times', () => {
    const actual = repeat('Pp', 4);
    expect(actual).toEqual('PpPpPpPp');
  });
  it('repeating the empty string is still empty', () => {
    const actual = repeat('', 12);
    expect(actual).toEqual('PpPpPpPp');
  });
  it('repeating anything 0 times is the empty string', () => {
    const actual = repeat('hoy!', 0);
    expect(actual).toEqual('');
  });
  describe('the function has default parameters', () => {
    it('has 1 as a second default parameter', () => {
      const actual = repeat('-+-');
      expect(actual).toEqual('-+-');
    });
    it('has an empty string for the first', () => {
      const actual = repeat();
      expect(actual).toEqual('');
    });
  });
});
