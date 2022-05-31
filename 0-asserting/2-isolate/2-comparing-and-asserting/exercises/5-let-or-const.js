// #todo

'use strict';

console.log('-- begin --');

/* fill in the blanks to pass the assertions

  pay close attention to how each variable is used!
  - is a variable assigned a value when it is declared?
  - is a variable reassigned later in the script?

  your challenge is to decide whether to use let or to use const
  - use let if
    the variable is declared without an assignment
    or the variable is ever reassigned later in the script
  - use const if
    the variable is declared with a value and never reassigned

*/

let furniture = 'chair';
console.assert(furniture === 'chair', 'Test 1');
console.log(furniture === 'chair', 'Test 1');

const building = 'house';
console.assert(building === 'house', 'Test 2');
console.log(building === 'house', 'Test 2');

furniture = 'table';
console.assert(furniture === 'table', 'Test 3');
console.log(furniture === 'table', 'Test 3')

let food  = '';
console.assert(food === '', 'Test 4');
console.log(food === '', 'Test 4');


food = 'apple';
console.assert(food === 'apple', 'Test 5');
console.log(food === 'apple', 'Test 5');

console.assert(building === 'house', 'Test 6');
console.log(building === 'house', 'Test 6');

console.assert(furniture === 'table', 'Test 7');
console.log(furniture === 'table', 'Test 7');

food = 'pear';
console.assert(food === 'pear', 'Test 8');
console.log(food === 'pear', 'Test 8');



console.log('-- end --');
