import { useState } from 'react';
//import SideMenu from './SideMenu'; // Import your existing SideMenu component
import SideMenu from '../pages/SideMenu'; 

const Content = () => {
  const [fields, setFields] = useState([
    { id: 1, label: 'Enter your name' },
    { id: 2, label: 'Enter your email' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false); 

  const addField = (type) => {
    const newField = { id: fields.length + 1, label: type };
    setFields([...fields, newField]);
    setIsModalOpen(false); 
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleFieldClick = (field) => {
    if (field.label === 'Welcome screen') {
      setIsSideMenuVisible(true); 
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-full max-w-md mx-auto mt-4 p-4 rounded-md">
      
      {isSideMenuVisible && (
        <div className="fixed inset-0 z-50">
          <SideMenu 
            onClose={() => setIsSideMenuVisible(false)} 
          />
        </div>
      )}

      <h2 className="text-lg font-semibold mb-4">Steps</h2>
      <p className="text-sm text-gray-500 mb-4">
        The steps users will take to complete the form
      </p>

      {/* Display fields */}
      <div className="space-y-2">
        <button
          className="p-2 w-full bg-gray-100 rounded-md text-left"
          onClick={() => handleFieldClick({ label: 'Welcome screen' })}
        >
          Welcome screen
        </button>

        {fields.map((field) => (
          <div
            key={field.id}
            className="flex items-center justify-between p-2 bg-gray-100 rounded-md cursor-pointer"
            onClick={() => handleFieldClick(field)}
          >
            <span>{field.label}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeField(field.id);
              }}
              className="text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </div>
        ))}

        {/* Add new field button */}
        <button
          onClick={openModal}
          className="w-full p-2 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
        >
          + Add field
        </button>

        <button className="p-2 w-full bg-gray-100 rounded-md text-left">End screen</button>
      </div>

      {/* Bottom buttons */}
      <div className="mt-4 flex justify-between">
        <button className="px-4 py-2 bg-black text-white rounded-md">
          Save & Publish
        </button>
        <button className="px-4 py-2 text-red-500">Delete</button>
      </div>

      {/* Modal for selecting field type */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600">
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">Add Field</h3>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => addField('Multiple Choice')} className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">Multiple Choice</button>
              <button onClick={() => addField('Short Text')} className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">Short Text</button>
              <button onClick={() => addField('Email')} className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">Email</button>
              <button onClick={() => addField('Dropdown')} className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">Dropdown</button>
              <button onClick={() => addField('Phone Number')} className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">Phone Number</button>
              <button onClick={() => addField('Section')} className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">Section</button>
              <button onClick={() => addField('Contact Information')} className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">Contact Information</button>
              <button onClick={() => addField('Country')} className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">Country</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
