const mongoose = require("mongoose");

// user schema
const userSchema = new mongoose.Schema({
  // name
  name: {
    type: String,
    required: [true, "name is required"],
  },

  // email
  email: {
    type: String,
    required: [true, "email is required"],
  },

  // password
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
