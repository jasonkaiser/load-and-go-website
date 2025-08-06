import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "@/components/main/Navbar";
import Main from "./components/main/Main";
import About from "./components/main/About";
import Special from "./components/main/Special";
import Services from "./components/main/Services";
import Contact from "./components/main/Contact";
import Footer from "./components/main/Footer";
import ServiceA from "./pages/ServiceA";
import ServiceB from "./pages/ServiceB";
import ServiceC from "./pages/ServiceC";
import ServiceD from "./pages/ServiceD";
import ServiceE from "./pages/ServiceE";
import ServiceF from "./pages/ServiceF";
import ScrollToTop from "./components/utils/ScrollToTop";
import RouteTransitionLoader from "./components/utils/RouteTransitions";
import Intro from "./components/main/Intro";

function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
 
    const introShown = sessionStorage.getItem("introShown");

    if (!introShown) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
   
    sessionStorage.setItem("introShown", "true");
  };

  return (
    <Router>
      <ScrollToTop />
      <RouteTransitionLoader />

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main introComplete={!showIntro} />
              <About />
              <Special />
              <Services />
              <Contact />
            </>
          }
        />
        <Route path="/services/small-large-moves" element={<ServiceA />} />
        <Route path="/services/packing-service" element={<ServiceB />} />
        <Route path="/services/furniture-ad" element={<ServiceC />} />
        <Route path="/services/express-moves" element={<ServiceD />} />
        <Route path="/services/furniture-disposal" element={<ServiceE />} />
        <Route path="/services/personal-contact" element={<ServiceF />} />
      </Routes>
      <Footer />

   
      {showIntro && <Intro onComplete={handleIntroComplete} />}
    </Router>
  );
}

export default App;
