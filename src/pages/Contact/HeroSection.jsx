// Header Section Component (Empowering Minds)
const HeroSection = () => {
  return (
    <div className="relative h-[50vh] md:h-[60vh] flex items-center pt-20 z-0">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/contact_bck_img.webp')" }} // Use the image with children studying
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Text Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center text-white  w-full"
      >
        <p className="text-sm font-semibold italic mb-2 opacity-80 text-white tracking-widest bg-teal-500 inline-block px-3 py-1 rounded-full  uppercase">
          Get In Touch
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto ">
          We're here to answer your questions and help you get started.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
