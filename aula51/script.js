// Exemplo de closure

function falaFrase(comeco) {
    function falaResto(final) {
        return comeco + ' ' + final;
    }

    return falaResto;
}

const fala = falaFrase('Olá,');
const resto = console.log(fala('amigo'));

// Outro exemplo de closure

function criaMultiplicador(multiplicador) {
    return (n) => {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));