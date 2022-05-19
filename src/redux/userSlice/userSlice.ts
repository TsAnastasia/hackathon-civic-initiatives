import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../types/categories";
import { UserData } from "../../types/users";

const initialState = {
  auth: false,
  data: {} as UserData,
  user_categories: [] as Category[],
};

const todoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload;
      state.auth = true;
    },
    addUserCategory: (state, action: PayloadAction<Category>) => {
      if (
        !state.user_categories.some((item) => item.id === action.payload.id)
      ) {
        state.user_categories = state.user_categories.concat(action.payload);
      } else {
        console.log("user already has this category");
      }
    },
    deleteUserCategory: (state, action: PayloadAction<Category>) => {
      state.user_categories = state.user_categories.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { setUserData, addUserCategory, deleteUserCategory } =
  todoSlice.actions;

export default todoSlice.reducer;
