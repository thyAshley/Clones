import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";

const rootReducer = combineReducers({ userReducer });

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
