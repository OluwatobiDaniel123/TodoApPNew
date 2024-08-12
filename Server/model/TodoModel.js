const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Schema.Types;
const TodosSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
    postedBy: {
      type: ObjectId,
      ref: "Users",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Todos", TodosSchema);
