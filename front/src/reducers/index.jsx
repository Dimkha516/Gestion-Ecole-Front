import { combineReducers } from "redux";
import filieresReducer from "./filieres.reducers";
import usersReducer from "./users.reducers";

const rootReducer = combineReducers({
  filieresReducer,
  usersReducer,
});

export default rootReducer;
