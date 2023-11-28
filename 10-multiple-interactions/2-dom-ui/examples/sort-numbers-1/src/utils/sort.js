/**
 *
 */
export const sort = (numbers = [], up = true) => {
	// create a new array to avoid side-effects
	const numbersCopy = [...numbers];

	// sort the new array by side-effect
	numbersCopy.sort((a, b) => a - b);

	// reverse the new array if requested
	if (!up) {
		numbersCopy.reverse();
	}

	// return sorted numbers
	return numbersCopy;
};
