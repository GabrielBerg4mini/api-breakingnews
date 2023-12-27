import express from "express"
import connectDatabase from "./src/database/database.js"
import userRoute from "./src/routes/user.route.js"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 3000
const app = express()
connectDatabase()
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
