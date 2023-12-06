const date = new Date('2019-03-04 20:20:59');

console.log(date.toString());
console.log(`Dia: ${date.getDate()}`);
console.log(`Mês: ${date.getMonth() + 1}`); // Mês começa com 0
console.log(`Ano: ${date.getFullYear()}`);
console.log(`Hora: ${date.getHours()}`);
console.log(`Minuto: ${date.getMinutes()}`);
console.log(`Segundo: ${date.getSeconds()}`);
console.log(`Dia da Semana: ${date.getDay()}`); // 0, Domingo - 6, Sábado

function zeroToLeft(num) {
    return num >= 10 ? num : `0${num}`
}

function formatDate() {
    const data = new Date();

    const day = zeroToLeft(data.getDate());
    const month = zeroToLeft(data.getMonth()) + 1;
    const year = zeroToLeft(data.getFullYear());
    
    const hour = zeroToLeft(data.getHours());
    const min = zeroToLeft(data.getMinutes());
    const sec = zeroToLeft(data.getSeconds());

    return `Data corrigida: ${day}/${month}/${year} ${hour}:${min}:${sec}`;
}

const dataBrasil = formatDate();
console.log(dataBrasil)