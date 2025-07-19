import "./App.css";
import Hero from "./Components/Hero/Hero";
import { Projects } from "./Components/Projects/Projects";
import { ContactMe } from "./Components/ContactMe/ContactMe";
import NavBar from "./Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { animate, motion } from "framer-motion";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <>
      <div className={`app ${isLoaded ? "loaded" : ""}`}>
        <NavBar />
        <Hero />
        <Projects />
        <ContactMe />

        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          &copy; 2025 ALCINAY. All rights reserved.
        </motion.footer>
      </div>
    </>
  );
}

export default App;
