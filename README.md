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

- **Skills**:
  - [ ] 🥚 **Predicting Execution**: You can use the browser's debugger to step
        through your code. Before each step you can make a prediction about what
        will happen, after each step you can check your prediction.
  - [ ] 🥚 **Assertion Testing**: You can write assertion tests to predict what
        values will be in your program at a specific step of execution.
- **Language Features**
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

- **Skills**:
  - [ ] 🥚 **Predicting Truthiness**: You can predict the truthiness of any
        primitive value.
  - [ ] 🐣 **Tracing Operators**: You can use an operators trace table to
        evaluate expressions with more than one operator, and you can check your
        work with the [trace] button.
- **Language Features**
  - [ ] 🥚 **Primitive Types**: You can explain the difference between the 5
        main primitive types (_string_, _number_, _boolean_, _null_,
        _undefined_) and what they are used for in a program.
  - [ ] 🥚 **`typeof`**: You can predict the `typeof` operator's output for
        values from any of the 5 main primitive types.
  - [ ] 🥚 **Explicit Coercion**: You can predict & check the outputs when using
        `Boolean()`, `String()` and `Number()` to convert between primitive
        types.
  - [ ] 🥚 **Truthiness Operators**: You can explain how _truthiness_ is used
        when evaluating `&&`, `||`, `!` and `? :`.
  - [ ] 🐣 **Short-Circuiting**: You can write an example that demonstrates how
        _short-circuiting_ works with `&&` and `||`.
  - **Implicit Coercion**:
    - [ ] 🐣 You can explain what _implicit coercion_ is and how it can cause
          problems in your programs.
    - [ ] 🐣 You can explain the rules for implicit coercion in common operators
          such as `+`, `!` and `>`.
  - [ ] 🐣 **Comparisons**: You can predict and check the result of any
        primitive comparison.
  - [ ] 🐣 **Template Literals**: You can read and trace multi-line template
        literal strings.
  - [ ] 🐥 **Statements vs. Expressions**: You can identify if a piece of code
        is a statement or an expression.
  - [ ] 🐔 **Arithmetic**: You can use JavaScript to do math, and can explain or
        debug your expressions when they evaluate to something unexpected.

### [2. Control Flow](./2-control-flow)

- **Skills**:
  - [ ] 🥚 **Imperative Programming**: You can define the _imperative_
        programming paradigm and can explain how you know the programs in this
        chapter are _imperative_.
  - **Writing Interactive Programs**: For programs that take a _string_ from
    users:
    - [ ] 🥚 **Blanks**: You can complete a program by filling in the blanks.
    - [ ] 🐣 **Bugs**: You can fix bugs in an otherwise complete program.
    - [ ] 🐣 **Goals**: You can write the missing portion of a program.
    - [ ] 🐔 **Empty Page**: You can develop a program with specific behavior
          starting from an empty page.
  - [ ] 🐥 **User Numbers**: You can complete, debug and write programs that
        cast user input from _string_ to _number_.
  - 🐥 **_Stateful_ Programs**: You can step through, debug and complete
    programs with an HTML/CSS interface that store user data in a variable
    between interactions.
  - **Refactoring Control Flow**:
    - [ ] 🐥 **Conditionals**: You can refactor between truthiness operators and
          `if`/`else` statements.
    - [ ] 🐥 **Loops**: You can either refactor between all loop types, or
          explain when it is not possible (or a good idea).
- **Language Features**: You are comfortable reading and tracing programs that
  use ...
  - [ ] 🥚 **Block Scope**: You can show how block scope works using code
        snippets and your browser's debugger.
  - [ ] 🥚 **Conditionals**: You can predict and trace a program's path through
        conditional statements.
  - [ ] 🥚 **While Loops**: You can predict and trace simple programs that use
        `while` loops.
  - [ ] 🥚 **`for-of` Strings**: You can predict and trace simple programs that
        iterate through the characters of a string using `for-of`.
  - [ ] 🥚 **For Loops**: You can explain how a `for` loops works by refactoring
        simple `for` loops into `while` loops.
  - [ ] 🐣 **Break**: You can predict and trace simple programs that use
        `break`.
  - [ ] 🐣 **Continue**: You can predict and trace simple programs that use
        `continue`.

### [3. Functions](./3-functions)

- **Skills**:
  - [ ] 🥚 **Tracing**: You can use the debugger to predict and check the
        execution of small programs that use functions. This includes:
  - [ ] 🥚 **Test Cases**: You can explain a simple function's _behavior_ using
        inputs & outputs.
  - [ ] 🐣 **Documenting Functions**: You can write a JS Doc comment to describe
        a function's behavior, inputs and outputs.
- **Language Features**:
  - [ ] 🥚 **ES6 Arrow Functions**:
    - **Defining a Function**: You can show where a function is _defined_ in a
      program.
    - **Parameters**: You can find a function's _parameters_ in it's definition
    - **Return Statement**: You can find the _return statements_ in a function's
      definition.
    - **Calling a Function**: You can show where a function _called_ in a
      program
    - **Arguments**: You can show the arguments _passed_ to a function call.
    - **Return Value**: You can show how a function's return value is _used_
      after the function call.
  - [ ] 🥚 **Default Parameters**: You can explain how default parameters work,
        and how they help a developer read/understand a function definition.
  - [ ] 🐣 **The Callstack**: You can explain and inspect the callstack using
        the browser's debugger.
  - [ ] 🐥 **Variables in Functions**: You can explain three different ways a
        variable in a function can be declared/assigned, and can show this in
        the debugger:
    1. **Parameters**: A parameter is assigned it's value when a function is
       called with _arguments_.
    2. **Local Variables**: A variable declared in the function's curly braces.
    3. **Parent Scope Variables**: A variable that was declared outside of the
       function but used inside the function (avoid this for now.)

### [5. Unit Testing](./5-unit-testing)

- **Skills**:
  - [ ] 🥚 **Testing Environments**: You understand that the conventional
        `describe`/`it`/`expect.toEqual` functions are defined by a _testing
        library_ and made available as _global variables_ in a testing
        environment. They are not part of JavaScript!
  - [ ] 🥚 **File Sub-Extensions**: You can identify how a file is used by it
        _sub-extension_: `file.__.js`. Sub-extensions are a _convention_ for
        developers and development tools. They do not change how JavaScript
        inside the file works.
  - [ ] 🥚 **Reading Tests**: You can read unit tests to understand what a
        function is supposed to do.
  - [ ] 🥚 **Stepping Through Tests**: You can step through unit tests in the
        debugger, stepping over the global testing functions and into the
        function you are testing.
  - [ ] 🐣 **Writing Tests**: Given a working function, you can write passing
        unit tests to describe it's behavior.
  - [ ] 🐣 **Debugging Functions**: Given working tests and a function with
        small mistakes, you can use the tests as a guide while debugging the
        function.
  - [ ] 🐥 **Passing Tests**: Given working unit tests and an empty function,
        you can write code to pass the tests.
- **Language Features**:
  - nothing new here!

### [6. ES Modules](./6-es-modules)

- **Skills**:
  - [ ] 🥚 **Spec Files**: You can work with functions and unit tests separated
        into two files.
  - [ ] 🥚 **Visualizing Dependencies**: You can use the
        [VSCode Dependency Cruiser extension](https://marketplace.visualstudio.com/items?itemName=juanallo.vscode-dependency-cruiser)
        and the `?deps` lens to visualize the dependencies in a folder.
  - [ ] 🐣 **Refactoring Tests**: You can refactor a function and unit tests
        from one file to two files: one with the function, one with the unit
        tests.
- **Language Features**:
  - [ ] 🥚 **Module Files**: Are always in strict mode by default, no more
        `'use strict'`!
  - [ ] 🥚 **Named Exports**: You can export a variable and it's value using
        `export const _ = () => {};`
  - [ ] 🥚 **Named Imports**: You can import a variable and it's value from
        another file using `import { _ } from './path/to/file.js';`
  - [ ] 🐥 **Module Life-Cycle**: You understand that ES Modules are _static_,
        and are evaluated at _creation phase_.

### [6. Using Functions](./6-using-functions)

- **Skills**:
  - [ ] 🥚 **Procedural Programming**: You can define the _procedural_
        programming paradigm and can explain how you know the programs in this
        chapter are _procedural_.
  - [ ] 🥚 **Using Functions**: You can use a pre-written functions in a
        program.
  - [ ] 🐣 **Writing Functions**: You can write functions that are used in a
        program.
  - [ ] 🐥 **Refactoring Functions**: You can refactor a function out of a
        program and test the function separately.
  - [ ] 🐔 **Reverse-Engineering**: You can reverse-engineer an example program
        and refactor parts of your program into separate functions.
- **Language Features**:
  - Nothing new here!

### [7. Arrays](./7-arrays)

- **Skills**:
  - [ ] 🥚 **Reference vs. Value**: You can explain how arrays are stored in
        memory and can demonstrate using examples run in JS Tutor.
  - [ ] 🥚 **Deep vs. Shallow Comparison**: You can explain use the concept of
        reference vs. value to explain how a deep comparison is different than a
        shallow comparison.
  - **Side-Effects**: You can ...
    - [ ] 🥚 **Explain** what side-effects are with an example.
    - [ ] 🥚 **Avoid** side effects when writing your own functions.
    - [ ] 🐣 **Write tests** to check if a function has side-effects.
    - [ ] 🐣 **Fix** side-effects in buggy functions.
  - **Integrating Arrays**: You can work with programs that use arrays to store
    user data:
    - [ ] 🥚 **Call**: You can call pre-written functions in a program:
    - [ ] 🐣 **Write**: You can write functions that are used in a pre-written
          program.
    - [ ] 🐣 **Refactor**: You can refactor logic from a program into a separate
          function. You can avoid side-effects and test your function.
    - [ ] 🐔 **Reverse-Engineer**: You can reverse-engineer a program,
          refactoring logic to a separate function if necessary.
  - 🐥 **_Stateful_ Programs**: You can step through, debug and complete
    programs with an HTML/CSS interface that store user data in an array between
    interactions.
- **Language Features**: You are comfortable reading and tracing programs that
  use ...
  - [ ] 🥚 **Array Literals**: You can create a new array in your program with
        initial values using the _array literal_ syntax:
        `const arr = ['items'];`
  - 🥚 **Adding and Removing Items**: You can use these methods to add and
    remove items in an array:
    - [ ] **arr.push()**: Adds a new item to the end of an array.
    - [ ] **arr.pop()**: Removes the last item in an array.
    - [ ] **arr.shift()**: Adds a new item to the front of an array.
    - [ ] **arr.unshift()**: Removes the first item in an array.
  - 🥚 **Reading Items**: You can read items in an array using:
    - [ ] **arr[i]**: Access a specific item in an array using square brackets a
          positive index.
    - [ ] **arr.at(i)**: Access a specific item in an array using `.at()` and a
          positive or negative index.
  - [ ] 🥚 **Updating Items**: You can update any item in an array using it's
        index, square brackets and assignments: `arr[4] = 'hello'`.
  - 🥚 **Iterating Over Arrays**:
    - [ ] **for (const item of arr)**: You use _for-of_ loops to iterate
          forwards through an array.
    - [ ] **for (let i = ...)**: You can use _for_ loops to iterate forwards and
          backwards through an array.
  - [ ] 🥚 **Array.isArray()**: You can use _Array.isArray()_ to check if
        something is an array: `Array.isArray(something)`
  - [ ] 🥚 **Spread Syntax**: you can use spread syntax to create a _shallow_
        copy of an array: `const shallowCopy = [...arr];`

### [8. Functional Array Methods](./8-functional-array-methods)

- **Skills**:
  - [ ] 🥚 **Declarative Programming**: You can define the _declarative_
        programming paradigm and can explain how you know that code using
        functional array methods is _declarative_.
  - 🥚 **Array Strategies**: You can explain these array strategies using a
    diagram or drawing:
    - [ ] **Mapping**: Modifying each item in an array and putting the results
          in a new array.
    - [ ] **Filtering**: Creating a new array with only the items from the old
          array that match some criteria.
    - [ ] **Every Item**: Checking if every item in an array matches some
          criteria.
    - [ ] **Some Items**: Checking if at least one item in an array matches some
          criteria.
    - [ ] **Finding**: Finding the first item in an array that matches some
          criteria.
    - [ ] **Reducing**: Combining all the items in an array to create a single
          result.
  - 🐣 **Using Callbacks**: You can explain what a callback is, and can ...
    - [ ] **Pass** a callback into a higher-order function that consumes it.
    - [ ] **Write** a callback for a higher-order function to consume.
    - [ ] **Consume** callbacks in a higher-order function that you write.
    - [ ] **Decide** when to declare callbacks inline, and when to declare them
          separately.
  - [ ] 🐣 **Debugging Functional Array Methods**: You can step through code
        that uses functional array methods in your debugger, and can use the
        scopes panel to explain what is happening behind the scenes.
- **Language Features**:
  - **Array Methods**: You can read and trace code that uses these array
    methods, you can also use them to solve simple coding challenges:
    - [ ] 🥚 `[].every`
    - [ ] 🥚 `[].some`
    - [ ] 🐣 `[].map`
    - [ ] 🐣 `[].filter`
    - [ ] 🐣 `[].find`
    - [ ] 🐥 `[].reduce`
  - [ ] 🐣 **Higher-Order Functions**: You can explain what a higher order
        function is using a simple example.
  - [ ] 🐥 **Implicit Returns**: You understand when a function can be written
        with an implicit return and can decide if it makes your code more or
        less readable.

### [9. Multiple Interactions](./9-multiple-interactions)

- **Skills**:
  - [ ] 🥚 **Avoiding Side Effects**: You can read, debug and write functions
        that use objects as arguments, _without_ creating side-effects.
  - 🐣 **_Stateful_ Programs**: You can step through, debug and complete
    programs with an HTML/CSS interface that store user data in an object
    between interactions.
- **Language Features**:
  - [ ] 🥚 **Object Literals**: You can declare a new object with initial
        key/value pairs using _object literal_ syntax:
        `const obj = { a: 1, b: 2 };`.
  - [ ] 🐣 **Dots vs. Brackets**: You can explain the difference between _dot_
        and _bracket_ access in an object and can decide which one is best in
        your code.
  - [ ] 🐣 **Reference vs. Values**: You can show that objects are stored by
        reference with an example that modifies one object from two variables.

[TOP](#inside-js)
