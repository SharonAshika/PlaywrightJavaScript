//single condition
//function functionname(arguments)
function conditions(a,b){
  var sum = a+b;
  return sum; //returning the after condition value of sum
}
console.log(conditions(10,20)); //giving the arguments value a(10),b(20)

//multiple condition in one function program
function multipleConditions(x,y,operator){
  var result;
  //declaring the variable called result using let - which means access within block of code
  if(operator == '+'){  //== both value and dt should be equal
      result= x+y;
  }else if(operator === '-'){
    result= x-y;
  }else if(operator === '*'){
    result=x*y;
  }else if(operator === '%'){
    result=x%y;
  }else if(operator === '/'){
    result=x/y;
  }else{
    result ="invalid operator";
  }
  return result;

}
console.log("add:" + multipleConditions(10,12,'+'));
console.log("sub:" + multipleConditions(10,12,'-'));
console.log("mul:" + multipleConditions(10,12,'*'));
console.log("div:" + multipleConditions(10,12,'%'));
console.log("mod:" + multipleConditions(10,12,'%'));

//using switch expression i.e one of many conditions executed
function switchOperatorConditions(c,d,oper){
  switch(oper){
    case '+': return c+d;
    case '-': return c-d;
    case '*': return c*d;
    case '/': return c/d;
    case '%': return c%d;
    default: return "invalid oper";
  }
}
console.log(switchOperatorConditions(29,22,'-'));