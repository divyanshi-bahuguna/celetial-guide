import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import ServicesGrid from "../components/ServicesGrid.jsx";
import FestivalsSection from "../components/FestivalsSection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/Footer.jsx";
import FloatingButtons from "../components/FloatingButtons.jsx";
import ConsultationPopup from "../components/ConsultationPopup.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <FestivalsSection />
      <Testimonials />
      <Footer />
      <FloatingButtons />
      <ConsultationPopup />
    </div>
  );
};

export default Index;

