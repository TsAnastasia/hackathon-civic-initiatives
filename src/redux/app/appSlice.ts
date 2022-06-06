import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  info_opened: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInfoOpened: (state, action: PayloadAction<boolean>) => {
      state.info_opened = action.payload;
    },
  },
});

export const { setInfoOpened } = appSlice.actions;

export default appSlice.reducer;
