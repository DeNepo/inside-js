// #todo

debugger;

/*

  files that export something will be evaluated before the file that imports them

*/

console.log('executing user.js');

// exports are evaluated at creation phase
//  they do not take a step of execution

export const user = 'John';
