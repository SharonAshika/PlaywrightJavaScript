//Implement a function that merges two arrays into a single array, 
// alternating elements from each array. 

//concat() method
const arr1 = [0,1,2,3,"a","g"];
const arr2 = [11,12,13,14];
const merge = arr1.concat(arr2);
console.log(merge);

//spread operator - ES6 spread elements of array or object to another array or object
const array01 = [0,9,8,7];
const array02 = [55,77,44,"test"];
const spreadArray = [...array01, ...array02];
console.log(spreadArray);

//Push() - add 1 or more element at end of array
const inAOne = [22,334,12];
const inBTwo = [13];
inAOne.push(...inBTwo);
console.log(inAOne);

//iterations - alternating from each array

function mergeAltElArray(a,b){
    let result =[]; //for result create empty array
    //getting 2 arrays length and get max length
    let arrayLength = Math.max(a.length, b.length); 
    //for loop by starting 0 if i is less than max length goto if condition
    for(i=0; i<arrayLength;i++){
        if(i<a.length){    //if i< input a length we push a index to result 
          result.push(a[i]);
        }
        if(i<b.length){
            result.push(b[i]);
        }
    }
    return result;
}

const arrayO = ["a", "b","c"]; //define inputs
const arrayT =[1,22,33,44];

console.log(mergeAltElArray(arrayO,arrayT));