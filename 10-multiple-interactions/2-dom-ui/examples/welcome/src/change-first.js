import { GREETING } from '../constants.js';

import { data } from '../data.js';

import { greet } from './utils/greet.js';

// once when the page is loaded
debugger;

// --- declare callback ---
const changeFirst = () => {
	// each time the user does this
	debugger;

	// --- read user input ---

	const newFirst = document.getElementById('first-name').value;

	// --- update shared data ---

	data.first = newFirst;

	// --- use shared data to update the UI ---

	const newGreeting = greet(GREETING, data.first, data.last);

	document.getElementById('greeting').innerText = newGreeting;
};

// --- pass callback ---
// tell the browser to call your function each time the user interacts
document.getElementById('first-name').addEventListener('input', changeFirst);
