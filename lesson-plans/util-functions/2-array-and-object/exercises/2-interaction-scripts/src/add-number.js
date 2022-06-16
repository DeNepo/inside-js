// import program data

import { numbers } from '../numbers.js';

// import helper functions

import { readNumber, display } from '../../../../../../lib/dom-io.js';

import { listItems } from './utils/list-items.js';

// once when the page is loaded
debugger;

const addNumber = () => {
  // each time the user does this
  debugger;

  // --- read user input ---

  const newNumber = readNumber('the-num');

  // --- update shared data ---

  numbers.push(newNumber);

  // --- use shared data to update the UI ---

  const numbersList = listItems(numbers);
  display('all-numbers', numbersList);
};

// tell the browser to call your function each time the user interacts
document.getElementById('add-it').addEventListener('click', addNumber);
