import { readSelection, display } from '../../../../../../lib/dom-io.js';

import { sort } from './utils/sort.js';
import { listItems } from './utils/list-items.js';

// data is only needed in this file, so it's written here
//  the array is stored in a variable declared outside of the function
//  this way the data is saved between each function call
//  each time you interact, the code uses a reference to the same array in memory
//    ! side effects !
const numbers = [0, 1, -1, 2, -2, 3, -3];

// === initialize the UI ===

display('all-numbers', listItems(numbers));

// === set up the user interaction ===

const sortNumbers = () => {
  debugger;

  // --- read user input ---

  const sortType = readSelection('sort-type');

  // --- read stored data to create a sorted list ---

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
