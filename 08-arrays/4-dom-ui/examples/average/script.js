import { average } from './utils/average.js';
import { renderList } from './utils/render-list.js';

/* Average

    Displays a list of numbers and their average.

    The average updates dynamically as users add numbers to the list.

*/

// === state ===

const numbers = [];

// === important DOM elements ===

const numberInputEl = document.getElementById('new-number');
const addNumberButton = document.getElementById('add-new-number');

const displayZoneEl = document.getElementById('display-zone');

// === define user interaction ===

const addNumberToList = () => {
	// -- read new number and add it to state ---
	const newNumber = Number(numberInputEl.value);
	numbers.push(newNumber);

	// --- calculate the average of all saved numbers ---
	const newAverage = average(numbers);

	// --- render a new message for the user ---
	const message = `=> ${newAverage}\n\n${renderList(numbers)}`;

	// --- display the message for the user ---
	displayZoneEl.innerText = message;
};

// === pass handler to event listener ===

addNumberButton.addEventListener('click', addNumberToList);
