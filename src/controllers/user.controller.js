const produtos = (req, res) => {
  const produtoContains = [
    {
      id: Math.random(0 * 10),
      title: "Camisa",
      value: 232.0,
    },
  ]
  res.send(produtoContains)
}

module.exports = { produtos }
