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
import ServiceG from "./pages/ServiceG";
import RuleA from "./pages/RuleA";
import RuleB from "./pages/RuleB";
import RuleC from "./pages/RuleC";

import ScrollToTop from "./components/utils/ScrollToTop";
import RouteTransitionLoader from "./components/utils/RouteTransitions";
import Intro from "./components/main/Intro";
import CookieBanner from "./components/utils/CookieBanner";
import SEO from "./components/utils/SEO";

function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const introShown = sessionStorage.getItem("introShown");
      if (!introShown) {
        setShowIntro(true);
      }
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem("introShown", "true");
    }
  };

  return (
    <>
      <CookieBanner />
      <Router>
        <ScrollToTop />
        <RouteTransitionLoader />
        <Navbar />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SEO
                  title="Load & Go - Professionelle Umzugsservice & Transport in Deutschland"
                  description="Load & Go bietet professionelle Umzugsdienstleistungen, Transporte, Verpackungsservice und Möbelentsorgung. Ihr zuverlässiger Partner für einen stressfreien Umzug in Deutschland."
                  canonical="https://load-go-transport.com/"
                  keywords="Umzug, Transport, Umzugsservice, Möbeltransport, Verpackungsservice, Umzugsunternehmen, Deutschland, professionell"
                />
                <Main introComplete={!showIntro} />
                <About />
                <Special />
                <Services />
                <Contact />
              </>
            }
          />
          
          <Route 
            path="/services/small-large-moves" 
            element={
              <>
                <SEO
                  title="Kleine & Große Umzüge - Load & Go Umzugsservice"
                  description="Professionelle kleine und große Umzüge von Load & Go. Zuverlässiger Service für Privat- und Geschäftskunden in ganz Deutschland."
                  canonical="https://load-go-transport.com/services/small-large-moves"
                  keywords="kleine Umzüge, große Umzüge, Privatumzug, Geschäftsumzug, Load & Go"
                />
                <ServiceA />
              </>
            } 
          />
          
          <Route 
            path="/services/packing-service" 
            element={
              <>
                <SEO
                  title="Professioneller Verpackungsservice - Load & Go"
                  description="Sicherer Verpackungsservice von Load & Go. Professionelles Verpacken Ihrer Gegenstände für den Transport."
                  canonical="https://load-go-transport.com/services/packing-service"
                  keywords="Verpackungsservice, professionelles Verpacken, Umzugsverpackung, Load & Go"
                />
                <ServiceB />
              </>
            } 
          />
          
          <Route 
            path="/services/furniture-ad" 
            element={
              <>
                <SEO
                  title="Möbeltransport & Aufbau - Load & Go Service"
                  description="Professioneller Möbeltransport und Aufbauservice von Load & Go. Sicherer Transport und fachgerechter Aufbau Ihrer Möbel."
                  canonical="https://load-go-transport.com/services/furniture-ad"
                  keywords="Möbeltransport, Möbelaufbau, Möbelservice, Load & Go Transport"
                />
                <ServiceC />
              </>
            } 
          />
          
          <Route 
            path="/services/express-moves" 
            element={
              <>
                <SEO
                  title="Express Umzüge - Schneller Umzugsservice Load & Go"
                  description="Express Umzüge von Load & Go. Schneller und zuverlässiger Umzugsservice für eilige Termine in Deutschland."
                  canonical="https://load-go-transport.com/services/express-moves"
                  keywords="Express Umzug, schneller Umzug, Eilumzug, Load & Go Express"
                />
                <ServiceD />
              </>
            } 
          />
          
          <Route 
            path="/services/furniture-disposal" 
            element={
              <>
                <SEO
                  title="Möbelentsorgung Service - Load & Go"
                  description="Professionelle Möbelentsorgung von Load & Go. Umweltfreundliche Entsorgung Ihrer alten Möbel und Gegenstände."
                  canonical="https://load-go-transport.com/services/furniture-disposal"
                  keywords="Möbelentsorgung, Entrümpelung, Entsorgungsservice, Load & Go"
                />
                <ServiceE />
              </>
            } 
          />
          
          <Route 
            path="/services/personal-contact" 
            element={
              <>
                <SEO
                  title="Persönlicher Kontakt - Load & Go Beratung"
                  description="Persönliche Beratung und Kontakt bei Load & Go. Individuelle Umzugslösungen für Ihre Bedürfnisse."
                  canonical="https://load-go-transport.com/services/personal-contact"
                  keywords="persönliche Beratung, Umzugsberatung, Kontakt Load & Go"
                />
                <ServiceF />
              </>
            } 
          />
          
          <Route 
            path="/services/cleaning-service" 
            element={
              <>
                <SEO
                  title="Reinigungsservice - Load & Go Umzugsreinigung"
                  description="Professioneller Reinigungsservice von Load & Go. Umzugsreinigung für alte und neue Wohnung."
                  canonical="https://load-go-transport.com/services/cleaning-service"
                  keywords="Reinigungsservice, Umzugsreinigung, Endreinigung, Load & Go"
                />
                <ServiceG />
              </>
            } 
          />
          
          <Route 
            path="/rulesA" 
            element={
              <>
                <SEO
                  title="Geschäftsbedingungen - Load & Go"
                  description="Allgemeine Geschäftsbedingungen von Load & Go Umzugsservice."
                  canonical="https://load-go-transport.com/rulesA"
                  robots="noindex, follow"
                />
                <RuleA />
              </>
            } 
          />
          
          <Route 
            path="/rulesB" 
            element={
              <>
                <SEO
                  title="Datenschutz - Load & Go"
                  description="Datenschutzerklärung von Load & Go Umzugsservice."
                  canonical="https://load-go-transport.com/rulesB"
                  robots="noindex, follow"
                />
                <RuleB />
              </>
            } 
          />
          
          <Route 
            path="/rulesC" 
            element={
              <>
                <SEO
                  title="Impressum - Load & Go"
                  description="Impressum von Load & Go Umzugsservice."
                  canonical="https://load-go-transport.com/rulesC"
                  robots="noindex, follow"
                />
                <RuleC />
              </>
            } 
          />
        </Routes>

        <Footer />

        {showIntro && <Intro onComplete={handleIntroComplete} />}
      </Router>
    </>
  );
}

export default App;