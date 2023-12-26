const userService = require("../services/user.service")

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration " })
  }

  const user = await userService.createService(req.body)

  /*   if (!user) {
    return res.status(400).send({ message: "Error creating User" })
  } */

  res.status(201).send({
    message: "User created successfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  })
}

const findAll = async (req, res) => {
  const Users = await userService.findAllService()

  if (Users.length === 0) {
    return res.status(400).send({ message: "There are no registered users" })
  }

  res.send(Users)
}

const findById = async (req, res) => {
  /*   if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid Id" })
  } */

  const user = req.user /* await userService.findByIdService(id) */

  /*   if (!user) {
    return res.status(400).send({ message: "User not found" })
  } */

  res.send(user)
}

const update = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body

  if (!name && !username && !email && !password && !avatar && !background) {
    res.status(400).send({ message: "Submit at least one field for update" })
  }
  const { id, user } = req

  /* if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid ID" })
  } */

  /* const user = await userService.findByIdService(id) */

  /*   if (!user) {
    return res.status(400).send({ message: "User not found" })
  } */

  await userService.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  )

  res.send({ message: "User successfully  Updated" })
}
module.exports = { create, findAll, findById, update }
