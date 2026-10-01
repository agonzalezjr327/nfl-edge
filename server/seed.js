require("dotenv").config();

const mongoose = require("mongoose");

const Game = require("./models/Game");


const games = [

  {
    week: 5,

    gameDate:
      new Date("2026-10-04T13:00:00"),

    awayTeam: "Buffalo Bills",
    awayAbbr: "BUF",

    homeTeam: "New England Patriots",
    homeAbbr: "NE",

    awayRecord: "4-1",
    homeRecord: "2-3",

    odds: {
      awayMoneyline: -180,
      homeMoneyline: 155,

      spreadTeam: "BUF",
      spread: -4.5,
      spreadOdds: -110,

      total: 45.5,

      overOdds: -110,
      underOdds: -110,
    },

    weather: {
      temperature: 43,
      wind: 18,
      precipitation: 20,
      description: "Cloudy",
    },

    injuries: [
      {
        team: "NE",
        player: "Example Player",
        position: "WR",
        status: "Questionable",
        impact: 2,
      },
    ],

    model: {
      awayScore: 27.8,
      homeScore: 21.2,

      awayWinProbability: 0.68,
      homeWinProbability: 0.32,

      awayCoverProbability: 0.59,
      homeCoverProbability: 0.41,

      overProbability: 0.51,
      underProbability: 0.49,
    },
  },


  {
    week: 5,

    gameDate:
      new Date("2026-10-04T16:25:00"),

    awayTeam: "Kansas City Chiefs",
    awayAbbr: "KC",

    homeTeam: "Las Vegas Raiders",
    homeAbbr: "LV",

    awayRecord: "4-0",
    homeRecord: "2-2",

    odds: {
      awayMoneyline: -220,
      homeMoneyline: 185,

      spreadTeam: "KC",
      spread: -5.5,
      spreadOdds: -110,

      total: 47.5,

      overOdds: -110,
      underOdds: -110,
    },

    weather: {
      temperature: 72,
      wind: 0,
      precipitation: 0,
      description: "Indoor",
    },

    injuries: [],

    model: {
      awayScore: 28.4,
      homeScore: 20.1,

      awayWinProbability: 0.74,
      homeWinProbability: 0.26,

      awayCoverProbability: 0.61,
      homeCoverProbability: 0.39,

      overProbability: 0.48,
      underProbability: 0.52,
    },
  }

];


async function seedDatabase() {

  try {

    await mongoose.connect(
      process.env.MONGO_URI
    );

    await Game.deleteMany();

    await Game.insertMany(games);

    console.log("NFL games seeded!");

    process.exit();

  } catch (error) {

    console.error(error);

    process.exit(1);
  }
}


seedDatabase();