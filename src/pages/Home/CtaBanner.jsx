import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Icon for the button
import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";

const CtaBanner = () => {
  function getAcademicSession() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    // October 9
    const startYear = month >= 9 ? year : year - 1;
    const endYear = startYear + 1;

    // return `October, ${startYear} - August, ${endYear}`;
    return `${startYear} - ${endYear}`;
  }

  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Banner Container */}
        <div className="relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image and Overlay */}
          <div
            className="w-full h-full min-h-[300px] md:min-h-[350px] bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('./public/home_bck_img2.jpg')",
            }} // Replace with your image path
            aria-hidden="true"
          >
            {/* Dark Overlay for Text Readability (matching the image) */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          {/* Content Layer (Text and Button) */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 md:p-16 text-white">
            {/* Text Group */}
            <div className="mb-6 md:mb-0 max-w-lg text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Ready to Join?
              </h2>
              <p className="text-base sm:text-lg mt-2 text-gray-200">
                Admissions open for {getAcademicSession()} academic year
              </p>
            </div>

            {/* Apply Now Button */}
            <Button to="/admissions" type="primary">
              <span>Apply Now</span>
              <FaArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
