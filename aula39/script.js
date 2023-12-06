//Exemplo de utilização do while
let i = 0;

while(i <= 5) {
    //console.log(i);
    i++;
}

// Exemplo de while com strings

let r = 0;
let randomWord = 'Peixe Frito'

while(r < randomWord.length) {
    // console.log(randomWord[r]);
    r++;
}

// Função com Math.Random

function random(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return Math.floor(randomNumber);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while(rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('###########')

//Exemplo de utilização de Do While
do {
    rand = random(min, max);
    console.log(rand)
} while (rand !== 10)