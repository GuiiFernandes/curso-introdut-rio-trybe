const numeros = [1,2,3,4,5];

for (let index=0; index<numeros.length; index=index+1){
    console.log(numeros[index]);
}

console.log('-------');

const numeros2 = [10,9,8,7,6,5,4,3,2,1];
for (let index=0; index<numeros2.length; index=index+1){
    console.log(numeros2[index]);
}

console.log('-------');

for (let n of numeros) {
    console.log(n);
}