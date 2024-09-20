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
    <div className="flex w-full">
      
      {showSettings && <Test onClose={() => setShowSettings(false)} />} 
      <div className="w-full sm:w-3/4 bg-white p-8 shadow-lg flex justify-between border">
        <div className={`w-full sm:w-1/2 mt-[10rem] ${imagePlacement === 'right' ? 'order-last' : ''}`}>
          <h1 className="text-3xl font-bold mb-4">{title}</h1> 
          <p className="mb-4">{description}</p>
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
