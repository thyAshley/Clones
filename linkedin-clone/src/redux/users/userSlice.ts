import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userAttribute = {
  user: null;
};

const initialState: userAttribute = { user: null };

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: userAttribute) => state.user;

export default userSlice.reducer;
