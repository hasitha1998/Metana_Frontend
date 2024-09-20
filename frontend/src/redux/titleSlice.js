// titleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'hello',
  description: 'description',
  image: null,
  imagePlacement: 'left',  // Default placement
};

const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
    removeImage(state) {
      state.image = null;
    },
    setImagePlacement(state, action) {
      state.imagePlacement = action.payload;
    },
  },
});

export const { setTitle, setDescription, setImage, removeImage, setImagePlacement } = titleSlice.actions;
export default titleSlice.reducer;
