import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: true,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export const darkModeSelector = (state) => state.darkMode.isDarkMode;

export default darkModeSlice.reducer;
