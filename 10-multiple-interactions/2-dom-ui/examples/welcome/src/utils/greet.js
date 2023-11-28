/**
 *
 */
export const greet = (greeting = '', first = '', last = '') => {
	// create the empty greeting
	let newMessage = greeting;

	// render the first name if one was passed
	if (first !== '') {
		newMessage += ' ' + first;
	}

	// render the last name if one was passed
	if (last !== '') {
		newMessage += ' ' + last;
	}

	// return an excited greeting
	return newMessage + '!';
};
