function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números validos');
    } 
    return x + y;
}

try {
    console.log(soma('2', 3));
} catch (e) {
    console.log('Error: x e y precisam ser números validos')
}