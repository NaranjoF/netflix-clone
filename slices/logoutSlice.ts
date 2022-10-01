import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface logoutState {
  value: Boolean;
}

const initialState: logoutState = {
  value: false,
};

export const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    setLogoutState: (state, action: PayloadAction<Boolean>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogoutState } = logoutSlice.actions;

export default logoutSlice.reducer;
