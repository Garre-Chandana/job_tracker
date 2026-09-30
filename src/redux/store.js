import { configureStore } from "@reduxjs/toolkit";
import applicationsReducer from "./applicationslice.js";

const store = configureStore({
  reducer: {
    applications: applicationsReducer
  }
});

export default store;