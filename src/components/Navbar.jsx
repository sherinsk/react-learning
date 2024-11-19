import { useState } from 'react';

export default function Navbar() {
  // State to toggle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 rounded-b-xl shadow-lg  transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center p-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <span className="text-white font-semibold text-lg">Name</span>
          <span className="text-white font-semibold text-lg">Company</span>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "rotate-45" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Right Section (Visible on Larger Screens) */}
        <div className="hidden sm:flex space-x-4">
          <span className="text-white font-semibold text-lg">Logout</span>
        </div>
      </div>

      {/* Mobile Menu (Visible When isMobileMenuOpen is true) */}
      <div
        className={`${
          isMobileMenuOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        } sm:hidden bg-red-500 rounded-b-xl shadow-md transition-all duration-500 ease-in-out overflow-hidden`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <span className="text-white font-semibold text-lg">Name</span>
          <span className="text-white font-semibold text-lg">Company</span>
          <span className="text-white font-semibold text-lg">Logout</span>
        </div>
      </div>
    </div>
  );
}
