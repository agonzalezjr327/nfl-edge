const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    // Basic game information
    week: Number,

    gameDate: Date,

    awayTeam: String,
    awayAbbr: String,

    homeTeam: String,
    homeAbbr: String,

    // Team records
    awayRecord: String,
    homeRecord: String,

    // Sportsbook information
    odds: {
      awayMoneyline: Number,
      homeMoneyline: Number,

      spreadTeam: String,
      spread: Number,
      spreadOdds: Number,

      total: Number,
      overOdds: Number,
      underOdds: Number,
    },

    // Weather information
    weather: {
      temperature: Number,
      wind: Number,
      precipitation: Number,
      description: String,
    },

    // Important injuries
    injuries: [
      {
        team: String,
        player: String,
        position: String,
        status: String,
        impact: Number,
      },
    ],

    // Our model calculations
    model: {
      awayScore: Number,
      homeScore: Number,

      awayWinProbability: Number,
      homeWinProbability: Number,

      awayCoverProbability: Number,
      homeCoverProbability: Number,

      overProbability: Number,
      underProbability: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Game", gameSchema);