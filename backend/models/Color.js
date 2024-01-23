const mongoose = require("mongoose");

const ColorSchema = mongoose.Schema(
  {
    code: { type: String, required: true },
    isActive: { type: Boolean, default: true}
  },
  { timestamps: true }
);

const Color = mongoose.model("Color", ColorSchema);

module.exports = Color;