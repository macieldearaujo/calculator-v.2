const paragrafosParent = document.querySelector('.paragrafos');
const paragrafosChildren = paragrafosParent.querySelectorAll('p');

const body = getComputedStyle(document.body);
const backgroundBody = body.backgroundColor;

for(let p of paragrafosChildren) {
    p.style.backgroundColor = backgroundBody;
    p.style.color = '#FFFFFF';
}