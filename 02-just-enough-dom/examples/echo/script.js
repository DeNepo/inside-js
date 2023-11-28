'use strict';

/* Echo
	A program that echo's a user's input to the DOM and the console
*/

// --- save important DON elements to variables ---

const userTextEl = document.getElementById('user-text');
const echoButtonEl = document.getElementById('echo-button');

const displayZoneEl = document.getElementById('display-zone');

// --- add event listeners + handlers ---

echoButtonEl.addEventListener('click', () => {
	const userInput = userTextEl.value;

	console.log(userInput);

	displayZoneEl.innerText = userTextEl.value;
});
