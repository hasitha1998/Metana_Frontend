import { useState } from 'react';
import SideMenu from '../../components/SideMenu'; // Make sure the path is correct
import image1 from '../../images/image1.jpg'; // Make sure the image path is correct

const Home = () => {
  const [title, setTitle] = useState("Welcome to our form");
  const [description, setDescription] = useState("This is a description of the form");
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
  const [currentPage, setCurrentPage] = useState("Home");

  const handleStartClick = () => {
    setCurrentPage("PageOne");
  };

  return (
    <div className="flex w-full">
      {/* Side Menu for Settings */}
      <SideMenu
        title={title} // Passing title
        setTitle={setTitle} // Passing function to update title
        description={description} // Passing description
        setDescription={setDescription} // Passing function to update description
        setSelectedImage={setSelectedImage} // Pass setSelectedImage to SideMenu
        onClose={() => { /* Handle close */ }}
      />

      {/* Main Content Area */}
      <div className="w-full sm:w-3/4 bg-white p-8 shadow-lg flex justify-between">
        {/* Text content on the left */}
        <div className="w-full sm:w-1/2 mt-[10rem]">
          <h1 className="text-3xl font-bold mb-4">{title}</h1> {/* Dynamically updated */}
          <p className="mb-4">{description}</p> {/* Dynamically updated */}
          {currentPage === "Home" && (
            <button
              onClick={handleStartClick}
              className="bg-black text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Start
            </button>
          )}
        </div>

        {/* Image content on the right */}
        <div className="sm:w-1/2 flex justify-end h-full mt-[10rem]">
          <img
            src={selectedImage || image1} // Fallback to default image if no selected image
            alt="Form visual"
            className="rounded-lg object-cover h-80 w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
