const express = require("express");

const Game = require("../models/Game");

const {
  americanOddsToProbability,
} = require("../utils/bettingMath");

const router = express.Router();


// ==========================================
// GET ALL GAMES
// GET /api/games
// ==========================================

router.get("/", async (req, res) => {
  try {
    const games = await Game.find().sort({
      gameDate: 1,
    });

    res.json(games);
  } catch (error) {
    res.status(500).json({
      message: "Could not get games",
      error: error.message,
    });
  }
});


// ==========================================
// GET ONE GAME
// GET /api/games/:id
// ==========================================

router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({
        message: "Game not found",
      });
    }

    res.json(game);
  } catch (error) {
    res.status(500).json({
      message: "Could not get game",
      error: error.message,
    });
  }
});


// ==========================================
// ANALYZE GAME
// GET /api/games/:id/analyze
// ==========================================

router.get("/:id/analyze", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({
        message: "Game not found",
      });
    }

    const markets = [];


    // ======================================
    // HOME MONEYLINE
    // ======================================

    const homeBreakEven =
      americanOddsToProbability(
        game.odds.homeMoneyline
      );

    const homeEdge =
      game.model.homeWinProbability -
      homeBreakEven;

    markets.push({
      market: "MONEYLINE",

      selection: `${game.homeTeam} ML`,

      odds: game.odds.homeMoneyline,

      modelProbability:
        game.model.homeWinProbability,

      breakEvenProbability:
        homeBreakEven,

      edge: homeEdge,
    });


    // ======================================
    // AWAY MONEYLINE
    // ======================================

    const awayBreakEven =
      americanOddsToProbability(
        game.odds.awayMoneyline
      );

    markets.push({
      market: "MONEYLINE",

      selection: `${game.awayTeam} ML`,

      odds: game.odds.awayMoneyline,

      modelProbability:
        game.model.awayWinProbability,

      breakEvenProbability:
        awayBreakEven,

      edge:
        game.model.awayWinProbability -
        awayBreakEven,
    });


    // Sort highest modeled difference first.
    markets.sort((a, b) => {
      return b.edge - a.edge;
    });


    res.json({
      game,

      projectedScore:
        `${game.awayTeam} ${game.model.awayScore} - ` +
        `${game.homeTeam} ${game.model.homeScore}`,

      markets,
    });

  } catch (error) {
    res.status(500).json({
      message: "Could not analyze game",
      error: error.message,
    });
  }
});


module.exports = router;