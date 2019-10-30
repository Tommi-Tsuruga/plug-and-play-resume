import { combineReducers } from "redux";
import experience from "./experience";

export default combineReducers({
  //Had to change to map exp instead of resume?
  resumeReducer: experience
});
