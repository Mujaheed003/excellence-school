import React from "react";
import { journeyImg } from "../../assets/assets"

// 1. Define the data structure for the milestones
const milestones = [
  {
    year: 1985,
    title: "Foundation",
    description:
      "Our school was established with a vision to provide quality education to the community.",
    image: journeyImg.journey1, // Replace with actual image URL
    color: "bg-teal-500",
    position: "left",
  },
  {
    year: 1990,
    title: "Expansion",
    description:
      "Our school facilities insisting science his vision to quality complex to enhance learning.",
    image: journeyImg.journey2, // Replace with actual image URL
    color: "bg-green-500",
    position: "right",
  },
  {
    year: 2005,
    title: "Technology Integration",
    description:
      "Introduced computer labs and digital resources, asserting pioneering techniques in education.",
    image: journeyImg.journey3, // Replace with actual image URL
    color: "bg-blue-500",
    position: "left",
  },
  {
    year: 2015,
    title: "International Recognition",
    description:
      "Won awards and signed accoldes for accadeimz and innovative teaching methods.",
    image: journeyImg.journey4, // Replace with actual image URL
    color: "bg-red-500",
    position: "right",
  },
  {
    year: 2025,
    title: "Future Forward",
    description:
      "Continuing our legacy with state-of-the-art facilities and cutting-edge educational programs.",
    image: journeyImg.journey5, // Replace with actual image URL
    color: "bg-yellow-500",
    position: "left",
  },
];

// 2. The main React Functional Component
const OurJourney = () => {
  return (
    <div className="bg-gray-50 p-4 sm:p-8 md:p-12 rounded-3xl shadow-xl max-w-5xl mx-auto my-10">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h2 data-aos="fade-left" className="section_heading">
          Our Journey
        </h2>
        <p data-aos="fade-right" className="section_sub_heading">
          Milestones that shaped our institution
        </p>
      </header>

      {/* Timeline Container */}
      <div className="relative">
        {/* Central Line (Hidden on small screens) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden md:block"></div>

        {/* Map through the milestones array to render each event */}
        {milestones.map((event, index) => {
          // Determine the grid layout and order based on the 'position' property
          const isLeft = event.position === "left";

          // Grid setup:
          // Left items: Content (Col 1) | Image (Col 2)
          // Right items: Image (Col 1) | Content (Col 2)
          const contentStart = isLeft
            ? "md:col-start-1 md:col-end-2 md:text-right"
            : "md:col-start-2 md:col-end-3";
          const imageStart = isLeft
            ? "md:col-start-2 md:col-end-3"
            : "md:col-start-1 md:col-end-2";
          const imageOrder = isLeft ? "order-2" : "order-1";
          const contentOrder = isLeft ? "order-1" : "order-2";

          return (
            <div
              key={index}
              className="timeline-item md:grid md:grid-cols-2 md:gap-12 relative mb-12"
            >
              {/* Image Section */}
              <div
                data-aos="fade-right"
                className={`${imageStart} ${imageOrder} mt-4 md:mt-0`}
              >
                <img
                  loading="lazy"
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-xl shadow-lg border border-gray-200 transition-all duration-1000 hover:scale-105"
                />
              </div>

              {/* Content Card Section */}
              <div
                data-aos="fade-left"
                className={`${contentStart} ${contentOrder} p-4 rounded-xl bg-white shadow-lg border border-gray-100 mt-4 md:mt-0 transition-all duration-1000 hover:scale-105`}
              >
                <div
                  className={`inline-block ${event.color} text-white text-xs font-semibold px-3 py-1 rounded-full mb-2`}
                >
                  {event.year}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {event.title}
                </h3>
                <p className="text-gray-600">{event.description}</p>
              </div>

              {/* Indicator Dot (Hidden on small screens, centered on wide screens) */}
              <div
                className={`hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full ${event.color} border-4 border-white`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurJourney;
