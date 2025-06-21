//Implement a function to reverse a string without using the built-in reverse() method. 
//function functionname()
function reverseString(words){
    var newRevWords = " ";
 //declaring empty variable to store reveresed string
    for(var i=words.length-1; i>=0; i--){ //i is strign length i.e hello(5)-1 = 4;  i>=0 4>=0; which means do decrement to 0
        newRevWords = newRevWords + words[i];
        //eg.hello i=5-1=4 ("o"); 4>=0 yes ; next string o
        //i=4-1=3("L"); 3>=0 yes next string l (4o,3l,2l,1e,0h) reversed
    }
     return newRevWords;
}
    console.log(reverseString("hello"));

const string = "playwright";
console.log(string.split('').reverse().join(''));

function fixedString(string){
 return string.split(' ').map(word=>word.split('').reverse().join('')).join(' ');
}
 console.log(fixedString("This is test"));
