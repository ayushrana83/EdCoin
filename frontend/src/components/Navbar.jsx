import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo section */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <div className="h-8 w-8 bg-indigo-500 rounded-full">
                <img className='rounded-2xl ' src={logo} alt="" />
              </div>
            </a>
            <a href="/" className="text-white text-xl font-bold ml-3">
              GeuCoin
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="/" className="py-4 px-2 text-white font-semibold border-b-2 border-indigo-500">
              Home
            </a>
            <a href="/about" className="py-4 px-2 text-gray-300 font-medium hover:text-white hover:border-b-2 hover:border-indigo-400 transition duration-300">
              About
            </a>
            <a href="/services" className="py-4 px-2 text-gray-300 font-medium hover:text-white hover:border-b-2 hover:border-indigo-400 transition duration-300">
              Services
            </a>
            
            {/* Dropdown */}
            
            
            <a href="/contact" className="py-4 px-2 text-gray-300 font-medium hover:text-white hover:border-b-2 hover:border-indigo-400 transition duration-300">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="outline-none">
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-700">
          <a href="/" className="block px-3 py-2 text-white font-medium bg-gray-900 rounded-md">
            Home
          </a>
          <a href="/about" className="block px-3 py-2 text-gray-300 font-medium hover:bg-gray-600 hover:text-white rounded-md transition duration-300">
            About
          </a>
          <a href="/services" className="block px-3 py-2 text-gray-300 font-medium hover:bg-gray-600 hover:text-white rounded-md transition duration-300">
            Services
          </a>
          
          {/* Mobile dropdown */}
         
          
          <a href="/contact" className="block px-3 py-2 text-gray-300 font-medium hover:bg-gray-600 hover:text-white rounded-md transition duration-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;