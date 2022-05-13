'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const add = (x = 0, y = 0) => {
  return x + y;
};

describe('add: returns the sum of two numbers', () => {
  it('adds two positive numbers', () => {
    const received = add(1, 1);
    expect(received).toEqual(2);
  });
  it('__', () => {
    const received = add(_, _);
    expect(received).toEqual(_);
  });
  // ... write at least 4 more tests
});
