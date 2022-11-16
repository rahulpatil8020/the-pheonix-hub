const router = require("express").Router();
const competitionsController = require("../controllers/competitionsController");
router
  .route("/")
  .get(competitionsController.getAllCompetitions)
  .post(competitionsController.createCompetition)
  .put(competitionsController.updateCompetition)
  .delete(competitionsController.deleteCompetition);

router.route("/:id").get(competitionsController.getCompetition);

module.exports = router;
