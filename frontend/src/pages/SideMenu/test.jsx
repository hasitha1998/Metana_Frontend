
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setDescription, setImage, removeImage, setImagePlacement } from '../../redux/homeSlice'; // Import actions
import image1 from '../../images/image1.jpg'; 

const Test = () => {
  const dispatch = useDispatch();

  
  const { title, description, image, imagePlacement,onClose } = useSelector((state) => state.title);
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
     <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
        ✕
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
          <button onClick={handleRemoveImage} className="bg-red-500 text-white p-1 mt-2 rounded">
            Remove Image
          </button>
        )}
      </div>

      
      <div className="my-4 flex space-x-2">
        <button
          onClick={() => handlePlacementChange('left')}
          className={`p-2 border rounded ${imagePlacement === 'left' ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}
        >
          Image Left
        </button>
        <button
          onClick={() => handlePlacementChange('right')}
          className={`p-2 border rounded ${imagePlacement === 'right' ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}
        >
          Image Right
        </button>
      </div>
    </div>
  );
};

export default Test;
