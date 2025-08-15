const fs = require("fs");   // Import the Node.js file system module

function print(err, data) {
    console.log("Error is :"); // If there's a file that don't exist then this statement will work. 
    // But if I write the file name which already do exists then it will return something like "error is : null";
    console.log(err);
    console.log("Data is :  ")
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
// It even depends upon the size of the files as well.

// *************Syntax*************
// function readFile(filepath, encoding, op) {
// op("Error", "Hi there");
// }


// ********IMP StUFF**********
// fs.readFile("./async-js/b.txt", "utf-8", print);  When you write print without parentheses, you are passing the function itself as a value to fs.readFile. fs.readFile will call that function later when it’s done reading the file.
// fs.readFile("./async-js/b.txt", "utf-8", print());  That would immediately call print() right now, before fs.readFile even starts reading the file.The result of print() (which is probably undefined unless print returns something) would be passed to fs.readFile — which breaks the whole callback idea.
