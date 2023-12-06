//let num1 = 10.25;
//let num2 = 2.5;

// Transformar em string temporariamente
// console.log(num1.toString()+num2);

// Transformar em string permanentemente
// num1 = num1.toString();

// Transformar em binário;
// console.log(num1.toString(2));

// Arredondar
// console.log(num1.toFixed(2));

// Verificar se é inteiro
// console.log(num1.isInteger(num1));

// Verificar se o valor é NaN (Not a Number)
// const temp = num1 * 2;
// console.log(Number.isNaN(temp));

//Imprecisão
let num1 = 0.7
let num2 = 0.1

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4
num1 += num2; //1.5
num1 += num2; //1.6
num1 += num2; //1.7
num1 += num2; //1.8
num1 += num2; //1.9
num1 += num2; //2.0

num1 = parseFloat(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));
