'use strict';

/* math

  some simple(ish) math expressions

  hint: if you highlight a line, only that line will be traced

*/

const a = 3 * 2 + 1;
console.assert(a === __, 'a');

const b = 3 * (2 + 1);
console.assert(b === __, 'b');

const c = 4 / 2 - 1;
console.assert(c === __, 'c');

const d = 4 / (2 - 1);
console.assert(d === __, 'd');

const e = 1 + -2 * 3;
console.assert(e === __, 'e');

const f = (1 + -2) * 3;
console.assert(f === __, 'f');

const h = (4 % 2) + 3;
console.assert(h === __, 'h');

const i = 4 % (2 + 3);
console.assert(i === __, 'i');

// --- beware of NaN! ---
//  remember implicit coercion?

const x = 1 * 'two' * 3;
console.assert(Object.is(x, __), 'x');

const y = 3 + undefined - 3;
console.assert(Object.is(y, __), 'y');

const z = (2 - 2) / 0;
console.assert(Object.is(z, __), 'z');
