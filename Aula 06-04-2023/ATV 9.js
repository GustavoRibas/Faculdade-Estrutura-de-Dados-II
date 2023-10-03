/*Adicione 3 contatos no inicio.*/
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[numbers.length] = 10
numbers.push(11,12,13,14,15)
numbers.splice(12)
numbers.unshift(-3,-2,-1)
console.log(numbers)