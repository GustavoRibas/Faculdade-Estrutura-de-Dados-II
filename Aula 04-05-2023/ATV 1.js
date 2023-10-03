const aluno = [
    {nome: 'João', nota: 8},
    {nome: 'Ana', nota:10},
    {nome: 'Chris', nota:9},
]
aluno.sort((a,b) => a-b)
function compare (a, b){
    if (a.nota<b.nota){
        return -1
    }
    if (a.nota>b.nota){
        return 1
    }
    return 0
}
console.log(aluno.sort(compare))