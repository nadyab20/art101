// index.js - Lab 6: Arrays & Variables
// Author: Nadya Boguslavsky <nbogusla@ucsc.edu> 
// Date: October 24, 2024

myTransport = ["car", "bus", "bike"];  

 myMainRide = { 
	make: "Acura",
	model: "RDX",
	color: "black",
	year: 2013,
	age: function () {
	    return 2024 - this.year; 
	}
}

document.writeln("Kinds of Transportation I use:", myTransport, </br>); 
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
  

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
