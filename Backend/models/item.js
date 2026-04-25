const mongoose = require("mongoose");

// Create schema
const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  quantity: Number,
  status: {
    type: String,
    default: "available",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export model
module.exports = mongoose.model("Item", itemSchema);