'sue strict';

/* Counter
    A program that allows a user to add or subtract 1 from a number.
*/

// debugger; // pause when the program is initializing

// --- declare constants ---

const DOG = `   / \\__
(    @\\___
/         O
/   (_____/
/_____/   U`;

const CAT = ` /\\_/\\
( o o )
==_Y_==
  \`-'`;

// --- save important dom elements to variables ---

const dogOrCatInput = document.getElementById('dog-or-cat');

const kennelEl = document.getElementById('kennel');

// --- add event listeners + handlers ---

dogOrCatInput.addEventListener('change', () => {
	debugger;
	const displayDog = dogOrCatInput.checked;

	if (displayDog) {
		kennelEl.innerText = DOG;
	} else {
		kennelEl.innerText = CAT;
	}
});

// --- initialize UI ---

kennelEl.innerText = CAT;
