const lista1 = ["João", "Juliana","Ana","Caio"];
const medias = [10, 8, 7.5, 9];

//const listamedias = lista1.concat(medias); //ou
const listamedias = [lista1,medias];

console.log(`o aluno da posição 1 da lista de alunos é: ${listamedias[0][1]}
A nota dessa aluna é: ${listamedias[1][1]}`);
//para saber em que posição juliana está fazemos um templatestring na listamedias
//colocando o parametro da lista que queremos e a posição do elemento que queremos


//informar média de juliana