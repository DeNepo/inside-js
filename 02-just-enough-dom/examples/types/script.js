'use strict';

/* Types

	A demonstration of how to read different types from the DOM

	Except for checkbox.checked, all input types return a string!

*/

// --- save important DON elements to variables ---

const typesFormEl = document.getElementById('types-form');

const stringInputEl = document.getElementById('string-input');
const booleanInputEl = document.getElementById('boolean-input');
const numberInputEl = document.getElementById('number-input');

const displayZoneEl = document.getElementById('display-zone');

// getting an ID that does not exist will return null
//	this is a mistake! you don't do this on purpose
const elementDoesNotExist = document.getElementById('does-not-exist');
console.assert(elementDoesNotExist === null);

// --- add event listeners + handlers ---

typesFormEl.addEventListener('input', () => {
	debugger;

	// -- reading string values in a program
	const userString = stringInputEl.value;
	console.assert(typeof userString === 'string', 'Test 1');

	// -- reading boolean values in a program
	const userBoolean = booleanInputEl.checked;
	console.assert(typeof userBoolean === 'boolean', 'Test 2');
	// checkbox.value is not a boolean!
	console.log('checkbox.value:', booleanInputEl.value);

	// -- reading number values in a program
	const userNumberString = numberInputEl.value;
	console.assert(typeof userNumberString === 'string', 'Test 3');
	// don't forget to cast to number!
	const userNumber = Number(userNumberString);
	console.assert(typeof userNumber === 'number', 'Test 4');

	// -- accessing a non-existent property on an element
	const propertyDoesNotExist = typesFormEl.doesNotExist;
	console.assert(propertyDoesNotExist === undefined, 'Test 5');

	displayZoneEl.innerText = `form values:
	${typeof userString}:  ${userString}
	${typeof userBoolean}: ${userBoolean}
	${typeof userNumberString}:  ${userNumber}`;
});
