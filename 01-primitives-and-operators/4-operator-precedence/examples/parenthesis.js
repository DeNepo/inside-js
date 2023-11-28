'use strict';

/* Parenthesis

  wrapping an expression in parenthesis changes the order of operations
    anything wrapped in ( ) will be executed first


  try using the [trace] button to see how each expression is different

*/

// normal order of operations:  typeof, ===
const a = typeof 5 === 'number';
console.log(a); // 'true'

// grouped order of operations:  ===, typeof
const b = typeof (5 === 'number');
console.log(b); // 'boolean'
