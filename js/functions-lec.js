"use strict";

console.log("HELLO WORLD");

console.log(parseInt("17 dogs"));

// var whatIsTheWord = prompt("What is your favorite, work appropriate, word?");
//
// console.log(whatIsTheWord);

// Lets define a function
function doTheThing(input) {
    var output = input + " was pulled into the function. Now it is this concatenation string. :)";
    return output;
}

console.log(doTheThing("Hot Dog"));

function addStuff(x, y) {
    return x + y;
}

console.log(addStuff(17, 18));

// Let's make a "bad" function...
function logToConsole(info) {
    return console.log(info + "is something important to keep in mind.");
}