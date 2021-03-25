"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    var colorComparison = color.toLowerCase();
    if (colorComparison === "blue") {
        return "blueberries are blue";
    } else if (colorComparison === "red") {
        return "strawberries are red";
    } else if (colorComparison === "cyan") {
        return "I don't know anything about cyan";
    } else {
        return "Hmm, wrong color.";
    }
}
    // console.log(analyzeColor("blue"));
    // console.log(analyzeColor("red"));
    // console.log(analyzeColor("cyan"));
    // console.log(analyzeColor("color"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor)) ;

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
switch (randomColor) {
    case "red":
        console.log("Ruby Red");
        break;
    case "orange":
        console.log("Orange oranges");
        break;
    case "yellow":
        console.log("sunny yellow");
        break;
    case "green":
        console.log("green grass");
        break;
    case "blue":
        console.log("blue skies");
        break;
    case "indigo":
        console.log("indigo what even is this?");
        break;
    case "violet":
        console.log("very violet");
        break;
    default:
        console.log("rainbow.");
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var allTheColors = prompt("What color do you like?").toLowerCase();

switch (allTheColors) {

    case "red":
        console.log("Ruby Red");
        break;

    case "orange":
        console.log("Orange oranges");
        break;

    case "yellow":
        console.log("sunny yellow");
        break;

    case "green":
        console.log("green grass");
        break;

    case "blue":
        console.log("blue skies");
        break;

    case "indigo":
        console.log("indigo what even is this?");
        break;

    case "violet":
        console.log("very violet");
        break;

    default:
        console.log("rainbow.");
        break;
}
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */



function calculateTotal(x , y) {
    var totalPrice = y;
    var LNs = x;

    var LN0 = "Sorry, no luck here!"
    var LN1 = totalPrice - (totalPrice * .10);
    var LN2 = totalPrice - (totalPrice * .25);
    var LN3 = totalPrice - (totalPrice * .35);
    var LN4 = totalPrice - (totalPrice * .50);
    var LN5 = 0;


    if (LNs === 1) {
        return ("You get 10% off. Your new total is $ " + (LN1));
    } else if (LNs === 2) {
        return ("You get 25% off. Your new total is $ " + (LN2));
    } else if (LNs === 3) {
        return ("You get 35% off. Your new total is $ " + (LN3));
    } else if (LNs === 4) {
        return ("You get 50% off. Your new total is $ " + (LN4));
    } else if (LNs === 5) {
        return ("You get 100% off. Your new total is $ " + (0));
    } else {
        return "Sorry, No luck here!";
    }
}


var finalTotal = prompt("What is your total amount?");

console.log(calculateTotal(1, finalTotal));
// console.log(calculateTotal(2, finalTotal));
// console.log(calculateTotal(3, finalTotal));
// console.log(calculateTotal(4, finalTotal));
// console.log(calculateTotal(5, finalTotal));
// console.log(calculateTotal(0, finalTotal));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var finalTotal = parseFloat(prompt("What is your total?"));
alert(calculateTotal(luckyNumber , finalTotal));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function evenOrOdd(x){
    if (x % 2 === 0) {
        return "Your number is EVEN!" ;
    } else {
         return "Your number is ODD!" ;
    }
}

function numPlus100(x){
   return (parseFloat(x) + 100) ;
}

function posOrNeg(x){
    if (x <0) {
        return "Your number is NEGATIVE!" ;
    } else {
        return ("Your number is POSITIVE!") ;
    }
}

var quest1 = confirm("Would you like to enter a number?");

if (quest1 === true) {
    var q2 = prompt("What is your chosen number?")
    alert(evenOrOdd(q2));
    alert(numPlus100(q2));
    alert(posOrNeg(q2));

} else {
    alert( "Ok, bye." ) ;
}



//
//
//
// var button1 = confirm("Would you like to enter a number?");
// var button1 = true
// var button2 = false;
//
// if (true) {
//     alert("Your");
// } else if (true) {
//     alert("What is your # plus 100?");
// }    else if (true) {
//     alert("Is your # negative or positive?");
// } else {
//     console.log("Okayyy...");
// }
//
//
//
//   if (button) true prompt("is number even or odd?")
//     return prompt("Is number even or odd?")
//
// else if (button) = true
//     return prompt("what is your number plus 100?")
//
//  else if (button) = true
//       return prompt("is your number positive or negative?")
