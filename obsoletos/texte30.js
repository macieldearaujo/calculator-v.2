const data = new Date();
const diaDoMes = data.getMonth();
const mes = getMes(diaDoMes);

function getMes(diaDoMes) {
    let diaDoMesTexto;

    switch(diaDoMes) {
        case 0:
        diaDoMesTexto = "janeiro"
        return diaDoMesTexto;
        case 1:
        diaDoMesTexto = "fevereiro"
        return diaDoMesTexto;
        case 2:
        diaDoMesTexto = "março"
        return diaDoMesTexto;
        case 3:
        diaDoMesTexto = "abril"
        return diaDoMesTexto;
        case 4:
        diaDoMesTexto = "março"
        return diaDoMesTexto;
        case 5:
        diaDoMesTexto = "junho"
        return diaDoMesTexto;
        case 6:
        diaDoMesTexto = "julho"
        return diaDoMesTexto;
        case 7:
        diaDoMesTexto = "agosto"
        return diaDoMesTexto;
        case 8:
        diaDoMesTexto = "setembro"
        return diaDoMesTexto;
        case 9:
        diaDoMesTexto = "outubro"
        return diaDoMesTexto;
        case 10:
        diaDoMesTexto = "novembro"
        return diaDoMesTexto;
        case 11:
        diaDoMesTexto = "dezembro"
        return diaDoMesTexto;
    }

    return diaDoMesTexto;
}

console.log(mes)