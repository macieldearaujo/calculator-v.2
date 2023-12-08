function Calculadora() {
    const display = document.querySelector('.display');

    this.gerarResultado = () => {
        try {
            const conta = eval(display.value);

            if(!conta) {
                alert('Conta inválida');
                return;
            }
            display.value = conta;
        } catch(e) {
            alert('Conta inválida.');
            return;
        }
    };

    this.display = num => {
        display.value += num.innerText;
        display.focus();
    }

    this.clear = () => display.value = '';

    this.del = () => display.value = display.value.slice(0, -1);

    this.apertarBotao = () => {
        display.addEventListener('keyup', (e) => {
            const el = e.keyCode;
            if(el == 13) this.gerarResultado();
            if(el == 27) this.clear();
        })
    }

    this.clicarBotao = () =>{
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('btn-eq')) this.gerarResultado();
            if(el.classList.contains('btn-num')) this.display(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
        })
    };
    this.iniciar = () => {
        this.clicarBotao();
        this.apertarBotao();
    };
}

const calculadora = new Calculadora();
calculadora.iniciar()