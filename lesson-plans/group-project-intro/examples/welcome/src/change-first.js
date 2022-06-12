import { data } from '../data.js';

import { readString, display } from '../../../../../lib/dom-io.js';

import { greet } from './utils/greet.js';

// once when the page is loaded
debugger;

const changeFirst = () => {
  // each time the user does this
  debugger;

  // --- read user input ---

  const newFirst = readString('first-name');

  // --- update shared data ---

  data.first = newFirst;

  // --- use shared data to update the UI ---

  const newGreeting = greet(data.first, data.last);
  display('greeting', newGreeting);
};

// tell the browser to call your function each time the user interacts
document.getElementById('first-name').addEventListener('input', changeFirst);
