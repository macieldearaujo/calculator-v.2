// Closures

function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const fun = retornaFuncao('Douglas');
const fun2 = retornaFuncao('Maciel');
console.dir(fun);
console.dir(fun2);