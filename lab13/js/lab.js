/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Lab 13: Loops
   Author: Isabelle Carrou
   Date: October 18, 2024
*/
function fizzBuzz() {
    let oneLongString = "FizzBuzzBoom!";

    // Loop through numbers 1 to 200
    for (let i=1; i<= 200; i++) {
        let str = "";

        // multiple of 3
        if (i%3 === 0) {
            str += "Fizz";
        }
        //multiple of 5
        if (i%5 === 0) {
            str += "Buzz";
        }
        //multiple of 7
        if (i%7 === 0) {
            str += "Boom";
        }

        // If the string is empty, just append the number
        if (str === "") {
            str = num;
        }

        // Append the result with a line break for display
        oneLongString += str + "<br>";
    }
    $("#output").html(oneLongString);
}
fizzBuzz();

  