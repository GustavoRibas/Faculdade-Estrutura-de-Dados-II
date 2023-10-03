function concatArrays(array1, array2) {
  return array1.concat(array2)
}
const letters = ["a", "b", "c"]
const numbers = [1, 2, 3];
const combinado = concatArrays(letters, numbers)
console.log(combinado)