import React from "react";
import { FaHome, FaArrowLeft, FaEnvelope } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-3xl w-full text-center relative z-10">
        {/* Large 404 Text */}
        <h1 className="text-[8rem] sm:text-[12rem] md:text-[16rem] font-black text-gray-200 leading-none select-none">
          404
        </h1>

        {/* Error Message */}
        <div className="mt-[-4rem] md:mt-[-6rem]">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 w-full sm:w-auto justify-center cursor-pointer"
          >
            <FaArrowLeft size={14} /> Go Back
          </button>

          <a
            href="/"
            className="cursor-pointer flex items-center gap-2 px-8 py-4 bg-teal-600 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/20 hover:bg-teal-700 transition-all active:scale-95 w-full sm:w-auto justify-center"
          >
            <FaHome size={16} /> Return Home
          </a>
        </div>

        {/* Help Link */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col items-center gap-2">
          <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">
            Need Assistance?
          </p>
          <a
            href="/contact"
            className="text-teal-600 font-bold flex items-center gap-2 hover:underline"
          >
            <FaEnvelope size={14} /> Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
