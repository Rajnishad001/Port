import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import profile from "../assets/images/profile.jpg";
import { FaDownload } from "react-icons/fa";


const Hero = () => {
  return (
    <section className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden">
      
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full top-20 left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Raj Kumar Nishad
          </h1>


      {/* es part(div) ko hatane se open to work wala tag hat jayega */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-green-500/10 border border-green-500 text-green-400">
  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
  Open To Work
</div>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-4">
            MERN Stack Developer
          </h2>

          <p className="text-gray-400 mt-6 max-w-lg">
            Passionate Full Stack Developer focused on building modern,
            scalable and responsive web applications using React,
            Node.js, Express.js and MongoDB.
          </p>

          <div className="flex gap-4 mt-8 ">

            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 justify-center bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold cursor-pointer"
            >

             <FaDownload  />Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 text-white px-6 py-3 rounded-xl"
            >
              Contact
            </a>

          </div>

          <div className="flex gap-5 mt-8">

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-3xl text-white hover:text-cyan-400" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-3xl text-white hover:text-cyan-400" />
            </a>

          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src={profile}
              alt="Raj Kumar Nishad"
              className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] object-cover object-top rounded-full border-4 border-cyan-500 shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;