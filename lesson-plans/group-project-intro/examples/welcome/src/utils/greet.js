/**
 *
 */
export const greet = (first = '', last = '') => {
  // create the empty greeting
  let greeting = 'Welcome';

  // render the first name if one was passed
  if (first !== '') {
    greeting += ' ' + first;
  }

  // render the last name if one was passed
  if (last !== '') {
    greeting += ' ' + last;
  }

  // return an excited greeting
  return greeting + '!';
};
