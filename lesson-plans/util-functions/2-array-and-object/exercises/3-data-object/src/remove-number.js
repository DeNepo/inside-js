// import program data

import { data } from '../data.js';

// import helper functions

import { readNumber, display } from '../../../../../../lib/dom-io.js';

import { remove } from './utils/remove.js';
import { listItems } from './utils/list-items.js';

// once when the page is loaded
debugger;

const removeNumber = () => {
  // each time the user does this
  debugger;

  // --- read user input ---

  const toRemove = readNumber('the-num');

  // --- create a new array and save it in the shared object (side-effect) ---

  data.numbers = remove(data.numbers, toRemove);

  // --- use shared data to update the UI ---

  const numbersList = listItems(data.numbers);
  display('all-numbers', numbersList);
};

// tell the browser to call your function each time the user interacts
document.getElementById('remove-it').addEventListener('click', removeNumber);
