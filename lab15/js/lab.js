/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Lab 15: AJAX
   Author: Isabelle Carrou
   Date: Novemeber 25, 2024
*/
$(document).ready(function() {
    $("#activate").click(function() {
        $.ajax({
            url: "https://yesno.wtf/api/",
            type: "GET",
            dataType: "json",
            success: function(data) {
                // Display the API response data in the #apiData element
                $("#apiData").html("Answer: " + data.answer);
                
                // Show the reload button after the API response
                $("#reloadButton").show();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
            }
        });
    });

    // Reload button functionality
    document.getElementById('reloadButton').addEventListener('click', function() {
        location.reload(); // This will reload the current page
    });
});
