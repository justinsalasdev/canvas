import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "../services/amount/rootReducer";
import numberReducer from "../services/number/numberSlice";
import counterReducer from "../services/counter/counterSlice";

export const store = configureStore({
  reducer: {
    _amount: amountReducer,
    number: numberReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
