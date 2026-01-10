import React from "react";
import {
  FaGraduationCap,
  FaSchool,
  FaBookReader,
  FaStar,
} from "react-icons/fa";

const programs = [
  {
    title: "Primary Education",
    grades: "Grades 1-5",
    description:
      "Building strong foundations in core subjects with hands-on learning experiences.",
    subjects: [
      "English",
      "Mathematics",
      "Science",
      "Social Studies",
      "Arts",
      "Physical Education",
    ],
    icon: <FaBookReader />,
    color: "blue",
  },
  {
    title: "Middle School",
    grades: "Grades 6-8",
    description:
      "Developing critical thinking and analytical skills through challenging coursework.",
    subjects: [
      "Advanced Math",
      "Biology",
      "Chemistry",
      "Physics",
      "Literature",
      "Foreign Languages",
    ],
    icon: <FaSchool />,
    color: "yellow",
  },
  {
    title: "High School",
    grades: "Grades 9-12",
    description:
      "College preparatory programs with advanced placement and honors courses.",
    subjects: [
      "AP Courses",
      "Calculus",
      "Advanced Sciences",
      "Humanities",
      "Computer Science",
      "Economics",
    ],
    icon: <FaGraduationCap />,
    color: "teal",
  },
  {
    title: "Special Programs",
    grades: "All Grades",
    description:
      "Enrichment opportunities that foster creativity, innovation, and personal growth.",
    subjects: [
      "STEM",
      "Arts & Music",
      "Athletics",
      "Leadership",
      "Community Service",
      "Robotics",
    ],
    icon: <FaStar />,
    color: "orange",
  },
];

const AcademicPrograms = () => {
  const colorClasses = {
    blue: {
      bg600: "bg-blue-600",
      hoverBg100: "hover:bg-blue-100",
    },
    yellow: {
      bg600: "bg-yellow-600",
      hoverBg100: "hover:bg-yellow-100",
    },
    teal: {
      bg600: "bg-teal-600",
      hoverBg100: "hover:bg-teal-100",
    },
    orange: {
      bg600: "bg-orange-600",
      hoverBg100: "hover:bg-orange-100",
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 data-aos="fade-left" className="section_heading">
            Academic Programs
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Comprehensive programs tailored to each developmental stage
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programs.map((program, idx) => (
            <div
              data-aos="fade-up"
              key={idx}
              className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer"
            >
              {/* Decorative Corner Background */}
              <div
                className={`absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 bg-${program.color}-500 transition-transform duration-500 group-hover:scale-150`}
              ></div>

              {/* Icon with Blinking Light Effect */}
              <div
                className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center text-white shadow-lg animate-blink-light bg-${program.color}-500 group-hover:rotate-12 transition duration-500`}
              >
                <span className="text-2xl">{program.icon}</span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900">
                  {program.title}
                </h3>
                <p className={`text-sm font-semibold mb-4 text-teal-600`}>
                  {program.grades}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Key Subjects Badges */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Key Subjects:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {program.subjects.map((subject, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1 text-xs font-medium rounded-full border border-transparent ${
                        colorClasses[program.color].bg600
                      } text-white transition transform group-hover:scale-105 duration-1000`}
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
