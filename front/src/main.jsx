import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.jsx";
import { getFilieres } from "./actions/filieres.actions.jsx";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getFilieres());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </StrictMode>
);
