const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  phone: {
    type: Number,
  },
  feedback: {
    type: String,
    lowercase: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Usercollection = new mongoose.model("Usercollection", userSchema);
module.exports = Usercollection;
