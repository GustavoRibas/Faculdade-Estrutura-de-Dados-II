/*5) Com o método findIndex encontre o filme que tenha o título "Titanic"*/
const filmes = [
    {
        titulo: 'Vingadores: Ultimato',
        imdb: 8.4,
        faturamento_us: 858300000,
        faturamento_br: 85660000
    },
    {
        titulo: 'Avatar',
        imdb: 7.8,
        faturamento_us: 760500000,
        faturamento_br: 58210000
    },
    {
        titulo: 'Titanic',
        imdb: 7.8,
        faturamento_us: 659360000,
        faturamento_br: 70460000
    }
]
const found = filmes.find(filme => filme.titulo = 'Titanic')
console.log(found)