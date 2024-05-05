import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slices/counter";


export const store = configureStore({
  reducer: {
    counter: counterSlice,
  }
})

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;