import { useState } from 'react';
import { useSelector } from 'react-redux';
import image1 from '../../images/image1.jpg';
import Test from '../SideMenu';

const Home = () => {
  const [showSettings, setShowSettings] = useState(true);

  const title = useSelector((state) => state.title.title); 
  const description = useSelector((state) => state.title.description); 
  const selectedImage = useSelector((state) => state.title.image);
  const imagePlacement = useSelector((state) => state.title.imagePlacement); 

  return (
    <div className="flex w-full min-h-screen rounded-[2rem]">
            {showSettings && <Test onClose={() => {
          console.log("Closing side menu"); 
          setShowSettings(false);
        }} 
      />} 

      
      <div className="w-full sm:w-3/4 bg-white p-8 shadow-lg flex justify-between border items-start space-x-8 rounded-[2rem]">

        
        <div className={`w-full sm:w-1/2 mt-16 ${imagePlacement === 'right' ? 'order-last' : ''}`}>
          <h1 className="text-5xl font-bold mb-4">{title || "Welcome to our form"}</h1> 
          <p className="text-lg mb-8">{description || "This is a description of the form"}</p>
          
          
          <div className="flex items-center space-x-2">
            <button className="bg-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
              Start
            </button>
            <span className="text-gray-500">
              press <span className="font-semibold">Enter</span> 
              <span className="inline-block align-middle">⎆</span>
            </span>
          </div>
        </div>

        
        <div className="sm:w-1/2 flex h-full mt-16">
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
