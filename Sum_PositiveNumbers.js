/*Sum of All Positive Numbers*/

const number = parseInt(prompt('Enter a Positive Number: '));

let sum = 0, i = 1;

while(i <= number){
    sum += i;
    i++
}

console.log('The sum of Natural Number is: ' + sum);