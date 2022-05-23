// #todo

'use strict';

console.log('-- begin --');

/* Unicode & .charCodeAt()

  before moving on to string comparisons you should be familiar with Unicode
  Unicode is a convention that connects each character on your screen to a number
  here are some examples:
  - 'e' is represented by 101
  - '#' is represented by 35
  - '2' is represented by 50
  - ... https://unicode-table.com/en/

  JavaScript uses the Unicode convention behind the scenes to process string data
  usually you won't need to think about this
  but when comparing strings, you must know about it

  when JavaScript compares strings, it doesn't use alphabetical order
  it compares the unicode values for characters

  more about Unicode
  - https://home.unicode.org/
  - https://www.youtube.com/watch?v=-n2nlPHEMG8&feature=youtu.be
  - https://flaviocopes.com/javascript-unicode/

*/

// the .charCodeAt() method will tell you the number of a character
// you'll need to keep this in mind to understand string comparisons

const e = 'e';
const eUnicodeNumber = e.charCodeAt();
console.log(e, '->', eUnicodeNumber);

const hashtag = '#';
const hashtagUnicodeNumber = hashtag.charCodeAt();
console.log(hashtag, '->', hashtagUnicodeNumber);

const two = '2';
const twoUnicodeNumber = two.charCodeAt();
console.log(two, '->', twoUnicodeNumber);

const space = ' ';
const spaceUnicodeNumber = space.charCodeAt();
console.log(space, '->', spaceUnicodeNumber);

console.log('-- end --');
