
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../../redux/titleSlice'; // Import the action

const Test = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title.title); // Access the title from Redux

  const handleTitleChange = (e) => {
    dispatch(setTitle(e.target.value)); // Dispatch the action to update the title
  };

  return (
    <div className="w-1/4 bg-white p-4 min-h-screen relative ml-5">
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <label className="block mb-2">Title</label>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange} // Update the title in Redux
        className="border rounded w-full p-2 mb-4"
      />
    </div>
  );
};

export default Test;
