//Multiplication Logic
const number  = parseInt(prompt('Enter a Number: '));

for(let i=1; i<=10; i++){
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

//Multiplication upto certain range
const num = parseInt(prompt('Enter a Number: '));

const range = parseInt(prompt('Enter a Range: '));

for(let i=1; i<=range; i++){
    const result = i * num;
    console.log(`${i} * ${num} = ${result}`);
}