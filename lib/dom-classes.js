/* todo

  API considerations
    more functions
      pro:
        more expressive
        "closer" to the real DOM
        simpler code in programs
      con:
        more to remember
        more hidden complexity
        could encourage more complex programs
    + fewer, simpler functions
      pro:
        easier to learn
        more focus on the "js"
      con:
        complicateder programs to make up for simpler API
  use rest params?
    - more complicated
      to remember
      error messages will be more complicated to interpret
      use cases are fewer, and less meaningful without arrays
    addClass(id, class1, class2, ...)
    removeClass(id, class1, class2, ...)
  getClasses?
    - pros: can check what the classes are
    - cons: an array
    uses Array.from(el.classList)


*/

// --- constants ---

const NO_ARG = Symbol('no arg');

const NO_ID = 'you did not pass an element id (first argument)';

const INVALID_ID = 'id is not a string (first argument)';

// --- helper functions ---

const noClass = (paramIndex = 'second') =>
  `no string class name was passed (${paramIndex} argument)`;

const invalidClass = (paramIndex = 'second') =>
  `class name is not a string (${paramIndex} argument)`;

// ===== exported functions =====

export const clearClasses = (id = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }

  element.className = '';
};

export const getClassString = (id = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }

  return element.classList.value;
};

export const getClassArray = (id = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }

  return Array.from(element.classList);
};

export const hasClass = (id = NO_ARG, className = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  if (className === NO_ARG) {
    throw new Error(noClass());
  }
  if (typeof className !== 'string') {
    throw new TypeError(invalidClass());
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }

  return element.classList.contains(className);
};

export const addClass = (id = NO_ARG, className = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  if (className === NO_ARG) {
    throw new Error(noClass());
  }
  if (typeof className !== 'string') {
    throw new TypeError(invalidClass());
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }

  element.classList.add(className);
};

export const removeClass = (id = NO_ARG, className = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  if (className === NO_ARG) {
    throw new Error(noClass());
  }
  if (typeof className !== 'string') {
    throw new TypeError(invalidClass());
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }

  element.classList.remove(className);
};

export const toggleClass = (id = NO_ARG, className = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  if (className === NO_ARG) {
    throw new Error(noClass());
  }
  if (typeof className !== 'string') {
    throw new TypeError(invalidClass());
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }

  element.classList.toggle(className);

  return element.classList.contains(className);
};

export const replaceClass = (
  id = NO_ARG,
  oldClass = NO_ARG,
  newClass = NO_ARG
) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  if (oldClass === NO_ARG) {
    throw new Error(noClass());
  }
  if (typeof oldClass !== 'string') {
    throw new TypeError(invalidClass());
  }

  if (oldClass === NO_ARG) {
    throw new Error(noClass('third'));
  }
  if (typeof oldClass !== 'string') {
    throw new TypeError(invalidClass('third'));
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }

  return element.classList.replace(oldClass, newClass);
};
