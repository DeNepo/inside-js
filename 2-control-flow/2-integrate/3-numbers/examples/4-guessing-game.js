// #todo

'use strict';

/* User Paths

  the previous examples were boring, the user just did what you said (or not)

  but what if the user had more than one option?

  and what if they could choose their own path through your program?

  then you just might have a game

  try predicting how this game works just by reading the code
    how many prompts are there?
    how many choices does each user have?
    how many paths are there total?
    how would you draw a diagram of this game?

  (this example is very long, you aren't expected to write something like this just yet)

*/

// show the use all of their options in this game
const userInput = prompt(`Welcome!

"play": begin the game
"-h": read the instructions
"": exit the game`);

if (userInput === '-h') {
  // did they ask for help? show them the instructions!

  alert(`This is a two player game.

Player 1: enters a secret number, and then a clue.
Player 2: is shown the clue and must guess the number.

you can end the game with cancel or an empty input`);
} else if (userInput === 'play') {
  // did they ask to play the game? start the game!

  // declare a variable to store the winner of this game
  let winner = 'no one';

  alert('Player 2: look away! hide your eyes!');

  // --- begin player 1's turn ---
  // get the user's secret number as a string and coerce it to number
  const secretNumberInput = prompt('Player 1: enter a secret number');
  const secretNumber = Number(secretNumberInput);

  if (secretNumberInput === null || secretNumberInput === '') {
    // if they did not enter anything, leave the game early.
    //  no one wins when the game ends early
    alert('good bye');
  } else if (Number.isNaN(secretNumber)) {
    // if the user did not enter a number, let them know and end the game early
    alert(`"${secretNumberInput}" is not a number.  good bye.`);
  } else {
    // if the first player entered a number, ask them to enter a clue
    const clue = prompt('Player 1: enter a clue to help guess your number');

    if (clue === '' || clue === null) {
      // leave early if there is no clue
      alert('good bye');
    } else {
      // let the first player review their number and their clue before moving on
      alert(`Player 2: you entered ...

- number: ${secretNumber}
- clue: "${clue}"`);

      alert('now go get Player 2');

      // --- begin player 2's turn ---
      // present player 2 with the clue and let them guess the number

      const guessInput = prompt(`Player 2, Here is your clue:

        - ${clue}

        what do you think the secret number is?`);
      // coerce their input to a number
      const guessNumber = Number(guessInput);

      if (guessInput === null || guessInput === '') {
        // no input? no game, no winner.  done
        alert('good bye');
      } else if (Number.isNaN(guessNumber)) {
        // input was not a number? end the game
        const notANumberMessage =
          '"' + guessInput + '" is not a number\n\n' + 'good bye.';
        alert(notANumberMessage);
      } else if (guessNumber === secretNumber) {
        // player 2's guess was correct, they win!
        winner = 'Player 2';
        alert('Congrats, you were right!\n\n');
      } else {
        // player 2's guess was wrong, they lose :()
        winner = 'Player 1';

        // ask player 2 if they want to know the secret message
        const revealTheSecret = confirm(
          `Nope, not correct. \n\ndo you want to know the secret?`,
        );

        if (revealTheSecret) {
          // show the secret if they confirmed
          alert(
            `The secret was:

- ${secretNumber}

thanks for playing`,
          );
        } else {
          // end the game without showing the secret number
          alert('better luck next time');
        }
      }
    }
  }

  // log the winner to the console when the game is finished
  console.log('game over. the winner is: ', winner);
} else if (userInput !== null && userInput !== '') {
  // or did they input an unknown command?
  //  let them know it is not correct
  alert(`unknown command: "${userInput}"

try again.`);
}
