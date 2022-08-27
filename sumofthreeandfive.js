function sumofthreeandfive(num){
let sum=0;
for(let i=1;i<1000;i++){
if(i%3 === 0 || i%5 === 0){
    sum = sum+i;
}
}
return sum;
}
console.log(sumofthreeandfive(1000));