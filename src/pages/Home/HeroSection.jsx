import React from "react";
import { ReactTyped } from "react-typed";
import Button from "../../ui/Button";

// --- Tailwind Configuration (Assumptions) ---
// I'll use a common 'blue-900' for the main branding color
// and a semi-transparent black overlay for the background image effect.
// --- Hero Section Component ---
const HeroSection = () => {
  // const footerBgColor = "bg-teal-700";
  // const textColor = "text-white";
  const date = new Date().getFullYear();
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image (Replace with your actual image source) */}
      {/* Note: In a real app, you would use a proper path or asset */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('../public/home_bck_img.jpg')" }}
      >
        {/* Semi-transparent Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Layer */}
      <div
        data-aos="fade-up"
        className="relative text-center text-white p-4 max-w-4xl mx-auto"
      >
        {/* Tagline */}
        <p className="hidden  text-sm tracking-widest transparent bg-opacity-70 sm:inline-block px-3 py-1 mb-4 rounded-full font-medium border border-amber-50">
          <ReactTyped
            strings={[
              "Established 1988 • Excellence in Education",
              `Till date ${date}`,
            ]}
            typeSpeed={30}
            backSpeed={40}
            loop={true}
          />
        </p>

        {/* Main Headline */}
        <h1
          data-aos="fade-up"
          className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-12  sm:leading-20 mb-4"
        >
          Welcome To Excellence School, Minna
        </h1>

        {/* Subtext */}
        <p
          data-aos="fade-up"
          className="text-base sm:text-lg mb-10 font-light max-w-2xl mx-auto"
        >
          Empowering students with knowledge, character, and skills for a
          brighter future through innovative education and holistic development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button aos="fade-right" type="homeBtnBg" to="/news&events">
            Schedule a Visit
            <span className="ml-2">→</span>
          </Button>
          {/* <a
            href="#schedule"
            className="flex items-center justify-center px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 transition duration-300 font-semibold shadow-lg"
          >
            Schedule a Visit
            <span className="ml-2">→</span>
          </a>
          <a
            href="#tour"
            className="flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-teal-800 transition duration-300 font-semibold"
          >
            <span className="mr-2">ⓘ</span> Virtual Tour
          </a> */}
          <Button aos="fade-left" type="homeBtnTransparent" to="/gallery">
            <span className="mr-2">ⓘ</span> Virtual Tour
          </Button>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <a href="#whyChooseUs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default HeroSection;
