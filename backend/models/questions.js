const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  input: { type: String, required: true },
  output: { type: String, require: false },
  points: { type: Number, require: true },
  competition: { type: ObjectId, require: true },
  constraints: { type: Array, required: false },
});

const Question = mongoose.model("questions", questionSchema);

module.exports = { Question };
