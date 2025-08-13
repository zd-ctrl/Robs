import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import Testimonials from "./pages/Testimonials";
import Services from "./pages/Services";
import WhyPolishedConcrete from "./pages/WhyPolishedConcrete";
import Process from "./pages/Process";
import Locations from "./pages/Locations";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Commercial from "./pages/Commercial";
import Residential from "./pages/Residential";
import ServiceDetail from "./pages/ServiceDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Robs">
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-polished-concrete" element={<WhyPolishedConcrete />} />
            <Route path="/process" element={<Process />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
