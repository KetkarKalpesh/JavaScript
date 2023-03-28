/*Prime Number Series*/

const lowerNumber = parseInt(prompt('Enter a Lower Number: '));
const higherNumber = parseInt(prompt('Enter a Higher Number: '));

console.log(`Lower Number is ${lowerNumber} & Higher Number is ${higherNumber}`);

for(let i=lowerNumber; i<=higherNumber; i++){
    let flag = 0;
    
    for(let j=2; j<i; j++){
        if(i % j == 0){
            flag = 1;
            break;
        }
    }
    
    if(i > 1 && flag == 0){
        console.log(i);
    }
}