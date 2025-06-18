import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchActive: false,
  },
  reducers: {
    toggleSearchView: (state) => {
      state.searchActive = !state.searchActive;
    },
  },
});

export const { toggleSearchView } = searchSlice.actions;

export default searchSlice.reducer;
