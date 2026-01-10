import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="py-20 px-6">
      <div
        data-aos="zoom-out"
        className="max-w-7xl mx-auto overflow-hidden rounded-[40px] relative shadow-2xl"
      >
        {/* --- BACKGROUND IMAGE LAYER --- */}
        <div
          className="bg-fixed absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: "url('../public/home_bck_img2.jpg')",
          }}
        >
          {/* Dark Teal Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/80 backdrop-blur-[2px]"></div>
        </div>

        {/* Content Container */}
        <div className="py-20 px-8 md:px-12 text-center text-white relative z-10">
          {/* Icon Badge */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-md border border-white/30 animate-pulse">
              <FaEnvelope />
            </div>
          </div>

          {/* Text Content */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md">
            Stay in the Loop
          </h2>
          <p className="text-teal-50 max-w-2xl mx-auto mb-10 text-lg opacity-95 drop-shadow-sm font-medium">
            Subscribe to our newsletter for the latest updates, events, and
            announcements from our school community.
          </p>

          {/* Subscription Form */}
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-2xl border-none text-gray-100 placeholder:text-gray-400 focus:ring-4 focus:ring-teal-500/50 outline-none text-sm font-medium shadow-xl"
              required
            />
            <button
              type="submit"
              className="cursor-pointer px-10 py-4 bg-teal-500 text-white font-bold rounded-2xl hover:bg-teal-400 transition-all shadow-xl active:scale-95 border border-teal-400/50"
            >
              Subscribe
            </button>
          </form>

          {/* Privacy Note */}
          <p className="mt-8 text-[10px] text-teal-200 font-bold uppercase tracking-widest opacity-80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
