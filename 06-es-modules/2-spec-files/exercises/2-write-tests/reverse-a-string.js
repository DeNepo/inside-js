/**
 * this function reverses a string
 * @param {string} [text=''] - the string to reverse
 * @returns {string} the reversed text
 */
export const reverseAString = (text = '') => {
  if (typeof text !== 'string') {
    return 'text is not a string';
  }

  let reversed = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
};
