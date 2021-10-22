import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "../services/counter/amountSlice";
import numberReducer from "../services/counter/numberSlice";
import counterReducer from "../services/counter/counterSlice";

export const store = configureStore({
  reducer: {
    amount: amountReducer,
    number: numberReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
