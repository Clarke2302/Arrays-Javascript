const alunos = ["Linda", "Lindsay","Jamie","Luz"];
const medias = [10, 8, 7.5, 9];

const listaAlunosMedias = [alunos,medias];

//verifica se o aluno está na lista

function verifica(aluno){
if(listaAlunosMedias[0].includes(aluno)){
console.log(`${aluno} está cadastrado(a)!`);
//const aluno = listaAlunosMedias[0];
//const media = listaAlunosMedias[1];
const[alunos, medias]=listaAlunosMedias;

const indice = alunos.indexOf(aluno); //indexof mostra qual a posição desse aluno

const mediaDoAluno = medias[indice];
console.log(`A média de ${aluno} é ${mediaDoAluno}.`);

}else{
    console.log(`${aluno} não foi encontrado(a)!!!`);
}
}

verifica("Linda");
