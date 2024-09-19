import PropTypes from 'prop-types';
import { useState } from 'react';

const Design = ({ title, setTitle, description, setDescription }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="w-1/4 bg-white p-4 min-h-screen shadow-lg">
      <h2 className="text-xl font-bold mb-4">Settings</h2>

      <label className="block mb-2">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded w-full p-2 mb-4"
        placeholder="Welcome to our form"
      />

      <label className="block mb-2">Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded w-full p-2 mb-4"
        placeholder="This is a description of the form"
      />

      <label className="block mb-2">Image</label>
      <input
        type="file"
        onChange={handleImageChange}
        className="mb-4"
      />
      
      {selectedImage && (
        <div className="my-4">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full rounded"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="bg-red-500 text-white p-1 mt-2 rounded"
          >
            Remove Image
          </button>
        </div>
      )}

      <label className="block mb-2">Placement</label>
      <div className="flex space-x-2">
        <button className="border p-2 rounded">⬆️</button>
        <button className="border p-2 rounded">⬇️</button>
      </div>

      <button className="bg-black text-white p-2 rounded mt-4">Save</button>
      <button className="text-red-500 ml-2">Discard</button>
    </div>
  );
};

// Add prop-types validation for the SideMenu component
Design.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default Design;
