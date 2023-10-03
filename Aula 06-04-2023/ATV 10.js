/*Remova o 5º, 6º, 7º, 8º, 9º contato desse lista e ao mesmo tempo adicione mais 4 contatos.*/
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[numbers.length] = 10
numbers.push(11,12,13,14,15)
numbers.splice(12)
numbers.unshift(-3,-2,-1)
numbers.splice(5, 5, [4, 5, 6, 7])
console.log(numbers)