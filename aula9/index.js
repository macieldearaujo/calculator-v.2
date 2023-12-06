// __________________________AULA 18_____________________________________________

//NÃO DECLARE UMA VARIÁVEL SEM ESPECIFICAR SE É LET OU VAR
nome = Douglas;

//É POSSÍVEL REDECLARAR A VARIÁVEL VAR
var nomeCompleto = 'Douglas Maciel de Araújo';
var nomeCompleto = 'Douglas Maciel';

// __________________________AULA 19_____________________________________________

//string, number, boolean, undefined, null
const nome1 = 'Douglas'; // string
const nome2 = "Eudora"; // string
const nome3 = `Maria`; // string
const num1 = 8; // number
const num2 = 8.3; // number
let nomeAluno; // Undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Null -> não aponta para local nenhum na memória
const aprovado = true; // Boolean = true, false (valor lógico)

let a = 2;
const b = a;

console.log(a, b)

a = 3

console.log(a, b)
