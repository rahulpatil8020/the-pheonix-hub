const { Competition } = require("../models/competitions");
const mongodb = require("mongodb");
const asyncHandler = require("express-async-handler");
const ObjectId = mongodb.ObjectId;

// @desc Get all competitions
// @route GET /competitions
// @access Private

const getAllCompetitions = async (req, res) => {
  try {
    const competitions = await Competition.find().lean();
    if (!competitions) {
      return res.status(400).json({ message: "No Competitions found" });
    }
    res.json(competitions);
  } catch (error) {
    console.log(error.message);
  }
};
// @desc Create competition
// @route POST /competition
// @access Private

const createCompetition = async (req, res) => {
  try {
    await new Competition({ ...req.body }).save();
    res.status(201).send({ message: "Competition Created Successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// @desc Get a competition
// @route GET /competitions/:id
// @access Private

const getCompetition = async (req, res) => {
  try {
    if (req.query.competitionId) {
      const competition = await Competition.findOne({
        _id: ObjectId(competitionId),
      });
      if (!competition) {
        return res.status(400).json({ message: "Competition Not Found" });
      }
      sres.json(competition);
    }
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

// @desc Update competitions
// @route PUT /competitions/:id
// @access Private

const updateCompetition = async (req, res) => {};

// @desc Delete competitions
// @route DELETE /competitions/:id
// @access Private

const deleteCompetition = async (req, res) => {};

module.exports = {
  getAllCompetitions,
  getCompetition,
  createCompetition,
  updateCompetition,
  deleteCompetition,
};
