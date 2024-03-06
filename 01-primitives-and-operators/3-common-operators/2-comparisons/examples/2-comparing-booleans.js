// #todo

'use strict';

console.log('-- begin --');

/* Comparing Booleans

  comparing booleans happens in two steps:
  1. cast the boolean to a number
  2. compare the numbers

  the following examples are equivalent
  in part a, the booleans are being coerced behind the scenes
    implicit coercion
  in part b, the coercion is happening explicitly with Number(x)
    explicit coercion
  in each case, the final comparison is the same

*/

// this is equivalent to writing:  1 > 0
const _1_a_implicit = true > false;
const _1_b_explicit = Number(true) > Number(false);
console.log(typeof _1_a_implicit, _1_a_implicit);
console.log(typeof _1_b_explicit, _1_b_explicit);

// this is equivalent to writing:  0 < 0
const _2_a_implicit = false < false;
const _2_b_explicit = Number(false) < Number(false);
console.log(typeof _2_a_implicit, _2_a_implicit);
console.log(typeof _2_b_explicit, _2_b_explicit);

// this is equivalent to writing:  0 >= 1
const _3_a_implicit = false >= true;
const _3_b_explicit = Number(false) >= Number(true);
console.log(typeof _3_a_implicit, _3_a_implicit);
console.log(typeof _3_b_explicit, _3_b_explicit);

// this is equivalent to writing:  1 <= 1
const _4_a_implicit = true <= true;
const _4_b_explicit = Number(true) <= Number(true);
console.log(typeof _4_a_implicit, _4_a_implicit);
console.log(typeof _4_b_explicit, _4_b_explicit);

console.log('-- end --');
