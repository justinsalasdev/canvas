import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Count = { value: number };
const initialState: Count = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increase: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, increase } = counterSlice.actions;
