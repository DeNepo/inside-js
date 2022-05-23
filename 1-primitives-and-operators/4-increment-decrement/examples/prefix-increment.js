// #todo

'use strict';

console.log('-- begin --');

console.log('prefix increment: ++x');

/* two things happen when you use ++x (in this order!)
  a. assign x to it's current value plus 1
  b. read the value stored by x
*/

let x = -2;
// let x = -1;
// let x = 0;
// let x = 1;
// let x = 2;
console.log('initial x:', x);

const _1_read = ++x;
console.log('1.a assign:', _1_read);
console.log('1.b read:', x);

const _2_read = ++x;
console.log('2.a assign:', _2_read);
console.log('2.b read:', x);

const _3_read = ++x;
console.log('3.a assign:', _3_read);
console.log('3.b read:', x);

const _4_read = ++x;
console.log('4.a read:', _4_read);
console.log('4.b assign:', x);

console.log('-- end --');
