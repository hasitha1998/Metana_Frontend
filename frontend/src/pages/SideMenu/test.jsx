import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setDescription, setImage, removeImage, setImagePlacement } from '../../redux/homeSlice'; 
import image1 from '../../images/image1.jpg'; 

// eslint-disable-next-line react/prop-types
const Test = ({ onClose }) => {
  const dispatch = useDispatch();
  const { title, description, image, imagePlacement } = useSelector((state) => state.title);

  const handleTitleChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const handleDescriptionChange = (e) => {
    dispatch(setDescription(e.target.value));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageURL = URL.createObjectURL(e.target.files[0]);
      dispatch(setImage(imageURL));
    }
  };

  const handleRemoveImage = () => {
    dispatch(removeImage());
  };

  const handlePlacementChange = (placement) => {
    dispatch(setImagePlacement(placement));
  };

  return (
    <div className="w-1/4 bg-white p-4 min-h-screen relative ml-4">
      
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      >
        x
      </button>

      <h2 className="text-xl font-bold mb-4">Settings</h2>

      
      <label className="block mb-2">Title</label>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        className="border rounded w-full p-2 mb-4"
      />

     
      <label className="block mb-2">Description</label>
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        className="border rounded w-full p-2 mb-4"
      />

      
      <label className="block mb-2">Image</label>
      <input type="file" onChange={handleImageChange} className="mb-4" />

      
      <div className="my-4">
        <img
          src={image || image1}
          alt="Selected"
          className="w-1/2 rounded"
        />
        {image && (
          <button onClick={handleRemoveImage} className="bg-transparent text-gray-800 border border-gray-400 py-1 px-2 mt-2 rounded hover:bg-gray-100">
            Remove Image
          </button>
        )}
      </div>

      
      <div className="my-4 flex space-x-2 items-center">
        <span className="text-gray-700">Placement</span>
        <button
          onClick={() => handlePlacementChange('left')}
          className={`p-2 border rounded ${imagePlacement === 'left' ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}
        >
          <span className="inline-block w-4 h-4 bg-black"></span>
          <span className="inline-block w-1 h-4 ml-1 bg-transparent border-l border-gray-500"></span>
        </button>

        <button
          onClick={() => handlePlacementChange('right')}
          className={`p-2 border rounded ${imagePlacement === 'right' ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}
        >
          <span className="inline-block w-1 h-4 mr-1 bg-transparent border-r border-gray-500"></span>
          <span className="inline-block w-4 h-4 bg-black"></span>
        </button>
      </div>

     
      <div className="flex space-x-4 mt-4">
        <button 
          onClick={() => console.log("Save clicked")} 
          className="bg-black text-white py-2 px-4 rounded"
        >
          Save
        </button>

        <button 
          onClick={() => console.log("Discard clicked")} 
          className="text-red-500 py-2 px-4 rounded hover:underline"
        >
          Discard
        </button>
      </div>
    </div>
  );
};

export default Test;
