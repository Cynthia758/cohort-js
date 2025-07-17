function sum(n) {
    let ans = 0
    for(i=1; i<=n; i++)
        ans = ans+i;
return ans;
}
const ans = sum(100)
console.log(ans)
// This is a synchronous js code
// Things happen one at a time, in order.
// Each line of code waits for the previous one to finish before moving on.
// If something takes time (like a file read), the entire program pauses until it’s done.
 // ASYNC
// Things can happen in the background, without stopping the rest of the program.
// Useful for slow operations like fetching data, reading files, timers, etc.
// JavaScript keeps going, and when the async task finishes, it comes back later with the result.