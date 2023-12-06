let numero = prompt('Digite seu número');
numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');



numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>A raiz quadrada é: ${numero ** (1/2)}</p>`;
texto.innerHTML += `<p>${numero} é um inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É Nan (Not a Number)? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
