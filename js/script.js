function criarCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            this.selectDisplay();
            this.pressionaEnter();
            this.clicarBotao();
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) this.resultDisplay();
            })
        },
        selectDisplay() {
            this.display.select();
        },
        clearDisplay() {
            this.display.value = '';
        },
        backspaceDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },
        resultDisplay() {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }
                
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                conta = '';
                return;
            }
        },
        clicarBotao() {
            document.addEventListener('click', (e) => { //se usar arrow function o this vai se manter sem precisar usar 'bind'
                const el = e.target;
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) this.clearDisplay();
                if(el.classList.contains('btn-del')) this.backspaceDisplay();
                if(el.classList.contains('btn-eq')) this.resultDisplay();
            })
        },
        btnParaDisplay(number) {
            this.display.value += number;
        }
    }
}

const calculadora = criarCalculadora();
console.log(calculadora.inicia())