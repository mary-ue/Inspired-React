import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice.js';

export const rootReducer = combineReducers({
  navigation: navigationReducer,
});