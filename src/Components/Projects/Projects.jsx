import { animate, motion } from "framer-motion";
import "./Projects.css";
import ai from "/ai-saas.png";
import social from "/social-media.png";
import stopwatch from "/stopwatch.png";

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
export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInup}
        initial="intial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInup}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className=" project-image"
            style={{ backgroundImage: `url(${ai})` }}
            whileHover={{ scale: 1.05, tansition: { duration: 0.2 } }}
          />
          <h3>AI SaaS Platform</h3>
          <p>
            A modern Saas platform built with Next.js and OpenAI integration,
            featuring real-time AI-Powered content gerneration and analytics.
          </p>
          <div className="project-tech">
            <span style={{ padding: "10px 10px 10px 10px " }}>ReactJS</span>
            <span style={{ padding: "10px 10px 10px 10px " }}>OpenAI</span>
            <span style={{ padding: "10px 10px 10px 10px " }}>TailwindCSS</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInup}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: `url(${stopwatch})` }}
            img
            src={ai}
            alt="ai"
            whileHover={{ scale: 1.05, tansition: { duration: 0.2 } }}
          />
          <h3>Productivity Timer</h3>
          <p>
            A sleek productivity timer application with customizable work
            sessions, statistics tracking, and dark mode support.
          </p>
          <div className="project-tech">
            <span style={{ padding: "10px 10px 10px 10px " }}>ReactJS</span>
            <span style={{ padding: "10px 10px 10px 10px " }}>TypeScript</span>
            <span style={{ padding: "10px 10px 10px 10px " }}>TailwindCSS</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInup}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className=" project-image"
            style={{ backgroundImage: `url(${social})` }}
            whileHover={{ scale: 1.05, tansition: { duration: 0.2 } }}
          />
          <h3>Social Media Dashboard</h3>
          <p>
            A comprehensive social media management dashboard with analytics,
            scheduling, and engagement tracking features.
          </p>
          <div className="project-tech">
            <span style={{ padding: "10px 10px 10px 10px " }}>ReactJS</span>
            <span style={{ padding: "10px 10px 10px 10px " }}>Node.JS</span>
            <span style={{ padding: "10px 10px 10px 10px " }}>MongoDB</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
