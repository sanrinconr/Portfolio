import { combineReducers } from "redux";
import { skillReducer } from "./skillReducer";
// import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    skill: skillReducer,
    // user: userReducer
})