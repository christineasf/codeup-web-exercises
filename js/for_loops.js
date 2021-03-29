"use strict"

//for loops exer 1

// var number = 7;
//
// console.log(number + " * 1 = " + number * 1);
// console.log(number + " * 2 = " + number * 2);
// console.log(number + " * 2 = " + number * 3);
//
// for(var multiplier = 1; multiplier <= 10; multiplier++) {
//     console.log(number + " * " + multiplier + " = " + number * multiplier);
//}
function showMultiplicationTable(number) {
    for (var multiplier = 1; multiplier <= 10; multiplier++) {
        console.log(number + " * " + multiplier + " = " + number * multiplier);
    }
}
showMultiplicationTable(56);

//for loop exer 2
// for(var i = 0; i <=10; i++){
//     var random = Math.floor(Math.random()*101) + 20;
//     if(random % 2 === 0) {
//         console.log(random + "is even");
//     }else{
//         console.log(random + "is odd")
//     }
// }
//
//uncomment this
// function randomIntFromInterval(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//
// }
//
// var random, evenOddString;
// for (var i = 0; i < 10; i++){
//     random = randomIntFromInterval(20, 200);
//     evenOddString = (random % 2 === 0) ? 'even' : 'odd';
//     console.log(random + ' is ' + evenOddString);
//}
// for(var i = 0; i<500; i++) {
//     var random = (Math.floor(Math.random()*100) +20);
//     console.log(random);
//     if (random === 20){
//         console.log("It's a 20!");
//     }
//     if (random === 200){
//         console.log("it's 200!");
//     }
// }



// for loop exer  3
//
// for(var i = 1; i < 10; i++) {
//     //console.log(i);
//     var iString = i+""
//     //console.log(iString);
//     //if(i === 1){
//         //console.log(iString);
//     //} else{
//         while(i > iString.length) {
//             iString = i + iString
//             //console.log(iString);
//         }
//    // }
//     console.log(iString);
// }

//for loop exer 4

for(var i = 100; i > 0; i = i - 5) {
    console.log(i);
}










