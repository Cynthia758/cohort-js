// TypeScript
// Parse it to a number // Line by line compilation
function sum(a,b) {
    return parseInt(a) + parseInt(b); // Converts a string into an integer.
}
let ans = sum(3,3)
let ans1 = sum("3",3) // Doesn't make any difference because of parseint.
console.log(ans);
console.log(ans1);
