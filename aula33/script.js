const dadospessoais = {
    nome: 'Douglas',
    sobrenome: ' Maciel de Araújo',
    endereco: {
        pais: 'Brasil',
        estado: 'São paulo',
        cidade: 'SP',
        rua: 'Rua Djair Pereira de Macedo',
        numero: 9
    }
}

//Atribuição via desestruturação
const { nome, sobrenome, endereco: {pais, ...resto}} = dadospessoais

console.log(nome, sobrenome)
console.log(resto)