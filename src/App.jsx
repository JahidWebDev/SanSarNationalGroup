import React from "react";
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Construction from "./Component/Construction/Construction";
import AboutSection from "./Component/AboutSection/AboutSection";
import ProductSection from "./Component/ProductSection/ProductSection";
import TeamSection from "./Component/TeamSection/TeamSection";
import CertificatesSection from "./Component/CertificatesSection/CertificatesSection";
import ContactSection from "./Component/ContactSection/ContactSection";

function App() {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div >
      {/* Pass scrollToSection to Navbar */}
     <section id="home">
       <Navbar scrollToSection={scrollToSection} />

     </section>
      {/* Home Section */}
      <section id="home">
        <Construction />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Product Section */}
      <section id="product">
        <ProductSection />
      </section>

      {/* Team Section */}
      <section id="team">
        <TeamSection />
      </section>

      {/* Certificate Section */}
      <section id="certificate">
        <CertificatesSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
