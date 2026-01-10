import React from "react";
import {
  FaUserGraduate,
  FaSchool,
  FaGraduationCap,
  FaInfoCircle,
} from "react-icons/fa";

const requirementData = [
  {
    title: "Primary School (Grades 1-5)",
    icon: <FaUserGraduate />,
    color: "bg-blue-600",
    requirements: [
      "Birth certificate",
      "Previous school records (if applicable)",
      "Immunization records",
      "Two passport-size photographs",
      "Parent/guardian identification",
      "Proof of residence",
    ],
  },
  {
    title: "Middle School (Grades 6-8)",
    icon: <FaSchool />,
    color: "bg-purple-600",
    requirements: [
      "Birth certificate",
      "Academic transcripts from previous school",
      "Teacher recommendation letters (2)",
      "Entrance assessment results",
      "Two passport-size photographs",
      "Medical certificate",
    ],
  },
  {
    title: "High School (Grades 9-12)",
    icon: <FaGraduationCap />,
    color: "bg-teal-600",
    requirements: [
      "Birth certificate",
      "Complete academic transcripts",
      "Standardized test scores",
      "Teacher recommendation letters (3)",
      "Personal statement/essay",
      "Extracurricular achievements portfolio",
    ],
  },
];

const Requirements = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 data-aos="fade-left" className="section_heading">
            Admission Requirements
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Required documents and materials for each grade level
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {requirementData.map((item, index) => (
            <div
              data-aos="fade-down"
              key={index}
              className="p-8 rounded-3xl border border-gray-100 shadow-lg bg-white flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
            >
              {/* Icon Container */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl mb-6 shadow-md ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {item.title}
              </h3>

              {/* Requirements List */}
              <ul className="space-y-4 flex-grow">
                {item.requirements.map((req, rIdx) => (
                  <li key={rIdx} className="group flex items-start gap-3">
                    {/* Green Checkmark Circle */}
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold transition-all duration-500 group-hover:bg-green-600 group-hover:text-white cursor-default">
                      ✓
                    </div>
                    <span className="text-sm text-gray-600 leading-tight ">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <ImportantNote />
    </section>
  );
};

const ImportantNote = () => {
  return (
    <section className="py-12 ">
      <div data-aos="zoom-out" className="w-full mx-auto px-12 lg:px-24">
        {/* Main Banner Container */}
        <div className="bg-teal-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl max-w-full">
          {/* Information Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <FaInfoCircle className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h3
            data-aos="fade-left"
            className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight"
          >
            Important Note
          </h3>

          {/* Descriptive Text */}
          <div data-aos="fade-right" className="max-w-3xl mx-auto">
            <p className="text-teal-50 text-base md:text-lg leading-relaxed">
              All documents must be original or certified copies. International
              students may require additional documentation. Please contact our
              admissions office for specific requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
