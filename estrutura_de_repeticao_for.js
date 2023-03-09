for (let i=10; i>=0; --i){
    if (i!==0) {
        console.log(i);
    } else {
        console.log('UHULLLLLLLLLLLLLLLLLLLL FELIZ ANO NOVOOOOOOOO 🍾🎆🎆✨');
    }
}

//Trybe
for (let index = 10; index >= 1; index = index - 1) {
    console.log(index);
}
console.log('UHULLLLLLLLLLLLLLLLLLLL FELIZ ANO NOVOOOOOOOO 🍾🎆🎆✨');

const listaCompra = ['maça','gengibre','miojo','bolacha','banana','feijão','pasta de dente'];
const carrinho = [];

for (let posicaoNaLista=0; posicaoNaLista<listaCompra.length; ++posicaoNaLista) {
    if (listaCompra[posicaoNaLista]==='maça' || listaCompra[posicaoNaLista]==='banana') {
        carrinho.push(listaCompra[posicaoNaLista]);
    }
}
console.log(carrinho);

//For aninhado:
const amizadesJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
let amizadesComuns = [];

for (let ij=0; ij<amizadesJuliana.length;++ij){
    for (let ia=0; ia<amizadesAdilson.length;++ia){
        if (amizadesJuliana[ij]===amizadesAdilson[ia]){
            amizadesComuns.push(amizadesJuliana[ij]);
        }
    }
}
console.log(amizadesComuns);

amizadesComuns=[];
for(let amigosJ of amizadesJuliana) {
    for(let amigosA of amizadesAdilson) {
        if(amigosJ===amigosA){
            amizadesComuns.push(amigosJ);
        }
    }
}
console.log(amizadesComuns);