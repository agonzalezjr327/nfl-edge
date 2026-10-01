const express = require("express");

const Bet = require("../models/Bet");

const router = express.Router();


// ==========================================
// GET BETS
// ==========================================

router.get("/", async (req, res) => {
  try {
    const bets = await Bet.find()
      .sort({ createdAt: -1 });

    res.json(bets);

  } catch (error) {
    res.status(500).json({
      message: "Could not get bets",
      error: error.message,
    });
  }
});


// ==========================================
// SAVE BET
// ==========================================

router.post("/", async (req, res) => {
  try {
    const bet = await Bet.create(req.body);

    res.status(201).json(bet);

  } catch (error) {
    res.status(500).json({
      message: "Could not save bet",
      error: error.message,
    });
  }
});


// ==========================================
// UPDATE BET RESULT
// ==========================================

router.put("/:id", async (req, res) => {
  try {
    const bet = await Bet.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(bet);

  } catch (error) {
    res.status(500).json({
      message: "Could not update bet",
      error: error.message,
    });
  }
});


module.exports = router;