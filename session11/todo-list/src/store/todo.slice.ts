import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TodoState {
  todo: Partial<Todo>;
}

const initialState: TodoState = {
  todo: {
    content: "",
    description: "",
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<Todo>) => {
      state.todo = { ...state.todo, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTodo } = todoSlice.actions;

export default todoSlice.reducer;
