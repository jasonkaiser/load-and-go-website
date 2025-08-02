import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from "@/components/Navbar";
import Main from './components/Main';
import About from './components/About';
import Special from './components/Special';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {


  return (
    <>

  
      <Main/>
      <About/>
      <Special/>
      <Services/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
