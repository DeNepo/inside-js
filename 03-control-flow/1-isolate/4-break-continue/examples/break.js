// #todo

'use strict';

console.log('-- begin --');

/* break

  this statement can be used to exit a loop immediately

  using break inside of a conditional is very practical

*/

const max = 0;
// const max = 1;
// const max = 2;
// const max = 3;
// const max = 4;

let iterations = 0;
while (true) {
  console.log('begin loop');

  iterations = iterations + 1;

  if (iterations >= max) {
    console.log('break loop');
    break;
  }

  console.log(iterations);

  console.log('end loop');
}

console.log('-- end --');
