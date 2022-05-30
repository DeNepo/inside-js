/**
 * This is a function by Jonathan
 * @param {string} text
 * @param {string} toCount
 * @returns a weird value
 */
const countCharacter = (text, toCount) => {
  if (toCount.length !== 1) {
    return -1;
  }

  let count = 0;
  for (const character of text) {
    if (character === toCount) {
      count = count + 1;
    }
  }
  return count;
};

countCharacter();
