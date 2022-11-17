const { Question } = require("../models/questions");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;

const getAllQuestions = async (req, res) => {
  console.log("Hey");
  try {
    const questions = await Question.find().lean();
    console.log(questions);
    if (!questions) {
      return res.status(400).json({ message: "No questions were found" });
    }
    res.json(questions);
  } catch (error) {
    console.log(error.message);
  }
};

const createQuestion = async (req, res) => {
  try {
    await new Question({ ...req.body }).save();
    res.status(201).send({ message: "Question created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const getQuestion = async (req, res) => {
  try {
    if (req.query.questionId) {
      const question = await Question.findOne({
        _id: ObjectId(questionId),
      });
      if (!question) {
        return res.status(400).json({ message: "Question not found" });
      }
      res.json(question);
    }
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

const updateQuestion = async (req, res) => {};

const deleteQuestion = async (req, res) => {};

module.exports = {
  getAllQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
