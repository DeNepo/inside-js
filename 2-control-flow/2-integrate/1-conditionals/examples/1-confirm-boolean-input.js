// #todo

'use strict';

/* Confirming with Boolean Input

  when a user has just a yes/no decision with no input
  that can be represented by a boolean value

*/

const favoriteColorInput = prompt('please enter your favorite color');

const confirmedFavoriteColor = confirm(
  'are you sure "' + favoriteColorInput + '" is your favorite color?',
);

if (confirmedFavoriteColor) {
  alert('nice.  your favorite color is "' + favoriteColorInput + '"');
} else {
  alert('well then, what is it?');
}
