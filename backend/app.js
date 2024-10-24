const express = require("express")
const rotaLivro = require("./routers/livro")
const rotaExemplos = require("./routers/exemplos")

const app = express()
app.use(express.json())

const port = 8000

app.use("/livros", rotaLivro)   

app.use('/exemplos', rotaExemplos)
 
app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`)
})