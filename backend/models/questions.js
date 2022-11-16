const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  input: { type: ObjectId, required: true },
  output: { type: Number, require: false },
  points: { type: Date, require: true },
  competition: { type: Date, require: true },
  constraints: { type: Array, required: false },
});

const Question = mongoose.model("questions", questionSchema);

module.exports = { Question };
