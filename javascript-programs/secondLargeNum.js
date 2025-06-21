//Write a function that finds the second largest number in an array. 
function secLarNum(arr){
  console.log(arr.sort((a,b)=>b-a)); //sort by descending denotes b-a //o/p [5564564,3678,2334,9,1]
   return arr[1] //return arr[0,1] from last 1st index
}
console.log(secLarNum([1,2334,5564564,9,3678]));
