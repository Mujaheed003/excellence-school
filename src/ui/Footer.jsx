import React, { useState } from "react";
import AutoClosePopup from "./AutoClosePopup";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Using FaXTwitter for the new X logo
import { assets } from "../assets/assets";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: FaFacebookF, url: "#", label: "Facebook" },
  { icon: FaXTwitter, url: "#", label: "Twitter/X" },
  { icon: FaInstagram, url: "#", label: "Instagram" },
  { icon: FaLinkedinIn, url: "#", label: "LinkedIn" },
];

const Footer = () => {
  // A rich teal/green color based on the image
  const footerBgColor = "bg-teal-700";
  const textColor = "text-white";

  const [result, setResult] = React.useState("");
  // const [popup, setPopup] = React.useState({
  //   show: false,
  //   type: "", // "success" | "error"
  //   message: "",
  // });

  const [popup, setPopup] = useState({
    show: false,
    type: "success",
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
        message: "Your Subscription has been submitted successfully!",
      });
      event.target.reset();
    } else {
      setPopup({
        show: true,
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
    setResult("");
  };

  return (
    <footer
      className={`${footerBgColor} ${textColor} font-sans pt-16 md:pt-20`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Grid Layout: 1 column on small, 2 on medium, 4 on large */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-12 border-b border-teal-600">
          {/* 1. Branding & Social Links */}
          <div data-aos="fade-right" className="space-y-6">
            {/* Logo and Name */}
            <div className="flex items-center space-x-2">
              {/* Replace with your actual logo component or image */}
              <div className="w-10 h-10">
                {/* Placeholder for shield logo */}
                {/* <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-blue-400"
                >
                  <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm5 10.74c0 3.19-1.31 5.4-5 6.45-3.69-1.05-5-3.26-5-6.45V7.56l5-2.25 5 2.25v5.18z" />
                </svg> */}

                <img src={assets.logo} alt="" />
              </div>
              <span className="text-xl font-bold">Excellence School</span>
            </div>

            {/* Tagline */}
            <p className="text-sm text-teal-200 leading-relaxed">
              Shaping tomorrow's leaders through innovative education,
              instruction, and character development since 1988.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 hover:bg-white hover:text-teal-700 transition duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div data-aos="fade-up">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-teal-200">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="hover:text-white transition duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div data-aos="fade-down">
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm text-teal-200">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 text-white" />
                <p>123 Education Street, Knowledge City, ST 12345</p>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-white" />
                <a
                  href="tel:+16001234567"
                  className="hover:text-white transition duration-200"
                >
                  +234 913 6940 503
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-white" />
                <a
                  href="mailto:info@school.edu"
                  className="hover:text-white transition duration-200"
                >
                  info@school.edu.ng
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-4 h-4"></div> {/* Spacer for alignment */}
                <p>Mon - Fri: 9:00 AM - 4:00 PM</p>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter Subscription */}
          <div data-aos="fade-left">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-teal-200 mb-4">
              Subscribe to receive news and updates from our school.
            </p>

            {/* Subscription Form (Simple) */}
            <form onSubmit={handleOnSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 text-sm text-gray-800 rounded bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="cursor-pointer w-full px-4 py-3 text-sm font-semibold rounded bg-white text-teal-700 hover:bg-gray-100 transition duration-200"
              >
                {result ? result : "Subscribe Now"}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom (Copyright and Policy Links) */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-teal-300 space-y-3 md:space-y-0">
          <p data-aos="fade-up" className="order-2 md:order-1">
            &copy; {new Date().getFullYear()} Excellence School. All rights
            reserved.
          </p>
          <div data-aos="fade-up" className="flex space-x-4 order-1 md:order-2">
            <a href="#" className="hover:text-white transition duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition duration-200">
              Website Builder
            </a>
          </div>
        </div>
      </div>

      {popup.show && <AutoClosePopup popup={popup} setPopup={setPopup} />}
    </footer>
  );
};

export default Footer;
