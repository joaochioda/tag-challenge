const axios = require("axios");

module.exports = {
  async getByIsbns(req, res) {
    const { ids } = req.params;
    try {
      const {
        data: { books },
      } = await axios.get("https://www.goodreads.com/book/review_counts.json", {
        params: {
          key: process.env.GOODREADS_KEY,
          isbns: ids,
        },
      });
      return res.status(200).json(books);
    } catch (ex) {
      return res.status(500).json({
        message: "Ocorreu um erro ao se comunicar com o good reads",
        error: ex,
      });
    }
  },
};
