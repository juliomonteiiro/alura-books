const { Router} = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send("Você fez uma requisição do tipo GET, serve para visualizar dados")
})

router.post("/", (req, res) => {
    res.send("Você fez uma requisição do tipo POST, serve para inserir dados")
})

router.patch("/", (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH, serve para editar dados")
})

router.delete("/", (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE, serve para deletar dados")
})

module.exports = router 