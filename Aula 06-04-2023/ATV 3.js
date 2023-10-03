/*Você foi contratado pela empresa Invest Education para criar um programa que recebe o salário de um colaborador e calcule reajuste segundo o seguinte critério, baseado no salário atual:

Salários até R$ 1.380,00: aumento de 15%
Salários entre R$ 1.380,00 e R$ 1.800,00: aumento de 10% 
Salários de R$ 2.000,00 em diante: aumento de 5%

Deve ser apresentado em tela:

O aumento calculado;
O salário antes do reajuste; 
O percentual de aumento aplicado; 
O valor do aumento; 
O novo salário, após o aumento.

Dica: utilize estruturas de condição  */
let salario = 2001
let aumento
if (salario == 1380) {
    console.log("O percentual de aumento será de 15%")
    console.log("O salário é: "+salario)
    aumento = salario*0.15
    console.log("O aumento será de R$ "+ aumento)
    console.log("O salário sera R$ ")
    console.log (salario+aumento)
} else if (salario >= 2000){
    console.log("O percentual de aumento será de 5%")
    aumento = salario*0.05
    console.log("O aumento será de R$ "+ salario)
    console.log("O salário sera R$ ")
    console.log (salario+aumento)
} else {
    console.log("Erro")
}