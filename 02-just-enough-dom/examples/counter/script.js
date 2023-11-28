'sue strict';

/* Counter
    A program that allows a user to add or subtract 1 from a number.
*/

// debugger; // pause when the program is initializing

// --- declare state variables ---

let count = 0;

// --- save important dom elements to variables ---

const upButtonEl = document.getElementById('up');
const downButtonEl = document.getElementById('down');

const displayCountEl = document.getElementById('display-count');

// --- add event listeners + handlers ---

downButtonEl.addEventListener('click', () => {
	console.log('subtracting 1');
	// debugger; // pause when subtracting 1

	count -= 1;
	displayCountEl.innerText = count;

	console.log(count);
});

upButtonEl.addEventListener('click', () => {
	console.log('adding 1');
	// debugger; // pause when adding 1
	count += 1;
	displayCountEl.innerText = count;

	console.log(count);
});

// --- initialize UI ---

displayCountEl.innerText = count;

console.log(count);
