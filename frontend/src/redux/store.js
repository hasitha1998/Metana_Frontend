import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './titleSlice'; // Create the titleSlice below

export const store = configureStore({
  reducer: {
    title: titleReducer, // Add the title reducer to the store
  },
});
