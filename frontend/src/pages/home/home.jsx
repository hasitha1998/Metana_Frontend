// src/components/Home.jsx
import  { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import image1 from '../../images/image1.jpg';
import Test from '../test';

const Home = () => {
  const title = useSelector((state) => state.title.title); // Access Redux state
  const [description, setDescription] = useState("This is a description of the form");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState("Home");

  const handleStartClick = () => {
    setCurrentPage("PageOne");
  };

  return (
    <div className="flex w-full">
      <Test /> {/* Test will also be connected to Redux */}
      <div className="w-full sm:w-3/4 bg-white p-8 shadow-lg flex justify-between border ml-[10rem]">
        <div className="w-full sm:w-1/2 mt-[10rem]">
          <h1 className="text-3xl font-bold mb-4">{title}</h1> {/* Title from Redux */}
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
        <div className="sm:w-1/2 flex justify-end h-full mt-[10rem]">
          <img
            src={selectedImage || image1}
            alt="Form visual"
            className="rounded-lg object-cover h-80 w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
