import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Amount = { value: number };
const initialState: Amount = { value: 0 };

export const amountSlice = createSlice({
  name: "amount",
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

export default amountSlice.reducer;
