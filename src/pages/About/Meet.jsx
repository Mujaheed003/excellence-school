import React from "react";
import { staffsImg } from "../../assets/assets"

// 1. Data Structure for the Faculty Members
const facultyData = [
  {
    name: "Dr. Elizabeth Morgan",
    role: "Principal",
    department: "Educational Leadership",
    image: staffsImg.staff1, // Replace with actual image URL
  },
  {
    name: "Prof. James Anderson",
    role: "Head of Sciences",
    department: "Physics & Chemistry",
    image: staffsImg.staff2,
  },
  {
    name: "Ms. Sarah Williams",
    role: "Mathematics Department",
    department: "Advanced Mathematics",
    image: staffsImg.staff3,
  },
  {
    name: "Mr. David Chen",
    role: "English Department",
    department: "Literature & Writing",
    image: staffsImg.staff4,
  },
  {
    name: "Dr. Maria Rodriguez",
    role: "Arts Department",
    department: "Visual Arts & Music",
    image: staffsImg.staff5,
  },
  {
    name: "Coach Michael Brown",
    role: "Physical Education",
    department: "Sports & Athletics",
    image: staffsImg.staff6,
  },
  {
    name: "Ms. Jennifer Lee",
    role: "Social Studies",
    department: "History & Geography",
    image: staffsImg.staff7,
  },
  {
    name: "Mr. Robert Taylor",
    role: "Technology Department",
    department: "Computer Science",
    image: staffsImg.staff8,
  },
];

// 2. The main React Functional Component
const Meet = () => {
  return (
    <div className="bg-white p-4 sm:p-8 md:p-12 mx-auto my-10">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 data-aos="fade-left" className="section_heading">
          Meet Our Faculty
        </h1>
        <p data-aos="fade-right" className="section_sub_heading">
          Dedicated educators committed to inspiring and guiding our students
        </p>
      </header>

      {/* Faculty Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 max-w-6xl mx-auto">
        {/* Map through the faculty data */}
        {facultyData.map((person, index) => (
          <div
            data-aos="fade-down"
            key={index}
            className="flex flex-col items-center text-center px-2 cursor-pointer transition-all duration-1000 ease-out  hover:-translate-y-4"
          >
            {/* Image Container with Hover Effect */}
            <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden shadow-lg border border-gray-100 ">
              <img
                loading="lazy"
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                // ^^^ KEY CLASSES FOR HOVER EFFECT ^^^
              />
            </div>

            {/* Text Information */}
            <h3 className="text-base font-bold text-gray-900 mb-0.5">
              {person.name}
            </h3>
            <p className="text-sm font-semibold text-teal-700 mb-0.5">
              {person.role}
            </p>
            <p className="text-xs text-gray-500">{person.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meet;
