/*
&& -> false && true -> false
|| -> false && true -> true

FALSY VALUE
*false
0
'' "" ``
null / undefined
NaN
*/

console.log(false || '' || NaN || 'João'); // Para o JavaScript, valores falsos são considerados apenas os falsy value (false, 0, '', "", ``, null, undefined e Nan), quando uma String está com algum valor, ela considerada verdadeira.