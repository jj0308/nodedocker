const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User must have a name"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
    minlength: 8,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
