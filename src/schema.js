const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memeSchema = new Schema({
  title: String,
  likes: Number,
  dislikes: Number,
  img: String,
});

const Memes = mongoose.model("Memes", memeSchema);
module.exports = Memes;
