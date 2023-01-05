import { createSlice } from "@reduxjs/toolkit";

export const volumeSlice = createSlice({
  name: "updateVolume",
  initialState: {
    value: 100,
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {updateVolume} = volumeSlice.actions;

export default volumeSlice.reducer;