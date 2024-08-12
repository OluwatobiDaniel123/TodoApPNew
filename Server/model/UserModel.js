const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      min: 3,
      max: 10,
    },
    lastName: {
      type: String,
      require: true,
      min: 3,
      max: 10,
    },
    email: {
      type: String,
      require: true,
      min: 3,
      max: 10,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
      max: 26,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UsersSchema);
