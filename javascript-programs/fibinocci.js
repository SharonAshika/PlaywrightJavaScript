function fib(num){
    let a=0; b=1;
    for(i=0; i<num;i++){
        console.log(a);

        let test = a+b;
        a=b;
        b=test;
    }
}
(fib(5));