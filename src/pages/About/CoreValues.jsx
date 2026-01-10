// CoreValues.jsx
import React from "react";
import {
  FaStar,
  FaHeart,
  FaUserFriends,
  FaLightbulb,
  FaHandsHelping,
  FaTrophy,
} from "react-icons/fa";

// Data structure (defined above)

const coreValues = [
  {
    icon: FaStar,
    title: "Excellence",
    text: "Striving for the highest standards in all aspects of education and personal development.",
    color: "teal",
  },
  {
    icon: FaHeart,
    title: "Integrity",
    text: "Fostering honesty, ethical behavior, and strong moral principles in our community.",
    color: "teal",
  },
  {
    icon: FaUserFriends,
    title: "Respect",
    text: "Valuing diversity, promoting inclusivity, and treating everyone with dignity and kindness.",
    color: "teal",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    text: "Encouraging creativity, critical thinking, and embracing new ideas and technologies.",
    color: "teal",
  },
  {
    icon: FaHandsHelping,
    title: "Compassion",
    text: "Developing empathy, social responsibility, and a commitment to serving others.",
    color: "teal",
  },
  {
    icon: FaTrophy,
    title: "Achievement",
    text: "Celebrating success, recognizing effort, and inspiring students to reach their goals.",
    color: "teal",
  },
];

const CoreValues = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 data-aos="fade-left" className="section_heading">
            Our Core Values
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            The principles that guide our educational philosophy and shape our
            community
          </p>
        </div>

        {/* Responsive Grid for Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {coreValues.map((value, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-md text-left transition duration-300 hover:shadow-xl"
            >
              {/* Icon Container (matches the image style) */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4  text-teal-50 bg-radial-[at_25%_25%] from-teal-500 to-teal-700 transition-all duration-1000 hover:rotate-360`}
              >
                <value.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
