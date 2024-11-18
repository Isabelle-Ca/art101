/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Lab 13: Loops
   Author: Isabelle Carrou
   Date: October 18, 2024
*/
$(document).ready(function() {
    // Example: Add content dynamically to the output div
    $('#output').text("The output will be displayed here.");
    
    // Example: Event to update results
    $('#results').on('click', function() {
        $('#output').html("<p>The results section was clicked!</p>");
    });
});

$(document).ready(function() {
    function fizzBuzz() {
        let oneLongString = '';  // String to hold all the results

        // Loop from 1 to 200
        for (let num = 1; num <= 200; num++) {
            let result = '';

            // Check if the number is a multiple of 3, 5, or 7
            if (num % 3 === 0) result += 'Fizz';
            if (num % 5 === 0) result += 'Buzz';
            if (num % 7 === 0) result += 'Boom';

            // If no match, use the number itself
            if (result === '') {
                result = num;
            }

            // Append the result to the long string with line breaks
            oneLongString += result + "<br>";

            // Optionally, you can append each result as a new <p> element
            // This is an alternative approach
            // $("#output").append("<p>" + result + "</p>");
        }

        // Output the full string into the #output div after the loop is complete
        $("#output").html(oneLongString);
    }

    // Call the fizzBuzz function when the document is ready
    fizzBuzz();
});