/*VALORES PRIMITIVOS E POR REFÊRENCIA


**Valores Primitivos (imutáveis): string, number, boolean, undefined, null (bigint, symbol); ---> Valores Copiados 

**Valores por Refêrencia (mutáveis): array, function, object; ---> Valores passados por refêrencia
*/

//Exemplo de Objeto Primitivo com String 
let a = 'A';
let b = a; //Cópia

console.log(a, b);

a = 'Outra coisa';

console.log(b); //O valor permanece copiado.
