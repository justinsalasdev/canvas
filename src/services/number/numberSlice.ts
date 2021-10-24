import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Num = { value: number };
const initialState: Num = { value: 0 };

export const numberSlice = createSlice({
  name: "number",
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

export default numberSlice.reducer;
