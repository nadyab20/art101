// index.js - lab 7- Functions
// Author: Nadya Boguslavsky <nbogusla@ucsc.edu>
// Date: 28 October 2024 

// Constants

// Functions

// sortUserName - a function that takes user input and sorts the letters of their anme 
function sortUserName () {
    var userName = window.prompt ("Hi. Please tell me your name and I will fix it"); 
    console.log("userName =", userName); 
    // split strong to array 
    var nameArray = userName.split (''); 
    // sort the array 
    var nameArraySort = nameArrray.sort();
    // join array back to a string 
    var nameSorted = nameArraySort.join(''); 
    console.log("nameSorted =", nameSorted); 
    // userName.toLower () .split("").sort().join("")
    return nameSorted; 

}
// output 
document.writeln(" hi, I have fixed your name: ",
    sortUserName(), "</br>"); 

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