import React from "react";
import {
  FaUserGraduate,
  FaTrophy,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";

const statsData = [
  {
    icon: <FaUserGraduate />,
    value: "2500+",
    label: "Successful Graduates",
    color: "bg-blue-600",
    delay: "delay-0", // Starts immediately
  },
  {
    icon: <FaTrophy />,
    value: "150+",
    label: "Academic Awards",
    color: "bg-teal-500",
    delay: "delay-75", // Slight offset
  },
  {
    icon: <FaGraduationCap />,
    value: "98%",
    label: "College Acceptance",
    color: "bg-purple-600",
    delay: "delay-100", // More offset
  },
  {
    icon: <FaChartLine />,
    value: "95%",
    label: "Average Test Score",
    color: "bg-orange-500",
    delay: "delay-150", // Final offset
  },
];

const Excellence = () => {
  return (
    <section className="bg-[#111827] py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 data-aos="fade-left" className="section_heading_color">
            Academic Excellence
          </h2>
          <p data-aos="fade-right" className="section_sub_heading_color">
            Our commitment to excellence is reflected in our outstanding
            achievements.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {statsData.map((stat, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="flex flex-col items-center group"
            >
              {/* Bouncing Icon Circle */}
              <div
                className={`w-16 h-16 ${stat.color} text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-lg 
                animate-bounce ${stat.delay} transition-transform duration-300 group-hover:scale-110 group-hover:animate-none`}
              >
                {stat.icon}
              </div>

              {/* Data Value */}
              <div className="text-4xl md:text-5xl font-semibold text-white mb-2 tracking-tight">
                {stat.value}
              </div>

              {/* Description */}
              <div className="text-gray-400 font-medium uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excellence;
