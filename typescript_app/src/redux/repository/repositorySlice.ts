import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const todosIntiailState = [
  {
    id: 1,
    desc: "React",
    isComplete: true,
  },
  {
    id: 2,
    desc: "Redux",
    isComplete: true,
  },
  {
    id: 3,
    desc: "Redux Toolkit",
    isComplete: false,
  },
];

const repositorySlice = createSlice({
  name: "todos",
  initialState: todosIntiailState,
  reducers: {
    create: (state, { payload }: PayloadAction<{ desc: string }>) => {
      return [
        ...state,
        {
          id: state.length,
          desc: payload.desc,
          isComplete: false,
        },
      ];
    },
    edit: (state, { payload }: PayloadAction<{ id: number; desc: string }>) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state[index].desc = payload.desc;
      }
      return state;
    },
    toggle: (
      state,
      { payload }: PayloadAction<{ id: Number; isComplete: boolean }>
    ) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state[index].isComplete = payload.isComplete;
      }
      return state;
    },
    remove: (state, { payload }: PayloadAction<{ id: number }>) => {
      return state.filter((todo) => todo.id !== payload.id);
    },
  },
});
