import { combineReducers } from '@reduxjs/toolkit';
import { NewsSlice } from './news-slice';

export const rootReducer = combineReducers({
  news: NewsSlice.reducer,
});
