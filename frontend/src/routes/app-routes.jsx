
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenu from '../components/TopMenu';

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
    <TopMenu />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        
        
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
