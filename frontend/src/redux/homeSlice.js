import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: "Welcome to our form",
  description: "This is a description of the form",
  image: null, // Initially no image
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
    updateImage: (state, action) => {
      state.image = action.payload;
    },
    removeImage: (state) => {
      state.image = null;
    }
  },
});

export const { updateTitle, updateDescription, updateImage, removeImage } = homeSlice.actions;
export default homeSlice.reducer;
