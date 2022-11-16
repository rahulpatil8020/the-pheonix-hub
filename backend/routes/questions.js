const router = require("express").Router();
const questionController = require("../controllers/questionController");
router
  .route("/")
  .get(questionController.getAllQuestions)
  .post(questionController.createQuestion)
  .put(questionController.updateQuestion)
  .delete(questionController.deleteQuestion);

router.route("/:id").get(questionController.getQuestion);

module.exports = router;
