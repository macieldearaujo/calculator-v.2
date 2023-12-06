const paragraph = document.querySelector('.paragrafo-resultado');
const date = new Date();

const dayOfWeek = date.getDay();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

let dayOfWeekText;

switch (dayOfWeek) {
    case 0:
    dayOfWeekText = 'Domingo'
    break;
    case 1:
    dayOfWeekText = 'Segunda-feira'
    break;
    case 2:
    dayOfWeekText = 'Terça-feira'
    break;
    case 3:
    dayOfWeekText = 'Quarta-feira'
    break;
    case 4:
    dayOfWeekText = 'Quinta-feira'
    break;
    case 5:
    dayOfWeekText = 'Sexta-feira'
    break;
    case 6:
    dayOfWeekText = 'Sábado'
    break;
}

let monthText;

switch (dayOfWeek) {
    case 0:
    monthText = 'Janeiro'
    break;
    case 1:
    monthText = 'Fevereiro'
    break;
    case 2:
    monthText = 'Abril'
    break;
    case 3:
    monthText = 'Março'
    break;
    case 4:
    monthText = 'Junho'
    break;
    case 5:
    monthText = 'Julho'
    break;
    case 6:
    monthText = 'Agosto'
    break;
    case 7:
    monthText = 'Setembro'
    break;
    case 8:
    monthText = 'Outubro'
    break;
    case 9:
    monthText = 'Novembro'
    break;
    case 10:
    monthText = 'Dezembro'
    break;
}

paragraph.innerHTML = `${dayOfWeekText} ${day} de ${monthText} de ${year} <br> ${hour}:${min}`;