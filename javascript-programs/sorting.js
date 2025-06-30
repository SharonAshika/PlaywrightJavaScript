//Write a function that sorts an array of strings in alphabetical order.
//ascending using inbuilt
const sol = [ 87,309,28,20];
sol.sort((a,b) => a-b);
console.log(sol);

//descending - inbuilt
const solD = [ 87,309,28,20];
solD.sort((a,b) => b-a);
console.log(solD);

//ascending - String sort
const stringA = ["zoo", "Ace", "shoe", "pilot"];
stringA.sort();
console.log(stringA);

//descending - String sort
const stringD = ["see", "I", "hope", "lee"]; //case sensitive
stringD.sort().reverse();
console.log(stringD);

//case -insensitive
const caseSen = ["avm", "hee", "kee", "jee", "AVE", "Cee"];
caseSen.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(caseSen);

//sort from object properties
const people = [  //multiple object properties created 
    {name: 'aaa', age:10, work: 'studen'},
    {name: 'bbb', age:20, work:'college student'},
    {name: "abbc", age:34, work:"employee"},
    {name: 'xwz', age:88, work: "housewife"}
]
var sorted = people.sort((a,b) =>b.work.localeCompare(a.work));  //sort based on work ascending 
console.log(sorted);

//iterations 
const itr = [0,34,2,90,43,24];
//outer loop i iteration done in adjacent eg. compare 0 and 34 if it is > swap else remain
for(i=0; i<itr.length-1; i++){ //adjacent so -1
    for(j=0; j<itr.length -i -1;j++){
        if(itr[j]<itr[j+1]){  //first value compare second value
          let temp = itr[j];
          itr[j] = itr[j+1];
          itr[j+1] =temp;
        }
    }
}
//i=0; compare 0 and 34 -> 1st value not > so remain 
//compare 34 and 2 ->  value greater so do swap [0,2,34,90,43,24];
//compare 34 and 90 -> 34 is not greater so remain
//comapre 90 and 43 -> swap [0,2,34,43,90,24];
//comapre 90 and 24 -> swap[0,2,34,43,24,90]  the largest num at last 
//iteration 2 continues until all number sorted 