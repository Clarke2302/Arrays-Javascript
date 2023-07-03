
const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const notas =[7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) =>{
    
    return notas[indice]<7;
} )
console.log(reprovados);

//reprovar apenas quem tem nota menor que 7
/*
const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const notas =[7, 4.5, 8, 7.5];

const aprovados = alunos.filter((aluno, indice) =>{
    
    return notas[indice]>=7;
} )
console.log(aprovados);
*/
//aprovar que tiver nota igual ou maior que 7