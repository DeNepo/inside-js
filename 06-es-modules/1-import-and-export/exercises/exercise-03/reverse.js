// #todo

debugger;

export const reverse = (text = '') => {
  let backwards = '';
  for (const char of text) {
    backwards = char + backwards;
  }
  return backwards;
};
