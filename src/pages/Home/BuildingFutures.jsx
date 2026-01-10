import React from "react";
import { FaArrowRight } from "react-icons/fa"; // For the arrow in the button
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";

const BuildingFutures = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Two-Column Layout (Reverses on Large Screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* 1. Image Column (Order 1 on small, Order 2 on large) */}
          {/* The image is slightly elevated and has rounded corners */}
          <div
            data-aos="fade-right"
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="rounded-3xl shadow-2xl overflow-hidden max-w-md w-full lg:max-w-full">
              {/* Replace with your actual image path */}
              <img
                loading="lazy"
                src={assets.BuildingImg}
                alt="Students collaborating and smiling"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* 2. Text Content Column (Order 2 on small, Order 1 on large) */}
          <div data-aos="fade-left" className="order-1 lg:order-2 space-y-6">
            {/* Tagline / Context Badge */}
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">
              About Our School
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Building Futures Through Quality Education
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-600 leading-relaxed">
              For over 25 years, we have been committed to providing exceptional
              education that prepares students for success in an ever-changing
              world. Our dedicated faculty and staff work tirelessly to create a
              nurturing environment where every student can thrive.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We believe in developing not just academic excellence, but also
              strong character, critical thinking skills, and a passion for
              lifelong learning. Our comprehensive programs ensure that each
              student receives personalized attention and support.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With state of the art facilities, innovative teaching methods, and
              a vibrant community, we provide the perfect foundation for your
              child's educational journey.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button to="/about" type="secondary" aos="fade-right">
                <span>Learn More</span>
                <FaArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingFutures;
