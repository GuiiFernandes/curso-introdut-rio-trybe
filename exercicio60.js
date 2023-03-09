function numerosPrimos(numero) {
    if (numero <= 2 || !Number.isInteger(numero)) return 'Número inválido!';
    const numPrimos=[];
    let ePrimo;
    for (let i=2; i<=numero; ++i){
        ePrimo=true;
        for (let j=2; j<i; ++j){
            if (i % j===0) ePrimo = false;
        }
        if (ePrimo === true) numPrimos.push(i);
    }
    return numPrimos;
}

console.log(numerosPrimos(10));