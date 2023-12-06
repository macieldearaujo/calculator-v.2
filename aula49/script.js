// Declaração de função (Function hoisting)

ola(); // A função é colocada no topo do código, podendo ser chamada em qualquer momento 

function ola() {
    console.log('Olá, mundo');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const funcao = function() {
    console.log('Olá, amigo')
}

funcao2(funcao);
function funcao2(fun) {
    console.log('Seu código aparecer embaixo:')
    fun();
}

// Arrow Function

const arrowFunction = () => {
    console.log('Aqui é uma arrow function');
}

arrowFunction();