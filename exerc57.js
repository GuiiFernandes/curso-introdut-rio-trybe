let frase = 'Programar é muito legal!';
let letra = 'a';

function trocandoAsLetras(frase, letra){
    let trocandoLetra = '';
    for (let index in frase) {
        if(frase[index] === letra) {
            trocandoLetra += '*';
        } else {
            trocandoLetra += frase[index];
        }
    }
    return trocandoLetra;
}

const novaFrase = trocandoAsLetras(frase, letra);
console.log(novaFrase);