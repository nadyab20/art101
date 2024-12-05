// Lab 13: Loops 
// Author: Nadya Boguslavsky <nbogusla@ucsc.edu>
// Date: November 18, 2024 

for (i = 1; i <= 100; i++) {
    // check for multiple of 15 first
    if (i % 15 == 0) {
      console.log("FizzBuzz");
      $("#output").append("<p>" + "FizzBuzz" + "</p>");

    } else if (i % 3 == 0) {
      console.log("Fizz"); 
      $("#output").append("<p>" + "Fizz" + "</p>");
    } else if (i % 5 == 0) {
      console.log("Buzz");
      $("#output").append("<p>" + "Buzz" + "</p>");
    } else {
      console.log(i);
    }
  }
  