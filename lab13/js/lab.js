/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Lab 13: Loops
   Author: Isabelle Carrou
   Date: October 18, 2024
*/
$(document).ready(function() {
    $('#output').text("The output will be displayed here.");
    
    $('#results').on('click', function() {
        $('#output').html("<p>The results section was clicked!</p>");
    });
});

$(document).ready(function() {
    function fizzBuzz() {
        let oneLongString = '';
        for (let i = 1; i <= 200; i++) {
            let result = '';

            // multiple of 3, 5, 7
            if (i % 3 === 0) result += 'Fizz';
            if (i % 5 === 0) result += 'Buzz';
            if (i % 7 === 0) result += 'Boom';

            if (result === '') {
                result = i;
            }

            oneLongString += result + "<br>";
        }
        $("#output").html(oneLongString);
    }
    fizzBuzz();
});