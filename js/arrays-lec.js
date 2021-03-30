
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Arrays Introduction</title>
<link href="https://fonts.googleapis.com/css?family=Lekton" rel="stylesheet">
    <style>
        body {
        background-color: darkslategrey;
        color: burlywood;
        font-family: 'Lekton', sans-serif;
    }

        .grandpa {
        background-color: brown;
        height: 8.85em;
        width: 62.73em;
        box-shadow: 4px 4px 9px black;
    }

        .dad {
        background-color: chocolate;
        display: inline-block;
        height: 7.25em;
    }

        .son {
        background-color: peru;
        display: inline-block;
        height: 7.25em;
        position: relative;
        top: .75em;
        left: .75em;
    }

        h1 {
        position: relative;
        display: inline-block;
        background-color: burlywood;
        margin: 0;
        font-size: 6em;
        top: .125em;
        left: .125em;
        padding: 10px 10px 12px 10px;
        color: darkslategrey;
    }

        .circle {
        border-radius: 50%;
        box-shadow: 4px 4px 9px black;
    }

        .grandma {
        height: 400px;
        width: 400px;
        background: url("img/jupiter.png");
        background-size: cover;
        position: absolute;
        bottom: 12px;
        right: 20px;
    }

        .daughter {
        height: 120px;
        width: 120px;
        background: chocolate;
        position: absolute;
        bottom: 90px;
        right: 420px;
    }

        .grand-daughter {
        height: 70px;
        width: 70px;
        background: brown;
        position: absolute;
        bottom:-80px;
        right: -50px;
    }

        .push {
        position: relative;
        top: 30px;
    }
    </style>
</head>
<body>
<div class="grandpa">
    <div class="dad">
        <div class="son">
            <h1>Arrays in JavaScript</h1>
        </div>
    </div>

    <p class="push">Don't get distracted by the dots.</p>

    <div class="circle grandma">
        <div class="circle mom">
            <div class="circle daughter">
                <div class="circle grand-daughter"></div>
            </div>
        </div>
    </div>
</div>
<script src="js/arrays-intro.js"></script>
</body>
</html>

//"use strict";
(function() {

/**
* Audience participation: "Hey David, what's an array?"
*/

// An array is a collection of data. Data held within an array is held in an order.

/**
* Audience participation: "But David, how do I make an array?"
*/

// Easy: we use square brackets!

var testArray = [];

// Our testArray variable has now been declared, but it is an empty array. To declare an array with information inside of it, we would do the following.

var instructors = ["David", "Jay", "Javier", "Cody The Duck"];

// Our instructors variable has been assigned to an array with 4 elements inside of it. All four of our elements are strings, but not all elements have to be of the same type.

var falsyValues = [false, true, null, "", 0, undefined, NaN];

// Our falsyValues array has been declared with many different types of values.

/**
* Audience participation: "But David, what can I do with an array?"
*/

// We can count the length of our arrays.

// console.log(instructors.length);
// console.log([].length);
// console.log([1,1,1,1,1,1,1,1,9,9,9,9,0,0,0,10000000,11,22,23,24,34,45].length);

// Here we're console logging the length of some arrays. Note that we can use this variable with a value of an array, or an array literal.

// We can also access the individual values held in an array. It's important to note: the elements of an array are zero indexed, meaning
// the first element is at index point 0, the second at index point 1, etc.

// console.log(instructors[2]);
// console.log([1,2,3][0]);
// console.log(testArray[9]);

// Once again, we can access the element of an array held in a variable, or of an array literal. Notice that if we try to access an
// element of an array at an index larger than what the array has, we get a return of undefined.

// We can use the elements of an array in many ways such as...

var randomIndex = Math.floor(Math.random() * instructors.length);

// alert("One of your instructors is named: " + instructors[randomIndex]);

// Something I've neglected mentioning is what happens when we console log an array (mostly for a reason);

// console.log(instructors);

// Notice how in the console it is noted as an array, and displays the information as an array itself.

/**
* Audience participation: "But David, how can I access all the elements of an array?"
*/

// Iteration is the repeating of a process to achieve a desired outcome. When iterating through an array, we access each index of an
// array to work with the elements held.

// Let's start by listing out our instructors in the console. We can do this by using a for loop to cycle through every index of the
// array.

// for (var i = 0; i < instructors.length; i++) {
//     console.log("One of your instructors is named: " + instructors[i]);
// }

// Note that we wanted i to increment only with it was less than the length of our instructor array, but not until it was equal to it.
// Remember that an array is zero indexed, meaning our arrays start at the index of zero, and continue until an index point one number
// lower than the length of the array. This saves us from accessing an undefined index, and performing an undesired behavior, as seen
// below.

// for (var k = 0; k <= instructors.length; k++) {
//     console.log("One of your instructors is named: " + instructors[k]);
// }

// We can also use a for loop to create something a bit more complicated...

function testAllForFalsy(array) {
var finalVal = -1
for (var j = 0; j < array.length; j++) {
if (array[j]) { // equivalent to Boolean(array[j]) === true
alert("Truthy value detected at index: " + j);
finalVal = j;
break;
}
}
if (finalVal === -1) {
alert("All values of array are falsy.");
}
return finalVal;
}

// testAllForFalsy(falsyValues);

// The above function iterates through an array to determine if all the values in it are false. When it detects a truthy value, it will
// return the index of the first instance of a truthy value, and send an alert stating the index, If no truthy values are found, it will
// return -1, indicating all the values are falsy, and send an alert confirming this conclusion.

/**
*  Audience: "But David, why -1?!"
*/

// indexOf() method

// console.log(instructors.indexOf("Geoff"));
// console.log(instructors.indexOf("Jay"));


// We can also access every value of an array by using a forEach loop. These can be done like so:

// arrayOfSorts.forEach(function(element, index, array){
//      ... We do things here ...
// })

// Notice we pass an unnamed function into the forEach. It's worth noting that the names of the parameters for this 'callback function'
// are ones that we can define ourselves, but what each parameter is meant to represent will not. The first parameter is meant to
// represent an element from an array, specifically the one that we are accessing at the time of iteration. The second parameter is
// optional, meaning it doesn't have to be included in order to construct a forEach loop, but will be for the index at the time of
// iteration. The third and final parameter, is also optional, but will require the second to be present in order to be accessed, is for
// the array itself.

// Below are the examples of iteration with for loops rewritten with a forEach loop.

// instructors.forEach(function(instructor, index, array) {
//     if (index % 2 !== 0) {
//         console.log("Instructor #" + (index + 1) + " of " + array.length + " is named: " + instructor);
//     }
// });

var numbers = [17,22,34,52,6];

// numbers.forEach(function(number,index) {
//     if (index % 2 === 0) {
//         console.log(number * 2);
//     }
// });

function testEachForFalsy(array) {
var truthyFound;
array.forEach(function(element, i) {
if (element) { // same as Boolean(element) === true
alert("Truthy value detected at index: " + i);
truthyFound = i;
}
});
if (truthyFound) {
return truthyFound;
}
alert("All values of array are falsy.");
return -1;
}

console.log(testEachForFalsy(falsyValues));

// The return of i within the forEach loop is a return for the anonymous function being passed into the forEach. Thus when I return I I break out of the loop, but the return is not then used to "break" out of the function. Thus we establish a value of truthyFound to capture the index of the truthy value in the array, and then return a number greater than -1 if a truthy value exists, or -1 is all elements are falsy.

instructors.forEach(function (inst) {
console.log(inst);
});

// Any Questions???

})();