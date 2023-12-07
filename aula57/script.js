function criarCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            this.clicarBotao();
        },
        clicarBotao() {
            document.addEventListener('click', (e) => { //se usar arrow function o this vai se manter sem precisar usar 'bind'
                const el = e.target;
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
            })
        },
        btnParaDisplay(number) {
            this.display.value += number;
        }
    }
}

const calculadora = criarCalculadora();
console.log(calculadora.inicia())