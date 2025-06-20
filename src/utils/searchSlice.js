import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchActive: false,
    searchedMovies: [],
  },
  reducers: {
    toggleSearchView: (state) => {
      state.searchActive = !state.searchActive;
    },

    addSearchedMovies: (state, action) => {
      state.searchedMovies.push(action.payload);
    },
  },
});

export const { toggleSearchView, addSearchedMovies } = searchSlice.actions;

export default searchSlice.reducer;
