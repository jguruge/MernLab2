const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Initialize app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API Running");
});

// Routes
const itemRoutes = require("./routes/itemRoutes");
app.use("/api/items", itemRoutes);

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Start server
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});