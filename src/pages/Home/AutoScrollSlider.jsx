import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

// Auto-Scroll
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

function AutoScrollSlider() {
  return (
    <div className="bg-gray-900 text-white py-3">
      <Splide
        options={{
          type: "loop",
          perPage: 4,
          focus: "center",
          pagination: false,
          arrows: false,
          drag: "free",
          autoScroll: {
            speed: 0.3,
          },
          breakpoints: {
            1300: { perPage: 4 },
            1100: { perPage: 3 },
            900: { perPage: 2 },
            600: { perPage: 1 },
          },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <p className="flex gap-4 items-center tracking-widest text-sm">
            98% College Acceptance{" "}
            <span className="h-2 w-2 rounded-full bg-teal-500 flex"></span>
          </p>
        </SplideSlide>
        <SplideSlide>
          <p className="flex gap-4 items-center tracking-widest text-sm">
            50+ Faculty Members{" "}
            <span className="h-2 w-2 rounded-full bg-teal-500 flex"></span>
          </p>
        </SplideSlide>
        <SplideSlide>
          <p className="flex gap-4 items-center tracking-widest text-sm">
            25 Years Excellence{" "}
            <span className="h-2 w-2 rounded-full bg-teal-500 flex"></span>
          </p>
        </SplideSlide>
        <SplideSlide>
          <p className="flex gap-4 items-center tracking-widest text-sm">
            Award-Winning Programs{" "}
            <span className="h-2 w-2 rounded-full bg-teal-500 flex "></span>
          </p>
        </SplideSlide>
        <SplideSlide>
          <p className="flex gap-4 items-center tracking-widest text-sm">
            State-of-the-Art Facilities{" "}
            <span className="h-2 w-2 rounded-full bg-teal-500 flex"></span>
          </p>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default AutoScrollSlider;
