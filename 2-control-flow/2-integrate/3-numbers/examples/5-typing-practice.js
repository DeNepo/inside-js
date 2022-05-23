// #todo

'use strict';

alert(
  `Typing Practice:

1. enter a phrase to practice typing
2. decide how many times you want to practice
3. practice typing!`,
);

// ====== set up the game =====

// --- get the phrase to practice typing ---

let phraseToPractice = '';
while (true) {
  const userInput = prompt('enter a phrase to practice typing');

  if (userInput === null || userInput === '') {
    alert('you must enter something');
    continue;
  }

  const confirmation = confirm('is this correct? \n\n"' + userInput + '"');
  if (confirmation) {
    phraseToPractice = userInput;
    break;
  }
}

// --- get how many times to practice typing it ---

let repetitions = 0;
while (true) {
  const userInput = prompt('enter the number of times you want to pratice');
  const userNumber = Number(userInput);

  if (Number.isNaN(userNumber)) {
    alert(`"${userInput}" is not a number, try again`);
    continue;
  }

  repetitions = userNumber;
  break;
}

// ===== play the game =====

alert(
  `You will now be asked to re-type your phrase ${repetitions} times.

If you make a mistake, the game is over :(`,
);

// --- try re-typing the text perfectly ---

let attempts = 0;
while (attempts !== repetitions) {
  const userInput = prompt(`practice round ${attempts + 1}:`);

  if (userInput === null || userInput === '') {
    alert('there is not canceling!');
    continue;
  }

  if (userInput !== phraseToPractice) {
    break;
  }

  attempts = attempts + 1;
}

// --- let the user know how they did ---

if (attempts !== repetitions) {
  alert(`you made it ${attempts} rounds before making a mistake`);
} else {
  alert(
    `Well done! You typed

- ${phraseToPractice}

${repetitions} times without a mistake`,
  );
}
