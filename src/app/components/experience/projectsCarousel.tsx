"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./projectsCarousel.css"; // Import the CSS file

interface Project {
  title: string;
  description: string;
  technologies?: string[];
}

const projects: Project[] = [
  {
    title: "Data Extraction Pipeline",
    description:
      "Developed a Python pipeline that extract data from Outlook and Excel, saving it to a database. This project saves up to 320 hours of manual work per month. To further improve the process, a Go API was created to ingest the data into the database.",
    technologies: ["Python", "Pandas", "SQL", "Go"],
  },
  {
    title: "Data Migration Tool",
    description:
      "Developed a high-performance Go data extraction tool handling over 1M entries per request from a legacy system. Implemented a custom caching solution that reduced update downtime from minutes to under 10 seconds, significantly improving data freshness and system reliability.",
    technologies: ["Go", "SQL"],
  },
  {
    title: "Internal Observability Dashboard - With Grafana",
    description:
      "Developed a Go microservice for real-time process monitoring and health checks across multiple deployed applications. The service provides centralized status verification endpoints, enabling easy monitoring and troubleshooting of distributed systems.",
    technologies: ["Go", "Grafana", "SQL"],
  },
];

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <button
          className="carousel-button prev"
          onClick={prevSlide}
          aria-label="Previous project"
        >
          ←
        </button>
        <div className="carousel-wrapper">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="project-card"
              transition={{
                x: { type: "tween", duration: 0.3 },
                opacity: { duration: 0.2 },
              }}
            >
              <h2>{projects[currentIndex].title}</h2>
              <p>{projects[currentIndex].description}</p>
              <div className="technologies">
                {projects[currentIndex].technologies?.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="tech-tag"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          className="carousel-button next"
          onClick={nextSlide}
          aria-label="Next project"
        >
          →
        </button>
      </div>
      <div className="carousel-dots">
        {projects.map((_, index) => (
          <motion.span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
}
