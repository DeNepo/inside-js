// #todo

'use strict';

console.log('-- begin --');

// practice using variables declared with let
//  fill in the blanks to log the commented values
// and don't just write the correct answer directly!
//  practice re-using values stored in variables to get the correct value

let fruit = 'banana';
let desert = 'cake';
let topping = 'frosting';

desert = 'chocolate ' + desert;
console.log(desert); // should log 'chocolate cake'

desert  = desert + ' with ' + topping;
console.log(desert); // should log 'chocolate cake with frosting'

desert  = desert + ' and banana';
console.log(desert); // should log 'chocolate cake with frosting and banana'

console.log('-- end --');
