// import program data

import { data } from '../data.js';

// import helper functions

import { listItems } from './utils/list-items.js';

// === initialize the UI ===

debugger;

document.getElementById('all-numbers').innerText = listItems(data.numbers);
