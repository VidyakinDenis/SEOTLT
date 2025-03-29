import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./slices/root-reducer.ts";

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
