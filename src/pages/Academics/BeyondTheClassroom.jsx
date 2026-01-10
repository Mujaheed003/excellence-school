import React from "react";
import {
  FaBasketballBall,
  FaMusic,
  FaMicroscope,
  FaUsers,
  FaGlobe,
  FaAward,
} from "react-icons/fa";

const activityData = [
  {
    title: "Sports & Athletics",
    desc: "Competitive teams in basketball, soccer, track, swimming, and more.",
    img: "../src/assets/classroom_img1.webp",
    icon: <FaBasketballBall />,
  },
  {
    title: "Arts & Music",
    desc: "Orchestra, choir, drama club, visual arts, and creative workshops.",
    img: "../src/assets/classroom_img2.jpg",
    icon: <FaMusic />,
  },
  {
    title: "STEM Clubs",
    desc: "Robotics, coding club, science olympiad, and innovation labs.",
    img: "../src/assets/classroom_img3.jpg",
    icon: <FaMicroscope />,
  },
  {
    title: "Leadership",
    desc: "Student council, debate team, model UN, and community service.",
    img: "../src/assets/classroom_img4.webp",
    icon: <FaUsers />,
  },
  {
    title: "Cultural Activities",
    desc: "International club, language societies, and culture celebrations.",
    img: "../src/assets/classroom_img5.jpg",
    icon: <FaGlobe />,
  },
  {
    title: "Academic Competitions",
    desc: "Math olympiad, spelling bee, quiz bowl, and academic challenges.",
    img: "../src/assets/classroom_img6.jpg",
    icon: <FaAward />,
  },
];

const BeyondTheClassroom = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 data-aos="fade-left" className="section_heading">
            Beyond the Classroom
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Enriching experiences that develop well-rounded individuals.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activityData.map((item, index) => (
            <div data-aos="fade-up" key={index} className="group ">
              <div className="relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:shadow-xl">
                {/* Image Layer with Hover Zoom */}
                <div className="h-52 overflow-hidden">
                  <img
                    loading="lazy"
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute h-52 inset-0 bg-black opacity-50 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>

                {/* Floating Icon Wrapper */}
                <div className="absolute top-[150px] left-6 z-20 flex items-center justify-start gap-4">
                  <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-lg ">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Content Area */}
                <div className="bg-white p-6 ">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondTheClassroom;
