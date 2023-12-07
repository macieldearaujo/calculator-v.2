function P(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new P('Douglas', 'Araujo');
const p2 = new P('Isabelly', 'Morais');

console.log(p1.nome)