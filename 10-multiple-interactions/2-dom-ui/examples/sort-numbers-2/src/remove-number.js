// import program data

import { numbers } from '../numbers.js';

// import helper functions

import { listItems } from './utils/list-items.js';

// once when the page is loaded
debugger;

const removeNumber = () => {
	// each time the user does this
	debugger;

	// --- read user input ---

	const toRemove = Number(document.getElementById('the-num').value);

	// --- update shared data by side-effect ---

	for (let i = 0; i < numbers.length; i++) {
		const number = numbers[i];
		if (number === toRemove) {
			numbers.splice(i, i + 1);
			i--;
		}
	}

	// --- use shared data to update the UI ---

	const numbersList = listItems(numbers);
	document.getElementById('all-numbers').innerText = numbersList;
};

// tell the browser to call your function each time the user interacts
document.getElementById('remove-it').addEventListener('click', removeNumber);
