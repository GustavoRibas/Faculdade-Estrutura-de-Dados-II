/*1) Considere as variáveis na imagem a seguir. A primeira é a stringArray, imprima ela com o console.log() de forma ordenada utilizando somente o método sort.
Para as demais, utilize a função compararNumeros junto do método sort.*/
let stringArray = ['Rock', 'Blues', 'Rap']
let numericStringArray = ['82', '7', '700']
let numberArray = [42, 1, 6, 200]
let mixedNumericArray = ['82', '7', '700', 42, 1, 6, 200]
function compararNumeros(a, b) {
	return a - b;
}
console.log(mixedNumericArray.sort(compararNumeros))
console.log(stringArray.sort((a, b) => {
	if (a.toLowerCase() < b.toLowerCase()){
		return -1
	}
	if (a.toLowerCase () > b.toLowerCase()) {
		return 1
	}
		return 0
}))