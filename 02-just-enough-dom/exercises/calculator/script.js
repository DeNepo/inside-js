'use strict';

/* Calculator

	Do math with two numbers.

*/

// --- save important DON elements to variables ---

const leftNumberEl = _;
const rightNumberEl = _;

const addButton = _;
const subtractButton = _;
const multiplyButton = _;
const divideButton = _;

const displayEl = _;

// --- add event listeners + handlers ---

addButton.addEventListener('click', () => {
	const leftNum = Number(_._);
	const rightNum = _(_._);

	const sum = leftNum + rightNum;

	_._ = `${leftNum} + ${rightNum} = ${sum}`;
});

_.addEventListener('click', () => {
	const leftNum = _(_);
	const rightNum = _(_);

	const difference = _;

	_._ = `${_} - ${_} = ${_}`;
});

multiplyButton._('_', () => {
	const leftNum = _;
	const rightNum = _;

	const product = _;

	_ = _;
});

_._(_, () => {
	/* write this whole thing */
});
