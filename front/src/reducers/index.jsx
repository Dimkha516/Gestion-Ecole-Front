import { combineReducers } from "redux";
import filieresReducer from "./filieres.reducers";
import usersReducer from "./users.reducers";
import studentsReducer from "./students.reducers";
import statisticsReducer from "./statistics.reducers";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  filieresReducer,
  usersReducer,
  studentsReducer,
  statisticsReducer,
  userReducer,
});

export default rootReducer;
