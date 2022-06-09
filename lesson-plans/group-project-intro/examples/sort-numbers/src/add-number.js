import { data } from '../data.js';

import { readNumber, display } from '../../../../../lib/dom-io.js';

// once when the page is loaded
debugger;

const addNumber = () => {
  // each time the user does this
  debugger;

  // --- read user input ---

  const newNumber = readNumber('the-num');

  // --- update shared data ---

  data.numbers.push(newNumber);

  // --- use shared data to update the UI ---

  let numbersList = '';
  for (const num of data.numbers) {
    numbersList += `* ${num}\n`;
  }
  display('all-numbers', numbersList);
};

// tell the browser to call your function each time the user interacts
document.getElementById('add-it').addEventListener('click', addNumber);
