import { data } from '../data.js';

import { readSelection, display } from '../../../../../lib/dom-io.js';

import { sort } from './utils/sort.js';

// once when the page is loaded
debugger;

const sortNumbers = () => {
  // each time the user does this
  debugger;

  // --- read user input ---

  const sortType = readSelection('sort-type');

  // --- read stored data to create a sorted list ---

  const sortedNumbers =
    sortType === 'none'
      ? data.numbers
      : sortType === 'up'
      ? sort(data.numbers, true)
      : sort(data.numbers, false);

  // --- use shared data to update the UI ---

  let numbersList = '';
  for (const num of sortedNumbers) {
    numbersList += `* ${num}\n`;
  }
  display('all-numbers', numbersList);
};

// tell the browser to call your function each time the user interacts
document.getElementById('sort-type').addEventListener('change', sortNumbers);
