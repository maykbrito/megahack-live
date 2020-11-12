const { Schema, model } = require("mongoose");

const Product = new Schema({
  title: String,
  description: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Product", Product);
