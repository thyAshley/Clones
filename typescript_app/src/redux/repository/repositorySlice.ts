import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const repositorySlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    searchRepository: (state, action) => {
      return { loading: true, error: null, data: [] };
    },
  },
});
