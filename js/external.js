"use strict"
// Part 1
console.log ("Hello from external JavaScript");

alert("Welcome to my Website!");

// Part 2
var favoritecolor = prompt("What is your favorite color?");

alert("Awesome, " + favoritecolor + " is my favorite color too!");

// Part 3.1
var theLittleMermaid = prompt("How many days will you have The Little Mermaid?");

var brotherBear = prompt("How many days will you have Brother Bear?");

var hercules = prompt("How many days will you have Hercules?");

var total = (theLittleMermaid * 3) + (brotherBear * 3) + (hercules * 3)

console.log(alert("Thank you, your order total is" + total))

// Part 3.2
var google = prompt( "How many hours at google?");

var amazon = prompt( "How many hours at amazon?");

var facebook = prompt ("How many hours at facebook?");

var totalpay = (google * 400) + (amazon * 380) + (facebook * 350);

console.log(alert("Your total pay is " +totalpay));

// Part 3.3
var classSize = confirm("Is this class full?");

var schedule = confirm("Does your schedule overlap?");

var enrollment = classSize && schedule

if (enrollment === false) {alert("Yes, you can register for class")}
else{alert("Sorry, you can't register for class")};

// Part 3.4
var preMember = confirm("Premium member?");

var purchasedItems = prompt("Number of items purchased:");

if (purchasedItems >= 2 || preMember) {alert("Offer Valid!")}
else {alert("Sorry, Offer Invalid")};