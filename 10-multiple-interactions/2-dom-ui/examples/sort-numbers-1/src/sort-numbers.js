import { LIST_THING } from '../constants.js';

import { data } from '../data.js';

import { renderList } from './utils/render-list.js';
import { sort } from './utils/sort.js';

// once when the page is loaded
debugger;

const sortNumbers = () => {
	// each time the user does this
	debugger;

	// --- read user input ---

	const sortType = document.getElementById('sort-type').value;

	// --- read stored data to create a sorted list ---

	const sortedNumbers =
		sortType === 'none'
			? data.numbers
			: sortType === 'up'
			? sort(data.numbers, true)
			: sort(data.numbers, false);

	// --- use shared data to update the UI ---

	const numbersList = renderList(sortedNumbers, LIST_THING);
	document.getElementById('all-numbers').innerText = numbersList;
};

// tell the browser to call your function each time the user interacts
document.getElementById('sort-type').addEventListener('change', sortNumbers);
