import { GREETING } from '../constants.js';

import { data } from '../data.js';

import { greet } from './utils/greet.js';

// once when the page is loaded
debugger;

const changeLast = () => {
	// each time the user does this
	debugger;

	// --- read user input ---

	const newLast = document.getElementById('last-name').value;

	// --- update shared data ---

	data.last = newLast;

	// --- use shared data to update the UI ---

	const newGreeting = greet(GREETING, data.first, data.last);

	document.getElementById('greeting').innerText = newGreeting;
};

// tell the browser to call your function each time the user interacts
document.getElementById('last-name').addEventListener('input', changeLast);
