import { FaArrowRight } from "react-icons/fa";
import Button from "../../ui/Button";

export default function BackgroundVideo() {
  function getAcademicSession() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    // October 9
    const startYear = month >= 9 ? year : year - 1;
    const endYear = startYear + 1;

    // return `October, ${startYear} - August, ${endYear}`;
    return `${startYear} - ${endYear}`;
  }

  return (
    <section
      data-aos="zoom-out"
      className="py-12 md:py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12"
    >
      <div className="relative w-full min-h-[400px] rounded-xl md:rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover bg-cover bg-center bg-fixed"
        >
          <source src="../public/home_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay (optional) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content on top */}
        {/* Content Layer (Text and Button) */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 md:p-16 text-white">
          {/* Text Group */}
          <div
            data-aos="fade-right"
            className="mb-6 md:mb-0 max-w-lg text-center md:text-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Ready to Join?
            </h2>
            <p className="text-base sm:text-lg mt-2 text-gray-200">
              Admissions open for {getAcademicSession()} academic year
            </p>
          </div>

          {/* Apply Now Button */}
          <Button aos="fade-left" to="/admissions" type="primary">
            <span>Apply Now</span>
            <FaArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
