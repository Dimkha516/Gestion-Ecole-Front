import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.jsx";
import { getFilieres } from "./actions/filieres.actions.jsx";
import { Provider } from "react-redux";
import { getUsers } from "./actions/users.actions.jsx";
import { getStudents } from "./actions/students.actions.jsx";
import { getStatistics } from "./actions/statistics.actions.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { getTeachers } from "./actions/teachers.actions.jsx";

const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk],  // Enable Redux Thunk for async actions
  devTools: true,
});

store.dispatch(getFilieres());
store.dispatch(getUsers());
store.dispatch(getStudents());
store.dispatch(getStatistics());
store.dispatch(getTeachers());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
