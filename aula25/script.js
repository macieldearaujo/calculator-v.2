/* IF, ELSE IF E ELSE
*/

const horario = 12;

if (horario >= 0 && horario <= 12) {
  console.log('Bom dia!')}
else if (horario >= 13 && horario <=17) {
   console.log('Boa tarde!')}
else if (horario >= 18 && horario <=23) {   
    console.log('Boa noite!')}
else {
    console.log('Olá')}



const situação = NaN;
const nome = 'Douglas';

if (situação) {
  console.log(`Bom dia, o senhor ${nome} está aprovado`)
} else {
  console.log(`Bom dia, o senhor ${nome} está reprovado`)
}