import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const testimonials = [
  {
    id: 1,
    quote:
      "The faculty is dedicated and truly cares about the growth of every student. The focus on character development is what sets this school apart.",
    author: "Sarah Johnson",
    title: "Parent of Class of 2027",
    avatar: "../src/assets/testimonial_img_1.jpg",
  },
  {
    id: 2,
    quote:
      "The holistic approach to education here is remarkable. My daughter has excelled not only academically but also in sports and arts. The supportive environment has helped her discover her true potential.",
    author: "Michael Chen",
    title: "Parent of Class of 2025",
    avatar: "../src/assets/testimonial_img_2.jpg",
  },
  {
    id: 3,
    quote:
      "My son's confidence in Math and Science has soared since joining this school. The innovative teaching methods keep him engaged and excited to learn.",
    author: "David Lee",
    title: "Parent of Class of 2024",
    avatar: "../src/assets/testimonial_img_3.jpg",
  },
];

const TestimonialsSlider = () => {
  return (
    <section
      data-aos="zoom-in"
      className="bg-[#191d2d] py-16 md:py-24 min-h-[70vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Header */}
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-2">
            What Parents Say
          </h2>
          <p className="text-gray-400 text-lg">
            Hear from our community about their experiences
          </p>
        </div>

        <Splide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            interval: 5000,
            speed: 800,
            arrows: true,
            pagination: true, // ✅ dots enabled
            pauseOnHover: false,
          }}
        >
          {testimonials.map((item) => (
            <SplideSlide key={item.id}>
              <div className="text-center text-white max-w-4xl mx-auto px-4">
                <p className="text-5xl text-teal-500 mb-6">❝</p>

                <p className="text-xl md:text-2xl mb-8 tracking-wider leading-10">
                  {item.quote}
                </p>

                <div className="flex justify-center items-center gap-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-500 mb-3">
                    <img
                      loading="lazy"
                      src={item.avatar}
                      alt={item.author}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-left">
                    <p className="font-bold tracking-widest">{item.author}</p>
                    <p className="text-sm text-gray-400">{item.title}</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
