function meuEscopo () {
    const form = document.querySelector('.form')
    const pessoas = []
    const resultado = document.querySelector('.resultado')

    function recebeForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);
        resultado.innerHTML = `<p>Seu nome é ${nome.value}</p>`
        resultado.innerHTML += `<p>Seu sobrenome é ${sobrenome.value}</p>`
        resultado.innerHTML += `<p>Seu peso é ${peso.value}</p>`
        resultado.innerHTML += `<p>Sua altura é ${altura.value}</p>`
        
    }

    form.addEventListener('submit', recebeForm)
}

meuEscopo();
