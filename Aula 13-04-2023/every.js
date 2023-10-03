function todosMaiorQueDez (element){
    return element >= 10
}
[12, 5, 8, 130, 44].every(todosMaiorQueDez)
[12, 11, 18, 11, 44].every(todosMaiorQueDez)