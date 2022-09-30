import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface loginState {
  value: Boolean;
}

const initialState: loginState = {
  value: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginState: (state, action: PayloadAction<Boolean>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoginState } = loginSlice.actions;

export default loginSlice.reducer;
