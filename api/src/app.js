const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/mainRouter");

const app = express();

// app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use(mainRouter);

module.exports = app;
