//Crie uma função chamada "reverseString" que aceita uma string que deverá ser retornado de forma inversa a que foi passada. 
//Exemplo passo o meu nome Thiago e é retornado "ogaihT"
function AoContrario(str) {
    let contrario = ''
    for (let i = str.length - 1; i >= 0; i--) {
      contrario += str.charAt(i)
    }
    return contrario
  }
  const nome = 'Guillherme'
  const contrario = AoContrario(nome)
  console.log(contrario)