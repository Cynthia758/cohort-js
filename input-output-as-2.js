const fs = require("fs");   // Import the Node.js file system module

function print(err, data) {
    console.log(data);  // Callback function to handle the data after reading
}

//const contents = fs.readFile("a.txt", "utf-8", print);  // ASYNCHRONOUSLY
 fs.readFile("./async-js/a.txt", "utf-8", print);
// So whenevr this will done it will call the print function and it's the same for line 11 . So now we don't need to even define the variable name 
//console.log(contents);

//const contents1 = fs.readFile("b.txt", "utf-8", print);
 fs.readFile("./async-js/b.txt", "utf-8", print);
//console.log(contents1);

console.log("Done!");   // This runs immediately because both the files are in the reading progress..
// Common interview question : What will be printed first ?
// Done; Vaidehi Heere!(b.txt) ; Hi there ! (a.txt);


// For the files a.txt amd b.txt whichever will finishes reading first will be printed first.