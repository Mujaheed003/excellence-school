import React from "react";
import {
  FaBookOpen,
  FaGlobeAmericas,
  FaLightbulb,
  FaUsers,
  FaChild,
  FaGraduationCap,
} from "react-icons/fa";
// Assuming the Navbar component is available

// const programItems = [
//   {
//     icon: FaChild,
//     title: "Primary Education",
//     grade: "Grades K–5",
//     text: "Building strong foundations in core subjects with focus on early literacy and numeracy.",
//     color: "blue-500",
//     tags: ["Reading", "Numeracy", "Social Studies", "Art"],
//   },
//   {
//     icon: FaGraduationCap,
//     title: "Middle School",
//     grade: "Grades 6–8",
//     text: "Encouraging critical thinking and analytical skills through challenging coursework.",
//     color: "purple-500",
//     tags: ["Mathematics", "Science", "History", "Coding"],
//   },
// ];

// --- Sub-Components ---

// Header Section Component (Empowering Minds)
const HeroSection = () => {
  return (
    <div className="relative h-[50vh] md:h-[60vh] flex items-center pt-20 z-0">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/academy_bck_img.jpg')" }} // Use the image with children studying
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Text Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center text-white  w-full"
      >
        <p className="text-sm font-semibold italic mb-2 opacity-80 text-white tracking-widest bg-teal-500 inline-block px-3 py-1 rounded-full  uppercase">
          Academic Excellence
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
          Empowering Minds
        </h1>
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
          A comprehensive curriculum designed to ensure challenging and lifelong
          learning.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
