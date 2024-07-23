require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const usermodel = require("./src/models/users.model.js");
const app = express();
app.use(cors());
app.use(express.json());

// const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/ABITRADELINK");

app.listen(3001, () => {
  console.log("Server is connected");
});

app.post("/register",  (req, res) => {
  usermodel
    .create(req.body)
    .then((User) => res.json(User))
    .catch((err) => {
      if (err.code === 11000) {
        res.status(400).json({ error: "Username already exists" });
      } else {
        res.status(500).json(err);
      }
    });
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  usermodel.findOne({ username : username }).then((User) => {
    if (User) {
      if (password === User.password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("no user recorded");
    }
  });
});
