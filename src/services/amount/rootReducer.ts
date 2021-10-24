import { combineReducers } from "redux";
import amountReducer from "./amountSlice";
import { githubAPI } from "./githubAPI";

const rootReducer = combineReducers({
  users: githubAPI.reducer,
  amount: amountReducer,
});

export default rootReducer;
