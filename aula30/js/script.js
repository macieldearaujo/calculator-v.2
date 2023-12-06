const paragraph1 = document.querySelector('.js-paragrafo-1');
const date = new Date();

const options1 = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', seconds: 'numeric'};
const stringData1 = date.toLocaleDateString('pt-br', options1);

paragraph1.innerHTML = stringData1;

//Existem duas maneiras de resolver isso

const paragraph2 = document.querySelector('.js-paragrafo-2');

const options2 = {
    dateStyle: 'full',
    timeStyle: 'short'
};
const stringData2 = date.toLocaleString('pt-br', options2);

paragraph2.innerHTML = stringData2;

