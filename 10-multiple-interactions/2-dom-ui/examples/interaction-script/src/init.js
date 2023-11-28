import { numbers } from '../data.js';

import { listItems } from './utils/list-items.js';

// === initialize the UI ===

document.getElementById('all-numbers').innerText = listItems(numbers);
