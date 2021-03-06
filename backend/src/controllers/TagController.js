const jsonBooks = require("../../livros.json");

module.exports = {
  async index(req, res) {
    try {
      const { results } = jsonBooks;
      return res.status(200).json(results);
    } catch (ex) {
      return res
        .status(500)
        .json({ message: "Ocorreu um erro ao importar o arquivo", error: ex });
    }
  },
  async getById(req, res) {
    const { id } = req.params;
    try {
      const book = jsonBooks.results.find((book) => book.objectId === id);
      if (book) {
        return res.status(200).json(book);
      } else {
        return res.status(404).json({ message: "O livro não foi encontrado" });
      }
    } catch (ex) {
      return res
        .status(500)
        .json({ message: "Ocorreu um erro ao procurar book", error: ex });
    }
  },
};
