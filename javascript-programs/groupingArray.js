//Implement a function that groups elements in an array based on a given condition.
// For example, grouping even and odd numbers into separate arrays.

function grouping(value, condition){
     let groupOne = [];
     let groupTwo = [];

     for( let element of value){ //forEach concept single array looping, of used to declare new name
         if(condition(element)){
            groupOne.push(element);
         }else{
            groupTwo.push(element);
         }
     }
     return{
        groupOne,
        groupTwo
     };
}
var array = [0,1,22,33,98];

var result = grouping(array, arr=>arr%2 === 0);

console.log(result.groupOne);
console.log(result.groupTwo);

//another method
//we input random veg & fruits in array
var groupTwo = ["apple", "mango", "tomato", "potato", "chilli", "banana"];  
//we create two empty array to separate things
const fruits = [];
const veg = [];
//from input we declare/define the list
const listF = ["apple", "mango", "banana"];
const listV = ["tomato", "potato", "chilli"];
//rename for single iteration loop groupTwo to things
//if things has listF pushing to fruits category
groupTwo.forEach(things => {
    if(listF.includes(things)){
        fruits.push(things);
    }else if(listV.includes(things)){
        veg.push(things);
    }
})
console.log(fruits);
console.log(veg); 

