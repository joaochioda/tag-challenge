const express = require("express");
const TagController = require("../controllers/TagController");
const GoodreadsController = require("../controllers/GoodreadsController");

const routes = express.Router();

routes.get("/tag/books", TagController.index);
routes.get("/goodreads/books/:ids", GoodreadsController.getByIsbns);

module.exports = routes;
