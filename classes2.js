const now = new Date(); // Current date and time
console.log(now); // Not in the right format ...
console.log(now.getDay()); // tells u the day of the week
console.log(now.getMonth()); // will tells us the month , will start to count from 0;
console.log(now.getFullYear());


// Another pre-defined class....Map class
// We cann tell them as constructor functions.
// Use of map : To structure the key values together.
const map = new Map();
map.set('name', 'Vaidehi');
map.set('age' ,'17');

console.log(map.get('name'));
console.log(map.get('age'));

const name = map.get('name');  // If the upper syntax feels too heavy then this...
console.log(name);