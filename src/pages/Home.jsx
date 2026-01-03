import React from "react";
import Banner from "../components/HOME/Banner";
import Hero from "../components/HOME/Hero";
import Features from "../components/HOME/Features";
import Testimonial from "../components/HOME/Testimonial";
import CallToAction from "../components/HOME/CallToAction";
import Footer from "../components/HOME/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
