'use strict';

/* you may want to do multiple operations on the same data

  this is easy using multiple array methods in a row
  there are a few different ways to write this
    which do you prefer?
*/

const strings = ['1', '2', 'x', '', '-6'];

// option 1: chained method calls with separated logic

const castToNumber = (entry) => {
  return Number(entry);
};
const isNotNaN = (entry) => {
  return !Number.isNaN(entry);
};

const numbers1 = strings.map(castToNumber).filter(isNotNaN);

console.log(numbers1);

// option 2: chained method calls with inline callbacks

const numbers2 = strings
  .map((entry) => {
    return Number(entry);
  })
  .filter((entry) => {
    return !Number.isNaN(entry);
  });

console.log(numbers2);
