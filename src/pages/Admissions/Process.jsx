import React, { useState, useEffect } from "react";
import {
  FaFileAlt,
  FaCalendarAlt,
  FaEdit,
  FaEnvelopeOpenText,
  FaCheckCircle,
} from "react-icons/fa";

const admissionSteps = [
  {
    id: 1,
    title: "Submit Application",
    desc: "Complete and submit the online application form with required documents.",
    icon: <FaFileAlt />,
    color: "bg-blue-600",
    shadow: "shadow-blue-500/50",
  },
  {
    id: 2,
    title: "Schedule Visit",
    desc: "Book a campus tour and meet with our admissions team.",
    icon: <FaCalendarAlt />,
    color: "bg-teal-600",
    shadow: "shadow-teal-500/50",
  },
  {
    id: 3,
    title: "Assessment",
    desc: "Complete entrance assessment and interview process.",
    icon: <FaEdit />,
    color: "bg-purple-600",
    shadow: "shadow-purple-500/50",
  },
  {
    id: 4,
    title: "Review & Decision",
    desc: "Receive admission decision within 2-3 weeks.",
    icon: <FaEnvelopeOpenText />,
    color: "bg-orange-600",
    shadow: "shadow-orange-500/50",
  },
  {
    id: 5,
    title: "Enrollment",
    desc: "Complete enrollment and prepare for the new academic year.",
    icon: <FaCheckCircle />,
    color: "bg-green-600",
    shadow: "shadow-green-500/50",
  },
];

const AdmissionProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % admissionSteps.length);
    }, 3000); // 3-second cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 data-aos="fade-left" className="section_heading">
            Admission Process
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            A simple, transparent process to join our learning community
          </p>
        </div>

        {/* Process Container */}
        <div className="relative flex flex-col md:flex-row items-start justify-between gap-4 md:gap-0">
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-gray-200 z-0"></div>

          {admissionSteps.map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                data-aos="fade-up"
                key={step.id}
                className="relative z-10 flex flex-col items-center w-full md:w-1/5"
              >
                {/* Blinking Icon Container */}
                <div
                  className={`
                  w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-8
                  transition-all duration-500 shadow-xl z-20
                  ${step.color}
                  ${
                    isActive
                      ? "animate-pulse scale-110 ring-4 ring-offset-2 ring-opacity-50 " +
                        step.shadow
                      : "opacity-80 scale-100"
                  }
                `}
                >
                  {step.icon}
                </div>

                {/* Scaling Card */}
                <div
                  className={`
                  bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center mx-2
                  transition-all duration-700 ease-out h-full
                  ${
                    isActive
                      ? "scale-110 z-30 ring-2 ring-teal-500/20"
                      : "scale-90 opacity-60"
                  }
                `}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Keyframes for the "Blinking" effect in Tailwind */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1.1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
        .animate-pulse {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default AdmissionProcess;
