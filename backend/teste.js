const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoDado = { id: '3', nome: 'Livro íncrivel' }

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(dadosAtuais)