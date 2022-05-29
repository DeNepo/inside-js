// #todo

'use strict';

console.log('-- begin --');

// practice using variables declared with let
//  fill in the blanks to log the commented values
// and don't just write the correct answer directly!
//  you should use firstFiveLetters to fill in one blank for each step

let firstFiveLetters = 'c';
console.log(firstFiveLetters); // should log "c"

firstFiveLetters = 'b' + firstFiveLetters;
console.log(firstFiveLetters); // should log "bc"

firstFiveLetters = firstFiveLetters + 'd';
console.log(firstFiveLetters); // should log "bcd"

firstFiveLetters = 'a' + firstFiveLetters;
console.log(firstFiveLetters); // should log "abcd"

firstFiveLetters = firstFiveLetters + 'e';
console.log(firstFiveLetters); // should log "abcde"

console.log('-- end --');
