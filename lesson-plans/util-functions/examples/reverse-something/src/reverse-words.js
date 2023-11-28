import { readString, displayString } from '../../../../../lib/dom-io/index.js';

import { reverse } from './utils/reverse.js';

const reverseWords = () => {
	debugger;

	// read user's input
	const userText = readString('user-text');

	// convert the input to an array of strings
	//  split the string at each space, removing the spaces
	const userWords = userText.split(' ');

	// reverse each word in the input
	//  create a new array with the backwards words
	const backwardsWords = [];
	for (const word of userWords) {
		const nextBackwards = reverse(word);
		backwardsWords.push(nextBackwards);
	}

	// create a string from the array of backwards words
	//  separate each item by a space
	const backwards = backwardsWords.join(' ');

	// display the backwards input to the user
	displayString('reversed-output', backwards);
};

document.getElementById('reverse-each').addEventListener('click', reverseWords);
