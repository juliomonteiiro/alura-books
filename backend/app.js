const express = require("express")
const rotaLivro = require("./routers/livro")
const rotaFavorito = require("./routers/favorito")
const rotaExemplos = require("./routers/exemplos")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

const port = 8000

app.use("/livros", rotaLivro)   

app.use('/favoritos', rotaFavorito)

app.use('/exemplos', rotaExemplos)
 
app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`)
})