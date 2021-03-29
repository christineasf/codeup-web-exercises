// pizza var loop
// var slices = 8;
// while (slices > 0); {
//     console.log("I'll have a slice");
// }



//while loop exercise answer perf

var allCones = Math.floor(Math.random() * 50) + 50;

    do {
        var conesBought = Math.floor(Math.random() * 5) + 1;
        if (conesBought > allCones) {
            console.log("I can't sell " + conesBought + " I only have " + allCones + " left, sorry");
        } else {
            allCones = allCones - conesBought;
            console.log("Cones sold "+ conesBought + " I have " + allCones + " left to sell");
        }
    } while (allCones > 0);
    console.log("Great, all cones are sold")

//pizza var loop
// var slices = 8;
// while (slices > 0) {
//     console.log("I'll have a slice");
//     slices = slices - 1;
//     console.log("Now, theres " + slices + " slices left!");
// }
// console.log("No more pizza :(");
// console.log("Maybe some ice cream now :D");
var counter = 0;
while (counter >= 0) {
    console.log(counter);
    counter = counter - 1;
}
//while loop
//pseudocode
//Ask user input
// get user input
//declare user input var
//store user input in the var
// declare a var to store the total
//declare a var to store the total (accumulator)
//add the cost of the new item to the total
//keep storing the new totals in the accumulator
//tell the suer how to end the program (sentinel value)
//loop back around and do it all again over and over until user tells us to stop
// var priceOfItem = parseFloat(prompt("Enter the price of your first item"));
// alert("The price of your item was " + priceOfItem);
// var totalCost = priceOfItem;
// var userInput = "";
// //create a sentinel value
// while(priceOfItem !== "STOP") priceOfItem = prompt("Enter the price of your next item \r\n\ Enter STOP when you are done");
//     totalCost = totalCost + priceOfItem;
//     alert("Your total is now " + totalCost.toFixed(2));
// }
//exercise ans
// var num = prompt("What number do you want to start with?");
// var originalNumber = num;
// var exponent = 2;
// console.log("The powers of " + num + " are:");
// while (exponent <= 16) {
//     num = num * originalNumber;
//     console.log(originalNumber + " to the power of " + exponent + " = " + num);
//     // console.log(num);
//     exponent = exponent + 1;
//}
//another solution
// var increase = 2;
// while(increase <= 65536) {
//     increase = increase * 2;
//     console.log(increase);
// }
//do while loop lec ex
// var number = Math.floor(Math.random() * 6) + 1;
// var guess;
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
// } while (guess !== number);
//
// alert("Your guess of " + guess + " matches the number " + number + "!");
//do while loop exercise
// var allCones = Math.floor(Math.random() * 50) + 50;
// do {
//     var soldCones = Math.floor(Math.random() * 5) + 1;
//     alert(" I have " + allCones + " and I am selling you " + soldCones);
//     allCones = allCones - soldCones;
//     if (soldCones > allCones && allCones > 0){
//         alert("Cannot sell you anymore cones. I only have " + allCones + " left.");
//     }
// } while (allCones > 0)
// alert ("Sorry all out")
//while loop ex solution
//Ice cream loop
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     console.log(conesBought + " cones sold");
//
//     if (conesBought >= allCones){
//         console.log("Cannot sell you " + conesBought + " cones I only have " + allCones);
//         allCones = allCones - conesBought;
//
// } while (allCones > 0);
// console.log("Yay, I sold them all!")
// do {
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     if (conesBought > allCones) {
//         console.log("I cant sell " + conesBought + " I only have  " + allCones + " left sorry");
//     } else {
//         allCones = allCones - conesBought;
//         console.log("Cones Sold " + conesBought + " I have " + allCones + " left to sell");
//     }
// } while (allCones > 0);
//FOR LOOPS 3 diff. ways.
// var count = 0;
// while (count <= 100){
//     console.log(count);
//     count = count +1;
// }
//
// for (var count = 0; count<= 100; count = count+1){
//     console.log(count);
// }
for (var i = 0; i<=100; i++){
    console.log(i);
}
for_loops.js ex 1
function showMultiplicationtable(num){
    for(var i = 1; i <= 10; i++){
    }