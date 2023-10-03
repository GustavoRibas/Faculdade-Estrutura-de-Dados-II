function acheosvilao(characters) {
    const villains = ["Gollum", "Smaug"];
    return characters.filter(character => villains.includes(character))
}  
const theLordOfTheRings = ["Gandalf", "Aragorn", "Frodo Baggins", "Samwise Gamgee", "Bilbo Baggins", "Legolas"]
const theHobbit = ["Thorin Escudo de Carvalho", "Kili", "Balin", "Fili", "Bard", "Gollum", "Galadriel", "Tauriel", "Smaug"]
const todos = theLordOfTheRings.concat(theHobbit)
const vilaos = acheosvilao(theHobbit, theLordOfTheRings)
console.log(vilaos)