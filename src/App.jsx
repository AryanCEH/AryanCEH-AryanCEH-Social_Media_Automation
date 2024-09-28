// src/App.jsx
import React from "react";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Features from "./components/features.jsx";
import Demo from "./components/demo.jsx";
import Testimonials from "./components/testimonials.jsx";
import Pricing from "./components/pricing.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
