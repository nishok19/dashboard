import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardData: {},
  connectionStatus: "disconnected",
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setAllData: (state, action) => {
      //   state = { ...state.connectionStatus, dashboardData: action.payload };
      state.dashboardData = action.payload;
    },
    setConnectionStatus: (state, action) => {
      state.connectionStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllData, setConnectionStatus } = dashboardSlice.actions;

export default dashboardSlice.reducer;
