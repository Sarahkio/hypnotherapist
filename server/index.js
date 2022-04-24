const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();
const PORT = 8000;

var app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
