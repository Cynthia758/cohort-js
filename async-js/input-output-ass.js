const fs = require('fs');
const data = fs.readFileSync('./async-js/a.txt', 'utf-8');
console.log(data);
const data2 = fs.readFileSync('./async-js/b.txt', 'utf-8');
console.log(data2);