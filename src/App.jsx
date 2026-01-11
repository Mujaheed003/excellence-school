import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Sections from "./pages/Sections/Sections";
import Academics from "./pages/Academics/Academics";
import Admissions from "./pages/Admissions/Admissions";
import Gallery from "./pages/Gallery/Gallery";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import PageNotFound from "./ui/PageNotFound";
import ScrollToTop from "./ui/ScrollToTop";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      easing: "ease-in-out",
      once: true, // animate only once
      offset: 100, // trigger distance
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news&events" element={<News />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
