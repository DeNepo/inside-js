'use strict';

/* everything mixed together

  these expressions are strange things to practice tracing
  you won't come across things like this too often
  and you shouldn't be writing them either!

*/

const w = 'HELLO';
const x = true;
const y = 4;
const z = -4;

// ---

const a = typeof typeof x === typeof w;
console.assert(a === __, 'a');

const b = w.length >= y + 1;
console.assert(b === __, 'b');

const c = y + z === w[4];
console.assert(c === __, 'c');

const d = y + z || x;
console.assert(d === __, 'd');

const e = x === (w.slice(1, 5).length === y);
console.assert(e === __, 'e');
