import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-[60vh] md:h-[70vh] flex items-center z-0">
      {/* Background Image Container */}
      {/* Note: Use a dedicated CSS class or module for the background image path in a real app */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('../public/section_bck_img.jpg')" }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Text Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-white"
      >
        {/* Breadcrumbs */}
        <p className="text-sm mb-2 opacity-80">
          <Link to="/">Home</Link> /{" "}
          <span className="font-semibold">Section</span>
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
          Our Section
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl font-light max-w-2xl">
          Explore our diverse departments and specialized programs designed to
          nurture every student's potential
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
