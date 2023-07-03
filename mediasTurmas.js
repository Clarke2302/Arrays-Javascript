const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];


function calculamedia (notas) {
    const somaDasNotas = notas.reduce((acumulador, nota) => {
    return acumulador+nota; //acumula nota + 0
    }, 0);
    const media = somaDasNotas / notas.length;
    return media;
}

console.log(` A média da sala de Javascript é ${calculamedia(salaJS)}.`);
console.log(` A média da sala de Java é ${calculamedia(salaJava)}.`);
console.log(` A média da sala de Python é ${calculamedia(salaPython)}.`);