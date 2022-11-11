const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const competitionSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  createdBy: { type: ObjectId, required: true },
  prize: { type: Number, require: false },
  releaseDate: { type: Date, require: true },
  finalDate: { type: Date, require: true },
  questions: { type: Array, require: true },
});

const Competition = mongoose.model("competition", competitionSchema);

module.exports = { Competition };
