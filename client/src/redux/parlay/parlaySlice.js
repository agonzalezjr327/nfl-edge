import {
  createSlice
} from "@reduxjs/toolkit";


const parlaySlice = createSlice({

  name: "parlay",

  initialState: {

    legs: [],

    wager: 20,

  },


  reducers: {


    addLeg: (state, action) => {

      // Don't add the exact same
      // selection twice.

      const exists =
        state.legs.some(
          (leg) =>
            leg.selection ===
            action.payload.selection
        );


      if (!exists) {

        state.legs.push(
          action.payload
        );

      }
    },


    removeLeg: (state, action) => {

      state.legs =
        state.legs.filter(
          (leg) =>
            leg.selection !==
            action.payload
        );

    },


    clearParlay: (state) => {

      state.legs = [];

    },


    setWager: (state, action) => {

      state.wager =
        Number(action.payload);

    },

  },

});


export const {
  addLeg,
  removeLeg,
  clearParlay,
  setWager,
} = parlaySlice.actions;


export default parlaySlice.reducer;