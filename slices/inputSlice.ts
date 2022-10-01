import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface inputValue {
  value: String;
}

const initialState: inputValue = {
  value: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<String>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInputValue } = inputSlice.actions;

export default inputSlice.reducer;
