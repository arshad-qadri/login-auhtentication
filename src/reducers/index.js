import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import newsReducer from "./newsReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  loginReducer,
  newsReducer,
  weatherReducer,
});

export default rootReducer;
