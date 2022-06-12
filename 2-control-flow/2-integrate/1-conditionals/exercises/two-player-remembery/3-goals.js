// #todo

'use strict';

const instructions = `Two-Player Remembery

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    if you get one wrong - game over!
`;
alert(instructions);

alert('Player 2: go hide');

const phrase1 = prompt('Player 1, enter your first phrase:');
const phrase2 = prompt('Player 1, enter your second phrase:');
const phrase3 = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

const phrasesToRemember = `Player 2, remember these:
  1. "${phrase1}"
  2. "${phrase2}"
  3. "${phrase3}"
`;
alert(phrasesToRemember);
let points = 3
/* -- BEGIN: gather player 2's guesses) -- */
let guess1 = prompt('Player 2, please enter your first guess');
console.log('guess1:', typeof guess1, guess1);

if (guess1 !== phrase1) {
  points = points - 1;
  console.log('Game Over!');
}

let guess2 = prompt('Player 2, please enter your second guess');
console.log('guess2:', typeof guess2, guess2);

if (guess2 !== phrase2) {
  points = points - 1;
  console.log('Game Over!')
}

let guess3 = prompt('Player 2, please enter your third guess');
console.log('guess3:', typeof guess3, guess3);

if (guess3 !== phrase3) {
  points = points - 1;
  console.log('Game Over!')
}


/* -- END: gather player 2's guesses -- */

alert(`your score: ${points}`);
