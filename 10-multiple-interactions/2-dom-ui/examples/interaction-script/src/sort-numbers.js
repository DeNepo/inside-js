import { numbers } from '../data.js';

import { sort } from './utils/sort.js';
import { listItems } from './utils/list-items.js';

// === set up the user interaction ===

const sortNumbers = () => {
	debugger;

	// --- read user input ---

	const sortType = document.getElementById('sort-type').value;

	// --- read stored data to create a sorted list ---

	let sortedNumbers;
	if (sortType === 'none') {
		sortedNumbers = numbers;
	} else if (sortType === 'up') {
		sortedNumbers = sort(numbers, true);
	} else if (sortType === 'down') {
		sortedNumbers = sort(numbers, false);
	}

	// --- use shared data to update the UI ---

	const numbersList = listItems(sortedNumbers);
	document.getElementById('all-numbers').innerText = numbersList;
};

// tell the browser to call your function each time the user interacts
document.getElementById('sort-type').addEventListener('change', sortNumbers);
