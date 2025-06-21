//in-build method max
var arr = (0,11,2324,4555);
var max= Math.max(arr);
console.log(max);

//iteration of finding max
function maxNum(numbers){ //input numbers
    if(numbers.length === 0){  //we get input length i.e equals 0 it is not max
        return undefined;  //if 0 we return the value as undefined
    }
    let max = numbers[0];  //index 0 i.e only 1 value in the input we fix that as temporary max
    
    //we create iterations from input 1
    //then if the i is less than input length i.e i=1 input(hi)=2 ; 1++=2
    for(i=1; i<numbers.length;i++){ 
        if(numbers[i] > max){  //so 2>0
            max = numbers[i];  //fix 2 as max
        }
    }
        return max;
}
console.log(maxNum([12,12,44,54,3]));

