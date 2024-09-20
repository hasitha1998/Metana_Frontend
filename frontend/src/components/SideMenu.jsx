/* eslint-disable react/prop-types */
import { useState } from 'react';
import image1 from '../images/image1.jpg';

const SideMenu = ({ title, setTitle, description, setDescription, onClose, setSelectedImage }) => {
  const [selectedImageLocal, setSelectedImageLocal] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageURL = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(imageURL); 
      setSelectedImageLocal(imageURL); 
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setSelectedImageLocal(null);
  };

  return (
    <div className="w-1/4 bg-white p-4 min-h-screen relative ml-5">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
        ✕
      </button>
      <h2 className="text-xl font-bold mb-4">Settings</h2>

      
      <label className="block mb-2">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
        className="border rounded w-full p-2 mb-4"
      />

    
      <label className="block mb-2">Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
        className="border rounded w-full p-2 mb-4"
      />

      
      <label className="block mb-2">Image</label>
      <input type="file" onChange={handleImageChange} className="mb-4" />

     
      <div className="my-4">
        <img
          src={selectedImageLocal || image1} 
          alt="Selected"
          className="w-1/2 rounded"
        />
        {selectedImageLocal && (
          <button onClick={handleRemoveImage} className="bg-red-500 text-white p-1 mt-2 rounded">
            Remove Image
          </button>
        )}
      </div>

      
      <div className="mt-4">
        <button className="bg-black text-white p-2 rounded">Save</button>
        <button className="text-red-500 ml-2">Discard</button>
      </div>
    </div>
  );
};

export default SideMenu;
