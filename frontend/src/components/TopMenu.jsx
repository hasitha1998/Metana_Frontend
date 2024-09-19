import { useState } from 'react';
import PropTypes from 'prop-types';
import Content from '../components/Content';
import Design from '../components/Design';
import Share from '../components/Share';
import Replies from '../components/Replies';

const TopMenu = ({ onMenuChange }) => {
  // Add state to track which menu is active
  const [activeMenu, setActiveMenu] = useState('content'); // Set 'content' as the default

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);  // Set the active menu in state
    if (onMenuChange) {
      onMenuChange(menu);  // Trigger the prop function if passed
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
        return <Content />; // Default component
    }
  };

  // Add a function to return the active class if the menu is active
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

      {/* Render the active component below the TopMenu */}
      <div className="p-4">
        {renderActiveComponent()}
      </div>
    </div>
  );
};

// Add prop-types validation for onMenuChange
TopMenu.propTypes = {
  onMenuChange: PropTypes.func.isRequired,  // Specify that onMenuChange is a required function prop
};

export default TopMenu;
