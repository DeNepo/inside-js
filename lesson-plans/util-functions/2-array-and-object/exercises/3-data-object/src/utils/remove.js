/**
 * Removes every one of a given number in an array.
 *
 * @param {number[]} [nums=[]] - The numbers to process.
 * @param {number} [toRemove=0] - The number to remove.
 * @returns {number[]} An array with all of one number removed.
 */
export const remove = (nums = [], toRemove = 0) => {
  const removified = [];
  for (const num of nums) {
    if (num !== toRemove) {
      removified.push(num);
    }
  }
  return removified;
};
