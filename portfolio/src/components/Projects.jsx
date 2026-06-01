import React from "react";
import { projects } from "../data/portfolioData";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}

              className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition"

            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-xl mb-5"
              />
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-cyan-500 px-4 py-2 rounded-lg"
                >
                  GitHub
                </a>

                {/* <a
                  href={project.demo}
                  className="border border-cyan-500 px-4 py-2 rounded-lg"
                >
                  Demo
                </a> */}
              </div>
            </div>
          ))}

        </div>
      </motion.div>
    </section>
  );
};

export default Projects;