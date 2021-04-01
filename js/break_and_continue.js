//lesson
//break less
// var string = "";
// for(var i = 0; i < 8; i++) {
//     var word = prompt("Let's make a sentence!");
//     if(word === "curses"){
//         console.log("This is a respectable program!");
//         break;
//     }
//     string = string + " " + word;
//     console.log("Your sentence is: " + string);
//}
//continue less after "correction" it will give you the console log but still continue to the next step in the code
// var string = "";
// for(var i = 0; i < 8; i++) {
//     var word = prompt("Let's make a sentence!");
//     if(word === "curses"){
//         console.log("This is a respectable program!");
//         continue;
//     }
//     string = string + " " + word;
//     console.log("Your sentence is: " + string);
//}

//exercise


//ans given

// var oddNumber = 0;
//
// while (oddNumber % 2 !== 1 || oddNumber < 1 || oddNumber > 50) {
//     oddNumber = parseFloat(prompt(" Pick an odd number between 1 and 50"));
//     if(oddNumber % 2 === 1){break;}
//}
//my working answer

var skipper
while(isNaN(skipper) || skipper % 2 !== 0);
var skipper = parseFloat(prompt("Pick an odd number from 1-50: "));
for(var i = 0; i <= 50; i++)
    if(i % 2 != 0)
console.log(i);

//off ans