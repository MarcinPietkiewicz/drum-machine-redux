import { createSlice } from "@reduxjs/toolkit";

export const volumeSlice = createSlice({
  name: "volume",
  initialState: {
    value: 100,
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {change} = volumeSlice.actions;

export default volumeSlice.reducer;