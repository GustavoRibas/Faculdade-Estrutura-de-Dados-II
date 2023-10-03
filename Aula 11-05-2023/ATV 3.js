/*3) Utilizando o método reduce, some todos os 
valores do faturamentos dos filmes no Brasil*/
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
const totalfilmes = filmes.reduce((acc, filmes) => acc + filmes.faturamento_br, 0)
console.log(totalfilmes)