const { User, validate } = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc Get User
// @route GET /user/:id
// @access Private

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findOne().select("-password");
  if (!user) {
    return res.status(400).json({ message: "No user found" });
  }
  res.json(user);
});

// @desc Create User
// @route POST /user
// @access Private

const createNewUser = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already exists" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error...." });
  }
};

// @desc Update User
// @route PUT /user
// @access Private

const updateUser = asyncHandler(async (req, res) => {});

// @desc Delete User
// @route DELETE /user
// @access Private

const deleteUser = asyncHandler(async (req, res) => {});

module.exports = {
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
};
