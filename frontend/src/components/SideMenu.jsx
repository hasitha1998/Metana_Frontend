// SideMenu.js

import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className="fixed top-0 left-0 h-full bg-gray-800 text-white w-64 z-40">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-2">
            <Link to="/" className="text-lg hover:text-blue-300">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/about" className="text-lg hover:text-blue-300">About</Link>
          </li>
          <li className="mb-2">
            <Link to="/services" className="text-lg hover:text-blue-300">Services</Link>
          </li>
          <li className="mb-2">
            <Link to="/contact" className="text-lg hover:text-blue-300">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
