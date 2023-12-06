const numeros = [7, 3, 0, 11, 8, 1, 7, 8, 13];

let i = 0;

while (i < numeros.length) {
    const numero = numeros[i];
    if(numero === 11 || numero === 8) {
        console.log
        i++;
        continue;
    }

    console.log(numero);

    if(numero === 1) {
        console.log('Encerrando...')
        break;
    }

    i++;
}