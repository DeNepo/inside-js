'use strict';

console.log('-- begin --');

/* interpolation!

  this is where template strings get interesting
  it's much easier to dynamically create text in your programs

  you can write any expression in the template
  the expression's final value will be cast to the string type
  and the string will be concatenated into your template string


  what can you write in a string template?
  anything you could assign to a variable!

*/

// a readable way to do interpolation is using a variable for each slot

const myName = 'roboto';
const introduction = `i am ${myName}.`;
console.log(introduction);

const myHomeTown = 'brussels';
const myDog = 'Pete';
const story = `${introduction}
I grew up in ${myHomeTown},
and had a dog named ${myDog}`;
console.log(story);

// you can put any type in a template, it will be cast to string

const secondThing = Number('hello!');
const listOfThings = `1. ${1 + 3}
2. ${secondThing}
3. ${'i love ' + secondThing}`;
console.log(listOfThings);

// interpolation is like concatenating a string with expressions in parenthesis
//  the same result, a lot harder to read and write

const listOfThingsConcat =
  '1. ' +
  (1 + 3) +
  '\n' +
  '2. ' +
  secondThing +
  '\n' +
  '3. ' +
  ('i love ' + secondThing);
console.log(listOfThingsConcat);

console.log('-- end --');
