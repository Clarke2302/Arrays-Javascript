const nomes = ["Evaldo", "Dora", "Lucas"];

//3 formas de escrever o forEach

/*
nomes.forEach(function (nome){
    console.log(nome);
})

nomes.forEach((nome) => {
    console.log(nome);
})
*/
function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);