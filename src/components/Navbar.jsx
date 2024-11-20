import { useState } from 'react';

export default function Navbar() {
  // State to toggle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 shadow-lg transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center p-3">
        {/* Left Section: Image instead of Name and Company */}
        <div className="flex items-center space-x-2">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCvLsaKOzn4pQaDVVVZ4RX-Zmukkho-cwCjPYeSAOPkpF4DJKORn3R18Zx1ubHRfEkw72z69uHA5CWxNe8PLJ2f7wgg3rP-G7nq1DaSjphFtfzVQFFCYuHmfUmZLLK8gw1XJNuaDkFHGSkuzgm2kZmPDz66EFkr7qv46PgDVq6I9TYEqDDTpOtogEfiWU/s320/PSX_20240711_004941.jpg" // Replace with your image URL
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white shadow-lg" // Make it a rounded image
          />
          <span className="font-bold text-white pacifico-regular">SHERIN SK</span> 
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
                isMobileMenuOpen ? "rotate-180" : ""
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
        <div className="hidden sm:flex space-x-4 px-8">
          <span className="text-white font-semibold text-sm exo">SKILLS</span>
          <span className="text-white font-semibold text-sm exo">PROJECTS</span>
          <span className="text-white font-semibold text-sm exo">CONTACT ME</span>
        </div>
      </div>

      {/* Mobile Menu (Visible When isMobileMenuOpen is true) */}
      <div
        className={`${
          isMobileMenuOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        } sm:hidden bg-red-500 rounded-b-xl shadow-md transition-all duration-500 ease-in-out overflow-hidden`}
      >
        <div className="flex flex-col items-end px-4 py-2 space-y-1">
          <span className="text-white font-semibold text-lg exo">SKILLS</span>
          <span className="text-white font-semibold text-lg exo">PROJECTS</span>
          <span className="text-white font-semibold text-lg exo">CONTACT ME</span>
        </div>
      </div>
    </div>
  );
}
