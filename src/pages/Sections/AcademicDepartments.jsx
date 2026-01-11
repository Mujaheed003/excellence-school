// AcademicDepartments.jsx
import React from "react";
import { academiesImg } from "../../assets/assets";
import {
  FaFlask,
  FaBookOpen,
  FaGlobeAmericas,
  FaLaptopCode,
  FaPaintBrush,
  FaCalculator,
  FaArrowRight,
} from "react-icons/fa";

// Data structure (defined above)
const departments = [
  {
    icon: FaFlask,
    title: "Science Department",
    subtitle: "Physics, chemistry, biology, and technology",
    link: "/academics/science",
    imagePath: academiesImg.academy1,
  },
  {
    icon: FaCalculator,
    title: "Mathematics Department",
    subtitle: "Vector modeling and analytical thinking",
    link: "/academics/math",
    imagePath: academiesImg.academy2,
  },
  {
    icon: FaBookOpen,
    title: "Language Arts",
    subtitle: "Develop communication and literary skills",
    link: "/academics/language",
    imagePath: academiesImg.academy3,
  },
  {
    icon: FaPaintBrush,
    title: "Arts & Music",
    subtitle: "Express creativity through various art forms",
    link: "/academics/arts",
    imagePath: academiesImg.academy4,
  },
  {
    icon: FaGlobeAmericas,
    title: "Social Studies",
    subtitle: "Understand history, culture, and society",
    link: "/academics/social",
    imagePath: academiesImg.academy5,
  },
  {
    icon: FaLaptopCode,
    title: "Technology & Innovation",
    subtitle: "Embrace digital literacy and coding skills",
    link: "/academics/tech",
    imagePath: academiesImg.academy6,
  },
];

const AcademicDepartments = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 data-aos="fade-left" className="section_heading">
            Academic Departments
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Click on any department to learn more about our programs and
            offerings
          </p>
        </div>

        {/* Responsive Grid for Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <a
              data-aos="fade-up"
              key={index}
              href={dept.link}
              className="block rounded-xl overflow-hidden shadow-lg group relative h-70" // Set height for card consistency
            >
              {/* Background Image with Hover Effect */}
              <img
                loading="lazy"
                src={dept.imagePath}
                alt={dept.title}
                className="absolute inset-0 w-full h-full object-cover transform transition duration-500 ease-in-out group-hover:scale-105" // Subtle zoom on hover
              />

              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent/30 transition duration-300"></div>

              {/* Content Layer */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-left">
                {/* Icon (Positioned slightly off the content) */}
                <div className="absolute bottom-33 left-6 p-3 bg-teal-500 bg-opacity-10 backdrop-blur-sm rounded-lg text-white hover:scale-110 transition transform duration-500 hover:shadow-white hover:shadow-md">
                  <dept.icon className="w-6 h-6" />
                </div>

                {/* Department Title and Subtitle */}
                <h3 className="text-2xl font-bold mb-1">{dept.title}</h3>
                <p className="text-sm font-light text-gray-200 mb-4">
                  {dept.subtitle}
                </p>

                {/* Click to Explore Link */}
                <span className="flex items-center space-x-1 text-sm font-semibold text-teal-300 group-hover:text-teal-500 transition duration-300">
                  <span>Click to explore</span>
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition duration-300" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicDepartments;
