import { useState } from 'react';
import SideMenu from '../../components/SideMenu';
import image1 from '../../images/image1.jpg'

const Home = () => {
  const [title, setTitle] = useState("Welcome to our form");
  const [description, setDescription] = useState("This is a description of the form");
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
  const [currentPage, setCurrentPage] = useState("Home");

  const handleStartClick = () => {
    setCurrentPage("PageOne");
  };

  return (
    <div className="flex h-full">
      {/* Side Menu for Settings */}
      <SideMenu
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        setSelectedImage={setSelectedImage} // Pass setSelectedImage to SideMenu
      />

      {/* Main Content Area */}
      <div className="w-full sm:w-3/4 bg-white p-8 shadow-lg flex justify-start">
        <div className="w-full sm:w-1/2 ">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="mb-4">{description}</p>
          {currentPage === "Home" && (
            <button
              onClick={handleStartClick}
              className="bg-black text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Start
            </button>
          )}
        </div>

        {/* Image Area */}
        <div className="w-full sm:w-1/2 flex justify-end h-full">
          <img
            src={selectedImage || image1} // Fallback to default image if no selected image
            alt="Form visual"
            className="rounded-lg object-cover h-40 w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
