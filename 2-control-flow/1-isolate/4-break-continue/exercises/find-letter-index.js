// #todo

'use strict';

console.log('-- begin --');

const word = 'pitsicola';
const targetLetter = 'c';

let index = 0;
while (true) {
  const nextLetter = word[index];
  console.log(index + ': ' + nextLetter);

  if (nextLetter === targetLetter) {
    break;
  }

  index += 1;
}

console.assert(index === 5, 'this letter is at index 5');

console.log('-- end --');
