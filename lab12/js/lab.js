/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Lab 12: Conditionals
   Author: Isabelle Carrou
   Date: October 14, 2024
*/

function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Gryffindor"
    }
    else if (mod == 1) {
        return "Ravenclaw"
    }
    else if (mod == 2) {
        return "Slytherin"
    }
    else if (mod == 3) {
        return "Hufflepuff"
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})