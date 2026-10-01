require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const gamesRouter = require("./routes/games");
const betsRouter = require("./routes/bets");

const app = express();


// Middleware
app.use(cors());

app.use(express.json());


// Routes
app.use("/api/games", gamesRouter);

app.use("/api/bets", betsRouter);


// Test route
app.get("/", (req, res) => {
  res.json({
    message: "NFL Edge API is running",
  });
});


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {

    console.log("MongoDB connected");

    const PORT =
      process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}`
      );
    });

  })

  .catch((error) => {
    console.error(
      "MongoDB connection error:",
      error
    );
  });