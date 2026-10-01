const mongoose = require("mongoose");

const betSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["STRAIGHT", "PARLAY"],
      required: true,
    },

    wager: {
      type: Number,
      required: true,
    },

    odds: Number,

    modelProbability: Number,

    // Straight bets will normally have one leg.
    // Parlays have multiple legs.
    legs: [
      {
        gameId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Game",
        },

        team: String,

        market: String,

        selection: String,

        odds: Number,

        modelProbability: Number,
      },
    ],

    result: {
      type: String,
      enum: ["PENDING", "WIN", "LOSS", "PUSH"],
      default: "PENDING",
    },

    profit: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bet", betSchema);