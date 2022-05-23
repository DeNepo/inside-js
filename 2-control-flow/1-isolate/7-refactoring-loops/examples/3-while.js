'use strict';

/* refactoring `while` loops

  while loops can always be refactored to for loops
    but the `for` loop can be harder to read
  for loops tell others you will be stepping
    using them for something else can be unexpected

  there are many things you can do with a `while` loop
    that are simply not possible with `for-of` loops

*/

console.log('-- while --');

let input1 = null;
while (input1 === null) {
  input1 = prompt('enter something');
}
console.log(input1);

console.log('-- for --');

// confusing, it's not what you expect!
//  no initialization
//  yes check
//  no step
let input2 = null;
for (; input2 === null; ) {
  input2 = prompt('enter something');
}
console.log(input2);
