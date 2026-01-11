// WorldClassFacilities.jsx
import React from "react";
import { classesImg } from "../../assets/assets";
import {
  FaBook,
  FaFlask,
  FaDumbbell,
  FaMusic,
  FaDesktop,
  FaUtensils,
} from "react-icons/fa";

// Data structure (defined above)
const facilities = [
  {
    icon: FaBook,
    title: "Modern Library",
    text: "Provides a collection of books, digital resources, and quiet study spaces for research and learning.",
    imagePath: classesImg.class1,
  },
  {
    icon: FaFlask,
    title: "Science Labs",
    text: "Fully equipped laboratories for physics, chemistry, and biology with latest scientific instruments.",
    imagePath: classesImg.class2,
  },
  {
    icon: FaDumbbell,
    title: "Sports Complex",
    text: "Indoor and outdoor facilities including basketball courts, soccer fields, and a swimming pool.",
    imagePath: classesImg.class3,
  },
  {
    icon: FaMusic,
    title: "Performing Arts Center",
    text: "State-of-the-art auditorium and music rooms for drama, concerts, and cultural performances.",
    imagePath: classesImg.class4,
  },
  {
    icon: FaDesktop,
    title: "Computer Labs",
    text: "Advanced technology labs with latest computers and resources for digital learning.",
    imagePath:classesImg.class5,
  },
  {
    icon: FaUtensils,
    title: "Cafeteria",
    text: "Spacious dining area serving nutritious meals and snacks in a comfortable environment.",
    imagePath: classesImg.class6,
  },
];

const WorldClassFacilities = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 data-aos="fade-left" className="section_heading">
            World-Class Facilities
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Our campus features modern amenities designed to enhance the
            learning experience
          </p>
        </div>

        {/* Responsive Grid for Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 transition duration-1000 hover:shadow-xl group overflow-hidden cursor-pointer transform hover:translate-y-3"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  loading="lazy"
                  src={facility.imagePath}
                  alt={facility.title}
                  className="w-full h-full object-cover transform transition duration-500 ease-in-out group-hover:scale-105" // Image Zoom on Hover
                />

                {/* Dark Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 hover:bg-gradient-to-t hover:from-black/75 hover:via-black/10 hover:to-transparent/30 transition duration-1000"></div>

                {/* Icon Overlay (Top Right) */}
                <div
                  className={`absolute top-4 right-4 p-3 bg-radial-[at_50%_75%] from-teal-400 via-teal-600 to-teal-900 to-100% text-white rounded-lg shadow-md transition transform duration-1000 hover:rotate-360 hover:scale-110`}
                >
                  <facility.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {facility.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldClassFacilities;
