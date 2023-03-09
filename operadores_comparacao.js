let senhaDoWiFi = 159000;
    
let senhaDigitada1 = 169000;
let senhaDigitada2 = 159000;
let senhaDigitada3 = '159000';
let senhaDigitada4 = 159000;

let verificacao;
const senhas = [senhaDigitada1, senhaDigitada2, senhaDigitada3, senhaDigitada4];
for (let senha of senhas) {
    verificacao= senha === senhaDoWiFi;
    console.log(verificacao);
}
console.log('EX 25:');
let numero = 33;

let resultado = numero >= 20 && numero <= 50 && !(numero % 2);
console.log(resultado)
