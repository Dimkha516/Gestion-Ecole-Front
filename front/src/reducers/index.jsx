import { combineReducers } from "redux";
import filieresReducer from "./filieres.reducers";
import usersReducer from "./users.reducers";
import studentsReducer from "./students.reducers";
import statisticsReducer from "./statistics.reducers";


const rootReducer = combineReducers({
  filieresReducer,
  usersReducer,
  studentsReducer,
  statisticsReducer
});

export default rootReducer;
