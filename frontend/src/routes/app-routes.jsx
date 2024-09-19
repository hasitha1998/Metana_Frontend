
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages


// Import other components if necessary
// import Header from "../components/Header";
// import Footer from "../components/Footer";




import{

    Home

}from "../pages"

// Main App component
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        
        
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
