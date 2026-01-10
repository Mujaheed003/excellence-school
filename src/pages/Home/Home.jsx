import React from "react";
import HeroSection from ".//HeroSection";
import AutoScrollSlider from ".//AutoScrollSlider";
import WhyChooseUs from "./WhyChooseUs";
import BuildingFutures from "./BuildingFutures";
import TestimonialsSlider from "./TestimonialsSlider";
import LatestUpdates from "./LatestUpdates";
import CtaBanner from "./CtaBanner";
// --- Main Component Export ---
import BackgroundVideo from "./BackgroundVideo";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AutoScrollSlider />
      <WhyChooseUs />
      <BuildingFutures />
      <TestimonialsSlider />
      <LatestUpdates />
      {/* <CtaBanner /> */}
      <BackgroundVideo />
    </>
  );
};

export default Home;
