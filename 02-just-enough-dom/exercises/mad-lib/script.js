'use strict';

/* Mad Lib

	This program creates a humorous sentence with the user's suggestions. 

	The sentence is not displayed until all 3 inputs are filled.

*/

// --- save important DON elements to variables ---

const suggestionsForm = _._(_);
console.assert(suggestionsForm.id === 'suggestions', 'Test 1');

const nounInput = _._(_);
console.assert(nounInput.placeholder === 'plural noun', 'Test 2');

const verbInput = _._(_);
console.assert(verbInput.type === 'text', 'Test 3');

const adjectiveInput = _._(_);
console.assert(verbInput.nodeName === 'INPUT', 'Test 4');

const displayEl = _._(_);
console.assert(displayEl.innerText === '', 'Test 5');

// --- add event listeners + handlers ---

_._('input', () => {
	// --- read user input ---

	const noun = _._;
	const verb = _._;
	const adjective = _._;

	// --- decide whether to display the sentence ---

	const showSentence = noun !== '' && verb !== '' && adjective !== '';

	// --- update the UI ---

	if (_) {
		_._ = `When the sunset is ${adjective}, ${noun}s always ${verb}.`;
	} else {
		_._ = '';
	}
});
