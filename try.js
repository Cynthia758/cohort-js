console.log("Heyy!Future FAANG Intern.");

function timeout() {
    console.log("Click the button !");
}

setTimeout(timeout, 2000);  // 2000 means 2000milliseconds and it will be printed out after 2 seconds

// Syntax : setTimeout(callback. delay);


console.log("Welcome.")
let c=0;
for(let i=0; i<100; i++) {
    c=c+1;
}
console.log("Expensive Operation has completed");


/* The order will be:
Heyy!Future FAANG Intern.
Welcome.
Expensive Operation has completed(No matter how much time it takes.)
Click the button !

JS is single threaded..
Quick tip: whenever you see a long-running loop or “expensive operation,” JS won’t touch any scheduled setTimeout or async callbacks until it’s done. That’s why async stuff sometimes feels delayed! 😅*/