import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  provider?: any;
};
const initialState: State = {};

export const xdefi_slice = createSlice({
  name: "xdefi",
  initialState,
  reducers: {
    setProvider: (state, action: PayloadAction<any>) => {
      state.provider = action.payload;
    },
  },
});

export default xdefi_slice.reducer;
export const { setProvider } = xdefi_slice.actions;
