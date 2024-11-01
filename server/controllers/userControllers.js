const userModel = require("../models/userModel");
const bycrpt = require("bcryptjs");

// Login controller
const loginController = () => {};

// Register controller
const registerController = async () => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(200)
        .send({ message: "User already exists", success: false });
    }

    // password
    const password = req.body.password;
    const salt = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(password, salt);

    //replace password with hashed password
    req.body.password = hashedPassword;

    // new User
    const newUser = new userModel(req.body);
    await newUser.save();
    res
      .status(200)
      .send({ message: "User registered successfully", success: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: `Register Controller Error ${error}` });
  }
};

module.exports = { loginController, registerController };
