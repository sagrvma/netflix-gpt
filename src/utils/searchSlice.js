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

    addSearchedMovie: (state, action) => {
      state.searchedMovies = state.searchedMovies.push(action.payload);
    },
  },
});

export const { toggleSearchView, addSearchedMovie } = searchSlice.actions;

export default searchSlice.reducer;
