import { configureStore } from "@reduxjs/toolkit";

import gamesReducer
  from "../redux/games/gameSlice";

import parlayReducer
  from "../redux/parlay/parlaySlice";

import betsReducer
  from "../redux/bets/betsSlice";


export const store = configureStore({

  reducer: {

    games: gamesReducer,

    parlay: parlayReducer,

    bets: betsReducer,

  },

});