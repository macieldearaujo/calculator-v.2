const pontuacaoUsuario = 300;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'pink';
const corPadrao = corUsuario || 'Black'; //Fallback

console.log(nivelUsuario, corPadrao);
