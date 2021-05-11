var arr = [1, 2, 3, 4, 5];

// how many elements in an array pulled with length
console.log(arr.length);

// add to the end of an array with .push
arr.push(6);

// -----

// iteration looping through an array

var el1 = arr[0];
var el2 = arr[1];
//etc...

// for  loop can be  used for a certain number of items we wat like 5 iterations not 8
for(var i = 0; i < 3; i++) { //arr.length ws chose because i want to interact with every element of the array
    console.log(arr[i]);
}

// forEach loop- can use when we have an array-more of an method-not technically a loop- literlly for each element of the array

arr.forEach(function(el) {
    console.log(el);
});

//Now with objects

arr = [{
    key: "value",
    id: 1
},{
    key: "value",
    id: 2
},{
    key: "value",
    id: 3
}];

arr.forEach(function(obj){
    console.log(obj.key);
})

// hypothetical

weather.forEach(function (dayOfWeather){

});



