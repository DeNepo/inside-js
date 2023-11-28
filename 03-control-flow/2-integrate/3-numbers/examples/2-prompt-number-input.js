// #todo

'use strict';

/* Prompting for Numbers

  asking users to input numbers is a bit more complicated

  because input from prompt is always a string,
  you will need to coerce it to the Number type

  careful!  now you need to validate for NaN as well

*/

const userInput = prompt('please enter a number greater than 10');
console.log(typeof userInput, userInput);

if (userInput === null || userInput === '') {
  alert('nothing!  why !!! ??? !!!');
} else {
  const userNumber = Number(userInput);

  if (Number.isNaN(userNumber)) {
    alert(`"${userInput}" is not a number`);
  } else if (userNumber <= 10) {
    alert(`${userNumber} is less than 10`);
  } else {
    alert(`${userNumber} is perfect!`);
  }
}
