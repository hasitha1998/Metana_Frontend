import PropTypes from 'prop-types';
import { useState } from 'react';
import image1 from '../images/image1.jpg'

const SideMenu = ({ title, setTitle, description, setDescription, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-1/4 bg-white p-4 min-h-screen shadow-lg relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      >
        ✕
      </button>
      <h2 className="text-xl font-bold mb-4">Settings</h2>

      {/* Title input */}
      <label className="block mb-2">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded w-full p-2 mb-4"
        placeholder="Welcome to our form"
      />

      {/* Description input */}
      <label className="block mb-2">Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded w-full p-2 mb-4"
        placeholder="This is a description of the form"
      />

      {/* Image input */}
      <label className="block mb-2">Image</label>
      <input type="file" onChange={handleImageChange} className="mb-4" />

      {/* Display selected or fallback image */}
      <div className="my-4">
        <img
          src={
            selectedImage
              ? selectedImage
              : image1 // Replace with the local image path
          }
          alt="Selected"
          className="w-1/2 rounded"
        />
        {selectedImage && (
          <button
            onClick={handleRemoveImage}
            className="bg-red-500 text-white p-1 mt-2 rounded"
          >
            Remove Image
          </button>
        )}
      </div>

      {/* Placement buttons */}
      <label className="block mb-2">Placement</label>
      <div className="flex space-x-2">
        <button className="border p-2 rounded">⬆️</button>
        <button className="border p-2 rounded">⬇️</button>
      </div>

      {/* Save/Discard buttons */}
      <div className="mt-4">
        <button className="bg-black text-white p-2 rounded">Save</button>
        <button className="text-red-500 ml-2">Discard</button>
      </div>
    </div>
  );
};

// PropTypes validation
SideMenu.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SideMenu;
