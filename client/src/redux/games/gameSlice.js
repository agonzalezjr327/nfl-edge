import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import api from "../../api";


// Get all games from Express
export const getGames =
  createAsyncThunk(
    "games/getGames",

    async (_, thunkAPI) => {

      try {

        const response =
          await api.get("/games");

        return response.data;

      } catch (error) {

        return thunkAPI.rejectWithValue(
          error.response?.data?.message ||
          "Could not load games"
        );

      }
    }
  );


const gamesSlice = createSlice({

  name: "games",

  initialState: {

    games: [],

    loading: false,

    error: null,

  },


  reducers: {},


  extraReducers: (builder) => {

    builder

      .addCase(
        getGames.pending,
        (state) => {

          state.loading = true;

          state.error = null;
        }
      )


      .addCase(
        getGames.fulfilled,
        (state, action) => {

          state.loading = false;

          state.games = action.payload;
        }
      )


      .addCase(
        getGames.rejected,
        (state, action) => {

          state.loading = false;

          state.error = action.payload;
        }
      );

  },

});


export default gamesSlice.reducer;