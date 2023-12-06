// Arrays Básico

//Um array é formado por colchetes [] que compõe alguns valores separados por vírgula
let alunos = ["Douglas", "Maria", "Elizabeth", "Isabelly"]

//Adicionar valores no final de um array

alunos[alunos.length] = "Aluna2"; //Adiciona no final
console.log(alunos);

alunos.push("Aluna3"); //Adiciona no final
console.log(alunos);

//Adicionar valores no início de um array

alunos.unshift("Aluna1");
console.log(alunos);

//Deletar um valor de um array

delete(alunos[2]);
console.log(alunos);

//Cortar um array

console.log(alunos.slice(0, -2));

//Verificar se é um array
console.log(typeof(alunos)); //O array é um tipo de objeto
console.log(alunos instanceof Array);

alunos = 123;

console.log(alunos instanceof Array);