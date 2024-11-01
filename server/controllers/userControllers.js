const userModel = require("../models/userModel");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken")

// Register controller
const registerController = async (req, res) => {
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


// Login controller
const loginController = async(req, res) => {
  try {
    // filter for checking user
    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(400)
        .send({ message: "User not found", success: false });
    }

    // filter for comparing passwords and decryption of password
    const password = await bycrpt.compare(req.body.password, user.password);

    if (!password) {
      return res.status(400).send({ message: "Invalid credentials", success: false });
    }

    // if there is user and password then generate token for user to secure our app

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{expireIn: "1d"});

    res.status(200).send({ message: "Login successful", success: true, token });
  } catch (error) {
    console.log(error)
    res.status(500).send({message: `Error in login controller ${error.message}`})
  }
};


module.exports = { loginController, registerController };
