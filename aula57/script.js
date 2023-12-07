function criarCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            this.clicarBotao();
        },
        clearDisplay() {
            this.display.value = '';
        },
        backspaceDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },
        clicarBotao() {
            document.addEventListener('click', (e) => { //se usar arrow function o this vai se manter sem precisar usar 'bind'
                const el = e.target;
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) this.clearDisplay();
                if(el.classList.contains('btn-del')) this.backspaceDisplay();
            })
        },
        btnParaDisplay(number) {
            this.display.value += number;
        }
    }
}

const calculadora = criarCalculadora();
console.log(calculadora.inicia())