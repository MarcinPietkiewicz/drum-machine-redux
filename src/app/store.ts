import { configureStore } from '@reduxjs/toolkit'
import powerReducer from '../features/power-slice';

export const store = configureStore({
    reducer: {
      power: powerReducer,
    },
  });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>