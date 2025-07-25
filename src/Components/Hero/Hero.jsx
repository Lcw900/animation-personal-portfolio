import React from "react";
import "./Hero.css";
import { easeInOut, motion, scale } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Hero = () => {
  const fadeInup = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="heroContainer">
        <motion.div
          className="heroContent"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="heroBadge">
            <span>👋 Hello, I am </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInup}
            whileHover={{ scale: 1.02 }}
          >
            ALCINAY
          </motion.h1>
          <motion.h2 className="heroSubTitle">
            Creative Developer & Designer
          </motion.h2>
          <motion.p className="heroDescription">
            I craft beautiful digital experiences that combine stunning design
            with powerful functionality. Specializing in modern web applications
            and interactive user interfaces.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="/LindseyAlcinayResume.pdf"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/Lcw900" target="_blank">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lindsey-alcinay-63571354/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a href="https://x.com/LindsoPrograms" target="_blank">
              <i className="fab fa-twitter"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "Lindsey Alcinay",
  origin: "🌍 Middlesex County, NJ",
  role: "Front-End Developer",
  stack: {
    languages: ["JavaScript", "HTML", "CSS", "SQL"],
    frameworks & tools: ["React", "Github", "Material Ui", "Boostrap", "Vercel"],
  },
  traits: [
    "pixel-perfectionist",
    "API whisperer",
    "dark mode advocate",
    "terminal aesthetic enthusiast",
  ],
  missionStatement:
    "Turning ideas into interfaces and bugs into feature",
  availability: "Available for hire",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">
                {" "}
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
