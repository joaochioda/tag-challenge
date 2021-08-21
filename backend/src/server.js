require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const port = process.env.PORT;
const corsOptions = { origin: "*", credentials: true };

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(port);

console.log(`Server runing on localhost:${port}`);
