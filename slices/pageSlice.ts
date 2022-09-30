import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PageState {
  value: String;
}

const initialState: PageState = {
  value: "",
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setNewPage: (state, action: PayloadAction<String>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNewPage } = pageSlice.actions;

export default pageSlice.reducer;
