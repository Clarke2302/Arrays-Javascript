const notas = [10, 6.5, 8, 7.5];

let soma = 0;

for(let id=0; id<notas.length; id++){
soma += notas[id];
}

console.log(soma/notas.length);