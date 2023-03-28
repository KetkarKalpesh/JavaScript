console.log('Fibonacci Series Up to n Terms');
const number = parseInt(prompt('Enter a Number: '));
let n1 = 0, n2 = 1, nextNumber;

for(let i=1; i<=number; i++){
    console.log(n1);
    nextNumber = n1 + n2;
    n1 = n2;
    n2 = nextNumber;
}


/*Upto Certain Number*/

console.log('Fibonacci Sequence Up to a Certain Number');
const term = parseInt(prompt('Enter a Positive Number: '));

let a1 = 0, a2 = 1, nextTerm;

console.log('Fibonacci Series: ');
console.log(a1);
console.log(a2);

nextTerm = a1 + a2;

while(nextTerm <= number){
    console.log(nextTerm);
    
    a1 = a2;
    a2 = nextTerm;
    nextTerm = a1 + a2;
}