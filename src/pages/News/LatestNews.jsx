import React, { useState } from "react";
import { newsImg } from "../../assets/assets";
import {
  FaUserCircle,
  FaArrowRight,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";

const newsData = [
  {
    id: 1,
    category: "Achievements",
    title: "Students Win National Science Competition",
    date: "March 15, 2024",
    author: "Dr. Sarah Johnson",
    desc: "Our robotics team secured first place at the National Science Olympiad, showcasing exceptional innovation. They competed against 50 top schools nationwide, developing a low-cost water filtration robot that can be deployed in rural areas.",
    img: newsImg.news1,
  },
  {
    id: 2,
    category: "Academic",
    title: "New STEM Lab Opens for Students",
    date: "March 12, 2024",
    author: "Principal Mark Davis",
    desc: "State-of-the-art STEM laboratory equipped with cutting-edge technology now available for all grade levels. This facility includes 3D printers, VR learning stations, and advanced chemistry modules to prepare students for the future.",
    img: newsImg.news2,
  },
  {
    id: 3,
    category: "Sports",
    title: "Basketball Team Wins Regional Championship",
    date: "March 10, 2024",
    author: "Coach Michael Brown",
    desc: "Our varsity basketball team clinched the regional championship with an impressive undefeated season. The final match was won by a dramatic 3-pointer in the last 5 seconds, securing their spot in the upcoming state finals.",
    img: newsImg.news3,
  },
  {
    id: 4,
    category: "Events",
    title: "Annual Cultural Festival Celebrates Diversity",
    date: "March 8, 2024",
    author: "Ms. Emily Chen",
    desc: "Students from various backgrounds showcased their heritage through music, dance, and traditional cuisine. The event featured over 20 different country stalls and a grand parade in the school auditorium.",
    img: newsImg.news4,
  },
  {
    id: 5,
    category: "Academic",
    title: "International Exchange Program Launched",
    date: "March 5, 2024",
    author: "Dr. Robert Wilson",
    desc: "New exchange program established with partner schools in Europe and Asia. Selected students will have the opportunity to study abroad for a semester, fostering global awareness and cultural exchange.",
    img: newsImg.news5,
  },
  {
    id: 6,
    category: "Achievements",
    title: "Art Students Featured in City Gallery",
    date: "March 3, 2024",
    author: "Ms. Lisa Anderson",
    desc: "Exceptional artwork from our art students is being showcased in the downtown city gallery this month. The exhibition includes paintings, sculptures, and digital art pieces that highlight contemporary themes and personal expression.",
    img: newsImg.news6,
  },
];

const categories = ["All News", "Academic", "Sports", "Events", "Achievements"];

const LatestNews = () => {
  const [activeTab, setActiveTab] = useState("All News");
  const [selectedNews, setSelectedNews] = useState(null); // State for Modal

  const filteredNews =
    activeTab === "All News"
      ? newsData
      : newsData.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 data-aos="fade-left" className="section_heading">
            Latest News
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Discover what's happening in our school community
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              data-aos="fade-down"
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`hidden lg:flex px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2 cursor-pointer
                ${
                  activeTab === cat
                    ? "bg-radial-[at_25%_25%] from-teal-500 to-teal-600 border-teal-600 text-white shadow-lg"
                    : "bg-white border-gray-100 text-gray-500 hover:border-teal-200 hover:text-teal-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div
              data-aos="fade-up"
              key={item.id}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={item.title}
                />
                <span className="absolute top-4 left-4 bg-teal-600/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <FaCalendarAlt size={10} />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-teal-500 text-xl" />
                    <span className="text-xs font-bold text-gray-700">
                      {item.author}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedNews(item)}
                    className="text-teal-600 font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                  >
                    Read More <FaArrowRight size={10} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- ANIMATED MODAL --- */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-1000 ${
          selectedNews
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedNews(null)}
        ></div>

        {/* Modal Box */}
        <div
          className={`relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform ${
            selectedNews ? "scale-100 translate-y-0" : "scale-90 translate-y-10"
          }`}
        >
          {selectedNews && (
            <>
              {/* Close Button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 text-white backdrop-blur-md rounded-full transition-all"
              >
                <FaTimes size={20} />
              </button>

              {/* Modal Image */}
              <div className="h-64 md:h-80 w-full">
                <img
                  src={selectedNews.img}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-[10px] font-bold uppercase tracking-wider mb-4">
                  {selectedNews.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                  {selectedNews.title}
                </h2>

                <div className="flex items-center gap-6 mb-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-teal-500" />
                    <span>{selectedNews.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-teal-500" />
                    <span>By {selectedNews.author}</span>
                  </div>
                </div>

                <div className="h-px bg-gray-100 mb-6"></div>

                <p className="text-gray-600 leading-relaxed text-lg italic mb-6 overflow-y-auto scroll-smooth">
                  {selectedNews.desc}
                </p>

                <button
                  onClick={() => setSelectedNews(null)}
                  className="w-full py-4 bg-teal-600 text-white font-bold rounded-2xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-200 cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
