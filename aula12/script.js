let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

varB = varC;
varC = varA;
varA = varB;

console.log(varA, varB, varC)