require("dotenv").config();

const express = require("express");
const routes = require("./routes");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.listen(port);
app.use(routes);

console.log(`Server runing on localhost:${port}`);
