//This is to check if number is prime or not

let num = 15
let notPrime=0
for(let i=2; i<=num/2; i++){
   if (num==1){
    console.log(1);
   } 
   if(num%i==0){
    notPrime=1
    console.log(0);
    break;
   }
}

if (notPrime==0){
    console.log(1)
}

//This is to print n prime numbers

for(let i=1; i<=100; i++){
    if(i==1){
        console.log(i);
    }
    for(let j=2; j<i;j++){
        if(i%j==0){
            break;
        }else{
            console.log(i)
            break;
        }
    }
}
