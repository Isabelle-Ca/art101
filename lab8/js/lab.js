// index.js - Lab 8: Anon Functions and Callbacks
// Author: Isabelle Carrou
// Date: October 31, 2024

function singlePar(x) {
    var results = x % 2 == 0;
    return results;
}

console.log("Is 1 even?", singlePar(3));
console.log("Calculate 256 + 1234", singlePar(10));

var array = [100, 8, 16, 144, 2, 1000];

console.log("My Array", array);

var result = array.map(singlePar);
console.log("Test of evenness of array:", result);

var result2 = array.map(function(x) {
    return x ** 0.5;
})

console.log("Squareroot of array:", result2);

function main() {
}
main();