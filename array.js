let coisasParaViajar = 'escova de dentes, boneco do jaspion, toalhas';
console.log(coisasParaViajar);
let itens = coisasParaViajar.split(', ');
console.log(itens);

let arr = [2, false, 'boneco', itens];
console.log(arr[2]);

itens[3] = 'roupas de frio';
console.log(itens);

console.log(itens.length); //Conta itens do array ou caractere da string
itens[itens.length] = 'roupas de calor';
console.log(itens);