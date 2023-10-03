const isEven = x => x % 2 === 0
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let r = numbers.some (isEven)
console.log(r)
/*function isEven(num){
return num % 2 === 0
}*/