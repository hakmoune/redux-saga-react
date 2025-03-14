import { combineReducers } from "redux";
import usersReducer from "./reducers/users";

export const rootReducer = combineReducers({
  users: usersReducer,
});
