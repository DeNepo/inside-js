import { readString, display } from '../../../../../../../lib/dom-io.js';

import { removeCharacters } from './utils/remove-characters.js';

const removeVowels = () => {
  debugger;

  // --- read user input ---
  const userText = readString('user-text');

  // --- remove all vowels from the input ---
  //  use `removeCharacters` to write this step of the program
  ___;

  // --- display the input with no vowels ---
  display('removified', noVowels);
};

document.getElementById('vowels').addEventListener('click', removeVowels);
