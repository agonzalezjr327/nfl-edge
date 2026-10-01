import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import api from "../../api";


export const getBets =
  createAsyncThunk(
    "bets/getBets",

    async () => {

      const response =
        await api.get("/bets");

      return response.data;

    }
  );


export const saveBet =
  createAsyncThunk(
    "bets/saveBet",

    async (bet) => {

      const response =
        await api.post(
          "/bets",
          bet
        );

      return response.data;

    }
  );


const betsSlice = createSlice({

  name: "bets",

  initialState: {

    bets: [],

    loading: false,

  },


  reducers: {},


  extraReducers: (builder) => {

    builder

      .addCase(
        getBets.fulfilled,
        (state, action) => {

          state.bets =
            action.payload;

        }
      )


      .addCase(
        saveBet.fulfilled,
        (state, action) => {

          state.bets.unshift(
            action.payload
          );

        }
      );

  },

});


export default betsSlice.reducer;