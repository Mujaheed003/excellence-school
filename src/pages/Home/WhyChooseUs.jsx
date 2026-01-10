// WhyChooseUs.jsx
import {
  FaBookOpen,
  FaUserGraduate,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";

const featureItems = [
  {
    icon: FaBookOpen,
    title: "Academic Excellence",
    text: "Comprehensive curriculum designed to challenge and inspire students.",
  },
  {
    icon: FaUserGraduate,
    title: "Expert Faculty",
    text: "Dedicated teachers with advanced degrees and passion for teaching.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation Focus",
    text: "Modern teaching methods and technology integration.",
  },
  {
    icon: FaHeart,
    title: "Holistic Development",
    text: "Sports, arts, and extracurricular activities for growth.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="whyChooseUs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div data-aos="fade-left" className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 inline-block pb-1">
            <span className="border-b-3 border-teal-500 ">Why</span> Choose Us
          </h2>
        </div>

        {/* Responsive Grid for Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
          {featureItems.map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-teal-50 bg-radial-[at_25%_25%] from-teal-500 to-teal-700 transition-all duration-1000 hover:rotate-360">
                <item.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
