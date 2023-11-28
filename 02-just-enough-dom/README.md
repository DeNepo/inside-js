# Just Enough DOM

In this module you will begin exploring the Document Object Model (DOM). Because
your main focus is still the inner workings of JavaScript you will only learn
enough DOM to write simple programs that store _state_, read user data, process
it, and display the result as a string.

Below is a quick introduction to how you will structure your programs in this
module, and the few DOM features you will need to write them

- [Program Structure](#program-structure)
  - [State](#state)
  - [Constants](#constants)
- [DOM Features](#dom-features)
  - [Saving DOM elements to Variables](#saving-dom-elements-to-variables)
  - [Defining User Interactions](#defining-user-interactions)
  - [Reading User Input](#reading-user-input)
  - [Displaying Program Results](#displaying-program-results)
- [Reverse-Engineering](#reverse-engineering)

---

## Program Structure

Each of the programs in this module will follow a structure similar to this. Not
every program will have every section:

```js
// imports, if any (more on this later in "Using Functions")

/*
    describe the program's behavior
*/

// --- declare constants ---

// --- declare state ---

// --- save important DOM elements to variables ---

// --- add event listeners + handlers ---

//     read user input
//     process user input
//     display result

// --- initialize user interface ---
```

### State

An important concept in this module's programs is _state_: the data stored in
program memory that users can interact with and change. Not every program will
have state!

For now, just remember the basic idea of _state_ as data stored in program
memory that changes based on user actions. You'll get plenty of practice with
the concept through the examples and exercises.

### Constants

_Constants_ are data stored in program memory that are never changed.

As you explore the examples and exercises you will learn about different ways
constants can be used in a program.

---

## DOM Features

Below are all the DOM you will need to write programs in this module.

Of course you can always search online to learn more about the DOM, but don't
get too side-tracked! The goal of this module is to deeply understand program
memory, how to work with program state, and how to use pure functions for
program logic.

Going too far down the road of DOM manipulation will distract from these
objectives. You'll always have time to study the DOM later, and will even have
an easier time learning it after mastering this module's objectives.

### Saving DOM elements to Variables

Using `document.getElementById('id')` you can save a DOM element to a variable
for later use. This is practical for reading user input, displaying program
output, and defining user interactions with event listeners.

```html
<div>
	<button id="echo-button">echo</button>
</div>

<script>
	// --- save important DOM elements to variables ---
	const echoButtonEl = document.getElementById('echo-button');

	console.log(echoButtonEl);
</script>
```

### Defining User Interactions

You can define user interactions with elements using _event listeners_ and
_event handlers_. There are many events in the browser, but you will only need a
few for this module: `"click"`, `"input"`, and others that will be introduced in
the example programs as you progress through the module.

For now, you can just use the syntax provided as a template. In this module you
will learn about functions and callbacks, then you will be able to understand
the syntax below and will have more freedom when writing your programs.

```html
<div>
	<button id="echo-button">echo</button>
</div>

<script>
	// --- save important DOM elements to variables ---
	const echoButtonEl = document.getElementById('echo-button');

	// --- add event listeners + handlers ---
	// you can just use this syntax for now without understanding it
	//  soon you will learn about functions and callbacks
	echoButtonEl.addEventListener('click', () => {
		console.log('hello developer');
		alert('hello user');
	});
</script>
```

### Reading User Input

You can read the value of an `<input />` element using the `.value` property.
This is simple enough for text input fields, but gets more complicated with
numbers and more complex input types. You can explore this further in the
module's examples and exercises.

```html
<div>
	<input id="user-text" />
	<br />
	<button id="echo-button">echo</button>
</div>

<script>
	// --- save important DOM elements to variables ---
	const userTextEl = document.getElementById('user-text');
	const echoButtonEl = document.getElementById('echo-button');

	// --- add event listeners + handlers ---
	echoButtonEl.addEventListener('click', () => {
		const userInput = userTextEl.value;
		console.log(userInput);
		alert(userInput);
	});
</script>
```

### Displaying Program Results

You can display a formatted string to the user with a `<pre>` element by setting
its `.innerText` property. This is the simplest way to display structured
information to a user with the DOM, and more than enough for this module.

```html
<div>
	<input id="user-text" />
	<br />
	<button id="echo-button">echo</button>

	<hr />

	<pre id="display-zone"></pre>
</div>

<script>
	// --- save important DOM elements to variables ---
	const userTextEl = document.getElementById('user-text');
	const echoButtonEl = document.getElementById('echo-button');
	s;
	const displayZoneEl = document.getElementById('display-zone');

	// --- add event listeners + handlers ---
	echoButtonEl.addEventListener('click', () => {
		const userInput = userTextEl.value;
		console.log(userInput);

		displayZoneEl.innerText = userTextEl.value;
	});
</script>
```

---

## Reverse-Engineering

Most DOM exercises in this module will be based on **reverse-engineering**.
Instead of an open-ended project description, you will be given a working piece
of software to recreate. You will be able to run the code, but not read it.
Well, you _can_ read it but where's the fun in that?! Anyway there's always more
than one way to solve a problem so even if you do study the solution, you can
still find another way to solve it.

Reverse-engineering exercises will have the solution in a file named
`script.re.js`. `.re` stands for "reverse-engineer and it's just there for
humans to know the file's purpose:

```
/exercise-name
	/index.html
	/script.js
	/script.re.js
	/styles.css
```
