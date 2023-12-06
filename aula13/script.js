//               01234567        
let umaString = "Um texto";

//Procurar um índice
console.log(umaString[5]);
console.log(umaString.charAt(5));

//Concatenar
console.log(umaString.concat(" está lindo"));
console.log(umaString + " está lindo") //simbolo de soma
console.log(`${umaString} está lindo`) // template string

//Procurar o primeiro índice de uma palavra
console.log(umaString.indexOf("texto"));
console.log(umaString.lastIndexOf("Um", 3)); // Começa de trás para frente, faz diferença quando você colocar uma posição

//Retornar o valor pedido com expressões regulares
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[x]/)); // Idêntico ao IndexOf, mas aceita expressões regulares
console.log(umaString.replace("Um", "Outro"));

//Descobrir o comprimento de uma string
console.log(umaString.length);

//Fatiar uma string
let segundaString = "O rato roeu a roupa do rei de roma";

console.log(segundaString.slice(2, 6));
console.log(segundaString.split(' '));

//Colocar em maiúsculo ou minúsculo
console.log(segundaString.toUpperCase());
console.log(segundaString.toLowerCase());