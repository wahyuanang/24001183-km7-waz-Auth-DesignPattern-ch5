require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const router = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));
app.use("/api/v1", router);

module.exports = app;
