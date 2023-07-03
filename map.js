/*
const notas = [10, 9.5, 8, 7, 6];

const notasNovas = notas.map((nota)=> { //não substitui forEach
    return nota + 1 >= 10 ? 10 : nota + 1;
})
console.log(notasNovas);

*/

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadrao = nomes.map((nome) => {
    return nome.toUpperCase(); //toUpperCase serve pra deixar todas as letras maiusculas
});

console.log(nomesPadrao);