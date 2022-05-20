import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSettings } from "../../types/settings";
import { UserData } from "../../types/users";

// API: get user settings
const defaultSettings: UserSettings = {
  showClosed: true,
  showOnlyMine: false,
  searchOnlyOpen: false,
};

const initialState = {
  auth: false,
  data: {} as UserData,
  user_categories: [] as string[],
  settings: defaultSettings,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload;
      state.auth = true;
    },
    setUserSettings: (state, action: PayloadAction<UserSettings>) => {
      state.settings = action.payload;
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

export const {
  setUserData,
  setUserSettings,
  addUserCategory,
  deleteUserCategory,
} = userSlice.actions;

export default userSlice.reducer;
