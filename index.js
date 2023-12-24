const express = require("express")
const app = express()
//ROTA
//MÉTODO  HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
/// GET - Pega uma info
/// POST - Cria uma info
/// PUT - Altera toda a info
/// PATH - Altera parte da info
/// DELETE - Apaga uma info
//NAME - um identificador da rota
//FUNCTION (Callback) - Responsável por executar algum comando

app.get("/soma", (req, res) => {
  const soma = 1 + 1
  res.send({ soma: soma })
})

app.listen(3000)
