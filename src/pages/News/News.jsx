import React from "react";
import HeroSection from "./HeroSection";
import LatestNews from "./LatestNews";
import UpcomingEvents from "./UpcomingEvents";
import Newsletter from "./Newsletter";

const News = () => {
  return (
    <>
      <HeroSection />
      <LatestNews />
      <UpcomingEvents />
      <Newsletter />
    </>
  );
};

export default News;
