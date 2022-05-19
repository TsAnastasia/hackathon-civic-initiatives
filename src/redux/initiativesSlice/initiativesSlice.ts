import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitiativeCreateData } from "../../types/initiative";

const defaultInitiativeCreateValues: InitiativeCreateData = {
  name: "",
  type: "complain",
  description: "",
  adress: "",
};

const initialState = {
  create_data: defaultInitiativeCreateValues,
};

const initiativesSlice = createSlice({
  name: "initiatives",
  initialState,
  reducers: {
    setCreateData: (state, action: PayloadAction<InitiativeCreateData>) => {
      state.create_data = action.payload;
    },
    clearCreateData: (state) => {
      state.create_data = defaultInitiativeCreateValues;
    },
  },
});

export const { setCreateData, clearCreateData } = initiativesSlice.actions;

export default initiativesSlice.reducer;
