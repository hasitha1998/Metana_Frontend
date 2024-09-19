// Home.js
import { useState } from "react";
import SideMenu from '../../components/SideMenu';  // Ensure the path is correct based on your file structure

const Home = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleStartClick = () => {
    setCurrentPage("PageOne");
  };

  return (
    <div className="flex">
      <SideMenu />
      <div className="flex-1 p-8 bg-gray-100 min-h-screen ml-64"> {/* Added ml-64 to account for the side menu width */}
        <div className="bg-white rounded-lg shadow-lg text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Welcome! Click to start the journey.</h1>
          {currentPage === "Home" && (
            <button
              onClick={handleStartClick}
              className="bg-red-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 mb-4"
            >
              Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
