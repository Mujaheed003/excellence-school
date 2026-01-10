import { FaBullseye, FaEye } from "react-icons/fa";

// Mission & Vision Section Component
const MissionVisionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Two-Column Grid: Stacks vertically on small screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Mission Card */}
          <div
            data-aos="fade-left"
            className="p-8 md:p-10 rounded-lg bg-yellow-50"
          >
            <div className="flex items-center space-x-4 mb-6">
              {/* Orange Icon Circle */}
              <div className="p-4 bg-orange-500 rounded-2xl text-orange-100 transition duration-300 ease-in-out group hover:rotate-15">
                <FaBullseye className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide a comprehensive, student-centered education that
              fosters academic excellence, critical thinking, and strong ethical
              values, essential for lifelong learning and development.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We are committed to nurturing students to become responsible
              global citizens who contribute proactively to society while
              pursuing their passions and achieving their full potential.
            </p>
          </div>

          {/* Vision Card */}
          <div
            data-aos="fade-right"
            className="bg-blue-50 p-8 md:p-10 rounded-lg "
          >
            <div className="flex items-center space-x-4 mb-6">
              {/* Blue Icon Circle */}
              <div className="p-4 text-blue-100 rounded-2xl bg-blue-600 transition duration-300 ease-in-out group hover:-rotate-15">
                <FaEye className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be recognized as a leading educational institution that
              inspires innovation, cultivates creativity, and empowers students
              to transform learning into action and success in the changing
              world.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We envision a future where our graduates make meaningful
              contributions to the world, guided by the values and knowledge
              they gained during their time with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
