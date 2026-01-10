import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Popup from "../../ui/Popup";

const ApplicationForm = () => {
  const [charCount, setCharCount] = useState(0);
  const [result, setResult] = React.useState("");
  const [popup, setPopup] = React.useState({
    show: false,
    type: "", // "success" | "error"
    message: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8ebd0e55-9479-4312-b0d7-312ad7011410");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setPopup({
        show: true,
        type: "success",
        message: "Form submitted successfully! We’ll get back to you soon.",
      });
      event.target.reset();
    } else {
      setPopup({
        show: true,
        type: "error",
        message: data.message || "Something went wrong. Please try again.",
      });
    }
    setResult("");
  };

  return (
    <section className="py-20 bg-gray-50/30">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 data-aos="fade-left" className="section_heading">
            Start Your Application
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Fill out the form below and our admissions team will contact you
            shortly
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={onSubmit}
          data-aos="fade-down"
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Student Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">
                Student Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter student's full name"
                className="sm_input"
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input type="date" className="sm_input cursor-pointer" required />
            </div>

            {/* Applying for Grade */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">
                Applying for Grade <span className="text-red-500">*</span>
              </label>
              <select className="sm_input cursor-pointer" required>
                <option>Select grade</option>
                <option>Primary School (1-5)</option>
                <option>Middle School (6-8)</option>
                <option>High School (9-12)</option>
              </select>
            </div>

            {/* Parent/Guardian Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">
                Parent/Guardian Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter parent/guardian name"
                className="sm_input"
                required
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="yourname@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all outline-none text-sm"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+234 123 4567 890"
                className="sm_input"
                required
              />
            </div>
          </div>

          {/* Full Width Fields */}
          <div className="space-y-6">
            {/* Home Address */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">
                Home Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Street address, City, State, ZIP"
                className="lg_input"
                required
              />
            </div>

            {/* Previous School */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">
                Previous School (if applicable)
              </label>
              <input
                type="text"
                placeholder="Name of previous school"
                className="lg_input"
              />
            </div>

            {/* Additional Information */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">
                Additional Information
              </label>
              <textarea
                rows="4"
                maxLength="500"
                onChange={(e) => setCharCount(e.target.value.length)}
                placeholder="Any additional information you'd like to share (max 500 characters)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all outline-none text-sm resize-none"
              ></textarea>
              <span className="text-[10px] text-gray-400 self-end font-medium uppercase tracking-wider">
                {charCount}/500 characters
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-10 bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-3 group active:scale-[0.98] cursor-pointer"
          >
            <span> {result ? result : "Submit Application"}</span>
            <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
        {popup.show && <Popup popup={popup} setPopup={setPopup} />}
      </div>
    </section>
  );
};

export default ApplicationForm;
