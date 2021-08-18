module.exports = {
  async index(req, res) {
    try {
      const jsonBooks = require("../../livros.json");
      return res.status(200).json({ jsonBooks });
    } catch (ex) {
      return res
        .status(500)
        .json({ message: "Ocorreu um erro ao importar o arquivo", error: ex });
    }
  },
};
