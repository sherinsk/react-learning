import React from "react";
import WorkIcon from '@mui/icons-material/Work';
import{Briefcase} from 'lucide-react'
export default function Home() {
  return (
    <div className="flex w-full h-screen bg-black gap-3 flex-col lg:flex-row">
  {/* Left Div */}
  <div className="w-full justify-around lg:py-20 h-fit lg:h-fit lg:w-1/4 bg-red-500 text-white flex flex-col items-center shadow-lg">
    {/* Profile Image */}
    <div>
      <img
        className="w-52 h-52 rounded-full shadow-lg"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCvLsaKOzn4pQaDVVVZ4RX-Zmukkho-cwCjPYeSAOPkpF4DJKORn3R18Zx1ubHRfEkw72z69uHA5CWxNe8PLJ2f7wgg3rP-G7nq1DaSjphFtfzVQFFCYuHmfUmZLLK8gw1XJNuaDkFHGSkuzgm2kZmPDz66EFkr7qv46PgDVq6I9TYEqDDTpOtogEfiWU/s320/PSX_20240711_004941.jpg"
        alt="Profile"
      />
    </div>
    {/* Text Section */}
    <div className="text-center">
  {/* Name */}
  <h2 className="text-xl font-semibold">SHERIN SK</h2>
  <p className="text-sm text-white-400">Jr. Backend Developer</p>
  {/* Other Details */}
  <div className="text-left mx-auto mt-2 w-fit p-6">
    <div className="text-sm text-gray-400 flex"><Briefcase size={20} strokeWidth={1} /><p>Tech Butomy Pvt. Ltd.</p></div>
    <p className="text-sm text-gray-400">Studied Mechanical Engineering at Government Engineering College, Bartonhill</p>
  </div>
</div>

    <div className="mt-4 text-center">

      {/* About Section */}
      <p className="text-sm text-gray-400 p-2 mx-2">
        Passionate about coding and creating scalable backend solutions. Loves working on innovative projects and learning new technologies.
      </p>
    </div>
  </div>
</div>


  );
}
