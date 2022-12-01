const express = require("express");

const cors = require("cors");

const cookieParser = require("cookie-parser");

const routes = require("./routes");

require("./database")

const app = express();

app.listen("3000");

app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.use(routes);