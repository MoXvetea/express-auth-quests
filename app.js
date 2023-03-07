require("dotenv").config();
const express = require("express");
const router = require("./src/router")

const app = express();
// const welcome = (req, res) => {
//   res.send("Welcome to my favourite movie list");
// };

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", router)

app.get("*", (req, res) => {
  res.status(404)
    .json({ message: "NOT FOUND" })
})


module.exports = app;

