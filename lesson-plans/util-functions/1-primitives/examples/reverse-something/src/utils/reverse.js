/**
 * Reverses a given string.
 *
 * @param {string} [text=''] - The string to reverse.
 * @returns {string} The argument, but backwards.
 */
export const reverse = (text = '') => {
  let backwards = '';
  for (const char of text) {
    backwards = char + backwards;
  }
  return backwards;
};
