// #todo

'use strict';

console.log('-- begin --');

/* declare and assign variables as described in the comments

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

// declare a variable named aTree, don't assign a value!
let aTree;
console.log(aTree);

// assign the value "birch" to the variable aTree
aTree = 'birch';
console.log(aTree);

// declare a variable named turtle and assign it the name "myrtle"
let turtle  = 'myrtle';
console.log(turtle);

// reassign aTree to "aspen"
aTree = 'aspen';
console.log(aTree);

// declare a variable named aColor with the value "blue"
let aColor = 'blue';
console.log(aColor);

// log the value of turtle
console.log(turtle);

// reassign aTree to "oak"
aTree = 'oak';
console.log(aTree);

// reassign aColor to "orange"
aColor = 'orange';
console.log(aColor);

console.log('-- end --');
