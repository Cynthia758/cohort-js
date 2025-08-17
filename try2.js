function waitFor1s(resolve) { // Declares a function named waitFor1s; It takes one argument as resolve(but really it's just a callback function.)
    setTimeout(resolve, 1000) // It calls resolve after 1 seconds
}

function main() { // Declares another function named as main ; It's not taking any argument.
    console.log("main is called.")
}
waitFor1s(main); // We're calling the function waitFor1s and passes it to the main as the resolve argument.