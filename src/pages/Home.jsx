import React from "react";

export default function Home() {
  return (
    <div className="flex w-full h-screen bg-black p-3 gap-3 flex-col lg:flex-row">
  {/* Left Div */}
  <div className="w-full h-screen lg:h-fit lg:w-1/4 bg-red-500 text-white flex flex-col items-center rounded-xl shadow-lg mt-20">
    {/* Profile Image */}
    <div>
      <img
        className="w-52 h-52 rounded-full shadow-lg mt-10"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCvLsaKOzn4pQaDVVVZ4RX-Zmukkho-cwCjPYeSAOPkpF4DJKORn3R18Zx1ubHRfEkw72z69uHA5CWxNe8PLJ2f7wgg3rP-G7nq1DaSjphFtfzVQFFCYuHmfUmZLLK8gw1XJNuaDkFHGSkuzgm2kZmPDz66EFkr7qv46PgDVq6I9TYEqDDTpOtogEfiWU/s320/PSX_20240711_004941.jpg"
        alt="Profile"
      />
    </div>
    {/* Text Section */}
    <div className="mt-4 text-center">
      {/* Designation */}
      <h2 className="text-xl font-semibold">SHERIN SK</h2>
      <h4 className="text-xl font-semibold">Jr. Backend Developer</h4>
      <h4 className="text-xl font-semibold">Tech Butomy Pvt. Ltd.</h4>
      {/* About Section */}
      <p className="text-sm text-gray-400 p-2">
        Passionate about coding and creating scalable backend solutions. Loves working on innovative projects and learning new technologies.
      </p>
    </div>
  </div>
</div>


  );
}
