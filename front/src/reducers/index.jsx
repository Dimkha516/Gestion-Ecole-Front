import { combineReducers } from "redux";
import filieresReducer from "./filieres.reducers";

const rootReducer = combineReducers({
  filieresReducer,
});

export default rootReducer;
