import {
  createService,
  findAllService,
  countNews,
} from "../services/news.service.js"

const create = async (req, res) => {
  try {
    const { authorization } = req.headers
    if (!authorization) {
      return res.send(401)
    }

    const parts = authorization.split(" ")
    const [schema, token] = parts

    if (parts.length !== 2) {
      return res.send(401)
    }

    if (schema !== "Bearer") {
      return res.send(401)
    }

    const { title, text, banner } = req.body

    if (!title || !text || !banner) {
      return res.status(400).send({
        message: "Submit all fields for registration",
      })
    }

    await createService({
      title,
      text,
      banner,
      user: { _id: "658c70cf992b954390554cdf" },
    })

    res.send(201)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const findAll = async (req, res) => {
  let { limit, offset } = req.query

  limit = Number(limit)
  offset = Number(offset)

  if (!limit) {
    limit = 5
  }
  if (!offset) {
    offset = 0
  }

  const news = await findAllService(offset, limit)
  const total = await countNews()
  const currentUrl = req.baseUrl

  const next = offset + limit

  const nextUrl =
    next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null

  const previous = offset - limit < 0 ? null : offset - limit
  const previousUrl =
    previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null

  if (news.length === 0) {
    return res.status(400).send({ message: "There are no registered news" })
  }

  res.send({
    nextUrl,
    previousUrl,
    limit,
    offset,
    total,

    results: news.map((newsItem) => ({
      id: newsItem._id,
      title: newsItem.title,
      text: newsItem.text,
      banner: newsItem.banner,
      likes: newsItem.likes,
      comments: newsItem.comments,
      name: newsItem.name,
      username: newsItem.user.username,
      userAvatar: newsItem.user.avatar,
    })),
  })
}

export { create, findAll }
