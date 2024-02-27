import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";

const combinedReducer = combineReducers({
  menuModel: menuSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "CLEAR") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
});