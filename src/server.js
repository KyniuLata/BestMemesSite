const express = require("express");
const app = express();
const port = 3010;
const mongoose = require("mongoose");
const Memes = require("./schema");

const uri =
  "mongodb+srv://<mojlogin>:<password>@bestmemessite.xeh5b.mongodb.net/MemesSite?retryWrites=true&w=majority";
const dbName = "Mems";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/all-memes", (req, res) => {
  Memes.find()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => res.send(err));
});

app.get("/add-memes", (req, res) => {
  const newMeme = new Memes({
    title: "NewMeme",
    likes: 0,
    dislikes: 0,
    img: "path/to/image1.png",
  });
  newMeme
    .save()
    .then(() => {
      res.send("add new Memes, AWESOME OxO");
    })
    .catch((err) => res.send(err));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
