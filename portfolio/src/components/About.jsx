import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-900 text-white"
    >
      < motion.div 
       initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-8 text-center">
          I am a BCA graduate and passionate MERN Stack Developer from
          Ayodhya, Uttar Pradesh. I enjoy building modern web
          applications and continuously improving my skills in
          React.js, Node.js, Express.js and MongoDB.
        </p>

      </motion.div>
    </section>
  );
};

export default About;