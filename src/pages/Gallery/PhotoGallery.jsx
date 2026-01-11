import React, { useState } from "react";
import { galleriesImg } from "../../assets/assets";
import {
  FaImage,
  FaUniversity,
  FaCalendarAlt,
  FaBasketballBall,
  FaPallet,
  FaBookOpen,
} from "react-icons/fa";

import {
  FaSearchPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const galleryData = [
  {
    id: 1,
    category: "Campus Life",
    title: "Main Campus Building",
    img: galleriesImg.gallery1,
  },
  {
    id: 2,
    category: "Events",
    title: "Annual Day Celebration",
    img: galleriesImg.gallery2,
  },
  {
    id: 3,
    category: "Sports",
    title: "Basketball Tournament",
    img: galleriesImg.gallery3,
  },
  {
    id: 4,
    category: "Art & Culture",
    title: "Art Class in Action at the Garden",
    img: galleriesImg.gallery4,
  },
  {
    id: 5,
    category: "Academics",
    title: "Science Liboratory",
    img: galleriesImg.gallery5,
  },
  {
    id: 6,
    category: "Campus Life",
    title: "School Library",
    img: galleriesImg.gallery6,
  },
  {
    id: 7,
    category: "Events",
    title: "Graduation Ceremony",
    img: galleriesImg.gallery7,
  },
  {
    id: 8,
    category: "Sports",
    title: "Track & Feild Day",
    img: galleriesImg.gallery8,
  },
  {
    id: 9,
    category: "Campus Life",
    title: "Play Class",
    img: galleriesImg.gallery9,
  },
  {
    id: 10,
    category: "Academics",
    title: "Robotics Club",
    img: galleriesImg.gallery10,
  },
  {
    id: 11,
    category: "Campus Life",
    title: "School Cafteria",
    img: galleriesImg.gallery11.
  },
  {
    id: 12,
    category: "Events",
    title: "Cultural Festival",
    img: galleriesImg.gallery12,
  },
];

const categories = [
  { text: "All Photos", icon: <FaImage /> },
  { text: "Campus Life", icon: <FaUniversity /> },
  { text: "Events", icon: <FaCalendarAlt /> },
  { text: "Sports", icon: <FaBasketballBall /> },
  { text: "Art & Culture", icon: <FaPallet /> },
  { text: "Academics", icon: <FaBookOpen /> },
];

const PhotoGallery = () => {
  const [activeTab, setActiveTab] = useState("All Photos");
  const [currentIndex, setCurrentIndex] = useState(null);

  // 1. Get filtered list based on the active tab
  const filteredItems =
    activeTab === "All Photos"
      ? galleryData
      : galleryData.filter((item) => item.category === activeTab);

  // 2. Navigation Logic
  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  const selectedImage =
    currentIndex !== null ? filteredItems[currentIndex] : null;

  return (
    <section className="py-20 bg-teal-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 data-aos="fade-left" className="section_heading">
            Photo Gallery
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Browse through our collection of memorable moments
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              data-aos="fade-down"
              key={cat.text}
              onClick={() => {
                setActiveTab(cat.text);
                setCurrentIndex(null);
              }}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-500 border-2 hidden xl:flex justify-between items-center gap-2 cursor-pointer
                ${
                  activeTab === cat.text
                    ? "bg-radial-[at_25%_25%] from-teal-500 to-teal-600 border-teal-600 text-white shadow-lg"
                    : "bg-white border-gray-100 text-gray-500 hover:border-teal-200 hover:text-teal-600"
                }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.text}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              data-aos="fade-up"
              key={item.id}
              className="group relative h-64 overflow-hidden rounded-2xl shadow-md cursor-pointer border border-gray-100"
              onClick={() => setCurrentIndex(index)}
            >
              <img
                loading="lazy"
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/80 text-teal-500 rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <FaSearchPlus size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- LIGHTBOX OVERLAY --- */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 select-none"
            onClick={() => setCurrentIndex(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors z-[110] cursor-pointer"
              onClick={() => setCurrentIndex(null)}
            >
              <FaTimes size={32} />
            </button>

            {/* Previous Arrow */}
            <button
              className="absolute left-4 md:left-10 text-white/50 hover:text-teal-400 transition-all z-[110] p-4 group"
              onClick={handlePrev}
            >
              <FaChevronLeft
                size={40}
                className="group-hover:-translate-x-1 transition-transform cursor-pointer"
              />
            </button>

            {/* Next Arrow */}
            <button
              className="absolute right-4 md:right-10 text-white/50 hover:text-teal-400 transition-all z-[110] p-4 group"
              onClick={handleNext}
            >
              <FaChevronRight
                size={40}
                className="group-hover:translate-x-1 transition-transform cursor-pointer"
              />
            </button>

            {/* Image Container */}
            <div
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto rounded-lg shadow-2xl animate-in zoom-in duration-300 border-4 border-white/10"
              />
              <div className="mt-8 text-center">
                <p className="text-teal-400 font-bold uppercase tracking-widest text-xs mb-2">
                  {selectedImage.category}
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-semibold italic tracking-wider">
                  {selectedImage.title}
                </h3>
                <p className="text-white/40 text-sm mt-4 font-mono">
                  {currentIndex + 1} / {filteredItems.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
