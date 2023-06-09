const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  rooms: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
