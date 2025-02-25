import React from "react";
import HeroSection from "./landingPage/HeroSection";
import About from "./landingPage/About";
import Navigation from "./landingPage/Navigation";
import Features from "./landingPage/Features";
import Story from "./landingPage/Story";
import Contact from "./landingPage/Contact";
import Footer from "./landingPage/Footer";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navigation />
      <div className="bg-[url('/img/2.jpg')] bg-cover bg-center">
        <HeroSection />
        <About />
      </div>
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
