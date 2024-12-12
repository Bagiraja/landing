import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImage from "../assets/images/lp3i.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle navigation to home page and scroll to section
  const handleNavigation = (sectionId) => {
    // Close mobile menu
    setIsOpen(false);

    // If not on home page, navigate to home with hash
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      // If already on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Effect to handle hash navigation when component mounts or location changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <nav className="bg-blue-800 text-white px-4 flex justify-between items-center h-20 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img src={logoImage} alt="LP3I Logo" className="h-14 ms-5" />
        </Link>
      </div>
      <button
        className="text-white md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto md:flex md:space-x-6 bg-blue-700 md:bg-transparent`}
      >
        <li className="border-b md:border-none border-white">
          <Link 
            to="/" 
            className="block px-4 py-2 md:p-0 text-white font-bold hover:underline transition duration-300"
          >
            Home
          </Link>
        </li>

        <li className="border-b md:border-none border-white">
          <button
            onClick={() => handleNavigation('keunggulan')}
            className="block px-4 py-2 md:p-0 hover:underline font-bold w-full text-left"
          >
            Kelebihan
          </button>
        </li>
        <li className="border-b md:border-none border-white">
          <button
            onClick={() => handleNavigation('testimonials')}
            className="block px-4 py-2 md:p-0 hover:underline font-bold w-full text-left"
          >
            Testimoni
          </button>
        </li>
   
      </ul>
    </nav>
  );
};

export default Navbar;