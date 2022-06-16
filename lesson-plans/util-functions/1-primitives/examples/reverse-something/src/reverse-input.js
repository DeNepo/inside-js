import { readString, display } from '../../../../../../lib/dom-io.js';

import { reverse } from './utils/reverse.js';

const reverseInput = () => {
  debugger;

  // read user's input
  const userText = readString('user-text');

  // reverse the user's input
  const backwards = reverse(userText);

  // display the backwards input to the user
  display('reversed-output', backwards);
};

document.getElementById('reverse-all').addEventListener('click', reverseInput);
