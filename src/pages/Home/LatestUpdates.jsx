// LatestUpdates.jsx
import React, { useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { latestImg } from "../../assets/assets";

// --- Data Structure (Same as before) ---
const updatesData = [
  {
    id: 1, // Added ID for tracking
    title: "Annual Science Fair Winners Announced",
    date: "Mar 15",
    text: "Congratulations to all participants in this year's science fair. Outstanding projects showed innovation and...",
    fullContent:
      "The 2025 Annual Science Fair concluded successfully with a ceremony recognizing the innovative work of our students. First place went to Sarah Chen for her project on sustainable water filtration, demonstrating advanced engineering concepts. The event featured over 50 projects spanning biology, physics, and computer science, highlighting the strength of our STEM program.",
    imagePath: latestImg.latest1,
    categoryColor: "bg-green-500",
  },
  {
    id: 2,
    title: "Spring Sports Season Kicks Off",
    date: "Mar 10",
    text: "Our athletic teams are ready for an exciting spring season. Come support our students at upcoming...",
    fullContent:
      "The spring sports season is officially underway! Teams for Soccer, Track & Field, and Lacrosse have begun practice. We encourage all students and parents to check the school calendar for game schedules and come out to support our talented athletes as they compete in the regional leagues.",
    imagePath: latestImg.latest2,
    categoryColor: "bg-orange-500",
  },
  {
    id: 3,
    title: "New STEM Lab Opens Next Month",
    date: "Mar 5",
    text: "State-of-the-art STEM laboratory will provide students with cutting-edge technology and hands-on...",
    fullContent:
      "We are thrilled to announce the opening of our new STEM laboratory next month. This facility is equipped with the latest technology, including 3D printers, robotics kits, and virtual reality stations. The lab will enhance our curriculum by providing students with hands-on learning experiences that foster creativity and innovation in science, technology, engineering, and mathematics.",
    imagePath: latestImg.latest3, // Placeholder
    categoryColor: "bg-blue-500",
  },
  {
    id: 4,
    title: "Student Art Exhibition Success",
    date: "Feb 28",
    text: "Our talented students showcased their artistic abilities in a stunning exhibition that drew praise from...",
    fullContent:
      "The Student Art Exhibition held last weekend was a resounding success, featuring works from over 100 students across various grade levels. The exhibition highlighted diverse mediums, including painting, sculpture, and digital art. Visitors praised the creativity and skill displayed, and several pieces were sold to support the school's art program. We look forward to continuing to nurture our students' artistic talents in future events.",
    imagePath: latestImg.latest4, // Placeholder
    categoryColor: "bg-pink-500",
  },
];

// --- Modal Component ---
const DetailsModal = ({ update, onClose }) => {
  if (!update) return null;

  return (
    // Modal Overlay Background
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-md bg-opacity-10  flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      {/* Modal Content Box */}
      <div
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
          <h3 className="text-2xl font-bold text-gray-900">{update.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 transition duration-200"
            aria-label="Close"
          >
            <FaTimes className="w-6 h-6 cursor-pointer" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6">
          {/* Image */}
          <div className="mb-6 rounded-lg overflow-hidden h-64">
            <img
              src={update.imagePath}
              alt={update.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Date Badge */}
          <span
            className={`px-3 py-1 text-xs font-bold text-white rounded-lg ${update.categoryColor} shadow-md mb-4 inline-block`}
          >
            Published: {update.date}
          </span>

          {/* Full Content */}
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {update.fullContent}
          </p>

          {/* Add more details here if needed */}
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const LatestUpdates = () => {
  // State to manage the open/closed status and the data to display
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUpdate, setSelectedUpdate] = useState(null);

  const handleReadMoreClick = (update, event) => {
    event.preventDefault(); // Stop the link from navigating
    setSelectedUpdate(update);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUpdate(null);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ... Section Header (Same as before) ... */}
        <div className="flex justify-between items-end mb-12 md:mb-16 border-b border-gray-200 pb-2">
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
              Latest Updates
            </h2>
            <p className="text-gray-600 mt-1">
              Stay informed about school news and events
            </p>
          </div>
          {/* View All Button */}
          <a
            data-aos="fade-right"
            href="/news"
            className="flex items-center space-x-2 text-teal-600 font-semibold hover:text-teal-800 transition duration-300 whitespace-nowrap"
          >
            <span>View All</span>
            <FaArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Responsive Grid for News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {updatesData.map((item, index) => (
            <div
              data-aos="fade-up" // Changed anchor to div to control the click propagation more easily
              key={index}
              className="bg-white cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition duration-1000 overflow-hidden group"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.imagePath}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition duration-500 ease-in-out group-hover:scale-110"
                />
                {/* Date Badge */}
                <span
                  className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold text-white rounded-lg ${item.categoryColor} shadow-md`}
                >
                  {item.date}
                </span>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-600 transition duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.text}
                </p>

                {/* Read More Link (Clickable to open modal) */}
                <a
                  href="#" // Using # since the navigation is handled by the modal
                  onClick={(e) => handleReadMoreClick(item, e)}
                  className="flex items-center space-x-1 text-sm text-teal-500 font-medium group-hover:text-teal-700 transition duration-300"
                >
                  <span>Read More</span>
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render the Modal if isModalOpen is true */}
      {isModalOpen && (
        <DetailsModal update={selectedUpdate} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default LatestUpdates;
