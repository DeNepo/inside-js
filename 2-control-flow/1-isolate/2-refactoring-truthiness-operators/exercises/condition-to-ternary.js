// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a _?_:_ instead of a conditional

// try different values and different types
const isLoggedIn = false;
const secretInformation = 'Aruuke';
const warningMessage = 'Nazgul';
console.log(isLoggedIn, secretInformation, warningMessage);

let toDisplay;
isLoggedIn === true ? toDisplay = secretInformation : toDisplay = warningMessage

console.log(toDisplay);

console.log('-- end --');
