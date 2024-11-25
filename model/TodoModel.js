const { default: mongoose } = require("mongoose");

let todoschema = new mongoose.Schema({
  name: String,
  email: String,
  contact: Number,
});

module.exports = mongoose.model("Todos", todoschema);
