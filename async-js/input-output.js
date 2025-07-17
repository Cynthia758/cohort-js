const fs = require("fs")
// By writing this we're telling Node.js : hey,bring in the built-in module called fs(File System), so I can use it in my code
const contents = fs.readFileSync("./a.txt","utf-8");
console.log(contents);