import React from "react";
import {
  FaTag,
  FaHandHoldingHeart,
  FaCalendarAlt,
  FaCheck,
} from "react-icons/fa";

const tuitionData = [
  {
    level: "Primary School",
    grades: "Grades 1-5",
    price: "$8,500",
    regFee: "$500",
    color: "text-blue-600",
    bgColor: "bg-blue-600",
    features: [
      "All textbooks included",
      "School supplies",
      "Basic sports activities",
      "Library access",
    ],
    isPopular: false,
  },
  {
    level: "Middle School",
    grades: "Grades 6-8",
    price: "$10,500",
    regFee: "$600",
    color: "text-purple-600",
    bgColor: "bg-purple-600",
    features: [
      "Digital learning materials",
      "Lab equipment",
      "Sports & clubs",
      "College counseling prep",
    ],
    isPopular: true,
  },
  {
    level: "High School",
    grades: "Grades 9-12",
    price: "$12,500",
    regFee: "$750",
    color: "text-teal-600",
    bgColor: "bg-teal-600",
    features: [
      "AP course materials",
      "Advanced lab access",
      "College counseling",
      "Career guidance",
    ],
    isPopular: false,
  },
];

const TuitionFees = () => {
  return (
    <section className="py-16 md:py-24 bg-teal-50">
      <div className="max-w-7xl mx-auto px-12 lg:24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 data-aos="fade-left" className="section_heading">
            Tuition & Fees
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Transparent pricing with exceptional value for quality education
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-center">
          {tuitionData.map((item, idx) => (
            <div
              data-aos="fade-up"
              key={idx}
              className={`relative bg-white p-8 rounded-3xl shadow-lg border-2 transition-transform duration-300 hover:scale-105
                ${
                  item.isPopular
                    ? "border-teal-500 ring-4 ring-teal-500/5 py-12"
                    : "border-transparent"
                }`}
            >
              {/* "Most Popular" Badge */}
              {item.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              {/* Icon & Title */}
              <div className="flex flex-col items-center text-center mb-8">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg mb-6 shadow-sm ${item.bgColor}`}
                >
                  <FaTag />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">
                  {item.level}
                </h3>
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide mt-1">
                  {item.grades}
                </p>
              </div>

              {/* Pricing Display */}
              <div className="text-center mb-8">
                <div className="text-4xl md:text-5xl font-semibold text-gray-900">
                  {item.price}
                </div>
                <div className="text-gray-400 text-sm mt-1">per year</div>
                <div className="mt-4 pt-4 border-t border-gray-100 text-sm font-medium text-gray-600">
                  Registration Fee:{" "}
                  <span className="text-gray-900">{item.regFee}</span>
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-4">
                {item.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-[10px]">
                      <FaCheck />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Financial Aid */}
          <div
            data-aos="fade-right"
            className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex gap-6 items-start transition-shadow hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center text-xl flex-shrink-0">
              <FaHandHoldingHeart />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Financial Aid
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                We offer need-based financial assistance to qualified families.
                Scholarships are available for academic excellence, athletics,
                and arts.
              </p>
              <button className="text-teal-600 font-bold text-sm flex items-center gap-2 hover:underline">
                Learn More <span className="text-xs">→</span>
              </button>
            </div>
          </div>

          {/* Payment Plans */}
          <div
            data-aos="fade-left"
            className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex gap-6 items-start transition-shadow hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center text-xl flex-shrink-0">
              <FaCalendarAlt />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Payment Plans
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Flexible payment options available including monthly, quarterly,
                and annual plans. Early payment discounts offered.
              </p>
              <button className="text-teal-600 font-bold text-sm flex items-center gap-2 hover:underline">
                View Options <span className="text-xs">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionFees;
