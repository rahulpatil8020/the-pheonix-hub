const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const userController = require("../controllers/userController");

router
  .route("/")
  .get(userController.getUser)
  .post(userController.createNewUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
