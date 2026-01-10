import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaHeadset,
  FaUserFriends,
  FaBriefcase,
} from "react-icons/fa";

const contactData = [
  {
    title: "Visit Us",
    info: "123 Education Street",
    subInfo: "Springfield, ST 12345",
    icon: <FaMapMarkerAlt />,
    color: "bg-blue-600",
  },
  {
    title: "Call Us",
    info: "+1 (555) 123-4567",
    subInfo: "Mon-Fri: 8:00 AM - 5:00 PM",
    icon: <FaPhoneAlt />,
    color: "bg-teal-600",
  },
  {
    title: "Email Us",
    info: "info@excellenceschool.edu",
    subInfo: "We reply within 24 hours",
    icon: <FaEnvelope />,
    color: "bg-purple-600",
  },
  {
    title: "Office Hours",
    info: "Monday - Friday",
    subInfo: "8:00 AM - 5:00 PM",
    icon: <FaClock />,
    color: "bg-orange-500",
  },
];

const departments = [
  {
    label: "Admissions Office",
    email: "admissions@excellenceschool.edu",
    phone: "+1 (555) 123-4568",
    icon: <FaHeadset />,
    color: "bg-teal-500",
  },
  {
    label: "Parent Relations",
    email: "parents@excellenceschool.edu",
    phone: "+1 (555) 123-4569",
    icon: <FaUserFriends />,
    color: "bg-blue-600",
  },
  {
    label: "Careers",
    email: "careers@excellenceschool.edu",
    phone: "+1 (555) 123-4570",
    icon: <FaBriefcase />,
    color: "bg-purple-600",
  },
];

const ReachUs = () => {
  return (
    <section className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 data-aos="fade-left" className="section_heading">
            How to Reach Us
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Multiple ways to connect with our team
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactData.map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              {/* Blinking Icon Container */}
              <div
                className={`
                w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-6
                ${item.color} animate-blink shadow-lg
              `}
              >
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-800">
                  {item.info}
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {item.subInfo}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Department Info Wide Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {departments.map((dept, idx) => (
              <div
                data-aos="fade-up"
                key={idx}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg mb-4 ${dept.color} shadow-sm`}
                >
                  {dept.icon}
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-2">
                  {dept.label}
                </h4>
                <p className="text-[13px] text-gray-500 mb-1">{dept.email}</p>
                <p className="text-[13px] text-gray-500 font-medium">
                  {dept.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for Continuous Blinking */}
      <style jsx global>{`
        @keyframes blinkOpacity {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-blink {
          animation: blinkOpacity 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ReachUs;
