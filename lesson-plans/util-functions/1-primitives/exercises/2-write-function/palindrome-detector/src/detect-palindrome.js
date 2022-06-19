import { readString } from '../../../../../../../lib/dom-io.js';
import { replaceClass } from '../../../../../../../lib/dom-classes.js';

import { isPalindrome } from './utils/is-palindrome.js';

const reverseInput = () => {
  debugger;

  // read user's input
  const userText = readString('user-text');

  // detect if the input is a palindrome
  const itIs = isPalindrome(userText);

  // update the UI
  if (itIs) {
    replaceClass('palinzone', 'not-palindrome', 'palindrome');
  } else {
    replaceClass('palinzone', 'palindrome', 'not-palindrome');
  }
};

document.getElementById('user-text').addEventListener('input', reverseInput);
