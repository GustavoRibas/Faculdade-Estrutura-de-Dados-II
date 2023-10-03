let notas = [];
notas[0] = [10, 9, 7, 8];
notas[1] = [9, 9, 8, 10];
for (let i = 0; i < notas.length; i++) {
 for (let j = 0; j < notas[i].length; j++) {
    console.log(`nota ${i + 1}-${j + 1}: ${notas[i][j]}`)
  }
}