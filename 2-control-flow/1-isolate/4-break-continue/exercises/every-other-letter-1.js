// #todo

'use strict';

console.log('-- begin --');

const word = 'pitsicola';

let index = 0;
let logThisOne = true;
while (index < word.length) {
  index += 1;

  logThisOne = !logThisOne;
  if (!logThisOne) {
    break;
  } 

  const nextLetter = word[index];
  console.log(index + ': ', nextLetter); // i, s, c, l
}

console.assert(index === word[index].length, 'there are this many letters in the word');

console.log('-- end --');
