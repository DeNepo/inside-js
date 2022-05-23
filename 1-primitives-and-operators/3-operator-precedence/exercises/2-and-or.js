'use strict';

/* && and ||

  short circuiting!  don't forget it

  it's possible to get the same result different ways

  hint: if you highlight a line, only that line will be traced

*/

// --- booleans ---

const a = true || (false && true);
console.assert(a === __, 'a');

const b = (true || false) && true;
console.assert(b === __, 'b');

const c = true && (false || false) && true;
console.assert(c === __, 'c');

const d = true || (false && false) || true;
console.assert(d === __, 'd');

const e = (true || false) && (false || true);
console.assert(e === __, 'e');

// --- numbers ---

const f = 1 || (0 && 2);
console.assert(f === __, 'f');

const g = (1 || 0) && 2;
console.assert(g === __, 'g');

const h = 1 && (0 || 0) && 2;
console.assert(h === __, 'h');

const i = 1 || (0 && 0) || 2;
console.assert(i === __, 'i');

const j = (1 || 0) && (0 || 2);
console.assert(j === __, 'j');

// --- strings ---

const k = 'hi' || ('' && 'bye');
console.assert(k === __, 'k');

const l = ('hi' || '') && 'bye';
console.assert(l === __, 'l');

const m = 'hi' && ('' || '') && 'bye';
console.assert(m === __, 'm');

const n = 'hi' || ('' && '') || 'bye';
console.assert(n === __, 'n');

const o = ('hi' || '') && ('' || 'bye');
console.assert(o === __, 'o');
