import { combineReducers } from "redux";
import { skillReducer } from "./skillReducer";
// import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    skills: skillReducer,
    // user: userReducer
})