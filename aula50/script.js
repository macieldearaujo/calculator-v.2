// arguments

function funcao(a, b, c) {
    let total = 0;

    for(let argument of arguments) {
        total += argument;
    }

    console.log(total, a, b, c)
}

funcao(1, 2, 2, 4, 5)

// Parâmetros via desestruturação

function funcao2({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

const obj = {
    nome: 'Douglas',
    sobrenome: 'Maciel de Araújo',
    idade: '20'
}

funcao2(obj)

//

function funcao3([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade)
}

const array = [ 'Douglas', 'Maciel de Araújo', '20' ]

funcao3(array)

// Rest Operator

const acumular = function (operador, acumulador, ...numeros) {
    for(let number of numeros) {
        if(operador === '+') acumulador += number;
        if(operador === '-') acumulador -= number;
        if(operador === '/') acumulador /= number;
        if(operador === '*') acumulador *= number;
    }

    console.log(acumulador)
}

acumular('*', 2, 10, 20, 30, 40)

//Arguments pode ser substituido pelo Rest Operator