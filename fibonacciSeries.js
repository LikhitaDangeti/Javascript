//This is to print nth term of fibonacciSeries

let a=0
let b=1
let n=7
let lastTerm=0
let count=2

if(n==1){
    lastTerm=a
}else if(n==2){
    lastTerm=b
}else{
    for(let count=2;count!==n;count++){
        lastTerm=a+b;
        a=b
        b=lastTerm
    }
}
console.log(lastTerm);
