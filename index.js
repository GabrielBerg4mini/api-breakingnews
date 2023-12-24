const express = require("express")
const userRoute = require("./src/routes/user.route")

const app = express()
app.use("/produtos", userRoute)

app.listen(3000)

//ROTA
//MÉTODO  HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
/// GET - Pega uma info
/// POST - Cria uma info
/// PUT - Altera toda a info
/// PATCH - Altera parte da info
/// DELETE - Apaga uma info
//NAME - um identificador da rota
//FUNCTION (Callback) - Responsável por executar algum comando

// app.get("/soma", (req, res) => {
//   const soma = 1 + 1
//   res.send({ soma: soma })
// })
