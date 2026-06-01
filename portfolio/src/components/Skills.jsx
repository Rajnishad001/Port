import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Express", icon: <SiExpress size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white px-6"
    >
      <motion.div
      initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-8
              flex
              flex-col
              items-center
              gap-4
              hover:border-cyan-500
              hover:-translate-y-2
              transition
            "
            >
              <div className="text-cyan-400">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
            </div>
          ))}

        </div>
      </motion.div>
    </section>
  );
};

export default Skills;