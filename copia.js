//adicionar uma nova array igual a original
// e colocar a nota 10 mas manter a original intacta (sem o 10)

const notas = [7, 7, 8, 9];
const addNota = [...notas, 10]; //spread operator ou operador de espalhamento

console.log(`As novas notas são: ${addNota}.`);

console.log(`As notas originais são: ${notas}.`);

