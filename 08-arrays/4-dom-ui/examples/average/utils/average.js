/**
 * Calculates the average of a list of numbers.
 *
 * @param {number[]} [numbers=[]] - The numbers to average.
 * @returns {number} The average of all numbers.
 */
export const average = (numbers = []) => {
	if (numbers.length === 0) {
		return 0;
	}

	let sum = 0;
	for (const number of numbers) {
		sum += number;
	}

	return sum / numbers.length;
};
