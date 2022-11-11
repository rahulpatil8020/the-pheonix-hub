const router = require("express").Router();
const competitionsController = require("../controllers/competitionsController");
router
  .route("/")
  .get(competitionsController.getAllCompetitions)
  .post(competitionsController.createCompetition)
  .put(competitionsController.updateCompetition)
  .delete(competitionsController.deleteCompetition);

module.exports = router;
