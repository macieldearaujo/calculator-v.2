/*Function - Javascript

function nomeDaFunção(parametro1, parametro2, parametro3) {
    ação ação
    ação ação
    ação ação

    return output; ***** NADA SERÁ EXECUTADO DEPOIS DO RETURN
}
*/

// Função que retorna o bom dia + o nome do usuário
function comprimento(nome) {
    return `Bom dia, ${nome}!`;
}

const variavel = comprimento('Maria');

console.log(variavel);

//Função que soma dois valores

function somaValores01(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(somaValores01(2, 6));

const resultado = 'Eu disse que não interferiria';

//Função que soma dois valores pré existentes
const somaValores02 = function (x = 2, y = 5) {
    const resultado = x + y;
    return resultado;
}

console.log(somaValores02())

//Função que exibe a raiz de um valor
const raiz01 = function (n) {
    return n ** 0.5;
};

console.log(raiz01(16));

//Arrow Function que exibe a raiz de um valor
const raiz02 = n => n ** 0.5;

console.log(raiz02(4));
