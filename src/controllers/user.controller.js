import userService from "../services/user.service.js"

const create = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const findAll = async (req, res) => {
  try {
    const Users = await userService.findAllService()

    if (Users.length === 0) {
      return res.status(400).send({ message: "There are no registered users" })
    }

    res.send(Users)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const findById = async (req, res) => {
  try {
    const user = req.user /* await userService.findByIdService(id) */
    res.send(user)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const update = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body

    if (!name && !username && !email && !password && !avatar && !background) {
      res.status(400).send({ message: "Submit at least one field for update" })
    }
    const { id, user } = req

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
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}
export default { create, findAll, findById, update }
