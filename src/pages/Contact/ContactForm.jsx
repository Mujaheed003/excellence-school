import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Popup from "../../ui/Popup";

const ContactForm = () => {
  const [charCount, setCharCount] = useState(0);
  const [result, setResult] = React.useState("");
  const [popup, setPopup] = React.useState({
    show: false,
    type: "", // "success" | "error"
    message: "",
  });

  const handleOnSubmit = async (event) => {
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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 data-aos="fade-left" className="section_heading">
            Send Us a Message
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Fill out the form below and we'll get back to you as soon as
            possible
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleOnSubmit}
          data-aos="fade-up"
          className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="sm_input"
                required
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="sm_input"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+234 012 3456 789"
                className="sm_input"
              />
            </div>

            {/* Subject Select */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Subject <span className="text-red-500">*</span>
              </label>
              <select className="sm_input cursor-pointer" required>
                <option>Select a subject</option>
                <option>General Inquiry</option>
                <option>Admissions Question</option>
                <option>Technical Support</option>
                <option>Feedback</option>
              </select>
            </div>
          </div>

          {/* Message Area */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              maxLength="500"
              onChange={(e) => setCharCount(e.target.value.length)}
              placeholder="Tell us how we can help you (max 500 characters)"
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50/30 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all outline-none text-sm resize-none placeholder:text-gray-300"
              required
            ></textarea>
            <div className="flex justify-start ml-1">
              <span className="text-[10px] text-gray-400 font-bold tracking-tighter uppercase">
                {charCount}/500 characters
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-10 bg-[#4ca091] hover:bg-[#3d8276] text-white font-bold py-5 rounded-2xl shadow-xl shadow-teal-500/10 transition-all flex items-center justify-center gap-3 group active:scale-[0.98] cursor-pointer"
          >
            <span className="tracking-wide">
              {result ? result : "Send Message"}
            </span>
            <FaPaperPlane className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </form>
        {popup.show && <Popup popup={popup} setPopup={setPopup} />}
      </div>
    </section>
  );
};

export default ContactForm;
