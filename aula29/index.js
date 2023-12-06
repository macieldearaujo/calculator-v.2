const date = new Date('2019-10-25 20:10:05');

const dayOfWeek = date.getDay();
// dateString = 7;

function getDiaDaSemana(dayOfWeek) {
    let dayOfWeekText;

    switch (dayOfWeek) {
        case 0:
            dayOfWeekText = 'Domingo';
            return dayOfWeekText;
        case 1:
            dayOfWeekText = 'Segunda-feira';
            return dayOfWeekText;
        case 2:
            dayOfWeekText = 'Terça-feira';
            return dayOfWeekText;
        case 3:
            dayOfWeekText = 'Quarta-feira';
            return dayOfWeekText;
        case 4:
            dayOfWeekText = 'Quinta-feira';
            return dayOfWeekText;
        case 5:
            dayOfWeekText = 'Sexta-feira';
            return dayOfWeekText;
        case 6:
            dayOfWeekText = 'Sábado';
            return dayOfWeekText;
        default:
            dayOfWeekText = 'Dia da Semana Inválida'
    }
}
const dayOfWeekText = getDiaDaSemana(dayOfWeek);

console.log(` Dia da semana: ${dayOfWeekText} - ${dayOfWeek}`)

// if(dateString == 0) {
//     dayOfWeek = 'Domingo'
// } else if(dateString == 1) {
//     dayOfWeek = 'Segunda'
// } else if(dateString == 2) {
//     dayOfWeek = 'Terça'
// } else if(dateString == 3) {
//     dayOfWeek = 'Quarta'
// } else if(dateString == 4) {
//     dayOfWeek = 'Quinta'
// } else if(dateString == 5) {
//     dayOfWeek = 'Sexta'
// } else if(dateString == 6) {
//     dayOfWeek = 'Sábado'
// }