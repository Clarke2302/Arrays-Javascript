const notas = [10, 6.5, 8, 7.5];

let soma = 0;

for(let nota of notas){ //for of realiza para cada elemento dessa array execute o código que está dentro do for
    soma += nota;
}
console.log(soma/notas.length);
//ou
const media = soma/notas.length;
console.log(`A média das notas é: ${media}.`)
//melhor usar para percorrer cada valor da array