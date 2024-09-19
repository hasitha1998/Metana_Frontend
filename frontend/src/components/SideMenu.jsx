/* eslint-disable react/prop-types */
import { useState } from 'react';
import image1 from '../images/image1.jpg';

const SideMenu = ({ title, setTitle, description, setDescription, onClose, setSelectedImage }) => {
  const [selectedImageLocal, setSelectedImageLocal] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageURL = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(imageURL); // Update parent component's state
      setSelectedImageLocal(imageURL); // Update local state
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setSelectedImageLocal(null);
  };

  return (
    <div className="w-1/4 bg-white p-4 min-h-screen shadow-lg relative">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
        ✕
      </button>
      <h2 className="text-xl font-bold mb-4">Settings</h2>

      {/* Title input */}
      <label className="block mb-2">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Directly update the parent's state
        className="border rounded w-full p-2 mb-4"
      />

      {/* Description input */}
      <label className="block mb-2">Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Directly update the parent's state
        className="border rounded w-full p-2 mb-4"
      />

      {/* Image input */}
      <label className="block mb-2">Image</label>
      <input type="file" onChange={handleImageChange} className="mb-4" />

      {/* Display selected or fallback image */}
      <div className="my-4">
        <img
          src={selectedImageLocal || image1} // Replace with local image path
          alt="Selected"
          className="w-1/2 rounded"
        />
        {selectedImageLocal && (
          <button onClick={handleRemoveImage} className="bg-red-500 text-white p-1 mt-2 rounded">
            Remove Image
          </button>
        )}
      </div>

      {/* Save/Discard buttons */}
      <div className="mt-4">
        <button className="bg-black text-white p-2 rounded">Save</button>
        <button className="text-red-500 ml-2">Discard</button>
      </div>
    </div>
  );
};

export default SideMenu;
