import React, { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import Services from "./components/UI/Services";
import About from "./components/UI/About";
import Destination from "./components/UI/Destination";
import Blog from "./components/UI/Blog";
import Testimonial from "./components/UI/Testimonial";
import Newsletter from "./components/UI/Newsletter";
import ContactForm from "./components/UI/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    theme === "" ? setTheme("light-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Services />
      <About />
      <Destination/>
      <Blog />
      <ContactForm />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
