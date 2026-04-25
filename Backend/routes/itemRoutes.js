const express = require("express");
const router = express.Router();

const Item = require("../models/Item");

// Create item
router.post("/", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

// Get all items
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Update item
router.put("/:id", async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedItem);
});

// Delete item
router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;