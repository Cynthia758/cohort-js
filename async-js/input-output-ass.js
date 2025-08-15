const fs = require('fs');
const data = fs.readFileSync('./async-js/a.txt', 'utf-8');
console.log(data);
const data2 = fs.readFileSync('./async-js/b.txt', 'utf-8');
console.log(data2);
// 'utf-8' tells Node.js "Hey! I want to read this file as text, not as raw binary data."
// if we don't write it , it will return a buffer and then we have to do smthing like const buffer = fs.readFileSystem('a.txt')
// console.log(buffer.toString('utf-8));  Which is extra-work
// UTF-8 : Understandable Text format
// Provides us two functions: 1) ReadFile Function and 2) ReadFileSync Function just on their name the first one is async and the second one is sync.
// But we're not going to use this fs.readFileSync option because it is working like runnig the code line by line which is more time-consuming, So instead of that we're gonna use the I/O bound task .
