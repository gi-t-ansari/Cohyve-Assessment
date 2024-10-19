import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMe: (state, action) => {
      state.user = action.payload;
      //   state.isAuthenticated = true;
    },
    loginUser: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logoutUser: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setMe } = userSlice.actions;

export const userSelector = (state) => state.user;
export const isAuthenticated = (state) => state.user.isAuthenticated;

export default userSlice.reducer;
