import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../../types/users";

const initialState = {
  auth: false,
  data: {} as UserData,
  user_categories: [] as string[],
};

const todoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload;
      state.auth = true;
    },
    addUserCategory: (state, action: PayloadAction<string>) => {
      if (!state.user_categories.some((item) => item === action.payload)) {
        state.user_categories = state.user_categories.concat(action.payload);
      } else {
        console.log("user already has this category");
      }
    },
    deleteUserCategory: (state, action: PayloadAction<string>) => {
      state.user_categories = state.user_categories.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { setUserData, addUserCategory, deleteUserCategory } =
  todoSlice.actions;

export default todoSlice.reducer;
