import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImage from "../assets/images/lp3i.png";
import blueLogoImage from "../assets/images/lp.png";  // Tambahkan logo warna biru

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src={scrolled ? blueLogoImage : logoImage} 
                alt="LP3I Logo" 
                className="h-14" 
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`${
                  scrolled ? 'text-gray-800' : 'text-white'
                } hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Home
              </Link>
              <button
                onClick={() => handleNavigation('keunggulan')}
                className={`${
                  scrolled ? 'text-gray-800' : 'text-white'
                } hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Keunggulan
              </button>
              <button
                onClick={() => handleNavigation('testimonials')}
                className={`${
                  scrolled ? 'text-gray-800' : 'text-white'
                } hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Testimoni
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${
                scrolled ? 'text-gray-800' : 'text-white'
              } inline-flex items-center justify-center p-2 rounded-md hover:text-blue-600 focus:outline-none transition-colors duration-300`}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className={`px-2 pt-2 pb-3 space-y-1 ${
            scrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-black/50'
          }`}>
            <Link
              to="/"
              className="text-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Home
            </Link>
            <button
              onClick={() => handleNavigation('keunggulan')}
              className="text-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300"
            >
              Keunggulan
            </button>
            <button
              onClick={() => handleNavigation('testimonials')}
              className="text-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300"
            >
              Testimoni
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
