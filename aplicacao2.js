let grupopessoa = require("./grupopessoas");

function maxMin(h){
    let maior=0, menor=5;
    for(let x=0;x<h.length;x++){
        if (h[x].altura>maior){
            maior = h[x].altura;
        }else if(h[x].altura<menor){
            menor = h[x].altura;
        }
    }
    console.log("A maior altura é "+ maior+" e a menor é "+menor);
}

function mediaHMulher(h){
    let contaM=0,alt=0;
    for (let x=0;x<h.length;x++){
        if(h[x].sexo=="F"){
            alt += h[x].altura;
            contaM ++;
        }
    }
    let media = (alt/contaM).toFixed(2);
    return media;
}

function contaHomem(h){
    return h.filter(function(x){
        return x.sexo =="M";
    }).length
}

maxMin(grupopessoa);

console.log(mediaHMulher(grupopessoa));

console.log(contaHomem(grupopessoa));