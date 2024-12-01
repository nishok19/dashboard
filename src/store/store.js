import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dashboardSlice.js";

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
  },
});
