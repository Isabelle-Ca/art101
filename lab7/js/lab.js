// index.js - Lab 7: Functions
// Author: Isabelle Carrou
// Date: October 28, 2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  
  // let's get this party started
  main();
  
function sortUsername() {
    var userName = window.prompt("Hello! Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    // userName.toLower().split("").sort().join("")
    return nameSorted;
}

//output
document.writeln ("Look! I fixed your name: ",
    sortUsername(), "</br>");