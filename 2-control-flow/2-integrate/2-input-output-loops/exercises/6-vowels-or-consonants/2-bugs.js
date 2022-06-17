// #todo

'use strict';

/* look out for:

  - loop check logic
  - variable declarations
  - assignment vs. comparison
  - wrong interaction functions
  - off-by-one in for loop

*/

let userInput = '';
let userConfirmed = true;
while (!userConfirmed) {
  const userInput = prompt('enter a word to filter:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  // regular expression, this works!
  const whiteSpaceRegex = new RegExp('\\s', 'g');
  if (whiteSpaceRegex.test(userInput)) {
    alert("words can't have white space");
    continue;
  } else {
    const confirmMessage =
      'do you want to filter this word?\n\n' + '- "' + userInput + '"';
    userConfirmed = confirm(confirmMessage);
  }
}

const removeVowels = alert(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

const toRemove = removeVowels ? 'aeiou' : 'bcdfghjklmnpqrstvwxyz';

let filteredInput = '';
for (let i = 1; i <= userInput.length; i++) {
  const lowerCaseCharacter = userInput[i].toLowerCase();
  if (toRemove.includes(lowerCaseCharacter)) {
    filteredInput += character;
  }
  userConfirmed = false;
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
