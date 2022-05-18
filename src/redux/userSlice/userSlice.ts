import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../types/categories";
import { UserData } from "../../types/users";

const initialState = {
  data: {} as UserData,
  user_categories: [] as Category[],
};

const todoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload;
    },
    setUserCategories: (state, action: PayloadAction<Category[]>) => {
      state.user_categories = action.payload;
    },
  },
});

export const { setUserData, setUserCategories } = todoSlice.actions;

export default todoSlice.reducer;
