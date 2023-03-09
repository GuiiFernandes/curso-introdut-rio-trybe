/*
Janeiro, Março, Maio, Julho, Agosto, Outubro e Dezembro: 31 dias
Abril, Junho, Setembro e Novembro: 30 dias
Fevereiro: 28 dias
*/

let ano = 2100;
let mes = 2;

//feito por mim
if (mes<1 || mes>12){
    console.log(`O mês ${mes}/${ano} é inválido!`);
} else if (mes===2){
    if (ano%4===0 && ano%100!==0 || ano%400===0){
        console.log(`O mês ${mes}/${ano} tem 29 dias.`);
    } else {
        console.log(`O mês ${mes}/${ano} tem 28 dias.`);
    }
} else if (mes===4 || mes===6 || mes===9 || mes===11){
    console.log(`O mês ${mes}/${ano} tem 30 dias`);
} else {
    console.log(`O mês ${mes}/${ano} tem 31 dias`);
}

//Feito pelo prof.
if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
    console.log("31 dias!");
} else if (mes>12 || mes<1){
    console.log("mês inválido!");
} else if (mes==4 || mes==6 || mes==9 || mes==11){
    console.log("30 dias!");
} else if (mes==2){
    console.log((ano%4==0),(ano%100!=0),(ano%400==0));
    let anoBissexto = ((ano%4==0) && (ano%100!=0)) || (ano%400==0);
    console.log(anoBissexto);
    if(anoBissexto) {
        console.log("29 dias!");
    } else {
        console.log("28 dias!");
    }

}
