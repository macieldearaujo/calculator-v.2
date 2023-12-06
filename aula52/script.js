const nome = 'Douglas';

function faleNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'outro';
    faleNome();
}

usaFalaNome();