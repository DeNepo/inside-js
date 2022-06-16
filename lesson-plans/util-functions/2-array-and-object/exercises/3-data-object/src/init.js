// import program data

import { data } from '../data.js';

// import helper functions

import { display } from '../../../../../../lib/dom-io.js';

import { listItems } from './utils/list-items.js';

// === initialize the UI ===

debugger;

display('all-numbers', listItems(data.numbers));
