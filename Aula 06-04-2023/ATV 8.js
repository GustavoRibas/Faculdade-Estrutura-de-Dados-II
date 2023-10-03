/*Remova os últimos 3.*/
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[numbers.length] = 10
numbers.push(11,12,13,14,15)
numbers.splice(12)
console.log(numbers)