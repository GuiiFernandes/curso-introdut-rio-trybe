const valoresProdutos = [10, 12, 8];
let somaTotal=0;
for(i=0;i<valoresProdutos.length;++i){
    somaTotal += valoresProdutos[i];
    console.log(i, valoresProdutos[i], somaTotal);
}
console.log(somaTotal);