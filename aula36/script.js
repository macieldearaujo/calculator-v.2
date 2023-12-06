const user = {
    nome: 'Douglas',
    sobrenome: 'Maciel de Araújo',
    idade: 20
}

for(let i in user) {
    const key = i;
    console.log(i, user[key]);
}