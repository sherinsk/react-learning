import React, { useEffect, useRef, useState } from "react";
import { Briefcase, School, Linkedin, Instagram, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="flex w-full h-screen bg-black flex-col lg:flex-row">
      {/* Left Div */}
      <div className="w-full justify-normal lg:justify-normal lg:py-8 h-screen lg:w-1/4 bg-red-500 text-white flex flex-col items-center shadow-lg">
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

        <div className="w-full bg-black text-white marquee my-12 max-h-16 lg:max-h-8 flex items-center">
          <div className="track">
            <p className="content">
              I am a passionate and talented Junior Backend Developer currently
              working at Tech Butomy Pvt. Ltd. I focus on building scalable
              backend systems and am proficient in technologies such as Node.js,
              Express, Prisma, and Cloudinary. I enjoy working with cron jobs,
              integrating APIs, and handling file uploads with services like
              Cloudinary and S3. In addition to backend development, I have
              experience working with frontend technologies like React, using
              tools such as Tailwind CSS to create responsive and aesthetically
              pleasing user interfaces. I am also familiar with integrating
              features like notifications, chat systems, and user management
              into web applications. I am working on several exciting projects,
              including a service booking app called Taskberry and a quiz app
              named Hexis Stoven. In these projects, I have implemented
              functionalities like user authentication, push notifications, and
              messaging systems, all while maintaining a strong focus on clean
              and efficient code. Outside of work, I am enthusiastic about
              learning new technologies and frameworks, such as Laravel and
              PySpark, and am exploring the world of mobile app development with
              Flutter. I also enjoy solving challenges related to real-time
              communication, such as building chat systems with Socket.IO, and I
              am always eager to improve and refine my technical skills. I value
              creativity and am constantly exploring new ways to improve the
              user experience through code and design. With a keen interest in
              both backend and frontend development, I strive to create seamless
              and efficient applications that provide value to users.
            </p>
          </div>
        </div>

        {/* Social Links Section */}
        <div className=" w-3/4 bg-red-500 text-black p-6 rounded-lg shadow-2xl">
          <p className="text-center text-sm font-semibold mb-2">Social Links</p>
          <div className="flex justify-center space-x-4">
            {/* Replace # with actual links */}
            <a
              href="https://www.linkedin.com/in/sherin-sk1996/"
              className="text-blue-600 hover:text-blue-800"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.instagram.com/sherin_sk"
              className="text-pink-500 hover:text-pink-700"
              aria-label="Instagram"
            >
              <Instagram size={24} strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/sherinsk"
              className="text-gray-800 hover:text-gray-900"
              aria-label="GitHub"
            >
              <Github size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
