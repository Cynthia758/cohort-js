// It is just another class which JS provides us.
// The promise class as the name suggests it gives us the promise that it will return something in the future.
// We can use callbacks based aproach or promise based approach for the journey. They are usable interchangebly. 
// A promise in JS is an object that represents the eventual completion of an async operation and its resulting value.

/* Promisified Version : 
 setTimeoutPromisified(3000).then(callback);*/

/* Callback version : 
setTimeout(callback,3000); */

function setTimeoutPromisified(ms) {
    return new Promise((resolve)=> {
        setTimeout(resolve, ms);
    });
}

function long() {
    console.log("Heyy! Future FAANG Intern");
}
setTimeout(long,1000);
setTimeoutPromisified(2000).then(long); // If we just write it as it is then it will give us an error so we have to define the promisified function somewhere line 12 to 16.
// your intuition was right: they(call backs and promises) don’t run exactly at the same instant; Promise callbacks have priority over plain timeout callbacks.