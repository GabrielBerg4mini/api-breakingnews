const express = require("express")
const app = express()
const userRoute = require("./src/routes/user.route")

const port = 3000

app.use(express.json())
app.use("/user", userRoute)

app.listen(port, async () => console.log(`Servidor rodando...`))

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
