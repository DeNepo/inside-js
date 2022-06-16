// import program data

import { numbers } from '../numbers.js';

// import helper functions

import { readSelection, display } from '../../../../../../lib/dom-io.js';

import { listItems } from './utils/list-items.js';
import { sort } from './utils/sort.js';

// once when the page is loaded
debugger;

const sortNumbers = () => {
  // each time the user does this
  debugger;

  // --- read user input ---

  const sortType = readSelection('sort-type');

  // --- read stored data to create a sorted list ---
  //  you do not need to save the sorted data

  let sortedNumbers;
  if (sortType === 'none') {
    sortedNumbers = numbers;
  } else if (sortType === 'up') {
    sortedNumbers = sort(numbers, true);
  } else if (sortType === 'down') {
    sortedNumbers = sort(numbers, false);
  }

  // --- use shared data to update the UI ---

  const numbersList = listItems(sortedNumbers);

  display('all-numbers', numbersList);
};

// tell the browser to call your function each time the user interacts
document.getElementById('sort-type').addEventListener('change', sortNumbers);
