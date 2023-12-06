const user = {
    nome: 'Douglas',
    sobrenome: 'Maciel de Araújo',
    endereco: {
        rua: 'Djair Pereira de Macedo',
        cidade: 'São Paulo'
    }
};

const array = [1, 3, 5, 7, 6];

const string = 'Paralelepipedo';

//For clássico - strings e arrays
//For in - strings, arrays e objects
//For of - arrays
           
for(let i = 0; i < string.length; i++) {
    console.log(`For Clássico: ${string[i]}`);
}

for(let key in user) {
    console.log(`For in: ${key}`);
}

for(let i of array) {
    console.log(`For of: ${i}`);
}

array.forEach((value) => {
    console.log(`ForEach: ${value}`);
})