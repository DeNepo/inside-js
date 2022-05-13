'use strict';

/* you may want to do multiple operations on the same data
  this is easy using multiple array methods in a row
  there are a few different ways to write this:
*/

// challenge: keep only the numbery strings
const strings = ['1', '2', 'x', '', '-6'];

// --- callbacks: the logic used for each step ---
const castToNumber = (entry) => {
  return Number(entry);
};
const isNotNaN = (entry) => {
  return !Number.isNaN(entry);
};

/* option 1: chained method calls with separated logic
  pros: reads almost like a paragraph
      logic can be tested and reused
  cons: harder to debug, no steps to inspect
*/
const numbers1 = strings.map(castToNumber).filter(isNotNaN);
console.log(numbers1);

/* option 2: chained method calls with inline callbacks
  pros: even less code to read - logic is right there
  cons: harder to debug, no steps to inspect
      logic cannot be tested or reused
      callback logic can be harder to read than variable names
*/
const numbers2 = strings
  .map((entry) => {
    return Number(entry);
  })
  .filter((entry) => {
    return !Number.isNaN(entry);
  });

console.log(numbers2);
