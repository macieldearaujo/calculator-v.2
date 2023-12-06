function criaPessoa(nome, sobrenome, pesoKg, alturaM) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor) { //set
            valor = valor.split(' ');
            const nome = valor.shift();
            this.nome = nome;
            this.sobrenome = valor.join(' ')
            console.log(valor);
        },
        fala: function(assunto) {
            return `${this.nome} ${this.sobrenome} está ${assunto}` //this
        },
        peso: pesoKg,
        altura: alturaM,
        get imc() {
            const imc = this.peso / (this.altura ** 2); //get
            return imcArredondado = imc.toFixed(2);
        }
    }
} 

const p1 = criaPessoa('Douglas', 'Maciel', 57, 1.8);
p1.nomeCompleto = 'Maria Laudeci Maciel Batista';
console.log(p1.nomeCompleto)