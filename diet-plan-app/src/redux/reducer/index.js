import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth";

const RootReducer = combineReducers({
  auth,
});

export default RootReducer;
