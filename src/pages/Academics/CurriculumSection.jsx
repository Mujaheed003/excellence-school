import {
  FaBookOpen,
  FaGlobeAmericas,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const curriculumItems = [
  {
    icon: FaBookOpen,
    title: "Comprehensive Curriculum",
    text: "A structured, modern curriculum that balances foundational theory with creative application.",
    color: "#22c55e", // green
  },
  {
    icon: FaGlobeAmericas,
    title: "Global Perspective",
    text: "Fostering cross-cultural understanding and learning every day.",
    color: "#3b82f6", // blue
  },
  {
    icon: FaLightbulb,
    title: "Innovative Teaching",
    text: "Utilizing modern pedagogical methods to engage and inspire students.",
    color: "#f97316", // orange
  },
  {
    icon: FaUsers,
    title: "Collaborative Learning",
    text: "Projects based learning that promotes teamwork and creative problem solving.",
    color: "#14b8a6", // teal
  },
];

const CurriculumSection = () => {
  return (
    <section className="py-16 md:py-24 bg-teal-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 data-aos="fade-left" className="section_heading">
          Our Curriculum Approach
        </h2>
        <p data-aos="fade-right" className="section_sub_heading">
          A holistic educational framework that prepares students for success in
          an ever-changing world
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {curriculumItems.map((item, index) => (
            <div
              data-aos="fade-down"
              key={index}
              className="p-6 md:p-8 bg-white rounded-lg border border-gray-100 shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.01]"
            >
              {/* 🔥 Blinking Icon */}
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center animate-blink hover:scale-110 transition duration-300"
                style={{
                  "--blink-color": item.color,
                }}
              >
                <item.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
