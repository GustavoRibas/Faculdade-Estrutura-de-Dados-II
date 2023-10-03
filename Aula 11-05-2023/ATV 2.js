/*2) Com o método reduce, some os valores de uma 
propriedade salário no seguinte array de objetos:*/
const funcionarios = [
    {nome: 'João', salario: 2000},
    {nome: 'Maria', salario: 3000},
    {nome: 'Pedro', salario: 2500},
]
const totalfuncionarios = funcionarios.reduce((acc, funcionarios) => acc + funcionarios.salario, 0)
console.log(totalfuncionarios)