import { useState } from 'react';
import PropTypes from 'prop-types';
import Content from '../components/Content';
import Design from '../components/Design';
import Share from '../components/Share';
import Replies from '../components/Replies';

const TopMenu = ({ onMenuChange }) => {
  
  const [activeMenu, setActiveMenu] = useState('content');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);  
    if (onMenuChange) {
      onMenuChange(menu);  
    }
  };

  const renderActiveComponent = () => {
    switch (activeMenu) {
      case 'content':
        return <Content />;
      case 'design':
        return <Design />;
      case 'share':
        return <Share />;
      case 'replies':
        return <Replies />;
      default:
        return <Content />; 
    }
  };

  
  const getMenuClass = (menu) =>
    menu === activeMenu ? 'bg-white font-bold rounded-md' : 'hover:bg-white rounded-md py-3';


  return (
    <div className="w-1/4 bg-white fixed top-0 z-40 h-full ">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="text-lg">
          <span
            className="hover:underline cursor-pointer"
            onClick={() => handleMenuClick('dashboard')}
          >
            Dashboard
          </span>
          <span className="mx-2">➡️</span>
          <span className="font-semibold">Demo Form</span>
        </div>
        <div>
          <button className="text-gray-600 hover:text-black">
            <i className="fas fa-cog">⚒️</i> {/* Settings Icon */}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-around bg-gray-100 border-t px-2 ">
        <span
          className={`px-4 py-2 text-lg cursor-pointer ${getMenuClass('content')}`}
          onClick={() => handleMenuClick('content')}
        >
          Content
        </span>
        <span
          className={`px-4 py-2 text-lg cursor-pointer ${getMenuClass('design')}`}
          onClick={() => handleMenuClick('design')}
        >
          Design
        </span>
        <span
          className={`px-4 py-2 text-lg cursor-pointer ${getMenuClass('share')}`}
          onClick={() => handleMenuClick('share')}
        >
          Share
        </span>
        <span
          className={`px-4 py-2 text-lg cursor-pointer ${getMenuClass('replies')}`}
          onClick={() => handleMenuClick('replies')}
        >
          Replies
        </span>
      </div>

      
      <div className="p-4">
        {renderActiveComponent()}
      </div>
    </div>
  );
};


TopMenu.propTypes = {
  onMenuChange: PropTypes.func.isRequired,  
};

export default TopMenu;
