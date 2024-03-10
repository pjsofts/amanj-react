import { createSlice } from "@reduxjs/toolkit";

type counterType = {
  a: number;
  b: number;
  c: number;
};

const initialState: counterType
 = {
  a: 0,
  b: 0,
  c: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementA: (state) => {
      state.a += 1;
    },
    incrementB: (state) => {
      state.b += 1;
    },
    incrementC: (state) => {
      state.c += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementA, incrementB, incrementC } = counterSlice.actions;

export default counterSlice.reducer;
