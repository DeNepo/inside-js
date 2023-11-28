import {
	readString,
	readSelection,
	displayString,
} from '../../../../../../../lib/dom-io/index.js';

import { reverse } from './utils/reverse.js';

const reverseWordOrPhrase = () => {
	debugger;

	// --- read user input ---
	const userText = readString('user-text');
	const reverseType = readSelection('reverse-type');

	// --- reverse either the whole thing or each word ---
	let reversed = '';
	if (reverseType === 'each') {
		const splitText = userText.split(' ');
		const newWords = [];

		for (const word of splitText) {
			/// BEGIN: refactor this to call `reverse`
			// const reversedWord = reverse(__);

			let reversedWord = '';
			for (const char of word) {
				reversedWord = char + reversedWord;
			}
			/// END: refactor

			newWords.push(reversedWord);
		}

		reversed = newWords.join(' ');
	} else {
		/// BEGIN: refactor this to call `reverse`
		// reversed = reverse(__);

		let reversedText = '';
		for (const char of userText) {
			reversedText = char + reversedText;
		}
		reversed = reversedText;
		/// END: refactor
	}

	// --- display the reversed input ---
	displayString('reversed-output', reversed);
};

document.getElementById('do-it').addEventListener('click', reverseWordOrPhrase);
