function fizzBuzz(num) {
    if (num % 3 === 0 & num % 5 === 0) return 'FizzBuzz';
    else if (num % 3 === 0) return 'Fizz';
    else if (num % 5 === 0) return 'Buzz';
    return num;

}

let i = 0;

while (i < 100) {
    console.log(`Número: ${i} - ${fizzBuzz(i)}`);
    i++;
}

console.log(fizzBuzz('asdasdas2'));