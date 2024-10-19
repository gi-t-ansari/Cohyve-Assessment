import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import darkModeSlice from "./slices/darkModeSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    darkMode: darkModeSlice,
  },
});
