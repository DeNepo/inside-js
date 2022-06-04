// #todo

'use strict';

console.log('-- begin --');

let minutesLeft = 9;

/*for (let i = minutesLeft; i > 0; i--) {
  const message = `${i} minutes left`;
  console.log(message);
}*/

// refactor this for loop to a while loop
while (minutesLeft > 0) {
  minutesLeft--;
  let message = `${minutesLeft} minutes left`
  console.log(message);
}

console.log('-- end --');
