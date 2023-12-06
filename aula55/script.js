(function(peso, altura, idade) {
    const sobrenome = 'araujo'

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function displayNome() {
        console.log(criaNome('Douglas'))
    }
    displayNome();
    console.log(peso, altura, idade);
}) (18, 32, 21)

