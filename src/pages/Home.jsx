import React from "react";
import { Briefcase, School, Linkedin, Instagram, Github, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="flex w-full h-screen bg-black flex-col lg:flex-row">
      {/* Left Div */}
      <div className="w-full justify-around lg:justify-normal lg:py-8 h-fit lg:h-screen lg:w-1/4 bg-red-500 text-white flex flex-col items-center shadow-lg">
        {/* Profile Image */}
        <div className="mb-4 mt-20">
          <img
            className="w-48 h-48 rounded-full shadow-lg"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCvLsaKOzn4pQaDVVVZ4RX-Zmukkho-cwCjPYeSAOPkpF4DJKORn3R18Zx1ubHRfEkw72z69uHA5CWxNe8PLJ2f7wgg3rP-G7nq1DaSjphFtfzVQFFCYuHmfUmZLLK8gw1XJNuaDkFHGSkuzgm2kZmPDz66EFkr7qv46PgDVq6I9TYEqDDTpOtogEfiWU/s320/PSX_20240711_004941.jpg"
            alt="Profile"
          />
        </div>

        {/* Text Section */}
        <div className="text-center">
          {/* Name */}
          <h2 className="text-lg font-semibold">SHERIN SK</h2>
          <p className="text-xs text-white-400 mt-1">Jr. Backend Developer</p>

          {/* Other Details */}
          <div className="text-left mx-auto mt-2 w-fit p-2 space-y-1">
            <div className="text-xs text-white-400 flex space-x-1">
              <Briefcase size={18} strokeWidth={2} />
              <p>Tech Butomy Pvt. Ltd.</p>
            </div>
            <div className="text-xs text-white-400 flex space-x-1">
              <School size={18} strokeWidth={2} />
              <p>Govt. Engineering College, Bartonhill (2017-2020)</p>
            </div>
            <div className="text-xs text-white-400 flex space-x-1">
              <School size={18} strokeWidth={2} />
              <p>Sree Narayana Polytechnic College (2014-2017)</p>
            </div>
            <div className="text-xs text-white-400 flex space-x-1">
              <School size={18} strokeWidth={2} />
              <p>Govt. H.S.S, Palayamkunnu (2006-2014)</p>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-4 w-3/4 bg-white text-black p-4 rounded-lg shadow-md">
          <p className="text-center text-sm font-semibold mb-2">Social Links</p>
          <div className="flex justify-center space-x-4">
            {/* Replace # with actual links */}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700"
              aria-label="Instagram"
            >
              <Instagram size={24} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900"
              aria-label="GitHub"
            >
              <Github size={24} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-600"
              aria-label="Twitter"
            >
              <Twitter size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
