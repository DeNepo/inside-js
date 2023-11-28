import { LIST_THING } from '../constants.js';

import { data } from '../data.js';

import { renderList } from './utils/render-list.js';

// once when the page is loaded
debugger;

// --- declare callback ---
const addNumber = () => {
	// each time the user does this
	debugger;

	// --- read user input ---

	const newNumber = Number(document.getElementById('the-num').value);

	// --- update shared data ---

	data.numbers.push(newNumber);

	// --- use shared data to update the UI ---

	const numbersList = renderList(data.numbers, LIST_THING);
	document.getElementById('all-numbers').innerText = numbersList;
};

// --- pass the callback ---
// tell the browser to call your function each time the user interacts
document.getElementById('add-it').addEventListener('click', addNumber);
