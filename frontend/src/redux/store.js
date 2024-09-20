import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './homeSlice'; // Create the titleSlice below

export const store = configureStore({
  reducer: {
    title: titleReducer, // Add the title reducer to the store
  },
});
// import { configureStore } from '@reduxjs/toolkit';
// import homeReducer from './homeSlice'; // Import the reducer

// export const store = configureStore({
//   reducer: {
//     home: homeReducer,
//   },
// });
