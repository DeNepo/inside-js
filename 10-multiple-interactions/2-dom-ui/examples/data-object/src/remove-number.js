// import program data

import { data } from '../data.js';

// import helper functions

import { remove } from './utils/remove.js';
import { listItems } from './utils/list-items.js';

// once when the page is loaded
debugger;

const removeNumber = () => {
	// each time the user does this
	debugger;

	// --- read user input ---

	const toRemove = Number(document.getElementById('the-num').value);

	// --- create a new array and save it in the shared object (side-effect) ---

	data.numbers = remove(data.numbers, toRemove);

	// --- use shared data to update the UI ---

	const numbersList = listItems(data.numbers);
	document.getElementById('all-numbers').innerText = numbersList;
};

// tell the browser to call your function each time the user interacts
document.getElementById('remove-it').addEventListener('click', removeNumber);
