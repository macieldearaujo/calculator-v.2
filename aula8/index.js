/* Luis Otávio tem 30 anos, pesa 84 kg,
tem 1.84 de altura e seu IMC é de 25.925925925925924
Luis Otávio nasceu em XXXX */

const nome = 'Douglas';
const sobrenome = 'Maciel de Araújo';
const idade = 19;
const peso = 60;
const alturaEmM = 1.75;
let indiceMassaCorporal;
let anoNascimento;
indiceMassaCorporal = peso / (alturaEmM*alturaEmM);
anoNascimento = 2022 - idade;

// STRINGS E NUMBERS SEPARADOS POR VÍRGULA
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log('tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, sobrenome, 'nasceu em', anoNascimento, '.') 

//STRINGS E NUMBERS SEPARADOS POR CONCATENAÇÃO (+)
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg')
console.log('tem ' + alturaEmM + ' de altura e seu IMC é de ' + indiceMassaCorporal)
console.log(nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento + '.')

//TEMPLATE STRINGS - SÓ É POSSÍVEL USAR O TEMPLATE STRING DENTRO DE CRASES ``
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)