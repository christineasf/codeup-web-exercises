"use strict";

(function () {

})

var cheeses = ["Brie", "Muenster"];

//push method allows us to add an element to the array at the very end.

cheeses.push("Cheddar");

function logTheCheeses() {
    cheeses.forEach(function (cheese) {
        console.log(cheese);
    })
}

    //unshift method inserts at the front of the array

cheeses.unshift("Gouda");


//YES, you can add more than one argument through these  two (push, insert) methods.

//methods to remove elements
//shift removes the first element of the array
cheeses.shift();

logTheCheeses();


//the pop method will remove the last element of the array!
cheeses.pop();


var removedCheese = cheeses.shift();

console.log(removedCheese + " cheeses removed from array: ");


//the only way to remove multiple elements is to use multiple pops--you also cannot
// remove multiple elements from an array. just the front and end

cheeses.push(removedCheese);

cheeses.pop();
cheeses.pop();
cheeses.pop();
cheeses.pop();

//we can find the index of an array

console.log(cheeses.indexOf("cheese"));


//we also have access to the lastIndexOf method

var myFavNums =[2, 22, 8, 5, 3, 2]
console.log(myFavNums.indexof(2));
console.log(myFavNums.lastIndexOf(2));

//the slice element will work like the substring method in that it can return a value of 1 or 2 arguments

var myFavCheeses = cheeses.slices(cheeses.indexOf("cheese"), cheeses.indexOf("cheese 2")+1);

////

var reversedCheeses()


//sort method is going to sort change the order of our array
//with the sort method it's best to use with same data type (meaning not numbers and "words" in same

//split command takes a string and turns it into an array of strings look up csv seperator

//look up the x.join method (join method)


//joining two arrays together
