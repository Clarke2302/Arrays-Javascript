//Deixar o array sem nomes repetidos

const nomes = ["Ana","Clara","Maria","Maria","João","João","João"];

const meuSet = new Set(nomes);
//os elementos de um set não podem se repetir

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);