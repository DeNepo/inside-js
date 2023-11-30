# Functions

This chapter (and the rest of the module) will focus on ES6 Arrow Functions
assigned to constant variables. There are a few reasons for this:

- The syntax of assigning a function to a variable makes it clear from the
  beginning that functions are just values, which is helpful for understanding
  callbacks later on. `function name() {}` syntax can make this less obvious.
- Using a constant variable means you cannot accidentally assign a different
  value to the variable that stores your function. There's a whole type of bug
  you don't need to worry about!
- Having one way to declare a function makes it easier to focus on the basics.
  Using `function` functions opens the door to many ways of declaring a
  function: _named declarations_, _anonymous function expressions_, _named
  function expressions_.
- _Function Hoisting_ is a possibly confusing behavior that can distract from
  focusing on how functions work, and how to use them in a program. Arrow
  functions assigned to constant variables are not hoisted, so no worries there!
  You can learn about this later.

## 1. Functions

Learn how to read, visualize, trace, test and debug functions in JavaScript.

## 2. Documenting Functions

Learn how to use default parameters and the JSDoc convention to clearly describe
a function for other developers: its _arguments_, _return value_ and _behavior_.

## 3. The Callstack

Study a few examples and practice using your browser's devtools to look inside
the JavaScript _execution environment_ and understand how nested function calls
create a _callstack_.

## 4. Local, Param, Parent

Build on what you learned in **The Callstack** to understand 3 _scoping_
mechanisms that can be used inside a function to assign values to your
variables.
