# Inside JS

<!-- need a thing here -->

---

## Learning Objectives

<details>
<summary>Priorities: 🥚, 🐣, 🐥, 🐔 (click to learn more)</summary>
<br>

There is a lot to learn in this repository. If you can't master all the material
at once, that's expected! Anything you don't master now will always be waiting
for you to review when you need it. These 4 emoji's will help you prioritize
your study time and to measure your progress:

- 🥚: Understanding this material is required, it covers the base skills you'll
  need to move on. You do not need to finish all of them but should feel
  comfortable that you could with enough time.
- 🐣: You have started all of these exercises and feel you could complete them
  all if you just had more time. It may not be easy for you but with effort you
  can make it through.
- 🐥: You have studied the examples and started some exercises if you had time.
  You should have a big-picture understanding of these concepts/skills, but may
  not be confident completing the exercises.
- 🐔: These concepts or skills are not necessary but are related to this module.
  If you are finished with 🥚, 🐣 and 🐥 you can use the 🐔 exercises to push
  yourself without getting distracted from the module's main objectives.

---

</details>

### [0. Asserting](./0-asserting)

- **Skills**
  - [ ] 🥚 **Predicting Execution**: You can use the browser's debugger to step
        through your code. Before each step you can make a prediction about what
        will happen, after each step you can check your prediction.
  - [ ] 🥚 **Assertion Testing**: You can write assertion tests to predict what
        values will be in your program at a specific step of execution.
- **Language Features**: You are comfortable reading and tracing programs that
  use ...
  - [ ] 🥚 **Comments**: You can write clear, helpful comments and can explain
        different ways comments can be used in a program.
  - [ ] 🥚 **Strings**: You can write and read string values in a program.
  - [ ] 🥚 **`let` vs. `const`**: You can explain the differences between `let`
        and `const` including: _uninitialized declarations_ and _reassignment_.
        You can determine when a variable can be assigned with `const` in a
        program.
  - [ ] 🥚 **Strict Comparison**: You can explain how the `===` and `!==`
        operators compare strings, and can predict the result of any string
        comparison.
  - [ ] 🥚 **`console.log`**: You can use `console.log` to create program traces
        in the console, and to print other helpful info for developers.
  - [ ] 🥚 **`console.assert`**: You can use the `console.assert` for assertion
        testing, and can write a helpful message assertion message.

### [1. Primitives and Operators](./1-primitives-and-operators)

- **Skills**
  - [ ] 🥚 **Statements vs. Expressions**: identify
  - **Operator Precedence**:
    - [ ] 🐣 **Tracing**: Using an operator trace table and the [trace] button,
          you can step through expressions with many operators.
    - [ ] 🐥 **Evaluating**: Using all available tools, you can manually
          evaluate expressions with many operators.
- **Language Features**: You are comfortable reading and tracing programs that
  use ...
  - [ ] 🥚 **Primitive Types**: You can explain the difference between the 5
        main primitive types (_string_, _number_, _boolean_, _null_,
        _undefined_) and what they are used for in a program.
  - [ ] 🥚 **`typeof`**: You can predict the `typeof` operator's output for
        values from any of the 5 main primitive types.
  - [ ] 🥚 explicit coercions: Boolean, String, Number
  - [ ] 🥚 Truthiness operators: &&, ||, !, ? :
  - [ ] 🥚 Short-Circuiting in && and ||
  - [ ] 🥚 implicit coercion: explain the concept
  - [ ] 🐣 comparisons
  - [ ] 🐣 template literals
  - [ ] 🐥 arithmetic

### [2. Control Flow](./2-control-flow)

- **Skills**
  - [ ] 🥚 **Imperative Programming**:
  - 🐣 **Refactoring**:
    - [ ] ternary operators & conditionals
    - [ ] logical operators and conditionals
    - [ ] between loop types
  - programs that use control flow
    - [ ] 🥚 blanks
    - [ ] 🐣 bugs
    - [ ] 🐣 goals
    - [ ] 🐔 empty page
- **Language Features**: You are comfortable reading and tracing programs that
  use ...
  - [ ] 🥚 block scope
  - [ ] 🥚 conditionals
  - [ ] 🥚 while loops
  - [ ] 🥚 for-of strings
  - [ ] 🐣 for loops
  - [ ] 🐣 break
  - [ ] 🐣 continue

### [3. Functions](./3-functions)

- **Skills**
  - [ ] 🥚 You can trace function execution by hand and with debugging tools.
  - [ ] 🥚 You can call functions in a program.
  - [ ] 🥚 You can explain and inspect the callstack using the browser's
        debugger.
  - [ ] 🐣 You can explain the different ways a variable in a function can get
        it's value, and can show this in the debugger:
    - local declarations
    - parameter
    - parent scopes
  - [ ] 🐣 You can write a JS Doc comment to describe a function.
  - [ ] 🐣 writing functions to pass specific input/output tests
- **Language Features**: You are comfortable reading and tracing programs that
  use ...
  - [ ] 🥚 ES6 arrow functions
  - [ ] 🥚 Default parameters

### [5. Unit Testing](./5-unit-testing)

- **Skills**
  - [ ] 🥚 Testing Environments: you understand that the conventional
        `describe`/`it`/`expect.toEqual` functions are defined by a _testing
        library_ and made available as _global variables_ in a testing
        environment.
  - [ ] 🥚 Test File Naming Conventions: `.test.js` and `.spec.js`, normally
        interchangeable. in HYF materials `.test.js` means the tests are in the
        same file as the function, `.spec.js` means they are in a separate file.
        Also, extra extensions `.__.js` are for developers and tooling but don't
        matter to JS.
  - [ ] 🥚 Reading Tests: you can read unit tests to understand what a function
        is supposed to do
  - [ ] 🥚 Stepping Through Tests: you can step through unit tests in the
        debugger, stepping over the global testing functions and into the
        function you are testing.
  - [ ] 🐣 Writing Tests: given a working function, you can write passing unit
        tests to describe it's behavior
  - [ ] 🐣 Debugging Functions: given working tests and a function with small
        mistakes, you can fix the function to pass the tests
  - [ ] 🐥 Passing Tests: given working unit tests and an empty function, you
        can write code to pass the tests
- **Language Features**:
  - nothing new here!

### [6. ES Modules](./6-es-modules)

- **Skills**
  - [ ] 🥚 can use ?deps & VSCode plugin to visualize project dependencies
  - [ ] 🥚 visualizing a project's dependency graph using the
        [VSCode Dependency Cruiser extension](https://marketplace.visualstudio.com/items?itemName=juanallo.vscode-dependency-cruiser)
        or the `?deps` lens
  - [ ] 🥚 Spec Files: can work with functions and unit tests separated into
        separate files.
- **Language Features**: You are comfortable reading and tracing programs that
  use ...
  - [ ] 🥚 **module files**: in strict mode by default, no more `'use strict'`!
  - [ ] 🥚 `export const _ = () => {};`
  - [ ] 🥚 `import { _ } from '_.js';`

### [6. Using Functions](./6-using-functions)

- **Skills**
  - [ ] 🥚 **Procedural Programming**
  - [ ] 🥚 You can use a pre-written function to complete a program.
  - [ ] 🐣 You can write a functions used in a program, and can _split_ your
        code into multiple files.
  - [ ] 🐣 You can refactor a function out of a program and test the function
        separately.
- **Language Features**:
  - Nothing new here!

### [7. Arrays](./7-arrays)

- **Skills**
  - [ ] 🥚 reference vs. value: explain it, demonstrate with an example
  - [ ] 🥚 deep vs. shallow copying ([...] vs. deepCopy())
  - [ ] 🥚 filling in blanks to complete interactive programs that use control
        flow & an array or object
  - [ ] 🥚 iterating an array with for loops
  - [ ] 🥚 explain side-effects with an example
  - [ ] 🥚 avoiding side effects when writing your own functions
  - [ ] 🐣 find and fix side-effects in existing functions
  - [ ] 🐥 write tests to check a function for side-effects
  - [ ] 🐥 circular references
  - programs that use arrays and objects
    - [ ] 🥚 blanks
    - [ ] 🐣 bugs
    - [ ] 🐣 goals
    - [ ] 🐔 empty page
- **Language Features**: You are comfortable reading and tracing programs that
  use ...
  - [ ] 🥚 arrays: access by index
  - [ ] 🥚 non-functional array methods:
    - side-effecty: push, pop, shift, unshift, reverse, sort
    - not side-effecty: at, includes (reference vs. value)
  - [ ] 🥚 Array.isArray
  - [ ] 🥚 for-of with array
  - [ ] 🐣 **Spread Syntax**: can use it to (shallow!) copy an array
  - [ ] 🐥 destructuring arrays

### [8. Functional Array Methods](./8-functional-array-methods)

- **Skills**
  - [ ] 🥚 **Declarative Programming**
  - [ ] 🥚 higher-order functions
    - what is a callback
    - can pass a callback
    - can pass a callback
  - [ ] 🥚 understand and explain the strategies: map, filter, reduce, every and
        some
    - implement with loops
    - implement with array methods
  - [ ] 🥚 can explain an array method's execution using the debugger and scope
        panel
  - [ ] 🥚 **Array Strategies**: You can explain the array processing strategies
        used by these common array methods:
    - **Mapping**, **Filtering**, **Reducing**
  - [ ] 🐣 **implicit return callbacks** to make code with inline callbacks more
        readable
    - can identify when a function's body is a single expression
    - and decide if it is more readable to use implicit or explicit return
    - sort: can explain the difference between an implicit & explicit return.
      can determine when an explicit return function can be refactored into an
      implicit return function. can refactor the function.
- **Language Features**: You are comfortable reading and tracing programs that
  use ...
  - [ ] 🥚 **Arrow Functions with Implicit Returns**:
  - Array Methods
    - [ ] 🥚 `.map`
    - [ ] 🥚 `.filter`
    - [ ] 🥚 `.every` & `.some`
    - [ ] 🐣 `.find`
    - [ ] 🐣 `.reduce`

### [9. Arrays of Objects](./8-arrays-of-objects)

- **Skills**:
  - [ ] 🐣 write functions that use array methods to operate on arrays of
        objects
- **Language Features**: You are comfortable reading and tracing programs that
  use ...
  - [ ] 🥚 arrays: access by index
  - [ ] 🥚 non-functional array methods:
    - side-effecty: push, pop, shift, unshift, reverse, sort
    - not side-effecty: at, includes (reference vs. value)
  - [ ] 🥚 object: add, read and update keys.
  - [ ] 🥚 dots vs. brackets
  - [ ] 🥚 Array.isArray
  - [ ] 🥚 for-of with array
  - [ ] 🐣 for-in with objects
  - [ ] 🐣 **Spread Syntax**: can use it to (shallow!) copy an array or object
  - [ ] 🐥 destructuring arrays and objects

[TOP](#inside-js)
