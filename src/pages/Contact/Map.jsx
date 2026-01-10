import React from "react";
import { FaMapMarkerAlt, FaParking, FaBus } from "react-icons/fa";

const Map = () => {
  return (
    <section className="py-20 bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 data-aos="fade-left" className="section_heading">
            Find Us on the Map
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Visit our campus and experience our learning environment firsthand
          </p>
        </div>

        {/* Map Container */}
        <div
          data-aos="fade-up"
          className="relative rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-white"
        >
          {/* Mock Map Background (Replace src with your actual Google Maps Embed API) */}
          <div className="h-[450px] w-full bg-blue-50 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.422199126132!2d-73.98751412421685!3d40.75889497138676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25850701bc97d%3A0x2649b3806a644e54!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full border-0 grayscale-[20%] contrast-[1.1]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Floating Location Card (Top Left) */}
            <div className="absolute top-6 left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block max-w-[220px]">
              <h4 className="font-bold text-gray-900 text-sm">Times Square</h4>
              <p className="text-[10px] text-gray-400 mt-1">
                Manhattan, NY 10036
              </p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-orange-400 text-xs font-bold italic">
                  4.7
                </span>
                <div className="flex text-orange-400 text-[8px]">★★★★★</div>
              </div>
              <button className="text-blue-500 text-[10px] font-bold mt-2 hover:underline">
                View larger map
              </button>
            </div>
          </div>

          {/* Map Footer Bar */}
          <div className="bg-[#4ca091] p-6 md:p-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Address</h5>
                  <p className="text-xs text-white/80">
                    123 Education Street, Springfield, ST 12345
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                  <FaParking />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Parking</h5>
                  <p className="text-xs text-white/80">
                    Free visitor parking available on campus
                  </p>
                </div>
              </div>

              {/* Transit */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                  <FaBus />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Public Transit</h5>
                  <p className="text-xs text-white/80">
                    Bus routes 12, 45, and 78 stop nearby
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
